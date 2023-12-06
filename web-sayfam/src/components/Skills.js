import React from "react";
import { useData } from "../contexts/DataContext";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { postData } = useData();
  const { skills } = postData;
  const { theme } = useTheme();

  return (
    <div
      className={`flex sm:pl-[15%] sm:py-[5%] pb-8 flex-col sm:flex-row justify-center items-center 
      sm:items-start 
       py-[0] sm:gap-[5%] m-auto
      ${theme === "dark" ? "bg-[#252128]" : "bg-[#FFFFFF]"}`}
    >
      <h2
        className={`font-bold text-[3rem]  ${
          theme === "dark" ? "text-[#CBF281]" : "text-[#4731D3]"
        }`}
      >
        Skills
      </h2>
      <div className="skill-box-container flex items-start ">
        <ul className="flex list-none flex-wrap sm: sm:flex-wrap  flex-col sm:flex-row sm:items-start">
          {skills &&
            Object.entries(skills).map(([skillName, skillImage], index) => (
              <li
                key={index}
                className="flex items-center justify-center sm:justify-start flex-col sm:flex-row sm:mr-[50px] min-w-[425px]"
              >
                <img
                  className=" w-[250px] h-auto
                  "
                  src={skillImage}
                  alt={skillName}
                />

                <div
                  className={`text-xl sm:text-xl text-3xl sm:max-h-[720px] ${
                    theme === "dark" ? "text-[#FFFFFF]" : "text-[#777777]"
                  }`}
                >
                  {skillName}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
