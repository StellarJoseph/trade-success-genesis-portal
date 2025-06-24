import React, { useState } from 'react';

const tiers = ['Pro', 'Prestige', 'Elite', 'Royal'];
const labels = ['Weekly Recap', 'Monthly Summary', 'Tax Report'];

export default function UploadReportsPanel() {
  const [file, setFile] = useState<File | null>(null);
  const [selectedTiers, setSelectedTiers] = useState<string[]>([]);
  const [label, setLabel] = useState(labels[0]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  };
  const handleTier = (tier: string) => {
    setSelectedTiers(tiers => tiers.includes(tier) ? tiers.filter(t => t !== tier) : [...tiers, tier]);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 1200);
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-[#100F1A] p-8 rounded-xl shadow-lg mt-8 text-white">
      <h2 className="text-2xl font-bold mb-6 text-[#73E212]">Upload Report</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">PDF File</label>
        <input type="file" accept="application/pdf" onChange={handleFile} required className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Assign to Tiers</label>
        <div className="flex flex-wrap gap-3">
          {tiers.map(tier => (
            <button type="button" key={tier} onClick={() => handleTier(tier)}
              className={`px-4 py-2 rounded-full border transition-all duration-150 font-semibold
                ${selectedTiers.includes(tier)
                  ? 'bg-[#73E212] text-black border-[#73E212] shadow-[0_0_8px_2px_#73E21255]'
                  : 'bg-[#131240] text-white border-[#73E212]/30 hover:bg-[#73E212]/10'}`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-1 font-medium">Report Label</label>
        <select value={label} onChange={e => setLabel(e.target.value)} className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]">
          {labels.map(l => <option key={l}>{l}</option>)}
        </select>
      </div>
      <button type="submit" disabled={loading} className="w-full py-3 rounded bg-[#73E212] text-black font-bold text-lg mt-2 hover:shadow-[0_0_12px_2px_#73E21299] transition-all">
        {loading ? 'Uploading...' : 'Upload Report'}
      </button>
      {success && <div className="text-[#73E212] mt-4 text-center">Report uploaded!</div>}
    </form>
  );
} 