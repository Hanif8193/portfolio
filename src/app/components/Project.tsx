'use client';
import Link from "next/link";
import React, { useState } from "react"; // Import useState
import Image from "next/image";
import SS from "../../../public/ss1.png"; // Original placeholder
import SS1 from "../../../public/ss.png";
import S from "../../../public/s.png";
import FuelConsumptionPWAImg from "../../../public/Screenshot (430).png"; // Image for Fuel Consumption PWA
import PhysicalAIImg from "../../../public/Screenshot (429).png"; // Image for Physical AI Introduction
import FigmaImg from "../../../public/Screenshot (428).png"; // New image for Figma project
import Hakathon1 from "../../../public/Screenshot (432).png";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Figma Design Implementation",
    description: "A web project demonstrating the implementation of a design from Figma, showcasing attention to detail and ability to translate UI/UX mockups into functional code.",
    image: FigmaImg, // Using the new image
    link: "https://figma4-puce.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Figma"]
  },
  {
    title: "Todo App",
    description: "A todo app built using Claude Code and Speckit.",
    image: Hakathon1, // Placeholder image, replace with an appropriate one for this project
    link: "https://frontend-hazel-gamma-xtb0q17d6f.vercel.app/",
    tech: ["Next.js", "Tailwind CSS"]
  },
  {
    title: "Physical AI Introduction",
    description: "An interactive introduction to physical AI, likely leveraging tools like Claude for code generation, Speckit for speech recognition, and Docusaurus for UI/documentation, providing a dynamic learning experience.",
    image: PhysicalAIImg, // Image for Physical AI Introduction
    link: "https://frontend-hazel-gamma-xtb0q17d6f.vercel.app/ch01-intro-physical-ai",
    tech: ["Claude Code", "Speckit", "Docusaurus UI"]
  },
  {
    title: "Fuel Consumption PWA",
    description: "A Progressive Web Application (PWA) designed to track and manage fuel consumption efficiently, offering an intuitive user experience on any device.",
    image: FuelConsumptionPWAImg, // Image for Fuel Consumption PWA
    link: "https://fuel-consumption-pwa.vercel.app",
    tech: ["Next.js", "Tailwind CSS"]
  },
  {
    title: "Sunni Jamat-ul-Qurra Pakistan",
    description: "A website for a religious organization, featuring complex Urdu typography and a clean, readable layout.",
    image: SS,
    link: "https://sunni-jamat-ul-qurra-pakistan.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Urdu Typography"]
  },
  {
    title: "Headless CMS Ecommerce",
    description: "A proof-of-concept ecommerce store built with a headless approach, fetching product data from a Sanity.io backend.",
    image: SS1,
    link: "https://hakathon3.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Sanity.io"]
  },
  {
    title: "Mountain Travel Site",
    description: "An early project demonstrating the ability to connect a Sanity.io backend to a frontend UI to display dynamic content.",
    image: S,
    link: "https://mountain-wheat.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Sanity.io"]
  }
];

function Project() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique technologies
  const allTechnologies = projects.reduce((acc: string[], project) => {
    project.tech.forEach(tech => {
      if (!acc.includes(tech)) {
        acc.push(tech);
      }
    });
    return acc;
  }, ['All']); // 'All' as the initial filter option

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tech.includes(activeFilter));

  return (
    <AnimatedSection id="Project">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-12"> {/* Adjusted mb */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-foreground/80">
            Here are a few examples of my work. Filter them by technology.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {allTechnologies.map(tech => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors
                ${activeFilter === tech
                  ? 'bg-primary text-white'
                  : 'bg-card text-foreground hover:bg-card-foreground'
                }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => ( // Use filteredProjects
            <div key={index} className="border border-white/10 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <Image
                alt={project.title}
                className="object-cover object-center w-full h-56"
                src={project.image}
                width={500}
                height={300}
              />
              <div className="p-6 bg-card">
                <h2 className="tracking-widest text-sm title-font font-medium text-primary mb-1">
                  {project.tech.join(" · ")}
                </h2>
                <h1 className="title-font text-lg font-medium text-foreground mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed mb-3 text-foreground/80">{project.description}</p>
                <Link target="_blank" rel="noopener noreferrer" href={project.link}>
                  <p className="leading-relaxed py-2 text-primary hover:underline">
                    View Project →
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Project;
