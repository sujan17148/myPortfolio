import { useState} from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  type Variants,
} from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ThemeButton from "./ThemeButton.js"
import { fadeDownChildVariants, fadeDownContainerVariants } from "../fadeDown.js";

type navItemsProps={
  title:string,
  href:string,
}
type MobileNavbarProps={
  isMenuVisible:boolean,
  setIsMenuVisible:React.Dispatch<React.SetStateAction<boolean>>
}


export default function Navbar() {
  const[isMenuVisible,setIsMenuVisible]=useState(false)
  const navItems:navItemsProps[] = [
    { title: "Home", href: "#home-section" },
    { title: "About", href: "#about-section" },
    { title: "Projects", href: "#projects-section"},
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return <>
    <motion.div
      animate={{
        width: scrolled ? "90%" : "100%",
        boxShadow: scrolled ? "var(--shadow-lg)" : "none",
        y: scrolled ? 10:0,
        padding:scrolled? "0 10px": "0"
      }}
      transition={{ duration: 0.3 }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
     variants={fadeDownContainerVariants}
      className="h-16 flex items-center justify-between  backdrop-blur-2xl  sticky top-0 mx-auto rounded-full z-20"
    >
      <motion.img variants={fadeDownChildVariants} src="/profile.webp" alt="profile" className="h-14 border-3 border-white aspect-square rounded-full object-cover" />
      <ul className="links hidden md:flex items-center  text-base md:text-lg ">
        {navItems.map((item, index) => (
          <motion.li variants={fadeDownChildVariants}
            key={index}
            className="relative p-2"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          ><a href={item.href}>
            {item.title}
          </a>
            {hovered == index && (
              <motion.span
               layoutId="hovered-span"
                className="absolute left-2 bottom-2 bg-primary dark:bg-dark-primary w-[calc(100%-16px)] h-0.5"
              ></motion.span>
            )}
          </motion.li>
        ))}
       <motion.span variants={fadeDownChildVariants}>
       <ThemeButton/>
       </motion.span>
      </ul>
     <motion.div variants={fadeDownChildVariants} className="md:hidden flex items-center gap-2">
     <ThemeButton/>
     <GiHamburgerMenu className="text-2xl" onClick={()=>setIsMenuVisible(true)} />
     </motion.div>
    </motion.div>
      <MobileNavbar isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/>
  </>
}


function MobileNavbar({isMenuVisible,setIsMenuVisible}:MobileNavbarProps){
  const containerVariants:Variants={
    initial:{},
    animate:{
      transition:{staggerChildren:0.2}
    }
  }
  const childVariants:Variants={
    initial:{x:40,opacity:0},
    animate:{
      x:0,opacity:1,
      transition:{
        type:"spring",
        stiffness:100,
        damping:10,
      }
    }
  }
         return <div className="relative md:hidden">
                <div className={`mobile-menu z-50 fixed inset-0 h-screen w-screen p-3 bg-dark-primary dark:bg-primary  transition duration-300 ease-linear ${isMenuVisible ? "translate-x-0 ":"translate-x-full"}`}>
                <p className="text-2xl font-bold text-accent">Sujan</p>
                <IoMdClose className="absolute top-3 right-7 text-3xl" onClick={()=>setIsMenuVisible(false)}/>
                <motion.ul variants={containerVariants} initial="initial" animate={isMenuVisible ? "animate" : "initial"} className="links font-medium space-y-1 mt-3">
               <motion.li variants={childVariants} ><a href="#home-section" onClick={()=>setIsMenuVisible(false)}>Home</a></motion.li>
               <motion.li variants={childVariants} ><a href="#about-section" onClick={()=>setIsMenuVisible(false)}>About</a></motion.li>
               <motion.li variants={childVariants} ><a href="#projects-section" onClick={()=>setIsMenuVisible(false)}>Projects</a></motion.li>
               <motion.li variants={childVariants} ><a href="#contact-section" onClick={()=>setIsMenuVisible(false)}>Contact Us</a></motion.li>
             </motion.ul>
                </div>
         </div>
}

