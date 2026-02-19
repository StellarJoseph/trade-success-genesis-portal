import React from 'react';
import Hero from '@/components/challenge/Hero';
import TrustStrip from '@/components/challenge/TrustStrip';
import Features from '@/components/challenge/Features';
import HowItWorks from '@/components/challenge/HowItWorks';
import Tools from '@/components/challenge/Tools';
import Education from '@/components/challenge/Education';
import Testimonials from '@/components/challenge/Testimonials';
import Results from '@/components/challenge/Results';
import CountdownCTA from '@/components/challenge/CountdownCTA';
import FAQ from '@/components/challenge/FAQ';
import FooterChallenge from '@/components/challenge/FooterChallenge';

const FortyDayHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Hero />
      <TrustStrip />
      <main className="space-y-20">
        <section className="container mx-auto px-6">
          <Features />
        </section>

        <section className="container mx-auto px-6">
          <HowItWorks />
        </section>

        <section className="container mx-auto px-6">
          <Tools />
        </section>

        <section className="container mx-auto px-6">
          <Education />
        </section>

        <section className="container mx-auto px-6">
          <Testimonials />
        </section>

        <section className="container mx-auto px-6">
          <Results />
        </section>

        <section className="container mx-auto px-6">
          <CountdownCTA />
        </section>

        <section className="container mx-auto px-6">
          <FAQ />
        </section>
      </main>

      <FooterChallenge />
    </div>
  );
};

export default FortyDayHome;
