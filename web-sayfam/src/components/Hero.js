import "../App.css";
import React from "react";

import Header from "./Header";
import LanguageSwitch from "../utils/LanguageSwitch";
import ThemeToggle from "../utils/ThemeToggle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { useData } from "../contexts/DataContext";
import { useTheme } from "../contexts/ThemeContext";

const Hero = () => {
  const { postData } = useData();
  const { description, heroRight, header, links } = postData;
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-wrap-reverse sm:no-wrap justify-center m-auto ${
        theme === "dark" ? "bg-[#171043]" : "bg-[#4731D3]"
      }`}
    >
      <div className="sm:w-2/3 sm:pl-[15%] sm:pb-20 sm:pt-12 sm:relative ">
        <div className=" flex flex-col justify-center h-auto ">
          <div className="flex flex-row   sm:items-end  sm:content-center    justify-around sm:justify-end sm:pl-[55%] sm:pr-[5%] pl-[60%] ">
            <LanguageSwitch />
          </div>
          <div className="header-left flex justify-center sm:justify-start sm:mt-0 mt-10">
            <Header />
          </div>
        </div>
        <div className="hero-container flex flex-col py-[0] justify-center m-auto">
          <div className="flex flex-wrap sm:flex-nowrap sm:flex-row ">
            <div className="flex-wrap mb-8 md:mb-0 md:w-1/2 min-w-[600px]">
              <h1 className="text-center sm:text-left font-semibold text-5xl leading-[59.4px] text-[#CBF281] mx-12 sm:ml-0 sm:mt-20 mt-14 text-left mb-8">
                {header}
              </h1>
              <p className="font-light text-[24px]  sm:ml-0 text-[#FFFFFF] sm:text-left text-center sm:px-0  px-6">
                {description}
              </p>
              <div className="hero-btn flex items-center justify-center sm:justify-start flex-row sm:gap-2 gap-12  md:space-x-4">
                {links &&
                  links.map((link, index) => (
                    <div key={index}>
                      <button
                        className={`flex w-[127px] h-[52px] rounded-[6px] border-[1px] border-[solid] pl-[12px] pr-[20px,] py-[12px,] text-[#3730A3] flex-row items-center justify-evenly font-medium text-[18px] leading-[28px] mt-8 ${
                          theme === "dark"
                            ? "bg-[#252128] text-[#FFFFFF]"
                            : "bg-[#FFFFFF] text-[#3730A3]"
                        }`}
                      >
                        {index % 2 === 0 ? (
                          <FontAwesomeIcon icon={faGithub} size="2x" />
                        ) : (
                          <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        )}
                        <p
                          className={`text-[1rem] ${
                            theme === "dark"
                              ? "text-[#FFFFFF]"
                              : "text-[#3730A3]"
                          }`}
                        >
                          {link}
                        </p>
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            <img
              className="sm:w-auto w-[500px] sm:h-auto  sm:top-[100px]  sm:-right- [260px] sm:ml-0 ml-12"
              src={heroRight}
              alt="woman-working-laptop"
            />
          </div>
        </div>
      </div>
      <div
        className={`sm:w-1/3 sm:pr-[20%]  sm:pb-20 mb-[10px] sm:mb-0 sm:pt-6 ${
          theme === "light" ? "sm:bg-[#CBF281]" : "sm:bg-[#1A210B]"
        }`}
      >
        <ThemeToggle />
      </div>
    </div>
  );
};
export default Hero;
