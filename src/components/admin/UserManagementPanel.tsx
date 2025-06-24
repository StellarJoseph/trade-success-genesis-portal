import React, { useState } from 'react';

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Pro', country: 'US', status: 'Active', lastPayoutEdit: '2024-01-01', nextOfKin: 'Jane Doe' },
  { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', plan: 'Elite', country: 'UK', status: 'Pending', lastPayoutEdit: '2024-02-01', nextOfKin: 'Sam Smith' },
];

export default function UserManagementPanel() {
  const [users, setUsers] = useState(mockUsers);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const handleSuspend = (id: number) => {
    setUsers(users => users.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' } : u));
  };
  const handleResetPassword = (id: number) => {
    alert('Password reset link sent!');
  };
  const handleActivate = (id: number) => {
    setUsers(users => users.map(u => u.id === id ? { ...u, status: 'Active' } : u));
  };
  return (
    <div className="p-6 bg-[#100F1A] rounded-xl shadow-lg mt-8 text-white max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#73E212]">User Management</h2>
      <div className="flex flex-wrap gap-4 mb-4">
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, email, plan, country" className="p-2 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]" />
        <select value={filter} onChange={e => setFilter(e.target.value)} className="p-2 rounded bg-[#131240] border border-[#73E212]/30 text-white focus:border-[#73E212]">
          <option value="">All Plans</option>
          <option value="Pro">Pro</option>
          <option value="Elite">Elite</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-[#73E212]">
              <th>Name</th><th>Email</th><th>Plan</th><th>Country</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()) || u.plan.toLowerCase().includes(search.toLowerCase()) || u.country.toLowerCase().includes(search.toLowerCase())).map(user => (
              <tr key={user.id} className="bg-[#131240] rounded-lg">
                <td className="py-2 px-3">{user.name}</td>
                <td className="py-2 px-3">{user.email}</td>
                <td className="py-2 px-3">{user.plan}</td>
                <td className="py-2 px-3">{user.country}</td>
                <td className="py-2 px-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${user.status === 'Active' ? 'bg-[#73E212] text-black' : user.status === 'Pending' ? 'bg-yellow-500 text-black' : 'bg-red-500 text-white'}`}>{user.status}</span>
                </td>
                <td className="py-2 px-3 flex flex-wrap gap-2">
                  <button onClick={() => handleSuspend(user.id)} className="px-3 py-1 rounded bg-[#73E212] text-black font-semibold hover:shadow-[0_0_8px_2px_#73E21299]">{user.status === 'Active' ? 'Suspend' : 'Reactivate'}</button>
                  <button onClick={() => handleResetPassword(user.id)} className="px-3 py-1 rounded bg-[#131240] text-[#73E212] border border-[#73E212]/30 hover:bg-[#73E212]/10">Reset Password</button>
                  {user.status === 'Pending' && <button onClick={() => handleActivate(user.id)} className="px-3 py-1 rounded bg-[#73E212] text-black font-semibold hover:shadow-[0_0_8px_2px_#73E21299]">Activate</button>}
                  <button className="px-3 py-1 rounded bg-[#131240] text-white border border-[#73E212]/30 hover:bg-[#73E212]/10">Edit Payout</button>
                  <button className="px-3 py-1 rounded bg-[#131240] text-white border border-[#73E212]/30 hover:bg-[#73E212]/10">Edit Next of Kin</button>
                  <button className="px-3 py-1 rounded bg-[#131240] text-white border border-[#73E212]/30 hover:bg-[#73E212]/10">View Logs</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 