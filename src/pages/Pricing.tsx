
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Pro Plan",
      price: 99,
      duration: "1 Month Access",
      originalPrice: null,
      popular: false,
      features: [
        "Auto-Buy & Sell Orders",
        "Enhanced Efficiency",
        "Customizable Dashboards",
        "Scalability for Growth",
        "Basic Support"
      ]
    },
    {
      name: "Business Plan",
      price: 199,
      duration: "3 Months Access",
      originalPrice: null,
      popular: true,
      features: [
        "Auto-Buy & Sell Orders",
        "Enhanced Efficiency",
        "Customizable Dashboards",
        "Scalability for Growth",
        "Priority Support",
        "Advanced Analytics"
      ]
    },
    {
      name: "Lifetime Access",
      price: 499,
      duration: "Lifetime Access",
      originalPrice: null,
      popular: false,
      features: [
        "All Business Plan Features",
        "Lifetime Updates",
        "VIP Support",
        "Exclusive Strategies",
        "Personal Account Manager"
      ]
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-crypto-green">● Let our people say about us</span>
              </div>
              <h2 className="text-4xl font-bold font-general mb-6">
                Choose the plan that fits your<br />
                crypto needs and start trading<br />
                with confidence.
              </h2>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-crypto-green">● More Templates</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-crypto-green">● Buy This Template</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {plans.slice(0, 2).map((plan, index) => (
                <div
                  key={index}
                  className={`glass-card p-8 rounded-3xl relative ${
                    plan.popular ? 'border-crypto-green/60' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-crypto-green text-crypto-dark px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="text-crypto-green font-semibold mb-2">● {plan.name}</div>
                    <div className="text-4xl font-bold text-white mb-2">
                      ${plan.price}.99
                      <span className="text-lg text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-gray-400">{plan.duration}</div>
                  </div>

                  <p className="text-gray-300 mb-8">
                    Unlock automated trading, lower fees, and in-depth market insights to optimize your trades
                  </p>

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

                  <Button className="w-full glow-button text-crypto-dark font-semibold py-4">
                    Get started →
                  </Button>
                </div>
              ))}
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
                <div key={index} className="glass-card p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-white mb-3">
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
                <div key={index} className="glass-card p-8 rounded-3xl">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-crypto-green text-xl">★</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-full flex items-center justify-center mr-4">
                      <span className="text-crypto-dark font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
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

        {/* Support CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card p-12 rounded-3xl text-center">
              <div className="text-crypto-green mb-4">● Need help? We're here for you!</div>
              <h2 className="text-4xl font-bold font-general mb-6">
                Our dedicated support team is<br />
                ready to assist you 24/7 with<br />
                any questions or issues.
              </h2>
              
              <Button className="glow-button text-crypto-dark font-semibold px-8 py-4">
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
