
import { Button } from '@/components/ui/button';

const HomepagePricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 99,
      period: "1 Month",
      popular: false,
      features: [
        "5-7 Daily Premium Signals",
        "Entry, Stop Loss & Take Profit",
        "Basic Market Analysis",
        "Community Access",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      price: 249,
      period: "3 Months",
      popular: true,
      originalPrice: 297,
      features: [
        "All Starter Features",
        "Advanced Market Insights",
        "Priority Support",
        "Exclusive Webinars",
        "Risk Management Tools",
        "Mobile App Access"
      ]
    },
    {
      name: "VIP Lifetime",
      price: 499,
      period: "Lifetime",
      popular: false,
      originalPrice: 999,
      features: [
        "All Professional Features",
        "Lifetime Access",
        "Personal Account Manager",
        "Custom Trading Strategies",
        "VIP Discord Channel",
        "1-on-1 Consultation"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-crypto-green mb-4">● Pricing Plans</div>
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
            Choose the Plan That Fits Your{' '}
            <span className="text-gradient">Crypto Goals</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Start your journey to financial freedom with our proven trading strategies and expert guidance.
          </p>
          
          <div className="inline-flex items-center gap-2 mb-8 bg-crypto-green/10 px-6 py-3 rounded-full">
            <span className="text-crypto-green text-sm font-semibold">🔥 Limited Time: First Month Only $50</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-3xl relative ${
                plan.popular ? 'border-crypto-green/60 scale-105' : ''
              } hover:border-crypto-green/40 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-crypto-green text-crypto-dark px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-general mb-4 text-gradient">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="text-gray-400 line-through text-lg">${plan.originalPrice}</div>
                  )}
                  <div className="text-4xl font-bold text-white">
                    ${plan.price}
                  </div>
                  <div className="text-gray-400">{plan.period}</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-crypto-green/20 flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className={`w-full py-4 font-semibold ${
                plan.popular 
                  ? 'glow-button text-crypto-dark' 
                  : 'border border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark'
              }`}>
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Special Trading Challenge Offer */}
        <div className="glass-card p-8 rounded-3xl text-center max-w-2xl mx-auto">
          <div className="text-crypto-green mb-4">🏆 Special Challenge</div>
          <h3 className="text-2xl font-bold font-general mb-4">
            40-Day Trading Challenge
          </h3>
          <p className="text-gray-300 mb-6">
            Intensive program targeting 2200-4000% ROI with daily expert signals and personal guidance.
          </p>
          <div className="text-3xl font-bold text-crypto-green mb-6">$999</div>
          <Button className="glow-button text-crypto-dark font-semibold px-8 py-4">
            Apply to See If You Qualify
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomepagePricing;
