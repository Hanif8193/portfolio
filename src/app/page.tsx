import React from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skill from "./components/Skill";
import About from "./components/About";
import Certificate from "./components/Certificate";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skill />
      <Certificate />
      <Project />
      <Contact />
    </main>
  );
}

export default Home;
