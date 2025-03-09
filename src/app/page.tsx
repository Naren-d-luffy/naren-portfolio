import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import EducationExperience from "../components/EducationExperience";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EducationExperience />
      {/* <Projects />
      <Contact /> */}
    </>
  );
}
