import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import '../App.css'
export default function Navbar() {
  const [isExpanded, toggleExpansion] = useState(false);
  let math = useRouteMatch('/');
  const Ontoggle = () => {
    if (isExpanded) {
      toggleExpansion(false);
    } else {
      toggleExpansion(true);
    }
  };
  console.log(math)
  return (
    <nav
      className={`${
        math.isExact ? `navbar` : `bg-my-primary`
      } max-w-none flex items-start lg:items-center  align-middle lg:justify-between  lg:flex-wrap flex-col`}
    >
      <div class="block lg:hidden ">
        <button
          class="flex items-center px-3 border rounded
           text-my-primary w-12 h-12 bg-white m-2 border-my-background hover:border-white"
          onClick={Ontoggle}
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `` : `hidden`
        } md:block lg:flex md:mt-5 text-left my-2  flex-row  lg:text-right lg:w-auto`}
      >
        <div class="text-sm lg:flex-grow  my-4">
          <Link
            to="about"
            className={`${
              math.isExact ? `link-tr hover:text-gray-900` : `link-bl hover:text-gray-200`
            } lg:inline-block`}
          >
            Sobre mi
          </Link>
          <Link
            to="works"
            className={`${
              math.isExact ? `link-tr hover:text-gray-900` : `link-bl hover:text-gray-200`
            } lg:inline-block `}
          >
            Mis trabajos
          </Link>

          <Link
            to="contact"
            className={`${
              math.isExact ? `link-tr hover:text-gray-900` : `link-bl hover:text-gray-200`
            } lg:inline-block `}
          >
            Contactos
          </Link>
        </div>
      </div>
    </nav>
  );
}
