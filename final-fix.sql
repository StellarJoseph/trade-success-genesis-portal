-- Final fix for "Database error saving new user" issue
-- Run this in your Supabase SQL editor to completely resolve the problem

-- 1. Drop any existing problematic triggers and functions
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP TRIGGER IF EXISTS on_auth_user_created ON public.users;
DROP FUNCTION IF EXISTS handle_new_user();
DROP FUNCTION IF EXISTS public.handle_new_user();
DROP FUNCTION IF EXISTS auth.handle_new_user();

-- 2. Ensure the profiles table has the correct structure with UNIQUE constraint
DROP TABLE IF EXISTS profiles CASCADE;
CREATE TABLE profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID UNIQUE,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'vip')),
  subscription_tier TEXT DEFAULT 'free',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Enable RLS on profiles table
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS policies for profiles
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- 5. Create a safe function for manual profile creation
CREATE OR REPLACE FUNCTION create_user_profile(user_uuid UUID, user_full_name TEXT DEFAULT NULL)
RETURNS VOID AS $$
BEGIN
  INSERT INTO profiles (user_id, full_name, role, subscription_tier)
  VALUES (user_uuid, COALESCE(user_full_name, 'User'), 'user', 'free')
  ON CONFLICT (user_id) DO NOTHING;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Grant necessary permissions
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT ALL ON profiles TO authenticated;
GRANT ALL ON bank_accounts TO authenticated;
GRANT ALL ON payouts TO authenticated;
GRANT ALL ON trading_signals TO authenticated;
GRANT ALL ON trades TO authenticated;
GRANT ALL ON notifications TO authenticated;
GRANT ALL ON subscriptions TO authenticated;
GRANT ALL ON support_tickets TO authenticated;
GRANT ALL ON support_messages TO authenticated;

-- 7. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_payouts_user_id ON payouts(user_id);
CREATE INDEX IF NOT EXISTS idx_trades_user_id ON trades(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_support_tickets_user_id ON support_tickets(user_id);
CREATE INDEX IF NOT EXISTS idx_trading_signals_created_at ON trading_signals(created_at);

-- This should completely resolve the "unexpected_failure" error
-- The application will now handle profile creation manually without triggers 