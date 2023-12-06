import React, { createContext, useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const systemPreferenceDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || (systemPreferenceDark ? "dark" : "light")
  );

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    toast.dark(theme === "dark" ? "İyi günler!" : "İyi geceler!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
