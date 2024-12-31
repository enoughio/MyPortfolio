// // import Blog from "@/components/ui/Blogs/Blog";
// import { fatchPages, fetchAllLivePages } from "@/lib/notion";

// export default  async () => {

// //   const posts = await fatchPages();
//   const blog = await fetchAllLivePages();
//   return ( 
//       // <div>{console.log("this is data",posts.results[0].properties.Title.title[0].text.content)}{posts.results[0].properties.Title.title[0].text.content}</div>
//       <main className="">

//       </main>
//    )
// };



import { fetchAllLivePages } from "@/lib/notion";
import Link from "next/link";

export default async function BlogPage() {
  // Fetch all live blog pages
  const livePages = await fetchAllLivePages();

  if (livePages.length === 0) {
    return <div>No live blogs available</div>;
  }

  return (
    <div className="blog-list prose">
      <h1>Live Blogs</h1>
      <div className="cards">
        {livePages.map((page) => {
         //  const title =
         //    page.properties.Title.title[0]?.plain_text || "Untitled";
          const slug = page.properties.slug.rich_text[0]?.plain_text;

          return (
            <Link key={page.id} href={`/blogs/blog/${slug}`}>
              <div className="card">
                {/* <h2>{title}</h2> */}
                <p>{page.properties.Description?.rich_text[0]?.plain_text || "No description available"}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
