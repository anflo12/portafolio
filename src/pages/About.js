import React from "react";
import Navbar from "./Navbar";
import FotoProfile from '../assets/profile.jpg'
export default function About() {
  return (
    <>
    <Navbar/>
<div className="flex flex-col justify-center items-center my-auto mb-32">
      <div className="max-w-sm lg:max-w-2xl mt-40 rounded-lg overflow-hidden shadow-xl bg-white">
        <img
          className="rounded-full  lg:mx-56 w-64 h-64 image-size shadow-xl  absolute -mt-32"
          src={FotoProfile}
          alt='imageProfile'
        />
        <div className="px-6 text-center align-middle my-48">
          <div className="font-bold text-2xl mb-2"> Soy Andres Florez</div>
          <p className="text-gray-700 text-base">
            Soy desarrollador de aplicaciones moviles mutilplataforma,
            Desarrollo web con react.js y maquetacion web con HTML y CSS
          </p>

          <div className="px-6 pt-4 pb-2 text-center mt-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2">
              React
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2">
              React Native
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2">
              Node.js
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2">
              Tailwind.css
            </span>

            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2">
              Html
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
