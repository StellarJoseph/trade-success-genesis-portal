
const ServicesOverview = () => {
  const services = [
    {
      title: "Trading Signals",
      description: "Expert-curated signals with detailed entry, stop-loss, and take-profit levels",
      icon: "📊"
    },
    {
      title: "AI Trading Bots",
      description: "Automated trading solutions powered by advanced machine learning algorithms",
      icon: "🤖"
    },
    {
      title: "Crypto Advisory",
      description: "Personalized guidance from seasoned cryptocurrency investment professionals",
      icon: "💡"
    },
    {
      title: "Asset Management",
      description: "Professional portfolio management for high-net-worth cryptocurrency investors",
      icon: "💼"
    },
    {
      title: "Training",
      description: "Comprehensive courses and workshops to master cryptocurrency trading",
      icon: "🎓"
    },
    {
      title: "Consultancy",
      description: "One-on-one strategic sessions with our top cryptocurrency experts",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We remove the complexity of crypto for beginners and pros alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl hover:border-crypto-green/40 transition-all duration-300 group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold font-general mb-4 text-gradient">
                {service.title}
              </h3>
              
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
