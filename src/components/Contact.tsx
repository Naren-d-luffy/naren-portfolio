"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "your_service_id",
        "your_template_id",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "your_public_api_key"
      );

      setIsSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  };

  return (
    <section id="contact" className="py-20 pt-5 flex bg-violet-100 rounded-lg shadow-lg shadow-violet-400 my-10 overflow-hidden">

      <div className="flex flex-col items-start justify-center w-1/4 space-y-4" data-aos="fade-right">
        <div className="space-x-4 flex flex-col gap-6 pl-2">
          <a
            href="https://www.linkedin.com/in/ramnarend/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-violet-500 transition-all duration-500 ease-in-out hover:text-violet-800 group"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <FaLinkedin
              size={28}
              className="transition-all duration-300 ease-in-out transform group-hover:translate-x-3"
            />
          </a>

          <a href="mailto:ramnaren.d.luffy@gmail.com"
            className="relative hover:text-violet-800 text-violet-500 transition-all duration-300 ease-in-out group"
            data-aos="fade-right" data-aos-delay="200">
            <FaEnvelope 
            size={28}
            className="transition-all duration-300 ease-in-out transform group-hover:translate-x-3"
            />
          </a>
          <a href="https://wa.me/8903310663"
            className="relative hover:text-violet-800 text-violet-500 transition-all duration-300 ease-in-out group"
            data-aos="fade-right" data-aos-delay="300">
            <FaWhatsapp
            size={28}
            className="transition-all duration-300 ease-in-out transform group-hover:translate-x-3"
            />
          </a>
          <a href="tel:8903310663"
            className="relative hover:text-violet-800 text-violet-500 transition-all duration-300 ease-in-out group"
            data-aos="fade-right" data-aos-delay="400">
            <FaPhoneAlt 
            size={26} 
            className="transition-all duration-300 ease-in-out transform group-hover:translate-x-3"
            />
          </a>
          <a href="https://github.com/Naren-d-luffy" target="_blank" rel="noopener noreferrer"
            className="relative hover:text-violet-800 text-violet-500 transition-all duration-300 ease-in-out group"
            data-aos="fade-right" data-aos-delay="500">
            <FaGithub 
            size={28} 
            className="transition-all duration-300 ease-in-out transform group-hover:translate-x-3"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-3/4 px-4 max-w-2xl">
        <h2 className="text-8xl font-bold text-center pt-10 text-violet-200 pb-5" data-aos="fade-up">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="bg-purple-50 p-6 shadow-lg rounded-lg shadow-violet-200 w-full" data-aos="fade-up">
          {isSent && <p className="text-green-600 mb-4">Message sent successfully!</p>}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-purple-600 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-purple-600 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-purple-600 outline-none"
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>

  );
}
