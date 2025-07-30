import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import NotificationsModal from '@/components/NotificationsModal';
import SettingsSidebar from '@/components/SettingsSidebar';
import SettingsContent from '@/components/SettingsContent';
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
  Building2,
  ChevronDown,
  Check as CheckIcon,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [payoutAmount, setPayoutAmount] = useState('');
  const [showPayoutForm, setShowPayoutForm] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [activeSettingsSection, setActiveSettingsSection] = useState('account');
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
  const [bankAccountOpen, setBankAccountOpen] = useState(false);
  const [nextOfKinBankOpen, setNextOfKinBankOpen] = useState(false);
  const paymentHistoryRef = useRef<HTMLDivElement>(null);

  const scrollToPaymentHistory = () => {
    paymentHistoryRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

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
    'Access Bank Plc.',
    'Alpha Morgan Bank Limited',
    'Citibank Nigeria Limited',
    'Ecobank Nigeria Limited',
    'Fidelity Bank Plc.',
    'First Bank of Nigeria Limited',
    'First City Monument Bank Limited',
    'Globus Bank Limited',
    'Guaranty Trust Bank Limited',
    'Keystone Bank Limited',
    'Optimus Bank',
    'Parallex Bank Limited',
    'Polaris Bank Limited',
    'Premium Trust Bank',
    'Providus Bank Plc.',
    'Signature Bank Limited',
    'Stanbic IBTC Bank Plc.',
    'Standard Chartered Bank Limited',
    'Sterling Bank Plc.',
    'Summit Bank Limited',
    'SunTrust Bank Limited',
    'Titan Trust Bank',
    'Union Bank of Nigeria',
    'United Bank for Africa (UBA)',
    'Unity Bank',
    'Wema Bank',
    'Zenith Bank',
    'FairMoney MFB',
    'Kuda MFB',
    'MoniePoint MFB',
    'Opay MFB (PAYCOM)',
    'PalmPay MFB',
    'Sparkle MFB',
    'VFD MFB'
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

  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout functionality
    console.log('Logging out');
    navigate('/login');
  };

  return (
    <DashboardLayout>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#000000] text-[#F0F0F0]' : 'bg-[#FFFFFF] text-[#2C2C2C]'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card className={`transition-colors duration-300 hover:shadow-lg hover:shadow-[#a162e7]/30 ${isDarkMode
              ? 'bg-gradient-to-br from-[#a162e7] to-[#a162e7]/90 border-[#a162e7]/30'
              : 'bg-gradient-to-br from-[#a162e7] to-[#a162e7]/90 border-[#a162e7]/30'
            }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80 font-medium">TOTAL PORTFOLIO</p>
                  <p className="text-2xl font-bold text-white">$28,290</p>
                  <p className="text-sm text-white/90 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    +15.2% this month
                  </p>
                </div>
                <Wallet className="w-8 h-8 text-white" />
              </div>
            </CardContent>
          </Card>

          <Card className={`transition-colors duration-300 hover:shadow-lg hover:shadow-[#ffab2f]/30 ${isDarkMode
              ? 'bg-gradient-to-br from-[#ffab2f] to-[#ffab2f]/90 border-[#ffab2f]/30'
              : 'bg-gradient-to-br from-[#ffab2f] to-[#ffab2f]/90 border-[#ffab2f]/30'
            }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80 font-medium">TOTAL PROFITS</p>
                  <p className="text-2xl font-bold text-white">$2,955</p>
                  <p className="text-sm text-white/90 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    +34.7% this month
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </CardContent>
          </Card>

          <Card className={`transition-colors duration-300 hover:shadow-lg hover:shadow-[#dc3ccd]/30 ${isDarkMode
              ? 'bg-gradient-to-br from-[#dc3ccd] to-[#dc3ccd]/90 border-[#dc3ccd]/30'
              : 'bg-gradient-to-br from-[#dc3ccd] to-[#dc3ccd]/90 border-[#dc3ccd]/30'
            }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80 font-medium">PROFITS THIS MONTH</p>
                  <p className="text-2xl font-bold text-white">$1,245</p>
                  <p className="text-sm text-white/90 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    +28.3% vs last month
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </CardContent>
          </Card>

          <Card className={`transition-colors duration-300 hover:shadow-lg hover:shadow-[#2c99d5]/30 ${isDarkMode
              ? 'bg-gradient-to-br from-[#2c99d5] to-[#2c99d5]/90 border-[#2c99d5]/30'
              : 'bg-gradient-to-br from-[#2c99d5] to-[#2c99d5]/90 border-[#2c99d5]/30'
            }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80 font-medium">WITHDRAWABLE BALANCE</p>
                  <p className="text-2xl font-bold text-white">$5,240</p>
                  <p className="text-sm text-white/80">Next Withdrawal: Jan 10, 2024</p>
                </div>
                <DollarSign className="w-8 h-8 text-white" />
              </div>
            </CardContent>
          </Card>

          <Card className={`transition-colors duration-300 hover:shadow-lg hover:shadow-[#75ffe9]/30 ${isDarkMode
              ? 'bg-gradient-to-br from-[#75ffe9] to-[#75ffe9]/90 border-[#75ffe9]/30'
              : 'bg-gradient-to-br from-[#75ffe9] to-[#75ffe9]/90 border-[#75ffe9]/30'
            }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black/80 font-medium">TOTAL TRADES</p>
                  <p className="text-2xl font-bold text-black">142</p>
                  <p className="text-sm text-black/80">87% success rate</p>
                </div>
                <Signal className="w-8 h-8 text-black" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="portfolio" className="space-y-6">
          <TabsList className={`grid w-full grid-cols-7 gap-2 p-2 ${isDarkMode
              ? 'bg-[#000000] border-[#73E212]/30'
              : 'bg-[#FFFFFF] border-[#131240]/30'}`}>
            <TabsTrigger
              value="portfolio"
                className="data-[state=active]:bg-[#73E212] data-[state=active]:text-white text-white">
              Portfolio
            </TabsTrigger>
            <TabsTrigger
              value="signals"
              className="data-[state=active]:bg-[#75ffe9] data-[state=active]:text-white text-white">
              Live Signals
            </TabsTrigger>
            <TabsTrigger
              value="subscription"
              className="data-[state=active]:bg-[#0A8974] data-[state=active]:text-white text-white">
              Subscription
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="data-[state=active]:bg-[#ffab2f] data-[state=active]:text-white text-white">
              Reports
            </TabsTrigger>
            <TabsTrigger
              value="payments"
              className="data-[state=active]:bg-[#dc3ccd] data-[state=active]:text-white text-white">
              Payments
            </TabsTrigger>
            <TabsTrigger
              value="community"
              className="data-[state=active]:bg-[#1e88e5] data-[state=active]:text-white text-white">
              Community
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-[#5635BB] data-[state=active]:text-white text-white">
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Portfolio Overview */}
          <TabsContent value="portfolio" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className={`rounded-xl ${isDarkMode ? 'bg-black/40' : 'bg-[#a162e7]'} border-none shadow-none`}>
                  <CardHeader>
                    <CardTitle className={`font-general flex items-center justify-between ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      <div className="flex items-center">
                        <Wallet className="w-5 h-5 mr-2 text-white" />
                        Portfolio Overview
                      </div>
                      <Button variant="outline" size="sm" className="border-none text-white bg-[#a162e7]">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Refresh
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {portfolioData.map((asset, index) => (
                        <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${isDarkMode ? 'bg-[#73E212]/10' : 'bg-[#a162e7]'}`}>
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{asset.token}</span>
                            </div>
                            <div>
                              <p className="font-semibold text-white">{asset.token}</p>
                              <p className="text-sm text-white/80">{asset.balance} {asset.token}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-white">{asset.value}</p>
                            <p className={`text-sm flex items-center ${asset.change.startsWith('+') ? 'text-green-200' : asset.change.startsWith('-') ? 'text-red-200' : 'text-white/80'}`}>
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
                <Card className={`rounded-xl ${isDarkMode ? 'bg-black/40' : 'bg-[#75ffe9]'} border-none shadow-none`}>
                  <CardHeader>
                    <CardTitle className="font-general text-lg flex items-center text-[#041260]">
                      <TrendingUp className="w-5 h-5 mr-2 text-white" />
                      Live Market Data
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {marketData.map((coin, index) => (
                        <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${isDarkMode ? 'bg-[#73E212]/10' : 'bg-[#75ffe9]'}`}>
                          <div>
                            <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{coin.symbol}</p>
                            <p className="text-sm text-[#73E212]/70">${coin.price.toLocaleString()}</p>
                          </div>
                          <div className="text-right">
                            <p className={`text-sm font-medium ${coin.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {coin.change >= 0 ? '+' : ''}{coin.change}%
                            </p>
                            <p className="text-xs text-[#73E212]/70">{coin.sparkline}</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Card className={`rounded-xl ${isDarkMode ? 'bg-black/40' : 'bg-white'} border-none shadow-none`}>
                  <CardHeader>
                    <CardTitle className={`font-general flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      <Signal className="w-5 h-5 mr-2 text-white" />
                      Live Signals Feed
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {filteredSignals.map((signal, index) => (
                        <div key={index} className={`p-4 rounded-lg border ${isDarkMode ? 'bg-[#73E212]/10 border-[#73E212]/20 text-white' : 'bg-white border-gray-200 text-black'}`}>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <Badge variant={signal.type === 'Long' ? 'default' : 'destructive'} className={`${isDarkMode ? 'bg-white text-[#041260]' : 'bg-[#e5e7eb] text-black'}`}>
                                {signal.type}
                              </Badge>
                              <span className={`font-semibold ${isDarkMode ? 'text-[#041260]' : 'text-black'}`}>{signal.token}</span>
                              <Badge variant="outline" className={`${isDarkMode ? 'border-[#041260]/30 text-[#041260]' : 'border-gray-300 text-black'}`}>
                                {signal.category}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant={signal.status === 'Active' ? 'default' : signal.status === 'Closed' ? 'secondary' : 'outline'} className={`${isDarkMode ? '' : 'bg-[#e5e7eb] text-black'}`}>
                                {signal.status}
                              </Badge>
                              <span className={`text-xs ${isDarkMode ? 'text-[#041260]/70' : 'text-black/70'}`}>{signal.orderType}</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className={`${isDarkMode ? 'text-[#041260]/70' : 'text-black/70'}`}>Entry</p>
                              <p className={`font-medium ${isDarkMode ? 'text-[#041260]' : 'text-black'}`}>{signal.entry}</p>
                            </div>
                            <div>
                              <p className={`${isDarkMode ? 'text-[#041260]/70' : 'text-black/70'}`}>Stop Loss</p>
                              <p className="text-red-400 font-medium">{signal.sl}</p>
                            </div>
                            <div>
                              <p className={`${isDarkMode ? 'text-[#041260]/70' : 'text-black/70'}`}>Take Profit</p>
                              <p className="text-green-700 font-medium">{signal.tp}</p>
                            </div>
                          </div>
                          {signal.profit && (
                            <div className="mt-3 pt-3 border-t border-[#041260]/20">
                              <p className="text-sm text-green-700 font-semibold flex items-center">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                Profit: {signal.profit}
                              </p>
                            </div>
                          )}
                          <div className={`mt-2 text-xs ${isDarkMode ? 'text-[#041260]/60' : 'text-black/60'}`}>
                            Signal Date: {signal.date}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Subscription Status */}
          <TabsContent value="subscription" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Card className={`rounded-xl ${isDarkMode ? 'bg-black/40' : 'bg-[#f8f9fa]'} border border-[#e5e7eb] shadow-sm`}>
                  <CardHeader>
                    <CardTitle className="font-general flex items-center text-white">
                      <Shield className="w-5 h-5 mr-2 text-white" />
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
                        <p className="text-[#73E212]/70">$99/month</p>
                      </div>
                      <div className={`rounded-lg p-4 ${isDarkMode ? 'bg-[#73E212]/10' : 'bg-[#f8f9fa]'}`}>
                        <p className="text-sm text-[#73E212]/70">Days Remaining</p>
                        <p className="text-xs text-[#73E212]/60">Renews on Feb 15, 2024</p>
                      </div>
                      <Button className="w-full bg-[#73E212] text-black font-semibold hover:bg-[#73E212]/90">
                        Upgrade Plan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className={`rounded-xl ${isDarkMode ? 'bg-black/40' : 'bg-[#f8f9fa]'} border border-[#e5e7eb] shadow-sm`}>
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
                        <span className="text-[#73E212]/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            </div>
          </TabsContent>

          {/* NEW PAYMENTS TAB */}
          <TabsContent value="payments" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Top Left: Payments */}
              <div>
                <Card className={`rounded-xl ${isDarkMode ? 'bg-black/40' : 'bg-[#ffab2f]'} border-none shadow-none`}>
                  <CardHeader>
                    <CardTitle className="font-general flex items-center text-white">
                      <CreditCard className="w-5 h-5 mr-2 text-white" />
                      Payments
                    </CardTitle>
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
                          <label className="text-sm text-[#73E212]/70 mb-2 block">Amount (USD)</label>
                          <input
                            type="number"
                            value={payoutAmount}
                            onChange={(e) => setPayoutAmount(e.target.value)}
                            placeholder="Enter amount"
                            max="5240"
                            className={`w-full p-3 rounded border transition-colors ${isDarkMode
                                ? 'bg-black border-[#73E212]/30 text-white'
                                : 'bg-white border-[#131240]/30 text-black'
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
                            onClick={() => { setShowPayoutForm(false); setPayoutAmount(''); }}
                            variant="outline"
                            className={`transition-colors ${isDarkMode
                                ? 'border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10'
                                : 'border-[#131240]/30 text-[#131240] hover:bg-[#131240]/10'
                              }`}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              {/* Top Right: Bank Account Settings */}
              <div>
                <Card className={`rounded-xl ${isDarkMode ? 'bg-black/40' : 'bg-[#131240]/10'} border-none shadow-none`}>
                  <CardHeader>
                    <CardTitle className="font-general flex items-center text-white">
                      <Building2 className="w-5 h-5 mr-2 text-white" />
                      Bank Account Settings
                    </CardTitle>
                    {!canUpdateBankAccount() && (
                      <div className="flex items-center text-sm text-[#73E212]">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Can update in {60 - Math.floor((Date.now() - new Date(bankAccount.lastUpdated).getTime()) / (1000 * 60 * 60 * 24))} days
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm text-[#73E212]/70 mb-2 block">Account Name</label>
                      <input
                        type="text"
                        value={bankAccount.accountName}
                        onChange={(e) => setBankAccount({ ...bankAccount, accountName: e.target.value })}
                        disabled={!canUpdateBankAccount()}
                        className={`w-full p-3 rounded border transition-colors ${isDarkMode
                            ? 'bg-black border-[#73E212]/30 text-white'
                            : 'bg-white border-[#131240]/30 text-black'
                          } ${!canUpdateBankAccount() ? 'opacity-50 cursor-not-allowed' : ''}`}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-[#73E212]/70 mb-2 block">Account Number</label>
                      <input
                        type="text"
                        value={bankAccount.accountNumber}
                        onChange={(e) => setBankAccount({ ...bankAccount, accountNumber: e.target.value })}
                        disabled={!canUpdateBankAccount()}
                        className={`w-full p-3 rounded border transition-colors ${isDarkMode
                            ? 'bg-black border-[#73E212]/30 text-white'
                            : 'bg-white border-[#131240]/30 text-black'
                          } ${!canUpdateBankAccount() ? 'opacity-50 cursor-not-allowed' : ''}`}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-[#73E212]/70 mb-2 block">Bank Name</label>
                      <Popover open={bankAccountOpen} onOpenChange={setBankAccountOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={bankAccountOpen}
                            disabled={!canUpdateBankAccount()}
                            className={`w-full justify-between ${isDarkMode
                              ? 'bg-black border-[#73E212]/30 text-white hover:bg-[#73E212]/10'
                              : 'bg-white border-[#131240]/30 text-black hover:bg-[#131240]/10'}`}
                          >
                            {bankAccount.bankName || "Select bank..."}
                            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className={`w-full p-0 ${isDarkMode ? 'bg-black border-[#73E212]/30' : 'bg-white border-[#131240]/30'}`}>
                          <Command>
                            <CommandInput
                              placeholder="Search bank..."
                              className={`${isDarkMode ? 'text-white' : 'text-black'}`}
                            />
                            <CommandList>
                              <CommandEmpty>No bank found.</CommandEmpty>
                              <CommandGroup>
                                {nigerianBanks.map((bank) => (
                                  <CommandItem
                                    key={bank}
                                    value={bank}
                                    onSelect={(currentValue) => {
                                      setBankAccount({ ...bankAccount, bankName: currentValue });
                                      setBankAccountOpen(false);
                                    }}
                                    className={`cursor-pointer ${isDarkMode ? 'hover:bg-[#73E212]/20' : 'hover:bg-[#131240]/20'}`}
                                  >
                                    <CheckIcon
                                      className={`mr-2 h-4 w-4 ${bankAccount.bankName === bank ? "opacity-100" : "opacity-0"
                                        }`}
                                    />
                                    {bank}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
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
              {/* Bottom Left: Payout History */}
              <div>
                <Card ref={paymentHistoryRef} className={`rounded-xl ${isDarkMode ? 'bg-black/40' : 'bg-[#131240]/10'} border-none shadow-none`}>
                  <CardHeader>
                    <CardTitle className={`font-general ${isDarkMode ? 'text-white' : 'text-black'}`}>Payout History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className={`border-b ${isDarkMode ? 'border-[#73E212]/20' : 'border-[#131240]/20'}`}>
                            <th className="text-left py-3 text-[#73E212]/70 font-medium">Date</th>
                            <th className="text-left py-3 text-[#73E212]/70 font-medium">Amount</th>
                            <th className="text-left py-3 text-[#73E212]/70 font-medium">Status</th>
                            <th className="text-left py-3 text-[#73E212]/70 font-medium">Bank</th>
                            <th className="text-left py-3 text-[#73E212]/70 font-medium">Reference</th>
                          </tr>
                        </thead>
                        <tbody>
                          {payoutHistory.map((payout, index) => (
                            <tr key={index} className={`border-b ${isDarkMode ? 'border-[#73E212]/10' : 'border-[#131240]/10'}`}>
                              <td className="py-3 text-[#73E212]/70">{payout.date}</td>
                              <td className="py-3 font-semibold text-[#73E212]/70">{payout.amount}</td>
                              <td className="py-3">
                                <Badge
                                  variant={payout.status === 'Completed' ? 'default' : payout.status === 'Pending' ? 'secondary' : 'destructive'}
                                  className={payout.status === 'Completed' ? 'bg-green-500 text-white' : ''}
                                >
                                  {payout.status}
                                </Badge>
                              </td>
                              <td className="py-3 text-[#73E212]/70">{payout.bank}</td>
                              <td className="py-3 text-[#73E212]/70 font-mono text-sm">{payout.reference}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
              {/* Bottom Right: Next of Kin Details */}
              <div>
                <Card className={`rounded-xl ${isDarkMode ? 'bg-black/40' : 'bg-[#0A8974]'} border-none shadow-none`}>
                  <CardHeader>
                    <CardTitle className={`font-general ${isDarkMode ? 'text-white' : 'text-black'}`}>Next of Kin Details</CardTitle>
                    <CardDescription className={`${isDarkMode ? 'text-white/90' : 'text-black/70'}`}>
                      Used for inheritance transfers and emergency situations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-[#73E212]/70 mb-2 block">Full Name</label>
                        <input
                          type="text"
                          value={nextOfKin.name}
                          onChange={(e) => setNextOfKin({ ...nextOfKin, name: e.target.value })}
                          className={`w-full p-3 rounded border transition-colors ${isDarkMode
                              ? 'bg-black border-[#73E212]/30 text-white'
                              : 'bg-white border-[#131240]/30 text-black'
                            }`}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-[#73E212]/70 mb-2 block">Relationship</label>
                        <select
                          value={nextOfKin.relationship}
                          onChange={(e) => setNextOfKin({ ...nextOfKin, relationship: e.target.value })}
                          className={`w-full p-3 rounded border transition-colors ${isDarkMode
                              ? 'bg-black border-[#73E212]/30 text-white'
                              : 'bg-white border-[#131240]/30 text-black'
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
                        <label className="text-sm text-[#73E212]/70 mb-2 block">Account Name</label>
                        <input
                          type="text"
                          value={nextOfKin.accountName}
                          onChange={(e) => setNextOfKin({ ...nextOfKin, accountName: e.target.value })}
                          className={`w-full p-3 rounded border transition-colors ${isDarkMode
                              ? 'bg-black border-[#73E212]/30 text-white'
                              : 'bg-white border-[#131240]/30 text-black'
                            }`}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-[#73E212]/70 mb-2 block">Account Number</label>
                        <input
                          type="text"
                          value={nextOfKin.accountNumber}
                          onChange={(e) => setNextOfKin({ ...nextOfKin, accountNumber: e.target.value })}
                          className={`w-full p-3 rounded border transition-colors ${isDarkMode
                              ? 'bg-black border-[#73E212]/30 text-white'
                              : 'bg-white border-[#131240]/30 text-black'
                            }`}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="flex">
              <SettingsSidebar
                activeSection={activeSettingsSection}
                onSectionChange={setActiveSettingsSection}
                isDarkMode={isDarkMode}
              />
              <SettingsContent
                activeSection={activeSettingsSection}
                isDarkMode={isDarkMode}
                onToggleDarkMode={setIsDarkMode}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default Dashboard;