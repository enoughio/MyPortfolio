// "use client"


import Project from "../project/project";
import { ProjectsData } from "@/utils/Data";
// import { useState } from "react";

const Projects = () => {

  // const [visibleProjects, setVisibleProjects] = useState(4);
  // const LoadMore = () => {
  //   setVisibleProjects(prev => prev+4);
  // }
  


  return (
    <div className="flex flex-col justify-center items-center  md:pt-8 w-full mt-[13%] gap-10">
      <h1 className="text-6xl font-bold  mb-1 self-start">My Project</h1>
      {/* <div className="flex items-start w-full flex-wrap justify-between  flex-col  md:flex-row gap-2"> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" >
        {/* <Project /> */}
        {
          ProjectsData.slice(0, 4).map((item, index)=>{
              return <Project key={item.id}  data={item} />
          })
        }
      </div>

       {/* {
          visibleProjects < ProjectsData.length && <Button className="w-fit mt-5" onClick={LoadMore}>Load More</Button>
        } */}
      
    </div>
  );
};

export default Projects;
