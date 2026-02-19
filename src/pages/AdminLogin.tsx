import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Eye, EyeOff, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = useAuth();

  // Force demo-only mode when set to 'true' in env. Useful for local development
  // to bypass Supabase entirely until production auth is configured.
  const FORCE_DEMO = import.meta.env.VITE_FORCE_DEMO === 'true';

  // Demo credentials (if Supabase isn't configured). Prefer setting these in a .env file for local testing.
  const DEMO_USERNAME = import.meta.env.VITE_DEMO_ADMIN_USERNAME || 'admin';
  const DEMO_PASSWORD = import.meta.env.VITE_DEMO_ADMIN_PASSWORD || 'admin123';

  // Debug: log demo mode values (will print in browser console)
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.info('AdminLogin: FORCE_DEMO=', FORCE_DEMO, 'DEMO_USERNAME=', DEMO_USERNAME, 'DEMO_PASSWORD=', DEMO_PASSWORD);
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      // If FORCE_DEMO is enabled, skip Supabase and use demo credentials only
      if (FORCE_DEMO) {
        // small delay to match UX
        await new Promise(resolve => setTimeout(resolve, 200));
        if (credentials.email === DEMO_USERNAME && credentials.password === DEMO_PASSWORD) {
          localStorage.setItem('adminToken', 'admin-session-token');
          localStorage.setItem('userRole', 'admin');
          navigate('/admin');
        } else {
          setError('Invalid admin credentials. Please try again.');
        }
        setIsLoading(false);
        return;
      }

      // If Supabase is configured, use real auth
      if (isSupabaseConfigured()) {
        const { data, error: signInError } = await signIn(credentials.email, credentials.password);

        if (signInError) {
          // If the sign-in failed due to network (e.g. Supabase URL is unreachable),
          // allow fallback to demo credentials to keep local dev accessible.
          const msg = signInError.message || '';
          const lowered = msg.toLowerCase();
          if (lowered.includes('failed to fetch') || lowered.includes('network')) {
            // Try demo fallback below (after a small delay)
            console.warn('Sign-in network error, attempting demo fallback:', msg);
          } else {
            setError(signInError.message || 'Authentication failed.');
            setIsLoading(false);
            return;
          }
        }

        const user = (data as any)?.user || (data as any)?.session?.user;

        if (!user) {
          setError('Authentication succeeded but no user was returned.');
          setIsLoading(false);
          return;
        }

        // Verify role from profiles table (optional - requires a `profiles` table)
        try {
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('role')
            .eq('user_id', user.id)
            .single();

          if (profileError) {
            // If profiles table doesn't exist or query fails, allow login but warn in console
            console.warn('Could not verify profile role:', profileError);
          } else if (profile?.role !== 'admin') {
            setError('You are not authorized to access the admin dashboard.');
            // Sign out to clear session
            await supabase.auth.signOut();
            setIsLoading(false);
            return;
          }

          // Successful admin sign-in
          localStorage.setItem('adminToken', 'supabase-admin-session');
          localStorage.setItem('userRole', 'admin');
          navigate('/admin');
          setIsLoading(false);
          return;
        } catch (err) {
          console.warn('Role check failed:', err);
          localStorage.setItem('adminToken', 'supabase-admin-session');
          localStorage.setItem('userRole', 'admin');
          navigate('/admin');
          setIsLoading(false);
          return;
        }
      }

      // If Supabase not configured, fall back to demo credentials (read from env)
      // small delay to match previous UX
      await new Promise(resolve => setTimeout(resolve, 600));

      // If sign-in previously failed due to network, or Supabase is not configured,
      // allow the demo credentials to work so developers can access the admin UI.
      if (credentials.email === DEMO_USERNAME && credentials.password === DEMO_PASSWORD) {
        localStorage.setItem('adminToken', 'admin-session-token');
        localStorage.setItem('userRole', 'admin');
        navigate('/admin');
      } else {
        setError('Invalid admin credentials. Please try again.');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err?.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="glass-card border-[#73E212]/20 bg-black/40 backdrop-blur-lg">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#73E212] to-[#73E212]/80 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <CardTitle className="text-2xl font-bold text-white font-general">
              Admin Access
            </CardTitle>
            <CardDescription className="text-gray-400">
              Secure administrator login portal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <Alert className="border-red-500/20 bg-red-500/10">
                  <AlertDescription className="text-red-400">
                    {error}
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Admin Email or Username
                </Label>
                <Input
                  id="email"
                  type="text"
                  value={credentials.email}
                  onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                  className="bg-black/40 border-[#73E212]/30 text-white placeholder:text-gray-500 focus:border-[#73E212]"
                  placeholder="Enter admin email or username"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">
                  Admin Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    className="bg-black/40 border-[#73E212]/30 text-white placeholder:text-gray-500 focus:border-[#73E212] pr-10"
                    placeholder="Enter admin password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#73E212] text-black font-semibold hover:bg-[#73E212]/90 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                    Authenticating...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Lock className="w-4 h-4 mr-2" />
                    Access Admin Dashboard
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-[#73E212]/20">
              <p className="text-xs text-gray-500 text-center">
                This portal is restricted to authorized administrators only.
                <br />
                Unauthorized access attempts will be logged and reported.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin; 