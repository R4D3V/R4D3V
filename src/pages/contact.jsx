import whatsapp from "../icons/whatsapp.png";
import instagram from "../icons/Instagram.png";
import telegram from "../icons/telegram.png";
import { Link } from "react-router-dom";
import video from "../img/LiQWYD-Call me.mp4";

function Contact() {
  const contactMethods = [
    {
      title: "Email",
      description: "Reach out to me, I'm ready to help.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      link: "mailto:raymonjohns@gmail.com",
      value: "raymonjohns@gmail.com",
    },
    {
      title: "Office",
      description: "Come say hello.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      link: "https://maps.app.goo.gl/b16NN8czvGW3CgN18",
      value: "26°15'28.2\"N 50°37'07.5\"E 7J59+4GQ, Muharraq.",
    },
    {
      title: "Phone",
      description: "Mon-Fri from 8am to 5pm.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      link: "tel:+256 751621506",
      value: "+256 751621506",
    },
    {
      title: "WhatsApp",
      description: "Mon-Fri from 8am to 5pm.",
      icon: <img src={whatsapp} alt="WhatsApp" className="w-12 h-12" />,
      link: "https://wa.me/message/EMSUIOYUA5SDI1",
      value: "+256 751621506",
    },
    {
      title: "Instagram",
      description: "Mon-Fri from 8am to 5pm.",
      icon: <img src={instagram} alt="Instagram" className="w-12 h-12" />,
      link: "https://www.instagram.com/r4d3v/",
      value: "R4D3V",
    },
    {
      title: "Telegram",
      description: "Mon-Fri from 8am to 5pm.",
      icon: <img src={telegram} alt="Telegram" className="w-12 h-12" />,
      link: "https://t.me/patrolfx",
      value: "PATROLFX",
    },
  ];

  return (
    <div className="container mx-auto w-full px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gradient">Contact Me</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.link}
            target={
              method.link.startsWith("http") &&
              !method.link.startsWith("mailto:") &&
              !method.link.startsWith("tel:")
                ? "_blank"
                : "_self"
            }
            rel={
              method.link.startsWith("http") &&
              !method.link.startsWith("mailto:") &&
              !method.link.startsWith("tel:")
                ? "noopener noreferrer"
                : ""
            }
            className="glass-card group text-center hover:scale-105"
          >
            <div className="inline-block p-4 text-white animate-bounce group-hover:animate-none transition-all duration-300">
              {method.icon}
            </div>
            <h2 className="mt-4 text-xl font-bold text-gradient">
              {method.title}
            </h2>
            <p className="mt-2 text-sm text-white/80">{method.description}</p>
            <p className="mt-3 text-sm font-semibold text-white hover:text-blue-200 transition-colors">
              {method.value}
            </p>
          </a>
        ))}
      </div>

      <div className="flex justify-center mb-12">
        <button className="glass-button text-lg px-8 py-3 hover:scale-110">
          <Link to="/portfolio">My Work</Link>
        </button>
      </div>

      <div className="flex justify-center items-center">
        <div className="glass-card w-full max-w-2xl">
          <video
            src={video}
            controls
            loop
            className="w-full rounded-lg hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
