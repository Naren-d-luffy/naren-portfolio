import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-violet-700 text-violet-50 mt-10">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4" data-aos="fade-up">
        <h2 className="text-2xl font-semibold">RamNaren</h2>

        <nav className="flex space-x-6 text-sm">
          <a href="#about" className="hover:text-gray-200 transition">About</a>
          <a href="#skills" className="hover:text-gray-200 transition">Skills</a>
          <a href="#projects" className="hover:text-gray-200 transition">Projects</a>
          <a href="#certifications" className="hover:text-gray-200 transition">Certifications</a>
          <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
        </nav>

        <div className="flex space-x-4">

          <a href="https://www.linkedin.com/in/ramnarend/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:ramnaren.d.luffy@gmail.com" className="hover:text-gray-300">
            <FaEnvelope size={24} />
          </a>
          <a href="https://wa.me/8903310663" className="hover:text-gray-300">
            <FaWhatsapp size={25} />
          </a>

          <a href="tel:8903310663" className="hover:text-gray-300">
            <FaPhoneAlt size={22} />
          </a>

          <a href="https://github.com/Naren-d-luffy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaGithub size={24} />
          </a>
        </div>

        <p className="text-sm">© 2025 RamNaren. All rights reserved.</p>
      </div>
    </footer>
  );
}
