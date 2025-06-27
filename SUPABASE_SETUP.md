# Supabase Setup Guide for TradeSuccess.VIP

This guide will help you set up Supabase for your trading platform with authentication, database, and real-time features.

## 🚀 Quick Start

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `tradesuccess-vip`
   - **Database Password**: Choose a strong password
   - **Region**: Choose closest to your users
5. Click "Create new project"

### 2. Get Your Project Credentials

1. Go to **Settings** → **API** in your Supabase dashboard
2. Copy the following values:
   - **Project URL** (e.g., `https://your-project-id.supabase.co`)
   - **Anon/Public Key** (starts with `eyJ...`)

### 3. Set Up Environment Variables

1. Create a `.env` file in your project root:
```bash
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

2. Replace the placeholder values with your actual Supabase credentials

### 4. Set Up Database Schema

1. Go to **SQL Editor** in your Supabase dashboard
2. Copy the contents of `supabase-schema.sql` from this project
3. Paste and run the SQL commands
4. This will create all necessary tables with proper RLS policies

### 5. Configure Authentication

1. Go to **Authentication** → **Settings** in your Supabase dashboard
2. Configure your site URL: `http://localhost:8081` (for development)
3. Add redirect URLs:
   - `http://localhost:8081/dashboard`
   - `http://localhost:8081/admin`
   - `http://localhost:8081/login`

### 6. Set Up Email Templates (Optional)

1. Go to **Authentication** → **Email Templates**
2. Customize the email templates for:
   - Confirm signup
   - Reset password
   - Magic link

## 📊 Database Tables

The schema creates the following tables:

### Core Tables
- **profiles**: User profile information
- **bank_accounts**: User bank account details
- **payouts**: Payout requests and status
- **trading_signals**: Trading signals from admins
- **trades**: User trade history
- **notifications**: User notifications
- **subscriptions**: User subscription plans
- **support_tickets**: Support ticket system
- **support_messages**: Support ticket messages

### Security Features
- **Row Level Security (RLS)**: Users can only access their own data
- **Role-based access**: Admins can access all data
- **Automatic profile creation**: Profiles created when users sign up

## 🔐 Authentication Features

### Implemented Features
- ✅ Email/password authentication
- ✅ User registration with profile creation
- ✅ Password reset functionality
- ✅ Session management
- ✅ Protected routes
- ✅ Role-based access control

### Available Hooks
- `useAuth()`: Authentication state and methods
- `useProfile()`: User profile management
- `ProtectedRoute`: Route protection component

## 🛠️ Usage Examples

### Authentication
```typescript
import { useAuth } from '@/hooks/useAuth';

const { user, signIn, signUp, signOut } = useAuth();

// Sign in
const handleLogin = async () => {
  const { data, error } = await signIn(email, password);
  if (error) console.error(error);
  else console.log('Logged in:', data.user);
};
```

### Database Operations
```typescript
import { payoutService } from '@/lib/database';

// Create payout request
const { data, error } = await payoutService.createPayout(
  userId, 
  1500, 
  'Pending'
);

// Get user payouts
const { data: payouts } = await payoutService.getUserPayouts(userId);
```

### Protected Routes
```typescript
import { ProtectedRoute } from '@/components/ProtectedRoute';

<ProtectedRoute requiredRole="admin">
  <AdminDashboard />
</ProtectedRoute>
```

## 🔧 Configuration Options

### Environment Variables
```bash
# Required
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key

# Optional (for production)
VITE_SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Customization
- Modify `src/lib/supabaseClient.ts` for custom client configuration
- Update `src/hooks/useAuth.ts` for custom authentication logic
- Customize `src/lib/database.ts` for additional database operations

## 🚀 Deployment

### Production Setup
1. Update environment variables with production URLs
2. Configure production redirect URLs in Supabase
3. Set up custom domain (optional)
4. Configure email providers for authentication

### Environment Variables for Production
```bash
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 🔍 Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**
   - Check your `.env` file exists and has correct values
   - Restart your development server

2. **"Invalid credentials"**
   - Verify your Supabase URL and anon key
   - Check if your Supabase project is active

3. **"RLS policy violation"**
   - Ensure user is authenticated
   - Check if user has proper role permissions
   - Verify RLS policies are correctly set up

4. **"Database connection failed"**
   - Check your internet connection
   - Verify Supabase project is not paused
   - Check if database is accessible

### Debug Mode
Enable debug logging by adding to your `.env`:
```bash
VITE_DEBUG=true
```

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Authentication Guide](https://supabase.com/docs/guides/auth)

## 🆘 Support

If you encounter issues:
1. Check the Supabase dashboard for error logs
2. Verify your environment variables
3. Test with the demo mode first
4. Check the browser console for JavaScript errors

---

**Note**: This implementation includes fallback to demo mode when Supabase is not configured, so your app will continue to work during development and testing. 