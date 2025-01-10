import React from "react";
// import { expreienceData } from "@/utils/Data.js";


const expreienceData = [
    { date: "January 2024", title: "Project Kickoff", description: "Initial planning and kickoff meeting." },
    { date: "February 2024", title: "Design Phase", description: "Finalizing designs and mockups." },
    { date: "March 2024", title: "Development Phase", description: "Starting the development of the project." },
    { date: "April 2024", title: "Testing Phase", description: "Testing and quality assurance." },
    { date: "May 2024", title: "Launch", description: "Official project launch." },
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
                            <p className="font-xl text-zinc-700 mt-1">{experience.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}







// import React from "react";
// import { expreienceData } from "@/utils/Data.js";

// export default function Timeline(){

 
//     return (
//         <div className="  mt-20 self-start bg-card w-full rounded-3xl p-10 ">
//             <h1 className="text-4xl font-bold mb-16  text-start ">My Experience</h1>
//             <div className="ml-5 relative border-l  border-white-400">
//                 {expreienceData.map((Experience, index) => (
//                     <div key={index} className="mb-8">
//                         <div
//                             className="pl-6 absolute w-5 h-5 bg-primary z-10 border-4 border-white rounded-full left-[0px] transform -translate-x-1/2 -translate-y-1/2"/>
//                         <div className="pl-6">
//                             <div className="flex sm:items-center sm:flex-row flex-col">
//                                 <div
//                                     className="text-gray-600 font-semibold">{Experience.date}</div>
//                                 <div
//                                     className="sm:ml-4 text-text text-2xl font-semibold">{Experience.title}</div>
//                             </div>
//                             <p className="font-xl text-zinc-700 mt-1">{Experience.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// // export default Timeline;
          