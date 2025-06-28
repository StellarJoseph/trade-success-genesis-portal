
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import AboutSection from '@/components/AboutSection';
import ServicesOverview from '@/components/ServicesOverview';
import BenefitsSection from '@/components/BenefitsSection';
import Features from '@/components/Features';
import MobileTradingSection from '@/components/MobileTradingSection';
import MarketData from '@/components/MarketData';
import TestimonialsSection from '@/components/TestimonialsSection';
import HomepagePricing from '@/components/HomepagePricing';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <AboutSection />
      <ServicesOverview />
      <BenefitsSection />
      <Features />
      <MobileTradingSection />
      <MarketData />
      <TestimonialsSection />
      <HomepagePricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
