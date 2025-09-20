import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1724] text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Anantha<span className="text-[#00C2A8]">.</span>
            </div>
            <p className="text-gray-300 max-w-sm">
              AI & Android Developer passionate about creating innovative solutions that make a difference in the world.
            </p>
            <div className="flex space-x-4">
              <a 
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#00C2A8] transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#00C2A8] transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a 
                href={`mailto:${data.email}`}
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#00C2A8] transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Projects", id: "projects" },
                { name: "Experience", id: "experience" },
                { name: "Contact", id: "contact" }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#00C2A8] transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#00C2A8]" />
                <a 
                  href={`mailto:${data.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {data.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-[#00C2A8] rounded-sm"></div>
                <span className="text-gray-300">Prakasam, AP, India</span>
              </div>
              <div className="text-sm text-gray-400">
                Available for opportunities and collaborations
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-300">
            <span>© {currentYear} Anantha Prakash Reddy. Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-sm text-gray-400">
              B.Tech IT — Expected 2026
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#00C2A8] rounded-lg hover:bg-[#00A893] transition-colors duration-200"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Tech Stack Credit */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <div className="text-sm text-gray-400">
            Built with React, TailwindCSS & lots of passion for technology
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;