import Hero from "../components/ui/Hero.jsx";
import Projects from "@/components/project/Projects.jsx";
import TechStack from "@/components/ui/Tech/Tech";
import Timeline from "@/components/ui/Timeline";
import { BlogTimeline } from "@/components/ui/Blogs/Blogslider.jsx";
import Contact from "@/components/ui/Contact.jsx";
import Highlight from "@/components/ui/Blogs/Highlight.jsx";



export default function Home() {
  return (

    <div
    id="app"
    className="flex flex-col items-center text-white w-full"
    >
      {/* fix nav */}
   
      <Hero />
      {/* <div className="bg-white w-full h-[1px] my-10" /> */}
      <Projects />
      <TechStack />
      {/* doen  */}
      {/* <TechStackGrid /> */}
      <Timeline  />
      <Highlight />
      {/* <Blogs /> */}

      <Contact />
    </div>

  )
}
