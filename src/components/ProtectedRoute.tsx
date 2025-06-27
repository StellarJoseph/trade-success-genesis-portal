import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { isSupabaseConfigured } from '@/lib/supabaseClient';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: 'user' | 'admin' | 'vip';
}

export const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#73E212] mx-auto mb-4"></div>
          <p className="text-[#73E212]">Loading...</p>
        </div>
      </div>
    );
  }

  // If Supabase is not configured, allow access (demo mode)
  if (!isSupabaseConfigured()) {
    return <>{children}</>;
  }

  // If no user is authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If role is required and user doesn't have it, redirect to appropriate page
  if (requiredRole) {
    // You can implement role checking logic here
    // For now, we'll allow access if user is authenticated
    // In a real app, you'd check the user's role from their profile
  }

  return <>{children}</>;
}; 