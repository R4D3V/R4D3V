'use client';

import Link from 'next/link';
import { personalInfo } from '@/data/portfolio-data';
import { Heart, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-display font-bold gradient-text mb-4">
              {personalInfo.name}
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-accent transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-accent transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/60 hover:text-accent transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-accent transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent rounded-xl transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent rounded-xl transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent rounded-xl transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} {personalInfo.name}. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and lots of coffee
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent rounded-xl transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
