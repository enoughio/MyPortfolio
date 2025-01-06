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
      <a href="https://docs.google.com/document/d/e/2PACX-1vR0MQbU4xC85G10oaiLHHNtw1VGDcCvaaRPP9W3mXptFhYE1SJ9a0absTfjo4sw5g/pub" aria-label="Download Resume" className="flex items-center font-bold text-2xl">
        Resume
        <AiTwotoneFileMarkdown size={30} className="ml-2" />
      </a>
    </div>
  );
};

export default Resume;
