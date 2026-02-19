import React from 'react';
import Reveal from '@/components/ui/Reveal';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const tools = [
  { title: 'AI Signal Engine', desc: 'Proprietary models scanning markets for high-probability setups.' },
  { title: 'Telegram Trading Bot', desc: 'Execute signals automatically with optional bot integration.' },
  { title: 'Futures Precision Model', desc: 'Specialized sizing and leverage rules for futures trading.' },
  { title: 'Trade History Tracking', desc: 'Track every trade and performance over time.' }
];

const svgTool = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a2 2 0 00-2 2v1H8a2 2 0 00-2 2v1H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2v-6a2 2 0 00-2-2h-2V7a2 2 0 00-2-2h-2V4a2 2 0 00-2-2z" fill="#73E212" />
  </svg>
);

const Tools: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white text-center mb-8">Technology & Tools</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((t, i) => (
          <Reveal key={t.title} delay={i * 70}>
            <Card>
              <CardHeader>
                <div className="mb-3 text-[#73E212]">{svgTool}</div>
                <CardTitle>{t.title}</CardTitle>
                <CardDescription>{t.desc}</CardDescription>
              </CardHeader>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Tools;
