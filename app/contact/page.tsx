'use client';

import { useState } from 'react';
import { personalInfo, contactInfo } from '@/data/portfolio-data';
import { Mail, MapPin, Send, CheckCircle, Github, Linkedin, Twitter, Clock, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="page-container">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="blur-orb w-96 h-96 bg-tertiary/20 top-0 right-0" />
        <div className="absolute inset-0 grid-background opacity-30" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-slide-up">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-white/70 animate-slide-up stagger-1">
              Have a project in mind or just want to chat? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  Contact Information
                </h2>
                
                {/* Contact Cards */}
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/20 rounded-xl">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-white/60 text-sm mb-1">Email</div>
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="text-white font-medium hover:text-accent transition-colors"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/20 rounded-xl">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-white/60 text-sm mb-1">Location</div>
                        <div className="text-white font-medium">{personalInfo.location}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/20 rounded-xl">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-white/60 text-sm mb-1">Working Hours</div>
                        <div className="text-white font-medium">{contactInfo.workingHours}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability Badge */}
              {contactInfo.availableForWork && (
                <div className="bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-white font-semibold">Available for New Projects</span>
                  </div>
                  <p className="text-white/70 text-sm">
                    I'm currently accepting new clients and projects. Let's build something amazing together!
                  </p>
                </div>
              )}

              {/* Social Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Connect on Social Media</h3>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent rounded-xl transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent rounded-xl transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={personalInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent rounded-xl transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-semibold mb-4">Services I Offer</h3>
                <div className="space-y-2">
                  {contactInfo.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Response Time</h3>
                <p className="text-white/70 text-sm">
                  {contactInfo.responseTime}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Send Me a Message
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-white/60 text-center">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white/80 mb-2 text-sm font-medium">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-white/50 text-xs text-center">
                    * Required fields
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
