import Hero from "../components/ui/Hero.jsx";
// import Projects from "@/components/project/Projects.jsx";
// import { BlogTimeline } from "@/components/ui/Blogs/Blogslider.jsx";
import Contact, { NewContact } from "@/components/ui/Contact.jsx";
import Highlight from "@/components/ui/Blogs/Highlight.jsx";

import TechStack from "@/components/ui/Tech/Techstack.jsx";
import { Projects } from "@/components/project/Projects.jsx";
import Timeline from "@/components/ui/Timeline.jsx";








export default function Home() {
  return (

    <div
    id="app"
    className="flex dark flex-col md:items-start text-white w-full"
    >
      {/* fix nav */}
   
      <Hero />
      <Projects />
      <TechStack />
      <Timeline  />
      <Highlight />
      {/* <Contact /> */}
      <NewContact />
    </div>

  )
}
