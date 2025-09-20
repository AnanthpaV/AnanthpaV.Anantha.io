import React from "react";
import { Card } from "./ui/card";

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-[#FAFDFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#0F1724] mb-6">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-[#00C2A8] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            {data.content.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-lg text-[#6B7280] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-[#0F1724] mb-4">
                What drives me
              </h3>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                I believe technology should be accessible and impactful. Every line of code I write is aimed at creating solutions that make a difference in people's lives.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {data.stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-6 bg-[#F3F7F8] border-[#E6EEF2] text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-[#00C2A8] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#6B7280] font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#00C2A8] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="text-white text-2xl font-bold">AI</div>
            </div>
            <h4 className="text-lg font-semibold text-[#0F1724] mb-2">AI Expertise</h4>
            <p className="text-[#6B7280]">Deep learning, machine learning, and neural network implementation</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#00C2A8] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="text-white text-2xl font-bold">📱</div>
            </div>
            <h4 className="text-lg font-semibold text-[#0F1724] mb-2">Mobile Development</h4>
            <p className="text-[#6B7280]">Native Android apps with modern architecture and user experience</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#00C2A8] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="text-white text-2xl font-bold">🌐</div>
            </div>
            <h4 className="text-lg font-semibold text-[#0F1724] mb-2">Full Stack</h4>
            <p className="text-[#6B7280]">End-to-end web development with modern frameworks and databases</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;