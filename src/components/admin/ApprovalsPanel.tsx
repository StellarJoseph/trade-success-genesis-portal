import React, { useState, useEffect } from 'react';
import { passwordResetService } from '@/lib/database';

const mockApprovals = [
  { id: 1, type: 'Account Activation', user: 'John Doe', status: 'Pending' },
  { id: 2, type: 'Withdrawal', user: 'Sarah Smith', status: 'Pending' },
  { id: 3, type: 'Tier Upgrade', user: 'Mike Johnson', status: 'Pending' },
];

export default function ApprovalsPanel() {
  const [approvals, setApprovals] = useState(mockApprovals);
  const [resetRequests, setResetRequests] = useState([]);

  useEffect(() => {
    // Fetch password reset requests from DB
    passwordResetService.getAllRequests().then(({ data }) => {
      if (data) {
        setResetRequests(data);
      }
    });
  }, []);

  const handleApproveReset = async (id, email) => {
    await passwordResetService.updateRequestStatus(id, 'Approved', 'admin');
    // Trigger password reset email
    const { error } = await passwordResetService.sendResetEmail(email);
    if (error) {
      alert('Failed to send password reset email: ' + error.message);
    } else {
      alert('Password reset email sent to ' + email);
    }
    setResetRequests(reqs => reqs.map(r => r.id === id ? { ...r, status: 'Approved' } : r));
  };
  const handleDeclineReset = async (id) => {
    await passwordResetService.updateRequestStatus(id, 'Declined', 'admin');
    setResetRequests(reqs => reqs.map(r => r.id === id ? { ...r, status: 'Declined' } : r));
  };

  return (
    <div className="p-6 bg-[#100F1A] rounded-xl shadow-lg mt-8 text-white max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#73E212]">Approvals Panel</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-[#73E212]">
              <th>Type</th><th>User/Email</th><th>Status</th><th>Actions</th>
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
                    <button onClick={() => handleApproveReset(app.id, app.user)} className="px-3 py-1 rounded bg-[#73E212] text-black font-semibold hover:shadow-[0_0_8px_2px_#73E21299]">Approve</button>
                    <button onClick={() => handleDeclineReset(app.id)} className="px-3 py-1 rounded bg-red-500 text-white font-semibold hover:bg-red-600">Decline</button>
                  </>}
                </td>
              </tr>
            ))}
            {resetRequests.map(req => (
              <tr key={req.id} className="bg-[#131240] rounded-lg">
                <td className="py-2 px-3">Password Reset</td>
                <td className="py-2 px-3">{req.email}</td>
                <td className="py-2 px-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${req.status === 'Pending' ? 'bg-yellow-500 text-black' : req.status === 'Approved' ? 'bg-[#73E212] text-black' : 'bg-red-500 text-white'}`}>{req.status}</span>
                </td>
                <td className="py-2 px-3 flex flex-wrap gap-2">
                  {req.status === 'Pending' && <>
                    <button onClick={() => handleApproveReset(req.id, req.email)} className="px-3 py-1 rounded bg-[#73E212] text-black font-semibold hover:shadow-[0_0_8px_2px_#73E21299]">Approve</button>
                    <button onClick={() => handleDeclineReset(req.id)} className="px-3 py-1 rounded bg-red-500 text-white font-semibold hover:bg-red-600">Decline</button>
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