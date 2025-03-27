import React from "react";

export default function About() {
  return (
    <section id="about" className="text-black pb-16 bg-violet-100 px-6 pt-20 rounded-lg shadow-lg shadow-violet-400 my-10">
      <p className="font-bold text-6xl md:text-8xl text-violet-200 text-center pb-5" data-aos="fade-up">
        Know Me More
      </p>

      <div className="w-full flex flex-col md:flex-row justify-around px-0 md:px-20 pt-0 space-y-10 md:space-y-0">
        <div className="w-full md:w-3/4" data-aos="fade-right">
          <h2 className="text-xl md:text-2xl font-openSans text-violet-500 mt-4 mb-2 font-semibold text-center md:text-left">
            About Me
          </h2>
          <p className="text-sm md:text-xl text-justify w-full md:w-10/12">
            I&apos;m a passionate{" "}
            <span className="text-violet-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            with expertise in{" "}
            <span className="text-violet-400 font-semibold">
              MERN Stack, cloud computing, and DevOps.
            </span>{" "}
            I have deployed projects on{" "}
            <span className="text-violet-400 font-semibold">AWS and Azure</span>{" "}
            using CI/CD pipelines, ensuring scalable and high-performance
            applications. I enjoy solving complex problems, optimizing
            performance, and delivering efficient cloud-based solutions.
          </p>
        </div>

        <div className="p-4 w-full md:w-4/12 space-y-5 flex flex-col items-center md:items-start" data-aos="fade-left">
          <ul className="text-md md:text-xl space-y-3">
            <li>
              <span className="font-semibold text-violet-400">Name:</span>{" "}
              RamNaren
            </li>
            <li>
              <span className="font-semibold text-violet-400">Email:</span>{" "}
              ramnaren.d.luffy@gmail.com
            </li>
            <li>
              <span className="font-semibold text-violet-400">Age:</span> 21
            </li>
            <li>
              <span className="font-semibold text-violet-400">From:</span>{" "}
              Chennai, India
            </li>
          </ul>
          <a
            href="https://personal-certificate.s3.eu-north-1.amazonaws.com/RamNaren's+CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gray-950 text-white rounded-lg hover:bg-purple-700 animated-ring text-center w-full md:w-auto"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
