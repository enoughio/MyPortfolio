import { Button } from "@/components/ui/button";
import { LuTwitter } from "react-icons/lu";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import Project from "./project";

const Projects = () => {
  return (
    <div className="flex flex-col justify-start  md:px-8 md:pt-8 w-full mt-[13%] gap-10">
      <h1 className="text-6xl font-bold  mb-4 lg:ml-4">My Project</h1>
      <div className="flex items-start flex-wrap justify-around flex-col md:flex-row gap-12">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
