import { Link } from "react-router-dom";
import { useState } from "react";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: "p1",
      title: "REED-MEDIA",
      category: "branding",
      description: "Branding & website design agency",
      link: "http://reedmedia.vercel.app",
      caseStudy: {
        challenge:
          "Create a modern, professional presence for a creative agency",
        solution:
          "Built a responsive website with modern design principles and smooth animations",
        result:
          "Increased client inquiries by 40% and improved online visibility",
        tech: ["React", "Tailwind CSS", "Vite"],
        duration: "3 months",
      },
    },
    {
      id: "p2",
      title: "REED-STORES",
      category: "ecommerce",
      description: "Online shop & Gadgets Store",
      link: "http://reedstores.vercel.app/",
      caseStudy: {
        challenge:
          "Build an e-commerce platform with seamless shopping experience",
        solution:
          "Developed a full-featured store with product filtering, cart management, and secure checkout",
        result: "Processed 500+ transactions with 99.9% uptime",
        tech: ["React", "JavaScript", "CSS3", "Responsive Design"],
        duration: "4 months",
      },
    },
    {
      id: "p3",
      title: "SKILLS PHONE SERVICE CENTRE",
      category: "service",
      description: "Repairing service for mobile devices and computers",
      link: "http://skillsphoneservices.vercel.app/",
      caseStudy: {
        challenge: "Showcase repair services and enable online booking",
        solution:
          "Created an appointment scheduling system with service showcase",
        result: "Reduced manual inquiries by 60% through online booking",
        tech: ["React", "Tailwind CSS", "Form Handling"],
        duration: "2 months",
      },
    },
    {
      id: "p4",
      title: "Portfolio Website",
      category: "personal",
      description: "Modern portfolio with liquid glass design",
      link: "http://t.me/patrolfx",
      caseStudy: {
        challenge:
          "Design a stunning portfolio that showcases skills and experience",
        solution:
          "Built with modern animations, glass morphism, and interactive elements",
        result: "Increased professional inquiries and networking opportunities",
        tech: ["React", "Framer Motion", "CSS Animations"],
        duration: "Ongoing",
      },
    },
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "branding", label: "Branding" },
    { value: "ecommerce", label: "E-Commerce" },
    { value: "service", label: "Service" },
    { value: "personal", label: "Personal" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="container mx-auto w-full px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-5xl font-bold text-gradient mb-6">Projects</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Showcasing my recent work and the impact of modern web development
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-down">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              selectedCategory === category.value
                ? "glass-button bg-white/20"
                : "glass-effect hover:bg-white/15"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 stagger">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="glass-card group cursor-pointer hover-lift overflow-hidden h-full"
          >
            {/* Image Background */}
            <div className="w-full h-48 bg-cover bg-center rounded-lg mb-6 group-hover:scale-110 transition-transform duration-500" />

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
              {project.title}
            </h3>
            <p className="text-blue-200 uppercase text-sm font-light mb-4">
              {project.description}
            </p>

            {/* Case Study Preview */}
            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <h4 className="font-bold text-white mb-2">Challenge</h4>
              <p className="text-white/80 text-sm mb-3">
                {project.caseStudy.challenge}
              </p>
              <h4 className="font-bold text-white mb-2">Result</h4>
              <p className="text-white/80 text-sm">
                {project.caseStudy.result}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <p className="text-xs text-white/60 mb-2 font-bold">
                TECHNOLOGIES
              </p>
              <div className="flex flex-wrap gap-2">
                {project.caseStudy.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 px-3 py-1 rounded-full text-xs text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Link Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button block text-center hover:scale-105"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* No projects message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/60 text-lg">
            No projects in this category yet.
          </p>
        </div>
      )}

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up">
        <div className="glass-card text-center">
          <div className="text-4xl font-bold text-gradient mb-2">25+</div>
          <p className="text-white/80">Projects Delivered</p>
        </div>
        <div className="glass-card text-center">
          <div className="text-4xl font-bold text-gradient mb-2">50+</div>
          <p className="text-white/80">Happy Clients</p>
        </div>
        <div className="glass-card text-center">
          <div className="text-4xl font-bold text-gradient mb-2">500+</div>
          <p className="text-white/80">Hours Invested</p>
        </div>
      </div>

      {/* CTA */}
      <div className="glass-card text-center animate-scale-in">
        <h2 className="text-3xl font-bold text-white mb-4">
          Want to see more or discuss your project?
        </h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          I'm always open to collaborating on new and exciting projects. Let's
          create something amazing together.
        </p>
        <Link to="/contact">
          <button className="glass-button text-lg px-8 py-4 hover:scale-110">
            Start Your Project
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
