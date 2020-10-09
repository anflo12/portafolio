import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="text-div flex items-center flex-col relative justify-center h-screen w-screen">
        <h1 className="text-my-primary font-sans font-bold text-2xl  lg:text-5xl">
          Bienvenido a mi portafolio
        </h1>

        <h2 className="text-2xl mt-6 text-my-primary font-sans lg:w-3/6 text-center ">
          Me gusta los animales en especial los perros , tambien las series y todo lo relacionado
          con la tecnologia
        </h2>

       <Link to='About' className='"bg-blue-500 mt-6 bg-blue-500 text-center hover:bg-blue-700 
        text-white text-xl lg:w-1/5 w-3/5  font-bold py-2 px-4 rounded-full'>
          Sobre mi
       </Link>
      </div>
    </div>
  );
}
