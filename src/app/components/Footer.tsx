import React from 'react';
import Image from 'next/image';
import Im from "../../../public/1.png";
import Fb from "../../../public/fb..png";
import Gh from "../../../public/gh.png";
import In from "../../../public/in.png";
import Link from 'next/link';

function Footer() {
  return (
    <div className='bg-card text-foreground'>
      <footer className="body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-foreground">
            <Image src={Im} alt='Logo' width={30} height={30} className='rounded-full' />
            <span className="ml-3 text-xl">MH Services</span>
          </Link>
          <p className="text-sm text-foreground/60 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200/20 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} MH Services
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
            <Link target='_blank' rel="noopener noreferrer" href={'https://www.facebook.com/profile.php?id=100022533123007'} className="hover:opacity-80 transition-opacity">
              <Image src={Fb} alt='Facebook' width={24} height={24} />
            </Link>
            <Link target='_blank' rel="noopener noreferrer" href={'https://github.com/Hanif8193'} className="hover:opacity-80 transition-opacity">
              <Image src={Gh} alt='Github' width={24} height={24} />
            </Link>
            <Link target='_blank' rel="noopener noreferrer" href={'https://www.linkedin.com/in/hanif-memon-821b602b4/'} className="hover:opacity-80 transition-opacity">
              <Image src={In} alt='LinkedIn' width={24} height={24} />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
