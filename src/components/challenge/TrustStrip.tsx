import React from 'react';

const TrustStrip: React.FC = () => {
  const logos = new Array(6).fill(null).map((_, i) => `Logo ${i + 1}`);
  return (
    <div className="bg-[#070717] py-6">
      <div className="container mx-auto px-6 flex items-center justify-between gap-6">
        <div className="text-gray-300 text-sm">Trusted by traders across Nigeria and beyond</div>
        <div className="flex items-center gap-6 overflow-x-auto">
          {logos.map((l, i) => (
            <div key={i} className="w-24 h-8 bg-[#0f0f13] rounded-md flex items-center justify-center text-gray-500 text-xs">{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
