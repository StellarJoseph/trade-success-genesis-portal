import React, { useState } from 'react';

const tradeTypes = ['Spot', 'Futures'];

export default function LiveSignalsPanel() {
  const [form, setForm] = useState({
    token: '',
    entry: '',
    stop: '',
    takeProfit: '',
    tradeType: tradeTypes[0],
    notes: '',
    schedule: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
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
      <h2 className="text-2xl font-bold mb-6 text-[#73E212]">Add/Edit Signal</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Token</label>
        <input name="token" value={form.token} onChange={handleChange} required className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 font-medium">Entry Price</label>
          <input name="entry" value={form.entry} onChange={handleChange} required className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Stop Loss</label>
          <input name="stop" value={form.stop} onChange={handleChange} required className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Take Profit</label>
        <input name="takeProfit" value={form.takeProfit} onChange={handleChange} required className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Trade Type</label>
        <select name="tradeType" value={form.tradeType} onChange={handleChange} className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]">
          {tradeTypes.map(type => <option key={type}>{type}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Strategy Notes (optional)</label>
        <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
      </div>
      <div className="flex items-center mb-6">
        <input type="checkbox" name="schedule" checked={form.schedule} onChange={handleChange} className="mr-2 accent-[#73E212]" />
        <label className="font-medium">Schedule (toggle to schedule, leave off to publish immediately)</label>
      </div>
      <button type="submit" disabled={loading} className="w-full py-3 rounded bg-[#73E212] text-black font-bold text-lg mt-2 hover:shadow-[0_0_12px_2px_#73E21299] transition-all">
        {loading ? 'Saving...' : 'Save Signal'}
      </button>
      {success && <div className="text-[#73E212] mt-4 text-center">Signal saved!</div>}
    </form>
  );
} 