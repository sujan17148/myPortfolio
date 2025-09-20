import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Projects from "./Components/Projects.js";
import About from "./Components/About.js";
import Footer from "./Components/Footer.js";
import Skills from "./Components/Skills.js";
export default function App() {
  return (
      <div className="max-w-5xl w-full relative bg-dark-primary dark:bg-neutral-900 text-primary dark:text-dark-primary min-h-[100dvh] mx-auto px-5 md:px-10">
        <Navbar />
       <Home/>
       <About/>
       <Skills/>
        <Projects/>
        <Footer/>
      </div> );
}
