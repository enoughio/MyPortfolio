import { Blog } from "@/components/ui/Blogs/Blog";
import { fetchPages } from "@/lib/notion";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page() {
  const response = await fetchPages();
  const posts = response.results;

  return (
    <div className="cards flex flex-col gap-4 md:mt-6 ">
      <header className="bg-background p-4 rounded-md shadow-md  md:mb-6">
        <h1 className="text-2xl font-bold mb-2 md:text-4xl py-6">
          Hello World
        </h1>
        <div className="text-gray-300">
        Welcome to my blog! I'm a Student, who loves to build thing with code, 
          and i also like to explore new thechnology,
          <div className="w-full h-5"></div>
          and as i am exploring someting i like to write about it. and it just not about technical writing i like to write as usual, 
          and i also want to improve on it further, therefor here this is my blog...
        </div>
      </header>

      {posts && posts.length > 0 ? (
        posts.map((post) => {
          const date = new Date(post.properties.Date.created_time).toLocaleDateString("en-GB");

          return (
            <Blog
              key={post.id}
              title={post.properties.Title.rich_text[0].text.content || ""}
              date={date}
              tags={post.properties.Tags.multi_select}
              slug={post.properties.slug.rich_text[0]?.text.content || ""}
              subHead={post.properties.subhead.rich_text[0]?.text.content || ""}
            />
          );
        })
      ) : (
        <div>No live blogs available</div>
      )}
    </div>
  );
}