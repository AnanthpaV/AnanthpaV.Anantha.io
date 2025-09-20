import React, { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length, isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-[#FAFDFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#0F1724] mb-6">
            What People Say
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Testimonials from colleagues, mentors, and supervisors I've had the pleasure to work with
          </p>
          <div className="w-20 h-1 bg-[#00C2A8] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 bg-white border-[#E6EEF2] shadow-lg">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-[#00C2A8] rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote size={24} className="text-white" />
              </div>

              {/* Testimonial Content */}
              <div className="mb-8">
                <p className="text-lg lg:text-xl text-[#6B7280] leading-relaxed italic">
                  "{data[currentIndex].content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={data[currentIndex].image} 
                  alt={data[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[#F3F7F8]"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-[#0F1724]">
                    {data[currentIndex].name}
                  </h4>
                  <p className="text-sm text-[#6B7280]">
                    {data[currentIndex].position}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-3 bg-white border border-[#E6EEF2] rounded-full shadow-lg hover:bg-[#00C2A8] hover:text-white hover:border-[#00C2A8] transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-3 bg-white border border-[#E6EEF2] rounded-full shadow-lg hover:bg-[#00C2A8] hover:text-white hover:border-[#00C2A8] transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? "bg-[#00C2A8] w-8" 
                  : "bg-[#E6EEF2] hover:bg-[#00C2A8]"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-[#0F1724] text-center mb-8">
            All Recommendations
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {data.map((testimonial, index) => (
              <Card 
                key={index}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  index === currentIndex 
                    ? "bg-[#00C2A8] text-white border-[#00C2A8]" 
                    : "bg-white border-[#E6EEF2] hover:border-[#00C2A8]"
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className={`font-semibold ${
                      index === currentIndex ? "text-white" : "text-[#0F1724]"
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${
                      index === currentIndex ? "text-white/80" : "text-[#6B7280]"
                    }`}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${
                  index === currentIndex ? "text-white/90" : "text-[#6B7280]"
                }`}>
                  "{testimonial.content.substring(0, 120)}..."
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;