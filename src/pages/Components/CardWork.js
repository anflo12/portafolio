import React from "react";
import Image_gallery from "./Image-gallery";

export default function CardWork() {
  return (
    <div>
      <div class="max-w-lg  lg:max-w-full mx-auto lg:flex w-10/12 my-8">
        <div
          class="border-r f border-b border-l mx-auto border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 
          px-12
        flex lg:flex-row flex-col-reverse justify-between leading-normal"
        >
          <div className="mb-8 flex flex-col justify-center w-5/12 lg:mt-0 mt-8">
            <h1 className="text-black font-semibold text-2xl w-64">React Store</h1>
            <p className="w-64 lg:mt-6">
              Es un proyecto de una aplicacion movil de E-commerce desarrollada 
              enreact native, tiene funciones como inicio de sesion, carrito de compras
              y datos persistentes
            </p>

            <a
              href="https://github.com/xiaolin/react-image-gallery/issues/327"
              target="_blank"
              className="text-blue-500 border-b  border-blue-500 w-32 mt-6"
            >
              Conoce mas
            </a>
          </div>

          <div className="flex justify-end text-lg lg:w-2/3 w-64 font-sans mr-12 font-medium text-black flex-col">
            <p> <span className='font-semibold'>Cliente:</span> Andres Florez</p>
            <p> <span className='font-semibold'>Empresa D:</span> Hefest software</p>
            <p> <span className='font-semibold'>Especialidad: </span>App movil</p>


          </div>

          <div className="lg:w-4/12 lg:mb-0 mb-8">
            <Image_gallery />
          </div>
        </div>
      </div>
    </div>
  );
}
