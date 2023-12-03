import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      {language === "en" ? "Türkçe'ye Geç" : " Switch to English"}
    </button>
  );
};

export default LanguageSwitch;
