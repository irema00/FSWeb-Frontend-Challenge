import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Projects = () => {
  const { postData, loading, error } = useContext(DataContext);
  const { projects, projectsText, projectsImg } = postData;
  return (
    <div className="projects-container">
      <h2>Projects</h2>,
      <div className="project-box">
        {projects &&
          projects.map((project, index) => (
            <div key={index}>
              <h3>{project}</h3>
              <p>{projectsText && projectsText[index]}</p>
              <img src={projectsImg && projectsImg[index]} />
              <div className="pill"> PILLS</div>
              <div className="links"> LINKS</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
