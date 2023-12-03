import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Skills = () => {
  const { postData } = useContext(DataContext);
  const { skills } = postData;
  return (
    <div className="skills-container">
      <h2>Skills</h2>{" "}
      <div className="skill-box">
        <ul>
          {skills &&
            Object.entries(skills).map(([skillName, skillImage], index) => (
              <li key={index}>
                <img
                  src={skillImage}
                  alt={skillName}
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
                {skillName}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
