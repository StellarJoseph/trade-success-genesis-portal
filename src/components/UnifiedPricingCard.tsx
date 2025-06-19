
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const UnifiedPricingCard = ({ showTitle = true, className = "" }) => {
  const plans = [
    {
      name: "Trading Bot",
      price: 299,
      description: "Access our proprietary AI-powered trading bot for hands-free execution on top exchanges.",
      features: [
        "AI-Powered Trading Bot",
        "Multi-Exchange Integration",
        "24/7 Automated Trading",
        "Risk Management Tools",
        "Real-time Monitoring"
      ],
      popular: false
    },
    {
      name: "VIP Signals",
      price: 99,
      description: "Get 5–7 daily profitable signals with full trade instructions (TP, SL, Entry).",
      features: [
        "5-7 Daily Premium Signals",
        "Entry, Stop Loss & Take Profit",
        "Multi-Market Coverage",
        "Expert Analysis",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "40-Day Challenge",
      price: 499,
      description: "Join our high-yield challenge (coming soon). One signal per day aiming for 2200–4000% in 40 days.",
      features: [
        "1 Expert Signal Daily",
        "2200-4000% ROI Target",
        "Personal Guidance",
        "Exclusive Community",
        "Performance Tracking"
      ],
      popular: false,
      comingSoon: true
    }
  ];

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
              Trading Access <span className="text-gradient">Plans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your trading goals and start your journey to financial freedom.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative group hover:scale-105 transition-all duration-500 ${
                plan.popular ? 'popular-card' : ''
              }`}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {plan.comingSoon && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-crypto-green text-crypto-dark px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
                    Coming Soon
                  </Badge>
                </div>
              )}

              {plan.popular && !plan.comingSoon && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-crypto-green text-crypto-dark px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-crypto-green via-crypto-green-light to-crypto-green rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm"></div>
                
                <div className={`relative ${
                  plan.popular ? 'bg-crypto-purple' : 'bg-crypto-dark'
                } border border-gray-800 rounded-3xl p-8 h-full overflow-hidden group-hover:border-crypto-green/40 transition-all duration-500`}>
                  
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                      <span className="text-crypto-green font-semibold text-sm uppercase tracking-wide">
                        {plan.name}
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="text-4xl font-bold text-white font-general">
                        ${plan.price}
                      </div>
                      <div className="text-gray-400">/month</div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed text-center">
                    {plan.description}
                  </p>

                  <ul className="space-y-4 mb-12">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-crypto-green/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <svg className="w-3 h-3 text-crypto-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-crypto-green hover:bg-crypto-green/90 text-crypto-dark font-semibold py-4 rounded-full text-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-crypto-green/25">
                    Get Started →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnifiedPricingCard;
