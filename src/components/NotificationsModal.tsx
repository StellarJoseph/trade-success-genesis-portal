import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { X, Bell, Mail, MessageCircle, Phone, Send } from 'lucide-react';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

const NotificationsModal = ({ isOpen, onClose, isDarkMode }: NotificationsModalProps) => {
  const [notifications, setNotifications] = useState({
    email: true, // Always enabled
    whatsapp: true,
    telegram: false,
    sms: true
  });

  const [alertTypes, setAlertTypes] = useState({
    payouts: true,
    withdrawals: true,
    weeklyReports: false
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className={`w-full max-w-2xl transition-colors duration-300 ${
        isDarkMode 
          ? 'glass-card border-[#73E212]/20 bg-black/90' 
          : 'border-gray-200 bg-white shadow-lg'
      }`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-[#73E212]" />
              <CardTitle className={`font-general ${isDarkMode ? 'text-white' : 'text-[#000]'}`}>
                Notification Preferences
              </CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className={`transition-colors ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-white/10' 
                  : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <CardDescription className={`${isDarkMode ? 'text-gray-400' : 'text-[#666]'}`}>
            Choose how you want to receive account alerts and updates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Notification Channels */}
          <div>
            <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Notification Channels
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#73E212]" />
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Email</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#2C2C2C]'}`}>Always enabled for security</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.email} 
                  disabled
                  className="data-[state=checked]:bg-[#73E212] opacity-60"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-[#73E212]" />
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>WhatsApp</p>
                    <p className={`text-sm ${isDarkMode ? 'text-[#73E212]/70' : 'text-[#2C2C2C]/70'}`}>Instant notifications</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.whatsapp}
                  onCheckedChange={(checked) => setNotifications({...notifications, whatsapp: checked})}
                  className="data-[state=checked]:bg-[#73E212]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Send className="w-5 h-5 text-[#73E212]" />
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Telegram</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#2C2C2C]'}`}>Bot notifications</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.telegram}
                  onCheckedChange={(checked) => setNotifications({...notifications, telegram: checked})}
                  className="data-[state=checked]:bg-[#73E212]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#73E212]" />
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>SMS</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#2C2C2C]'}`}>Text message alerts</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.sms}
                  onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                  className="data-[state=checked]:bg-[#73E212]"
                />
              </div>
            </div>
          </div>

          {/* Alert Types */}
          <div className={`pt-6 border-t ${isDarkMode ? 'border-[#73E212]/20' : 'border-gray-200'}`}>
            <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              SMS Alert Types
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Payout confirmations</span>
                <Switch 
                  checked={alertTypes.payouts}
                  onCheckedChange={(checked) => setAlertTypes({...alertTypes, payouts: checked})}
                  className="data-[state=checked]:bg-[#73E212]"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Withdrawal actions</span>
                <Switch 
                  checked={alertTypes.withdrawals}
                  onCheckedChange={(checked) => setAlertTypes({...alertTypes, withdrawals: checked})}
                  className="data-[state=checked]:bg-[#73E212]"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Weekly trade summaries</span>
                <Switch 
                  checked={alertTypes.weeklyReports}
                  onCheckedChange={(checked) => setAlertTypes({...alertTypes, weeklyReports: checked})}
                  className="data-[state=checked]:bg-[#73E212]"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className={`transition-colors ${
                isDarkMode 
                  ? 'border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10' 
                  : 'border-[#73E212] text-[#73E212] hover:bg-[#73E212]/10'
              }`}
            >
              Cancel
            </Button>
            <Button
              onClick={onClose}
              className={`bg-[#73E212] text-black hover:bg-[#73E212]/90 ${isDarkMode ? 'bg-[#73E212]' : 'bg-[#4CAF50]'}`}
            >
              Save Preferences
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationsModal;
