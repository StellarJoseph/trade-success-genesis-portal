import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export function LogoutButton() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { error } = await signOut();
      if (error) {
        console.error('Logout error:', error);
      }
      // Clear any local storage
      localStorage.removeItem('userToken');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userEmail');
      
      // Redirect to login page
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
      // Still redirect even if logout fails
      navigate('/login');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-500 text-white font-bold py-2 rounded mt-4 hover:bg-red-600 transition-colors"
    >
      Logout
    </button>
  );
} 