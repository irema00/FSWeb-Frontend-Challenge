import React from "react";
import { useData } from "../contexts/DataContext";
import { useTheme } from "../contexts/ThemeContext";

const Projects = () => {
  const { postData } = useData();
  const { projects, projectsText, projectsImg, pills, projectLinks } = postData;
  const { theme } = useTheme();

  return (
    <div className="bg-[#CBF281]">
      <div>
        <div className="ml-[15%] pt-16 pb-8">
          <h2 className="text-[48px] sm:text-start  text-[#4731D3] font-bold">
            Projects
          </h2>
        </div>
        <div className="ml-[15%] mr-[10%] flex flex-wrap gap-12 pb-20">
          {projects &&
            projects.map((project, index) => (
              <div
                key={index}
                className=" bg-white justify-center sm:rounded-2xl sm:flex"
              >
                <img src={projectsImg[index]} alt={`Project ${index + 1}`} />
                <div>
                  <h3 className="text-[32px] text-[#4731D3] font-bold sm:ml-12 mt-12 sm:text-start text-center">
                    {project}
                  </h3>
                  <p className="sm:ml-12 mt-8 text-[#383838] text-xl sm:m-3 sm:text-start text-center sm:mr-12">
                    {projectsText[index]}
                  </p>
                  <div className="pill flex flex-wrap flex-row sm:m-[15px] sm:justify-start justify-center my-[10px] sm:ml-12">
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
                  <div className="project-links sm:text-start sm:ml-12 my-[20px]">
                    {projectLinks &&
                      projectLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`underline mr-3 ${
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
