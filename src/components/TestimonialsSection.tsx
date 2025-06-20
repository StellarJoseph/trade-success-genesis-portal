
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "James Rodriguez",
      role: "Professional Trader",
      content: "TradeSuccess.VIP transformed my trading completely. The AI signals are incredibly accurate and I've seen 300% returns in just 3 months.",
      rating: 5,
      image: "JR",
      profit: "+$127,000"
    },
    {
      name: "Sarah Chen",
      role: "Crypto Investor",
      content: "The portfolio management service is outstanding. My Royal tier advisor helped me navigate the volatile market and secure massive gains.",
      rating: 5,
      image: "SC",
      profit: "+$89,500"
    },
    {
      name: "Michael Park",
      role: "Business Owner",
      content: "Started with the $50 trial and never looked back. The VIP membership pays for itself within the first week of trading.",
      rating: 5,
      image: "MP",
      profit: "+$45,200"
    },
    {
      name: "Emma Wilson",
      role: "Finance Professional",
      content: "The 40-day challenge exceeded all expectations. Professional guidance combined with powerful signals delivered incredible results.",
      rating: 5,
      image: "EW",
      profit: "+$234,000"
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
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
            What Our <span className="text-gradient">Traders Say</span>
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
                  <div className="text-gray-400 mb-2">{testimonial.role}</div>
                  <div className="text-crypto-green font-bold text-xl">{testimonial.profit}</div>
                  <div className="text-xs text-gray-400">Portfolio Growth</div>
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
