
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
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-crypto-dark font-bold text-xl">
                    {testimonials[currentIndex].image}
                  </span>
                </div>
                <div className="text-white font-bold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-gray-400 mb-4">{testimonials[currentIndex].role}</div>
                <div className="text-crypto-green font-bold text-xl">{testimonials[currentIndex].profit}</div>
                <div className="text-xs text-gray-400">Portfolio Growth</div>
              </div>

              <div className="md:col-span-2">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-crypto-green text-xl">★</span>
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-300 italic mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex gap-4">
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
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-crypto-green' : 'bg-crypto-green/30'
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
