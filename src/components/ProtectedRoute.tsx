import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: 'admin' | 'user';
  fallbackPath?: string;
}

const ProtectedRoute = ({ 
  children, 
  requiredRole = 'user', 
  fallbackPath = '/login' 
}: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // Check authentication status
    const adminToken = localStorage.getItem('adminToken');
    const userToken = localStorage.getItem('userToken');
    const role = localStorage.getItem('userRole');

    if (requiredRole === 'admin') {
      // For admin routes, check for admin token
      setIsAuthenticated(!!adminToken);
      setUserRole(role);
    } else {
      // For user routes, check for user token
      setIsAuthenticated(!!userToken);
      setUserRole(role);
    }
  }, [requiredRole]);

  // Show loading while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#73E212]"></div>
          <span className="text-white">Verifying access...</span>
        </div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to={fallbackPath} replace />;
  }

  // For admin routes, ensure user has admin role
  if (requiredRole === 'admin' && userRole !== 'admin') {
    return <Navigate to="/admin-login" replace />;
  }

  // Render the protected content
  return <>{children}</>;
};

export default ProtectedRoute; 