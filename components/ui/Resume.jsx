"use client";

import { AiTwotoneFileMarkdown } from "react-icons/ai";
import cn from "classnames"; // Ensure this is properly imported if `cn` is defined elsewhere

const  Resume = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "flex h-20 w-40 p-5 border border-white  rounded-xl text-primary text-sm",
        className
      )}
      {...props}
    >
      <a href="#" aria-label="Download Resume" className="flex items-center font-bold text-2xl">
        Resume
        <AiTwotoneFileMarkdown size={30} className="ml-2" />
      </a>
    </div>
  );
};

export default Resume;
