import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center text-center">
      <Image src="/profile.jpg" alt="RamNaren" width={150} height={150} className="rounded-full" />
      <h1 className="text-4xl font-bold mt-4">RamNaren</h1>
      <p className="text-lg mt-2">Full Stack Developer | MERN | Next.js | Cloud</p>
      <a href="#projects" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">View My Work</a>
    </section>
  );
}
