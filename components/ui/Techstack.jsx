'use client'

import { tech } from "@/utils/placeholder.js";
import { motion } from "framer-motion";


export default function TechStack() {
  return (
    // <div className="w-full lg:pr-20 text-white mt-10">
          <motion.div
      className="w-full lg:pr-20 text-white mt-10"
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
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold my-6 text-primary-foreground">Web Development</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {tech.webDevelopment.map((tech, index) => (
              <div
              key={tech.name}
                className={`
                  flex flex-col items-center  h-20 sm:h-auto bg-card justify-center p-6 rounded-md
                  border-2 border-gray-800 transition-transform hover:scale-105
                  ${tech.wide ? 'col-span-2' : 'col-span-1'}
                  `}
                  >
                <div className="w-12 h-12 mb-4">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="w-full h-full object-contain invert"
                    />
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    {/* </div> */}
      </motion.div>
  );
}
