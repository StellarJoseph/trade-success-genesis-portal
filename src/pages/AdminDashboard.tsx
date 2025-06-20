
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Users, 
  Signal, 
  FileText, 
  Bell, 
  DollarSign,
  Search,
  Filter,
  Plus,
  Check,
  X,
  Edit,
  Trash,
  Download,
  Upload,
  Send,
  Eye,
  Settings,
  AlertTriangle,
  Calendar,
  TrendingUp
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTiers, setSelectedTiers] = useState(['all']);
  const [signalForm, setSignalForm] = useState({
    token: '',
    type: 'Long',
    entry: '',
    sl: '',
    tp: '',
    category: '',
    orderType: 'Spot'
  });

  const userTiers = ['Pro', 'Prestige', 'Elite', 'Royal'];
  const categories = ['Futures', 'Altcoins', 'Memecoins', 'Gemcoins'];

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', tier: 'Elite', country: 'Nigeria', status: 'Active', joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', tier: 'Royal', country: 'Ghana', status: 'Active', joined: '2024-01-10' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', tier: 'Pro', country: 'Kenya', status: 'Suspended', joined: '2024-01-05' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', tier: 'Prestige', country: 'Nigeria', status: 'Active', joined: '2024-01-12' }
  ];

  const payoutRequests = [
    { id: 1, user: 'John Doe', amount: '$2,500', bank: 'GTBank', status: 'Pending', date: '2024-01-15', notes: '' },
    { id: 2, user: 'Jane Smith', amount: '$3,200', bank: 'Access Bank', status: 'Approved', date: '2024-01-14', notes: 'Verified' },
    { id: 3, user: 'Mike Johnson', amount: '$1,800', bank: 'UBA', status: 'Declined', date: '2024-01-13', notes: 'Insufficient balance' }
  ];

  const liveSignals = [
    { id: 1, token: 'BTC/USDT', type: 'Long', entry: '$51,245', sl: '$49,500', tp: '$54,000', status: 'Active', created: '2024-01-15 14:30' },
    { id: 2, token: 'ETH/USDT', type: 'Short', entry: '$2,890', sl: '$3,100', tp: '$2,650', status: 'Closed', created: '2024-01-15 12:15' },
    { id: 3, token: 'DOGE/USDT', type: 'Long', entry: '$0.0825', sl: '$0.0780', tp: '$0.0920', status: 'Scheduled', created: '2024-01-15 16:00' }
  ];

  const handleCreateSignal = () => {
    console.log('Creating signal:', signalForm);
    setSignalForm({
      token: '',
      type: 'Long',
      entry: '',
      sl: '',
      tp: '',
      category: '',
      orderType: 'Spot'
    });
  };

  const handlePayoutAction = (id: number, action: 'approve' | 'decline') => {
    console.log(`${action} payout request ${id}`);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-[#73E212]/20 bg-black/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#73E212] to-[#73E212]/80 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white font-general">Admin Dashboard</h1>
                <p className="text-sm text-gray-400">Platform Management Center</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-red-500 text-white">
                3 Pending Payouts
              </Badge>
              <Button variant="outline" size="sm" className="border-[#73E212]/30 text-[#73E212]">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card border-[#73E212]/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Users</p>
                  <p className="text-2xl font-bold text-[#73E212]">1,247</p>
                  <p className="text-sm text-green-400">+12% this month</p>
                </div>
                <Users className="w-8 h-8 text-[#73E212]" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-[#73E212]/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Active Signals</p>
                  <p className="text-2xl font-bold text-white">23</p>
                  <p className="text-sm text-[#73E212]">5 scheduled</p>
                </div>
                <Signal className="w-8 h-8 text-[#73E212]" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-[#73E212]/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Pending Payouts</p>
                  <p className="text-2xl font-bold text-white">3</p>
                  <p className="text-sm text-amber-400">$7,500 total</p>
                </div>
                <DollarSign className="w-8 h-8 text-[#73E212]" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-[#73E212]/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Success Rate</p>
                  <p className="text-2xl font-bold text-white">89%</p>
                  <p className="text-sm text-[#73E212]">Last 30 days</p>
                </div>
                <TrendingUp className="w-8 h-8 text-[#73E212]" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-black/60 border-[#73E212]/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[#73E212] data-[state=active]:text-black">Overview</TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-[#73E212] data-[state=active]:text-black">Users</TabsTrigger>
            <TabsTrigger value="signals" className="data-[state=active]:bg-[#73E212] data-[state=active]:text-black">Signals</TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-[#73E212] data-[state=active]:text-black">Reports</TabsTrigger>
            <TabsTrigger value="payouts" className="data-[state=active]:bg-[#73E212] data-[state=active]:text-black">Payouts</TabsTrigger>
            <TabsTrigger value="broadcast" className="data-[state=active]:bg-[#73E212] data-[state=active]:text-black">Broadcast</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card border-[#73E212]/20">
                <CardHeader>
                  <CardTitle className="text-white font-general">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start bg-[#73E212] text-black hover:bg-[#73E212]/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Signal
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-[#73E212]/30 text-[#73E212]">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-[#73E212]/30 text-[#73E212]">
                    <Send className="w-4 h-4 mr-2" />
                    Send Broadcast
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-[#73E212]/20">
                <CardHeader>
                  <CardTitle className="text-white font-general">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-[#73E212] rounded-full"></div>
                    <span className="text-gray-300">New signal created for BTC/USDT</span>
                    <span className="text-gray-500">5m ago</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-300">Payout request from John Doe</span>
                    <span className="text-gray-500">12m ago</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Monthly report uploaded</span>
                    <span className="text-gray-500">1h ago</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Management */}
          <TabsContent value="users" className="space-y-6">
            <Card className="glass-card border-[#73E212]/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white font-general">User Management</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search users..."
                        className="pl-10 pr-4 py-2 bg-black/40 border border-[#73E212]/30 rounded text-white text-sm"
                      />
                    </div>
                    <select className="bg-black/40 border border-[#73E212]/30 text-white rounded px-3 py-2 text-sm">
                      <option>All Tiers</option>
                      {userTiers.map(tier => (
                        <option key={tier} value={tier}>{tier}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#73E212]/20">
                        <th className="text-left py-3 text-gray-400 font-medium">User</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Tier</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Country</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Status</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Joined</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b border-[#73E212]/10">
                          <td className="py-3">
                            <div>
                              <p className="text-white font-medium">{user.name}</p>
                              <p className="text-sm text-gray-400">{user.email}</p>
                            </div>
                          </td>
                          <td className="py-3">
                            <Badge className="bg-[#73E212] text-black">{user.tier}</Badge>
                          </td>
                          <td className="py-3 text-gray-300">{user.country}</td>
                          <td className="py-3">
                            <Badge variant={user.status === 'Active' ? 'default' : 'destructive'}>
                              {user.status}
                            </Badge>
                          </td>
                          <td className="py-3 text-gray-300">{user.joined}</td>
                          <td className="py-3">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="border-[#73E212]/30 text-[#73E212]">
                                <Eye className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="border-[#73E212]/30 text-[#73E212]">
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="border-red-500/30 text-red-500">
                                <Trash className="w-3 h-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Signals Management */}
          <TabsContent value="signals" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card border-[#73E212]/20">
                <CardHeader>
                  <CardTitle className="text-white font-general">Create New Signal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Token Pair</label>
                      <input
                        type="text"
                        value={signalForm.token}
                        onChange={(e) => setSignalForm({...signalForm, token: e.target.value})}
                        placeholder="BTC/USDT"
                        className="w-full p-3 bg-black/40 border border-[#73E212]/30 rounded text-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Type</label>
                      <select
                        value={signalForm.type}
                        onChange={(e) => setSignalForm({...signalForm, type: e.target.value})}
                        className="w-full p-3 bg-black/40 border border-[#73E212]/30 rounded text-white"
                      >
                        <option value="Long">Long</option>
                        <option value="Short">Short</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Entry</label>
                      <input
                        type="text"
                        value={signalForm.entry}
                        onChange={(e) => setSignalForm({...signalForm, entry: e.target.value})}
                        placeholder="$51,245"
                        className="w-full p-3 bg-black/40 border border-[#73E212]/30 rounded text-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Stop Loss</label>
                      <input
                        type="text"
                        value={signalForm.sl}
                        onChange={(e) => setSignalForm({...signalForm, sl: e.target.value})}
                        placeholder="$49,500"
                        className="w-full p-3 bg-black/40 border border-[#73E212]/30 rounded text-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Take Profit</label>
                      <input
                        type="text"
                        value={signalForm.tp}
                        onChange={(e) => setSignalForm({...signalForm, tp: e.target.value})}
                        placeholder="$54,000"
                        className="w-full p-3 bg-black/40 border border-[#73E212]/30 rounded text-white"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Category</label>
                      <select
                        value={signalForm.category}
                        onChange={(e) => setSignalForm({...signalForm, category: e.target.value})}
                        className="w-full p-3 bg-black/40 border border-[#73E212]/30 rounded text-white"
                      >
                        <option value="">Select Category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Order Type</label>
                      <select
                        value={signalForm.orderType}
                        onChange={(e) => setSignalForm({...signalForm, orderType: e.target.value})}
                        className="w-full p-3 bg-black/40 border border-[#73E212]/30 rounded text-white"
                      >
                        <option value="Spot">Spot</option>
                        <option value="Futures">Futures</option>
                      </select>
                    </div>
                  </div>
                  <Button onClick={handleCreateSignal} className="w-full bg-[#73E212] text-black hover:bg-[#73E212]/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Signal
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-[#73E212]/20">
                <CardHeader>
                  <CardTitle className="text-white font-general">Live Signals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {liveSignals.map((signal) => (
                      <div key={signal.id} className="p-4 bg-[#73E212]/10 rounded-lg border border-[#73E212]/20">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Badge variant={signal.type === 'Long' ? 'default' : 'destructive'} className="bg-[#73E212] text-black">
                              {signal.type}
                            </Badge>
                            <span className="text-white font-medium">{signal.token}</span>
                          </div>
                          <Badge variant={signal.status === 'Active' ? 'default' : signal.status === 'Closed' ? 'secondary' : 'outline'}>
                            {signal.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <p className="text-gray-400">Entry</p>
                            <p className="text-white">{signal.entry}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">SL</p>
                            <p className="text-red-400">{signal.sl}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">TP</p>
                            <p className="text-green-400">{signal.tp}</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-xs text-gray-500">{signal.created}</span>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="border-[#73E212]/30 text-[#73E212]">
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-500/30 text-red-500">
                              <Trash className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Reports Management */}
          <TabsContent value="reports" className="space-y-6">
            <Card className="glass-card border-[#73E212]/20">
              <CardHeader>
                <CardTitle className="text-white font-general">Report Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#73E212]">Upload New Report</h3>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Select User Tier(s)</label>
                      <div className="space-y-2">
                        {['All Tiers', ...userTiers].map(tier => (
                          <label key={tier} className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              className="rounded border-[#73E212]/30"
                              defaultChecked={tier === 'All Tiers'}
                            />
                            <span className="text-gray-300">{tier}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Report Title</label>
                      <input
                        type="text"
                        placeholder="January 2024 Performance Report"
                        className="w-full p-3 bg-black/40 border border-[#73E212]/30 rounded text-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Upload PDF</label>
                      <input
                        type="file"
                        accept=".pdf"
                        className="w-full p-3 bg-black/40 border border-[#73E212]/30 rounded text-white"
                      />
                    </div>
                    <Button className="w-full bg-[#73E212] text-black hover:bg-[#73E212]/90">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Report
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#73E212]">Recent Reports</h3>
                    <div className="space-y-3">
                      {[
                        { title: 'January 2024 Performance', tiers: 'All Tiers', date: '2024-01-15' },
                        { title: 'Weekly Analysis Jan 8-14', tiers: 'Elite, Royal', date: '2024-01-14' },
                        { title: 'December 2023 Summary', tiers: 'All Tiers', date: '2024-01-01' }
                      ].map((report, index) => (
                        <div key={index} className="p-3 bg-[#73E212]/10 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-white font-medium">{report.title}</p>
                              <p className="text-sm text-gray-400">{report.tiers}</p>
                              <p className="text-xs text-gray-500">{report.date}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="border-[#73E212]/30 text-[#73E212]">
                                <Download className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="border-red-500/30 text-red-500">
                                <Trash className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payouts Management */}
          <TabsContent value="payouts" className="space-y-6">
            <Card className="glass-card border-[#73E212]/20">
              <CardHeader>
                <CardTitle className="text-white font-general">Payout Requests</CardTitle>
                <CardDescription className="text-gray-400">
                  Review and process user payout requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#73E212]/20">
                        <th className="text-left py-3 text-gray-400 font-medium">User</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Amount</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Bank</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Status</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Date</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payoutRequests.map((request) => (
                        <tr key={request.id} className="border-b border-[#73E212]/10">
                          <td className="py-3 text-white">{request.user}</td>
                          <td className="py-3 font-semibold text-white">{request.amount}</td>
                          <td className="py-3 text-gray-300">{request.bank}</td>
                          <td className="py-3">
                            <Badge 
                              variant={
                                request.status === 'Approved' ? 'default' : 
                                request.status === 'Pending' ? 'secondary' : 
                                'destructive'
                              }
                              className={request.status === 'Approved' ? 'bg-green-500 text-white' : ''}
                            >
                              {request.status}
                            </Badge>
                          </td>
                          <td className="py-3 text-gray-300">{request.date}</td>
                          <td className="py-3">
                            {request.status === 'Pending' && (
                              <div className="flex space-x-2">
                                <Button 
                                  size="sm" 
                                  onClick={() => handlePayoutAction(request.id, 'approve')}
                                  className="bg-green-500 text-white hover:bg-green-600"
                                >
                                  <Check className="w-3 h-3" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  onClick={() => handlePayoutAction(request.id, 'decline')}
                                  className="bg-red-500 text-white hover:bg-red-600"
                                >
                                  <X className="w-3 h-3" />
                                </Button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Broadcast Tab */}
          <TabsContent value="broadcast" className="space-y-6">
            <Card className="glass-card border-[#73E212]/20">
              <CardHeader>
                <CardTitle className="text-white font-general">Broadcast Notifications</CardTitle>
                <CardDescription className="text-gray-400">
                  Send announcements and updates to users
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Message Title</label>
                      <input
                        type="text"
                        placeholder="Important Update"
                        className="w-full p-3 bg-black/40 border border-[#73E212]/30 rounded text-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Message Content</label>
                      <textarea
                        rows={4}
                        placeholder="Enter your message here..."
                        className="w-full p-3 bg-black/40 border border-[#73E212]/30 rounded text-white resize-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Target Audience</label>
                      <select className="w-full p-3 bg-black/40 border border-[#73E212]/30 rounded text-white">
                        <option>All Users</option>
                        <option>Pro Tier</option>
                        <option>Prestige Tier</option>
                        <option>Elite Tier</option>
                        <option>Royal Tier</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Broadcast Channel</label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-[#73E212]/30" />
                          <span className="text-gray-300">Dashboard Notification</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-[#73E212]/30" />
                          <span className="text-gray-300">Telegram Message</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-[#73E212]/30" />
                          <span className="text-gray-300">Email Campaign</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-[#73E212]/30" />
                          <span className="text-gray-300">SMS Alert</span>
                        </label>
                      </div>
                    </div>
                    <Button className="w-full bg-[#73E212] text-black hover:bg-[#73E212]/90">
                      <Send className="w-4 h-4 mr-2" />
                      Send Broadcast
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#73E212]">Recent Broadcasts</h3>
                    <div className="space-y-3">
                      {[
                        { title: 'New Signal Alert', target: 'All Users', channel: 'Telegram', sent: '2 hours ago' },
                        { title: 'Weekly Report Available', target: 'Elite, Royal', channel: 'Email', sent: '1 day ago' },
                        { title: 'System Maintenance', target: 'All Users', channel: 'Dashboard', sent: '3 days ago' }
                      ].map((broadcast, index) => (
                        <div key={index} className="p-3 bg-[#73E212]/10 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-white font-medium">{broadcast.title}</p>
                              <p className="text-sm text-gray-400">{broadcast.target} • {broadcast.channel}</p>
                              <p className="text-xs text-gray-500">{broadcast.sent}</p>
                            </div>
                            <Badge className="bg-[#73E212] text-black">Sent</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
