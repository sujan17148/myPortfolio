import Skills from "./Skills.js";
import { motion } from "motion/react";
import {fadeDownChildVariants} from "../fadeDown.js"
export default function About(){
    return <motion.div variants={fadeDownChildVariants} viewport={{once:true}} id="about-section" className="scroll-mt-20">
          <p className="font-semibold text-xl md:text-2xl">
        About Me
      </p>
      <motion.p variants={fadeDownChildVariants} className="my-2 text-secondary dark:text-dark-primary md:w-4/5">Hi, I'm <strong>Sujan Sah</strong>, a frontend developer based in <strong>Nepal</strong>. I'm passionate about building intuitive and visually appealing web applications. I focus on writing clean, efficient code that transforms complex problems into simple, user-friendly solutions.</motion.p>
        <Skills/>
    </motion.div>
}