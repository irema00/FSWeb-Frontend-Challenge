import "./App.css";
import React from "react";
import { DataProvider } from "./contexts/DataContext";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <DataProvider>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Contact />
      </DataProvider>
    </LanguageProvider>
  );
}

export default App;
