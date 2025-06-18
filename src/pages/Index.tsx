
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import Features from '@/components/Features';
import MarketData from '@/components/MarketData';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <Features />
      <MarketData />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
