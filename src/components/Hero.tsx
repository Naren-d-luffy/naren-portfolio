import React from "react";
import Image from "next/image";
import profile from "../../public/Adobe Express 1.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-screen flex flex-row lg:p-20 items-center justify-center text-center relative"
    >
      <div data-aos="fade-up" className="w-1/2 space-y-1 text-left">
        <h1 className="text-7xl font-bold font-openSans mt-4 text-gray-950">
          I&apos;m Ram <span className="text-purple-800">Naren</span>
        </h1>
        <p className="text-md mt-3 mb-6 text-justify w-3/4">
          A passionate Full Stack Developer specializing in MERN stack, cloud
          technologies, and scalable web applications.
        </p>
        <a
          href="#contact"
          className="px-6 py-2 bg-gray-950 text-white rounded-lg relative overflow-hidden 
             hover:bg-purple-700 animated-ring"
        >
          Contact Me
        </a>
      </div>
      <div data-aos="fade-up" className="relative w-1/2 flex justify-center">
        <div className="absolute w-96 h-96 bg-purple-600 -z-10 custom-shape-1 top-35"></div>
        <Image
          src={profile}
          alt="RamNaren"
          width={350}
          height={350}
          className="rounded-full"
        />
      </div>
    </section>
  );
}
