import { LuGithub,LuLinkedin,LuMail,LuTwitter } from "react-icons/lu";
import { FaFilePdf } from "react-icons/fa";
import { motion } from "motion/react";
import { useRef } from 'react';
import VariableProximity from './VariableProximity';
import {fadeDownChildVariants} from "../fadeDown"
export default function Home(){
  const containerRef = useRef(null);
    return  <motion.div variants={fadeDownChildVariants}  id="home-section" className="links-section  scroll-mt-20 pt-3 pb-5">
    <motion.div variants={fadeDownChildVariants}
ref={containerRef}
style={{position: 'relative'}}
// className="bg-red-500"
>
  <VariableProximity
    label={'Frontend Developer'}
    className={'variable-proximity-demo'}
    fromFontVariationSettings="'wght' 400, 'opsz' 9"
    toFontVariationSettings="'wght' 1000, 'opsz' 40"
    containerRef={containerRef}
    radius={70}
    falloff='exponential'
  />
</motion.div>
    <motion.p variants={fadeDownChildVariants} className="text-balance text-xl text-secondary">
      Crafting digital experiences through clean code and thoughtful
      design
    </motion.p>
    <motion.div variants={fadeDownChildVariants} className=" buttons flex items-center text-center gap-5 my-3 relative">
      <a
        className="flex items-center bg-primary text-dark-primary gap-4 justify-center py-2 px-4 rounded whitespace-nowrap hover:scale-105 overflow-hidden transition duration-300 ease-linear"
        href="#projects-section"
      >
        View Projects 
      </a>
      <a
        className="bg-dark-primary text-primary border border-secondary/50 dark:border-dark-secondary/50 flex items-center gap-1 justify-center  whitespace-nowrap py-2 px-4 rounded hover:scale-105 overflow-hidden transition duration-300 ease-linear"
        href="/myResume.pdf"
        download="myResume.pdf"
      >
        Resume<FaFilePdf/>
      </a>
    </motion.div>
    <motion.div variants={fadeDownChildVariants} className="socials flex gap-1">
      <a href="https://github.com/sujan17148"><LuGithub className="h-8 w-8 p-1 hover:text-accent"/></a>
      <a href="https://www.linkedin.com/in/sujan-sah-01109226a/"><LuLinkedin className="h-8 w-8 p-1 hover:text-accent" /></a>
      <a href="https://x.com/Suzan6225667317"><LuTwitter className="h-8 w-8 p-1 hover:text-accent"/></a>
      <a href="mailto:sujansah.dev@gmail.com"><LuMail className="h-8 w-8 p-1 hover:text-accent"/></a>
    </motion.div>
  </motion.div>
}

