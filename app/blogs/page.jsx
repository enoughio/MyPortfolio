import { Blog } from "@/components/ui/Blogs/Blog";
import { fetchAllLivePages, fetchPages } from "@/lib/notion";
import Link from "next/link";

export default async function page() {

  const response = await fetchPages();
  const posts = response.results;

  // console.log(posts);

  const title = posts[0].properties.Title.title[0].plain_text | "Untitled";
  const Date = posts[0].properties.Date.created_time;
  const tags = posts[0].properties.Tags.multi_select; // its and array of tags
  const subHead = posts[0].properties.subhead.rich_text[0].text.content;

  // console.log(posts[0].properties.Title.title[0].plain_text);
  // console.log(posts[0].properties.Tags.multi_select);
  // console.log(posts[0].properties.subhead.rich_text[0].text.content);
  // console.log(posts[0].properties.slug.rich_text[0].text.content);

  if (posts.length === 0) {
    return <div>No live blogs available</div>;
  }

  return (
    <div className="w-full">
      <h1 className="text-primary font-6xl ">Live Blogs</h1>

      <div className="cards flex flex-col gap-4 mt-10">
        {posts.map((post) => {

          return (
            <>
              <Blog
                title={post.properties.Title.title[0].plain_text}
                date={post.properties.Date.created_time}
                tags={post.properties.Tags.multi_select} // its an array
                slug={post.properties.slug.rich_text[0].text.content}
                subHead={post.properties.subhead.rich_text[0]}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
