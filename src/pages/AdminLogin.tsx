import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Eye, EyeOff, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Admin credentials (in production, this should be handled server-side)
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (credentials.username === ADMIN_CREDENTIALS.username && 
        credentials.password === ADMIN_CREDENTIALS.password) {
      // Store admin session
      localStorage.setItem('adminToken', 'admin-session-token');
      localStorage.setItem('userRole', 'admin');
      navigate('/admin');
    } else {
      setError('Invalid admin credentials. Please try again.');
    }
    
    setIsLoading(false);
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
                <Label htmlFor="username" className="text-gray-300">
                  Admin Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="bg-black/40 border-[#73E212]/30 text-white placeholder:text-gray-500 focus:border-[#73E212]"
                  placeholder="Enter admin username"
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