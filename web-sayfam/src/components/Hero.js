import React, { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import Header from "./Header";
import LanguageSwitch from "./LanguageSwitch";
import { LanguageContext } from "../contexts/LanguageContext";
import { engData, trData } from "../data";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const { postData, setPostData, loading, error } = useContext(DataContext);
  const { language } = useContext(LanguageContext);
  const { description, heroRight, header, links } = postData;
  useEffect(() => {
    const dataToSend = language === "en" ? engData : trData;
    setPostData(dataToSend);
  }, [language, setPostData]);
  return (
    <div>
      <Header />
      <h1>{header}</h1>
      <p>{description}</p>
          <div className="hero-btn">
            {links &&
              links.map((link, index) => (
                <div key={index}>
                  <button className="btn">
                    {index % 2 === 0 ? (
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    ) : (
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    )}

                    <p>{link}</p>
                  </button>
                </div>
              ))}
          </div>
    </div>
  );
};
export default Hero;
