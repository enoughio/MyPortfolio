import React from "react";
import { expreienceData } from "@/utils/Data.js";

export default function Timeline(){

 
    return (
        <div className="  mt-20 self-start bg-card w-full rounded-3xl p-10 ">
            <h1 className="text-4xl font-bold mb-16  text-start ">My Experience</h1>
            <div className="ml-5 relative border-l  border-white-400">
                {expreienceData.map((Experience, index) => (
                    <div key={index} className="mb-8">
                        <div
                            className="pl-6 absolute w-5 h-5 bg-primary z-10 border-4 border-white rounded-full left-[0px] transform -translate-x-1/2 -translate-y-1/2"/>
                        <div className="pl-6">
                            <div className="flex sm:items-center sm:flex-row flex-col">
                                <div
                                    className="text-gray-600 font-semibold">{Experience.date}</div>
                                <div
                                    className="sm:ml-4 text-text text-2xl font-semibold">{Experience.title}</div>
                            </div>
                            <p className="font-xl text-zinc-700 mt-1">{Experience.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// export default Timeline;
          