import React from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skill from "./components/Skill";
import About from "./components/About";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
}

export default Home;
