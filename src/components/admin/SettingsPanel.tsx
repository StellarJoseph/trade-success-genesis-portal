import React, { useState } from 'react';

const dashboardSections = [
  'Dashboard Updates',
  'Manage Users',
  'Live Signals',
  'Upload Reports',
  'Broadcast Notifications',
  'Payment Requests',
  'Approvals Panel',
  'Chart Management',
  'Reports & Analytics',
  'Notifications',
  'Support Inbox',
];

export default function SettingsPanel() {
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  const [payoutAlerts, setPayoutAlerts] = useState(true);
  const [withdrawalConfirm, setWithdrawalConfirm] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  // Sub-admin creation state
  const [subAdmins, setSubAdmins] = useState<{email: string, permissions: string[]}[]>([]);
  const [newAdmin, setNewAdmin] = useState({
    email: '',
    password: '',
    permissions: [] as string[],
  });
  const [adminCreated, setAdminCreated] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Settings saved!');
  };

  const handlePermissionToggle = (perm: string) => {
    setNewAdmin(a => ({
      ...a,
      permissions: a.permissions.includes(perm)
        ? a.permissions.filter(p => p !== perm)
        : [...a.permissions, perm],
    }));
  };

  const handleCreateAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    setSubAdmins(list => [...list, { email: newAdmin.email, permissions: newAdmin.permissions }]);
    setNewAdmin({ email: '', password: '', permissions: [] });
    setAdminCreated(true);
    setTimeout(() => setAdminCreated(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-[#100F1A] p-8 rounded-xl shadow-lg mt-8 text-white">
      <h2 className="text-2xl font-bold mb-6 text-[#73E212]">Settings</h2>
      <form onSubmit={handleSave} className="mb-10">
        <div className="mb-4">
          <label className="block mb-1 font-medium">Phone Number</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email Notifications</label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={emailNotifications} onChange={e => setEmailNotifications(e.target.checked)} className="accent-[#73E212]" />
            Enable Email Notifications
          </label>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium">Other Notifications</label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={payoutAlerts} onChange={e => setPayoutAlerts(e.target.checked)} className="accent-[#73E212]" />
              Payout Alerts
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={withdrawalConfirm} onChange={e => setWithdrawalConfirm(e.target.checked)} className="accent-[#73E212]" />
              Withdrawal Confirmations
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={weeklySummary} onChange={e => setWeeklySummary(e.target.checked)} className="accent-[#73E212]" />
              Weekly Summaries
            </label>
          </div>
        </div>
        <button type="submit" className="w-full py-3 rounded bg-[#73E212] text-black font-bold text-lg mt-2 hover:shadow-[0_0_12px_2px_#73E21299] transition-all">
          Save Settings
        </button>
      </form>

      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4 text-[#73E212]">Create Sub-Admin Account</h3>
        <form onSubmit={handleCreateAdmin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" value={newAdmin.email} onChange={e => setNewAdmin(a => ({ ...a, email: e.target.value }))} required className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input type="password" value={newAdmin.password} onChange={e => setNewAdmin(a => ({ ...a, password: e.target.value }))} required className="w-full p-3 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Permissions</label>
            <div className="flex flex-wrap gap-2">
              {dashboardSections.map(section => (
                <label key={section} className="flex items-center gap-2 bg-[#131240] px-3 py-1 rounded">
                  <input
                    type="checkbox"
                    checked={newAdmin.permissions.includes(section)}
                    onChange={() => handlePermissionToggle(section)}
                    className="accent-[#73E212]"
                  />
                  <span className="text-sm">{section}</span>
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="w-full py-3 rounded bg-[#73E212] text-black font-bold text-lg mt-2 hover:shadow-[0_0_12px_2px_#73E21299] transition-all">
            Create Sub-Admin
          </button>
          {adminCreated && <div className="text-[#73E212] text-center">Sub-admin created!</div>}
        </form>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4 text-[#73E212]">Existing Sub-Admins</h3>
        <ul className="space-y-2">
          {subAdmins.length === 0 && <li className="text-[#73E212]/70">No sub-admins created yet.</li>}
          {subAdmins.map((admin, idx) => (
            <li key={idx} className="bg-[#131240] p-3 rounded flex flex-col md:flex-row md:items-center md:justify-between">
              <span className="font-semibold">{admin.email}</span>
              <span className="text-xs text-[#73E212]/80">Permissions: {admin.permissions.join(', ')}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 