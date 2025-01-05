import { Mail } from "lucide-react";

import { Card } from "./card";
import { Separator } from "./separator";
import { FaLinkedin } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { LuTwitter } from "react-icons/lu";
import { AiTwotoneFileMarkdown } from "react-icons/ai";
export const NewContact = () => {
  return (
    <Card className="mt-10 p-2 sm:p-10 w-full h-auto pb-10 relative">
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <div className="text-7xl sm:text-8xl text-primary font-bold md:w-[400px]">
            Lets <br/>
            Connect
          </div>
          <div className="w-72 h-72 top-5 right-10 rounded-full border-2 hidden sm:flex "></div>
        </div>

        {/* <Separator className="w-1/2" /> */}
        <div className="my-10">

        <div className="border w-1/2"></div>
        <div className="flex items-center mt-10  text-primary justify-start gap-4">
          <Mail className="font-bold h-5 w-5 md:h-10 md:w-10" />
          <h1 className="text-xl md:text-4xl">Email</h1>
        </div>

        <div className="text-primary py-5 font-bold  text-[35px] sm:text-3xl md:text-6xl ">
          aniketjatav.dev@gmail.com
        </div>

        </div>
        {/* <div className="border"></div> */}
        <div className="border  w-full"></div>
        <div
          id="lower"
          className="md:mx-2 flex flex-row   items-center gap-7 sm:gap-10 md:mt-10 "
        >
          <div
            id="socials"
            className=" flex h-10 mt-10 justify-center  items-center text-white gap-8 "
          >
            <a href="https://www.linkedin.com/in/aniket-jatav-abb2a6285/">
              <FaLinkedin className=" w-10 h-10 md:w-14   md:h-14" />
            </a>
            <a href="https://www.linkedin.com/in/aniket-jatav-abb2a6285/">
              <ImGithub className=" w-10 h-10 md:w-14  md:h-14" />
            </a>
            <a href="https://www.linkedin.com/in/aniket-jatav-abb2a6285/">
              <LuTwitter className=" w-10 h-10 md:w-14 md:h-14" />
            </a>
          </div>

          <div className="absolute flex right-24  h-20 w-40 border rounded-xl items-center justify-center text-primary mt-10  space-x-4 text-sm">
            <div className="flex font-bold text-2xl p-10">
              resume
              <AiTwotoneFileMarkdown  size="30"/>
            </div>
          </div>
        </div>
      </div>

      {/* <Separator orientation="vertical" className="my-4 bg-white" /> */}
    </Card>
  );
};
