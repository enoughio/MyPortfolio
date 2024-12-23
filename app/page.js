import Image from "next/image";
import NavBar from "./ui/Navbar/page";
import Hero from "../components/ui/Hero.jsx";
import Projects from "@/components/ui/Projects";
import Tech from "@/components/ui/Tech/Tech";
import Blogs from "@/components/ui/Blogs/Blogs";
// import Blog from "./Components/Blog.jsx";
// import About from "./Components/About.jsx";
// import "./App.css";
// import ParticlesBackground from "./utils/ParticlesBackground.jsx";
// import NavBar from "./Components/NavBar.jsx";
// import Hero from "./Components/Hero.jsx";
// import Projects from "./Components/Projects.jsx";


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
      <Blogs />
      {/* 
      <About /> */}
    </div>

  )
}
