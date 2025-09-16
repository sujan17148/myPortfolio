import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { FiGithub } from "react-icons/fi";
import { SlGlobe } from "react-icons/sl";
import { useState, useRef } from "react";
import { fadeDownChildVariants } from "../fadeDown.js";
import { type project} from "../projects.js"
import type { IconType } from "react-icons";


export default function ProjectCard({
  image,
  title,
  description,
  tags,
  liveDemoLink,
  githubLink,
}:project) {
  const [tagHovered, setTagHovered] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    [0.7, 1, 1, 0.7]
  );
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [5, 0, 0, 5]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    [0.7, 1, 1, 0.7]
  );
  return (
    <motion.div
      style={{ opacity, filter: useMotionTemplate`blur(${blur}px)`, scale }}
      variants={fadeDownChildVariants}
      ref={containerRef}
      className="w-full group relative sm:w-[calc(50%-10px)] md:w-[calc(33%-13.33px)] flex flex-col overflow-hidden rounded h-fit max-h-[400px]"
    >
      <a href={liveDemoLink} >
        <motion.img
          variants={fadeDownChildVariants}
          src={image}
          alt="projectImage"
          className="rounded grow max-h-[250px] w-full group-hover:scale-110 transition duration-300 ease-linear"
        />
      </a>
      <div className="details space-y-1 p-2 ">
        <div className="top-section flex items-center justify-between">
          <motion.p
            variants={fadeDownChildVariants}
            className="title text-primary dark:text-dark-primary font-medium md:font-semibold text-lg md:text-xl"
          >
            {title}
          </motion.p>
          <motion.div variants={fadeDownChildVariants} className="buttons flex items-center gap-1.5">
            {liveDemoLink && (
              <a
                className="hover:text-accent text-xl"
                href={liveDemoLink}
              >
                <SlGlobe />
              </a>
            )}
            <a
              className="hover:text-accent text-xl "
              href={githubLink}
              target="_blank"
            >
              <FiGithub />
            </a>
          </motion.div>
        </div>
        <motion.p
          variants={fadeDownChildVariants}
          className="description text-secondary dark:text-dark-primary line-clamp-3 text-sm"
        >
          {description}
        </motion.p>
        <motion.div
          variants={fadeDownChildVariants}
          className="tags text-secondary dark:text-dark-secondary flex items-center mt-4"
        >
          {tags.map((tag, index) => {
            const IconComponent = tag.icon as IconType;

            return (
              <motion.div
                key={index}
                style={{
                  zIndex: tags.length - index,
                  backgroundColor: tag.color,
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`-ml-3 ${
                  index === 0 ? "ml-0" : ""
                } relative  h-10 w-10 rounded-full flex  items-center justify-center`}
              >
                {IconComponent && (
                  <IconComponent
                    className="inline-block p-1.5  h-full  w-full  text-white rounded-full"
                    onMouseEnter={() => setTagHovered(index)}
                    onMouseLeave={() => setTagHovered(null)}
                  />
                )}

                {tagHovered === index && (
                  <motion.span
                    initial={{ scale: 0, y: -10, opacity: 0 }}
                    animate={{ scale: 1, y: -20, opacity: 1, rotate: 10 }}
                    exit={{ scale: 0, y: -10, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="absolute  -top-3 left-1/2 -translate-x-1/2 bg-secondary dark:bg-dark-secondary text-white dark:text-dark-primary px-2 py-1 rounded-md text-xs shadow-lg whitespace-nowrap"
                  >
                    {tag.title}
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
