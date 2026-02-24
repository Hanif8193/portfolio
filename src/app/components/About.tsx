import React from 'react';
import Image from 'next/image';
import Im from '../../../public/pic.jpeg';
import AnimatedSection from './AnimatedSection';

function About() {
  return (
    <AnimatedSection id='About'>
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image 
            className='object-cover object-center rounded-lg shadow-2xl mx-auto' 
            src={Im} 
            alt='Profile Picture' 
            width={500} 
            height={500} 
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-foreground">
            About Me
          </h1>
          <p className="mb-4 leading-relaxed text-lg">
            Results-driven Front-End & AI-Focused Developer with hands-on expertise in Next.js, Tailwind CSS, and Python automation systems. Proven ability to design, develop, and deploy scalable web applications, admin dashboards, and AI-powered solutions. Strong problem-solving skills with a focus on clean architecture and production-ready deployments.
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            I am a dedicated fullstack developer with a passion for creating intuitive, dynamic, and user-friendly web applications. Currently honing my skills in modern web technologies through the Governor&apos;s Initiative for Artificial Intelligence & Computing (GIAIC).
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            I am deeply passionate about building modern, user-friendly web applications and would love the opportunity to contribute to your team’s innovative projects. It would be a privilege to work alongside forward-thinking teams and continue learning from industry expertise.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default About;
