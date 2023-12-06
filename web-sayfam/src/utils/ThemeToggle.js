import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`tdnn ${theme === "light" ? "day" : ""}`}
      onClick={toggleTheme}
    >
      <div className={`moon ${theme === "light" ? "sun" : ""}`}></div>
    </div>
  );
}

export default ThemeToggle;
