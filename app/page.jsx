import Hero from "@/components/ui/Hero";
import { NewContact } from "@/components/ui/Contact";
import Highlight from "@/components/ui/Blogs/Highlight";
import TechStack from "@/components/ui/Tech/Techstack";
import Projects from "@/components/project/Projects";
import Timeline from "@/components/ui/Timeline";

export default function Home() {
  return (
    <div
      id="app"
      className="flex flex-col md:items-start text-white w-full"
    >
      <Hero />
      <Projects />
      <TechStack />
      <Highlight />
      <Timeline />
      <NewContact />
    </div>
  )
}