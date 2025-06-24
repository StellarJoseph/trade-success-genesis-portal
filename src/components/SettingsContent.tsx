import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  EyeOff, 
  Download, 
  ExternalLink, 
  Copy, 
  Trash2, 
  AlertTriangle,
  Check,
  X
} from 'lucide-react';

interface SettingsContentProps {
  activeSection: string;
  isDarkMode: boolean;
}

const SettingsContent = ({ activeSection, isDarkMode }: SettingsContentProps) => {
  const [showBalance, setShowBalance] = useState(true);
  const [deleteAccountStep, setDeleteAccountStep] = useState(0);

  const renderContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <Card className={`transition-colors duration-300 ${
            isDarkMode ? 'glass-card border-[#73E212]/20 bg-black/40' : 'border-gray-200 bg-white shadow-sm'
          }`}>
            <CardHeader>
              <CardTitle className={`${isDarkMode ? 'text-white' : 'text-[#000]'}`}>Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#2C2C2C]'} mb-2 block`}>Full Name</p>
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
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#2C2C2C]'} mb-2 block`}>Email</p>
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
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#2C2C2C]'} mb-2 block`}>Phone Number</p>
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
              <Button className={`bg-[#73E212] text-black hover:bg-[#73E212]/90 ${isDarkMode ? '' : 'bg-[#4CAF50]'}`}>
                Update Account Info
              </Button>
            </CardContent>
          </Card>
        );

      case 'trading':
        return (
          <Card className={`transition-colors duration-300 ${
            isDarkMode ? 'glass-card border-[#73E212]/20 bg-black/40' : 'border-gray-200 bg-white shadow-sm'
          }`}>
            <CardHeader>
              <CardTitle className={`${isDarkMode ? 'text-white' : 'text-[#000]'}`}>Trading Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#2C2C2C]'} mb-2 block`}>Preferred Signal Types</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Futures', 'Altcoins', 'Memecoins', 'Gemcoins'].map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="accent-[#73E212]" />
                      <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#2C2C2C]'} mb-2 block`}>Risk Level</p>
                <select className={`w-full p-3 rounded border transition-colors ${
                  isDarkMode 
                    ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                    : 'bg-white border-gray-300 text-black'
                }`}>
                  <option value="conservative">Conservative</option>
                  <option value="moderate">Moderate</option>
                  <option value="aggressive">Aggressive</option>
                </select>
              </div>
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#2C2C2C]'} mb-2 block`}>Preferred Exchange</p>
                <select className={`w-full p-3 rounded border transition-colors ${
                  isDarkMode 
                    ? 'bg-[#73E212]/10 border-[#73E212]/30 text-white' 
                    : 'bg-white border-gray-300 text-black'
                }`}>
                  <option value="binance">Binance</option>
                  <option value="bybit">Bybit</option>
                  <option value="mexc">MEXC</option>
                  <option value="kucoin">KuCoin</option>
                </select>
              </div>
              <Button className={`bg-[#73E212] text-black hover:bg-[#73E212]/90 ${isDarkMode ? '' : 'bg-[#4CAF50]'}`}>
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        );

      case 'portfolio':
        return (
          <Card className={`transition-colors duration-300 ${
            isDarkMode ? 'glass-card border-[#73E212]/20 bg-black/40' : 'border-gray-200 bg-white shadow-sm'
          }`}>
            <CardHeader>
              <CardTitle className={`${isDarkMode ? 'text-white' : 'text-[#000]'}`}>Portfolio & Wallet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Hide Balance</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#2C2C2C]'}`}>Show/hide portfolio values</p>
                </div>
                <Switch 
                  checked={!showBalance}
                  onCheckedChange={(checked) => setShowBalance(!checked)}
                  className="data-[state=checked]:bg-[#73E212]"
                />
              </div>
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#2C2C2C]'} mb-2 block`}>Connected Wallets</p>
                <div className="space-y-2">
                  <div className={`p-3 rounded border flex items-center justify-between ${
                    isDarkMode ? 'border-[#73E212]/30 bg-[#73E212]/10' : 'border-gray-300 bg-gray-50'
                  }`}>
                    <span className={`font-mono text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      0x1234...5678
                    </span>
                    <Badge className="bg-[#73E212] text-black">Connected</Badge>
                  </div>
                </div>
                <Button variant="outline" className={`mt-2 transition-colors ${
                  isDarkMode 
                    ? 'border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10' 
                    : 'border-[#73E212] text-[#73E212] hover:bg-[#73E212]/10'
                }`}>
                  Add New Wallet
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case 'management':
        return (
          <Card className={`transition-colors duration-300 ${
            isDarkMode ? 'glass-card border-[#73E212]/20 bg-black/40' : 'border-gray-200 bg-white shadow-sm'
          }`}>
            <CardHeader>
              <CardTitle className={`${isDarkMode ? 'text-white' : 'text-[#000]'}`}>Account Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className={`p-4 rounded-lg border ${
                isDarkMode ? 'border-red-500/30 bg-red-500/10' : 'border-red-300 bg-red-50'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <h3 className="font-semibold text-red-500">Danger Zone</h3>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#666]'} mb-4`}>
                  These actions are permanent and cannot be undone.
                </p>
                
                {deleteAccountStep === 0 && (
                  <Button 
                    variant="destructive"
                    onClick={() => setDeleteAccountStep(1)}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                )}

                {deleteAccountStep === 1 && (
                  <div className="space-y-3">
                    <p className={`text-sm ${isDarkMode ? 'text-red-400' : 'text-[#2C2C2C]'}`}>
                      Are you sure? This will permanently delete your account and all data.
                    </p>
                    <div className="flex space-x-2">
                      <Button 
                        variant="destructive"
                        onClick={() => setDeleteAccountStep(2)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        Yes, Delete
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => setDeleteAccountStep(0)}
                        className="border-gray-500 text-gray-400"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}

                {deleteAccountStep === 2 && (
                  <div className="space-y-3">
                    <p className={`text-sm ${isDarkMode ? 'text-red-400' : 'text-[#2C2C2C]'}`}>
                      Type "DELETE" to confirm account deletion:
                    </p>
                    <input 
                      type="text" 
                      placeholder="Type DELETE"
                      className="w-full p-2 rounded border border-red-500 bg-red-500/10 text-white"
                    />
                    <div className="flex space-x-2">
                      <Button 
                        variant="destructive"
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Confirm Deletion
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => setDeleteAccountStep(0)}
                        className="border-gray-500 text-gray-400"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );

      default:
        return (
          <Card className={`transition-colors duration-300 ${
            isDarkMode ? 'glass-card border-[#73E212]/20 bg-black/40' : 'border-gray-200 bg-white shadow-sm'
          }`}>
            <CardContent className="p-8 text-center">
              <p className={`text-gray-400 ${isDarkMode ? '' : 'text-[#666]'}`}>Select a section from the sidebar to view settings.</p>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="flex-1 p-6">
      {renderContent()}
    </div>
  );
};

export default SettingsContent;
