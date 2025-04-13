import React from "react";
import Image from "next/image";
import profile from "../../public/Adobe Express 1.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-full md:h-screen flex flex-col md:flex-row lg:p-20 p-6 items-center justify-center text-center md:text-left"
    >
      <div className="md:w-1/2 w-full space-y-5">
        <h1 className="text-3xl md:text-7xl font-bold font-openSans md:pt-0 pt-20 text-gray-950" data-aos="fade-up" data-aos-delay="100">
          Hi, I&apos;m Ram <span className="text-purple-800">Naren</span>
        </h1>
        <h2 className="text-lg md:text-2xl font-semibold text-gray-700" data-aos="fade-up" data-aos-delay="200">
          Founder of <span className="text-purple-800 font-bold">StackHive</span> | Full Stack Developer
        </h2>
        <p className="text-sm md:w-3/4 w-full text-center md:text-justify mt-3 mb-6 text-gray-600" data-aos="fade-up" data-aos-delay="300">
          I specialize in MERN stack development, cloud deployment, and scalable web applications to help businesses grow online.
        </p>
        <div className="flex space-x-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="400">
          <a href="#contact"
            className="px-6 py-3 text-sm md:text-lg font-semibold bg-gray-950 text-white rounded-lg hover:bg-purple-700 transition-all animated-ring flex items-center justify-center">
            Contact Me
          </a>
          <a href="#projects"
            className="px-6 py-3 text-sm md:text-lg font-semibold border-2 border-gray-950 text-gray-950 rounded-lg hover:bg-gray-950 animated-ring hover:text-white transition-all flex items-center justify-center">
            View Projects
          </a>
        </div>
      </div>

      <div className="relative md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
        <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-purple-600 -z-10 -rotate-12 custom-shape-1 bottom-0 overflow-hidden" data-aos="fade-up" data-aos-delay="250"></div>
        <Image
          src={profile}
          alt="RamNaren"
          width={350}
          height={350}
          className="overflow-hidden mb-3"
          data-aos="fade-up"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
}
