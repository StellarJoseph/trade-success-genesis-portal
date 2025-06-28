import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Signal, Bot, Brain } from 'lucide-react';

const VIPServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('vip-services');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Signal,
      title: "Real-Time Crypto Signals",
      description: "Prefer to trade on your own? We deliver powerful daily signals—complete with entry, exit, and stop loss points—to help you trade like a pro. No guesswork. No missed opportunities. Just real-time precision.",
      cta: "Join Signal Plan",
      delay: "delay-200"
    },
    {
      icon: Bot,
      title: "Hands-Free Crypto Bots",
      description: "Let automation work for you. Our bots are optimized to run 24/7, following the same winning signals we use. Sleep while your portfolio grows, with full control and transparent results.",
      cta: "Activate My Bot",
      delay: "delay-400"
    },
    {
      icon: Brain,
      title: "Managed Crypto Portfolios",
      description: "Sit back while we grow your crypto. Our experts manage your portfolio with smart strategies, weekly status updates, and profit-first execution. Perfect for long-term growth and high-net clients.",
      cta: "Start Portfolio Management",
      delay: "delay-600"
    }
  ];

  return (
    <section id="vip-services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-crypto-green mb-4 font-semibold">● Exclusive VIP Services</div>
            <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
              Tailored VIP Solutions for{' '}
              <span className="text-gradient">Traders, Investors & Asset Builders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose your path to crypto success with our premium services designed for every trading style and investment goal.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className={`bg-[#131240] border border-crypto-green/20 rounded-3xl hover:border-crypto-green/80 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-crypto-green/20 ${isVisible ? `opacity-100 translate-y-0 ${service.delay}` : 'opacity-0 translate-y-10'}`}
              >
                <CardHeader className="p-8 text-center">
                  <div className="w-20 h-20 bg-crypto-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-crypto-green/20 transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-crypto-green" />
                  </div>
                  <CardTitle className="text-white font-general text-2xl mb-4">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Button className="w-full bg-crypto-green hover:bg-crypto-green/90 text-crypto-dark font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-crypto-green/30 hover:scale-105">
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-300 mb-6">
            Not sure which service fits you best? Our team can help you choose the perfect plan.
          </p>
          <Button 
            variant="outline" 
            className="border-crypto-green text-black hover:bg-crypto-green hover:text-crypto-dark px-8 py-4 rounded-xl transition-all duration-300"
          >
            Get Personal Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VIPServicesSection;
