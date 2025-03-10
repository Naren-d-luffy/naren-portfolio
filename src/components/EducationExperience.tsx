import React from "react";

const education = [
  {
    title: "Bachelor of Arts - Defence & Strategic Studies",
    institution: "Guru Nanak College, Chennai",
    year: "Sept 2021 – Apr 2024",
  },
];

const experience = [
  {
    title: "Team Lead – MERN Stack Developer",
    company: "Levon Techno Solutions, Bangalore",
    year: "Oct 2024 – Present",
  },
  {
    title: "MERN Stack Developer Intern",
    company: "Zikrabyte Solutions, Remote",
    year: "July 2024 – Oct 2024",
  },
];

export default function EducationExperience() {
  return (
    <section id="education-experience" className=" bg-violet-100 rounded-lg pt-5 shadow-lg shadow-violet-400 my-10 overflow-hidden">
      <div className="p-20">
        <h2 className="text-8xl font-bold text-center mb-10 text-violet-200 pb-5">Education & Experience</h2>

        <div className="grid md:grid-cols-2 gap-12 w-full">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-violet-700 mb-4 w-fit">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-lg shadow-md border-l-4 pr-0 border-violet-500"
                >
                  <h4 className="text-lg font-semibold w-fit">{edu.title}</h4>
                  <p className="text-gray-600 w-fit">{edu.institution}</p>
                  <span className="text-gray-500 text-sm w-fit">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-violet-700 mb-4 w-fit">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-lg shadow-md border-l-4 border-violet-500 pr-0"
                >
                  <h4 className="text-lg font-semibold w-fit">{exp.title}</h4>
                  <p className="text-gray-600 w-fit">{exp.company}</p>
                  <span className="text-gray-500 text-sm w-fit">{exp.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
