import React from "react";
import { useData } from "../contexts/DataContext";
import { useTheme } from "../contexts/ThemeContext";

const Projects = () => {
  const { postData } = useData();
  const { projects, projectsText, projectsImg, pills, projectLinks, pages } =
    postData;
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-[#1A210B] text-[#FFFFFF]"
          : "bg-[#CBF281] text-[#383838]"
      }`}
    >
      <div>
        <div className="ml-[15%] pt-16 pb-8">
          <h2
            className={`text-[48px] sm:text-start   text-[#4731D3] font-bold  ${
              theme === "dark" ? "text-[#CBF281]" : "text-[#4731D3]"
            }`}
          >
            {pages?.projects}
          </h2>
        </div>
        <div className="ml-[15%] mr-[10%] flex flex-wrap sm:gap-12 pb-20">
          {projects &&
            projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white justify-center sm:rounded-2xl sm:flex ${
                  theme === "dark"
                    ? "text-[#FFFFFF] bg-[#2B2727]"
                    : "text-[#4731D3] bg-[#FFFFFF]"
                }`}
              >
                <img
                  className="w-[100%] rounded-r-xl sm:rounded-r-none "
                  src={projectsImg[index]}
                  alt={`Project ${index + 1}`}
                />
                <div
                  className={`sm:ml-12 mt-8 text-[#383838] text-xl sm:m-3 sm:text-start text-center sm:mr-12${
                    theme === "dark" ? "bg-[#CBF281]" : "bg-[#4731D3]"
                  }`}
                >
                  <h3
                    className={`text-[32px]  font-bold sm:ml-6 mt-12 sm:text-start sm:mb-6 text-center ${
                      theme === "dark" ? "text-[#C1BAED]" : "text-[#4731D3]"
                    }`}
                  >
                    {project}
                  </h3>
                  <p
                    className={`sm:ml-6 mt-8 px-4  sm:px-0 text-[#383838] font-[400] text-xl sm:m-3 sm:text-start text-center sm:mr-12 mb-5 ${
                      theme === "dark"
                        ? "text-[#FFFFFF]"
                        : "text-                  [#383838]"
                    }`}
                  >
                    {projectsText[index]}
                  </p>
                  <div className="pill flex flex-wrap flex-row sm:m-[15px] sm:justify-start justify-center font-thin text-base gap-5 sm:gap-0 text-center font my-[10px] sm:ml-6">
                    {pills &&
                      pills.map((pill, index) => (
                        <p
                          key={index}
                          className={`rounded-full p-1 mt-2 sm:mr-2 w-20  ${
                            theme === "dark"
                              ? "bg-[#8173DA] text-[#FFFFFF]"
                              : "bg-[#4731D3] text-[#FFFFFF]"
                          }`}
                        >
                          {pill}
                        </p>
                      ))}
                  </div>
                  <div className="project-links sm:text-start sm:mt-6  sm:ml-6 my-[20px]">
                    {projectLinks &&
                      projectLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`underline font-normal mr-9 ${
                            theme === "dark"
                              ? "text-[#CBF281]"
                              : "text-[#120B39]"
                          }`}
                        >
                          {link.label}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
