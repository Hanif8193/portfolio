'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Im from '../../../public/1.png';
import Ic from "../../../public/ic.png";
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-background/70 backdrop-blur-sm sticky top-0 z-50'>
      <header className="body-font text-foreground">
        <div className="container mx-auto flex p-4 items-center justify-between">
          <Link href="/" className="flex title-font font-medium items-center text-foreground">
            <Image src={Im} alt='Logo' width={40} height={40} className='rounded-full'/>
            <span className="ml-3 text-xl font-semibold">MH Services</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:ml-auto md:mr-auto items-center text-base gap-6">
            <Link href={"/"} className="hover:text-primary transition-colors">Home</Link>
            <Link href={"/#About"} className="hover:text-primary transition-colors">About</Link>
            <Link href={"/#Skill"} className="hover:text-primary transition-colors">Skills</Link>
            <Link href={"/#Certificate"} className="hover:text-primary transition-colors">Certificates</Link>
            <Link href={"/#Project"} className="hover:text-primary transition-colors">Projects</Link>
            <Link href={"/#Contact"} className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center bg-gray-200 text-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-300 rounded-lg text-base transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
            <a
              href={'/Hanif_Memon_Final_CV-v2.pdf'}
              target='_blank'
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-white border-0 py-2 px-4 focus:outline-none hover:bg-primary/80 rounded-lg text-base gap-2 transition-colors"
            >
              Download CV
              <Image src={Ic} alt='Download Icon' width={24} height={24}/>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-white/10 px-6 py-4 flex flex-col gap-1">
            <Link href={"/"} onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-white/5">Home</Link>
            <Link href={"/#About"} onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-white/5">About</Link>
            <Link href={"/#Skill"} onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-white/5">Skills</Link>
            <Link href={"/#Certificate"} onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-white/5">Certificates</Link>
            <Link href={"/#Project"} onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-white/5">Projects</Link>
            <Link href={"/#Contact"} onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Contact</Link>
            <div className="flex gap-3 pt-4 mt-2 border-t border-white/10">
              <button
                onClick={toggleTheme}
                className="flex-1 inline-flex justify-center items-center bg-gray-200 text-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-300 rounded-lg text-base transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
              </button>
              <a
                href={'/Hanif_Memon_Final_CV-v2.pdf'}
                target='_blank'
                rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center bg-primary text-white border-0 py-2 px-4 focus:outline-none hover:bg-primary/80 rounded-lg text-base gap-2 transition-colors"
              >
                Download CV
                <Image src={Ic} alt='Download Icon' width={24} height={24}/>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
