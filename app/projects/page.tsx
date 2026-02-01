'use client';

import { useState } from 'react';
import { projects } from '@/data/portfolio-data';
import { ExternalLink, Github, X, ChevronRight, Star, Filter } from 'lucide-react';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <main className="page-container">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="blur-orb w-96 h-96 bg-secondary/20 top-0 left-0" />
        <div className="absolute inset-0 grid-background opacity-30" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-slide-up">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-white/70 animate-slide-up stagger-1">
              Explore my latest work across web development, mobile apps, and creative tech
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Filter className="w-5 h-5 text-accent" />
              <h2 className="text-lg font-semibold text-white">Filter by Category</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    filter === category
                      ? 'bg-accent text-white shadow-lg shadow-accent/30'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Count */}
          <div className="text-center mb-8">
            <p className="text-white/60">
              Showing <span className="text-accent font-semibold">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-accent/20 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/10">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-semibold flex items-center gap-2">
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="text-accent text-sm font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-white/50 text-xs">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-semibold">Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white/80 rounded-lg transition-colors border border-white/10"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/60 text-lg mb-4">No projects found in this category</p>
              <button
                onClick={() => setFilter('All')}
                className="btn-secondary inline-flex items-center gap-2"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-primary border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-primary/95 backdrop-blur-sm border-b border-white/10 p-6 flex items-center justify-between">
              <div>
                <div className="text-accent text-sm font-semibold mb-1">
                  {selectedProjectData.category}
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  {selectedProjectData.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white/60" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl font-bold text-white/10">
                    {selectedProjectData.title.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Stats */}
              {selectedProjectData.stats && (
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(selectedProjectData.stats).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <div className="text-2xl font-bold gradient-text mb-1">{value}</div>
                      <div className="text-white/60 text-sm capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <div>
                <h4 className="text-lg font-display font-semibold text-white mb-3">
                  About This Project
                </h4>
                <p className="text-white/70 leading-relaxed">
                  {selectedProjectData.longDescription}
                </p>
              </div>

              {/* Key Highlights */}
              {selectedProjectData.highlights && (
                <div>
                  <h4 className="text-lg font-display font-semibold text-white mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-accent" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProjectData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-white/70">
                        <ChevronRight className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-display font-semibold text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/5 text-white/80 rounded-full border border-white/10 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges & Results */}
              {(selectedProjectData.challenges || selectedProjectData.results) && (
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedProjectData.challenges && (
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-display font-semibold text-white mb-3">
                        Challenges
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {selectedProjectData.challenges}
                      </p>
                    </div>
                  )}
                  {selectedProjectData.results && (
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-display font-semibold text-white mb-3">
                        Results
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {selectedProjectData.results}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                {selectedProjectData.liveUrl && (
                  <a
                    href={selectedProjectData.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center"
                  >
                    <ExternalLink className="w-5 h-5 inline mr-2" />
                    View Live Project
                  </a>
                )}
                {selectedProjectData.githubUrl && (
                  <a
                    href={selectedProjectData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center"
                  >
                    <Github className="w-5 h-5 inline mr-2" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
