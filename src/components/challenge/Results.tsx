import React from 'react';

const Results: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">What You Can Achieve in 40 Days</h2>
        <p className="text-gray-300 mb-4">Small, consistent gains with disciplined risk management can produce meaningful portfolio improvements. Follow the process and compound results over 40 days.</p>
        <div className="text-[#73E212] font-bold text-2xl">Results depend on discipline, market conditions and execution.</div>
      </div>

      <div className="bg-[#100F1A] rounded-xl p-6">
        <ul className="space-y-3 text-gray-300">
          <li>• Daily profit targets with defensive exits</li>
          <li>• Systematic position sizing</li>
          <li>• Verified trade history and learning loops</li>
          <li>• Community accountability</li>
        </ul>
      </div>
    </section>
  );
};

export default Results;
