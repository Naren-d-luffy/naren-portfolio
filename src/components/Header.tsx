"use client";
import React from "react";

export default function Header() {
  return (
    <header className="py-4 px-20 bg-violet-200 shadow-lg shadow-violet-400 fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-violet-950">RamNaren&apos;s Portfolio</h1>
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-violet-600 font-semibold text-lg text-violet-950">About</a></li>
          <li><a href="#projects" className="hover:text-violet-600 font-semibold text-lg text-violet-950">Projects</a></li>
          <li><a href="#contact" className="hover:text-violet-600 font-semibold text-lg text-violet-950">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
