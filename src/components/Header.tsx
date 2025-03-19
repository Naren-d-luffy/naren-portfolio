"use client";
import React from "react";

export default function Header() {
  return (
    <header className="py-4 px-20 bg-violet-200 shadow-lg shadow-violet-400 fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-violet-950">RamNaren&apos;s Portfolio</h1>
        <ul className="flex gap-6">
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
      </nav>
    </header>
  );
}
