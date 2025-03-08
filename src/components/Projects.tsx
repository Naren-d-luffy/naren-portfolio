import React from "react";

export default function Projects() {
  const projects = [
    { title: "Reliance Federation Hospital", description: "Hospital Marketing App", tech: "MERN, Azure" },
    { title: "Know Connection", description: "Digital Card App", tech: "MERN, AWS, Firebase" },
  ];

  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid gap-6 mt-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md bg-white">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <span className="text-sm text-gray-600">{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
