import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { isSupabaseConfigured } from '@/lib/supabaseClient';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    if (!isSupabaseConfigured()) {
      // Demo mode
      setMessage('Demo mode: Account creation simulated successfully!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
      setIsLoading(false);
      return;
    }

    try {
      // Create user account with profile data
      const { data: authData, error: authError } = await signUp(
        formData.email, 
        formData.password,
        {
          full_name: formData.name,
          phone: formData.phone
        }
      );

      if (authError) {
        setMessage(authError.message || 'Failed to create account');
        setIsLoading(false);
        return;
      }

      if (authData?.user) {
        setMessage('Account created successfully! Please check your email to verify your account.');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        setMessage('Account creation completed but verification may be required.');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (err) {
      console.error('Signup error:', err);
      setMessage('An unexpected error occurred during signup. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-[#73E212] to-[#73E212]/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-black font-bold text-2xl">T</span>
          </div>
          <h1 className="text-3xl font-bold font-general text-gradient mb-2">
            Join TradeSuccess.VIP
          </h1>
          <p className="text-[#73E212]/70">Create your account to start trading</p>
        </div>

        <Card className="glass-card border-[#73E212]/20 bg-black/40">
          <CardHeader>
            <CardTitle className="text-white font-general">Create Account</CardTitle>
            <CardDescription className="text-[#73E212]/70">
              Fill in your details to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#73E212]/80">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#73E212]/60 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-[#73E212]/10 border border-[#73E212]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#73E212] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#73E212]/80">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#73E212]/60 w-5 h-5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-[#73E212]/10 border border-[#73E212]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#73E212] focus:outline-none transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#73E212]/80">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#73E212]/60 w-5 h-5" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-[#73E212]/10 border border-[#73E212]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#73E212] focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#73E212]/80">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#73E212]/60 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full pl-12 pr-12 py-3 bg-[#73E212]/10 border border-[#73E212]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#73E212] focus:outline-none transition-colors"
                    placeholder="Create a password"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#73E212]/60 hover:text-[#73E212] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {!isSupabaseConfigured() && (
                <div className="bg-[#73E212]/10 p-4 rounded-lg border border-[#73E212]/30">
                  <p className="text-sm text-[#73E212] font-medium mb-2">Demo Mode:</p>
                  <p className="text-xs text-[#73E212]/80">Account creation will be simulated. No actual account will be created.</p>
                </div>
              )}

              {message && (
                <div className={`p-3 rounded-lg text-sm ${
                  message.includes('successfully') || message.includes('completed')
                    ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}>
                  {message}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-[#73E212] text-black font-semibold py-3 hover:bg-[#73E212]/90"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#73E212]/70">
                Already have an account?{' '}
                <Link to="/login" className="text-[#73E212] hover:text-[#73E212]/80 transition-colors font-semibold">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
