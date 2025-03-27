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
    <section
      id="education-experience"
      className="bg-violet-100 rounded-lg pt-5 shadow-lg shadow-violet-400 my-10 overflow-hidden"
    >
      <div className="p-8 md:p-20">
        {/* Section Heading */}
        <h2
          className="text-5xl md:text-8xl font-bold text-center mb-6 md:mb-10 text-violet-200 pb-3 md:pb-5"
          data-aos="fade-up"
        >
          Education & Experience
        </h2>

        {/* Grid Layout (1 Column on Mobile, 2 Columns on Larger Screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full">
          {/* Education Section */}
          <div data-aos="fade-right">
            <h3 className="text-xl md:text-2xl font-semibold text-violet-700 mb-3 md:mb-4 w-fit">
              Education
            </h3>
            <div className="space-y-4 md:space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 md:p-5 bg-white rounded-lg shadow-md border-l-4 border-violet-500"
                >
                  <h4 className="text-md md:text-lg font-semibold w-fit">{edu.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base w-fit">{edu.institution}</p>
                  <span className="text-gray-500 text-xs md:text-sm w-fit">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div data-aos="fade-left">
            <h3 className="text-xl md:text-2xl font-semibold text-violet-700 mb-3 md:mb-4 w-fit">
              Experience
            </h3>
            <div className="space-y-4 md:space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="p-4 md:p-5 bg-white rounded-lg shadow-md border-l-4 border-violet-500"
                >
                  <h4 className="text-md md:text-lg font-semibold w-fit">{exp.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base w-fit">{exp.company}</p>
                  <span className="text-gray-500 text-xs md:text-sm w-fit">{exp.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
