import Link from "next/link";
import React from "react";
import Image from "next/image";
import SS from "../../../public/ss1.png";
import SS1 from "../../../public/ss.png";
import S from "../../../public/s.png";
function Project() {
  return (
    <div id="Project" className="bg-blue-50 bg-cover bg-center ">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-4xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={SS}
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Sunni Jamat-ul-Qura Pakistan
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Rendering
                  </h1>
                  <p className="leading-relaxed ">
                    In this project I am showing the urdu type of renderning.
                  </p>
                  <Link target="bianck" href={"https://sunni-jamat-ul-qurra-pakistan.vercel.app/"}>
                    <p className="leading-relaxed py-2 hover:underline  hover:text-green-500 ">
                      View Project:
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  src={SS1}
                  width={500}
                  height={500}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    hakathon3
                  </h1>
                  <p className="leading-relaxed">
                    In this project using api to sanity to ui
                  </p>
                  <Link target="blanck" href={"https://hakathon3.vercel.app/"}>
                    <p className="leading-relaxed hover:text-green-500 hover:underline py-2 ">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
           
           
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={S}
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    First Web
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Nature
                  </h1>
                  <p className="leading-relaxed">
                    This is my first web showing sanity to ui
                    
                  </p>
                  <Link target="blanck" href={"https://mountain-wheat.vercel.app/"}>
                    <p className="leading-relaxed  hover:text-green-500 hover:underline py-2">
                      View Project:
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
         </div> 
      
      </section>
    </div>
  );
}

export default Project;
