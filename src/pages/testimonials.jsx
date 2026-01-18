function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Mansouri",
      title: "CEO, REED-MEDIA",
      image: "👨‍💼",
      content:
        "Raymond transformed our vision into reality. His attention to detail and modern design approach took our online presence to the next level. Highly recommended!",
      rating: 5,
    },
    {
      name: "Fatima Al-Dosari",
      title: "Store Manager, REED-STORES",
      image: "👩‍💼",
      content:
        "The e-commerce platform Raymond built increased our sales by 40%. He's professional, responsive, and truly understands what customers want.",
      rating: 5,
    },
    {
      name: "Hassan Khalil",
      title: "Founder, SKILLS PHONE SERVICE",
      image: "👨‍🔧",
      content:
        "Working with Raymond was a game-changer. He built us a booking system that reduced manual inquiries by 60%. Outstanding work!",
      rating: 5,
    },
    {
      name: "Noor Abdullah",
      title: "Marketing Director, Tech Startup",
      image: "👩‍💼",
      content:
        "Raymond's ability to understand our brand and translate it into a beautiful website is remarkable. His attention to UX is exceptional.",
      rating: 5,
    },
    {
      name: "Mohammed Rashid",
      title: "Product Manager",
      image: "👨‍💼",
      content:
        "Fast turnaround, great communication, and delivers exactly what was promised. Raymond is a top-tier developer.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      title: "Designer, Creative Agency",
      image: "👩‍🎨",
      content:
        "Collaborating with Raymond on projects is seamless. He brings designs to life with pixel-perfect accuracy and smooth animations.",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: "⚡",
      name: "Speed",
      description: "Ultra-fast performance and quick turnarounds",
    },
    {
      icon: "🎯",
      name: "Quality",
      description: "Code quality that stands the test of time",
    },
    {
      icon: "💬",
      name: "Communication",
      description: "Clear, consistent updates throughout the project",
    },
    {
      icon: "🔄",
      name: "Reliability",
      description: "Dependable and always available when needed",
    },
    {
      icon: "🎨",
      name: "Creativity",
      description: "Fresh ideas and modern design approaches",
    },
    {
      icon: "📈",
      name: "Results",
      description: "Measurable impact on your business goals",
    },
  ];

  return (
    <div className="container mx-auto w-full px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-5xl font-bold text-gradient mb-6">Testimonials</h1>
        <p className="text-xl max-w-2xl mx-auto">
          What my clients have to say about working with me
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 stagger">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="glass-card group hover-lift relative">
            {/* Quote Mark */}
            <div className="text-5xl text-white/20 mb-4 absolute -top-4 -left-4 group-hover:text-white/40 transition-colors">
              "
            </div>

            {/* Content */}
            <p className="text-white/90 mb-6 leading-relaxed italic">
              {testimonial.content}
            </p>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ⭐
                </span>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/20">
              <div className="text-4xl">{testimonial.image}</div>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-xs text-white/60">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Work With Me Section */}
      <div className="mb-20 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-center text-gradient mb-12 section-heading">
          Why Clients Love Working With Me
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-xl text-center group hover-lift"
            >
              <div className="text-5xl mb-4 group-hover:animate-float">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {service.name}
              </h3>
              <p className="text-white/80 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="glass-card mb-12 animate-scale-in">
        <h2 className="text-3xl font-bold text-center text-gradient mb-12">
          By The Numbers
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">98%</div>
            <p className="text-white/80">Client Satisfaction Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">50+</div>
            <p className="text-white/80">Happy Clients</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">100+</div>
            <p className="text-white/80">5-Star Reviews</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient mb-2">3+ yrs</div>
            <p className="text-white/80">Years Experience</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to add your success story?
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Let's work together to create something amazing. I'm ready to help
          bring your vision to life.
        </p>
        <button className="glass-button text-lg px-8 py-4 hover:scale-110">
          <a href="/contact">Get Started Today</a>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
