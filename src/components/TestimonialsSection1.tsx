import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Tolu A.",
      role: "Beginner to Confident Investor",
      location: "Lagos",
      content: "I started with zero knowledge of crypto, just pure curiosity. Within 3 months, my portfolio had grown by 41%, and I actually understand what's happening with my money. TradeSuccess.VIP made it simple, safe, and real.",
      rating: 5,
      image: "TA",
      profit: "+41%"
    },
    {
      name: "James M.",
      role: "Busy Entrepreneur",
      location: "Dubai",
      content: "I don't have time to study charts or chase signals. Their portfolio management service has been a game-changer. I've seen consistent growth without lifting a finger. Worth every dollar.",
      rating: 5,
      image: "JM",
      profit: "Consistent Growth"
    },
    {
      name: "Amanda B.",
      role: "Skeptical at First",
      location: "London",
      content: "I was skeptical at first — too many scams out there. But after my first withdrawal hit my account, I realized this was different. Everything is transparent, the dashboard is detailed, and support is responsive.",
      rating: 5,
      image: "AB",
      profit: "Verified Withdrawals"
    },
    {
      name: "Obinna N.",
      role: "Consistent Monthly Profits",
      location: "Abuja",
      content: "Every month, I receive a full breakdown of profits, trades, and growth. My portfolio has grown by over 200% in 6 months. This isn't luck — it's solid strategy and real skill.",
      rating: 5,
      image: "ON",
      profit: "+200%"
    },
    {
      name: "Sophia K.",
      role: "First-Time Investor Experience",
      location: "Accra",
      content: "This was my first ever investment — no regrets. The team guided me, explained the risks, and delivered beyond my expectations. I've recommended TradeSuccess to 5 of my friends already.",
      rating: 5,
      image: "SK",
      profit: "5 Referrals"
    },
    {
      name: "Patrick R.",
      role: "CFO – Veritas Group",
      location: "Institutional-Grade Experience",
      content: "We moved part of our company's treasury into their managed crypto service and have been impressed with the reporting, the security, and the monthly ROI. Professional, sharp, and efficient.",
      rating: 5,
      image: "PR",
      profit: "Institutional ROI"
    },
    {
      name: "Faisal H.",
      role: "Withdrawals Without Stress",
      location: "UAE",
      content: "I've made 3 successful withdrawals and each one was processed on time. No stories. The dashboard even tells me my next withdrawal date. That kind of reliability is rare in this space.",
      rating: 5,
      image: "FH",
      profit: "3 Withdrawals"
    },
    {
      name: "Ruth E.",
      role: "Peace of Mind",
      location: "Port Harcourt",
      content: "The biggest benefit for me has been peace of mind. I don't worry about charts, trades, or losses. I just check my dashboard weekly, and the growth keeps showing. It feels like I'm finally in control of my money.",
      rating: 5,
      image: "RE",
      profit: "Weekly Growth"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  const currentTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length]
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-crypto-green mb-4">● Client Success Stories</div>
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
            What Our <span className="text-[#73E212]">Traders Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of successful traders who've transformed their financial future with TradeSuccess.VIP
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop: 2 cards side-by-side, Mobile: stacked */}
          <div className="grid md:grid-cols-2 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl shadow-lg border border-crypto-green/20 hover:border-crypto-green/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-crypto-dark font-bold text-lg">
                      {testimonial.image}
                    </span>
                  </div>
                  <div className="text-white font-bold text-lg">{testimonial.name}</div>
                  <div className="text-gray-400 mb-1">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm mb-2">{testimonial.location}</div>
                  <div className="text-crypto-green font-bold text-xl">{testimonial.profit}</div>
                  <div className="text-xs text-gray-400">Results</div>
                </div>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-crypto-green text-xl">★</span>
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-300 italic text-center">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-crypto-green/30 rounded-full flex items-center justify-center hover:border-crypto-green/60 transition-colors"
            >
              <span className="text-crypto-green">←</span>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-crypto-green/30 rounded-full flex items-center justify-center hover:border-crypto-green/60 transition-colors"
            >
              <span className="text-crypto-green">→</span>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 2)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / 2) === index ? 'bg-crypto-green' : 'bg-crypto-green/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
