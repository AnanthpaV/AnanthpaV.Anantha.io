import React, { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "Programming", "AI/ML", "Mobile", "Web", "Database", "Tools"];

  const filteredSkills = activeCategory === "all" 
    ? data.technical 
    : data.technical.filter(skill => skill.category === activeCategory);

  const getSkillColor = (level) => {
    if (level >= 85) return "bg-[#00C2A8]";
    if (level >= 70) return "bg-[#00A893]";
    return "bg-[#6B7280]";
  };

  return (
    <section id="skills" className="py-20 bg-[#F3F7F8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#0F1724] mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I use to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-[#00C2A8] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-[#00C2A8] text-white shadow-lg"
                  : "bg-white text-[#6B7280] border border-[#E6EEF2] hover:border-[#00C2A8] hover:text-[#00C2A8]"
              }`}
            >
              {category === "all" ? "All Skills" : category}
            </button>
          ))}
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white border-[#E6EEF2] hover:shadow-lg transition-all duration-300 hover:border-[#00C2A8]"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-[#0F1724]">{skill.name}</h4>
                <Badge variant="secondary" className="bg-[#F3F7F8] text-[#6B7280]">
                  {skill.category}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">Proficiency</span>
                  <span className="text-[#0F1724] font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#E6EEF2] rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${getSkillColor(skill.level)}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-[#0F1724] mb-8">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {data.soft.map((skill, index) => (
              <Badge 
                key={index}
                className="bg-[#00C2A8] text-white px-4 py-2 text-sm hover:bg-[#00A893] transition-colors duration-200"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-[#F3F7F8] to-[#FAFDFF] border-[#E6EEF2]">
            <h3 className="text-xl font-semibold text-[#0F1724] mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-[#6B7280] mb-6">
              Currently expanding my knowledge in Advanced Machine Learning, Cloud Computing, and DevOps practices
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Advanced ML", "AWS", "Kubernetes", "GraphQL", "Next.js"].map((learning, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="border-[#00C2A8] text-[#00C2A8] hover:bg-[#00C2A8] hover:text-white transition-colors duration-200"
                >
                  {learning}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;