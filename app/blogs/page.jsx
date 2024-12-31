// import Blog from "@/components/ui/Blogs/Blog";
import { fatchPages } from "@/lib/notion";

export default  async () => {

  const posts = await fatchPages();
  return ( 
      <div>{console.log("this is data",posts.results[0].properties.Title.title[0].text.content)}{posts.results[0].properties.Title.title[0].text.content}</div>
   )
};
