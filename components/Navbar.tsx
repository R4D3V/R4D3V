"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/80 backdrop-blur-lg shadow-lg"
          : "bg-primary/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-display font-bold gradient-text hover:scale-105 transition-transform"
          >
            RJ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 font-medium ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block transition-colors py-2 ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-white/80 hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-white/10">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
