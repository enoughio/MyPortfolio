import Hero from "@/components/ui/Hero";
import { NewContact } from "@/components/ui/Contact";
import TechStack from "@/components/ui/Techstack";
import Projects from "@/components/project/Projects";
import AboutPage from "@/components/ui/About";
import Highlight from "@/components/ui/Blogs/Highlight";
import Timeline from "@/components/ui/Experience";

export default function Home() {
  return (
    <div
      id="app"
      className="flex flex-col md:items-start text-primary mb-5 w-full"
    >
      {/* <FloatingNav navItems={navItems} /> */}
      <div id="hero" className="w-full"><Hero /></div>
      <div id="projects" className="w-full"><Projects /></div>
      <div id="techstack" className="w-full"><TechStack /></div>
      <div id="highlight" className="w-full"><Highlight /></div>
      <div id="highlight" className="w-full"> <Timeline /></div>
      <div id="about" className="w-full"><AboutPage /></div>
      <div id="contact" className="w-full"><NewContact /></div>


    </div>
  )
}

