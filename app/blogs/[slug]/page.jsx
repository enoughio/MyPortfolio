import Post from "@/components/ui/Blogs/Post";
import { fetchBySlug, fetchPageBlocks } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { Client } from "@notionhq/client";

const notionClient = new Client({ auth: process.env.NOTION_TOKEN }); // Initialize the Notion client

export default async function Article({ params }) {
  try {
    const renderer = new NotionRenderer({
      client: notionClient,
    });

    const { slug } = await params;
    const post = await fetchBySlug(slug);

    if (!post) {
      return (
        <div>
          <h1>Post not found</h1>
        </div>
      );
    }

    const content = await fetchPageBlocks(post.id);

    renderer.use(hljsPlugin({}));
    renderer.use(bookmarkPlugin(""));

    const htmlContent = await renderer.render(...content);

    console.log(post.properties.Date.created_time);

    return (
      <>
        <Post
          title={post.properties.Title.title[0]?.plain_text}
          date={post.properties.Date.created_time}
          htmlContent={htmlContent}
        />
      </>
    );
  } catch (error) {
    console.error("Error fetching or rendering the post:", error);
    return (
      <div>
        <h1>Error loading the post</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}
