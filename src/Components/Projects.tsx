import {projects} from "../projects.js"
import ProjectCard from "./ProjectCard.js";
import { fadeDownChildVariants } from "../fadeDown.js";
import { motion } from "motion/react";

export default function Projects(){
    return <div id="projects-section" className="scroll-mt-25">
    <motion.p variants={fadeDownChildVariants} className="font-semibold  my-2 text-xl md:text-2xl">
    Featured Projects
    </motion.p>
     <div className="projects flex flex-wrap gap-5">
      {projects.slice(0,5).map(project=><ProjectCard key={project.id} {...project}/>)}
     </div>
    </div>
}