import React, { createContext, useState, useContext, useEffect } from "react";

export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ? localStorage.getItem("language") : "en"
  );
  const toggleLanguage = () => {
    setLanguage((lang) => (lang === "en" ? "tr" : "en"));
  };
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
