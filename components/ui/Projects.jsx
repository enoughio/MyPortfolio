import { Button } from "@/components/ui/button";

import Link from "next/link";
import Project from "./project";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center  md:pt-8 w-full mt-[13%] gap-10">
      <h1 className="text-6xl font-bold  mb-1 self-start">My Project</h1>
      <div className="flex items-start w-full flex-wrap justify-between flex-col md:flex-row gap-12">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <Button className="w-fit mt-5" >Load More</Button>
    </div>
  );
};

export default Projects;
