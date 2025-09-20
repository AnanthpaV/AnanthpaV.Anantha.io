import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import { mockData } from "../data/mock";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFDFF]">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero data={mockData.personal} />
        <About data={mockData.about} />
        <Skills data={mockData.skills} />
        <Projects data={mockData.projects} />
        <Experience data={mockData.experience} />
        <Testimonials data={mockData.testimonials} />
        <Contact data={mockData.contact} />
      </main>
      <Footer data={mockData.personal} />
    </div>
  );
};

export default Portfolio;