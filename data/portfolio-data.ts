// ================================
// EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
// ================================

export const personalInfo = {
  name: "RAYMON JOHNS",
  title: "Frontend Developer",
  tagline:
    "Front-end developer passionate about building accessible web apps that users love",
  bio: "I am a Frontend Developer dedicated to my work. I enjoy every step of the design process — from discussion and collaboration to building accessible, user-friendly interfaces using HTML, CSS and JavaScript.",
  email: "raymonjohns@gmail.com",
  location: "Uganda",

  // Social Links
  social: {
    github: "https://github.com/r4d3v",
    linkedin: "https://t.me/chillingtrader",
    twitter: "https://instagram.com/chilingtrader",
  },

  // Resume/CV
  resumeUrl: "/resume.pdf",
};

export const aboutMe = {
  description: [
    "I'm a Frontend Developer dedicated to my work. I enjoy every step of the design process — from discussion and collaboration to building accessible, user-friendly interfaces.",
    "I specialize in HTML, CSS and JavaScript and build modern web applications with React and Tailwind CSS.",
    "I focus on performance, accessibility and creating polished user experiences that users love.",
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        "HTML5 (3 years)",
        "CSS3 (3 years)",
        "JavaScript (3 years)",
        "React (2 years)",
        "Tailwind CSS (2 years)",
      ],
    },
    {
      category: "Backend/Fullstack",
      items: ["MERN (2 years)", "Node.js", "Express", "MongoDB"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Vercel", "VSCode"],
    },
    {
      category: "Soft Skills",
      items: [
        "Problem Solving",
        "Collaboration",
        "Attention to Detail",
        "Adaptability",
      ],
    },
  ],

  experience: [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Full-Stack Developer",
      period: "2021 - Present",
      description:
        "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced page load time by 60% through optimization",
        "Led team of 5 developers on flagship product",
        "Implemented CI/CD pipeline reducing deployment time by 80%",
      ],
    },
    {
      company: "Creative Digital Agency",
      position: "Full-Stack Developer",
      period: "2019 - 2021",
      description:
        "Developed custom web solutions for diverse clients including e-commerce, SaaS, and corporate websites.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Increased client conversion rates by 45% through UX improvements",
        "Built reusable component library adopted across all projects",
      ],
    },
    {
      company: "StartUp Labs",
      position: "Junior Developer",
      period: "2018 - 2019",
      description:
        "Contributed to MVP development and rapid prototyping for various startup ventures.",
      achievements: [
        "Helped launch 3 successful product MVPs",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Participated in daily standups and agile sprints",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      period: "2014 - 2018",
      highlights: "GPA: 3.8/4.0, Dean's List, Computer Science Club President",
    },
  ],

  certifications: [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "Meta Front-End Developer Professional Certificate",
  ],
};

