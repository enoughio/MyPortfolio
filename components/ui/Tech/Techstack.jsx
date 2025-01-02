'use client'

import { tech } from "@/utils/placeholder";


export default  function TechStack() {


  return (

    <div className="w-full lg:pr-20  text-white mt-10 ">
      <h1 className="text-4xl font-bold self-start">Skills</h1>
      
      <div className="space-y-12">
        <section>
          
          <h2 className="text-2xl font-semibold my-6 text-[#8CC84B]">Web Development</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tech.webDevelopment.map((tech, index) => (
              <div
              // { ...console.log(tech.icon) }
                key={tech.name}

                className={`
                  flex flex-col items-center justify-center p-6  rounded-md
                    border-2 border-gray-800
                  transition-transform hover:scale-105
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

        {/* <section>
          <h2 className="text-2xl font-semibold mb-6 text-[#8CC84B]">App Development</h2>
          // App Development section - to be populated similarly
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tech.webDevelopment.map((tech, index) => (
              <div
              // { ...console.log(tech.icon) }
                key={tech.name}


                className={`
                  flex flex-col items-center justify-center p-6
                    border border-gray-800
                  transition-transform hover:scale-105
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
         */}
      </div>
    </div>
  )
}




  
