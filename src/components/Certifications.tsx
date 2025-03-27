"use client";

// import { FaCertificate } from "react-icons/fa";
// import { TbCertificate } from "react-icons/tb";
import { GrCertificate } from "react-icons/gr";


const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Blend Vidya",
    year: "May 2024",
    link: "https://personal-certificate.s3.eu-north-1.amazonaws.com/Ramnaren's+Technical+Certificate.pdf",
  },
  {
    title: "MERN Stack Development Intern",
    issuer: "Zikrabyte Solutions",
    year: "Nov 2024",
    link: "https://personal-certificate.s3.eu-north-1.amazonaws.com/RamNaren+Internship+Certificate.pdf",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-12 md:py-20 rounded-lg shadow-lg shadow-violet-400 overflow-hidden bg-violet-100"
    >
      <div className="container mx-auto px-6 md:px-10">
        <h2
          className="text-5xl md:text-8xl font-bold text-center mb-6 md:mb-10 text-violet-200 pb-3 md:pb-5"
          data-aos="fade-up"
        >
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="relative bg-white shadow-lg rounded-lg p-5 md:p-6 border-l-4 border-purple-500 
              hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start  md:items-center space-x-3 md:space-x-4">
                <GrCertificate className="text-purple-600 text-4xl md:mt-0 mt-2" />
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold">{cert.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{cert.issuer}</p>
                  <span className="text-gray-500 text-xs md:text-sm">{cert.year}</span>
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 text-sm md:text-base rounded-lg hover:bg-purple-700 transition w-full text-center"
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
