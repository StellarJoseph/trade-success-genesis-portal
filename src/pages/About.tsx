import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import UnifiedPricingCard from '@/components/UnifiedPricingCard';

const About = () => {
  const impactNumbers = [
    {
      value: "70K+",
      label: "Active Traders",
      description: "Trusted by investors worldwide"
    },
    {
      value: "$6M+",
      label: "Trading Volume",
      description: "Expert calls sent globally"
    },
    {
      value: "19+",
      label: "Countries",
      description: "Growing investors daily"
    }
  ];

  const coreValues = [
    {
      title: "Transparency",
      description: "Open performance reporting and full access to your funds.",
      icon: "🔍"
    },
    {
      title: "Security",
      description: "Data encryption, wallet integrations, 2FA and API authentication.",
      icon: "🔒"
    },
    {
      title: "Community-Driven",
      description: "Built by traders, for traders.",
      icon: "👥"
    },
    {
      title: "Smart Automation",
      description: "Designed for speed, scalability, and ease-of-use.",
      icon: "🤖"
    }
  ];

  const clientSegments = [
    {
      title: "Wealth Managers",
      description: "Designed for family offices, private wealth advisors, and institutional portfolio managers.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      features: [
        "Multi-asset portfolio management",
        "Institutional dashboard views", 
        "Custom strategy support",
        "Risk-adjusted profile configurations"
      ]
    },
    {
      title: "Personal Investors",
      description: "Secure, simplified crypto for everyday investors.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      features: [
        "Daily trading signals",
        "Auto-buy/sell bots",
        "ROI reporting",
        "Full privacy control"
      ]
    },
    {
      title: "Commercial Clients",
      description: "Infrastructure for trading firms and startups.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
      features: [
        "Signal API",
        "KYC & multi-user dashboards",
        "DeFi-friendly control structures",
        "Onboarding & scaling support"
      ]
    }
  ];

  const testimonials = [
    {
      name: "James R.",
      role: "Crypto Investor",
      quote: "The auto-buy feature changed how I invest.",
      avatar: "JR"
    },
    {
      name: "Rachel M.",
      role: "Portfolio Manager",
      quote: "From zero to steady gains every week. I feel in control again.",
      avatar: "RM"
    }
  ];

  const faqs = [
    {
      question: "How do I buy cryptocurrency?",
      answer: "You can buy cryptocurrency through our platform using various payment methods including bank transfer, credit card, or other supported cryptocurrencies."
    },
    {
      question: "How do I store my crypto safely?",
      answer: "We provide secure wallet solutions with multi-layer security including cold storage options and insurance coverage for your digital assets."
    },
    {
      question: "How do crypto transactions work?",
      answer: "Crypto transactions are processed on blockchain networks. Our platform simplifies this process while maintaining security and transparency."
    },
    {
      question: "Can I use cryptocurrency for everyday purchases?",
      answer: "Yes, we provide solutions for using cryptocurrency in everyday transactions through our payment gateway integrations and merchant partnerships."
    }
  ];

  const partners = [
    "Binance", "Bull X", "Bybit", "Maestro Bot", "Solana", "Ledger"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-general mb-6">
                Revolutionizing Crypto Trading—<span className="text-gradient">One Strategy at a Time</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
                At TradeSuccess.VIP, we're transforming how people trade crypto by combining AI-powered automation (trading bots), real-time market data, and proven signal strategies—all in one seamless experience.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
                Trusted by a growing global community of 70,000+ traders, we empower both beginners and experienced investors to trade smarter, reduce risk, and grow their portfolios with confidence. Whether you're after daily profit signals, bot-powered trades, or fully managed portfolios, our platform provides everything you need—securely and transparently. Join the future of crypto trading. Let results speak for themselves.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="glow-button text-crypto-dark font-semibold">
                  Explore Our Services
                </Button>
                <Button variant="outline" className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark">
                  View Membership Plans
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {impactNumbers.map((stat, index) => (
                <div key={index} className="glass-card p-8 rounded-3xl text-center hover:border-crypto-green/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl font-bold text-crypto-green mb-2 font-general">
                    {stat.value}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-400">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6">
                Who We <span className="text-gradient">Serve</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Whether you're trading solo or managing portfolios for others, we have tools built just for you.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {clientSegments.map((segment, index) => (
                <div
                  key={index}
                  className="glass-card rounded-3xl overflow-hidden hover:border-crypto-green/40 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={segment.image} 
                      alt={segment.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold font-general text-white mb-2">
                        {segment.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-300 mb-6">
                      {segment.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {segment.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-crypto-green rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6">
                The values that drive our <span className="text-gradient">company</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="glass-card p-8 rounded-3xl text-center hover:border-crypto-green/40 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold font-general mb-4 text-gradient">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Summary */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card p-12 rounded-3xl text-center">
              <h2 className="text-4xl font-bold font-general mb-6">
                Your dream, <span className="text-gradient">automated</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Whether you want to start trading or let experts manage it for you, our platform is designed to translate your financial goals into profitable actions — with the right mix of strategy, automation, and insight.
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="glow-button text-crypto-dark font-semibold">
                  View Services
                </Button>
                <Button variant="outline" className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark">
                  Explore Pricing Plans
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6">
                What Our <span className="text-gradient">Members Say</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6">
                Have questions? <span className="text-gradient">We've got answers.</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl hover:border-crypto-green/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3 font-general">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6">
                Our <span className="text-gradient">Partners</span>
              </h2>
              <p className="text-gray-400">Trusted by innovators and institutions across blockchain, DeFi, and fintech.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="glass-card p-6 rounded-xl text-center hover:border-crypto-green/40 transition-all duration-300 group">
                  <span className="text-gray-400 group-hover:text-crypto-green font-medium transition-colors">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <UnifiedPricingCard showTitle={false} />

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-crypto-green/10 via-transparent to-crypto-green/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold font-general mb-6">
                  Ready to grow your portfolio with <span className="text-gradient">TradeSuccess?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  We're here to help you make smarter crypto decisions — whether you want to trade manually, use a bot, or let us manage your entire portfolio.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="glow-button text-crypto-dark font-semibold text-lg px-8 py-4 h-auto">
                    Explore Services
                  </Button>
                  <Button variant="outline" className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark text-lg px-8 py-4 h-auto">
                    View Pricing
                  </Button>
                  <Button className="glow-button text-crypto-dark font-semibold text-lg px-8 py-4 h-auto">
                    Get Started Today
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

export default About;
