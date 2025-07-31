
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import UnifiedPricingCard from '@/components/UnifiedPricingCard';

const Services = () => {
  const services = [
    {
      title: "AI-Powered Trading Signals",
      description: "Receive 5–7 profitable signals daily, targeting gains between 20%–500%, with entry, stop loss, and take profit included.",
      icon: "📊"
    },
    {
      title: "Portfolio Management",
      description: "We manage your crypto assets directly — secure, transparent, and results-driven — without requiring your daily involvement.",
      icon: "💼"
    },
    {
      title: "Automated Trading Bot Setup",
      description: "Hands-free trading through reputable bots, integrated with your chosen exchange (Bybit, Binance, etc.).",
      icon: "🤖"
    },
    {
      title: "Crypto Consulting & Strategy",
      description: "Personalized 1-on-1 sessions to assess your portfolio, design a growth plan, or enter the market smartly.",
      icon: "🤝"
    },
    {
      title: "Trading Challenge (40-Day Profit Plan)",
      description: "Participate in our high-stakes challenge with 1 expert signal daily, aiming for 2200–4000% in 40 days.",
      icon: "📈"
    },
    {
      title: "Merchant Services",
      description: "Accept payments in crypto and fiat securely with our integrated merchant gateway. Tailored for ecommerce platforms and creators looking to receive crypto payments easily.",
      icon: "💳"
    }
  ];

  const trustBuilders = [
    {
      title: "Security First",
      description: "Multi-layer protection, API-based integration, 2FA and wallet safety at all times.",
      icon: "🔒"
    },
    {
      title: "Results You Can See",
      description: "Live portfolio dashboards, detailed monthly reports, and verified performance updates.",
      icon: "📊"
    },
    {
      title: "Community-Led Support",
      description: "Telegram and Discord groups with expert traders ready to help you scale.",
      icon: "👥"
    },
    {
      title: "Global Accessibility",
      description: "Use our platform from anywhere in the world with full mobile optimization.",
      icon: "🌍"
    }
  ];

  const portfolioTiers = [
    {
      tier: "Pro",
      minimum: "$20,000",
      description: "For first-time investors looking to start right.",
      features: ["Personal Account Manager", "Quarterly Reviews", "Basic Reporting"],
      icon: "⭐"
    },
    {
      tier: "Prestige",
      minimum: "$50,000",
      description: "Strategy calls + priority support + memecoin tracking.",
      features: ["Dedicated Portfolio Manager", "Monthly Strategy Calls", "Advanced Analytics"],
      icon: "💎"
    },
    {
      tier: "Elite",
      minimum: "$100,000",
      description: "Full asset coverage, weekly insights, advanced tools.",
      features: ["Senior Portfolio Manager", "Weekly Check-ins", "Custom Strategies"],
      icon: "👑"
    },
    {
      tier: "Royal",
      minimum: "$500,000+",
      description: "Invite-only VIP tier with daily analyst calls and stealth opportunities.",
      features: ["Executive Portfolio Manager", "24/7 Support", "Exclusive Opportunities"],
      icon: "🏆"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer A.",
      location: "Lagos, Nigeria",
      quote: "Since joining TradeSuccess, I've earned consistent weekly profits without managing a single trade myself.",
      avatar: "JA"
    },
    {
      name: "Mike O.",
      location: "Dubai, UAE",
      quote: "The bot setup and signal group is just what I needed. No more guesswork, just straight wins.",
      avatar: "MO"
    },
    {
      name: "Sarah K.",
      location: "London, UK",
      quote: "The portfolio management service exceeded my expectations. Professional and profitable.",
      avatar: "SK"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-general mb-6">
                <span className="text-white">Take Full Control of Your</span> <span className="text-[#73E212]">Crypto Journey</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Discover expert-managed crypto solutions built for individuals and institutions who want more than just hype — real results, reliable signals, and professional portfolio strategies.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="glow-button text-crypto-dark font-semibold text-lg px-8 py-4 h-auto">
                  Explore Our Pricing
                </Button>
                <Button variant="outline" className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark text-lg px-8 py-4 h-auto">
                  Speak With an Advisor
                </Button>
              </div>
            </div>
            
            {/* Hero Animation Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-20 left-10 w-20 h-20 bg-crypto-green/20 rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-20 w-16 h-16 bg-crypto-green/30 rounded-full animate-bounce"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-crypto-green/10 rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
                <span className="text-white">What We</span> <span className="text-[#73E212]">Offer</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive crypto solutions designed to maximize your investment potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="glass-card p-8 rounded-3xl hover:border-crypto-green/40 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold font-general mb-4 text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
                <span className="text-white">Built on Trust.</span> <span className="text-[#73E212]">Designed for Profit.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustBuilders.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-8 rounded-3xl text-center hover:border-crypto-green/40 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold font-general mb-4 text-white">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive Signals Highlight */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-crypto-green/5 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold font-general mb-6">
                  <span className="text-white">Get Ahead of</span> <span className="text-[#73E212]">the Market</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join our exclusive signal group and get expert calls across Futures, Memecoins, and Altcoins. No hype — just calculated entries, full trade instructions, and verified win-rates.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="!bg-[#73E212] !text-black hover:!bg-white hover:!text-[#73E212] font-semibold transition-all duration-300">
                    Join the Signal Group
                  </Button>
                  <Button variant="outline" className="!border-[#73E212] !text-[#73E212] hover:!bg-white hover:!text-[#73E212] transition-all duration-300">
                    View Signal Plans
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Management Tiers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
                <span className="text-white">Portfolio Management</span> <span className="text-[#73E212]">Tiers</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Our experts trade directly on your behalf to grow your holdings across the most promising tokens and categories.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioTiers.map((tier, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-3xl hover:border-crypto-green/40 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tier.icon}
                    </div>
                    <h3 className="text-xl font-bold font-general mb-2 text-white">
                      {tier.tier}
                    </h3>
                    <div className="text-2xl font-bold text-crypto-green mb-4">
                      {tier.minimum}
                    </div>
                    <p className="text-sm text-gray-300 mb-6">
                      {tier.description}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-crypto-green rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="!bg-[#73E212] !text-black hover:!bg-white hover:!text-[#73E212] font-semibold transition-all duration-300">
                View Full Pricing Plans
              </Button>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6">
                <span className="text-white">What Our</span> <span className="text-[#73E212]">Clients Are Saying</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass-card p-8 rounded-3xl hover:border-crypto-green/40 transition-all duration-300">
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-full flex items-center justify-center mr-4">
                      <span className="text-crypto-dark font-bold">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unified Pricing Section */}
        <UnifiedPricingCard />

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-crypto-green/10 via-transparent to-crypto-green/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold font-general mb-6">
                  <span className="text-white">Let's Build Your</span> <span className="text-[#73E212]">Crypto Success Story</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Start trading smarter and growing your assets today with a partner you can trust.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="glow-button text-crypto-dark font-semibold text-lg px-8 py-4 h-auto">
                    Get Started
                  </Button>
                  <Button variant="outline" className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark text-lg px-8 py-4 h-auto">
                    Explore Plans
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
