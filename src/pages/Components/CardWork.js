import React from "react";
import Image_gallery from "./Image-gallery";

export default function CardWork({ data }) {
  return (
    <div>
      <div class="max-w-lg md:max-w-3xl md:mx-2 lg:max-w-full mx-auto lg:flex my-8">
        <div
          class="border-r f border-b border-l mx-auto border-gray-400 lg:border-l-0 lg:border-t 
          lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 md:p-2
          px-12 flex lg:flex-row flex-col-reverse md:flex-row justify-between leading-normal"
        >
          <div className="mb-8 flex flex-col justify-center w-5/12 lg:mt-0 mt-8">
            <h1 className="text-black font-semibold text-2xl w-64">
              {data.name}
            </h1>
            <p className="w-64 lg:mt-6">{data.description}</p>

            <a
              href={data.urlRepository}
              target="_blank"
              className="text-blue-500 border-b  border-blue-500 w-32 mt-6"
            >
              Conoce mas
            </a>
          </div>

          <div className="flex justify-end text-lg lg:w-2/3 w-64 font-sans mr-12 font-medium text-black flex-col">
            <p>
              {" "}
              <span className="font-semibold">Cliente:</span> {data.clientName}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Empresa D:</span> {data.company}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Especialidad: </span>
              {data.specialty}
            </p>
          </div>

          <div className="lg:w-4/12 lg:mb-0 mb-8">
            <Image_gallery />
          </div>
        </div>
      </div>
    </div>
  );
}
