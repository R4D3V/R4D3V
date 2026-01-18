import { Link } from "react-router-dom";

function About() {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Cups of Coffee", value: "500+" },
  ];

  const achievements = [
    {
      icon: "🚀",
      title: "Performance First",
      description:
        "Building fast, responsive web applications with optimized code",
    },
    {
      icon: "🎨",
      title: "Creative Design",
      description: "Transforming ideas into beautiful, modern user interfaces",
    },
    {
      icon: "💻",
      title: "Full Stack Ready",
      description:
        "Capable of handling frontend, backend, and deployment tasks",
    },
    {
      icon: "🔒",
      title: "Security Focus",
      description: "Building secure applications that protect user data",
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Creating responsive designs that work on all devices",
    },
    {
      icon: "🤝",
      title: "Team Player",
      description:
        "Collaborating effectively with clients and development teams",
    },
  ];

  return (
    <div className="container mx-auto w-full px-4 py-12">
      {/* Header Section */}
      <div className="animate-fade-in-up mb-16">
        <h1 className="text-5xl font-bold text-center text-gradient mb-6">
          About Me
        </h1>
        <p className="text-center text-xl max-w-2xl mx-auto">
          Hi, I'm Raymond, a passionate frontend developer dedicated to creating
          exceptional digital experiences.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
        <div className="animate-fade-in-left">
          <div className="glass-card h-full">
            <h2 className="text-3xl font-bold text-gradient mb-6">
              My Journey
            </h2>
            <p className="mb-4 leading-relaxed">
              With over 3 years of experience in web development, I've
              transformed from a curious learner to a seasoned developer. My
              journey started with a passion for creating beautiful, functional
              websites that users love.
            </p>
            <p className="mb-4 leading-relaxed">
              I specialize in building modern, responsive web applications using
              cutting-edge technologies like React, JavaScript, and Tailwind
              CSS. Every project is an opportunity to learn something new and
              push the boundaries of what's possible.
            </p>
            <p className="leading-relaxed">
              My philosophy is simple: write clean, maintainable code that not
              only works today but scales for tomorrow. I'm committed to
              continuous improvement and staying updated with the latest web
              development trends.
            </p>
          </div>
        </div>

        <div className="animate-fade-in-right">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card text-center group hover-lift"
              >
                <div className="text-4xl font-bold text-gradient mb-2 group-hover:animate-float">
                  {stat.value}
                </div>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-center text-gradient mb-12 section-heading">
          What I Do Best
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card group hover-lift text-center"
            >
              <div className="text-5xl mb-4 group-hover:animate-rotate-3d">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-white/80">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="glass-card mb-12 animate-scale-in">
        <h2 className="text-3xl font-bold text-gradient mb-6">My Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">🎯 User Centric</h3>
            <p className="text-white/80">
              I build with users in mind, ensuring every design decision serves
              a purpose and enhances user experience.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">⚡ Performance</h3>
            <p className="text-white/80">
              Fast-loading, optimized applications that provide smooth
              interactions and keep users engaged.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">🔧 Quality Code</h3>
            <p className="text-white/80">
              Clean, documented, and maintainable code that allows projects to
              grow and evolve over time.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Work Together?
        </h2>
        <Link to="/contact">
          <button className="glass-button text-lg px-8 py-4 hover:scale-110">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
