import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="bg-[#100F1A] rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Community & Education</h2>
        <p className="text-gray-300 mb-4">Short, focused lessons and live sessions to bring beginners to competency quickly.</p>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li>• Live Q&A Sessions</li>
          <li>• Beginner Training</li>
          <li>• Daily Market Insights</li>
        </ul>
      </div>

      <div className="bg-[#131240] rounded-xl p-6 flex items-center justify-center">
        <div className="w-full h-48 bg-gradient-to-br from-[#0b0b12] to-[#131240] rounded-lg flex items-center justify-center text-gray-500">[Class / Session Image]</div>
      </div>
    </section>
  );
};

export default Education;
