'use client';

import { useState } from 'react';
import { aboutMe, personalInfo } from '@/data/portfolio-data';
import { Briefcase, GraduationCap, Award, Code2, Download, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'education'>('skills');

  return (
    <main className="page-container">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="blur-orb w-96 h-96 bg-accent/20 top-0 right-0" />
        <div className="absolute inset-0 grid-background opacity-30" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-slide-up">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-white/70 animate-slide-up stagger-1">
              Learn more about my background, skills, and what drives me
            </p>
          </div>

          {/* Bio Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              {aboutMe.description.map((paragraph, index) => (
                <p key={index} className="text-white/70 text-lg mb-6 leading-relaxed last:mb-0">
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-white/10">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </Link>
                {personalInfo.resumeUrl && (
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-white/60">Years of Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-white/60">Projects Completed</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">30+</div>
              <div className="text-white/60">Happy Clients</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">{aboutMe.certifications.length}</div>
              <div className="text-white/60">Certifications</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  activeTab === 'skills'
                    ? 'bg-accent text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Code2 className="w-4 h-4 inline mr-2" />
                Skills
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-accent text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4 inline mr-2" />
                Experience
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-accent text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4 inline mr-2" />
                Education
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {/* Skills */}
            {activeTab === 'skills' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                {aboutMe.skills.map((skillGroup, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 card-hover"
                  >
                    <h3 className="text-xl font-display font-semibold mb-4 gradient-text">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-white/70 flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Experience */}
            {activeTab === 'experience' && (
              <div className="space-y-8 animate-fade-in">
                {aboutMe.experience.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-display font-semibold text-white mb-1">
                          {job.position}
                        </h3>
                        <p className="text-accent font-medium">{job.company}</p>
                      </div>
                      <div className="text-white/60 mt-2 md:mt-0">{job.period}</div>
                    </div>
                    <p className="text-white/70 mb-4">{job.description}</p>
                    <div className="space-y-2">
                      <p className="text-white/50 text-sm font-semibold">Key Achievements:</p>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-white/70 flex items-start">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {activeTab === 'education' && (
              <div className="animate-fade-in space-y-6">
                {aboutMe.education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-display font-semibold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-accent font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-white/60">{edu.period}</div>
                    </div>
                    <p className="text-white/70">{edu.highlights}</p>
                  </div>
                ))}

                {/* Certifications */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="w-6 h-6 text-accent" />
                    <h3 className="text-2xl font-display font-semibold text-white">
                      Certifications
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {aboutMe.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-white/80">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
