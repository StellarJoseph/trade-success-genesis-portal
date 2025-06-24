import React, { useState } from 'react';

const channels = [
  { label: 'WhatsApp', value: 'whatsapp' },
  { label: 'Telegram', value: 'telegram' },
  { label: 'Email', value: 'email' },
  { label: 'SMS', value: 'sms' },
];

export default function BroadcastNotificationsPanel() {
  const [form, setForm] = useState({
    title: '',
    content: '',
    selectedChannels: [] as string[],
    schedule: false,
    webhook: {
      whatsapp: '',
      telegram: '',
      email: '',
      sms: '',
    },
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleChannel = (channel: string) => {
    setForm(f => ({
      ...f,
      selectedChannels: f.selectedChannels.includes(channel)
        ? f.selectedChannels.filter(c => c !== channel)
        : [...f.selectedChannels, channel],
    }));
  };
  const handleWebhook = (channel: string, value: string) => {
    setForm(f => ({ ...f, webhook: { ...f.webhook, [channel]: value } }));
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
      <h2 className="text-2xl font-bold mb-6 text-[#73E212]">Broadcast Notification</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Title</label>
        <input name="title" value={form.title} onChange={handleChange} required className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Content</label>
        <textarea name="content" value={form.content} onChange={handleChange} required rows={4} className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Channels</label>
        <div className="flex flex-wrap gap-3">
          {channels.map(channel => (
            <button type="button" key={channel.value} onClick={() => handleChannel(channel.value)}
              className={`px-4 py-2 rounded-full border transition-all duration-150 font-semibold
                ${form.selectedChannels.includes(channel.value)
                  ? 'bg-[#73E212] text-black border-[#73E212] shadow-[0_0_8px_2px_#73E21255]'
                  : 'bg-[#131240] text-white border-[#73E212]/30 hover:bg-[#73E212]/10'}`}
            >
              {channel.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Webhook URLs</label>
        {channels.map(channel => (
          <input
            key={channel.value}
            type="text"
            placeholder={`${channel.label} Webhook URL`}
            value={form.webhook[channel.value as keyof typeof form.webhook]}
            onChange={e => handleWebhook(channel.value, e.target.value)}
            className="w-full p-2 mb-2 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]"
          />
        ))}
      </div>
      <div className="flex items-center mb-6">
        <input type="checkbox" name="schedule" checked={form.schedule} onChange={handleChange} className="mr-2 accent-[#73E212]" />
        <label className="font-medium">Schedule (toggle to schedule, leave off to send now)</label>
      </div>
      <button type="submit" disabled={loading} className="w-full py-3 rounded bg-[#73E212] text-black font-bold text-lg mt-2 hover:shadow-[0_0_12px_2px_#73E21299] transition-all">
        {loading ? 'Sending...' : 'Send Notification'}
      </button>
      {success && <div className="text-[#73E212] mt-4 text-center">Notification sent!</div>}
    </form>
  );
} 