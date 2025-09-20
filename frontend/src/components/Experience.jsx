import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Calendar, CheckCircle } from "lucide-react";

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 bg-[#F3F7F8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#0F1724] mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            My journey through various internships and the valuable experiences gained along the way
          </p>
          <div className="w-20 h-1 bg-[#00C2A8] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E6EEF2] lg:left-1/2 lg:transform lg:-translate-x-0.5"></div>

          {data.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`relative mb-12 lg:mb-16 ${
                index % 2 === 0 ? 'lg:pr-1/2 lg:mr-8' : 'lg:pl-1/2 lg:ml-8'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-[#00C2A8] rounded-full left-6 top-8 lg:left-1/2 lg:transform lg:-translate-x-2 z-10 shadow-lg"></div>
              
              {/* Experience Card */}
              <Card className="ml-16 lg:ml-0 p-6 bg-white border-[#E6EEF2] hover:shadow-lg transition-all duration-300 hover:border-[#00C2A8]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F1724] mb-1">
                      {experience.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-[#00C2A8] mb-2">
                      {experience.company}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center text-sm text-[#6B7280]">
                      <Calendar size={14} className="mr-1" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center text-sm text-[#6B7280]">
                      <MapPin size={14} className="mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <p className="text-[#6B7280] mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-[#0F1724] mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start text-sm text-[#6B7280]">
                        <CheckCircle size={16} className="text-[#00C2A8] mr-2 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h5 className="text-sm font-semibold text-[#0F1724] mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-[#F3F7F8] text-[#6B7280] hover:bg-[#00C2A8] hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <Card className="p-6 text-center bg-white border-[#E6EEF2]">
            <div className="text-3xl font-bold text-[#00C2A8] mb-2">4</div>
            <div className="text-sm text-[#6B7280]">Internships Completed</div>
          </Card>
          
          <Card className="p-6 text-center bg-white border-[#E6EEF2]">
            <div className="text-3xl font-bold text-[#00C2A8] mb-2">2+</div>
            <div className="text-sm text-[#6B7280]">Years Experience</div>
          </Card>
          
          <Card className="p-6 text-center bg-white border-[#E6EEF2]">
            <div className="text-3xl font-bold text-[#00C2A8] mb-2">15+</div>
            <div className="text-sm text-[#6B7280]">Technologies Used</div>
          </Card>
          
          <Card className="p-6 text-center bg-white border-[#E6EEF2]">
            <div className="text-3xl font-bold text-[#00C2A8] mb-2">100%</div>
            <div className="text-sm text-[#6B7280]">Positive Feedback</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;