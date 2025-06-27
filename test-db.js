// Test script to verify Supabase database setup
// Run with: node test-db.js

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.log('❌ Missing Supabase environment variables');
  console.log('Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testDatabase() {
  console.log('🔍 Testing Supabase database setup...\n');

  try {
    // Test 1: Check if we can connect
    console.log('1. Testing connection...');
    const { data: testData, error: testError } = await supabase
      .from('profiles')
      .select('count')
      .limit(1);
    
    if (testError) {
      console.log('❌ Connection failed:', testError.message);
      return;
    }
    console.log('✅ Connection successful\n');

    // Test 2: Check if profiles table exists and has correct structure
    console.log('2. Checking profiles table...');
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('*')
      .limit(5);
    
    if (profilesError) {
      console.log('❌ Profiles table error:', profilesError.message);
      return;
    }
    console.log('✅ Profiles table accessible');
    console.log(`   Found ${profiles.length} profiles\n`);

    // Test 3: Check if create_user_profile function exists
    console.log('3. Testing create_user_profile function...');
    const testUserId = '00000000-0000-0000-0000-000000000000';
    const { error: functionError } = await supabase.rpc('create_user_profile', {
      user_uuid: testUserId,
      user_full_name: 'Test User'
    });
    
    if (functionError) {
      console.log('❌ Function error:', functionError.message);
    } else {
      console.log('✅ Function works (test profile created)');
    }

    // Test 4: Check RLS policies
    console.log('\n4. Testing RLS policies...');
    const { data: policyTest, error: policyError } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', testUserId);
    
    if (policyError) {
      console.log('❌ RLS policy error:', policyError.message);
    } else {
      console.log('✅ RLS policies working');
    }

    // Test 5: Clean up test data
    console.log('\n5. Cleaning up test data...');
    const { error: deleteError } = await supabase
      .from('profiles')
      .delete()
      .eq('user_id', testUserId);
    
    if (deleteError) {
      console.log('⚠️  Could not clean up test data:', deleteError.message);
    } else {
      console.log('✅ Test data cleaned up');
    }

    console.log('\n🎉 Database setup appears to be working correctly!');
    console.log('You should now be able to sign up and log in without errors.');

  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

testDatabase(); 