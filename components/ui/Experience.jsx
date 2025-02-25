/*
import React from "react";
// import { expreienceData } from "@/utils/Data.js";


const expreienceData = [
    { 
      date: "April - September 2024", 
      title: "Frontend Intern at BST", 
      description: "Designed and implemented a frontend form as part of the project." 
    },
    { 
      date: "September 2024 - Present", 
      title: "Technical Head at BST", 
      description: "Leading a project focused on developing the company website and a franchise management portal." 
    },
    { 
      date: "November 2024", 
      title: "Tech Team Member at 8BitWarriors", 
      description: "Organized over 5 tech events at LNCT College." 
    },
  ];
  

export default function Experience() {
    return (
        <div className="mt-10 self-start bg-card w-full rounded-3xl p-10 cursor-default">
            <h1 className="text-4xl font-bold mb-16 text-start">My Experience</h1>
            <div className="ml-5 relative border-l border-white-400">
                {expreienceData.map((experience, index) => (
                    <div key={index} className="mb-8">
                        <div
                            className="pl-6 absolute w-5 h-5 bg-primary z-10 border-4 border-white rounded-full left-[0px] transform -translate-x-1/2 -translate-y-1/2"/>
                        <div className="pl-6">
                            <div className="flex sm:items-center sm:flex-row flex-col">
                                <div className="text-gray-600 font-semibold">{experience.date}</div>
                                <div className="sm:ml-4 text-text text-2xl font-semibold">{experience.title}</div>
                            </div>
                            <p className="font-xl text-zinc-400 mt-1">{experience.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
*/

"use client";
import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    date: "April - September 2024",
    title: "Frontend Intern at BST",
    description:
      "Designed and implemented a frontend form as part of the project.",
  },
  {
    date: "September 2024 - Present",
    title: "Technical Head at BST",
    description:
      "Leading a project focused on developing the company website and a franchise management portal.",
  },
  {
    date: "November 2024",
    title: "Tech Team Member at 8BitWarriors",
    description: "Organized over 5 tech events at LNCT College.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <motion.div
      className="mt-10 self-start bg-card w-full rounded-3xl p-5 cursor-default"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <h1 className="text-4xl font-bold mb-12 text-start">My Experience</h1>
      <div className="ml-5 relative border-l border-white-400">
        {experienceData.map((experience, index) => (
        
            <motion.div key={index} className="mb-8" variants={itemVariants} >
              <div className="pl-6 absolute w-5 h-5 bg-primary z-10 border-4 border-white rounded-full left-[0px] transform -translate-x-1/2 -translate-y-1/2" />
                <div className="pl-6">
                    <div className="flex sm:items-center sm:flex-row flex-col">
                        <div className="text-gray-600 font-semibold text-sm">
                          {experience.date}
                        </div>
                        <div className="sm:ml-4 text-text text-xl font-semibold">
                          {experience.title}
                        </div>
                     </div>
                    <p className="font-xl text-zinc-400 mt-1">
                      {experience.description}
                    </p>
                </div>
            </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
