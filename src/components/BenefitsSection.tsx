const BenefitsSection = () => {
  const benefits = [
    {
      title: "Effortless Crypto Management",
      description: "Intuitive dashboard that simplifies complex crypto operations into simple actions",
      icon: "⚡"
    },
    {
      title: "Smart Auto Buy/Sell",
      description: "AI-powered automation executes trades at optimal times while you sleep",
      icon: "🤖"
    },
    {
      title: "Multi-Currency Support",
      description: "Trade across 500+ cryptocurrencies on multiple exchanges seamlessly",
      icon: "🌍"
    },
    {
      title: "Secure & Transparent",
      description: "Bank-level security with real-time transparency and full audit trails",
      icon: "🔒"
    },
    {
      title: "Low-Cost Transactions",
      description: "Competitive fees and gas optimization to maximize your trading profits",
      icon: "💰"
    },
    {
      title: "24/7 Market Access",
      description: "Never miss opportunities with round-the-clock market monitoring",
      icon: "🌙"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
            <span className="text-[#73E212]">Powerful.</span>{' '}
            <span className="text-[#73E212]">Secure.</span>{' '}
            <span className="text-[#73E212]">Effortless.</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Experience cryptocurrency trading the way it should be - simple, secure, and profitable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl hover:border-[#73E212]/40 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#73E212]/20 to-[#73E212]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold font-general mb-4 text-white">
                {benefit.title}
              </h3>
              
              <p className="text-white">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
