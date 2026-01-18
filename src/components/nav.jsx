import { Link } from "react-router-dom";
import instagram from "../icons/Instagram.png";
import telegram from "../icons/telegram.png";
import github from "../icons/github.png";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="container mx-auto w-full p-4 sticky top-0 z-50 animate-slide-in-from-top">
      <div className="glass-effect px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl text-gradient">
          <h1>
            <Link
              to="/"
              className="hover:text-glow transition-all duration-300"
            >
              R4D3V
            </Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white/80 hover:text-white transition-colors duration-300 font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          {/* Social Links */}
          <div className="hidden sm:flex gap-4">
            <a
              href="http://github.com/r4d3v"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <img src={github} alt="GitHub" width={20} height={20} />
            </a>
            <a
              href="http://t.me/patrolfx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-effect hover:scale-110 transition-transform duration-300"
            >
              <img src={telegram} alt="Telegram" width={20} height={20} />
            </a>
            <a
              href="http://instagram.com/r4d3v"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-effect hover:scale-110 transition-transform duration-300"
            >
              <img src={instagram} alt="Instagram" width={20} height={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden glass-button p-2"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden mt-2 glass-effect p-4 rounded-lg animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
