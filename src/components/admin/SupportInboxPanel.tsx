import React, { useState } from 'react';

const mockMessages = [
  { id: 1, user: 'John Doe', message: 'I need help with my account.', resolved: false, date: '2024-06-01' },
  { id: 2, user: 'Sarah Smith', message: 'How do I upgrade my plan?', resolved: true, date: '2024-05-30' },
];

export default function SupportInboxPanel() {
  const [messages, setMessages] = useState(mockMessages);

  const markResolved = (id: number) => {
    setMessages(m => m.map(msg => msg.id === id ? { ...msg, resolved: true } : msg));
  };
  const deleteMsg = (id: number) => {
    setMessages(m => m.filter(msg => msg.id !== id));
  };

  return (
    <div className="p-6 bg-[#100F1A] rounded-xl shadow-lg mt-8 text-white max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#73E212]">Support Inbox</h2>
      <div className="space-y-4">
        {messages.length === 0 && <div className="text-[#73E212]/70">No support messages.</div>}
        {messages.map(msg => (
          <div key={msg.id} className={`p-4 rounded-lg border flex flex-col md:flex-row md:items-center md:justify-between gap-2 transition-all ${msg.resolved ? 'bg-[#131240]/60 border-[#73E212]/10' : 'bg-[#131240] border-[#73E212]/30'}`}>
            <div>
              <h3 className={`font-semibold ${msg.resolved ? 'text-white/70' : 'text-white'}`}>{msg.user}</h3>
              <p className="text-sm text-[#73E212]/80">{msg.message}</p>
              <span className="text-xs text-[#73E212]/50">{msg.date}</span>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              {!msg.resolved && (
                <button onClick={() => markResolved(msg.id)} className="px-3 py-1 rounded bg-[#73E212] text-black font-semibold hover:shadow-[0_0_8px_2px_#73E21299]">Mark Resolved</button>
              )}
              <button onClick={() => deleteMsg(msg.id)} className="px-3 py-1 rounded bg-red-500 text-white font-semibold hover:bg-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 