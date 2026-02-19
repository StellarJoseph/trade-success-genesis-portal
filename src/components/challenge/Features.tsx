import React from 'react';
import Reveal from '@/components/ui/Reveal';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  { title: 'Daily AI-Powered Trade Alerts', desc: 'Precise entry, stop and layered take-profit signals delivered daily.' },
  { title: 'Beginner-Friendly, Tap-to-Execute', desc: 'Simple instructions you can follow on WhatsApp or Telegram.' },
  { title: 'Smart Risk Management (SL/TP)', desc: 'Pre-defined stop loss and position sizing for capital protection.' },
  { title: 'Community Support & Accountability', desc: 'Live sessions, Q&A and a focused peer group.' }
];

const svgBolt = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" fill="#73E212" />
  </svg>
);

const Features: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white text-center mb-8">What You Get</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 80}>
            <Card>
              <CardHeader>
                <div className="mb-3 text-[#73E212]">{svgBolt}</div>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.desc}</CardDescription>
              </CardHeader>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Features;
