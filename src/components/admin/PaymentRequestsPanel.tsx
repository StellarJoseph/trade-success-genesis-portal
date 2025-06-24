import React, { useState } from 'react';

const mockPayments = [
  { id: 1, user: 'John Doe', amount: 500, status: 'Pending' },
  { id: 2, user: 'Sarah Smith', amount: 1200, status: 'Approved' },
  { id: 3, user: 'Mike Johnson', amount: 800, status: 'Declined' },
];

export default function PaymentRequestsPanel() {
  const [payments, setPayments] = useState(mockPayments);

  const handleStatus = (id: number, status: string) => {
    setPayments(p => p.map(pay => pay.id === id ? { ...pay, status } : pay));
  };

  return (
    <div className="p-6 bg-[#100F1A] rounded-xl shadow-lg mt-8 text-white max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#73E212]">Payment Requests</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-[#73E212]">
              <th>User</th><th>Amount</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(pay => (
              <tr key={pay.id} className="bg-[#131240] rounded-lg">
                <td className="py-2 px-3">{pay.user}</td>
                <td className="py-2 px-3">${pay.amount}</td>
                <td className="py-2 px-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${pay.status === 'Pending' ? 'bg-yellow-500 text-black' : pay.status === 'Approved' ? 'bg-[#73E212] text-black' : 'bg-red-500 text-white'}`}>{pay.status}</span>
                </td>
                <td className="py-2 px-3 flex flex-wrap gap-2">
                  {pay.status === 'Pending' && <>
                    <button onClick={() => handleStatus(pay.id, 'Approved')} className="px-3 py-1 rounded bg-[#73E212] text-black font-semibold hover:shadow-[0_0_8px_2px_#73E21299]">Approve</button>
                    <button onClick={() => handleStatus(pay.id, 'Declined')} className="px-3 py-1 rounded bg-red-500 text-white font-semibold hover:bg-red-600">Decline</button>
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