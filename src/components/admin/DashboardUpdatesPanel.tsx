import React, { useState } from 'react';

const categories = ['Announcement', 'Signal', 'Report', 'Insight'];
const tiers = ['Pro', 'Prestige', 'Elite', 'Royal'];

export default function DashboardUpdatesPanel() {
  const [form, setForm] = useState({
    title: '',
    content: '',
    category: categories[0],
    targetTiers: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, category: e.target.value });
  };
  const handleTier = (tier: string) => {
    setForm(f => ({
      ...f,
      targetTiers: f.targetTiers.includes(tier)
        ? f.targetTiers.filter(t => t !== tier)
        : [...f.targetTiers, tier],
    }));
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
      <h2 className="text-2xl font-bold mb-6 text-[#73E212]">Dashboard Update</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Title</label>
        <input name="title" value={form.title} onChange={handleChange} required className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Content</label>
        <textarea name="content" value={form.content} onChange={handleChange} required rows={4} className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Category</label>
        <select name="category" value={form.category} onChange={handleCategory} className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]">
          {categories.map(cat => <option key={cat}>{cat}</option>)}
        </select>
      </div>
      <div className="mb-6">
        <label className="block mb-1 font-medium">Target Tiers</label>
        <div className="flex flex-wrap gap-3">
          {tiers.map(tier => (
            <button type="button" key={tier} onClick={() => handleTier(tier)}
              className={`px-4 py-2 rounded-full border transition-all duration-150 font-semibold
                ${form.targetTiers.includes(tier)
                  ? 'bg-[#73E212] text-black border-[#73E212] shadow-[0_0_8px_2px_#73E21255]'
                  : 'bg-[#131240] text-white border-[#73E212]/30 hover:bg-[#73E212]/10'}`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>
      <button type="submit" disabled={loading} className="w-full py-3 rounded bg-[#73E212] text-black font-bold text-lg mt-2 hover:shadow-[0_0_12px_2px_#73E21299] transition-all">
        {loading ? 'Saving...' : 'Save & Publish'}
      </button>
      {success && <div className="text-[#73E212] mt-4 text-center">Update published!</div>}
    </form>
  );
} 