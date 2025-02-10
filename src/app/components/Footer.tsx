import React from 'react'
import Image from 'next/image'
import Im from "../../../public/1.png"
import Fb from "../../../public/fb..png"
import Gh from "../../../public/gh.png"
import In from "../../../public/in.png"
import Link from 'next/link'

function Footer() {
  return (
    <div className='bg-[#bbbdf6] bg-cover bg-center'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={Im}alt='Logo'width={30}height={30}/>  
      
      <span className="ml-3 text-xl">MH Services</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 MH Services —
     
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
    
       
       
      
      <Link target='blank'  href={'https://www.facebook.com/profile.php?id=100022533123007'} className="ml-3">
       <Image    src={Fb}alt='Fb'width={20}height={20} />
       
      </Link>
      <Link target='blank' href={'https://github.com/Hanif8193'} className="ml-3 text-gray-500 ">
        <Image src={Gh}alt='Gh'width={20}height={20}/>
        
      </Link>
      <Link target='blank' href={'https://www.linkedin.com/in/hanif-memon-821b602b4/'}  className="ml-3 text-gray-500 ">
        <Image src={In}alt='In'width={20}height={20}/>
        
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
