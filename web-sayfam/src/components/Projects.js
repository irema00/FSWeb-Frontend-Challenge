import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
const Projects = () => {
  const { postData, loading, error } = useContext(DataContext);
  const { projects, projectsText, projectsImg } = postData;
  return (
    <div>
      <h2>Projects</h2>
      {projects &&
        projects.map((project, index) => (
          <div key={index}>
              <h3>{project}</h3>
            <p>{projectsText && projectsText[index]}</p>
              <img src={projectsImg && projectsImg[index]} />
          </div>
        ))}
    </div>
  );
};

export default Projects;
