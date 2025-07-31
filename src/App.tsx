import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import {ProtectedRoute} from "./components/ProtectedRoute";
import Shop from "./pages/Shop";
import Courses from "./pages/Courses";
import Consultancy from "./pages/Consultancy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import DashboardLayout from './components/DashboardLayout';
import Portfolio from './pages/Portfolio';
import Plans from './pages/Plans';
import Reports from './pages/Reports';
import Payments from './pages/Payments';
import Referrals from './pages/Referrals';
import Settings from './pages/Settings';
import Merchandise from "./pages/Merchandise";
import AITradingSignals from './pages/AITradingSignals';
import PortfolioManagement from './pages/PortfolioManagement';
import AutomatedBotSetup from './pages/AutomatedBotSetup';
import CryptoConsulting from './pages/CryptoConsulting';
import TradingChallenge from './pages/TradingChallenge';
import MerchantServices from './pages/MerchantServices';

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Scroll-to-top button
function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#222] bg-opacity-80 shadow-lg border border-[#73E212] transition-opacity duration-300 hover:bg-[#73E212] hover:text-black text-[#73E212] ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
    </button>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollTopButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-trading-signals" element={<AITradingSignals />} />
          <Route path="/portfolio-management" element={<PortfolioManagement />} />
          <Route path="/automated-bot-setup" element={<AutomatedBotSetup />} />
          <Route path="/crypto-consulting" element={<CryptoConsulting />} />
          <Route path="/trading-challenge" element={<TradingChallenge />} />
          <Route path="/merchant-services" element={<MerchantServices />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/courses" element={<Courses />} />
          <Route path="/shop/consultancy" element={<Consultancy />} />
          <Route path="/shop/merchandise" element={<Merchandise />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/portfolio" element={<DashboardLayout><Portfolio /></DashboardLayout>} />
          <Route path="/plans" element={<DashboardLayout><Plans /></DashboardLayout>} />
          <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
          <Route path="/payments" element={<DashboardLayout><Payments /></DashboardLayout>} />
          <Route path="/referrals" element={<DashboardLayout><Referrals /></DashboardLayout>} />
          <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
