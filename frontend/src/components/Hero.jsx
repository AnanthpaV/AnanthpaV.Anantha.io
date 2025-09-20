import React from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";

const Hero = ({ data }) => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#FAFDFF] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-[#F3F7F8] rounded-full">
                <div className="w-2 h-2 bg-[#00C2A8] rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-[#6B7280] font-medium">Available for opportunities</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-light text-[#0F1724] leading-tight">
                Hi, I'm{" "}
                <span className="font-bold text-[#00C2A8]">Anantha</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-[#0F1724] font-light">
                {data.headline}
              </p>
              
              <p className="text-lg text-[#6B7280] max-w-xl leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Location and Education */}
            <div className="flex flex-wrap gap-6 text-sm text-[#6B7280]">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#00C2A8]" />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#00C2A8] rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">B</span>
                </div>
                <span>{data.education}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#00C2A8] hover:bg-[#00A893] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#00C2A8] text-[#00C2A8] hover:bg-[#00C2A8] hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#6B7280]">Connect with me:</span>
              <div className="flex gap-3">
                <a 
                  href={data.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-[#6B7280] hover:text-[#00C2A8] hover:bg-[#F3F7F8] rounded-lg transition-all duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={data.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-[#6B7280] hover:text-[#00C2A8] hover:bg-[#F3F7F8] rounded-lg transition-all duration-200"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={`mailto:${data.email}`}
                  className="p-2 text-[#6B7280] hover:text-[#00C2A8] hover:bg-[#F3F7F8] rounded-lg transition-all duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F3F7F8]">
                <img 
                  src={data.profileImage} 
                  alt="ANANTHA PRAKASH REDDY INUKOLLU"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00C2A8] rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-white text-center">
                  <div className="text-sm font-bold">2026</div>
                  <div className="text-xs">Graduate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToNext}
            className="p-3 text-[#6B7280] hover:text-[#00C2A8] transition-colors duration-200 animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;