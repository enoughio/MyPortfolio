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
      className="flex justify-center items-center  md:mt-8 mt-4 md:pl-7  bg-card py-4 px-4 max-w-[97%]  mx-auto rounded-3xl  border-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5,delay: 2.5 }}
    >
      <div id="textContent" className="w-[100%] h-[100%] md:text-left borde-red-500 border-2 ">
        <div className="my-2">
          <motion.h1
            className="text-4xl md:text-5xl text-zinc-200 font-[1000] pb-1"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.7 }}
          >
            Hii,
          </motion.h1>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 2.9 }}
          >
            <h1 className="text-[3.2rem] sm:text-6xl text-nowrap md:text-8xl text-zinc-100 font-extrabold">
              I'm Aniket
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.0 }}
        >
          <h3 className="text-2xl leading-6 md:leading-9 text-balance lg:text-[2.5rem] md:text-nowrap  font-extrabold pb-3">
            Web Developer and Designer 
          </h3>
          <p className="text-sm md:text-base text-zinc-300 leading-5 md:leading-6 font-normal max-w-[95%]">
            I’m a web developer, based in India who enjoys building functional and
            efficient digital experiences (also occasionally design).
          </p>
        </motion.div>

        <motion.div
          className="w-1/2 h-[1px] my-5 bg-white rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 3.3 }}
        />

        <motion.div
          id="lower"
          className="flex flex-row items-center justify-between w-full  sm:items-center gap-7 sm:gap-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.5 }}
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
                  <Link href="#contact">Contact</Link>
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
                  <Link href="/blog">Blog</Link>
                </Button>
              </motion.div>

            </div>

            <motion.div
              id="socials"
              className="pl-5 sm:pl-7 flex h-10 sm:flex-row sm:justify-center items-center border-l-[.4px] border-white text-white gap-3 md:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.7 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/aniket-jatav-abb2a6285/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="max-w-7 w-4 h-4 max-h-7" />
              </motion.a>
              <motion.a
                href="https://github.com/enoughio"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImGithub className="max-w-7 w-4 h-4 max-h-7" />
              </motion.a>
              <motion.a
                href="https://x.com/_aniketjatav"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuTwitter className="max-w-7 w-4 h-4 max-h-7" />
              </motion.a>
            </motion.div>
          </div>

          {/* <Resume className=" self-end hidden md:block" /> */}
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center items-center"
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
