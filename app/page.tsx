"use client";

import Link from "next/link";
import {
  ArrowRight,
  Download,
  Sparkles,
  Code2,
  Rocket,
  Zap,
} from "lucide-react";
import { personalInfo, projects } from "@/data/portfolio-data";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <main className="page-container">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="blur-orb w-96 h-96 bg-accent top-20 -left-48 animate-float" />
        <div
          className="blur-orb w-80 h-80 bg-secondary top-40 -right-40 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="blur-orb w-72 h-72 bg-tertiary bottom-20 left-1/3 animate-float"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid Background */}
        <div className="absolute inset-0 grid-background opacity-50" />

        {/* Noise Texture */}
        <div className="absolute inset-0 noise-texture" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8 animate-slide-up">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-white/80">
                Available for new projects
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-slide-up stagger-1">
              <span className="block text-white mb-2">Hi, I'm</span>
              <span className="block gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/70 mb-4 max-w-3xl mx-auto animate-slide-up stagger-2">
              {personalInfo.title}
            </p>

            {/* Tagline */}
            <p className="text-lg text-white/50 mb-12 max-w-2xl mx-auto animate-slide-up stagger-3">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up stagger-4">
              <Link
                href="/projects"
                className="btn-primary inline-flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Get In Touch
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in stagger-5">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  5+
                </div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  50+
                </div>
                <div className="text-white/60 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  30+
                </div>
                <div className="text-white/60 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  100%
                </div>
                <div className="text-white/60 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="blur-orb w-96 h-96 bg-secondary/20 top-0 right-0" />
        <div className="absolute inset-0 grid-background opacity-30" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What I <span className="gradient-text">Do</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              I specialize in building exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 card-hover">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Web Development
              </h3>
              <p className="text-white/70 leading-relaxed">
                Building responsive, performant web applications using modern
                technologies like React, Next.js, and TypeScript.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 card-hover">
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                UI/UX Design
              </h3>
              <p className="text-white/70 leading-relaxed">
                Creating intuitive, beautiful interfaces that provide
                exceptional user experiences and drive engagement.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 card-hover">
              <div className="w-14 h-14 bg-tertiary/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-tertiary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Performance Optimization
              </h3>
              <p className="text-white/70 leading-relaxed">
                Optimizing applications for speed, efficiency, and scalability
                to ensure the best possible performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="blur-orb w-96 h-96 bg-tertiary/20 bottom-0 left-0" />
        <div className="absolute inset-0 grid-background opacity-30" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Check out some of my recent work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden card-hover"
              >
                <div className="relative h-48 bg-gradient-to-br from-accent/20 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/10">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-accent text-sm font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="blur-orb w-96 h-96 bg-accent/20 top-0 left-1/2" />
        <div className="absolute inset-0 grid-background opacity-30" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with
            great people. Let's turn your ideas into reality!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
