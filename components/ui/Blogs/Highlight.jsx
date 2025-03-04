import { fetchPages } from "@/lib/notion";
import { Blog } from "@/components/ui/Blogs/Blog";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Highlight() { 
  const response = await fetchPages(3); // Fetch only the 3 most recent posts
  const posts = response.results;
  
  return (
    <div className="w-full mt-10">
      <h1 className="text-4xl font-bold text-primary self-start my-5">My Latest Blogs</h1>
      <div className="flex flex-col gap-5">
        {posts && posts.length > 0 ? (
          posts.map((post) => {
            const date = new Date(post.properties.Date.created_time).toLocaleDateString("en-GB");
            return ( 
              <Blog
                key={post.id}
                title={post.properties.Title.rich_text[0].text.content || ""}
                date={date}
                tags={post.properties.Tags.multi_select || []}
                slug={post.properties.slug.rich_text[0]?.text.content || ''}
                subHead={post.properties.subhead.rich_text[0]?.text.content || ''}
              />
            );
          })
        ) : (
          <div>No live blogs available</div>
        )}
      </div>
    </div>
  );
}