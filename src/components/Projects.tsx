"use client";

import { FaLock, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Reliance Federation Hospital",
    description: "Hospital Marketing & Management App.",
    tech: ["MERN", "Azure VM", "Azure Blob", "RBAC (Auth)","CI/CD","MSC Architecture"],
    isPrivate: true,
  },
  {
    title: "Know Connection",
    description: "Digital Business Card & Social Connection App.",
    tech: ["MERN", "AWS EC2","AWS S3", "Firebase Notification", "RBAC (Auth)", "CI/CD", "MSC Architecture"],
    isPrivate: true,
  },
  {
    title: "Clubwize",
    description: "A professional networking platform inspired by LinkedIn, enabling users to connect, share insights, and collaborate within communities.",
    tech: ["MERN","Messaging","RBAC(Auth)"],
    isPrivate: false,
    github: "https://github.com/Naren-d-luffy/Clubwize-UI.git",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js & Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "AOS"],
    isPrivate: false,
    github: "https://github.com/Naren-d-luffy/naren-portfolio.git",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-violet-100 rounded-lg pt-5 shadow-lg shadow-violet-400 my-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-8xl font-bold text-center mb-10 text-violet-200 pb-5" data-aos="fade-up">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="relative bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300"
            >
              {project.isPrivate && (
                <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full flex items-center">
                  <FaLock className="mr-1" /> Private Repo
                </span>
              )}

              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-purple-200 text-purple-800 px-3 py-1 text-sm font-semibold rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {!project.isPrivate && (
                <div className="mt-4 flex gap-4"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    <FaGithub /> <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                  >
                    <FaExternalLinkAlt /> <span>Live Demo</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
