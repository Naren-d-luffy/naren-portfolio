"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

import { useState } from "react";
import emailjs from "emailjs-com";
import swal from 'sweetalert';

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      swal({
        title: "Incomplete Form",
        text: "Please fill in all the required fields!",
        icon: "warning",
        buttons: {
          confirm: {
            visible: false,
          }
        },
        timer: 3000,
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_mezk9j5",
        "template_783ahpm",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "Yt97eqM5JTsVagxzb"
      );

      setForm({ name: "", email: "", message: "" });
      swal({
        title: "Message Sent!",
        text: "Your message has been sent successfully.",
        icon: "success",
        buttons: {
          confirm: {
            visible: false,
          }
        },
        timer: 3000,
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      swal({
        title: "Sending Failed",
        text: "Something went wrong while sending the message.",
        icon: "error",
        buttons: {
          confirm: {
            visible: false,
          }
        },
        timer: 3000,
      });
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-20 flex flex-col md:flex-row bg-violet-100 rounded-lg shadow-lg shadow-violet-400 my-10 overflow-hidden"
    >
      <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/4 space-y-4 py-6 md:py-0" data-aos="fade-right">
        <div className="flex flex-row md:flex-col space-x-6 md:space-x-0 md:gap-6 md:pl-2 pl-0">
          {[
            { href: "https://www.linkedin.com/in/ramnarend/", icon: <FaLinkedin size={28} />, delay: 100 },
            { href: "mailto:ramnaren.d.luffy@gmail.com", icon: <FaEnvelope size={28} />, delay: 200 },
            { href: "https://wa.me/+91 9345233824", icon: <FaWhatsapp size={28} />, delay: 300 },
            { href: "tel:+91 9345233824", icon: <FaPhoneAlt size={26} />, delay: 400 },
            { href: "https://github.com/Ramnaren-dev", icon: <FaGithub size={28} />, delay: 500 }
          ].map(({ href, icon, delay }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-violet-500 transition-all duration-300 ease-in-out hover:text-violet-800 group inline-block"
              data-aos="fade-right"
              data-aos-delay={delay}
            >
              <span className="transition-all duration-300 ease-in-out transform group-hover:translate-x-2 block">
                {icon}
              </span>
            </a>

          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full md:w-3/4 px-6 max-w-2xl">
        <h2 className="text-5xl md:text-8xl font-bold text-center pt-5 md:pt-10 text-violet-200 pb-3 md:pb-5" data-aos="fade-up">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="bg-purple-50 p-5 md:p-6 shadow-lg rounded-lg shadow-violet-200 w-full" data-aos="fade-up">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
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
              className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-purple-600 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-purple-600 outline-none"
            ></textarea>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition disabled:opacity-50">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
