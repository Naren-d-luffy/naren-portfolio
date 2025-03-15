import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import EducationExperience from "../components/EducationExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EducationExperience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}
