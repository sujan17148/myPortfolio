import { createContext, useState,useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");
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
