import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { motion } from "motion/react";
import{fadeDownContainerVariants} from "./fadeDown"
export default function App() {
  return (
      <motion.div variants={fadeDownContainerVariants} whileInView="animate" initial="initial" viewport={{once:true}} className="max-w-5xl w-full relative bg-dark-primary dark:bg-neutral-900 text-primary dark:text-dark-primary min-h-[100dvh] mx-auto px-5 md:px-10">
        <Navbar />
       <Home/>
       <About/>
        <Projects/>
        <Footer/>
      </motion.div>
  );
}
