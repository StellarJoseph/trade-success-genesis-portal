import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Clock,
  CheckCircle,
  Star,
  Calendar,
  MessageSquare,
  TrendingUp,
  Shield
} from 'lucide-react';

const Consultancy = () => {
  const services = [
    {
      name: "Portfolio Review & Strategy",
      duration: "90 minutes",
      price: "$299",
      rating: 5.0,
      sessions: 156,
      image: "📊",
      description: "Comprehensive analysis of your current portfolio with personalized optimization strategies and risk assessment.",
      features: [
        "Complete Portfolio Analysis",
        "Risk Assessment Report", 
        "Personalized Strategy Plan",
        "30-day Follow-up Support",
        "Written Summary & Recommendations"
      ],
      type: "One-time"
    },
    {
      name: "Trading Strategy Consultation",
      duration: "60 minutes",
      price: "$199",
      rating: 4.9,
      sessions: 234,
      image: "🎯",
      description: "Learn advanced trading techniques and develop a custom strategy tailored to your goals and risk tolerance.",
      features: [
        "Custom Trading Strategy",
        "Technical Analysis Training",
        "Entry & Exit Strategies",
        "Risk Management Plan",
        "Strategy Implementation Guide"
      ],
      type: "One-time"
    },
    {
      name: "DeFi & Yield Farming Consultation",
      duration: "75 minutes", 
      price: "$249",
      rating: 4.8,
      sessions: 89,
      image: "🌾",
      description: "Navigate the DeFi landscape safely with expert guidance on yield farming, liquidity pools, and protocol selection.",
      features: [
        "DeFi Protocol Analysis",
        "Yield Optimization Strategies",
        "Security Best Practices",
        "Portfolio Diversification",
        "Ongoing Protocol Updates"
      ],
      type: "One-time"
    },
    {
      name: "Monthly Advisory Package",
      duration: "Monthly",
      price: "$499",
      rating: 5.0,
      sessions: 67,
      image: "👨‍💼",
      description: "Ongoing monthly consultations with dedicated advisor for continuous portfolio optimization and market guidance.",
      features: [
        "Monthly 1-on-1 Sessions",
        "24/7 Chat Support",
        "Priority Market Updates",
        "Quarterly Strategy Reviews",
        "Exclusive Research Reports"
      ],
      type: "Recurring",
      popular: true
    }
  ];

  const consultants = [
    {
      name: "Michael Chen",
      role: "Senior Trading Advisor",
      experience: "8+ years",
      specialty: "Technical Analysis & Portfolio Management",
      image: "MC",
      rating: 4.9,
      sessions: 500
    },
    {
      name: "Sarah Rodriguez",
      role: "DeFi Specialist",
      experience: "6+ years", 
      specialty: "DeFi Protocols & Yield Optimization",
      image: "SR",
      rating: 4.8,
      sessions: 350
    },
    {
      name: "David Kim",
      role: "Risk Management Expert",
      experience: "10+ years",
      specialty: "Risk Assessment & Strategy Development", 
      image: "DK",
      rating: 5.0,
      sessions: 650
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Crypto Investor",
      content: "The portfolio review session was incredibly detailed. Michael helped me identify weaknesses in my strategy and provided actionable insights that improved my returns by 40%.",
      rating: 5,
      service: "Portfolio Review"
    },
    {
      name: "Lisa Wang",
      role: "DeFi Enthusiast", 
      content: "Sarah's DeFi consultation saved me from making costly mistakes. Her protocol recommendations have been spot-on and my yields have never been better.",
      rating: 5,
      service: "DeFi Consultation"
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
              Expert <span className="text-gradient">Consultancy</span>
            </h1>
            <p className="text-xl text-[#73E212]/80 mb-12 max-w-3xl mx-auto">
              Get personalized crypto investment advice from our team of experienced traders and analysts. 
              Transform your trading strategy with one-on-one expert guidance.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-crypto-green" />
                <span className="text-[#73E212]/80">Trusted Advisors</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-crypto-green" />
                <span className="text-[#73E212]/80">Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-crypto-green" />
                <span className="text-[#73E212]/80">1-on-1 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6">
                Consultation <span className="text-gradient">Services</span>
              </h2>
              <p className="text-xl text-[#73E212]/80 max-w-3xl mx-auto">
                Choose the consultation service that best fits your needs and goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className={`glass-card hover:border-crypto-green/40 transition-all duration-300 group h-full flex flex-col ${service.popular ? 'border-crypto-green/60 scale-105' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className="bg-crypto-green text-crypto-dark px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="text-5xl text-center mb-4">{service.image}</div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`${service.type === 'Recurring' ? 'bg-crypto-green text-crypto-dark' : 'bg-crypto-green/20 text-crypto-green'}`}>
                        {service.type}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-[#73E212]/80 ml-1">{service.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white font-general mb-2">{service.name}</CardTitle>
                    <CardDescription className="text-[#73E212]/80">{service.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-3xl font-bold text-crypto-green">{service.price}</span>
                        <div className="text-sm text-[#73E212]/70">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {service.duration}
                        </div>
                      </div>
                      <div className="text-sm text-[#73E212]/70">
                        {service.sessions} sessions completed
                      </div>
                    </div>

                    <div className="mb-6 flex-1">
                      <h4 className="text-white font-semibold mb-3">What's included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-[#73E212]/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-crypto-green mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full glow-button text-crypto-dark font-semibold mt-auto">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Consultants Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6">
                Meet Your <span className="text-gradient">Advisors</span>
              </h2>
              <p className="text-xl text-[#73E212]/80 max-w-3xl mx-auto">
                Our team of expert advisors brings years of experience in crypto trading, DeFi, and portfolio management
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {consultants.map((consultant, index) => (
                <Card key={index} className="glass-card hover:border-crypto-green/40 transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-crypto-dark font-bold text-2xl">
                        {consultant.image}
                      </span>
                    </div>
                    <CardTitle className="text-white font-general">{consultant.name}</CardTitle>
                    <CardDescription className="text-crypto-green font-semibold">{consultant.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-[#73E212]/80 mb-4">
                      <div>{consultant.experience} Experience</div>
                      <div className="font-medium">{consultant.specialty}</div>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-sm text-[#73E212]/70">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        {consultant.rating}
                      </div>
                      <div>{consultant.sessions}+ sessions</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6">
                Client <span className="text-gradient">Success Stories</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="glass-card hover:border-crypto-green/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-crypto-green/20 text-crypto-green">{testimonial.service}</Badge>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#73E212]/80 mb-6 italic leading-relaxed">
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
                        <div className="text-sm text-[#73E212]/70">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card p-12 rounded-3xl text-center">
              <h2 className="text-4xl font-bold font-general mb-6">
                Ready to Accelerate Your{' '}
                <span className="text-gradient">Trading Success?</span>
              </h2>
              <p className="text-xl text-[#73E212]/80 mb-8 max-w-2xl mx-auto">
                Book a consultation with our expert advisors and take your crypto trading to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="glow-button text-crypto-dark font-semibold px-8 py-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark px-8 py-4">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Consultancy;
