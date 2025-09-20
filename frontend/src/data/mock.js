export const mockData = {
  personal: {
    name: "ANANTHA PRAKASH REDDY INUKOLLU",
    headline: "AI & Android Developer | Python · Kotlin · TensorFlow",
    description: "Passionate B.Tech IT student specializing in AI and Android development. I build intelligent applications that solve real-world problems using cutting-edge technologies.",
    location: "Prakasam, Andhra Pradesh, India",
    education: "B.Tech IT — Expected 2026",
    email: "iapreddy2004@gmail.com",
    profileImage: "https://raw.githubusercontent.com/AnanthpaV/profile-image/79ca428d5178c3d06765953f543c999b02a33688/profile.png",
    social: {
      linkedin: "https://www.linkedin.com/in/anantha-prakash-reddy",
      github: "https://github.com/AnanthpaV",
      email: "iapreddy2004@gmail.com"
    }
  },

  about: {
    title: "About Me",
    content: [
      "I'm Anantha Prakash Reddy, an aspiring AI and Android developer currently pursuing B.Tech in Information Technology. My journey in technology began with a curiosity about how intelligent systems can make everyday life better.",
      "Through various internships and personal projects, I've gained hands-on experience in machine learning, Android development, and full-stack web development. I love building applications that combine the power of AI with intuitive user experiences.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring fellow students in programming concepts."
    ],
    stats: [
      { label: "Projects Completed", value: "15+" },
      { label: "Technologies Mastered", value: "10+" },
      { label: "Internships", value: "4" },
      { label: "GitHub Contributions", value: "200+" }
    ]
  },

  skills: {
    technical: [
      { name: "Python", level: 90, category: "Programming" },
      { name: "Kotlin", level: 85, category: "Programming" },
      { name: "Java", level: 80, category: "Programming" },
      { name: "JavaScript", level: 75, category: "Programming" },
      { name: "TensorFlow", level: 85, category: "AI/ML" },
      { name: "PyTorch", level: 75, category: "AI/ML" },
      { name: "Scikit-learn", level: 80, category: "AI/ML" },
      { name: "Android Studio", level: 85, category: "Mobile" },
      { name: "React", level: 70, category: "Web" },
      { name: "Node.js", level: 65, category: "Web" },
      { name: "MongoDB", level: 70, category: "Database" },
      { name: "MySQL", level: 75, category: "Database" },
      { name: "Git", level: 85, category: "Tools" },
      { name: "Docker", level: 60, category: "Tools" }
    ],
    soft: [
      "Problem Solving",
      "Team Leadership",
      "Communication",
      "Project Management",
      "Analytical Thinking",
      "Adaptability"
    ]
  },

  projects: [
    {
      id: 1,
      title: "CodeXR",
      description: "An immersive Extended Reality (XR) application that revolutionizes code learning through interactive 3D environments and spatial computing.",
      technologies: ["Unity", "C#", "XR SDK", "Mixed Reality"],
      github: "https://github.com/AnanthpaV/CodeXR",
      image: "https://raw.githubusercontent.com/AnanthpaV/profile-image/1b3edbbca98d2b7823d9aca701a174db787c7155/Screenshot%202025-09-20%20232405.png",
      features: [
        "3D code visualization in virtual space",
        "Interactive programming tutorials",
        "Multi-platform XR support",
        "Real-time collaboration features"
      ]
    },
    {
      id: 2,
      title: "Weather Forecast",
      description: "A comprehensive weather application providing accurate forecasts with beautiful UI and advanced weather analytics.",
      technologies: ["Android", "Kotlin", "Weather API", "Material Design"],
      github: "https://github.com/AnanthpaV/Weather-Forecast",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      features: [
        "7-day weather forecast",
        "Location-based predictions",
        "Weather alerts and notifications",
        "Interactive weather maps"
      ]
    },
    {
      id: 3,
      title: "Magic Gamma Telescope Data Classification",
      description: "Machine learning model to classify gamma-ray bursts using telescope data with 95% accuracy using advanced ML algorithms.",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      github: "https://github.com/AnanthpaV/Magic-Gamma-Telescope-Data-Classification",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop",
      features: [
        "Advanced data preprocessing",
        "Multiple ML model comparison",
        "95% classification accuracy",
        "Detailed performance analytics"
      ]
    },
    {
      id: 4,
      title: "Face Recognition GUI",
      description: "Real-time face recognition system with intuitive GUI for security and attendance management applications.",
      technologies: ["Python", "OpenCV", "Tkinter", "Deep Learning"],
      github: "https://github.com/AnanthpaV/Face-recognition-GUI",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      features: [
        "Real-time face detection",
        "User-friendly GUI interface",
        "Database integration",
        "Security access control"
      ]
    },
    {
      id: 5,
      title: "Hotel Booking Website",
      description: "Full-stack hotel booking platform with modern UI, payment integration, and comprehensive booking management.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/AnanthpaV/Hotel-Booking-Website",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop",
      features: [
        "User authentication system",
        "Real-time booking availability",
        "Payment gateway integration",
        "Admin dashboard"
      ]
    }
  ],

  experience: [
    {
      id: 1,
      company: "SpectoV",
      position: "Software Development Intern",
      duration: "Jul 2025 – Present",
      location: "Remote",
      description: "Working on cutting-edge software solutions with focus on full-stack development and system optimization.",
      achievements: [
        "Developed scalable web applications serving 1000+ users",
        "Improved system performance by 40% through code optimization",
        "Collaborated with cross-functional teams on agile development"
      ],
      technologies: ["React", "Node.js", "Python", "PostgreSQL"]
    },
    {
      id: 2,
      company: "Teachnook",
      position: "AI/ML Development Intern",
      duration: "Aug – Oct 2024",
      location: "Remote",
      description: "Focused on machine learning model development and AI-powered educational tools.",
      achievements: [
        "Built ML models achieving 92% accuracy on classification tasks",
        "Developed AI tutoring system used by 500+ students",
        "Optimized model inference time by 35%"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"]
    },
    {
      id: 3,
      company: "Prodigy InfoTech",
      position: "Android Development Intern",
      duration: "May – Jul 2024",
      location: "Remote",
      description: "Specialized in Android application development with focus on user experience and performance.",
      achievements: [
        "Developed 3 Android applications with 10K+ combined downloads",
        "Implemented modern Android architecture patterns",
        "Reduced app crash rate by 60% through testing and optimization"
      ],
      technologies: ["Kotlin", "Android SDK", "Firebase", "Material Design"]
    },
    {
      id: 4,
      company: "Coincent.ai",
      position: "Full Stack Development Intern",
      duration: "Mar – Jun 2023",
      location: "Remote",
      description: "Worked on full-stack web development with integration of AI features.",
      achievements: [
        "Built responsive web applications with 99% uptime",
        "Integrated AI chatbot improving user engagement by 45%",
        "Implemented real-time data synchronization features"
      ],
      technologies: ["React", "Python", "Flask", "MongoDB"]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      position: "Senior Software Engineer at SpectoV",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Anantha is an exceptional developer with a keen eye for detail. His ability to quickly grasp complex concepts and deliver high-quality code is remarkable. He consistently exceeded expectations during his internship."
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "AI Team Lead at Teachnook",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "Working with Anantha was a pleasure. His machine learning expertise and problem-solving skills are impressive. He delivered a complex ML project ahead of schedule with outstanding results."
    },
    {
      id: 3,
      name: "Arjun Patel",
      position: "Mobile App Developer at Prodigy InfoTech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Anantha's Android development skills are top-notch. He writes clean, efficient code and has a great understanding of user experience principles. A valuable addition to any development team."
    }
  ],

  contact: {
    title: "Let's Build Something Amazing Together",
    subtitle: "I'm always excited to work on new projects and connect with fellow developers and innovators.",
    email: "iapreddy2004@gmail.com",
    social: {
      linkedin: "https://www.linkedin.com/in/anantha-prakash-reddy",
      github: "https://github.com/AnanthpaV"
    }
  }
};