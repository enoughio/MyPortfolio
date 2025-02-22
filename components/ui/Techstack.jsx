'use client'

import { tech } from "@/utils/placeholder.js";
import { motion } from "framer-motion";


export default function TechStack() {
  return (
    // <div className="w-full lg:pr-20 text-white mt-10">
          <motion.div
      className="w-full lg:pr-20 text-white mt-10 px-2"
      initial={{ y: 200, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      }}
      viewport={{
        once: true,
        // amount: 0.2,
      }}
    >

      <h1 className="text-4xl font-bold self-start">Skills</h1>
      <div className="">
        <section>
          <h2 className="text-2xl font-semibold my-6 text-primary-foreground">Web Development</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {tech.webDevelopment.map((tech, index) => (
              <div
              key={tech.name}
                className={`
                  flex flex-col items-center  h-20 sm:h-auto bg-card justify-center p-3 rounded-md
                  border-2 border-gray-800 transition-transform hover:scale-105
                  ${tech.wide ? 'col-span-2' : 'col-span-1'}
                  `}
                  >
                <div className="w-8 h-8 mb-2 ">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="w-full h-full object-contain invert"
                    />
                </div>
                <span className="text-sm ">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
        <h2 className="text-2xl font-semibold my-6 text-primary-foreground">Languages</h2>
          <div className="flex justify-start items-center flex-wrap gap-4">
            {tech.Languages.map((lenguage, index) => (
              <div
              key={lenguage.name}
                className={`
                  flex flex-col items-center  sm:h-auto bg-card justify-center p-3 rounded-xl
                  border-2 border-gray-800 transition-transform hover:scale-105
                  `}
                  >
                <span className="text-sm ">{lenguage.name}</span>
              </div>
            ))}
          </div>
 
        </section>

        <section>
          <h2 className="text-2xl font-semibold my-6 text-primary-foreground">DevOps</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {tech.DevOps.map((tech, index) => (
              <div
              key={tech.name}
                className={`
                  flex flex-col items-center  h-20 sm:h-auto bg-card justify-center p-3 rounded-md
                  border-2 border-gray-800 transition-transform hover:scale-105
                  ${tech.wide ? 'col-span-2' : 'col-span-1'}
                  `}
                  >
                <div className="w-8 h-8 mb-2 ">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="w-full h-full object-contain invert"
                    />
                </div>
                <span className="text-sm ">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>


      </div>
    {/* </div> */}
      </motion.div>
  );
}







