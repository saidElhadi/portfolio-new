// Resume data - easily editable
export const resumeData = {
  personal: {
    name: "Said Elhadi",
    title: "Full-Stack Developer & AI-ML Dev/Researcher",
    email: "said.elhadi1080@gmail.com",
    phone: "+86 177 2464 9726",
    location: "Shenzhen, China",
    github: "https://github.com/saidElhadi", // Update with your GitHub
    linkedin: "https://www.linkedin.com/in/sayid-elhadi-23098b216/", // Update with your LinkedIn
    portfolio: "https://yourportfolio.com", // Update with your portfolio URL
  },
  
  bio: "Innovative, results-driven Full-Stack Developer with over 3 years of hands-on experience in creating dynamic and responsive web applications. Published AI researcher specializing in wireless sensing and computer vision. Originally from Algiers, Algeria, currently living in China.",
  
  languages: [
    { name: "English", level: "Fluent" },
    { name: "French", level: "Fluent" },
    { name: "Arabic", level: "Fluent" },
    { name: "Chinese", level: "Upper Intermediate" }
  ],
  
  skills: {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "C", "C++"],
    "Frontend": ["React", "Next.js", "Vue.js", "HTML/CSS", "TailwindCSS"],
    "Backend": ["Node.js", "REST APIs", "SSR"],
    "Databases": ["SQL", "NoSQL", "Firebase"],
    "AI/ML": ["PyTorch", "TensorFlow", "Keras", "Computer Vision", "Deep Learning"],
    "Hardware": ["ESP32", "Raspberry Pi", "Wi-Fi Sensing", "Wireless Networks"],
    "Cloud & DevOps": ["AWS", "Git", "Responsive Design", "Scrum/Agile"],
    "Mobile": ["React Native", "Native Modules"]
  },
  
  experience: [
    {
      company: "HHS",
      position: "Full-Stack Developer",
      location: "Shenzhen, China",
      period: "November 2023 - Present",
      type: "Full-time, Hybrid",
      description: "Developing full-stack web applications with modern technologies, integrating payment processors, and working with React Native and native modules."
    },
    {
      company: "Oleap AI",
      position: "Digital Marketing",
      location: "Shenzhen, China",
      period: "September 2023 - November 2023",
      type: "Full-time, remote",
      description: "Optimizing web presence and search engine performance for a AI headsets company."
    },
    {
      company: "Joysun",
      position: "Web Developer",
      location: "Zhengzhou, China",
      period: "August 2021 - September 2022",
      type: "Internship",
      description: "Gained hands-on experience in web development, project collaboration, and software development lifecycle."
    },
    {
      company: "Freelance",
      position: "Web Developer & Digital Marketing",
      location: "China",
      period: "2019 - 2020",
      type: "Freelance",
      description: "Provided web development and digital marketing services to various clients."
    },
    {
      company: "Teca English",
      position: "Part-time English Teacher",
      location: "Zhengzhou, China",
      period: "November 2019 - July 2021",
      type: "Part-time",
      description: "Taught English as a foreign language while pursuing studies."
    }
  ],
  
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Harbin Institute of Technology (Shenzhen)",
      period: "September 2023 - January 2026",
      status: "In Progress",
      description: "Advanced studies in AI and machine learning with focus on wireless sensing research. Working towards PhD admission."
    },
    {
      degree: "Bachelor of Software Engineering",
      school: "Zhengzhou University",
      period: "September 2019 - July 2023",
      status: "Completed",
      description: "Comprehensive foundation in software design, system architecture, and development lifecycle. Collaborated on projects and internships, fostering teamwork skills."
    }
  ],
  
  publications: [
    {
      title: "Demo Abstract: Underground Root Tuber Sensing via a Wi-Fi Mesh Network",
      authors: "Said Elhadi, Tao Wang, Yang Zhao",
      conference: "ACM SenSys Conference",
      year: "2025",
      status: "Published",
      doi: "https://doi.org/10.1145/3715014.3724365",
      description: "Non-invasive Wi-Fi sensing system using CSI data and deep neural networks to reconstruct cross-section images of potato tubers underground."
    },
    {
      title: "DNN Models for WiFi CSI-based Underground Image Reconstruction",
      authors: "Said Elhadi, Yang Zhao",
      conference: "ACM MobiSys Conference",
      year: "2025",
      status: "Published",
      doi: "https://dl.acm.org/doi/10.1145/3711875.3734569",
      description: "Comprehensive study evaluating deep learning architectures for mapping wireless signal tensors to high-resolution underground tuber images."
    },
    {
      title: "DRIFT: Data-driven RF Tomography via Cross-modal Sensing and Continual Learning",
      authors: "Yang Zhao, Tao Wang, Said Elhadi",
      conference: "IEEE AVSS Conference",
      year: "2025",
      status: "Published",
      doi: "https://arxiv.org/abs/2508.11654",
      description: "Cross-modal sensing system with continual learning for robust underground target detection in dynamic environments."
    }
  ],
  
  projects: [
    {
      title: "Underground Root Tuber Sensing via Wi-Fi Mesh Network",
      description: "Published research on non-invasive Wi-Fi sensing system using CSI data and deep neural networks to reconstruct cross-section images of potato tubers underground.",
      tech: ["Wi-Fi CSI", "Deep Learning", "ESP32", "PyTorch", "Computer Vision"],
      status: "Published in ACM SenSys '25",
      link: "https://doi.org/10.1145/3715014.3724365"
    },
    {
      title: "Model Inference Optimization",
      description: "Optimized model inference reducing 10 batch size input from 22s to 7s and model size from 17MB to ~8MB using ONNX, TVM, and PyTorch.",
      tech: ["ONNX", "TVM", "PyTorch", "Model Optimization"],
      status: "Completed",
      link: "#"
    },
    {
      title: "Chat2D a 2d ai chat interface ",
      description: "Built a 2d ai chat interface.",
      tech: ["Gemini", "NextJS", "Shadcn", "LLM"],
      status: "Completed",
      link: "https://chat2d.vercel.app/"
    },
    {
      title: "ESP32 WiFi Mesh Network",
      description: "Built mesh network with ESP32C3 WiFi nodes based on Multi-Spin v2.0 architecture to collect CSI data and detect objects.",
      tech: ["ESP32", "Wi-Fi Mesh", "IDF-ESP 5.2", "IoT"],
      status: "Completed",
      link: "#"
    },
    {
      title: "Defect Detection Computer Vision Model",
      description: "Developed cutting-edge CNN models using TensorFlow and Keras for detecting defects in visual data, enhancing quality control.",
      tech: ["TensorFlow", "Keras", "CNN", "Computer Vision"],
      status: "Completed",
      link: "#"
    },
    {
      title: "Crypto Mining Rig & Trading Bots",
      description: "Built custom computer for cryptocurrency mining and developed Python trading bots for automated profit trading.",
      tech: ["Python", "Cryptocurrency", "Hardware", "Trading Algorithms"],
      status: "Completed",
      link: "#"
    }
  ],
  
  awards: [
    {
      title: "Henan Government Scholarship",
      period: "2019-2023",
      description: "Academic excellence scholarship"
    },
    {
      title: "HIT (Shenzhen) Scholarship",
      period: "2023-2025",
      description: "Research and academic achievement scholarship"
    }
  ],
  
  interests: [
    "Weight lifting",
    "Computer tinkering", 
    "Camping / Outdoor activities",
    "Swimming",
    "Coffee craftsmanship"
  ]
}

export default resumeData
