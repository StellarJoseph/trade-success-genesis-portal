
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      position: "CEO & Founder",
      bio: "Former Goldman Sachs trader with 15+ years in fintech and blockchain technology.",
      image: "AR"
    },
    {
      name: "Sarah Chen",
      position: "CTO",
      bio: "Ex-Google engineer specializing in AI and machine learning for financial markets.",
      image: "SC"
    },
    {
      name: "Michael Park",
      position: "Head of Trading",
      bio: "Professional crypto trader with $500M+ portfolio management experience.",
      image: "MP"
    },
    {
      name: "Emma Wilson",
      position: "Risk Management",
      bio: "Former JP Morgan risk analyst with expertise in cryptocurrency market dynamics.",
      image: "EW"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-general mb-6">
                About <span className="text-gradient">TradeSuccess.VIP</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                We're a team of seasoned financial experts, blockchain developers, and AI specialists 
                dedicated to democratizing cryptocurrency trading and investment for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="glass-card p-8 rounded-3xl">
                <h2 className="text-3xl font-bold font-general mb-6 text-gradient">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To provide cutting-edge cryptocurrency trading tools, expert insights, and AI-powered 
                  solutions that empower individuals to achieve financial freedom through strategic 
                  crypto investments.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-3xl">
                <h2 className="text-3xl font-bold font-general mb-6 text-gradient">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To become the world's most trusted cryptocurrency investment platform, making 
                  professional-grade trading accessible to millions of users globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
                Meet Our <span className="text-gradient">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our leadership team combines decades of experience in traditional finance, 
                blockchain technology, and cryptocurrency markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-3xl text-center hover:border-crypto-green/40 transition-all duration-300 group"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-crypto-dark font-bold text-xl">{member.image}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-general mb-2">{member.name}</h3>
                  <div className="text-crypto-green font-semibold mb-4">{member.position}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6">
                <span className="text-gradient">Global Presence</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Serving cryptocurrency enthusiasts and professional traders across 6 continents
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-crypto-green mb-2">190+</div>
                <div className="text-gray-400">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-crypto-green mb-2">2M+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-crypto-green mb-2">$5B+</div>
                <div className="text-gray-400">Trading Volume</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-crypto-green mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
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
