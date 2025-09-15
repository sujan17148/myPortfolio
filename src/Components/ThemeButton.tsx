import { useTheme } from "../Context/ThemeContext.js"
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";

export default function ThemeButton(){
 const {theme,setTheme}=useTheme()
 return theme=="light"? <LuMoon  className="h-10 w-10 rounded-full p-2 hover:bg-accent hover:text-white" onClick={()=>setTheme("dark")} />:<MdOutlineWbSunny className="h-10 w-10 rounded-full p-2 hover:bg-accent hover:text-white" onClick={()=>setTheme("light")} />
}