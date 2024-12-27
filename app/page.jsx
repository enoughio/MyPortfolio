import Hero from "../components/ui/Hero.jsx";
import Projects from "@/components/ui/Projects";
import Tech from "@/components/ui/Tech/Tech";
import Timeline from "@/components/ui/Timeline";
import { BlogTimeline } from "@/components/ui/blogslider.jsx";
import { data } from "@/utils/placeholder.js";



export default function Home() {
  return (

    <div
    id="app"
    className="flex flex-col items-center text-white w-full"
    >
      {/* fix nav */}
   
      <Hero />
      <Projects />
      <Tech />
      {/* <Blogs /> */}
      <Timeline  />

      {/* <BlogTimeline data={data} /> */}
      {/* 
      <About /> */}
    </div>

  )
}
