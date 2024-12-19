import Image from "next/image";
import NavBar from "./ui/Navbar/page";
import Hero from "../app/component/Hero.jsx";
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
    className="flex flex-col items-center bg-zinc-400 border-2 border-sky-500 w-full"
    >
      {/* fix nav */}
   
      <Hero />
      {/* 
      <Projects />
      <Tech /> */}
    
      {/* <Project />
      <Blog />
      <About /> */}
    </div>

  )
}
