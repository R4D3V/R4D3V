import { Link } from "react-router-dom";
import "../index.css";

function Portfolio() {
  const projects = [
    {
      id: "p1",
      title: "REED-MEDIA",
      description: "Branding & website design agency",
      link: "http://reedmedia.vercel.app",
    },
    {
      id: "p2",
      title: "REED-STORES",
      description: "Online shop & Gadgets Store",
      link: "http://reedstores.vercel.app/",
    },
    {
      id: "p3",
      title: "SKILLS PHONE SERVICE CENTRE",
      description: "Repairing service for mobile devices and computers",
      link: "http://skillsphoneservices.vercel.app/",
    },
    {
      id: "p4",
      title: "R4D3V",
      description: "Branding & website design agency",
      link: "http://t.me/patrolfx",
    },
  ];

  return (
    <div className="container mx-auto w-full px-4">
      <div className="glass-card mt-4">
        <h1 className="text-4xl font-bold text-gradient text-center uppercase mb-4">
          Portfolio
        </h1>

        <p className="text-center text-lg mb-4">
          I hereby present to you my recent projects.
          <br />
          <span className="text-white font-semibold">
            Feel free to look through.
          </span>
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="glass-card group relative h-96 overflow-hidden bg-cover rounded-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 opacity-0 group-hover:opacity-100 transition-all duration-500 relative z-10">
                <h2 className="text-2xl font-bold text-white capitalize mb-2">
                  {project.title}
                </h2>
                <p className="text-lg text-blue-200 uppercase font-light mb-6">
                  {project.description}
                </p>
                <button className="glass-button hover:scale-105 inline-block">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check me out
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center my-12">
        <button className="glass-button text-lg px-8 py-4 hover:scale-110 animate-pulse">
          <Link to="/contact">Lets build something!</Link>
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