export const projects = [
  {
    id: 1,
    title: "REED-STORES",
    category: "E-commerce",
    description:
      "A modern online store showcasing laptops, phones and accessories for local businesses.",
    longDescription:
      "REED-STORES is a responsive e-commerce site built to showcase product categories, product detail pages, and a simple checkout flow. It was created to help small businesses sell online with a clean, fast UI.",
    image: "https://opengraph.githubassets.com/1/R4D3V/REED-STORES",
    tags: ["HTML", "Tailwind CSS", "Vite", "JavaScript"],
    liveUrl: "https://reedstores.vercel.app/",
    githubUrl: "https://github.com/R4D3V/REED-STORES",
    featured: true,
    stats: {
      products: "100+",
      uptime: "99.9%",
      rating: "4.6/5",
    },
    highlights: [
      "Category driven product listing",
      "Responsive product pages",
      "Simple cart and checkout flow",
    ],
    challenges:
      "Designing flexible product layouts that scale across devices and categories.",
    results:
      "Increased product visibility for the business and provided a clean storefront for customers.",
  },
  {
    id: 2,
    title: "REED-MEDIA",
    category: "Branding & Web Design",
    description:
      "Branding agency site showcasing design work and services for small businesses.",
    longDescription:
      "REED-MEDIA is a design and branding website that highlights case studies, brand strategy and website design services. Built to convert visitors into clients with clear calls-to-action and visual storytelling.",
    image: "https://reedmedia.vercel.app/assets/brand-9Vl3vy6d.png",
    tags: ["HTML", "Tailwind CSS", "Vite", "Design"],
    liveUrl: "https://reedmedia.vercel.app/",
    githubUrl: "https://github.com/R4D3V/REED-MEDIA",
    featured: true,
    stats: {
      clients: "10+",
      projects: "20+",
      satisfaction: "98%",
    },
    highlights: [
      "Strategic brand design",
      "Website design and implementation",
      "Design system and brand guidelines",
    ],
    challenges:
      "Translating brand strategy into cohesive visual systems that work across media.",
    results:
      "Helped clients establish stronger brand identities and online presence.",
  },
  {
    id: 3,
    title: "SKILLS PHONE SERVICE CENTRE",
    category: "Business Website",
    description:
      "Service site for a phone repair center including services, FAQ and contact flow.",
    longDescription:
      "Skills Phone Service Centre site presents services, repair process and contact details for a repair shop. The site focuses on clear service descriptions, images of common repairs, and a simple contact form for customers.",
    image: "https://skillsphoneservices.vercel.app/img/skills.png",
    tags: ["HTML", "Tailwind CSS", "Business Site"],
    liveUrl: "https://skillsphoneservices.vercel.app/",
    githubUrl: "https://github.com/R4D3V/skillphoneservices",
    featured: false,
    stats: {
      customers: "1K+",
      services: "10+",
      response: "24-48h",
    },
    highlights: [
      "Service showcase with images",
      "Clear repair process",
      "Contact & quote flow",
    ],
    challenges:
      "Presenting technical repair information in a customer-friendly manner.",
    results: "Improved customer discovery and quicker contact conversions.",
  },
  {
    id: 4,
    title: "R4DEV Portfolio",
    category: "Personal Portfolio",
    description: "A personal portfolio site showcasing projects and skills.",
    longDescription:
      "R4DEV (r4dev) is the author's portfolio site highlighting skills, projects and contact methods. It's a clean, responsive portfolio built with modern frontend tooling.",
    image: "https://raw.githubusercontent.com/R4D3V/r4dev/main/preview.png",
    tags: ["HTML", "SCSS", "Design"],
    liveUrl: "https://r4d3vportfolio.vercel.app/",
    githubUrl: "https://github.com/R4D3V/r4dev",
    featured: true,
    stats: {
      visits: "500+",
      projects: "8+",
      experience: "3 years",
    },
    highlights: [
      "Portfolio case studies",
      "Responsive and accessible design",
      "Fast loading pages",
    ],
    challenges:
      "Keeping content up-to-date across multiple portfolio versions.",
    results:
      "Clear presentation of skills and a centralized point of contact for clients.",
  },
  {
    id: 5,
    title: "Blink",
    category: "Social App",
    description:
      "A social media chatting app built with TypeScript and modern frontend patterns.",
    longDescription:
      "Blink is a social/chatting app featuring real-time messaging, hooks for state management and a modern component structure. It serves as an example of a full-featured TypeScript frontend project.",
    image: "https://opengraph.githubassets.com/1/R4D3V/blink",
    tags: ["TypeScript", "React", "WebSockets"],
    liveUrl: null,
    githubUrl: "https://github.com/R4D3V/blink",
    featured: false,
    stats: {
      active: "WIP",
      contributors: "1",
      language: "TypeScript",
    },
    highlights: [
      "Real-time messaging",
      "Modular component structure",
      "TypeScript-first codebase",
    ],
    challenges:
      "Implementing scalable real-time features and state synchronization.",
    results:
      "A solid foundation for a modern chat application and learning resource.",
  },
  {
    id: 6,
    title: "Next PWA Starter",
    category: "Starter Template",
    description: "A Next.js starter optimized for PWAs and performance.",
    longDescription:
      "A starter template demonstrating a performant Next.js app with PWA considerations, optimized build tooling and deployment-ready configuration.",
    image: "https://opengraph.githubassets.com/1/R4D3V/nextpwa2.github.io",
    tags: ["Next.js", "PWA", "Tailwind CSS"],
    liveUrl: "https://nextpwa2.vercel.app/",
    githubUrl: "https://github.com/R4D3V/nextpwa2.github.io",
    featured: false,
    stats: {
      templates: "1",
      readiness: "Deploy-ready",
      performance: "Optimized",
    },
    highlights: [
      "PWA-ready configuration",
      "Performance optimizations",
      "Deploy-ready on Vercel",
    ],
    challenges: "Balancing PWA features with minimal initial bundle size.",
    results: "A useful starter for quick PWA-enabled Next.js projects.",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO at TechStart",
    company: "TechStart Inc.",
    image: "/testimonials/sarah.jpg",
    quote:
      "Alex delivered exceptional work on our platform. Their technical expertise and creative problem-solving skills were instrumental in our success. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "Product Manager",
    company: "Digital Solutions Co.",
    image: "/testimonials/michael.jpg",
    quote:
      "Working with Alex was a game-changer for our project. They not only met our expectations but exceeded them with innovative solutions and attention to detail.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    position: "Founder",
    company: "CreativeHub",
    image: "/testimonials/emily.jpg",
    quote:
      "Alex's ability to translate complex requirements into elegant, user-friendly solutions is remarkable. A true professional who delivers quality work consistently.",
    rating: 5,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Applications with Next.js 14",
    excerpt:
      "Learn how to leverage Next.js 14's new features to build performant, scalable web applications.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    image: "/blog/nextjs-guide.jpg",
    slug: "building-scalable-apps-nextjs-14",
  },
  {
    id: 2,
    title: "The Art of Clean Code: Best Practices for Modern Developers",
    excerpt:
      "Explore essential principles and practices for writing maintainable, clean code that scales.",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Best Practices",
    image: "/blog/clean-code.jpg",
    slug: "art-of-clean-code",
  },
  {
    id: 3,
    title: "Optimizing React Performance: A Comprehensive Guide",
    excerpt:
      "Deep dive into React performance optimization techniques and when to apply them.",
    date: "2023-12-20",
    readTime: "10 min read",
    category: "React",
    image: "/blog/react-performance.jpg",
    slug: "optimizing-react-performance",
  },
];

export const contactInfo = {
  availableForWork: true,
  preferredContact: "email",
  responseTime: "Usually within 24 hours",
  services: [
    "Web Application Development",
    "Mobile App Development",
    "UI/UX Design",
    "Technical Consulting",
    "Code Review & Optimization",
    "Team Training & Mentorship",
  ],
  workingHours: "Monday - Friday, 9AM - 6PM PST",
};
