import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type Props = {
  showTitle?: boolean;
  className?: string;
  excludePlans?: string[];
  copyStyleFrom?: Record<string, string>;
  priceDisplayOverrides?: Record<string, string>;
  suffixOverrides?: Record<string, string>;
  planOverrides?: Record<string, Partial<{
    name: string;
    price: number | string;
    description: string;
    features: string[];
    popular?: boolean;
    comingSoon?: boolean;
  }>>;
  centerSingleOnly?: boolean;
  centerPlan?: string;
};

const UnifiedPricingCard = ({ showTitle = true, className = "", excludePlans = [], copyStyleFrom = {}, priceDisplayOverrides = {}, suffixOverrides = {}, planOverrides = {}, centerSingleOnly = false, centerPlan }: Props) => {
  const plans = [
    {
      name: "Trading Bot",
      price: 299,
      description: "Access our proprietary AI-powered Trading Bot for hands-free trading on top exchanges.",
      features: [
        "AI-Powered Trading Bot",
        "Multi-Exchange Integration",
        "24/7 Automated Trading",
        "90% Return in 30 Days",
        "Real-time Monitoring",
        "Quick Profits Strategy setup"
      ],
      popular: false
    },
    {
      name: "VIP Signals",
      price: 99,
      description: "Receive Profitable signals with full trade instructions (Entry, Stop Loss, and Take Profit Levels).",
      features: [
        "5–7 Premium Daily Signals",
        "Precise Entry, SL, and TP Instructions",
        "Covers Multiple Crypto Markets",
        "Backed by Expert Analysis",
        "Includes Priority Support",
        "Optimized for Steady Returns"
      ],
      popular: true
    },
    {
      name: "40-Day Challenge",
      price: '₦50,000',
      description: 'Join the 40-Day Challenge — structured trading with clear signals and high-growth potential.',
      features: [
        '1–3 Clear Signals Daily',
        'Daily Profit Potential: 10% – 50%',
        'ROI Target (40 Days): 200% – 720%',
        'Personal Guidance Included',
        'Access to Private Trading Community',
        'Risk Management Strategies',
        'Transparent Performance Tracking'
      ],
      popular: false,
      comingSoon: false,
      suffix: ''
    }
  ];

  let visiblePlans = plans.filter((p) => !excludePlans.includes(p.name));

  // If a centerPlan is specified and we have three visible plans,
  // move the specified plan into the middle position so it appears centered.
  if (centerPlan && visiblePlans.length === 3) {
    const idx = visiblePlans.findIndex((p) => p.name === centerPlan);
    if (idx > -1) {
      const [item] = visiblePlans.splice(idx, 1);
      visiblePlans.splice(1, 0, item);
    }
  }

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
              Trading Access <span className="text-[#73E212]">Plans</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Choose the plan that fits your trading goals and start your journey to financial freedom.
            </p>
          </div>
        )}

        {(() => {
          const singleClass = 'flex justify-center gap-8 max-w-6xl mx-auto';
          const multiClass = 'grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto';
          const containerClass = (visiblePlans.length === 1 && centerSingleOnly) ? singleClass : multiClass;
          return <div className={containerClass}>
            {visiblePlans.map((plan, index) => {
              const override = planOverrides?.[plan.name] ?? {};
              const planName = override?.name ?? plan.name;
              const planPrice = override?.price ?? plan.price;
              const planDescription = override?.description ?? plan.description;
              const planFeatures = override?.features ?? plan.features;
              const planPopular = override?.popular ?? plan.popular;
              const planComingSoon = override?.comingSoon ?? plan.comingSoon;

              const sourceName = copyStyleFrom?.[planName] ?? copyStyleFrom?.[plan.name];
              const sourcePlan = sourceName ? plans.find((p) => p.name === sourceName) : undefined;
              const displayPopular = sourcePlan ? !!sourcePlan.popular : !!planPopular;
              const displayComingSoon = sourcePlan ? (sourcePlan.comingSoon ?? planComingSoon) : planComingSoon;

              return (
                <div
                  key={index}
                  className={`pricing-card relative group hover:scale-105 transition-all duration-500 ${
                    displayPopular ? 'popular-card' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {displayComingSoon && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className="bg-crypto-green text-crypto-dark px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
                        Coming Soon
                      </Badge>
                    </div>
                  )}

                  {displayPopular && !displayComingSoon && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className="bg-crypto-green text-crypto-dark px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-crypto-green via-crypto-green-light to-crypto-green rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm"></div>
                    
                    <div className={`relative ${
                      displayPopular ? 'bg-crypto-purple' : 'bg-crypto-dark'
                    } border border-gray-800 rounded-3xl p-8 h-full overflow-hidden group-hover:border-crypto-green/40 transition-all duration-500`}>
                      
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 mb-4">
                          <div className="w-2 h-2 bg-[#73E212] rounded-full"></div>
                          <span className="text-[#73E212] font-semibold text-sm uppercase tracking-wide">
                            {planName}
                          </span>
                        </div>

                        <div className="mb-4">
                          <div className="text-4xl font-bold text-white font-general">
                          {priceDisplayOverrides?.[planName] ?? (typeof planPrice === 'number' ? `$${planPrice}` : planPrice)}
                        </div>
                        <div className="text-[#73E212]">
                          {suffixOverrides?.[planName] ?? ((typeof (plan as any).suffix !== 'undefined') ? (plan as any).suffix : (planName === "Trading Bot" ? "/Setup" : "/month"))}
                        </div>
                        </div>
                      </div>

                      <p className="text-white mb-8 leading-relaxed text-center">
                        {planDescription}
                      </p>

                      <ul className="space-y-4 mb-12">
                        {planFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-white">
                            <div className="w-5 h-5 rounded-full bg-[#73E212]/20 flex items-center justify-center mr-4 flex-shrink-0">
                              <svg className="w-3 h-3 text-[#73E212]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button className="w-full bg-[#73E212] hover:bg-[#73E212]/90 text-black font-semibold py-4 rounded-full text-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#73E212]/25">
                        Get Started →
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>;
        })()}
          {visiblePlans.map((plan, index) => {
            const override = planOverrides?.[plan.name] ?? {};
            const planName = override?.name ?? plan.name;
            const planPrice = override?.price ?? plan.price;
            const planDescription = override?.description ?? plan.description;
            const planFeatures = override?.features ?? plan.features;
            const planPopular = override?.popular ?? plan.popular;
            const planComingSoon = override?.comingSoon ?? plan.comingSoon;

            const sourceName = copyStyleFrom?.[planName] ?? copyStyleFrom?.[plan.name];
            const sourcePlan = sourceName ? plans.find((p) => p.name === sourceName) : undefined;
            const displayPopular = sourcePlan ? !!sourcePlan.popular : !!planPopular;
            const displayComingSoon = sourcePlan ? (sourcePlan.comingSoon ?? planComingSoon) : planComingSoon;

            return (
              <div
                key={index}
                className={`pricing-card relative group hover:scale-105 transition-all duration-500 ${
                  displayPopular ? 'popular-card' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {displayComingSoon && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-crypto-green text-crypto-dark px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
                      Coming Soon
                    </Badge>
                  </div>
                )}

                {displayPopular && !displayComingSoon && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-crypto-green text-crypto-dark px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-crypto-green via-crypto-green-light to-crypto-green rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm"></div>
                  
                  <div className={`relative ${
                    displayPopular ? 'bg-crypto-purple' : 'bg-crypto-dark'
                  } border border-gray-800 rounded-3xl p-8 h-full overflow-hidden group-hover:border-crypto-green/40 transition-all duration-500`}>
                    
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-[#73E212] rounded-full"></div>
                        <span className="text-[#73E212] font-semibold text-sm uppercase tracking-wide">
                          {planName}
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="text-4xl font-bold text-white font-general">
                        {priceDisplayOverrides?.[planName] ?? (typeof planPrice === 'number' ? `$${planPrice}` : planPrice)}
                      </div>
                      <div className="text-[#73E212]">
                        {suffixOverrides?.[planName] ?? ((typeof (plan as any).suffix !== 'undefined') ? (plan as any).suffix : (planName === "Trading Bot" ? "/Setup" : "/month"))}
                      </div>
                      </div>
                    </div>

                    <p className="text-white mb-8 leading-relaxed text-center">
                      {planDescription}
                    </p>

                    <ul className="space-y-4 mb-12">
                      {planFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-white">
                          <div className="w-5 h-5 rounded-full bg-[#73E212]/20 flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-3 h-3 text-[#73E212]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full bg-[#73E212] hover:bg-[#73E212]/90 text-black font-semibold py-4 rounded-full text-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#73E212]/25">
                      Get Started →
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UnifiedPricingCard;
