import { Button } from "@/components/ui/button";
import { LuTwitter } from "react-icons/lu";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import Project from "./project";


const Projects = () => {
  return (
    <div className="flex items-start border-sky-500 md:px-8 md:pt-8 border-2 w-full mt-[13%] flex-wrap justify-start flex-col md:flex-row gap-12">
        
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />

    </div>
  )
}

export default Projects