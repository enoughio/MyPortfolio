import Hero from "@/components/ui/Hero.jsx";
import { NewContact } from "@/components/ui/Contact.jsx";
import TechStack from "@/components/ui/Techstack.jsx";
import AboutPage from "@/components/ui/About.jsx";
import Highlight from "@/components/ui/Blogs/Highlight.jsx";
import Timeline from "@/components/ui/Experience.jsx";



export default function Home() {
  return (
    
    <div
      id="app"
      className="flex flex-col md:items-start text-primary mb-5  max-w-7xl "
    >
      {/* <FloatingNav navItems={navItems} /> */}
      <div id="hero" className="w-full"><Hero /></div>
      {/* <div id="projects" className="w-full"><Projects /></div> */}
      <div id="techstack" className="w-full"><TechStack /></div>
      <div id="highlight" className="w-full"><Highlight /></div>
      <div id="highlight" className="w-full"> <Timeline /></div>
      <div id="about" className="w-full"><AboutPage /></div>
      <div id="contact" className="w-full"><NewContact /></div>


    </div>
  )
}

