import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import HomepageFAQ from '@/components/HomepageFAQ';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const quickFaqs = [
    {
      question: "Is TradeSuccess.VIP Legit and Safe?",
      answer: "Absolutely. TradeSuccess.VIP is backed by a team of experienced traders, developers, and crypto analysts. We use real-time trading strategies, AI automation, and secure infrastructure to help over 70,000+ users trade safely and profitably."
    },
    {
      question: "What kind of returns can I expect?",
      answer: "While results vary by market conditions and strategy, members using our signals and portfolio services have reported monthly returns between 40% to 500%. These aren't guesses — we share real data, and you'll receive weekly performance reports as part of your plan."
    },
    {
      question: "I'm a beginner. Can I still benefit?",
      answer: "Absolutely. We designed TradeSuccess.VIP to be user-friendly for beginners and powerful enough for advanced traders. Whether you want to learn through our courses, copy expert signals, or have us trade on your behalf, we've got you covered — no experience required."
    },
    {
      question: "How does your Portfolio Management work?",
      answer: "Our portfolio management service provides hands-off crypto growth. Our experts manage your portfolio with smart strategies, weekly status updates, and profit-first execution. Perfect for long-term growth and high-net clients."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-crypto-green/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-general mb-6">
                Need Help? <span className="text-gradient">We're Here for You.</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our team is available 24/7 to support you, whether you're just getting started or managing a growing portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Block */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <Card className="glass-card border-crypto-green/20 hover:border-crypto-green/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-crypto-green mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">Locations</h3>
                  <p className="text-gray-300 text-sm">Dubai · Lagos · New York · London</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-crypto-green/20 hover:border-crypto-green/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-crypto-green mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-300 text-sm">+971 58 876 5432</p>
                  <p className="text-gray-300 text-sm">+234 80 2439 2024</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-crypto-green/20 hover:border-crypto-green/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-crypto-green mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300 text-sm">support@tradesuccess.vip</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-crypto-green/20 hover:border-crypto-green/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-crypto-green mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">WhatsApp</h3>
                  <p className="text-gray-300 text-sm">24/7 Live Support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="glass-card border-crypto-green/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold font-general text-white">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/40 border border-crypto-green/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-crypto-green focus:shadow-[0_0_10px_rgba(115,226,18,0.3)]"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/40 border border-crypto-green/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-crypto-green focus:shadow-[0_0_10px_rgba(115,226,18,0.3)]"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/40 border border-crypto-green/30 rounded-lg text-white focus:outline-none focus:border-crypto-green focus:shadow-[0_0_10px_rgba(115,226,18,0.3)]"
                        required
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="signals">Signals & Trading</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-black/40 border border-crypto-green/30 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:border-crypto-green focus:shadow-[0_0_10px_rgba(115,226,18,0.3)]"
                        placeholder="Tell us how we can help you..."
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full glow-button text-crypto-dark font-semibold py-3 h-auto"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="glass-card border-crypto-green/20">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop" 
                      alt="Global map showing TradeSuccess.VIP office locations in Dubai, Lagos, New York, and London"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-4">Global Presence</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-crypto-green rounded-full"></div>
                          <span className="text-white">Dubai, UAE</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-crypto-green rounded-full"></div>
                          <span className="text-white">Lagos, Nigeria</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-crypto-green rounded-full"></div>
                          <span className="text-white">New York, USA</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-crypto-green rounded-full"></div>
                          <span className="text-white">London, UK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick FAQs Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6 text-white">
                Need Answers <span className="text-[#73E212]">Fast?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Still have questions? We've answered the most common ones below to help you feel confident, informed, and ready to trade smarter with us.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <HomepageFAQ />
              <div className="text-center mt-12">
                <Button 
                  className="glow-button text-crypto-dark font-semibold px-8 py-4 h-auto"
                  onClick={() => window.location.href = '/faq'}
                >
                  Visit Full FAQ Page
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => window.open('https://wa.me/2348024392024?text=Hi%20I%20need%20help%20with%20TradeSuccess.VIP', '_blank')}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default Contact;
