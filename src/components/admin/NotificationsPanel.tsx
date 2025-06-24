import React, { useState } from 'react';

const mockNotifications = [
  { id: 1, title: 'System Update', content: 'Platform maintenance scheduled for 2am UTC.', read: false, date: '2024-06-01' },
  { id: 2, title: 'New User Registered', content: 'Sarah Smith joined the platform.', read: true, date: '2024-05-30' },
  { id: 3, title: 'Payout Processed', content: 'Your payout request has been approved.', read: false, date: '2024-05-29' },
];

export default function NotificationsPanel() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAsRead = (id: number) => {
    setNotifications(n => n.map(notif => notif.id === id ? { ...notif, read: true } : notif));
  };
  const markAsUnread = (id: number) => {
    setNotifications(n => n.map(notif => notif.id === id ? { ...notif, read: false } : notif));
  };
  const deleteNotif = (id: number) => {
    setNotifications(n => n.filter(notif => notif.id !== id));
  };

  return (
    <div className="p-6 bg-[#100F1A] rounded-xl shadow-lg mt-8 text-white max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#73E212]">Notifications</h2>
      <div className="space-y-4">
        {notifications.length === 0 && <div className="text-[#73E212]/70">No notifications.</div>}
        {notifications.map(notif => (
          <div key={notif.id} className={`p-4 rounded-lg border flex flex-col md:flex-row md:items-center md:justify-between gap-2 transition-all ${notif.read ? 'bg-[#131240]/60 border-[#73E212]/10' : 'bg-[#131240] border-[#73E212]/30'}`}>
            <div>
              <h3 className={`font-semibold ${notif.read ? 'text-white/70' : 'text-white'}`}>{notif.title}</h3>
              <p className="text-sm text-[#73E212]/80">{notif.content}</p>
              <span className="text-xs text-[#73E212]/50">{notif.date}</span>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              {notif.read ? (
                <button onClick={() => markAsUnread(notif.id)} className="px-3 py-1 rounded bg-[#131240] text-[#73E212] border border-[#73E212]/30 hover:bg-[#73E212]/10">Mark Unread</button>
              ) : (
                <button onClick={() => markAsRead(notif.id)} className="px-3 py-1 rounded bg-[#73E212] text-black font-semibold hover:shadow-[0_0_8px_2px_#73E21299]">Mark Read</button>
              )}
              <button onClick={() => deleteNotif(notif.id)} className="px-3 py-1 rounded bg-red-500 text-white font-semibold hover:bg-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 