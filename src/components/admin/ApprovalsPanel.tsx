import React, { useState } from 'react';

const mockApprovals = [
  { id: 1, type: 'Account Activation', user: 'John Doe', status: 'Pending' },
  { id: 2, type: 'Withdrawal', user: 'Sarah Smith', status: 'Pending' },
  { id: 3, type: 'Tier Upgrade', user: 'Mike Johnson', status: 'Pending' },
];

export default function ApprovalsPanel() {
  const [approvals, setApprovals] = useState(mockApprovals);

  const handleApprove = (id: number) => {
    setApprovals(apps => apps.map(a => a.id === id ? { ...a, status: 'Approved' } : a));
  };
  const handleDecline = (id: number) => {
    setApprovals(apps => apps.map(a => a.id === id ? { ...a, status: 'Declined' } : a));
  };
  return (
    <div className="p-6 bg-[#100F1A] rounded-xl shadow-lg mt-8 text-white max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#73E212]">Approvals Panel</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-[#73E212]">
              <th>Type</th><th>User</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {approvals.map(app => (
              <tr key={app.id} className="bg-[#131240] rounded-lg">
                <td className="py-2 px-3">{app.type}</td>
                <td className="py-2 px-3">{app.user}</td>
                <td className="py-2 px-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${app.status === 'Pending' ? 'bg-yellow-500 text-black' : app.status === 'Approved' ? 'bg-[#73E212] text-black' : 'bg-red-500 text-white'}`}>{app.status}</span>
                </td>
                <td className="py-2 px-3 flex flex-wrap gap-2">
                  {app.status === 'Pending' && <>
                    <button onClick={() => handleApprove(app.id)} className="px-3 py-1 rounded bg-[#73E212] text-black font-semibold hover:shadow-[0_0_8px_2px_#73E21299]">Approve</button>
                    <button onClick={() => handleDecline(app.id)} className="px-3 py-1 rounded bg-red-500 text-white font-semibold hover:bg-red-600">Decline</button>
                  </>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 