"use client";
import React from 'react';
import Image from "next/image";
import img from '../../../public/pic1.jpeg';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

function Hero() {
  return (
    <section className="text-foreground body-font bg-background">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-foreground">
            Fullstack Developer & Creative Coder
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ['Building beautiful web experiences.', 'Expert in Next.js & Tailwind CSS.', 'Passionate about clean code.'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-8 leading-relaxed max-w-lg">
            I am a dedicated fullstack developer with a passion for creating intuitive, dynamic, and user-friendly web applications. Currently honing my skills in modern web technologies through the Governor&apos;s Initiative for Artificial Intelligence & Computing (GIAIC).
          </p>
          <div className="flex justify-center gap-4">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded-lg text-lg transition-colors">
                Contact Me
              </button>
            </Link>
            <Link href={"#Project"}>
              <button className="inline-flex text-foreground bg-transparent border-2 border-primary py-2 px-6 focus:outline-none hover:bg-primary hover:text-white rounded-lg text-lg transition-colors">
                View My Work
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className='object-cover object-center rounded-full border-4 border-primary shadow-2xl mx-auto'
            src={img}
            alt='Hanif'
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
