import "./App.css";
import "./index.css";
import React from "react";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
