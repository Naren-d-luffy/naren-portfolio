"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className="py-4 px-6 sm:px-20 bg-violet-200 shadow-lg shadow-violet-400 fixed w-full top-0 z-50" data-aos="fade-down">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-violet-950">RamNaren&apos;s Portfolio</h1>

        <ul className="hidden md:flex gap-6">
          {["about", "skills", "projects", "certifications", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative font-semibold text-lg text-violet-950 transition-all duration-300 ease-in-out 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-violet-600
              before:transition-all before:duration-300 before:ease-in-out
              hover:before:w-full hover:text-violet-700"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-violet-950 text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <div className={`md:hidden fixed top-0 left-0 w-screen h-screen bg-violet-200 flex flex-col items-center justify-center transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-5 right-6 text-violet-950 text-3xl">
          <FaTimes />
        </button>

        <ul className="flex flex-col gap-8 text-2xl font-semibold text-violet-950">
          {["about", "skills", "projects", "certifications", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="relative transition-all duration-300 ease-in-out 
                before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-violet-600
                before:transition-all before:duration-300 before:ease-in-out
                hover:before:w-full hover:text-violet-700"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
