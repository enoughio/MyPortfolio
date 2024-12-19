import React from "react";
// import ParticlesBackground from "../utils/ParticlesBackground.jsx";
import { LuTwitter } from "react-icons/lu";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";


const Hero = () => {
  return (
    <div
      id="Hero"
      className="pl-[13vw] flex justify-center h-[90%] pt-[2vh] mt-8 "
    >
      <div id="textContent" className="w-[80%] h-[100%] pt-[2rem]  text-left  ">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-[1000] pb-1  ">
          Hii,
        </h1>
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-[1000] ">
          I'm Aniket
        </h1>
        <h3 className="text-3xl md:text-4xl lg:text-nowrap lg:text-6xl font-[1000]  pb-3">
          Web Developer and Designer
        </h3>
        <p className="text-1xl md:text-2xl font-normal my-4">
          I am a full stack web developer I like to code (and occasionally
          design). Based Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Dicta, quam. in India.
        </p>
        <div className="w-1/2 h-1 bg-white rounded-full mt-10"></div>
        <div id="lower" className="flex flex-col sm:flex-row sm:items-center gap-10  ">
            <div className="flex items-center justify gap-4 ">
              {/* <ButtonP to="/project" text="Project" /> */}
              {/* <ButtonP to="/contact" text="Contact" /> */}
            </div>

            <div
              id="socials"
              className=" ml-4 pl-10 hidden sm:flex flex-col h-10 mt-11 sm:flex-row justify-center items-center border-l-[.4px] border-white text-white gap-8 "
            >
              <ImGithub className="w-7 h-7" />
              <FaLinkedin className="w-7 h-7" />
              <LuTwitter className="w-7 h-7"  />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
