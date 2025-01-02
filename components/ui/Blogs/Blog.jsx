import {Topic} from "@/components/ui/Blogs/Topic";



function Blog () {
  return (
    <div className=" border-2 p-1 md:p-3 w-full overflow-hidden air:bg-red-600">
      <h1 className="text-xl font-bold py-2 ">heading Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, nostrum.</h1>
      <p className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus assumenda accusantium neque, harum fugiat nemo sapiente cupiditate 
      </p>
      <div className="flex gap-1 md:gap-2 flex-wrap  md:flex-nowrap md:flex-row justify-start items-center my-5">
      <Topic topic="Frontend Development" variant="secondary" size="sm" />
      <Topic topic="Backend Development" variant="secondary" size="sm" />
      <Topic topic="Fullstack Development" variant="secondary" size="sm" />
     
      </div>
    </div>
  );
}



export default Blog;