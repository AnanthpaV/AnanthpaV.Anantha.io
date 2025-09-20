import React, { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openGithub = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-[#FAFDFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#0F1724] mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            A showcase of projects that demonstrate my passion for creating impactful solutions
          </p>
          <div className="w-20 h-1 bg-[#00C2A8] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {data.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden bg-white border-[#E6EEF2] hover:shadow-xl transition-all duration-500 hover:border-[#00C2A8] group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    onClick={() => openGithub(project.github)}
                    className="bg-white/90 text-[#0F1724] hover:bg-white hover:text-[#00C2A8] p-2"
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F1724] mb-3 group-hover:text-[#00C2A8] transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-[#6B7280] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary" 
                      className="bg-[#F3F7F8] text-[#6B7280] hover:bg-[#00C2A8] hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#0F1724] mb-2">Key Features:</h4>
                  <ul className="text-sm text-[#6B7280] space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-[#00C2A8] rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={() => openGithub(project.github)}
                    className="flex-1 bg-[#00C2A8] hover:bg-[#00A893] text-white"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    className="border-[#00C2A8] text-[#00C2A8] hover:bg-[#00C2A8] hover:text-white"
                  >
                    {selectedProject === project.id ? "Hide Details" : "More Info"}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>

                {/* Expanded Details */}
                {selectedProject === project.id && (
                  <div className="mt-6 pt-6 border-t border-[#E6EEF2] animate-in slide-in-from-top duration-300">
                    <h4 className="text-lg font-semibold text-[#0F1724] mb-3">All Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-[#6B7280]">
                          <div className="w-2 h-2 bg-[#00C2A8] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-[#F3F7F8] to-[#FAFDFF] border-[#E6EEF2] inline-block">
            <h3 className="text-xl font-semibold text-[#0F1724] mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-[#6B7280] mb-6">
              Check out my GitHub for additional projects and contributions
            </p>
            <Button
              onClick={() => window.open('https://github.com/AnanthpaV', '_blank')}
              className="bg-[#00C2A8] hover:bg-[#00A893] text-white px-8"
            >
              <Github size={16} className="mr-2" />
              Visit GitHub Profile
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;