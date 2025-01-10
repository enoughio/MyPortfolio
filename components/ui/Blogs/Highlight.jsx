// import  Bloger  from "./Blog";

// const Highlight = () => {
//   return (
//     <div className="w-full mt-10">
//       <h1 className="text-4xl font-bold self-start my-5">MY Latest blogs</h1>
//       <div className="flex flex-col gap-5">

//         <Bloger

//       </div>
//     </div>
//   );
// };

// export default Highlight;




import { fetchPages } from "@/lib/notion";
import { Blog } from "@/components/ui/Blogs/Blog";
export default async function Highlight() {
  const response = await fetchPages(3); // Fetch only the 3 most recent posts
  const posts = response.results;

  return (
    <div className="w-full mt-10">
      <h1 className="text-5xl font-bold text-primary  self-start my-5">My Latest Blogs</h1>
      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <Blog
            key={post.id}
            title={post.properties.Title.title[0].plain_text}
            date={post.properties.Date.created_time}
            tags={post.properties.Tags.multi_select}
            slug={post.properties.slug.rich_text[0].text.content}
            subHead={post.properties.subhead.rich_text[0]}
          />
        ))}
      </div>
    </div>
  );
}