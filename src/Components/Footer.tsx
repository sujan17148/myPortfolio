import { LuMail,LuGithub,LuLinkedin } from "react-icons/lu";

export default function Footer(){
    return <div className="flex items-center justify-between h-10 w-full border-t border-t-secondary py-5 mt-4">
          <span className="text-lg md:text-xl text-accent  font-semibold">Sujan</span>
          <div className="links flex gap-2 items-center">
          <a href="https://github.com/sujan17148"><LuGithub className="h-7 w-7 p-1 hover:text-accent"/></a>
      <a href="https://www.linkedin.com/in/sujan-sah-01109226a/"><LuLinkedin className="h-7 w-7 p-1 hover:text-accent" /></a>
      <a href="mailto:sujansah.dev@gmail.com"><LuMail className="h-7 w-7 p-1 hover:text-accent"/></a>
          </div>
    </div>
}