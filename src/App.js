import React from "react";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    
    <div className="container">
      <div className="mt-100px" style={{marginBottom:"150px"}}>
      <NavBar />
      </div>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      
    </div>
  );
}

export default App;
