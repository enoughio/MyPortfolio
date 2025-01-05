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
      className=" flex  justify-center h-[90%] pt-[3vh] mt-8  bg-card p-10 md:p-6 rounded-3xl"
    >
      <div
        id="textContent"
        className="w-[100%]  h-[100%] pt-[2rem] md:text-left "
      >
        <div className="my-2">
          <h1 className="text-4xl md:text-7xl lg:text-[8vw] text-zinc-200 font-[1000] pb-1  ">
            Hii,
          </h1>
          <h1 className="text-6xl text-nowrap md:text-7xl lg:text-[9vw]  text-zinc-100 font-[1000] ">
            I'm Aniket
          </h1>
        </div>

        <div className="mx-2">
          <h3 className="text-4xl leading-9 md:text-4xl md:text-nowrap lg:text-[4vw] font-[1000]  pb-3">
            Web Developer and Designer
          </h3>
          <p className="text-1xl md:text-2xl text-zinc-50 font-normal my-4">
            I am a full stack web developer I like to code (and occasionally
            design). Based Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Dicta, quam. in India.
          </p>
        </div>

        <div className="w-1/2 h-[1px] my-10 bg-white rounded-full mt-10"></div>

        <div
          id="lower"
          className="md:mx-5 relative flex flex-row items-center justify-start sm:items-center gap-7 sm:gap-10 sm:mt-7 "
        >
          <div className="flex items-center justify gap-4">
            <Button asChild>
              <Link href="#projects">Projects</Link>
            </Button>
            <Button asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>

          <div
            id="socials"
            className=" pl-5 sm:pl-7 flex h-10  sm:flex-row   sm:justify-center items-center border-l-[.4px] border-white text-white gap-8 "
          >
            <a href="https://www.linkedin.com/in/aniket-jatav-abb2a6285/">
              <FaLinkedin className="w-7 h-7" />
            </a>
            <ImGithub className="w-7 h-7" />
            <LuTwitter className="w-7 h-7" />
          </div>
            <Resume  className="absolute hidden sm:flex right-9 bottom-2"  />

        </div>
      </div>
    </div>
  );
};

export default Hero;
