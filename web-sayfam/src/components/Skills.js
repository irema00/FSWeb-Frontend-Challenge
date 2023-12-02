import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Skills = () => {
  const { postData } = useContext(DataContext);
  const { skills } = postData;
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
