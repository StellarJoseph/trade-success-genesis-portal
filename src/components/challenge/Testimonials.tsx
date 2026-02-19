import React from 'react';
import Reveal from '@/components/ui/Reveal';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

const testimonials = [
  { quote: 'This program changed how I approach trades. Clear signals and great support.', name: 'Adaobi', title: 'Retail Trader' },
  { quote: 'Consistent guidance and simple execution — perfect for busy people.', name: 'Chinedu', title: 'Part-time Trader' },
  { quote: 'The risk rules protect my account while letting winners run.', name: 'Ngozi', title: 'Full-time Trader' }
];

const quoteSvg = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7h4v6H7zM13 7h4v6h-4z" fill="#73E212" />
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white text-center mb-8">What Members Say</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <Card>
              <CardHeader>
                <div className="text-gray-200 mb-4">“{t.quote}”</div>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <div className="text-[#87e64c] font-semibold">{t.name}</div>
                    <div className="text-gray-400 text-sm">{t.title}</div>
                  </div>
                  <div className="text-[#73E212]">{quoteSvg}</div>
                </div>
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
