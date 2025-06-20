import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
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
  ArrowDownRight,
  Send,
  CreditCard,
  Moon,
  Sun,
  Plus,
  Check,
  X,
  AlertCircle,
  FileText,
  Building2
} from 'lucide-react';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [payoutAmount, setPayoutAmount] = useState('');
  const [showPayoutForm, setShowPayoutForm] = useState(false);
  const [bankAccount, setBankAccount] = useState({
    accountName: '',
    accountNumber: '',
    bankName: '',
    lastUpdated: null
  });
  const [nextOfKin, setNextOfKin] = useState({
    name: '',
    accountName: '',
    accountNumber: '',
    bankName: '',
    relationship: ''
  });

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

  const nigerianBanks = [
    'Access Bank', 'First Bank', 'GTBank', 'UBA', 'Zenith Bank',
    'Ecobank', 'Fidelity Bank', 'FCMB', 'Sterling Bank', 'Stanbic IBTC',
    'Union Bank', 'Wema Bank', 'Heritage Bank', 'Keystone Bank'
  ];

  const payoutHistory = [
    { date: '2024-01-10', amount: '$2,500', status: 'Completed', bank: 'GTBank', reference: 'TXN001234' },
    { date: '2024-01-03', amount: '$1,800', status: 'Pending', bank: 'Access Bank', reference: 'TXN001233' },
    { date: '2023-12-28', amount: '$3,200', status: 'Completed', bank: 'UBA', reference: 'TXN001232' },
    { date: '2023-12-15', amount: '$1,500', status: 'Declined', bank: 'First Bank', reference: 'TXN001231' }
  ];

  const filteredSignals = activeFilter === 'all' 
    ? liveSignals 
    : liveSignals.filter(signal => signal.category.toLowerCase() === activeFilter.toLowerCase());

  const handlePayoutRequest = () => {
    if (!payoutAmount || parseFloat(payoutAmount) <= 0) return;
    // Process payout request
    console.log('Payout requested:', payoutAmount);
    setShowPayoutForm(false);
    setPayoutAmount('');
  };

  const canUpdateBankAccount = () => {
    if (!bankAccount.lastUpdated) return true;
    const daysSinceUpdate = Math.floor((Date.now() - new Date(bankAccount.lastUpdated).getTime()) / (1000 * 60 * 60 * 24));
    return daysSinceUpdate >= 60;
  };

  const themeClass = isDarkMode ? 'dark' : '';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Header */}
      <header className={`border-b transition-colors duration-300 backdrop-blur-lg ${
        isDarkMode 
          ? 'border-[#73E212]/20 bg-black/80' 
          : 'border-gray-200 bg-white/80'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#73E212] to-[#73E212]/80 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">T</span>
              </div>
              <div>
                <h1 className={`text-xl font-bold font-general ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Member Dashboard
                </h1>
                <p className="text-sm text-gray-400">Welcome back, John!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Sun className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-[#73E212]'}`} />
                <Switch 
                  checked={isDarkMode} 
                  onCheckedChange={setIsDarkMode}
                  className="data-[state=checked]:bg-[#73E212]"
                />
                <Moon className={`w-4 h-4 ${isDarkMode ? 'text-[#73E212]' : 'text-gray-400'}`} />
              </div>
              <Button variant="outline" size="sm" className={`transition-colors ${
                isDarkMode 
                  ? 'border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10' 
                  : 'border-[#73E212] text-[#73E212] hover:bg-[#73E212]/10'
              }`}>
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm" className={`transition-colors ${
                isDarkMode 
                  ? 'border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10' 
                  : 'border-[#73E212] text-[#73E212] hover:bg-[#73E212]/10'
              }`}>
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
          <Card className={`transition-colors duration-300 ${
            isDarkMode 
              ? 'glass-card border-[#73E212]/20 bg-black/40' 
              : 'border-gray-200 bg-white shadow-sm'
          }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Portfolio</p>
                  <p className="text-2xl font-bold text-[#73E212]">$28,290</p>
                  <p className="text-sm text-green-400 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    +15.2% this month
                  </p>
                </div>
                <Wallet className="w-8 h-8 text-[#73E212]" />
              </div>
            </CardContent>
          </Card>

          <Card className={`transition-colors duration-300 ${
            isDarkMode 
              ? 'glass-card border-[#73E212]/20 bg-black/40' 
              : 'border-gray-200 bg-white shadow-sm'
          }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Active Signals</p>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>12</p>
                  <p className="text-sm text-[#73E212]">+3 today</p>
                </div>
                <Signal className="w-8 h-8 text-[#73E212]" />
              </div>
            </CardContent>
          </Card>

          <Card className={`transition-colors duration-300 ${
            isDarkMode 
              ? 'glass-card border-[#73E212]/20 bg-black/40' 
              : 'border-gray-200 bg-white shadow-sm'
          }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Success Rate</p>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>87%</p>
                  <p className="text-sm text-[#73E212]">Last 30 days</p>
                </div>
                <TrendingUp className="w-8 h-8 text-[#73E212]" />
              </div>
            </CardContent>
          </Card>

          <Card className={`transition-colors duration-300 ${
            isDarkMode 
              ? 'glass-card border-[#73E212]/20 bg-black/40' 
              : 'border-gray-200 bg-white shadow-sm'
          }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Monthly ROI</p>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>+34.7%</p>
                  <p className="text-sm text-[#73E212]">$2,955 profit</p>
                </div>
                <DollarSign className="w-8 h-8 text-[#73E212]" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="portfolio" className="space-y-6">
          <TabsList className={`grid w-full grid-cols-7 transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-black/60 border-[#73E212]/20' 
              : 'bg-gray-100 border-gray-200'
          }`}>
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-[#73E212] data-[state=active]:text-black">Portfolio</TabsTrigger>
            <TabsTrigger value="signals" className="data-[state=active]:bg-[#73E212] data-[state=active]:text-black">Live Signals</TabsTrigger>
            <TabsTrigger value="subscription" className="data-[state=active]:bg-[#73E212] data-[state=active]:text-black">Subscription</TabsTrigger>
            <TabsTrigger value="payments" className="data-[state=active]:bg-[#73E212] data-[state=active]:text-black">Payments</TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-[#73E212] data-[state=active]:text-black">Reports</TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-[#73E212] data-[state=active]:text-black">Community</TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-[#73E212] data-[state=active]:text-black">Settings</TabsTrigger>
          </TabsList>

          {/* Portfolio Overview */}
          <TabsContent value="portfolio" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className={`transition-colors duration-300 ${
                  isDarkMode 
                    ? 'glass-card border-[#73E212]/20 bg-black/40' 
                    : 'border-gray-200 bg-white shadow-sm'
                }`}>
                  <CardHeader>
                    <CardTitle className={`font-general flex items-center justify-between ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      <div className="flex items-center">
                        <Wallet className="w-5 h-5 mr-2 text-[#73E212]" />
                        Portfolio Overview
                      </div>
                      <Button variant="outline" size="sm" className={`transition-colors ${
                        isDarkMode 
                          ? 'border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10' 
                          : 'border-[#73E212] text-[#73E212] hover:bg-[#73E212]/10'
                      }`}>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Refresh
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {portfolioData.map((asset, index) => (
                        <div key={index} className={`flex items-center justify-between p-4 rounded-lg hover:bg-opacity-40 transition-colors ${
                          isDarkMode ? 'bg-[#73E212]/10 hover:bg-[#73E212]/20' : 'bg-gray-50 hover:bg-gray-100'
                        }`}>
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#73E212] to-[#73E212]/80 rounded-full flex items-center justify-center">
                              <span className="text-black font-bold text-sm">{asset.token}</span>
                            </div>
                            <div>
                              <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{asset.token}</p>
                              <p className="text-sm text-gray-400">{asset.balance} {asset.token}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{asset.value}</p>
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
                <Card className={`transition-colors duration-300 ${
                  isDarkMode 
                    ? 'glass-card border-[#73E212]/20 bg-black/40' 
                    : 'border-gray-200 bg-white shadow-sm'
                }`}>
                  <CardHeader>
                    <CardTitle className={`font-general text-lg flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      <TrendingUp className="w-5 h-5 mr-2 text-[#73E212]" />
                      Live Market Data
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {marketData.map((coin, index) => (
                        <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${
                          isDarkMode ? 'bg-[#73E212]/10' : 'bg-gray-50'
                        }`}>
                          <div>
                            <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{coin.symbol}</p>
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
            <Card className={`transition-colors duration-300 ${
              isDarkMode 
                ? 'glass-card border-[#73E212]/20 bg-black/40' 
                : 'border-gray-200 bg-white shadow-sm'
            }`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className={`font-general flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <Signal className="w-5 h-5 mr-2 text-[#73E212]" />
                    Live Signals Feed
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <select 
                      value={activeFilter}
                      onChange={(e) => setActiveFilter(e.target.value)}
                      className={`border rounded px-3 py-1 text-sm transition-colors ${
                        isDarkMode 
                          ? 'bg-black border-[#73E212]/30 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      }`}
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
                    <div key={index} className={`p-4 rounded-lg border transition-colors ${
                      isDarkMode 
                        ? 'bg-[#73E212]/10 border-[#73E212]/20 hover:border-[#73E212]/40' 
                        : 'bg-gray-50 border-gray-200 hover:border-[#73E212]/40'
                    }`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Badge variant={signal.type === 'Long' ? 'default' : 'destructive'} className="bg-[#73E212] text-black">
                            {signal.type}
                          </Badge>
                          <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{signal.token}</span>
                          <Badge variant="outline" className="border-[#73E212]/30 text-[#73E212]">
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
                          <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{signal.entry}</p>
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
                        <div className={`mt-3 pt-3 border-t transition-colors ${
                          isDarkMode ? 'border-[#73E212]/20' : 'border-gray-200'
                        }`}>
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
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'glass-card border-[#73E212]/20 bg-black/40' 
                  : 'border-gray-200 bg-white shadow-sm'
              }`}>
                <CardHeader>
                  <CardTitle className={`font-general flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <Shield className="w-5 h-5 mr-2 text-[#73E212]" />
                    Current Subscription
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-[#73E212]/20 rounded-full flex items-center justify-center mx-auto">
                      <Shield className="w-10 h-10 text-[#73E212]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#73E212] text-xl">VIP Signals Plan</h3>
                      <p className="text-gray-400">$99/month</p>
                    </div>
                    <div className={`rounded-lg p-4 ${isDarkMode ? 'bg-[#73E212]/10' : 'bg-gray-50'}`}>
                      <p className="text-sm text-gray-400">Days Remaining</p>
                      <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>28</p>
                      <p className="text-xs text-gray-500">Renews on Feb 15, 2024</p>
                    </div>
                    <Button className="w-full bg-[#73E212] text-black font-semibold hover:bg-[#73E212]/90">
                      Upgrade Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'glass-card border-[#73E212]/20 bg-black/40' 
                  : 'border-gray-200 bg-white shadow-sm'
              }`}>
                <CardHeader>
                  <CardTitle className={`font-general ${isDarkMode ? 'text-white' : 'text-black'}`}>Plan Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      '5-7 Daily Premium Signals',
                      'Entry, Stop Loss & Take Profit',
                      'Multi-Market Coverage',
                      'Expert Analysis',
                      'Priority Support'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-full bg-[#73E212]/20 flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#73E212] rounded-full"></div>
                        </div>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* NEW PAYMENTS TAB */}
          <TabsContent value="payments" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Request Payout */}
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'glass-card border-[#73E212]/20 bg-black/40' 
                  : 'border-gray-200 bg-white shadow-sm'
              }`}>
                <CardHeader>
                  <CardTitle className={`font-general flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <CreditCard className="w-5 h-5 mr-2 text-[#73E212]" />
                    Request Payout
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Available Balance: $5,240.00
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!showPayoutForm ? (
                    <Button 
                      onClick={() => setShowPayoutForm(true)}
                      className="w-full bg-[#73E212] text-black font-semibold hover:bg-[#73E212]/90"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      New Payout Request
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">Amount (USD)</label>
                        <input
                          type="number"
                          value={payoutAmount}
                          onChange={(e) => setPayoutAmount(e.target.value)}
                          placeholder="Enter amount"
                          max="5240"
                          className={`w-full p-3 rounded border transition-colors ${
                            isDarkMode 
                              ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                              : 'bg-white border-gray-300 text-black'
                          }`}
                        />
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          onClick={handlePayoutRequest}
                          disabled={!payoutAmount || parseFloat(payoutAmount) <= 0}
                          className="flex-1 bg-[#73E212] text-black hover:bg-[#73E212]/90"
                        >
                          <Check className="w-4 h-4 mr-2" />
                          Confirm Request
                        </Button>
                        <Button 
                          onClick={() => {setShowPayoutForm(false); setPayoutAmount('');}}
                          variant="outline" 
                          className={`transition-colors ${
                            isDarkMode 
                              ? 'border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10' 
                              : 'border-[#73E212] text-[#73E212] hover:bg-[#73E212]/10'
                          }`}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Bank Account Settings */}
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'glass-card border-[#73E212]/20 bg-black/40' 
                  : 'border-gray-200 bg-white shadow-sm'
              }`}>
                <CardHeader>
                  <CardTitle className={`font-general flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <Building2 className="w-5 h-5 mr-2 text-[#73E212]" />
                    Bank Account Settings
                  </CardTitle>
                  {!canUpdateBankAccount() && (
                    <div className="flex items-center text-sm text-amber-500">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      Can update in {60 - Math.floor((Date.now() - new Date(bankAccount.lastUpdated).getTime()) / (1000 * 60 * 60 * 24))} days
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Account Name</label>
                    <input
                      type="text"
                      value={bankAccount.accountName}
                      onChange={(e) => setBankAccount({...bankAccount, accountName: e.target.value})}
                      disabled={!canUpdateBankAccount()}
                      className={`w-full p-3 rounded border transition-colors ${
                        isDarkMode 
                          ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      } ${!canUpdateBankAccount() ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Account Number</label>
                    <input
                      type="text"
                      value={bankAccount.accountNumber}
                      onChange={(e) => setBankAccount({...bankAccount, accountNumber: e.target.value})}
                      disabled={!canUpdateBankAccount()}
                      className={`w-full p-3 rounded border transition-colors ${
                        isDarkMode 
                          ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      } ${!canUpdateBankAccount() ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Bank Name</label>
                    <select
                      value={bankAccount.bankName}
                      onChange={(e) => setBankAccount({...bankAccount, bankName: e.target.value})}
                      disabled={!canUpdateBankAccount()}
                      className={`w-full p-3 rounded border transition-colors ${
                        isDarkMode 
                          ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      } ${!canUpdateBankAccount() ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <option value="">Select Bank</option>
                      {nigerianBanks.map((bank) => (
                        <option key={bank} value={bank}>{bank}</option>
                      ))}
                    </select>
                  </div>
                  <Button 
                    disabled={!canUpdateBankAccount()}
                    className="w-full bg-[#73E212] text-black hover:bg-[#73E212]/90 disabled:opacity-50"
                  >
                    Update Bank Details
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Next of Kin Details */}
            <Card className={`transition-colors duration-300 ${
              isDarkMode 
                ? 'glass-card border-[#73E212]/20 bg-black/40' 
                : 'border-gray-200 bg-white shadow-sm'
            }`}>
              <CardHeader>
                <CardTitle className={`font-general ${isDarkMode ? 'text-white' : 'text-black'}`}>Next of Kin Details</CardTitle>
                <CardDescription className="text-gray-400">
                  Used for inheritance transfers and emergency situations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Full Name</label>
                    <input
                      type="text"
                      value={nextOfKin.name}
                      onChange={(e) => setNextOfKin({...nextOfKin, name: e.target.value})}
                      className={`w-full p-3 rounded border transition-colors ${
                        isDarkMode 
                          ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Relationship</label>
                    <select
                      value={nextOfKin.relationship}
                      onChange={(e) => setNextOfKin({...nextOfKin, relationship: e.target.value})}
                      className={`w-full p-3 rounded border transition-colors ${
                        isDarkMode 
                          ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      }`}
                    >
                      <option value="">Select Relationship</option>
                      <option value="spouse">Spouse</option>
                      <option value="parent">Parent</option>
                      <option value="child">Child</option>
                      <option value="sibling">Sibling</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Account Name</label>
                    <input
                      type="text"
                      value={nextOfKin.accountName}
                      onChange={(e) => setNextOfKin({...nextOfKin, accountName: e.target.value})}
                      className={`w-full p-3 rounded border transition-colors ${
                        isDarkMode 
                          ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Account Number</label>
                    <input
                      type="text"
                      value={nextOfKin.accountNumber}
                      onChange={(e) => setNextOfKin({...nextOfKin, accountNumber: e.target.value})}
                      className={`w-full p-3 rounded border transition-colors ${
                        isDarkMode 
                          ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      }`}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-gray-400 mb-2 block">Bank Name</label>
                    <select
                      value={nextOfKin.bankName}
                      onChange={(e) => setNextOfKin({...nextOfKin, bankName: e.target.value})}
                      className={`w-full p-3 rounded border transition-colors ${
                        isDarkMode 
                          ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      }`}
                    >
                      <option value="">Select Bank</option>
                      {nigerianBanks.map((bank) => (
                        <option key={bank} value={bank}>{bank}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-[#73E212] text-black hover:bg-[#73E212]/90">
                  Save Next of Kin Details
                </Button>
              </CardContent>
            </Card>

            {/* Payout History */}
            <Card className={`transition-colors duration-300 ${
              isDarkMode 
                ? 'glass-card border-[#73E212]/20 bg-black/40' 
                : 'border-gray-200 bg-white shadow-sm'
            }`}>
              <CardHeader>
                <CardTitle className={`font-general ${isDarkMode ? 'text-white' : 'text-black'}`}>Payout History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={`border-b ${isDarkMode ? 'border-[#73E212]/20' : 'border-gray-200'}`}>
                        <th className="text-left py-3 text-gray-400 font-medium">Date</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Amount</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Status</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Bank</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Reference</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payoutHistory.map((payout, index) => (
                        <tr key={index} className={`border-b ${isDarkMode ? 'border-[#73E212]/10' : 'border-gray-100'}`}>
                          <td className={`py-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{payout.date}</td>
                          <td className={`py-3 font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{payout.amount}</td>
                          <td className="py-3">
                            <Badge 
                              variant={payout.status === 'Completed' ? 'default' : payout.status === 'Pending' ? 'secondary' : 'destructive'}
                              className={payout.status === 'Completed' ? 'bg-green-500 text-white' : ''}
                            >
                              {payout.status}
                            </Badge>
                          </td>
                          <td className="py-3 text-gray-400">{payout.bank}</td>
                          <td className="py-3 text-gray-400 font-mono text-sm">{payout.reference}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports & Insights */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'glass-card border-[#73E212]/20 bg-black/40' 
                  : 'border-gray-200 bg-white shadow-sm'
              }`}>
                <CardHeader>
                  <CardTitle className={`font-general flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <Download className="w-5 h-5 mr-2 text-[#73E212]" />
                    Monthly Reports
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { month: 'January 2024', roi: '+34.7%', trades: 28 },
                    { month: 'December 2023', roi: '+28.2%', trades: 31 },
                    { month: 'November 2023', roi: '+41.1%', trades: 26 }
                  ].map((report, index) => (
                    <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                      isDarkMode ? 'bg-[#73E212]/10' : 'bg-gray-50'
                    }`}>
                      <div>
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{report.month} Performance</p>
                        <p className="text-sm text-gray-400">ROI: {report.roi} | {report.trades} trades</p>
                      </div>
                      <Button variant="outline" size="sm" className={`transition-colors ${
                        isDarkMode 
                          ? 'border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10' 
                          : 'border-[#73E212] text-[#73E212] hover:bg-[#73E212]/10'
                      }`}>
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'glass-card border-[#73E212]/20 bg-black/40' 
                  : 'border-gray-200 bg-white shadow-sm'
              }`}>
                <CardHeader>
                  <CardTitle className={`font-general ${isDarkMode ? 'text-white' : 'text-black'}`}>Trading Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Win Rate', value: '87%' },
                      { label: 'Total Trades', value: '142' },
                      { label: 'Total Profit', value: '$8.2K' },
                      { label: 'Avg. Multiplier', value: '2.4x' }
                    ].map((stat, index) => (
                      <div key={index} className={`text-center p-3 rounded-lg ${
                        isDarkMode ? 'bg-[#73E212]/10' : 'bg-gray-50'
                      }`}>
                        <p className="text-2xl font-bold text-[#73E212]">{stat.value}</p>
                        <p className="text-sm text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Community Section */}
          <TabsContent value="community" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'glass-card border-[#73E212]/20 bg-black/40' 
                  : 'border-gray-200 bg-white shadow-sm'
              }`}>
                <CardHeader>
                  <CardTitle className={`font-general flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <Users className="w-5 h-5 mr-2 text-[#73E212]" />
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
                  <Button variant="outline" className={`w-full justify-start transition-colors ${
                    isDarkMode 
                      ? 'border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10' 
                      : 'border-[#73E212] text-[#73E212] hover:bg-[#73E212]/10'
                  }`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </CardContent>
              </Card>

              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'glass-card border-[#73E212]/20 bg-black/40' 
                  : 'border-gray-200 bg-white shadow-sm'
              }`}>
                <CardHeader>
                  <CardTitle className={`font-general ${isDarkMode ? 'text-white' : 'text-black'}`}>Enrolled Courses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-[#73E212]/10' : 'bg-gray-50'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Advanced Signal Analysis</p>
                      <Badge className="bg-[#73E212] text-black">Active</Badge>
                    </div>
                    <p className="text-sm text-gray-400">Progress: 65% complete</p>
                    <div className={`w-full rounded-full h-2 mt-2 ${isDarkMode ? 'bg-black/40' : 'bg-gray-200'}`}>
                      <div className="bg-[#73E212] h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-[#73E212]/10' : 'bg-gray-50'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Risk Management Mastery</p>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <p className="text-sm text-gray-400">Completed: Jan 10, 2024</p>
                  </div>
                  <Button variant="outline" className={`w-full transition-colors ${
                    isDarkMode 
                      ? 'border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10' 
                      : 'border-[#73E212] text-[#73E212] hover:bg-[#73E212]/10'
                  }`}>
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
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'glass-card border-[#73E212]/20 bg-black/40' 
                  : 'border-gray-200 bg-white shadow-sm'
              }`}>
                <CardHeader>
                  <CardTitle className={`font-general flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <User className="w-5 h-5 mr-2 text-[#73E212]" />
                    Profile Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue="John Doe"
                      className={`w-full p-3 rounded border transition-colors ${
                        isDarkMode 
                          ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Email</label>
                    <input 
                      type="email" 
                      defaultValue="john@example.com"
                      className={`w-full p-3 rounded border transition-colors ${
                        isDarkMode 
                          ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Phone</label>
                    <input 
                      type="tel" 
                      defaultValue="+1 (555) 123-4567"
                      className={`w-full p-3 rounded border transition-colors ${
                        isDarkMode 
                          ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      }`}
                    />
                  </div>
                  <Button className="w-full bg-[#73E212] text-black font-semibold hover:bg-[#73E212]/90">
                    Update Profile
                  </Button>
                </CardContent>
              </Card>

              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'glass-card border-[#73E212]/20 bg-black/40' 
                  : 'border-gray-200 bg-white shadow-sm'
              }`}>
                <CardHeader>
                  <CardTitle className={`font-general flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <Lock className="w-5 h-5 mr-2 text-[#73E212]" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: Lock, text: 'Change Password' },
                    { icon: Shield, text: 'Enable 2FA' },
                    { icon: Wallet, text: 'Link Wallets' },
                    { icon: Eye, text: 'Privacy Settings' }
                  ].map((item, index) => (
                    <Button key={index} variant="outline" className={`w-full justify-start transition-colors ${
                      isDarkMode 
                        ? 'border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10' 
                        : 'border-[#73E212] text-[#73E212] hover:bg-[#73E212]/10'
                    }`}>
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.text}
                    </Button>
                  ))}
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
