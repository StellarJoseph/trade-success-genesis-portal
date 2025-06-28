import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import CryptoHistorySection from '@/components/CryptoHistorySection';
import AboutSection from '@/components/AboutSection';
import ServicesOverview from '@/components/ServicesOverview';
import BenefitsSection from '@/components/BenefitsSection';
import Features from '@/components/Features';
import PortfolioTrackingSection from '@/components/PortfolioTrackingSection';
import ResultsSliderSection from '@/components/ResultsSliderSection';
import StatsSection from '@/components/StatsSection';
import MobileTradingSection from '@/components/MobileTradingSection';
import MarketData from '@/components/MarketData';
import VIPServicesSection from '@/components/VIPServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HomepagePricing from '@/components/HomepagePricing';
import HomepageFAQ from '@/components/HomepageFAQ';
import BlogOverviewSection from '@/components/BlogOverviewSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <CryptoHistorySection />
      <AboutSection />
      <ServicesOverview />
      <BenefitsSection />
      <Features />
      <PortfolioTrackingSection />
      <ResultsSliderSection />
      <StatsSection />
      <MobileTradingSection />
      <MarketData />
      <VIPServicesSection />
      <TestimonialsSection />
      <HomepagePricing />
      <HomepageFAQ />
      <BlogOverviewSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
