import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
const Projects = () => {
  const { postData, loading, error } = useContext(DataContext);
  const { projects, projectsText } = postData;
  return (
    <div>
      <h2>Projects</h2>
      {projects &&
        projects.map((project, index) => (
          <div key={index}>
            <h4>{project}</h4>
            <p>{projectsText && projectsText[index]}</p>
          </div>
        ))}
    </div>
  );
};

export default Projects;
