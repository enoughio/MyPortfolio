import { Blog } from "@/components/ui/Blogs/Blog";
import { fetchAllLivePages, fetchPages } from "@/lib/notion";
// import Link from "next/link";

export default async function page() {
  const response = await fetchPages();
  const posts = response.results;

  // console.log("this is post", posts[0]);
  console.log("target", posts[0].properties.slug.rich_text[0].text.content );

  // const title = posts[0].properties.Title.rich_text[0].text.content | "Untitled";
  // const Date = posts[0].properties.Date.created_time;
  // const tags = posts[0].properties.Tags.multi_select; // its and array of tags
  // const subHead = posts[0].properties.subhead.rich_text[0].text.content;

  // console.log(posts[0].properties.Title.title[0].plain_text);
  // console.log(posts[0].properties.Tags.multi_select);
  // console.log(posts[0].properties.subhead.rich_text[0].text.content);
  // console.log(posts[0].properties.slug.rich_text[0].text.content);

  

  return (
    <div className="cards flex flex-col gap-4 md:mt-6 ">
      <header className="bg-background p-4 rounded-md shadow-md  md:mb-6">
        <h1 className="text-2xl font-bold mb-2 md:text-4xl py-6">
          Hello World
        </h1>
        <div className="text-gray-300">
          Welcome to my blog! I'm a passionate developer and tech enthusiast,
          diving deep into web development, system design, and problem-solving
          with DSA. When I'm not coding, I'm likely exploring innovative ideas
          for projects, mentoring platforms, or working on creative solutions
          for clients. I enjoy tackling challenges, whether it's creating
          efficient algorithms, building robust web apps with the MERN stack, or
          writing compelling blog posts. Stay tuned for insights, tips, and
          stories from my journey in tech!
        </div>
      </header>

      {posts && posts.map((post) => {
       const date = new Date(post.properties.Date.created_time).toLocaleDateString("en-GB")

        return (
          <Blog
            title={post.properties.Title.rich_text[0].text.content}
            date={date}
            tags={post.properties.Tags.multi_select} // its an array
            slug={post.properties.slug.rich_text[0].text.content}
            subHead={post.properties.subhead.rich_text[0].text.content}
          />
        );
      })}
      { !posts && <div>No live blogs available</div> }
    </div>
  );
}
