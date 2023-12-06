import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme } = useTheme();

  const style1 = {
    color: theme === "dark" ? "#777777" : "#CAF181",
  };
  const style2 = {
    color: theme === "dark" ? "#BAB2E7" : "#D9D9D9",
  };

  return (
    <span className="lang-switch" onClick={toggleLanguage}>
      {language === "en" ? (
        <>
          <span className="lang-switch-text1" style={style1}>
            TÜRKÇE
          </span>
          <span className="lang-switch-text2" style={style2}>
            'YE GEÇ
          </span>
        </>
      ) : (
        <>
          <span className="lang-switch-text2" style={style2}>
            SWITCH TO
          </span>
          <span className="lang-switch-text1" style={style1}>
            <span> ENGLISH</span>
          </span>
        </>
      )}
    </span>
  );
};

export default LanguageSwitch;
