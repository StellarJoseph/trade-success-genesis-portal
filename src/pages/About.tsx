import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import UnifiedPricingCard from '@/components/UnifiedPricingCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import FAQ from '@/components/FAQ';

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

  const achievementMetrics = [
    { metric: "Active Global Bot Users", result: "7,000+" },
    { metric: "Profit Generated", result: "$12M+" },
    { metric: "Signals Delivered Monthly", result: "300+" },
    { metric: "User Satisfaction Rate", result: "98.7%" },
    { metric: "Monthly Trading Volume", result: "$6M+" },
    { metric: "Countries Served Worldwide", result: "19+" },
    { metric: "Our Signals Success Rate", result: "86%" }
  ];

  const coreValues = [
    {
      title: "Transparency",
      description: "Open performance reporting and full access to your funds.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    },
    {
      title: "Security",
      description: "Data encryption, wallet integrations, 2FA and API authentication.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      title: "Community-Driven",
      description: "Built by traders, for traders.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      title: "Smart Automation",
      description: "Designed for speed, scalability, and ease-of-use.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
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
      name: "Tolu A.",
      role: "Beginner to Confident Investor",
      location: "Lagos",
      quote: "I started with zero knowledge of crypto, just pure curiosity. Within 3 months, my portfolio had grown by 41%, and I actually understand what's happening with my money. TradeSuccess.VIP made it simple, safe, and real.",
      avatar: "TA"
    },
    {
      name: "James M.",
      role: "Busy Entrepreneur",
      location: "Dubai",
      quote: "I don't have time to study charts or chase signals. Their portfolio management service has been a game-changer. I've seen consistent growth without lifting a finger. Worth every dollar.",
      avatar: "JM"
    },
    {
      name: "Amanda B.",
      role: "Skeptical at First",
      location: "London",
      quote: "I was skeptical at first — too many scams out there. But after my first withdrawal hit my account, I realized this was different. Everything is transparent, the dashboard is detailed, and support is responsive.",
      avatar: "AB"
    },
    {
      name: "Obinna N.",
      role: "Consistent Monthly Profits",
      location: "Abuja",
      quote: "Every month, I receive a full breakdown of profits, trades, and growth. My portfolio has grown by over 200% in 6 months. This isn't luck — it's solid strategy and real skill.",
      avatar: "ON"
    },
    {
      name: "Sophia K.",
      role: "First-Time Investor Experience",
      location: "Accra",
      quote: "This was my first ever investment — no regrets. The team guided me, explained the risks, and delivered beyond my expectations. I've recommended TradeSuccess to 5 of my friends already.",
      avatar: "SK"
    },
    {
      name: "Patrick R.",
      role: "CFO – Veritas Group",
      location: "Institutional-Grade Experience",
      quote: "We moved part of our company's treasury into their managed crypto service and have been impressed with the reporting, the security, and the monthly ROI. Professional, sharp, and efficient.",
      avatar: "PR"
    },
    {
      name: "Faisal H.",
      role: "Withdrawals Without Stress",
      location: "UAE",
      quote: "I've made 3 successful withdrawals and each one was processed on time. No stories. The dashboard even tells me my next withdrawal date. That kind of reliability is rare in this space.",
      avatar: "FH"
    },
    {
      name: "Ruth E.",
      role: "Peace of Mind",
      location: "Port Harcourt",
      quote: "The biggest benefit for me has been peace of mind. I don't worry about charts, trades, or losses. I just check my dashboard weekly, and the growth keeps showing. It feels like I'm finally in control of my money.",
      avatar: "RE"
    }
  ];

  const faqs = [
    {
      question: "Is TradeSuccess.VIP legit and trustworthy?",
      answer: "Absolutely. TradeSuccess.VIP is backed by a team of experienced traders, developers, and crypto analysts. We use real-time trading strategies, AI automation, and secure infrastructure to help over 70,000+ users trade safely and profitably. Transparency, performance, and client satisfaction are our top priorities."
    },
    {
      question: "Will I really make profit from your signals or portfolio services?",
      answer: "Yes — but responsibly. Our signals and portfolio strategies are tested, data-driven, and backed by real trade results. While the crypto market carries inherent risks, our goal is to maximize gains and minimize losses through smart execution and market timing. We even offer screenshots of past results so you can verify before joining."
    },
    {
      question: "I'm a beginner. Can I still benefit?",
      answer: "Absolutely. We designed TradeSuccess.VIP to be user-friendly for beginners and powerful enough for advanced traders. Whether you want to learn through our courses, copy expert signals, or have us trade on your behalf, we've got you covered — no experience required."
    },
    {
      question: "Is my crypto or personal information safe?",
      answer: "Yes — your security is our top priority. We use FIPS 140-2 validated Hardware Security Modules (HSMs), the same encryption standard trusted by U.S. government agencies. Our system also features secure user authentication and a non-custodial bot model, which means you remain in full control of your funds at all times."
    },
    {
      question: "What makes your trading bots different?",
      answer: "Our bots are customized to our proven signal strategies. Unlike generic bots, we fine-tune them based on market trends, community insights, and human oversight. You get automated profits while staying in control of your funds and risk level."
    },
    {
      question: "Is connecting your trading bot to my crypto account safe?",
      answer: "Our Trading Bot operates with read-only and trade-only permissions—meaning it can analyze data and place trades, but cannot withdraw your funds from the exchange. For added protection, we strongly recommend enabling Two-Factor Authentication (2FA) to keep your account access safe and secure at all times."
    },
    {
      question: "What kind of returns should I expect?",
      answer: "While results vary by market conditions and strategy, members using our signals and portfolio services have reported monthly returns between 40% to 500%. These aren't guesses — we share real data, and you'll receive weekly performance reports as part of your plan."
    },
    {
      question: "What's the difference between signals, bots, and portfolio management?",
      answer: "• Signals: You get alerts to manually trade with. • Bots: Automated execution of trades on your behalf. • Portfolio Management: We handle your crypto completely — ideal for hands-free investors. You can use one, two, or all three based on your preference."
    },
    {
      question: "Can I join from anywhere in the world?",
      answer: "Yes. TradeSuccess.VIP is a global platform, accessible from over 19 countries. Our platform supports multiple currencies and exchanges. All you need is a smartphone or laptop with internet access."
    },
    {
      question: "What happens if I don't like the service?",
      answer: "We're confident you'll love it. But if you're unsure, start with a low-tier plan to test it out. You can upgrade, pause, or cancel anytime. For Portfolio Plans, we offer a dedicated manager to help resolve concerns quickly."
    },
    {
      question: "How do I get started?",
      answer: "Simply [Create an Account], choose your preferred plan (signals, challenge, or portfolio), and start receiving your tools instantly. We also offer onboarding support, video walkthroughs, and live chat to get you up and running with confidence."
    },
    {
      question: "How do I buy cryptocurrency through your platform?",
      answer: "Getting started is easy. You can buy on any reliable platform, such as by bit, binate and others. You can also purchase cryptocurrency directly on our platform using bank transfer to benefit from our merchant services. We guide you through each step securely, ensuring a smooth onboarding experience for both beginners and advanced users."
    },
    {
      question: "How do I store my crypto safely?",
      answer: "Your security is our priority. We offer secure wallet options with multi-layer encryption, including cold storage for long-term asset protection. For added peace of mind, our infrastructure includes insurance coverage against breaches and unauthorized access. We use a FIPS 140-2 validated HSM which is one of the most secure and trusted ways to manage cryptographic data. It's like storing your most sensitive information in a military-grade digital vault—used by institutions that can't afford to get security wrong."
    },
    {
      question: "How do crypto transactions work here?",
      answer: "All crypto transactions are processed via trusted blockchain networks and are fully traceable and secure. Our platform abstracts the complexity, giving you a simple, user-friendly interface to send, receive, and track your transactions — without compromising on transparency or control."
    },
    {
      question: "Can I use cryptocurrency for everyday purchases?",
      answer: "Absolutely. We make crypto spending easy and practical. Through our merchant services, we help clients convert crypto to local currency and initiate direct deposits into their local bank accounts—safely and efficiently. In addition, we partner with trusted merchants and payment gateways, enabling you to use your crypto for real-world transactions like shopping, subscriptions, or digital products. Everything is handled through our secure, compliant infrastructure, giving you both flexibility and peace of mind."
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
              <h1 className="text-5xl md:text-6xl font-bold font-general mb-6 text-white">
                Revolutionizing Crypto Trading—<span className="text-[#73E212]">One Strategy at a Time</span>
              </h1>
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop" 
                  alt="Advanced crypto trading dashboard interface showing real-time data and analytics"
                  className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
                />
              </div>
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

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
                Our <span className="text-[#73E212]">Story</span>
              </h2>
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop" 
                  alt="Team of crypto experts collaborating on trading strategies and market analysis"
                  className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-8">About Our Company</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                At TradeSuccess.VIP, our journey began with a bold mission: to democratize access to intelligent crypto trading. What started as a vision has now become a trusted platform empowering thousands across the globe to trade smarter, faster, and safer.
              </p>
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

        {/* Achievements Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6 text-white">
                We Have Achieved <span className="text-[#73E212]">Amazing Results</span>
              </h2>
              <h3 className="text-2xl font-semibold text-white mb-8">
                We've Achieved Amazing Results—For Ourselves and Our Clients.
              </h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                At TradeSuccess.VIP, results aren't just numbers—they're proof of our strategy, expertise, and commitment to empowering every member of our community. From consistent returns to exponential portfolio growth, here's what sets us apart:
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Performance Highlights Table */}
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-crypto-green mb-6 font-general">🚀 Performance Highlights</h3>
                <div className="space-y-4">
                  {achievementMetrics.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-crypto-green/20 last:border-b-0">
                      <span className="text-gray-300">{item.metric}</span>
                      <span className="text-crypto-green font-bold text-lg">{item.result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Impact & Why It Matters */}
              <div className="space-y-8">
                <div className="glass-card p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold text-crypto-green mb-6 font-general">Our Impact</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-crypto-green mr-3">✅</span>
                      Thousands of successful trade executions daily via bots and live signals
                    </li>
                    <li className="flex items-start">
                      <span className="text-crypto-green mr-3">✅</span>
                      Over 30% average portfolio growth for premium members over 6 months
                    </li>
                    <li className="flex items-start">
                      <span className="text-crypto-green mr-3">✅</span>
                      Real-time data + AI = fast, confident decisions
                    </li>
                    <li className="flex items-start">
                      <span className="text-crypto-green mr-3">✅</span>
                      Consistent uptime and transparent results
                    </li>
                    <li className="flex items-start">
                      <span className="text-crypto-green mr-3">✅</span>
                      Trusted by beginners, pros, and institutions
                    </li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold text-crypto-green mb-6 font-general">Why It Matters</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Every milestone we've reached reflects our mission—to simplify and maximize crypto trading for anyone, anywhere. These achievements aren't our finish line—they're our foundation. We're just getting started.
                  </p>
                  <div className="flex gap-4">
                    <Button className="glow-button text-crypto-dark font-semibold">
                      Explore Services
                    </Button>
                    <Button variant="outline" className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark">
                      View Membership Plans
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6 text-white">
                Who We <span className="text-[#73E212]">Serve</span>
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
              <h2 className="text-4xl font-bold font-general mb-6 text-white">
                The values that drive our <span className="text-[#73E212]">company</span>
              </h2>
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop" 
                  alt="Professional team working on secure crypto trading solutions with advanced technology"
                  className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-[#100F19] border border-crypto-green/20 p-8 rounded-3xl text-center hover:border-crypto-green/80 hover:shadow-lg hover:shadow-crypto-green/20 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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
              <h2 className="text-4xl font-bold font-general mb-6 text-white">
                Your dream, <span className="text-[#73E212]">automated</span>
              </h2>
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=400&fit=crop" 
                  alt="Automated trading systems and AI-powered crypto portfolio management interface"
                  className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl"
                />
              </div>
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
              <h2 className="text-4xl font-bold font-general mb-6 text-white">
                What Our <span className="text-[#73E212]">Members Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of successful traders who've transformed their financial future with TradeSuccess.VIP
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass-card p-8 rounded-3xl hover:border-crypto-green/40 transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-crypto-dark font-bold text-lg">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div className="text-white font-bold text-lg">{testimonial.name}</div>
                    <div className="text-gray-400 mb-1">{testimonial.role}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                    </div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-crypto-green text-lg">★</span>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 italic leading-relaxed text-center">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <UnifiedPricingCard showTitle={false} />

        {/* FAQs */}
        <FAQ />

        {/* Partners */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6 text-white">
                Our <span className="text-[#73E212]">Partners</span>
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

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-crypto-green/10 via-transparent to-crypto-green/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold font-general mb-6 text-white">
                  Ready to grow your portfolio with <span className="text-[#73E212]">TradeSuccess?</span>
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
