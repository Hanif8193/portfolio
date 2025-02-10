import React from 'react'
import Image from 'next/image'
import Im from '../../../public/pic.jpeg'

function About() {
  return (
    <div id='About'  className='bg-blue-50 bg-cover bg-center '>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className=' object-center object-cover  border-2xl rounded-3xl border-red-600 shadow-2xl  mx-auto' src={Im}alt='Hanif'width={500}height={500} />
      
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900">
        About Me:
        <br className="hidden lg:inline-block" />
        
      </h1>
      <p className="mb-8 leading-relaxed text-xl">
      I am Mohammad Hanif Memon S/O Late Haji Dost Mohammad born  in Tando Allahyar 
 on  27th April 1964 . 
Matriculation from Govt High School Tando Allahyar. F-A from SM college Tando Allahyar.r 
Two Years B-A. from Wafaqi Urdu Art College Near Civil Hospital Karachi.
<br />
<br />
Now a day I am learnt Typescript & Next.js still runing Python is running from G.I.A.I.C from Karachi. 

        
      </p>
     
     
    </div>
  </div>
</section>

    </div>
  )
}

export default About
