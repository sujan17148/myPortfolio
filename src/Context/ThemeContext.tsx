import { createContext,useContext,useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
type ThemeContextProviderProps ={
  children:React.ReactNode
}
type ThemeContextProps={
  theme:string,
  setTheme:React.Dispatch<React.SetStateAction<string>>
}

// eslint-disable-next-line react-refresh/only-export-components
 const ThemeContext = createContext({} as ThemeContextProps);

  export function useTheme(){
    return useContext(ThemeContext)
  }

export function ThemeContextProvider({ children }:ThemeContextProviderProps) {
  const [theme, setTheme] = useLocalStorage<string>("theme","dark");
  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
