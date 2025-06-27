-- Fix for "Database error saving new user" issue
-- This script removes problematic triggers and functions

-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Drop the function if it exists
DROP FUNCTION IF EXISTS handle_new_user();

-- This should resolve the "unexpected_failure" error during user creation
-- The profile will now be created manually in the application code instead 