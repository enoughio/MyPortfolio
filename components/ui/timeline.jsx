
import React from "react";

const Timeline = () => {

    const milestones = [
        { date: "January 2024", title: "Project Kickoff", description: "Initial planning and kickoff meeting." },
        { date: "February 2024", title: "Design Phase", description: "Finalizing designs and mockups." },
        { date: "March 2024", title: "Development Phase", description: "Starting the development of the project." },
        { date: "April 2024", title: "Testing Phase", description: "Testing and quality assurance." },
        { date: "May 2024", title: "Launch", description: "Official project launch." },
    ];

    return (
        <div className="max-w-4xl self-start p-6">
            <h1 className="text-3xl font-bold mb-16 text-center">Milestone Timeline</h1>
            <div className="relative border-l border-gray-300">
                {milestones.map((milestone, index) => (
                    <div key={index} className="mb-8">
                        <div
                            className="absolute w-5 h-5 bg-primary z-10 border-4 border-white rounded-full left-[0px] transform -translate-x-1/2 -translate-y-1/2"/>
                        <div className="pl-6">
                            <div className="flex sm:items-center sm:flex-row flex-col">
                                <div
                                    className="text-primary  font-semibold">{milestone.date}</div>
                                <div
                                    className="sm:ml-4 text-text text-lg font-semibold">{milestone.title}</div>
                            </div>
                            <p className="text-gray-600 mt-1">{milestone.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
          