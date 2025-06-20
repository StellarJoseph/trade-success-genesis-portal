
import { 
  User, 
  TrendingUp, 
  Wallet, 
  CreditCard, 
  FileText, 
  Bell, 
  Shield, 
  Users, 
  HelpCircle, 
  Scale, 
  Settings 
} from 'lucide-react';

interface SettingsSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isDarkMode: boolean;
}

const SettingsSidebar = ({ activeSection, onSectionChange, isDarkMode }: SettingsSidebarProps) => {
  const sections = [
    { id: 'account', label: 'Account Info', icon: User },
    { id: 'trading', label: 'Trading Preferences', icon: TrendingUp },
    { id: 'portfolio', label: 'Portfolio & Wallet', icon: Wallet },
    { id: 'billing', label: 'Subscription & Billing', icon: CreditCard },
    { id: 'reports', label: 'Reports & Downloads', icon: FileText },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'community', label: 'Community Access', icon: Users },
    { id: 'support', label: 'Support', icon: HelpCircle },
    { id: 'legal', label: 'Compliance & Legal', icon: Scale },
    { id: 'management', label: 'Account Management', icon: Settings }
  ];

  return (
    <div className={`w-64 transition-colors duration-300 ${
      isDarkMode ? 'bg-black/60 border-[#73E212]/20' : 'bg-gray-50 border-gray-200'
    } border-r`}>
      <div className="p-4">
        <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Settings
        </h3>
        <nav className="space-y-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-[#73E212]/20 text-[#73E212] border border-[#73E212]/30'
                    : isDarkMode
                    ? 'text-gray-300 hover:bg-white/5 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{section.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SettingsSidebar;
