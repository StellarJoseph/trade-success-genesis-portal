import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  Bell, 
  Shield, 
  MessageSquare, 
  CreditCard, 
  TrendingUp, 
  LogOut,
  Image as ImageIcon,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Calendar,
  Filter
} from 'lucide-react';
import ChartManagement from '@/components/ChartManagement';
import DashboardUpdatesPanel from '@/components/admin/DashboardUpdatesPanel';
import UserManagementPanel from '@/components/admin/UserManagementPanel';
import LiveSignalsPanel from '@/components/admin/LiveSignalsPanel';
import UploadReportsPanel from '@/components/admin/UploadReportsPanel';
import BroadcastNotificationsPanel from '@/components/admin/BroadcastNotificationsPanel';
import PayoutRequestsPanel from '@/components/admin/PayoutRequestsPanel';
import ApprovalsPanel from '@/components/admin/ApprovalsPanel';
import NotificationsPanel from '@/components/admin/NotificationsPanel';
import PaymentRequestsPanel from '@/components/admin/PaymentRequestsPanel';
import SupportInboxPanel from '@/components/admin/SupportInboxPanel';
import SettingsPanel from '@/components/admin/SettingsPanel';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);

  const handleLogout = () => {
    // Handle logout logic
    console.log('Admin logged out');
    window.location.href = '/admin/login';
  };

  const sections = [
    { key: 'overview', label: 'Overview', icon: BarChart3 },
    { key: 'dashboard-updates', label: 'Dashboard Updates', icon: BarChart3 },
    { key: 'manage-users', label: 'Manage Users', icon: Users },
    { key: 'live-signals', label: 'Live Signals', icon: TrendingUp },
    { key: 'upload-reports', label: 'Upload Reports', icon: Upload },
    { key: 'broadcast-notifications', label: 'Broadcast Notifications', icon: Bell },
    { key: 'payment-requests', label: 'Payment Requests', icon: CreditCard },
    { key: 'approvals-panel', label: 'Approvals Panel', icon: Shield },
    { key: 'charts', label: 'Chart Management', icon: ImageIcon },
    { key: 'signals', label: 'Live Signals', icon: TrendingUp },
    { key: 'reports', label: 'Reports & Analytics', icon: FileText },
    { key: 'notifications', label: 'Notifications', icon: Bell },
    { key: 'support-inbox', label: 'Support Inbox', icon: MessageSquare },
    { key: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard Overview</h1>
              <p className="text-[#73E212]/70">Welcome back! Here's what's happening on your platform today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="glass-card border-[#73E212]/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#73E212]/70">Total Users</p>
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
                      <p className="text-sm text-[#73E212]/70">Active Charts</p>
                      <p className="text-2xl font-bold text-[#73E212]">89</p>
                      <p className="text-sm text-green-400">+5 new today</p>
                    </div>
                    <ImageIcon className="w-8 h-8 text-[#73E212]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-[#73E212]/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#73E212]/70">Pending Approvals</p>
                      <p className="text-2xl font-bold text-[#73E212]">23</p>
                      <p className="text-sm text-yellow-400">Requires attention</p>
                    </div>
                    <Shield className="w-8 h-8 text-[#73E212]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-[#73E212]/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#73E212]/70">Revenue</p>
                      <p className="text-2xl font-bold text-[#73E212]">$45,290</p>
                      <p className="text-sm text-green-400">+18% this month</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-[#73E212]" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card border-[#73E212]/20">
                <CardHeader>
                  <CardTitle className="text-white font-general">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: 'New chart uploaded', user: 'John Doe', time: '2 minutes ago' },
                      { action: 'User registration', user: 'Sarah Smith', time: '5 minutes ago' },
                      { action: 'Payment processed', user: 'Mike Johnson', time: '10 minutes ago' },
                      { action: 'Signal sent', user: 'Admin', time: '15 minutes ago' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#73E212] rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-white text-sm">{item.action}</p>
                          <p className="text-[#73E212]/70 text-xs">by {item.user} • {item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-[#73E212]/20">
                <CardHeader>
                  <CardTitle className="text-white font-general">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      onClick={() => setActiveSection('charts')}
                      className="bg-[#73E212] text-black hover:bg-[#73E212]/90"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Chart
                    </Button>
                    <Button 
                      onClick={() => setActiveSection('broadcast-notifications')}
                      variant="outline"
                      className="border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10"
                    >
                      <Bell className="w-4 h-4 mr-2" />
                      Send Alert
                    </Button>
                    <Button 
                      onClick={() => setActiveSection('manage-users')}
                      variant="outline"
                      className="border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Manage Users
                    </Button>
                    <Button 
                      onClick={() => setActiveSection('reports')}
                      variant="outline"
                      className="border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      View Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'dashboard-updates':
        return <DashboardUpdatesPanel />;
      case 'manage-users':
        return <UserManagementPanel />;
      case 'live-signals':
        return <LiveSignalsPanel />;
      case 'upload-reports':
        return <UploadReportsPanel />;
      case 'broadcast-notifications':
        return <BroadcastNotificationsPanel />;
      case 'payout-requests':
        return <PayoutRequestsPanel />;
      case 'approvals-panel':
        return <ApprovalsPanel />;
      case 'charts':
        return <ChartManagement />;
      case 'signals':
        return <LiveSignalsPanel />;
      case 'reports':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="glass-card border-[#73E212]/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#73E212]/70">Total Users</p>
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
                      <p className="text-sm text-[#73E212]/70">Active Charts</p>
                      <p className="text-2xl font-bold text-[#73E212]">89</p>
                      <p className="text-sm text-green-400">+5 new today</p>
                    </div>
                    <ImageIcon className="w-8 h-8 text-[#73E212]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-[#73E212]/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#73E212]/70">Pending Approvals</p>
                      <p className="text-2xl font-bold text-[#73E212]">23</p>
                      <p className="text-sm text-yellow-400">Requires attention</p>
                    </div>
                    <Shield className="w-8 h-8 text-[#73E212]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-[#73E212]/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#73E212]/70">Revenue</p>
                      <p className="text-2xl font-bold text-[#73E212]">$45,290</p>
                      <p className="text-sm text-green-400">+18% this month</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-[#73E212]" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card border-[#73E212]/20">
                <CardHeader>
                  <CardTitle className="text-white font-general">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: 'New chart uploaded', user: 'John Doe', time: '2 minutes ago' },
                      { action: 'User registration', user: 'Sarah Smith', time: '5 minutes ago' },
                      { action: 'Payment processed', user: 'Mike Johnson', time: '10 minutes ago' },
                      { action: 'Signal sent', user: 'Admin', time: '15 minutes ago' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#73E212] rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-white text-sm">{item.action}</p>
                          <p className="text-[#73E212]/70 text-xs">by {item.user} • {item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-[#73E212]/20">
                <CardHeader>
                  <CardTitle className="text-white font-general">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      onClick={() => setActiveSection('charts')}
                      className="bg-[#73E212] text-black hover:bg-[#73E212]/90"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Chart
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10"
                    >
                      <Bell className="w-4 h-4 mr-2" />
                      Send Alert
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Manage Users
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      View Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'notifications':
        return <NotificationsPanel />;
      case 'payment-requests':
        return <PaymentRequestsPanel />;
      case 'support-inbox':
        return <SupportInboxPanel />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-[#73E212]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              {React.createElement(sections.find(s => s.key === activeSection)?.icon || Settings, { 
                className: "w-8 h-8 text-[#73E212]" 
              })}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {sections.find(s => s.key === activeSection)?.label}
            </h3>
            <p className="text-[#73E212]/70">This section is coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-[#73E212]/20 bg-black/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750696761/TS_LOGO_juw9he.png" 
                alt="TradeSuccess.VIP Logo" 
                className="w-10 h-10"
              />
              <div>
                <h1 className="text-xl font-bold text-white font-general">Admin Dashboard</h1>
                <p className="text-sm text-[#73E212]/70">Platform Management Center</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout}
                className="transition-all duration-300 hover:bg-[#73E212]/10 hover:shadow-lg hover:shadow-[#73E212]/20 text-[#73E212]/80 hover:text-[#73E212]"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-black/80 border-r border-[#73E212]/20 flex flex-col py-6 px-2">
          <nav className="space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.key
                      ? 'bg-[#73E212]/20 text-[#73E212] border border-[#73E212] shadow-lg'
                      : 'text-[#73E212]/80 hover:text-[#73E212] hover:border-[#73E212] hover:shadow-[0_0_8px_2px_#73E212] border border-transparent'
                  }`}
                  style={{ boxShadow: activeSection === section.key ? '0 0 8px 2px #73E212' : undefined }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{section.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="container mx-auto">
            {renderSectionContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
