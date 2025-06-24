import React, { useState } from 'react';

const mockRequests = [
  { id: 1, user: 'John Doe', amount: 1200, status: 'Pending', note: '' },
  { id: 2, user: 'Sarah Smith', amount: 800, status: 'Approved', note: 'Paid on 2024-02-01' },
];
const statuses = ['Pending', 'Approved', 'Declined'];

export default function PayoutRequestsPanel() {
  const [requests, setRequests] = useState(mockRequests);
  const [filter, setFilter] = useState('Pending');
  const [exporting, setExporting] = useState(false);

  const handleStatus = (id: number, status: string) => {
    setRequests(reqs => reqs.map(r => r.id === id ? { ...r, status } : r));
  };
  const handleNote = (id: number, note: string) => {
    setRequests(reqs => reqs.map(r => r.id === id ? { ...r, note } : r));
  };
  const handleExport = (type: 'csv' | 'pdf') => {
    setExporting(true);
    setTimeout(() => setExporting(false), 1000);
    alert(`Exported as ${type.toUpperCase()}`);
  };
  return (
    <div className="p-6 bg-[#100F1A] rounded-xl shadow-lg mt-8 text-white max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#73E212]">Payout Requests</h2>
      <div className="flex flex-wrap gap-4 mb-4">
        <select value={filter} onChange={e => setFilter(e.target.value)} className="p-2 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]">
          {statuses.map(s => <option key={s}>{s}</option>)}
        </select>
        <button onClick={() => handleExport('csv')} className="px-4 py-2 rounded bg-[#73E212] text-black font-semibold hover:shadow-[0_0_8px_2px_#73E21299]">Export CSV</button>
        <button onClick={() => handleExport('pdf')} className="px-4 py-2 rounded bg-[#73E212] text-black font-semibold hover:shadow-[0_0_8px_2px_#73E21299]">Export PDF</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-[#73E212]">
              <th>User</th><th>Amount</th><th>Status</th><th>Note</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.filter(r => r.status === filter).map(req => (
              <tr key={req.id} className="bg-[#131240] rounded-lg">
                <td className="py-2 px-3">{req.user}</td>
                <td className="py-2 px-3">${req.amount}</td>
                <td className="py-2 px-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${req.status === 'Pending' ? 'bg-yellow-500 text-black' : req.status === 'Approved' ? 'bg-[#73E212] text-black' : 'bg-red-500 text-white'}`}>{req.status}</span>
                </td>
                <td className="py-2 px-3">
                  <input value={req.note} onChange={e => handleNote(req.id, e.target.value)} className="p-1 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
                </td>
                <td className="py-2 px-3 flex flex-wrap gap-2">
                  {req.status === 'Pending' && <>
                    <button onClick={() => handleStatus(req.id, 'Approved')} className="px-3 py-1 rounded bg-[#73E212] text-black font-semibold hover:shadow-[0_0_8px_2px_#73E21299]">Approve</button>
                    <button onClick={() => handleStatus(req.id, 'Declined')} className="px-3 py-1 rounded bg-red-500 text-white font-semibold hover:bg-red-600">Decline</button>
                  </>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {exporting && <div className="text-[#73E212] mt-4 text-center">Exporting...</div>}
    </div>
  );
} 