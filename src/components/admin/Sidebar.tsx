import React from 'react';

const tabs = [
  { label: 'Dashboard Updates', value: 'dashboard-updates' },
  { label: 'Manage Users', value: 'manage-users' },
  { label: 'Live Signals', value: 'live-signals' },
  { label: 'Upload Reports', value: 'upload-reports' },
  { label: 'Broadcast Notifications', value: 'broadcast-notifications' },
  { label: 'Payout Requests', value: 'payout-requests' },
  { label: 'Approvals Panel', value: 'approvals-panel' },
  { label: 'Settings', value: 'settings' },
  { label: 'Create Account', value: 'create-account' },
  { label: 'Notification Preferences', value: 'notification-preferences' },
  { label: 'Security & Roles', value: 'security-roles' },
];

export default function Sidebar({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) {
  return (
    <aside className="bg-black min-h-screen w-64 flex flex-col py-8 px-4 border-r border-[#131240]">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#73E212] font-general">Admin Dashboard</h1>
      </div>
      <nav className="flex-1 space-y-2">
        {tabs.map(tab => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200
              ${activeTab === tab.value
                ? 'bg-[#131240] text-[#73E212] shadow-[0_0_8px_2px_#73E21255] border-l-4 border-[#73E212]'
                : 'text-white hover:bg-[#131240] hover:text-[#73E212] hover:shadow-[0_0_8px_2px_#73E21233]'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </aside>
  );
} 