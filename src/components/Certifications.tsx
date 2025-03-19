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
    <section id="certifications" className="py-25 rounded-lg shadow-lg shadow-violet-400 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2
          className="text-8xl font-bold text-center mb-10 text-violet-200 pb-5"
          data-aos="fade-up"
        >
          Certifications
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="relative bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <GrCertificate className="text-purple-600 text-4xl" />
                <div>
                  <h3 className="text-2xl font-semibold">{cert.title}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <span className="text-gray-500 text-sm">{cert.year}</span>
                </div>
              </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
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
