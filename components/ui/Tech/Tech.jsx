'use client'

import { techStack } from "@/utils/placeholder";


const TechStack = () => {


  return (

    <div className="w-full  text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[#8CC84B]">Web Development</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.webDevelopment.map((tech, index) => (
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

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[#8CC84B]">App Development</h2>
          {/* App Development section - to be populated similarly */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.webDevelopment.map((tech, index) => (
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
      </div>
    </div>
  )
}

export default TechStack




  

     {/* 
  
  
  const Tech = () => {
  return (
    <div
      className="border-2 mt-20 w-full h-[70vh] flex"
      style={{
 
        width: "100%",
        height: "80vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr",
        gap: "20px",
      }}
    >

      <div
        class="item cowboy"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          gridArea: "1/1/2/2",
        }}
      >
        🤠
      </div>
      <div
        class="item astronaut"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          gridArea: "1/2/2/3",
        }}
      >
        👨‍🚀
      </div>
      <div
        class="item book"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
          gridArea: "1/3/2/4",
        }}
      >
        📖
      </div>
      <div
        class="item book"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "purple",
          gridArea: "1/4/2/6",
        }}
      >
        📖
      </div>
      <div
        class="item book"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow",
          gridArea: "1/6/2/7",
        }}
      >
        📖
      </div>





      <div
        class="item cowboy"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          gridArea: "2/1/3/2",
        }}
      >
        🤠
      </div>
      <div
        class="item astronaut"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          gridArea: "2/2/3/4",
        }}
      >
        👨‍🚀
      </div>
      <div
        class="item book"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
          gridArea: "2/4/3/5",
        }}
      >
        📖
      </div>
      <div
        class="item book"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "purple",
          gridArea: "2/5/3/6",
        }}
      >
        📖
      </div>
      <div
        class="item book"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow",
          gridArea: "2/6/3/7",
        }}
      >
        📖
      </div>

   third row
        
        
        <div
        class="item cowboy"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          gridArea: "3/1/4/2",
        }}
        >
        🤠
        </div>
      <div
        class="item astronaut"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          gridArea: "3/2/4/3",
        }}
        >
        👨‍🚀
        </div>
      <div
        class="item book"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
          gridArea: "3/3/4/4",
        }}
      >
        📖
      </div>
      <div
        class="item book"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "purple",
          gridArea: "3/4/4/6",
        }}
        >
        📖
        </div>
        <div
        class="item book"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow",
          gridArea: "3/6/4/7",
        }}
        >
        📖
        </div>
        
        
        
        </div>
  );
};


*/}