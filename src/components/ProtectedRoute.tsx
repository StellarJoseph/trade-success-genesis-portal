import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { isSupabaseConfigured, supabase } from '@/lib/supabaseClient';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: 'user' | 'admin' | 'vip';
}

export const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const [roleLoading, setRoleLoading] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

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
    // Allow access if a local demo admin token/role is present in localStorage. This
    // makes local development easier when Supabase is misconfigured or unreachable.
    if (typeof window !== 'undefined') {
      const localRole = localStorage.getItem('userRole');
      const localToken = localStorage.getItem('adminToken');
      if (localRole === 'admin' && localToken) {
        return <>{children}</>;
      }
    }

    return <Navigate to="/login" replace />;
  }

  // If a specific role is required, verify it from the `profiles` table.
  // Show a loading state while we fetch the role to avoid flicker.
  useEffect(() => {
    let mounted = true;
    const fetchRole = async () => {
      if (!requiredRole || !user) return;
      setRoleLoading(true);
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('user_id', user.id)
          .single();

        if (error) {
          console.warn('ProtectedRoute: profile fetch error', error);
        }

        if (mounted) {
          setUserRole((data as any)?.role ?? null);
        }
      } catch (err) {
        console.warn('ProtectedRoute: unexpected error fetching role', err);
      } finally {
        if (mounted) setRoleLoading(false);
      }
    };

    fetchRole();

    return () => {
      mounted = false;
    };
  }, [requiredRole, user]);

  if (roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#73E212] mx-auto mb-4"></div>
          <p className="text-[#73E212]">Verifying access...</p>
        </div>
      </div>
    );
  }

  if (requiredRole && userRole && userRole !== requiredRole) {
    // User authenticated but does not have the required role
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}; 