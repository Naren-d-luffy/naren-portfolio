"use client";

import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiBootstrap, SiRazorpay, SiFirebase, SiNextdotjs, SiExpress, SiPostgresql
} from "react-icons/si";
import { PiTreeStructure } from "react-icons/pi";
import { GoShieldLock } from "react-icons/go";
import { IoInfiniteOutline } from "react-icons/io5";
import { VscAzure } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

const skills = [
  { name: "MongoDB", icon: <SiMongodb size={30} className="text-green-700" /> },
  { name: "Express.js", icon: <SiExpress size={30} className="text-gray-600" /> },
  { name: "React.js", icon: <FaReact size={30} className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={30} className="text-green-500" /> },
  { name: "Next.js", icon: <SiNextdotjs size={30} className="text-black" /> },
  { name: "REST API", icon: <TbApi size={30} className="text-blue-600" /> },
  { name: "AWS EC2", icon: <FaAws size={30} className="text-yellow-500" /> },
  { name: "AWS S3", icon: <FaAws size={30} className="text-yellow-500" /> },
  { name: "Azure App Service", icon: <VscAzure size={30} className="text-blue-600" /> },
  { name: "Azure VM", icon: <VscAzure size={30} className="text-blue-600" /> },
  { name: "Azure Blob Storage", icon: <VscAzure size={30} className="text-blue-600" /> },
  { name: "Firebase Notifications", icon: <SiFirebase size={30} className="text-orange-500" /> },
  { name: "CI/CD", icon: <IoInfiniteOutline size={30} className="text-gray-500" /> },
  { name: "RBAC", icon: <GoShieldLock size={30} className="text-blue-500" /> },
  { name: "CRON Jobs", icon: <FaNodeJs size={30} className="text-green-600" /> },
  { name: "MSC & MVC Architecture", icon: <PiTreeStructure size={30} className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={30} className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={30} className="text-teal-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap size={30} className="text-purple-500" /> },
  { name: "Git & GitHub", icon: <FaGitAlt size={30} className="text-orange-500" /> },
  { name: "Razorpay", icon: <SiRazorpay size={30} className="text-blue-700" /> },
  { name: "HTML", icon: <FaHtml5 size={30} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={30} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={30} className="text-yellow-500" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-violet-100 rounded-lg shadow-lg shadow-violet-400 my-10 overflow-hidden">
      <div className="container mx-auto px-4 p-10">
        <h2 className="text-8xl font-bold text-center mb-10 text-violet-200 pb-5" data-aos="fade-up">
          Skills & Technologies
        </h2>

        <div data-aos="fade-up" className="flex flex-wrap justify-center gap-4 cursor-default">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex items-center px-5 py-3 bg-white shadow-md rounded-full space-x-3
      border-2 border-purple-500 overflow-hidden transition-all duration-300 cursor-pointer"
            >
              <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-purple-700 opacity-[5%]"></span>
              <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-purple-700 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>

              <span className="relative flex items-center space-x-3 font-bold transition-colors duration-200 ease-in-out group-hover:text-white">
                <span className="transition-colors duration-100 ease-in-out 
          group-hover:text-white group-hover:brightness-175">
                  {skill.icon}
                </span>
                <span className="text-lg">{skill.name}</span>
              </span>

              <span className="absolute inset-0 rounded-full border-2 border-purple-500"></span>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
