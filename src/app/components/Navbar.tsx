
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Im from '../../../public/1.png'
import Ic from "../../../public/ic.png"
function Navbar() {
  return (
    <div className='bg-[#4285F4]'>

      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2  flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image  src={Im} alt='Img' width={40}height={40}/>
      
     
      <span className="ml-3 text-xl ">MH Services</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <Link href={"/"}  className="mr-5 hover:text-green-500">Home</Link>
    <Link href={"/#About"}  className="mr-5 hover:text-green-500">About Us</Link>
    <Link href={"/#Skill"}  className="mr-5 hover:text-green-500">Skills</Link>
    <Link href={"/#Project"}  className="mr-5 hover:text-green-500">Projects</Link>
    <Link href={"/#Contact"}  className="mr-5 hover:text-green-500">Contact Us</Link>
    
    </nav>

    
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-300 rounded 
    text-base mt-4 md:mt-0 gap-2">
      
      Download CV
      <Link target='blank' href={'cv-1.png'}>
      <Image   src={Ic}  alt='Ic'width={30}height={30}/>
      </Link>
    
    </button>
  
     
    
  </div>
</header>

    </div>
  )
}

export default Navbar
