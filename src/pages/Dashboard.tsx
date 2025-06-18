
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Wallet, 
  Signal, 
  Settings, 
  Download, 
  ExternalLink,
  Bell,
  Shield,
  Users,
  Calendar,
  DollarSign
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const portfolioData = [
    { token: 'BTC', balance: '0.2456', value: '$12,450', change: '+12.5%' },
    { token: 'ETH', balance: '3.45', value: '$8,920', change: '+8.2%' },
    { token: 'SOL', balance: '45.8', value: '$4,580', change: '+24.1%' },
    { token: 'USDT', balance: '2,340', value: '$2,340', change: '0%' }
  ];

  const recentSignals = [
    {
      token: 'DOGE/USDT',
      type: 'Long',
      entry: '$0.0825',
      sl: '$0.0780',
      tp: '$0.0920',
      status: 'Active',
      date: '2024-01-15'
    },
    {
      token: 'ADA/USDT',
      type: 'Long',
      entry: '$0.485',
      sl: '$0.450',
      tp: '$0.550',
      status: 'Closed',
      profit: '+13.4%',
      date: '2024-01-14'
    },
    {
      token: 'MATIC/USDT',
      type: 'Short',
      entry: '$0.920',
      sl: '$0.970',
      tp: '$0.850',
      status: 'Active',
      date: '2024-01-14'
    }
  ];

  return (
    <div className="min-h-screen bg-crypto-dark">
      {/* Header */}
      <header className="border-b border-crypto-green/20 bg-crypto-darker/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-lg flex items-center justify-center">
                <span className="text-crypto-dark font-bold">T</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white font-general">Dashboard</h1>
                <p className="text-sm text-gray-400">Welcome back, John!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-crypto-green/30 text-crypto-green">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm" className="border-crypto-green/30 text-crypto-green">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card border-crypto-green/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Portfolio</p>
                  <p className="text-2xl font-bold text-crypto-green">$28,290</p>
                  <p className="text-sm text-green-400">+15.2% this month</p>
                </div>
                <Wallet className="w-8 h-8 text-crypto-green" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-crypto-green/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Active Signals</p>
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-sm text-crypto-green">+3 today</p>
                </div>
                <Signal className="w-8 h-8 text-crypto-green" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-crypto-green/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Success Rate</p>
                  <p className="text-2xl font-bold text-white">87%</p>
                  <p className="text-sm text-crypto-green">Last 30 days</p>
                </div>
                <TrendingUp className="w-8 h-8 text-crypto-green" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-crypto-green/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Subscription</p>
                  <p className="text-lg font-bold text-white">Pro Plan</p>
                  <p className="text-sm text-gray-400">28 days left</p>
                </div>
                <Shield className="w-8 h-8 text-crypto-green" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Overview */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-crypto-green/20 mb-6">
              <CardHeader>
                <CardTitle className="text-white font-general flex items-center">
                  <Wallet className="w-5 h-5 mr-2 text-crypto-green" />
                  Portfolio Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolioData.map((asset, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-crypto-purple/20 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-full flex items-center justify-center">
                          <span className="text-crypto-dark font-bold text-sm">{asset.token}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-white">{asset.token}</p>
                          <p className="text-sm text-gray-400">{asset.balance} {asset.token}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-white">{asset.value}</p>
                        <p className={`text-sm ${asset.change.startsWith('+') ? 'text-green-400' : asset.change.startsWith('-') ? 'text-red-400' : 'text-gray-400'}`}>
                          {asset.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Signals */}
            <Card className="glass-card border-crypto-green/20">
              <CardHeader>
                <CardTitle className="text-white font-general flex items-center">
                  <Signal className="w-5 h-5 mr-2 text-crypto-green" />
                  Recent Signals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSignals.map((signal, index) => (
                    <div key={index} className="p-4 bg-crypto-purple/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Badge variant={signal.type === 'Long' ? 'default' : 'destructive'} className="bg-crypto-green text-crypto-dark">
                            {signal.type}
                          </Badge>
                          <span className="font-semibold text-white">{signal.token}</span>
                        </div>
                        <Badge variant={signal.status === 'Active' ? 'default' : 'secondary'}>
                          {signal.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Entry</p>
                          <p className="text-white font-medium">{signal.entry}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Stop Loss</p>
                          <p className="text-red-400 font-medium">{signal.sl}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Take Profit</p>
                          <p className="text-green-400 font-medium">{signal.tp}</p>
                        </div>
                      </div>
                      {signal.profit && (
                        <div className="mt-2">
                          <p className="text-sm text-green-400 font-semibold">Profit: {signal.profit}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Subscription Status */}
            <Card className="glass-card border-crypto-green/20">
              <CardHeader>
                <CardTitle className="text-white font-general text-lg">Subscription</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="w-16 h-16 bg-crypto-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-crypto-green" />
                  </div>
                  <h3 className="font-bold text-crypto-green text-lg">Pro Plan</h3>
                  <p className="text-gray-400 text-sm mb-4">28 days remaining</p>
                  <Button className="w-full glow-button text-crypto-dark font-semibold">
                    Upgrade Plan
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card border-crypto-green/20">
              <CardHeader>
                <CardTitle className="text-white font-general text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-crypto-green/30 text-crypto-green hover:bg-crypto-green/10">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
                <Button variant="outline" className="w-full justify-start border-crypto-green/30 text-crypto-green hover:bg-crypto-green/10">
                  <Users className="w-4 h-4 mr-2" />
                  Join Discord
                </Button>
                <Button variant="outline" className="w-full justify-start border-crypto-green/30 text-crypto-green hover:bg-crypto-green/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Courses
                </Button>
                <Button variant="outline" className="w-full justify-start border-crypto-green/30 text-crypto-green hover:bg-crypto-green/10">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </CardContent>
            </Card>

            {/* Market Data Widget */}
            <Card className="glass-card border-crypto-green/20">
              <CardHeader>
                <CardTitle className="text-white font-general text-lg">Market Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">BTC/USDT</span>
                    <span className="text-green-400">$51,245 +2.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">ETH/USDT</span>
                    <span className="text-green-400">$2,890 +3.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">SOL/USDT</span>
                    <span className="text-red-400">$98.50 -1.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
