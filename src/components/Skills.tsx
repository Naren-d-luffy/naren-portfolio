"use client";

import { FaReact, FaNodeJs, FaAws, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiRazorpay,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import { IoInfiniteOutline } from "react-icons/io5";
import { VscAzure } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

const skills = [
  {
    category: "Frontend",
    technologies: [
      {
        name: "React.js",
        icon: <FaReact size={40} className="text-blue-500" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={40} className="text-black" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={40} className="text-teal-500" />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap size={40} className="text-purple-500" />,
      },
    ],
  },
  {
    category: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: <FaNodeJs size={40} className="text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <FaNodeJs size={40} className="text-yellow-400" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={40} className="text-green-700" />,
      },
      { name: "REST API", icon: <TbApi size={40} className="text-blue-600" /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: <FaAws size={40} className="text-yellow-500" /> },
      { name: "Azure", icon: <VscAzure size={40} className="text-blue-600" /> },
      {
        name: "Firebase",
        icon: <SiFirebase size={40} className="text-orange-500" />,
      },
      {
        name: "CI/CD",
        icon: <IoInfiniteOutline size={40} className="text-gray-500" />,
      },
    ],
  },
  {
    category: "Other Tools",
    technologies: [
      {
        name: "Git & GitHub",
        icon: <FaGitAlt size={40} className="text-orange-500" />,
      },
      {
        name: "Razorpay",
        icon: <SiRazorpay size={40} className="text-blue-600" />,
      },
      { name: "RBAC", icon: <FaAws size={40} className="text-gray-500" /> },
      {
        name: "CRON Jobs",
        icon: <FaNodeJs size={40} className="text-green-600" />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-violet-100 rounded-lg pt-5 shadow-lg shadow-violet-400 overflow-hidden"
    >
      <div className="container mx-auto px-4 p-20">
        <h2 className="text-8xl font-bold text-center mb-10 text-violet-200 pb-5">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="p-6 bg-white shadow-md rounded-lg"
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                {skillSet.category}
              </h3>
              <div className="grid grid-cols-2 gap-8 space-y-4">
                {skillSet.technologies.map((tech, i) => (
                  <div key={i} className="flex items-center space-x-3 m-0">
                    {tech.icon}
                    <span className="text-lg">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
