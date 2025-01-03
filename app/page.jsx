import Projects from "@/components/project/Projects";
import Hero from "@/components/ui/Hero";
import TechStack from "@/components/ui/Tech/Techstack";
import Timeline from "@/components/ui/timeline.jsx"; // Corrected import path

const Page = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Projects />
      <TechStack />
      <Timeline /> {/* Add the Timeline component if needed */}
    </div>
  );
}

export default Page;







// import Hero from "../components/ui/Hero.jsx";
// import { NewContact } from "@/components/ui/Contact.jsx";
// import Highlight from "@/components/ui/Blogs/Highlight.jsx";
// import TechStack from "@/components/ui/Tech/Techstack.jsx";
// import Projects from "@/components/project/Projects.jsx";


// export default function Home() {
//   return (

//     <div
//     id="app"
//     className="flex dark flex-col md:items-start text-white w-full"
//     >
 
//       <Hero />
//       <Projects />
//       <TechStack />
//       <Highlight />
//       <NewContact />
//     </div>

//   )
// }
