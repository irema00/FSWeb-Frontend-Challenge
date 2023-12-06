import "./App.css";
import "./index.css";
import React from "react";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
