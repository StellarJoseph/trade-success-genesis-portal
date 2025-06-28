import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { isSupabaseConfigured, supabase } from '@/lib/supabaseClient';

const Login = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, ensureProfile } = useAuth();

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setMessage('');

    if (!isSupabaseConfigured()) {
      setMessage('Google login requires Supabase configuration. Please use email login.');
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) {
        console.error('Google sign-in error:', error.message);
        setMessage(`Google login failed: ${error.message}`);
      } else if (data) {
        setMessage('Redirecting to Google...');
        // The redirect will happen automatically
      }
    } catch (err) {
      console.error('Google login error:', err);
      setMessage('An unexpected error occurred during Google login.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    if (provider === 'Google') {
      handleGoogleLogin();
    } else {
      setMessage(`${provider} login is not implemented yet. Please use email login.`);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    if (!isSupabaseConfigured()) {
      // Fallback to demo mode
      if (email === 'john@example.com' && password === 'password123') {
        setMessage('Demo login successful!');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        setMessage('Invalid credentials. Please use: john@example.com / password123');
      }
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await signIn(email, password);
      
      if (error) {
        setMessage(error.message);
      } else if (data.user) {
        // Ensure user has a profile
        try {
          await ensureProfile(data.user.id);
        } catch (profileError) {
          console.warn('Profile check failed:', profileError);
          // Continue with login even if profile check fails
        }
        
        setMessage('Login successful!');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }
    } catch (err) {
      setMessage('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const goBackToOptions = () => {
    setShowEmailForm(false);
    setMessage('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750696761/TS_LOGO_juw9he.png" 
              alt="TradeSuccess.VIP Logo" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-3xl font-bold font-general text-gradient mb-2">
            Welcome Back
          </h1>
          <p className="text-[#73E212]/70">Access your account dashboard</p>
        </div>

        <Card className="glass-card border-[#73E212]/20 bg-black/40">
          <CardHeader className="text-center">
            <CardTitle className="text-white font-general">
              {showEmailForm ? 'Sign In with Email' : 'Sign In'}
            </CardTitle>
            <CardDescription className="text-[#73E212]/70">
              {showEmailForm ? 'Enter your credentials to access your account' : 'Choose how you want to sign in'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!showEmailForm ? (
              // Social Login Options
              <div className="space-y-4">
                <Button
                  onClick={() => handleSocialLogin('Google')}
                  className="w-full bg-white text-black font-semibold py-3 hover:bg-gray-100 transition-colors flex items-center justify-center gap-3"
                  disabled={isLoading}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>

                <Button
                  onClick={() => handleSocialLogin('Apple')}
                  className="w-full bg-black text-white font-semibold py-3 hover:bg-gray-900 transition-colors flex items-center justify-center gap-3 border border-gray-600"
                  disabled={isLoading}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Continue with Apple
                </Button>

                <Button
                  onClick={() => setShowEmailForm(true)}
                  className="w-full bg-[#73E212] text-black font-semibold py-3 hover:bg-[#73E212]/90 transition-colors flex items-center justify-center gap-3"
                  disabled={isLoading}
                >
                  <Mail className="w-5 h-5" />
                  Continue with Email Login
                </Button>

                {message && (
                  <div className="p-3 rounded-lg text-sm bg-yellow-500/10 border border-yellow-500/30 text-yellow-400">
                    {message}
                  </div>
                )}
              </div>
            ) : (
              // Email Login Form
              <form onSubmit={handleEmailLogin} className="space-y-6">
                <Button
                  type="button"
                  onClick={goBackToOptions}
                  variant="ghost"
                  className="w-full text-[#73E212] hover:text-[#73E212]/80 transition-colors flex items-center justify-center gap-2 mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to login options
                </Button>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#73E212]/80">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#73E212]/60 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-[#73E212]/10 border border-[#73E212]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#73E212] focus:outline-none transition-colors"
                      placeholder="Enter your email"
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-3 bg-[#73E212]/10 border border-[#73E212]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#73E212] focus:outline-none transition-colors"
                      placeholder="Enter your password"
                      required
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
                    <p className="text-xs text-[#73E212]/80">Email: john@example.com / Password: password123</p>
                  </div>
                )}

                {message && (
                  <div className={`p-3 rounded-lg text-sm ${
                    message.includes('successful')
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
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
            )}

            <div className="mt-6 text-center">
              <p className="text-[#73E212]/70">
                Don't have an account?{' '}
                <Link to="/signup" className="text-[#73E212] hover:text-[#73E212]/80 transition-colors font-semibold">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
