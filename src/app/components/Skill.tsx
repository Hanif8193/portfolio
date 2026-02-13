import React from "react";
import AnimatedSection from "./AnimatedSection";

const skills = {
  Fullstack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  "Backend & Database": ["Sanity.io"],
  "AI Technologies": ["Python", "Agentic AI"],
  "Tools": ["Git", "GitHub", "Vercel", "VS Code"],
  "Now Learning": ["Claude Native AI Application"]
};

function Skill() {
  return (
    <AnimatedSection id="Skill">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            My Professional Skills
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-foreground/80">
            A selection of technologies and tools I am proficient in.
          </p>
        </div>
        <div className="space-y-12">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category}>
              <h2 className="text-2xl font-medium title-font mb-4 text-center sm:text-left text-primary">{category}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {list.map((skill) => (
                  <div key={skill} className="bg-card border border-white/10 rounded-lg p-4 text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <p className="text-lg font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Skill;
