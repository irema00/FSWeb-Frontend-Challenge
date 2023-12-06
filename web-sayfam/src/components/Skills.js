import React from "react";
import { useData } from "../contexts/DataContext";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { postData } = useData();
  const { skills, pages } = postData;
  const { theme } = useTheme();

  return (
    <div
      className={`flex sm:pl-[15%] sm:pr-[10%] sm:py-[5%] pb-8 flex-col sm:flex-row 
      sm:items-start 
       py-[0] sm:gap-[5%] m-auto
      ${theme === "dark" ? "bg-[#252128]" : "bg-[#FFFFFF]"}`}
    >
      <div className="flex gap-[200px]">
        <h2
          className={`font-bold text-[3rem]  ${
            theme === "dark" ? "text-[#CBF281]" : "text-[#4731D3]"
          }`}
        >
          {pages?.skills}
        </h2>
        <div className="skill-box-container flex items-start  ">
          <ul className="flex justify-between list-none flex-wrap sm: sm:flex-wrap  flex-col sm:flex-row sm:items-start">
            {skills &&
              Object.entries(skills).map(([skillName, skillImage], index) => (
                <li
                  key={index}
                  className="flex
                  text-center items-center justify-center sm:justify-start flex-col mr-[100px]
                  mb-9 sm:flex-row min-w-[260px]"
                >
                  <img
                    className=" w-[120px] h-auto
                  "
                    src={skillImage}
                    alt={skillName}
                  />

                  <div
                    className={` text-xl sm:text-2xl sm:max-h-[720px] ml-[20px] font-[500] items-center justify-center
                    text-center ${
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
    </div>
  );
};

export default Skills;
