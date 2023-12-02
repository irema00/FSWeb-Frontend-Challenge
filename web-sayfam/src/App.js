import "./App.css";
import React from "react";
import { DataProvider } from "./contexts/DataContext";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Contact from "./components/Contact";

function App() {
  return (
    <DataProvider>
      <div>APP </div>
      <Hero />
      <Skills />
      <Projects />
      <Profile />
      <Contact />
    </DataProvider>
  );
}

export default App;
