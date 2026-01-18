import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Building modern, responsive websites using React, JavaScript, and latest web technologies.",
      features: [
        "React Applications",
        "Responsive Design",
        "PWA Development",
        "Performance Optimization",
      ],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive user interfaces that delight users and drive engagement.",
      features: [
        "Figma Design",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description:
        "Ensuring your applications run fast and smooth across all devices and network conditions.",
      features: [
        "Code Splitting",
        "Image Optimization",
        "Lazy Loading",
        "Caching Strategies",
      ],
    },
    {
      icon: "📱",
      title: "Mobile First",
      description:
        "Designing and developing applications optimized for mobile-first user experiences.",
      features: [
        "Responsive Design",
        "Touch Optimization",
        "Mobile Testing",
        "Cross-browser Support",
      ],
    },
    {
      icon: "🔍",
      title: "Web Accessibility",
      description:
        "Making sure your application is accessible to everyone, regardless of their abilities.",
      features: [
        "WCAG Compliance",
        "Semantic HTML",
        "ARIA Labels",
        "Keyboard Navigation",
      ],
    },
    {
      icon: "🚀",
      title: "Deployment & Hosting",
      description:
        "Setting up, deploying, and maintaining your applications on modern cloud platforms.",
      features: [
        "Vercel Deployment",
        "GitHub Integration",
        "CI/CD Pipeline",
        "Monitoring",
      ],
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Tools & Platforms",
      items: ["Vite", "Git", "VS Code", "Figma", "npm/pnpm"],
    },
    {
      category: "Soft Skills",
      items: [
        "Communication",
        "Problem Solving",
        "Teamwork",
        "Adaptability",
        "Time Management",
      ],
    },
  ];

  return (
    <div className="container mx-auto w-full px-4 py-12">
      {/* Header */}
      <div className="text-center mb-20 animate-fade-in-up">
        <h1 className="text-5xl font-bold text-gradient mb-6">Services</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Comprehensive web development services tailored to bring your vision
          to life
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 stagger">
        {services.map((service, index) => (
          <div key={index} className="glass-card group hover-lift">
            <div className="text-5xl mb-4 group-hover:animate-float">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-white/80 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="text-sm text-white/70 flex items-start"
                >
                  <span className="mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mb-20 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-center text-gradient mb-12 section-heading">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="glass-card">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                {skill.category}
              </h3>
              <div className="space-y-3">
                {skill.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="glass-card mb-20 animate-scale-in">
        <h2 className="text-4xl font-bold text-center text-gradient mb-12 section-heading">
          My Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discovery",
              desc: "Understanding your goals and requirements",
            },
            {
              step: "02",
              title: "Design",
              desc: "Creating wireframes and design mockups",
            },
            {
              step: "03",
              title: "Development",
              desc: "Building with clean, maintainable code",
            },
            {
              step: "04",
              title: "Launch",
              desc: "Testing and deploying to production",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">
                {item.step}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Highlight */}
      <div className="glass-card mb-12 text-center animate-fade-in-up">
        <h3 className="text-3xl font-bold text-white mb-4">
          Flexible Engagement Models
        </h3>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Whether you need a quick project, ongoing development, or team
          augmentation, I can adapt to your needs. Let's discuss what works best
          for your project.
        </p>
        <Link to="/contact">
          <button className="glass-button text-lg px-8 py-4 hover:scale-110">
            Discuss Your Project
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Services;
