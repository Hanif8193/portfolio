import React from "react";
import Image from "next/image"
import HT from '../../../public/ht.png'
import CSS from '../../../public/css.png'
import UN from '../../../public/un.png'
function Skill() {
  return (
    <div id="Skill" className="bg-blue-50 bg-cover bg-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Skills
              
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            
            <div className="p-4 md:w-1/3">
              <div className="flex items-center mb-3">

                <div className="w-8 h-8 mr-3 inline-flex  items-center justify-center rounded-full bg-green-500  flex-shrink-0">

               <Image src={HT}alt="HT"width={30}height={30} />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  HTML
                </h2>
              </div>
              
              <div className=" relative h-1 w-full bg-gray-300 rounded"></div>
              <div className="absolut bg-green-500 h-1 rounded w-{80%} "></div>
              
                <p className="font-bold text-green-500 text-right">80%</p>
                </div>
            </div>
            <div className="flex flex-col ">
            
            <div className="p-4 md:w-1/3">
              <div className="flex items-center mb-3">

                <div className="w-8 h-8 mr-3 inline-flex  items-center justify-center rounded-full bg-green-500  flex-shrink-0">

               <Image src={CSS}alt="HT"width={30}height={30} />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Tailwind CSS
                </h2>
              </div>
              
              <div className=" relative h-1 w-full bg-gray-300 rounded"></div>
              <div className="absolut bg-green-500 h-1 rounded w-{95%} "></div>
              
                <p className="font-bold text-green-500 text-right">95%</p>
                </div>
            </div>
            <div className="flex flex-wrap ">
            
            <div className="p-4 md:w-1/3">
              <div className="flex items-center ">

                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500  flex-shrink-0">

               <Image src={UN}alt="HT"width={30}height={30} />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Typescript
                </h2>
              </div>
              
              <div className=" relative h-1 w-full bg-gray-300 rounded"></div>
              <div className="absolut bg-green-500 h-1 rounded w-{60%} "></div>
              
                <p className="font-bold text-green-500 text-right">60%</p>
                </div>
            </div>
            <div className="flex flex-wrap ">
            
            <div className="p-4 md:w-1/3">
              <div className="flex items-center ">

                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500  flex-shrink-0">

               <Image src={UN}alt="HT"width={30}height={30} />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Next.Js
                </h2>
              </div>
              
              <div className=" relative h-1 w-full bg-gray-300 rounded"></div>
              <div className="absolut bg-green-500 h-1 rounded w-{90%} "></div>
              
                <p className="font-bold text-green-500 text-right">90%</p>
            </div>
            <div className="flex flex-wrap ">
            
            <div className="p-4 md:w-1/3">
              <div className="flex items-center ">

                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500  flex-shrink-0">

               <Image src={UN}alt="HT"width={30}height={30} />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Runing Python
                </h2>
              </div>
              
              <div className=" relative h-1 w-full bg-gray-300 rounded"></div>
              <div className="absolut bg-green-500 h-1 rounded w-{20%} "></div>
              
                <p className="font-bold text-green-500 text-right">20%</p>
            </div>
           
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
