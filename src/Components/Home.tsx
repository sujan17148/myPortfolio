import { LuGithub, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu";
import { FaFilePdf } from "react-icons/fa";
import { motion } from "motion/react";
import {
  fadeDownChildVariants,
  fadeDownContainerVariants,
} from "../fadeDown.js";
import BlurText from "./TextReveal.js";
export default function Home() {
  return (
    <motion.div
      variants={fadeDownContainerVariants}
      whileInView="animate"
      initial="initial"
      viewport={{ once: true }}
      id="home-section"
      className="links-section  scroll-mt-20 pt-3 pb-5"
    >
      <BlurText
        text="Frontend Developer"
        delay={70}
        animateBy="letters"
        direction="top"
        className="text-accent text-2xl whitespace-nowrap font-bold md:text-6xl"
      />

      <motion.p
        variants={fadeDownChildVariants}
        className="text-balance text-xl text-secondary"
      >
        Crafting digital experiences through clean code and thoughtful
      </motion.p>
      <motion.div
        variants={fadeDownContainerVariants}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className=" buttons flex items-center text-center gap-5 my-3 relative"
      >
        <motion.a
          variants={fadeDownChildVariants}
          className="flex items-center bg-primary text-dark-primary gap-4 justify-center py-2 px-4 rounded whitespace-nowrap hover:scale-105 overflow-hidden transition duration-300 ease-linear"
          href="#projects-section"
        >
          View Projects
        </motion.a>
        <motion.a
          variants={fadeDownChildVariants}
          className="bg-dark-primary  text-primary border border-secondary/50 dark:border-dark-secondary/50 flex items-center gap-1 justify-center  whitespace-nowrap py-2 px-4 rounded hover:scale-105 overflow-hidden transition duration-300 ease-linear"
          href="/myResume.pdf"
          download="myResume.pdf"
        >
          Resume
          <FaFilePdf />
        </motion.a>
      </motion.div>
      <motion.div
        variants={fadeDownContainerVariants}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
        className="socials flex gap-1"
      >
        <motion.a
          variants={fadeDownChildVariants}
          href="https://github.com/sujan17148"
        >
          <LuGithub className="h-8 w-8 p-1 hover:text-accent" />
        </motion.a>
        <motion.a
          variants={fadeDownChildVariants}
          href="https://www.linkedin.com/in/sujan-sah-01109226a/"
        >
          <LuLinkedin className="h-8 w-8 p-1 hover:text-accent" />
        </motion.a>
        <motion.a
          variants={fadeDownChildVariants}
          href="https://x.com/Suzan6225667317"
        >
          <LuTwitter className="h-8 w-8 p-1 hover:text-accent" />
        </motion.a>
        <motion.a
          variants={fadeDownChildVariants}
          href="mailto:sujansah.dev@gmail.com"
        >
          <LuMail className="h-8 w-8 p-1 hover:text-accent" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
