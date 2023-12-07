import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-baseline gap-2 w-[200px] mt-0 sm:justify-center ">
      <div
        className={`tdnn ${theme === "light" ? "day" : ""}`}
        onClick={toggleTheme}
      >
        <div className={`moon ${theme === "light" ? "sun" : ""}`}></div>
      </div>
      {theme === "light" ? (
        <div className="text-indigo-700 text-[15px] font-bold font-['Inter'] tracking-wider">
          DARK MODE
        </div>
      ) : (
        <div className="text-zinc-300 text-[15px] font-bold font-['Inter'] tracking-wider">
          LIGHT MODE
        </div>
      )}
    </div>
  );
}

export default ThemeToggle;
