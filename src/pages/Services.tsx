
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "AI Trading Bot",
      description: "Perfect for busy investors who want automated trading with professional-grade algorithms",
      features: [
        "24/7 Automated Trading",
        "Risk Management Tools",
        "Multiple Exchange Support",
        "Real-time Market Analysis",
        "Customizable Strategies"
      ],
      price: "Starting at $99/month"
    },
    {
      title: "VIP Membership",
      description: "Exclusive access to premium trading signals and market insights",
      features: [
        "7-10 Daily Premium Signals",
        "Entry, Stop Loss & Take Profit Levels",
        "Market Analysis & Commentary",
        "Private Discord Community",
        "Priority Customer Support"
      ],
      price: "$199/month"
    },
    {
      title: "Gemcoin Signals",
      description: "High-potential altcoin signals with exceptional profit opportunities",
      features: [
        "5-7 Daily Gemcoin Alerts",
        "100-500% Profit Potential",
        "Early-stage Project Analysis",
        "Risk Assessment Reports",
        "Exclusive Research Access"
      ],
      price: "$499/month"
    }
  ];

  const portfolioTiers = [
    {
      tier: "Pro",
      minimum: "$10,000",
      features: ["Personal Account Manager", "Quarterly Reviews", "Basic Reporting"]
    },
    {
      tier: "Prestige",
      minimum: "$50,000",
      features: ["Dedicated Portfolio Manager", "Monthly Strategy Calls", "Advanced Analytics"]
    },
    {
      tier: "Elite",
      minimum: "$100,000",
      features: ["Senior Portfolio Manager", "Weekly Check-ins", "Custom Strategies"]
    },
    {
      tier: "Royal",
      minimum: "$500,000",
      features: ["Executive Portfolio Manager", "24/7 Support", "Exclusive Opportunities"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-general mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Comprehensive cryptocurrency trading and investment solutions tailored 
                to your financial goals and experience level.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="glass-card p-8 rounded-3xl hover:border-crypto-green/40 transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold font-general mb-4 text-gradient">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-crypto-green rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-crypto-green font-bold text-xl mb-6">
                    {service.price}
                  </div>

                  <Button className="w-full glow-button text-crypto-dark font-semibold">
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Management */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
                Portfolio Management <span className="text-gradient">Tiers</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional portfolio management services for high-net-worth individuals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioTiers.map((tier, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-3xl text-center hover:border-crypto-green/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold font-general mb-4 text-gradient">
                    {tier.tier}
                  </h3>
                  
                  <div className="text-2xl font-bold text-crypto-green mb-6">
                    {tier.minimum}
                  </div>

                  <ul className="space-y-2 text-sm text-gray-300">
                    {tier.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trade Challenge */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card p-12 rounded-3xl text-center">
              <h2 className="text-4xl font-bold font-general mb-6">
                40-Day <span className="text-gradient">Trade Challenge</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our intensive trading challenge and potentially achieve 2200-4000% returns 
                in just 40 days with our expert guidance and proven strategies.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-crypto-green mb-2">40</div>
                  <div className="text-gray-400">Days Duration</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-crypto-green mb-2">4000%</div>
                  <div className="text-gray-400">Max Returns</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-crypto-green mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
              </div>

              <Button className="glow-button text-crypto-dark font-semibold text-lg px-12 py-4 h-auto">
                Apply to See If You Qualify
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
