"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaWhatsapp } from "react-icons/fa";
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
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "your_public_api_key" // Replace with your EmailJS public key
      );

      setIsSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-6xl font-bold text-center text-purple-700 mb-10" data-aos="fade-up">
          Contact Me
        </h2>

        <div className="flex flex-col items-center space-y-4 mb-10" data-aos="fade-up">
          <p className="text-lg flex items-center space-x-2">
            <FaEnvelope className="text-purple-600" />
            <a href="mailto:ramnaren.d.luffy@gmail.com" className="text-blue-500 hover:underline">
              ramnaren.d.luffy@gmail.com
            </a>
          </p>
          <p className="text-lg flex items-center space-x-2">
            <FaPhone className="text-purple-600" />
            <a href="tel:8903310663">+91 8903310663</a>
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/Naren-d-luffy" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/ramnarend/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={30} />
            </a>
            <a href="https://wa.me/8903310663" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg" data-aos="fade-up">
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
