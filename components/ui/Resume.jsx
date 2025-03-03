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
      <a href="https://docs.google.com/document/d/1JvRl6GzLT9c76dquSx6zptw-En3VLBMgEA9--YYPxeg/edit?usp=sharing">
        Resume
        <AiTwotoneFileMarkdown size={30} className="ml-2" />
      </a>
    </div>
  );
};

export default Resume;
