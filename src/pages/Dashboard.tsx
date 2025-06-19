
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  DollarSign,
  Filter,
  Mail,
  MessageCircle,
  Lock,
  User,
  Eye,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioData = [
    { token: 'BTC', balance: '0.2456', value: '$12,450', change: '+12.5%', changeValue: '+$1,389' },
    { token: 'ETH', balance: '3.45', value: '$8,920', change: '+8.2%', changeValue: '+$676' },
    { token: 'SOL', balance: '45.8', value: '$4,580', change: '+24.1%', changeValue: '+$890' },
    { token: 'USDT', balance: '2,340', value: '$2,340', change: '0%', changeValue: '$0' }
  ];

  const liveSignals = [
    {
      token: 'DOGE/USDT',
      type: 'Long',
      entry: '$0.0825',
      sl: '$0.0780',
      tp: '$0.0920',
      status: 'Active',
      category: 'Memecoins',
      date: '2024-01-15',
      orderType: 'Futures'
    },
    {
      token: 'ADA/USDT',
      type: 'Long',
      entry: '$0.485',
      sl: '$0.450',
      tp: '$0.550',
      status: 'Closed',
      profit: '+13.4%',
      category: 'Altcoins',
      date: '2024-01-14',
      orderType: 'Spot'
    },
    {
      token: 'MATIC/USDT',
      type: 'Short',
      entry: '$0.920',
      sl: '$0.970',
      tp: '$0.850',
      status: 'Active',
      category: 'Altcoins',
      date: '2024-01-14',
      orderType: 'Futures'
    },
    {
      token: 'PEPE/USDT',
      type: 'Long',
      entry: '$0.00000245',
      sl: '$0.00000220',
      tp: '$0.00000290',
      status: 'Active',
      category: 'Memecoins',
      date: '2024-01-15',
      orderType: 'Spot'
    },
    {
      token: 'BONK/USDT',
      type: 'Short',
      entry: '$0.0000145',
      sl: '$0.0000158',
      tp: '$0.0000125',
      status: 'Pending',
      category: 'Gemcoins',
      date: '2024-01-15',
      orderType: 'Futures'
    }
  ];

  const marketData = [
    { symbol: 'BTC', price: 51245.32, change: 2.4, sparkline: '↗' },
    { symbol: 'ETH', price: 2890.67, change: 3.1, sparkline: '↗' },
    { symbol: 'SOL', price: 98.45, change: -1.2, sparkline: '↘' },
    { symbol: 'USDT', price: 1.00, change: 0.01, sparkline: '→' }
  ];

  const filteredSignals = activeFilter === 'all' 
    ? liveSignals 
    : liveSignals.filter(signal => signal.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-crypto-green/20 bg-crypto-darker/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-lg flex items-center justify-center">
                <span className="text-crypto-dark font-bold">T</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white font-general">Member Dashboard</h1>
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
                  <p className="text-sm text-green-400 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    +15.2% this month
                  </p>
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
                  <p className="text-sm text-gray-400">Monthly ROI</p>
                  <p className="text-2xl font-bold text-white">+34.7%</p>
                  <p className="text-sm text-crypto-green">$2,955 profit</p>
                </div>
                <DollarSign className="w-8 h-8 text-crypto-green" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="portfolio" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-crypto-darker border-crypto-green/20">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="signals">Live Signals</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Portfolio Overview */}
          <TabsContent value="portfolio" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="glass-card border-crypto-green/20">
                  <CardHeader>
                    <CardTitle className="text-white font-general flex items-center justify-between">
                      <div className="flex items-center">
                        <Wallet className="w-5 h-5 mr-2 text-crypto-green" />
                        Portfolio Overview
                      </div>
                      <Button variant="outline" size="sm" className="border-crypto-green/30 text-crypto-green">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Refresh
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {portfolioData.map((asset, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-crypto-purple/20 rounded-lg hover:bg-crypto-purple/30 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-full flex items-center justify-center">
                              <span className="text-crypto-dark font-bold text-sm">{asset.token}</span>
                            </div>
                            <div>
                              <p className="font-semibold text-white">{asset.token}</p>
                              <p className="text-sm text-gray-400">{asset.balance} {asset.token}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-white">{asset.value}</p>
                            <p className={`text-sm flex items-center ${asset.change.startsWith('+') ? 'text-green-400' : asset.change.startsWith('-') ? 'text-red-400' : 'text-gray-400'}`}>
                              {asset.change.startsWith('+') ? <ArrowUpRight className="w-3 h-3 mr-1" /> : asset.change.startsWith('-') ? <ArrowDownRight className="w-3 h-3 mr-1" /> : null}
                              {asset.change} ({asset.changeValue})
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Market Data */}
              <div>
                <Card className="glass-card border-crypto-green/20">
                  <CardHeader>
                    <CardTitle className="text-white font-general text-lg flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-crypto-green" />
                      Live Market Data
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {marketData.map((coin, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-crypto-purple/20 rounded-lg">
                          <div>
                            <p className="font-semibold text-white">{coin.symbol}</p>
                            <p className="text-sm text-gray-400">${coin.price.toLocaleString()}</p>
                          </div>
                          <div className="text-right">
                            <p className={`text-sm font-medium ${coin.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {coin.change >= 0 ? '+' : ''}{coin.change}%
                            </p>
                            <p className="text-xs text-gray-400">{coin.sparkline}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Live Signals Feed */}
          <TabsContent value="signals" className="space-y-6">
            <Card className="glass-card border-crypto-green/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white font-general flex items-center">
                    <Signal className="w-5 h-5 mr-2 text-crypto-green" />
                    Live Signals Feed
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <select 
                      value={activeFilter}
                      onChange={(e) => setActiveFilter(e.target.value)}
                      className="bg-crypto-darker border border-crypto-green/30 text-white rounded px-3 py-1 text-sm"
                    >
                      <option value="all">All Categories</option>
                      <option value="futures">Futures</option>
                      <option value="altcoins">Altcoins</option>
                      <option value="memecoins">Memecoins</option>
                      <option value="gemcoins">Gemcoins</option>
                    </select>
                  </div>
                </div>
                <CardDescription className="text-gray-400">
                  5-7 expert signals daily with full trade instructions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredSignals.map((signal, index) => (
                    <div key={index} className="p-4 bg-crypto-purple/20 rounded-lg border border-crypto-green/10 hover:border-crypto-green/30 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Badge variant={signal.type === 'Long' ? 'default' : 'destructive'} className="bg-crypto-green text-crypto-dark">
                            {signal.type}
                          </Badge>
                          <span className="font-semibold text-white">{signal.token}</span>
                          <Badge variant="outline" className="border-crypto-green/30 text-crypto-green">
                            {signal.category}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={signal.status === 'Active' ? 'default' : signal.status === 'Closed' ? 'secondary' : 'outline'}>
                            {signal.status}
                          </Badge>
                          <span className="text-xs text-gray-400">{signal.orderType}</span>
                        </div>
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
                        <div className="mt-3 pt-3 border-t border-crypto-green/20">
                          <p className="text-sm text-green-400 font-semibold flex items-center">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            Profit: {signal.profit}
                          </p>
                        </div>
                      )}
                      <div className="mt-2 text-xs text-gray-500">
                        Signal Date: {signal.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscription Status */}
          <TabsContent value="subscription" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card border-crypto-green/20">
                <CardHeader>
                  <CardTitle className="text-white font-general flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-crypto-green" />
                    Current Subscription
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-crypto-green/20 rounded-full flex items-center justify-center mx-auto">
                      <Shield className="w-10 h-10 text-crypto-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-crypto-green text-xl">VIP Signals Plan</h3>
                      <p className="text-gray-400">$99/month</p>
                    </div>
                    <div className="bg-crypto-purple/20 rounded-lg p-4">
                      <p className="text-sm text-gray-400">Days Remaining</p>
                      <p className="text-2xl font-bold text-white">28</p>
                      <p className="text-xs text-gray-500">Renews on Feb 15, 2024</p>
                    </div>
                    <Button className="w-full glow-button text-crypto-dark font-semibold">
                      Upgrade Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-crypto-green/20">
                <CardHeader>
                  <CardTitle className="text-white font-general">Plan Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-crypto-green/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                      </div>
                      <span className="text-gray-300">5-7 Daily Premium Signals</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-crypto-green/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Entry, Stop Loss & Take Profit</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-crypto-green/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Multi-Market Coverage</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-crypto-green/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Expert Analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-crypto-green/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Priority Support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Reports & Insights */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card border-crypto-green/20">
                <CardHeader>
                  <CardTitle className="text-white font-general flex items-center">
                    <Download className="w-5 h-5 mr-2 text-crypto-green" />
                    Monthly Reports
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-crypto-purple/20 rounded-lg">
                    <div>
                      <p className="font-medium text-white">January 2024 Performance</p>
                      <p className="text-sm text-gray-400">ROI: +34.7% | 28 trades</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-crypto-green/30 text-crypto-green">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-crypto-purple/20 rounded-lg">
                    <div>
                      <p className="font-medium text-white">December 2023 Performance</p>
                      <p className="text-sm text-gray-400">ROI: +28.2% | 31 trades</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-crypto-green/30 text-crypto-green">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-crypto-purple/20 rounded-lg">
                    <div>
                      <p className="font-medium text-white">November 2023 Performance</p>
                      <p className="text-sm text-gray-400">ROI: +41.1% | 26 trades</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-crypto-green/30 text-crypto-green">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-crypto-green/20">
                <CardHeader>
                  <CardTitle className="text-white font-general">Trading Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-crypto-purple/20 rounded-lg">
                      <p className="text-2xl font-bold text-crypto-green">87%</p>
                      <p className="text-sm text-gray-400">Win Rate</p>
                    </div>
                    <div className="text-center p-3 bg-crypto-purple/20 rounded-lg">
                      <p className="text-2xl font-bold text-crypto-green">142</p>
                      <p className="text-sm text-gray-400">Total Trades</p>
                    </div>
                    <div className="text-center p-3 bg-crypto-purple/20 rounded-lg">
                      <p className="text-2xl font-bold text-crypto-green">$8.2K</p>
                      <p className="text-sm text-gray-400">Total Profit</p>
                    </div>
                    <div className="text-center p-3 bg-crypto-purple/20 rounded-lg">
                      <p className="text-2xl font-bold text-crypto-green">2.4x</p>
                      <p className="text-sm text-gray-400">Avg. Multiplier</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Community Section */}
          <TabsContent value="community" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card border-crypto-green/20">
                <CardHeader>
                  <CardTitle className="text-white font-general flex items-center">
                    <Users className="w-5 h-5 mr-2 text-crypto-green" />
                    Community Access
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start bg-[#5865F2] hover:bg-[#4752C4] text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join Discord Server
                  </Button>
                  <Button className="w-full justify-start bg-[#0088cc] hover:bg-[#006699] text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Join Telegram Group
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-crypto-green/30 text-crypto-green hover:bg-crypto-green/10">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-crypto-green/20">
                <CardHeader>
                  <CardTitle className="text-white font-general">Enrolled Courses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-crypto-purple/20 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-white">Advanced Signal Analysis</p>
                      <Badge className="bg-crypto-green text-crypto-dark">Active</Badge>
                    </div>
                    <p className="text-sm text-gray-400">Progress: 65% complete</p>
                    <div className="w-full bg-crypto-darker rounded-full h-2 mt-2">
                      <div className="bg-crypto-green h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="p-3 bg-crypto-purple/20 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-white">Risk Management Mastery</p>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <p className="text-sm text-gray-400">Completed: Jan 10, 2024</p>
                  </div>
                  <Button variant="outline" className="w-full border-crypto-green/30 text-crypto-green">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Browse All Courses
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Panel */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card border-crypto-green/20">
                <CardHeader>
                  <CardTitle className="text-white font-general flex items-center">
                    <User className="w-5 h-5 mr-2 text-crypto-green" />
                    Profile Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue="John Doe"
                      className="w-full p-3 bg-crypto-purple/30 border border-crypto-green/20 rounded text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Email</label>
                    <input 
                      type="email" 
                      defaultValue="john@example.com"
                      className="w-full p-3 bg-crypto-purple/30 border border-crypto-green/20 rounded text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Phone</label>
                    <input 
                      type="tel" 
                      defaultValue="+1 (555) 123-4567"
                      className="w-full p-3 bg-crypto-purple/30 border border-crypto-green/20 rounded text-white"
                    />
                  </div>
                  <Button className="w-full glow-button text-crypto-dark font-semibold">
                    Update Profile
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-crypto-green/20">
                <CardHeader>
                  <CardTitle className="text-white font-general flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-crypto-green" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start border-crypto-green/30 text-crypto-green hover:bg-crypto-green/10">
                    <Lock className="w-4 h-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-crypto-green/30 text-crypto-green hover:bg-crypto-green/10">
                    <Shield className="w-4 h-4 mr-2" />
                    Enable 2FA
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-crypto-green/30 text-crypto-green hover:bg-crypto-green/10">
                    <Wallet className="w-4 h-4 mr-2" />
                    Link Wallets
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-crypto-green/30 text-crypto-green hover:bg-crypto-green/10">
                    <Eye className="w-4 h-4 mr-2" />
                    Privacy Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
