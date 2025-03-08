"use client";
import React from "react";

export default function Header() {
  return (
    <header className="py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">RamNaren</h1>
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
