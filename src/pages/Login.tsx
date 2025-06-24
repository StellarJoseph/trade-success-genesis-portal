import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Test credentials check
    if (email === 'john@example.com' && password === 'password123') {
      console.log('Login successful');
      window.location.href = '/dashboard';
    } else {
      alert('Invalid credentials. Please use: john@example.com / password123');
    }
  };

  const handleGoogleLogin = () => {
    // Google OAuth logic
    console.log('Google login initiated');
    // For demo purposes, redirect to dashboard
    window.location.href = '/dashboard';
  };

  const handleAppleLogin = () => {
    // Apple OAuth logic
    console.log('Apple login initiated');
    // For demo purposes, redirect to dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-[#73E212] to-[#73E212]/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-black font-bold text-2xl">T</span>
          </div>
          <h1 className="text-3xl font-bold font-general text-gradient mb-2">
            Welcome Back
          </h1>
          <p className="text-[#73E212]/70">Access your crypto trading dashboard</p>
        </div>

        <Card className="glass-card border-[#73E212]/20 bg-black/40">
          <CardHeader>
            <CardTitle className="text-white font-general">Sign In</CardTitle>
            <CardDescription className="text-[#73E212]/70">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-center text-[#73E212]/80">
                Hello! Use email or another service to sign in
              </p>

              {/* OAuth Buttons */}
              <div className="space-y-3">
                <Button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full bg-[#f2f2f2] text-black hover:bg-[#73E212] transition-colors py-3"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>

                <Button
                  type="button"
                  onClick={handleAppleLogin}
                  className="w-full bg-[#f2f2f2] text-black hover:bg-[#73E212] transition-colors py-3"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Continue with Apple
                </Button>

                <Button
                  type="button"
                  className="w-full bg-[#73E212] text-black hover:bg-[#73E212]/90 font-semibold py-3"
                  onClick={() => document.getElementById('email-form')?.scrollIntoView()}
                >
                  Continue with Email Login
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#73E212]/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black text-[#73E212]/70">Or sign in with email</span>
                </div>
              </div>

              {/* Email Form */}
              <form onSubmit={handleLogin} className="space-y-6" id="email-form">
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

                <div className="bg-[#73E212]/10 p-4 rounded-lg border border-[#73E212]/30">
                  <p className="text-sm text-[#73E212] font-medium mb-2">Test Login Credentials:</p>
                  <p className="text-xs text-[#73E212]/80">Email: john@example.com</p>
                  <p className="text-xs text-[#73E212]/80">Password: password123</p>
                </div>

                <Button type="submit" className="w-full bg-[#73E212] text-black font-semibold py-3 hover:bg-[#73E212]/90">
                  Sign In
                </Button>
              </form>
            </div>

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
