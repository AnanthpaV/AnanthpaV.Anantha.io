import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAFDFF]/95 backdrop-blur-md shadow-md border-b border-[#E6EEF2]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold text-[#0F1724] cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => scrollToSection("home")}
          >
            Anantha<span className="text-[#00C2A8]">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#00C2A8] ${
                  activeSection === item.id ? "text-[#00C2A8]" : "text-[#0F1724]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex bg-[#00C2A8] hover:bg-[#00A893] text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Let's Connect
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#0F1724] hover:text-[#00C2A8] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-[#E6EEF2]">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-[#00C2A8] bg-[#F3F7F8]"
                      : "text-[#0F1724] hover:text-[#00C2A8] hover:bg-[#F3F7F8]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  scrollToSection("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 bg-[#00C2A8] hover:bg-[#00A893] text-white"
              >
                Let's Connect
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;