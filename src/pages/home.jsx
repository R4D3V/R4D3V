import { Link } from "react-router-dom";
import html from "../img/tech/html.png";
import css from "../img/tech/css.png";
import js from "../img/tech/js.png";
import react from "../img/tech/react.png";
import tailwind from "../img/tech/tailwind.png";
import stack from "../img/tech/stack.png";

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="hero container mx-auto px-4 mb-20">
        <div className="hero-content">
          <div className="animate-fade-in-down mb-4">
            <p className="text-xl text-white/80 font-light">
              Welcome to my portfolio
            </p>
          </div>
          <h1 className="gradient-text animate-fade-in-up mb-6">
            I'm Raymond, Frontend Developer
          </h1>
          <p
            className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up mb-8"
            style={{ animationDelay: "0.2s" }}
          >
            Crafting beautiful, modern web experiences with cutting-edge
            technology and creative design
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link to="/portfolio">
              <button className="glass-button text-lg px-8 py-4 hover:scale-110 w-full sm:w-auto">
                View My Work
              </button>
            </Link>
            <Link to="/contact">
              <button className="glass-effect text-lg px-8 py-4 hover:scale-110 w-full sm:w-auto">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Dev Card & About Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="p-4 place-content-center grid gap-6 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <a
              href="https://app.daily.dev/r4d3v"
              className="glass-card group hover:shadow-2xl"
            >
              <img
                src="https://api.daily.dev/devcards/v2/78hBt4g51mnyl6Rv5PviX.png?type=default&r=jk2"
                width="356"
                alt="R4D3V's Dev Card"
                className="hover:scale-105 transition duration-500 rounded-lg"
              />
            </a>
          </div>

          <div className="glass-card flex flex-col justify-center">
            <h1 className="text-4xl font-bold gradient-text mb-2">
              I'm RAYMOND
            </h1>
            <p className="py-3 text-2xl text-white font-light">
              Nice to meet you!
            </p>
            <p className="py-4 text-lg leading-relaxed">
              I'm a front-end developer passionate about building accessible web
              apps that users love.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="glass-button hover:scale-105">
                <Link to="/contact">contact</Link>
              </button>
              <button className="glass-button hover:scale-105">
                <Link to="/portfolio">portfolio</Link>
              </button>
            </div>

            <hr className="my-6 border-white/20" />

            <h2 className="text-2xl font-bold gradient-text mb-4">About me</h2>
            <p className="text-base leading-relaxed">
              I am a Frontend Developer dedicated to my work. I have acquired
              the skills and knowledge necessary to make your project a success.
              I enjoy every step of the design process, from discussion and
              collaboration. Senior Frontend Developer with experience in
              designing and developing web applications. I can build a website
              from nothing into full reality. I specialize in manipulating the
              fabric of the web using HTML, CSS, and JavaScript. I code User
              Interfaces from scratch and give them life through functionality.
            </p>
          </div>
        </div>

        <div className="p-6 mt-8">
          <div className="glass-effect px-6 py-4 text-center">
            <h1 className="text-3xl font-bold gradient-text uppercase">
              Tech Stack
            </h1>
          </div>
        </div>

        <div className="px-4 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card group text-center">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={html}
                  alt="HTML5"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-2 uppercase">
                HTML 5
              </h3>
              <p className="text-white/80">3+ Years</p>
            </div>

            <div className="glass-card group text-center">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={css}
                  alt="CSS3"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-2 uppercase">
                CSS 3
              </h3>
              <p className="text-white/80">3+ Years</p>
            </div>

            <div className="glass-card group text-center">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={js}
                  alt="JavaScript"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-2 uppercase">
                JavaScript
              </h3>
              <p className="text-white/80">3+ Years</p>
            </div>

            <div className="glass-card group text-center">
              <div className="flex justify-center mb-4 group-hover:animate-spin group-hover:duration-1000 transition-transform">
                <img
                  src={react}
                  alt="React"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-2 uppercase">
                React
              </h3>
              <p className="text-white/80">2+ Years</p>
            </div>

            <div className="glass-card group text-center">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={tailwind}
                  alt="Tailwind CSS"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-2 uppercase">
                Tailwind CSS
              </h3>
              <p className="text-white/80">2+ Years</p>
            </div>

            <div className="glass-card group text-center">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={stack}
                  alt="MERN Stack"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-2 uppercase">
                MERN
              </h3>
              <p className="text-white/80">2+ Years</p>
            </div>
          </div>
        </div>

        <div className="flex pt-8 pb-4 justify-center">
          <button className="glass-button text-lg px-8 py-3 hover:scale-110 animate-pulse">
            <Link to="/contact">Lets build something!</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
