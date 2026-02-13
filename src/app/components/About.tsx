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
            After a long and successful career in another field, I discovered a passion for technology and the endless possibilities of code. This led me to the prestigious Governor&apos;s Initiative for Artificial Intelligence & Computing (GIAIC), where I have fully immersed myself in the world of modern web development.
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            I thrive on building beautiful, functional, and user-centric applications. My focus is on fullstack development, where I enjoy bringing ideas to life using technologies like React, Next.js, and TypeScript. I am a firm believer in clean code, continuous learning, and the power of collaboration.
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            I am now seeking opportunities where I can contribute my unique background, dedication, and strong technical skills to a forward-thinking team.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default About;
