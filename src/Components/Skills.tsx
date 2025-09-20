import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoIosGitMerge } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { SiAppwrite, SiFramer,SiTypescript } from "react-icons/si";
import { motion } from "motion/react";
import {fadeDownChildVariants, fadeDownContainerVariants} from "../fadeDown.js"
import type { IconType } from "react-icons";
type skillProps={
  name:string,
  icon:IconType,
  color:string,
  description:string
}
export default function Skills() {
  const skills:skillProps[] = [
    {
      name: "React",
      icon: FaReact,
      color: "#61DAFB",
      description: "Javascript Library",
    },
    {
      name: "TypeScript",
      icon: SiTypescript, // from react-icons/si
      color: "#3178C6",
      description: "Typed JavaScript Superset",
    },
    {
      name: "JavaScript",
      icon: DiJavascript1,
      color: "#F7DF1E",
      description: "Programming Language",
    },
    {
      name: "Tailwind",
      icon: RiTailwindCssFill,
      color: "#38BDF8",
      description: "CSS Framework",
    },
    {
      name: "Git",
      icon: IoIosGitMerge,
      color: "#F05032",
      description: "Version Control",
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      color: "#F05032",
      description: "Animation Library",
    },
    {
      name: "Appwrite",
      icon: SiAppwrite,
      color: "#F02E65",
      description: "Backend Tool",
    },
    {
      name: "HTML",
      icon: FaHtml5,
      color: "#E34C26",
      description: "Markup Language",
    },
    {
      name: "CSS",
      icon: IoLogoCss3,
      color: "#1572B6",
      description: "Styling Language",
    },
  ];
  return (
    <motion.div variants={fadeDownContainerVariants} whileInView="animate" initial="initial" viewport={{once:true}} className="my-5">
      <motion.p variants={fadeDownChildVariants} className="my-2 font-semibold text-xl md:text-2xl">
        Tech Stack
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-4  gap-2"
      > 
        {skills.slice(0,8).map((skill, index) =><SkillsCard key={index} {...skill}/>)}
      </div>
    </motion.div>
  );
}

function SkillsCard({ name, icon, color, description }:skillProps) {
  const IconComponent = icon;
  return (
    <motion.div variants={fadeDownChildVariants} whileHover={{scale:1.05}}
      className="flex items-center px-2 h-16 bg-white dark:bg-primary rounded  gap-2 "
    >
      <IconComponent
        style={{ color: `${color}` }}
        className="h-13 w-13 p-2 bg-neutral-300/30 dark:bg-secondary/30 rounded "
      />
      <div className="flex flex-col">
        <span className="title text-sm text-primary dark:text-dark-primary">
          {name}
        </span>
        <span className="description text-sm line-clamp-1 text-secondary">
          {description}
        </span>
      </div>
    </motion.div>
  );
}
