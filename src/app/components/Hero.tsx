"use client";
import React from 'react'
import Image from "next/image"
import img from '../../../public/pic1.jpeg'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';


function Hero() {
  return (
    
      <section className="text-gray-600 body-font bg-blue-50 bg-cover bg-center">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am a
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Html , CSS, Typescript coder.','Next.js, Tailwind CSS', 'Runing Python', 'Frontend Devloper.','Freelancer.'],
    autoStart: true,
    loop: true,
  }}
/>
        
      </h1>  
        <div className='w-24 h-1 bg-green-600'>

        </div>
      
      <p className="mb-8 leading-relaxed">
        I am Hanif Memon S/O Late Haji Dost Muhammad. I am working as a web devlopers
        Lived in Model Colony Malir Karachi & learn in Governar House in Governar Initiative Artifical Intelegence Course.
        
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image  className='object-center object-cover rounded-full border-2xl border-orange-500 shadow-xl mx-auto'   
     src={img}alt='Hanif'width={400}height={200} />
      
    </div>
  </div>
</section>

    
  )
}

export default Hero
