import type { Variants } from "motion";

const fadeDownContainerVariants:Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeDownChildVariants:Variants= {
    initial: { y: -20, opacity: 0,filter:"blur(5px)" },
    animate: {
      y: 0,
      opacity: 1,
      filter:"blur(0px)",
      transition: {
        type: "spring",
        stiffness:40,
        damping:10
      },
    },
  };

  export {fadeDownChildVariants,fadeDownContainerVariants};