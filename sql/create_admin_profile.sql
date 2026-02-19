-- Run this in your Supabase SQL editor to add an admin profile for an existing user
-- Replace '<USER_UUID>' with the Supabase user's UUID (auth.users.id)

-- Create profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.profiles (
  user_id uuid PRIMARY KEY,
  full_name text,
  phone text,
  role text DEFAULT 'user',
  subscription_tier text DEFAULT 'free',
  created_at timestamptz DEFAULT now()
);

-- Insert or update admin profile
INSERT INTO public.profiles (user_id, full_name, phone, role, subscription_tier)
VALUES ('<USER_UUID>', 'Admin User', '', 'admin', 'enterprise')
ON CONFLICT (user_id) DO UPDATE
SET full_name = EXCLUDED.full_name,
    role = EXCLUDED.role,
    subscription_tier = EXCLUDED.subscription_tier;

-- Example: Replace <USER_UUID> with a real UUID from your Supabase auth users table.
-- You can find users in the Supabase Dashboard -> Authentication -> Users.
