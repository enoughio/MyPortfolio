// import ParticlesBackground from "../utils/ParticlesBackground.jsx";
import { LuTwitter } from "react-icons/lu";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AiTwotoneFileMarkdown } from "react-icons/ai";
import Resume from "./Resume";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="flex justify-center h-[90%] md:mt-8 mt-4 md:px-10  bg-card py-4 px-2 md:p-10 min-w-fit rounded-3xl"
    >
      <div
        id="textContent"
        className="w-[100%] h-[100%] md:text-left "
      >
        <div className="my-2">
          <h1 className="text-4xl md:text-6xl  text-zinc-200 font-[1000] pb-1  ">
            Hii,
          </h1>
          <h1 className="text-6xl text-nowrap md:text-9xl  text-zinc-100 font-extrabold ">
            I'm Aniket
          </h1>
        </div>

        <div className="">
          <h3 className="text-2xl md:leading-9 md:text-5xl md:text-nowrap  font-[1000]  md:pb-3">
            Web Developer and Designer
          </h3>
          <p className="text-sm md:text-xl text-zinc-300  font-normal my-2">
            I am a full stack web developer I like to code (and occasionally
            design). Based in India, I like to build thing that helps people.
          </p>
        </div>

        <div className="w-1/2 h-[1px] my-5 bg-white rounded-full "/>

        <div
          id="lower"
          className="flex flex-row items-center justify-between w-full  sm:items-center gap-7 sm:gap-10 "
        >
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify gap-2 md:gap-4"> 
              <Button  variant="outline" className="w-fit h-fit bg-gray-200 text-black" asChild>
                <Link href="#projects">Projects</Link>
              </Button>
              <Button   variant="outline" className="w-fit h-fit bg-gray-200 text-black" asChild>
                <Link href="#contact">Contact</Link>
              </Button>
            </div>

            <div
              id="socials"
              className="pl-5 sm:pl-7 flex h-10 sm:flex-row sm:justify-center items-center border-l-[.4px] border-white text-white gap-3 md:gap-8 "
            >
              <a href="https://www.linkedin.com/in/aniket-jatav-abb2a6285/">
                <FaLinkedin className="w-7 h-7" />
              </a>
              <a href="https://github.com/enoughio">
                <ImGithub className="w-7 h-7" />
              </a>
              <a href="https://x.com/_aniketjatav">
                <LuTwitter className="w-7 h-7" />
              </a>
            </div>
          </div>

          <Resume className=" self-end hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
