import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration (you'll need to replace these with your actual keys)
      const serviceID = 'YOUR_SERVICE_ID';
      const templateID = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'iapreddy2004@gmail.com'
      };

      // For now, simulate successful submission since keys aren't configured yet
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 1000);

      // Uncomment this when you have your EmailJS keys configured:
      /*
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      */

    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Error Sending Message",
        description: "There was an issue sending your message. Please try again or email me directly.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F3F7F8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#0F1724] mb-6">
            {data.title}
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            {data.subtitle}
          </p>
          <div className="w-20 h-1 bg-[#00C2A8] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#0F1724] mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-[#6B7280] mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <Card className="p-4 bg-white border-[#E6EEF2] hover:border-[#00C2A8] transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00C2A8] rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F1724]">Email</h4>
                    <a 
                      href={`mailto:${data.email}`}
                      className="text-[#00C2A8] hover:underline"
                    >
                      {data.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-white border-[#E6EEF2] hover:border-[#00C2A8] transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00C2A8] rounded-lg flex items-center justify-center">
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F1724]">LinkedIn</h4>
                    <a 
                      href={data.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00C2A8] hover:underline"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-white border-[#E6EEF2] hover:border-[#00C2A8] transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00C2A8] rounded-lg flex items-center justify-center">
                    <Github size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F1724]">GitHub</h4>
                    <a 
                      href={data.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00C2A8] hover:underline"
                    >
                      View my repositories
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-white border-[#E6EEF2] hover:border-[#00C2A8] transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00C2A8] rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F1724]">Location</h4>
                    <p className="text-[#6B7280]">Prakasam, Andhra Pradesh, India</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Stats */}
            <Card className="p-6 bg-gradient-to-r from-[#00C2A8] to-[#00A893] text-white">
              <h4 className="text-lg font-semibold mb-4">Response Time</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">&lt; 24h</div>
                  <div className="text-sm opacity-90">Email Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">&lt; 2h</div>
                  <div className="text-sm opacity-90">LinkedIn Message</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-white border-[#E6EEF2]">
            <h3 className="text-2xl font-semibold text-[#0F1724] mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#0F1724] mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="border-[#E6EEF2] focus:border-[#00C2A8] focus:ring-[#00C2A8]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F1724] mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="border-[#E6EEF2] focus:border-[#00C2A8] focus:ring-[#00C2A8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0F1724] mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                  className="border-[#E6EEF2] focus:border-[#00C2A8] focus:ring-[#00C2A8]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0F1724] mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  required
                  className="border-[#E6EEF2] focus:border-[#00C2A8] focus:ring-[#00C2A8] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00C2A8] hover:bg-[#00A893] text-white py-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-[#E6EEF2] text-center">
              <p className="text-sm text-[#6B7280]">
                Prefer email? Drop me a line at{" "}
                <a 
                  href={`mailto:${data.email}`}
                  className="text-[#00C2A8] hover:underline font-medium"
                >
                  {data.email}
                </a>
              </p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-[#F3F7F8] to-[#FAFDFF] border-[#E6EEF2] inline-block">
            <h3 className="text-xl font-semibold text-[#0F1724] mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-[#6B7280] mb-6 max-w-md">
              Whether it's a full-time opportunity, freelance project, or just a tech discussion, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open(`mailto:${data.email}`, '_blank')}
                className="bg-[#00C2A8] hover:bg-[#00A893] text-white px-8"
              >
                <Mail size={16} className="mr-2" />
                Send Email
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(data.social.linkedin, '_blank')}
                className="border-[#00C2A8] text-[#00C2A8] hover:bg-[#00C2A8] hover:text-white px-8"
              >
                <Linkedin size={16} className="mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;