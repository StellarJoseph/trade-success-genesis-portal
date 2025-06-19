
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('signals');

  const signalPlans = [
    {
      name: "Trading Bot",
      price: 299,
      duration: "month",
      originalPrice: null,
      popular: false,
      promo: null,
      features: [
        "Auto-Buy & Sell Orders",
        "Enhanced Efficiency", 
        "Customizable Dashboards",
        "Scalability for Growth"
      ]
    },
    {
      name: "VIP Signals",
      price: 99,
      duration: "month",
      originalPrice: null,
      popular: true,
      promo: null,
      features: [
        "5-7 Daily Premium Signals",
        "Entry, Stop Loss & Take Profit",
        "Enhanced Efficiency",
        "Customizable Dashboards", 
        "Priority Support",
        "Advanced Analytics"
      ]
    },
    {
      name: "40 Day Challenge",
      price: 499,
      duration: "40 Days",
      originalPrice: null,
      popular: false,
      promo: "Coming Soon",
      features: [
        "Intensive Training Program",
        "Personal Guidance",
        "Expert Trade Analysis",
        "Exclusive Community Access",
        "2200-4000% ROI Target"
      ]
    }
  ];

  const challengePlans = [
    {
      name: "40-Day Challenge",
      price: 499,
      duration: "40 Days",
      originalPrice: null,
      popular: true,
      promo: "Coming Soon",
      features: [
        "1 Powerful Signal Daily",
        "2200-4000% ROI Target",
        "Personal Guidance",
        "Expert Trade Analysis",
        "Exclusive Community Access"
      ]
    }
  ];

  const currentPlans = activeTab === 'signals' ? signalPlans : challengePlans;

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

  const testimonials = [
    {
      name: "James R.",
      role: "Crypto Investor",
      content: "I was new to crypto, but Crysiam made everything so simple. The platform is beginner-friendly and their support team was super helpful when I had questions!",
      rating: 5
    },
    {
      name: "David G.",
      role: "Crypto Investor", 
      content: "I was new to crypto, but Crysiam made everything so simple. The platform is beginner-friendly and their support team was super helpful when I had questions!",
      rating: 5
    },
    {
      name: "Jessica Q.",
      role: "Crypto Investor",
      content: "I've used multiple exchanges, but Crysiam stands out with its seamless transactions and real-time market insights. The lower trading fees with the Pro Plan are a huge plus!",
      rating: 5
    },
    {
      name: "Viveka K.",
      role: "Crypto Investor",
      content: "Fast, reliable, and feature-packed! The ability to set automated buy and sell orders has made my trading experience much smoother. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-general mb-6">
              Meet our <span className="text-gradient">crypto experts</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our pricing is built around transparency and value, giving you full access to 
              powerful liquidity, secure tools and 24/7 support.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
              {['Bobshift', 'Lightbox', 'FeatherDev', 'Spherule', 'GlobalBank', 'Acme Corp'].map((company) => (
                <div key={company} className="glass-card px-6 py-3 rounded-xl">
                  <span className="text-gray-400 font-medium">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-crypto-green mb-4">● Let our people say about us</div>
              <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
                Choose the plan that fits your<br />
                crypto needs and start trading<br />
                with confidence.
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start earning with confidence. No delays, no guesswork.
              </p>
              
              {/* Plan Toggle */}
              <div className="flex items-center justify-center gap-2 mb-12">
                <button
                  onClick={() => setActiveTab('signals')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'signals'
                      ? 'bg-crypto-green text-crypto-dark'
                      : 'glass-card text-gray-300 hover:text-crypto-green'
                  }`}
                >
                  Signal Plans
                </button>
                <button
                  onClick={() => setActiveTab('challenge')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'challenge'
                      ? 'bg-crypto-green text-crypto-dark'
                      : 'glass-card text-gray-300 hover:text-crypto-green'
                  }`}
                >
                  Trading Challenge
                </button>
              </div>
            </div>

            {/* Pricing Cards - New Design */}
            <div className="relative max-w-6xl mx-auto">
              <div className={`grid gap-8 transition-all duration-700 ${
                activeTab === 'signals' ? 'lg:grid-cols-3' : 'lg:grid-cols-1 max-w-lg mx-auto'
              }`}>
                {currentPlans.map((plan, index) => (
                  <div
                    key={`${activeTab}-${index}`}
                    className="relative group"
                    style={{
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {/* Promo Badge */}
                    {plan.promo && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-crypto-green text-crypto-dark px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
                          {plan.promo}
                        </div>
                      </div>
                    )}

                    {/* Popular Badge */}
                    {plan.popular && !plan.promo && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-crypto-green text-crypto-dark px-6 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}

                    {/* Card Container with Glow Effect */}
                    <div className="relative">
                      {/* Glowing Border */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-crypto-green via-crypto-green-light to-crypto-green rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm"></div>
                      
                      {/* Main Card */}
                      <div className="relative bg-crypto-dark border border-gray-800 rounded-3xl p-8 h-full overflow-hidden group-hover:border-crypto-green/40 transition-all duration-500">
                        {/* Plan Name Badge */}
                        <div className="inline-flex items-center gap-2 mb-6">
                          <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                          <span className="text-crypto-green font-semibold text-sm uppercase tracking-wide">
                            {plan.name}
                          </span>
                        </div>

                        {/* Price Section */}
                        <div className="mb-8">
                          <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-5xl font-bold text-white font-general">
                              ${plan.price}
                            </span>
                            <span className="text-gray-400 text-lg">
                              /{plan.duration}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-8 leading-relaxed">
                          Unlock automated trading, lower fees, and in-depth market insights to optimize your trades.
                        </p>

                        {/* Features List */}
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

                        {/* CTA Button */}
                        <Button className="w-full bg-crypto-green hover:bg-crypto-green/90 text-crypto-dark font-semibold py-4 rounded-full text-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-crypto-green/25">
                          Get started →
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">First month promo: $50</p>
              <p className="text-sm text-gray-500">
                This isn't just a signals group. It's your first step to real trading profits.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-crypto-green mb-4">● FAQs</div>
              <h2 className="text-4xl font-bold font-general mb-6">
                Have questions?<br />
                We have answers!
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl hover:border-crypto-green/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3 font-general">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 font-inter">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-crypto-green mb-4">● Testimonials</div>
              <h2 className="text-4xl font-bold font-general">
                Hear from our clients
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass-card p-8 rounded-3xl hover:border-crypto-green/40 transition-all duration-300 hover:scale-105">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-crypto-green text-xl">★</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic font-inter">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-full flex items-center justify-center mr-4">
                      <span className="text-crypto-dark font-bold font-general">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white font-general">{testimonial.name}</div>
                      <div className="text-sm text-gray-400 font-inter">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card p-12 rounded-3xl text-center hover:border-crypto-green/40 transition-all duration-300">
              <div className="text-crypto-green mb-4">● Need help? We're here for you!</div>
              <h2 className="text-4xl font-bold font-general mb-6">
                Our dedicated support team is<br />
                ready to assist you 24/7 with<br />
                any questions or issues.
              </h2>
              
              <Button className="glow-button text-crypto-dark font-semibold px-8 py-4 font-general">
                Contact support team →
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
