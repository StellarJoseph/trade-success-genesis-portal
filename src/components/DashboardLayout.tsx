import React, { createContext, useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/hooks/useAuth';

// Material Icons font (add to index.html or inject here for demo)
if (typeof document !== 'undefined' && !document.getElementById('material-icons-font')) {
  const link = document.createElement('link');
  link.id = 'material-icons-font';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
  document.head.appendChild(link);
}

// Theme context for dark/light mode
const ThemeContext = createContext({
  dark: true,
  toggle: () => {},
});
export const useTheme = () => useContext(ThemeContext);

// Menu structure
const menu = [
  { label: 'Home', icon: 'home', to: '/dashboard' },
  { label: 'Portfolio', icon: 'pie_chart', to: '/portfolio' },
  { label: 'Assets', icon: 'account_balance_wallet', to: '/assets' },
  { label: 'Payments', icon: 'credit_card', to: '/payments' },
  { label: 'Market Insights', icon: 'show_chart', to: '/market-insights' },
  { label: 'Management Plans', icon: 'assignment', to: '/plans' },
  { label: 'Reports', icon: 'bar_chart', to: '/reports' },
  { label: 'Referrals', icon: 'group_add', to: '/referrals' },
  { label: 'Profile', icon: 'person', to: '/profile' },
  { label: 'Settings', icon: 'settings', to: '/settings' },
  { label: 'Support', icon: 'support_agent', to: '/support' },
];

const Sidebar = () => {
  const location = useLocation();
  const [openSub, setOpenSub] = useState(false);
  const { profile, loading } = useProfile();
  const { user } = useAuth();
  const { dark } = useTheme();
  return (
    <aside className={`hidden md:flex flex-col w-72 h-screen fixed left-0 top-0 ${dark ? 'bg-[#000000] text-[#F0F0F0] border-[#2A2A3B]' : 'bg-[#FFFFFF] text-[#2C2C2C] border-[#DDDDDD]'} border-r z-30 transition-colors duration-300`}>
      <div className="flex items-center gap-2 px-6 py-6">
        <img src="/ts-logo.png" alt="TradeSuccess.VIP Logo" className="w-10 h-10 rounded-full bg-white p-1 shadow" />
        <span className="font-bold text-lg light:text-[#041260] dark:text-[#F0F0F0]">TradeSuccess.VIP</span>
      </div>
      <nav className="flex-1 px-2 space-y-1" aria-label="Sidebar Navigation">
        <div className="mt-4">
          {menu.map((item, idx) =>
            item.submenu ? (
              <div key={item.label}>
                <button
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left font-semibold border-l-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#73E212] ${openSub ? `border-[#73E212] text-[#73E212] ${dark ? 'bg-[#232323]' : 'bg-[#E6F2FF]'}` : `border-transparent ${dark ? 'text-[#CCCCCC] hover:bg-[#232323]' : 'text-[#555] hover:bg-[#E6F2FF]'} hover:border-[#73E212] hover:text-[#73E212]'}`}`}
                  onClick={() => setOpenSub((o) => !o)}
                  aria-expanded={openSub}
                  aria-controls="management-plans-submenu"
                >
                  <span className={`material-icons transition-colors duration-200 ${openSub ? 'text-[#73E212]' : dark ? 'text-[#CCCCCC]' : 'text-[#555]'}`}>{item.icon}</span> {item.label}
                  <span className="ml-auto material-icons text-xs">{openSub ? 'expand_less' : 'expand_more'}</span>
                </button>
                {openSub && (
                  <div id="management-plans-submenu" className="ml-8 space-y-1">
                    {item.submenu.map((sub) => (
                      <Link key={sub.label} to={sub.to} className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#73E212] ${location.pathname === sub.to ? 'text-[#73E212] bg-[#232323] dark:bg-[#232323] light:bg-[#E6F2FF] light:text-[#1E88E5]' : 'text-[#CCCCCC] dark:text-[#CCCCCC] light:text-[#555] hover:text-[#73E212] dark:hover:text-[#73E212] light:hover:text-[#1E88E5] hover:bg-[#232323] dark:hover:bg-[#232323] light:hover:bg-[#E6F2FF]'}`}>{sub.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold border-l-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#73E212] ${location.pathname === item.to ? `border-[#73E212] text-[#73E212] ${dark ? 'bg-[#232323]' : 'bg-[#E6F2FF]'}` : `border-transparent ${dark ? 'text-[#CCCCCC] hover:bg-[#232323]' : 'text-[#555] hover:bg-[#E6F2FF]'} hover:border-[#73E212] hover:text-[#73E212]'}`}`}
                tabIndex={0}
              >
                <span className={`material-icons transition-colors duration-200 ${location.pathname === item.to ? 'text-[#73E212]' : dark ? 'text-[#CCCCCC]' : 'text-[#555]'}`}>{item.icon}</span> {item.label}
              </Link>
            )
          )}
        </div>
      </nav>
      <div className={`border-t px-6 py-4 ${dark ? 'border-[#2A2A3B]' : 'border-[#DDDDDD]'}`}>
        <div className="flex items-center gap-3 min-h-[48px]">
          {loading ? (
            <div className="w-8 h-8 rounded-full bg-gray-400 animate-pulse" />
          ) : profile && (profile.avatar_url || user?.email) ? (
            <img
              src={profile.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.full_name || user?.email || 'U')}&background=73E212&color=fff`}
              alt={profile.full_name || user?.email || 'User'}
              className="w-8 h-8 rounded-full border-2 border-[#73E212] object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-[#73E212] flex items-center justify-center text-black font-bold">
              {user?.email ? user.email[0].toUpperCase() : 'U'}
            </div>
          )}
          <div className="flex flex-col">
            <span className={`font-semibold ${dark ? 'text-[#F0F0F0]' : 'text-[#2C2C2C]'}`}>
              {loading ? <span className="bg-gray-400 rounded w-20 h-4 animate-pulse" /> : profile?.full_name || user?.email || 'User'}
            </span>
            <span className={`text-xs ${dark ? 'text-gray-400' : 'text-[#555]'}`}>
              {loading ? <span className="bg-gray-300 rounded w-24 h-3 animate-pulse" /> : user?.email || ''}
            </span>
          </div>
          <span className="ml-2 px-2 py-1 bg-[#73E212] text-black rounded text-xs font-bold">{profile?.role?.toUpperCase() || 'USER'}</span>
        </div>
      </div>
    </aside>
  );
};

const TopBar = () => {
  const { dark, toggle } = useTheme();
  return (
    <header className={`fixed left-0 md:left-72 right-0 top-0 h-20 flex items-center justify-between px-6 ${dark ? 'bg-[#000000] text-[#F0F0F0] border-[#2A2A3B]' : 'bg-[#FFFFFF] text-[#2C2C2C] border-[#DDDDDD]'} bg-opacity-80 backdrop-blur-md z-20 transition-colors duration-300 border-b`}>
      {/* Left: Deposit Button */}
      <button className="flex items-center gap-2 px-6 py-2 rounded-xl bg-[#73E212] hover:bg-[#8cf542] transition text-black font-semibold text-base shadow-md border border-[#73E212] focus:outline-none focus:ring-2 focus:ring-[#73E212]">
        <span>Deposit</span>
        <span className="ml-1"><svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 14V17A2 2 0 0 1 15 19H7A2 2 0 0 1 5 17V7A2 2 0 0 1 7 5H15A2 2 0 0 1 17 7V10M12 11V17M12 17L9 14M12 17L15 14'/></svg></span>
      </button>
      {/* Right: Controls */}
      <div className="flex items-center gap-4">
        {/* Custom Light/Dark Toggle */}
        <button
          onClick={toggle}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl border-none focus:outline-none transition-colors duration-300 ${dark ? 'bg-[#232323]' : 'bg-gradient-to-r from-yellow-300 to-blue-300 bg-opacity-60'}`}
          aria-label="Toggle dark/light mode"
          aria-pressed={dark ? 'true' : 'false'}
        >
          <span className={`material-icons text-lg ${dark ? 'text-yellow-400' : 'text-gray-600'}`}>{dark ? 'wb_sunny' : 'dark_mode'}</span>
          <span
            className={`inline-block w-10 h-6 rounded-full relative transition-colors duration-300 ${dark ? 'bg-[#73E212]' : 'bg-gray-300'}`}
            style={{ boxShadow: dark ? '0 0 0 2px #73E212' : '0 0 0 2px #ccc' }}
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform duration-300 ${dark ? 'translate-x-4 bg-[#0A0A0A]' : 'bg-white'}`}
              style={{ transform: dark ? 'translateX(16px)' : 'translateX(0)' }}
            ></span>
          </span>
          <span className={`material-icons text-lg ${dark ? 'text-gray-400' : 'text-blue-700'}`}>{dark ? 'dark_mode' : 'wb_sunny'}</span>
        </button>
        {/* Notifications Button */}
        <button className={`flex items-center gap-2 px-5 py-2 rounded-xl border font-medium text-base transition ${dark ? 'border-white/60 bg-transparent text-[#F0F0F0] hover:bg-[#73E212]/10' : 'border-[#041260]/30 bg-transparent text-[#2C2C2C] hover:bg-[#E6F2FF]'}`}>
          <span className="material-icons">notifications_none</span>
          Notifications
        </button>
        {/* Logout Button */}
        <button className={`flex items-center gap-2 px-5 py-2 rounded-xl border font-medium text-base transition ${dark ? 'bg-white/20 border-white/60 text-[#F0F0F0] hover:bg-[#73E212]/20' : 'bg-[#E6F2FF] border-[#041260]/30 text-[#2C2C2C] hover:bg-[#dbeafe]'}`}>
          <span className="material-icons">logout</span>
          Logout
        </button>
      </div>
    </header>
  );
};

const MobileDrawer = ({ open, onClose }) => {
  const location = useLocation();
  const [openSub, setOpenSub] = useState(false);
  const { dark } = useTheme();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  return (
    <div className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`} aria-modal={open} role="dialog">
      <div className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} aria-label="Close menu overlay"></div>
      <aside className={`fixed top-0 left-0 h-full w-72 ${dark ? 'bg-[#000000] text-[#F0F0F0]' : 'bg-[#FFFFFF] text-[#2C2C2C]'} shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`} style={{width: 280}}>
        <div className="flex items-center justify-between px-6 py-6">
          <img src="/ts-logo.png" alt="TradeSuccess.VIP Logo" className="w-10 h-10 rounded-full bg-white p-1 shadow" />
          <span className="font-bold text-lg light:text-[#041260] dark:text-[#F0F0F0] ml-2">TradeSuccess.VIP</span>
          <button onClick={onClose} className="text-2xl" aria-label="Close menu">×</button>
        </div>
        <nav className="flex-1 px-2 space-y-1" aria-label="Mobile Sidebar Navigation">
          <div className="mt-4">
            {menu.map((item, idx) =>
              item.submenu ? (
                <div key={item.label}>
                  <button
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left font-semibold border-l-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#73E212] ${openSub ? `border-[#73E212] text-[#73E212] ${dark ? 'bg-[#232323]' : 'bg-[#E6F2FF]'}` : `border-transparent ${dark ? 'text-[#CCCCCC] hover:bg-[#232323]' : 'text-[#555] hover:bg-[#E6F2FF]'} hover:border-[#73E212] hover:text-[#73E212]'}`}`}
                    onClick={() => setOpenSub((o) => !o)}
                    aria-expanded={openSub}
                    aria-controls="mobile-management-plans-submenu"
                  >
                    <span className={`material-icons transition-colors duration-200 ${openSub ? 'text-[#73E212]' : dark ? 'text-[#CCCCCC]' : 'text-[#555]'}`}>{item.icon}</span> {item.label}
                    <span className="ml-auto material-icons text-xs">{openSub ? 'expand_less' : 'expand_more'}</span>
                  </button>
                  {openSub && (
                    <div id="mobile-management-plans-submenu" className="ml-8 space-y-1">
                      {item.submenu.map((sub) => (
                        <Link key={sub.label} to={sub.to} className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#73E212] ${location.pathname === sub.to ? 'text-[#73E212] bg-[#232323] dark:bg-[#232323] light:bg-[#E6F2FF] light:text-[#1E88E5]' : 'text-[#CCCCCC] dark:text-[#CCCCCC] light:text-[#555] hover:text-[#73E212] dark:hover:text-[#73E212] light:hover:text-[#1E88E5] hover:bg-[#232323] dark:hover:bg-[#232323] light:hover:bg-[#E6F2FF]'}`}>{sub.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold border-l-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#73E212] ${location.pathname === item.to ? `border-[#73E212] text-[#73E212] ${dark ? 'bg-[#232323]' : 'bg-[#E6F2FF]'}` : `border-transparent ${dark ? 'text-[#CCCCCC] hover:bg-[#232323]' : 'text-[#555] hover:bg-[#E6F2FF]'} hover:border-[#73E212] hover:text-[#73E212]'}`}`}
                  tabIndex={0}
                >
                  <span className={`material-icons transition-colors duration-200 ${location.pathname === item.to ? 'text-[#73E212]' : dark ? 'text-[#CCCCCC]' : 'text-[#555]'}`}>{item.icon}</span> {item.label}
                </Link>
              )
            )}
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default function DashboardLayout({ children }: { children?: React.ReactNode }) {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
    }
    return true;
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggle = () => {
    setDark((d) => {
      const newDark = !d;
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newDark ? 'dark' : 'light');
      }
      return newDark;
    });
  };
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', dark);
      document.documentElement.classList.toggle('light', !dark);
    }
  }, [dark]);
  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div className={dark ? 'dark' : 'light'}>
        <Sidebar />
        <TopBar />
        <button className={`md:hidden fixed top-4 left-4 z-50 p-2 rounded ${dark ? 'bg-[#232323]' : 'bg-[#E6F2FF]'}`} onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          <span className="material-icons">menu</span>
        </button>
        <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <main className={`pt-24 md:pl-72 px-4 transition-all duration-300 min-h-screen ${dark ? 'bg-[#000000] text-[#F0F0F0]' : 'bg-[#FFFFFF] text-[#2C2C2C]'}`}>
          {children || <div className={dark ? 'text-white' : 'text-[#2C2C2C]'}>Dashboard Content Here</div>}
        </main>
      </div>
    </ThemeContext.Provider>
  );
}