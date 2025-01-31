// // import ParticlesBackground from "../utils/ParticlesBackground.jsx";
"use client";
import { motion } from "framer-motion";
import { LuTwitter } from "react-icons/lu";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosArrowRoundDown } from "react-icons/io";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import Resume from "./Resume.jsx";

const Hero = () => {
  return (
    <motion.div
      id="Hero"
      className="flex justify-center h-[90%] md:mt-8 mt-4 md:px-10  bg-card py-4 px-2 md:p-10 min-w-fit rounded-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div id="textContent" className="w-[100%] h-[100%] md:text-left ">
        <div className="my-2">
          <motion.h1
            className="text-4xl md:text-6xl  text-zinc-200 font-[1000] pb-1"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hii,
          </motion.h1>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h1 className="text-6xl text-nowrap md:text-9xl text-zinc-100 font-extrabold">
              I'm Aniket
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl md:leading-9 md:text-5xl md:text-nowrap  font-[1000]  md:pb-3">
            Web Developer and Designer
          </h3>
          <p className="text-sm md:text-xl text-zinc-300  font-normal my-2">
            I am a full stack web developer I like to code (and occasionally
            design). Based in India, <br></br>I like to build things that help
            people.
          </p>
        </motion.div>

        <motion.div
          className="w-1/2 h-[1px] my-5 bg-white rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />

        <motion.div
          id="lower"
          className="flex flex-row items-center justify-between w-full  sm:items-center gap-7 sm:gap-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify gap-2 md:gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="w-fit h-fit bg-gray-200 text-black"
                  asChild
                >
                  <Link href="#projects">Projects</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="w-fit h-fit bg-gray-200 text-black"
                  asChild
                >
                  <Link href="#contact">Contact</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              id="socials"
              className="pl-5 sm:pl-7 flex h-10 sm:flex-row sm:justify-center items-center border-l-[.4px] border-white text-white gap-3 md:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/aniket-jatav-abb2a6285/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="w-7 h-7" />
              </motion.a>
              <motion.a
                href="https://github.com/enoughio"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ImGithub className="w-7 h-7" />
              </motion.a>
              <motion.a
                href="https://x.com/_aniketjatav"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <LuTwitter className="w-7 h-7" />
              </motion.a>
            </motion.div>
          </div>

          {/* <Resume className=" self-end hidden md:block" /> */}
        </motion.div>
      </div>


        <motion.div className="flex justify-center items-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <IoIosArrowRoundDown className="text-zinc-200 text-3xl" />
        </motion.div>
    </motion.div>
  );
};

export default Hero;
