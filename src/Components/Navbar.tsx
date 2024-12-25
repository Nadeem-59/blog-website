'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { clearInterval } from "timers";

export default  function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const Options:Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month:'long',
        day:'numeric',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false,
       };
       setCurrentDateTime(
         now.toLocaleDateString("en-US", Options) +
           "" +
    
 
            now.toLocaleTimeString('en-US', { hour12: false })
       );
    };
    updateDateTime();
    const interValid = setInterval(updateDateTime ,1000);
    return () => clearInterval(interValid);

}, []);  

  return (
    <header className=" bg-amber-700 text-blue-400 body-font shadow-lg">
       <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex-1 text-white font-extrabold">
            <span>{currentDateTime}</span>    
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
            <Link
              href={"/"}
              className="mr-5 text-white  hover:bg- rounded transition-colors duration-300 transform hover:scale105">
                {""}
                Home{""}
            </Link>

            <Link
              href={"/blog"}
              className="mr-5 text-white  hover:bg rounded transition-colors duration-300 transform hover:scale105">
                {""}
                Blog{""}
            </Link>

            <Link
              href={"/contact"}
              className="mr-5 text-white  hover:bg rounded transition-colors duration-300 transform hover:scale-105">
                {""}
                Contact{""}
              </Link>
          </nav>

    <button className="inline-flex items-center bg-black border-0 py-1 px-3 focus-outline-none hover:bg-amber-500 rounded text-white mt-4 md:ml-0 transition-colors duration-300">
      Youtube
      <svg
      fill="none"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="w-4 h-4 ml-1"
      viewBox="0 0 24 24">
      </svg>
    </button>

       </div>
       </header>
  )};
