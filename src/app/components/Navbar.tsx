'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Im from '../../../public/1.png';
import Ic from "../../../public/ic.png";
import { useTheme } from '../context/ThemeContext'; // Import useTheme

function Navbar() {
  const { theme, toggleTheme } = useTheme(); // Use the theme hook

  return (
    <div className='bg-background/70 backdrop-blur-sm sticky top-0 z-50'>
      <header className="body-font text-foreground">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-foreground mb-4 md:mb-0">
            <Image src={Im} alt='Logo' width={40} height={40} className='rounded-full'/>
            <span className="ml-3 text-xl font-semibold">MH Services</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-6">
            <Link href={"/"} className="hover:text-primary transition-colors">Home</Link>
            <Link href={"/#About"} className="hover:text-primary transition-colors">About</Link>
            <Link href={"/#Skill"} className="hover:text-primary transition-colors">Skills</Link>
            <Link href={"/#Project"} className="hover:text-primary transition-colors">Projects</Link>
            <Link href={"/#Contact"} className="hover:text-primary transition-colors">Contact</Link>
          </nav>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center bg-gray-200 text-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-300 rounded-lg text-base mt-4 md:mt-0 ml-4 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
          <a
            href={'/GI-AIWMD.pdf'}
            target='_blank'
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary text-white border-0 py-2 px-4 focus:outline-none hover:bg-primary/80 rounded-lg text-base mt-4 md:mt-0 gap-2 transition-colors ml-4" // Added ml-4 for spacing
          >
            Download CV
            <Image src={Ic} alt='Download Icon' width={24} height={24}/>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
