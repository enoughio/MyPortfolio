import Hero from "../components/ui/Hero.jsx";
import { NewContact } from "@/components/ui/Contact.jsx";
import Highlight from "@/components/ui/Blogs/Highlight.jsx";
import TechStack from "@/components/ui/Tech/Techstack.jsx";
// import Timeline from "@/components/ui/Timeline.jsx";
import Projects from "@/components/project/Projects.jsx";


export default function Home() {
  return (

    <div
    id="app"
    className="flex dark flex-col md:items-start text-white w-full"
    >
 
      <Hero />
      <Projects />
      <TechStack />
      {/* <Timeline  /> */}
      <Highlight />
      <NewContact />
    </div>

  )
}
