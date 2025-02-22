"use client";

import { MdOutlineMail } from "react-icons/md";
import { Card } from "./card";
import { Separator } from "./separator";
import { FaLinkedin } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { LuTwitter } from "react-icons/lu";
import { motion } from "framer-motion";

import Resume from "./Resume";

export const NewContact = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 200 }}
    whileInView={{
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    }}
    viewport={{
      once: true}}
      
    >
      <Card className="mt-10 p-2 sm:p-5 w-full h-auto  pb-10 relative px-4">
        <motion.div className="space-y-1">
          <div className="flex justify-between items-center">
            <div className="text-7xl sm:text-6xl text-primary font-bold md:w-[400px]">
              Lets <br />
              Connect
            </div>
            {/* <div className="w-72 h-72 top-5 right-10 rounded-full border-2 hidden sm:flex "></div> */}
          </div>

          {/* <Separator className="w-1/2" /> */}
          <div className="my-10">
            <div className="border w-1/2"></div>
            <div className="flex items-center mt-10  text-primary justify-start gap-4">
              <MdOutlineMail className="font-bold h-5 w-5 md:h-10 md:w-10" />
              <h1 className="text-lg md:text-2xl">Email</h1>
            </div>

            <div className="text-primary pb-3 font-bold  text-2xl md:text-2xl ">
              aniketjatav.dev@gmail.com
            </div>
          </div>
          {/* <div className="border"></div> */}
          <div className="border  w-full"></div>
          <div
            id="lower"
            className="flex flex-row items-center mt-9 justify-between w-full  sm:items-center gap-7 sm:gap-10 "
          >
            <div className="flex items-center justify-center gap-4">
              <div
                id="socials"
                className="pl-5 sm:pl-1 flex h-10 sm:flex-row sm:justify-center items-center  border-white text-white gap-3 md:gap-8 "
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

            <Resume className=" self-end w-fit h-fit md:block" />
          </div>
        </motion.div>

        {/* <Separator orientation="vertical" className="my-4 bg-white" /> */}
      </Card>
    </motion.div>
  );
};
