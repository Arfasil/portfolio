export const personalInfo = {
  name: "A R Mohammed Fasil",
  title: "Full Stack Developer & AI Enthusiast",
  tagline: "Building intelligent solutions at the intersection of AI and Web Development",
  email: "armohammedfasil06@gmail.com",
  phone: "+91 9611166170",
  location: "Tumkur, Karnataka, India",
  links: {
    linkedin: "https://www.linkedin.com/in/armohammedfasil",
    github: "https://github.com/armohammedfasil",
    leetcode: "https://leetcode.com/armohammedfasil",
    geeksforgeeks: "https://auth.geeksforgeeks.org/user/armohammedfasil",
    codechef: "https://www.codechef.com/users/armohammedfasil"
  }
};

export const education = [
  {
    institution: "Siddaganga Institute of Technology",
    degree: "Bachelor of Engineering in Information Science",
    period: "Nov. 2022 – Jun. 2026",
    cgpa: "8.29",
    location: "Tumakuru, Karnataka"
  },
  {
    institution: "Indraprastha P U College",
    degree: "12th Grade",
    period: "Mar. 2020 – May 2022",
    percentage: "83.83%",
    location: "Uppinangady"
  },
  {
    institution: "Indraprastha Vidyalaya",
    degree: "10th Grade",
    period: "Mar. 2018 – May 2020",
    percentage: "90.24%",
    location: "Uppinangady"
  }
];

export const skills = {
  programming: ["C", "C++", "Java", "Python"],
  webDev: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Flask"],
  databases: ["SQL", "MongoDB"],
  tools: ["Docker", "Git", "VS Code", "Jupyter Notebook"],
  familiar: ["Unix/Shell Programming", "APIs", "Natural Language Processing", "Cloud Computing"]
};

export const projects = [
  {
    id: 1,
    title: "MoodMate",
    subtitle: "AI-Powered Mental Health Companion",
    description: "Real-time emotion detection system using DeepFace and OpenCV for facial expression analysis with integrated conversational AI.",
    technologies: ["Flask", "OpenCV", "DeepFace", "pyttsx3", "Python"],
    features: [
      "Real-time emotion detection using facial analysis",
      "Voice and text conversational agent with emotion analysis",
      "Crisis keyword detection with built-in safety disclaimers",
      "PHQ-9 depression screening with weighted scoring algorithms"
    ],
    github: "https://github.com/armohammedfasil/MoodMate",
    image: "moodmate",
    category: "AI/ML"
  },
  {
    id: 2,
    title: "AI Bird Census System",
    subtitle: "Conservation Technology",
    description: "Advanced AI system for real-time bird detection, tracking, and behavioral analysis to assist ecological research and conservation efforts.",
    technologies: ["YOLOv11", "TensorFlow", "DeepSORT", "Python", "Cloud Storage"],
    features: [
      "Real-time bird detection and classification",
      "Multi-object tracking with DeepSORT",
      "Pose estimation for behavior analysis",
      "Geolocation tagging and cloud-based data storage",
      "Scalable biodiversity monitoring"
    ],
    github: "https://github.com/armohammedfasil/bird-census",
    image: "bird-census",
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Voice Emotion Chatbot",
    subtitle: "Emotion-Aware Conversational AI",
    description: "Advanced chatbot that analyzes voice emotions in real-time to provide empathetic responses.",
    technologies: ["Python", "Speech Recognition", "NLP", "Emotion Detection"],
    github: "https://github.com/armohammedfasil/voice-emotion-chatbot",
    image: "voice-chatbot",
    category: "AI/ML"
  },
  {
    id: 4,
    title: "Face Emotion Recognition",
    subtitle: "Real-time Facial Expression Analysis",
    description: "Deep learning model for detecting and classifying facial emotions in real-time video streams.",
    technologies: ["TensorFlow", "OpenCV", "Python", "CNN"],
    github: "https://github.com/armohammedfasil/face-emotion",
    image: "face-emotion",
    category: "AI/ML"
  },
  {
    id: 5,
    title: "Expense Tracker",
    subtitle: "Personal Finance Management",
    description: "Full-stack web application for tracking personal expenses with data visualization and budgeting features.",
    technologies: ["MERN Stack", "Chart.js", "JWT", "REST API"],
    github: "https://github.com/armohammedfasil/expense-tracker",
    image: "expense-tracker",
    category: "Web Development"
  },
  {
    id: 6,
    title: "Multichat Bot",
    subtitle: "Multi-Platform Chat Integration",
    description: "Unified chatbot system that integrates with multiple messaging platforms for seamless communication.",
    technologies: ["Node.js", "WebSockets", "API Integration", "MongoDB"],
    github: "https://github.com/armohammedfasil/multichat-bot",
    image: "multichat",
    category: "Web Development"
  }
];

export const achievements = [
  {
    title: "Competitive Programming Excellence",
    description: "Solved 300+ problems across GeeksforGeeks, LeetCode, and CodeChef platforms",
    icon: "trophy",
    date: "Ongoing"
  },
  {
    title: "National Hackathon Finalist",
    description: "Top 20 finalist in 24-hour National-level Hackathon at Shridevi Institute (500+ teams)",
    icon: "award",
    date: "2024",
    certificate: "https://certificate-link.com"
  },
  {
    title: "BMSCE Hackaphasia",
    description: "Developed full-stack web solution in team collaboration at BMSCE Hackathon",
    icon: "code",
    date: "2024",
    certificate: "https://certificate-link.com"
  },
  {
    title: "GeeksforGeeks Advanced DSA",
    description: "Completed 8-week Advanced Data Structures & Algorithms Live Training Program",
    icon: "graduation-cap",
    date: "2024"
  }
];

export const experience = [
  {
    role: "AI Club Member",
    organization: "AI BREWERY – SIT",
    period: "2023 - Present",
    description: "Active contributor to AI-focused projects and initiatives",
    achievements: [
      "Contributed to 10+ projects and hackathons",
      "Strengthened skills in ML and collaborative innovation",
      "Organized workshops and AI-focused events",
      "Managed projects and coordinated team activities"
    ],
    type: "extracurricular"
  }
];

export const coursework = [
  "Operating Systems",
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Database Management System",
  "AI & Machine Learning",
  "Computer Networks"
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Real-Time Emotion Detection with DeepFace",
    excerpt: "A deep dive into implementing facial emotion recognition using deep learning and computer vision techniques.",
    date: "2024-02-15",
    readTime: "8 min read",
    category: "AI/ML",
    slug: "emotion-detection-deepface"
  },
  {
    id: 2,
    title: "MERN Stack Best Practices for Production",
    excerpt: "Essential patterns and practices for building scalable full-stack applications with the MERN stack.",
    date: "2024-02-01",
    readTime: "12 min read",
    category: "Web Development",
    slug: "mern-stack-best-practices"
  },
  {
    id: 3,
    title: "Understanding YOLOv11 for Object Detection",
    excerpt: "Exploring the latest advances in YOLO architecture and its applications in conservation technology.",
    date: "2024-01-20",
    readTime: "10 min read",
    category: "AI/ML",
    slug: "yolov11-object-detection"
  }
];