import chatAppImage from "./assets/chat-app.png";
import blogAppImage from "./assets/blog-app.png";
import ecommerceAppImage from "./assets/ecommece.png";
import animeAppImage from "./assets/anime-site.jpg";
import recipeAppImage from "./assets/recipe-app.jpg";

import {
  SiReact,
  SiAppwrite,
  SiRedux,
  SiReacthookform,
  SiTailwindcss,
  SiJavascript,
  SiReactrouter,
  SiClerk,
} from "react-icons/si";
import { ChefHat, LayoutDashboard } from "lucide-react";
  

export const projects = [
  {
    id: 1,
    image: blogAppImage,
    title: "Blog Space",
    description:
      "A full-featured, full-stack React blog platform with draft/publish support, live view counts, user profiles, likes system, TinyMCE integration, Redux state management, and dark mode support.",
    tags: [
      { title: "React", icon: SiReact, color: "#61DAFB" },
      { title: "Appwrite", icon: SiAppwrite, color: "#F02E65" },
      { title: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { title: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { title: "React Hook Form", icon: SiReacthookform, color: "#E34F26" },
    ],
    githubLink: "https://github.com/sujan17148/blog-app",
    liveDemoLink: "https://blog.seraxmi.com",
  },
  {
    id: 2,
    image: chatAppImage,
    title: "VibeChat",
    description:
      "A full-stack chat application built with React and Appwrite, featuring real-time messaging, secure authentication, and user profile management.",
    tags: [
      { title: "React", icon: SiReact, color: "#61DAFB" },
      { title: "Appwrite", icon: SiAppwrite, color: "#F02E65" },
      { title: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { title: "React Hook Form", icon: SiReacthookform, color: "#E34F26" },
      { title: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
    ],
    githubLink: "https://github.com/sujan17148/vibeChat",
    liveDemoLink: "https://appwritevibechat.netlify.app/",
  },

  {
    id: 3,
    image: ecommerceAppImage,
    title: "Shop Craft",
    description:
      "A modern, fully responsive e-commerce web application built using React, Clerk for authentication, Fakestore API for product data, and styled with Tailwind CSS.",
    tags: [
      { title: "React", icon: SiReact, color: "#61DAFB" },
      { title: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { title: "Clerk Auth", icon: SiClerk, color: "#111827" },
      { title: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
    ],
    githubLink: "https://github.com/sujan17148/e-commerce-app",
    liveDemoLink: "https://shopcraft-store.netlify.app/",
  },

  {
    id: 4,
    image: animeAppImage,
    title: "Anime App",
    description:
      "A sleek anime search web app built with Vanilla JavaScript and styled using TailwindCSS. It fetches anime data like titles, synopses, images, and ratings from the Jikan API.",
    tags: [
      { title: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { title: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { title: "Responsive Design", icon: LayoutDashboard, color: "#8B5CF6" },
    ],
    githubLink:
      "https://github.com/sujan17148/web-practice-projects/tree/main/anime-site",
    liveDemoLink: null,
  },

  {
    id: 5,
    image: recipeAppImage,
    title: "Recipe App",
    description:
      "A simple, user-friendly web application that allows users to browse, search, and manage delicious recipes.",
    tags: [
      { title: "React", icon: SiReact, color: "#61DAFB" },
      { title: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { title: "React Router", icon: SiReactrouter, color: "#E34F26" },
      { title: "Recipes", icon: ChefHat },
    ],
    githubLink: "https://github.com/sujan17148/recipe-app",
    liveDemoLink: "https://recipeapp17148.netlify.app/",
  },
];
