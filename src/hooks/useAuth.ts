import { useState, useEffect } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabaseClient'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  }

  const signUp = async (email: string, password: string, userData?: any) => {
    try {
      // Create the user account
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password
      })

      if (authError) {
        return { data: null, error: authError }
      }

      if (authData.user) {
        // Wait a moment for the user to be fully created
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Try to create profile using the database function first
        try {
          const { error: functionError } = await supabase.rpc('create_user_profile', {
            user_uuid: authData.user.id,
            user_full_name: userData?.full_name || email.split('@')[0]
          })

          if (functionError) {
            console.warn('Function profile creation failed:', functionError)
            
            // Fallback: try direct insert
            const { error: insertError } = await supabase
              .from('profiles')
              .insert({
                user_id: authData.user.id,
                full_name: userData?.full_name || email.split('@')[0],
                phone: userData?.phone || '',
                role: 'user',
                subscription_tier: 'free'
              })

            if (insertError) {
              console.warn('Direct profile creation also failed:', insertError)
              // Don't fail the signup - profile can be created later
            }
          }
        } catch (profileErr) {
          console.warn('Profile creation error:', profileErr)
          // Continue with signup even if profile creation fails
        }
      }

      return { data: authData, error: null }
    } catch (error) {
      console.error('Signup error:', error)
      return { 
        data: null, 
        error: { 
          message: 'An unexpected error occurred during signup' 
        } 
      }
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const resetPassword = async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email)
    return { data, error }
  }

  const ensureProfile = async (userId: string) => {
    try {
      // Check if profile exists
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single()

      if (!existingProfile) {
        // Try to create profile using function
        const { error } = await supabase.rpc('create_user_profile', {
          user_uuid: userId,
          user_full_name: 'User'
        })

        if (error) {
          console.warn('Failed to create profile:', error)
          // Try manual creation as fallback
          const { error: manualError } = await supabase
            .from('profiles')
            .insert({
              user_id: userId,
              full_name: 'User',
              role: 'user',
              subscription_tier: 'free'
            })

          if (manualError) {
            console.warn('Manual profile creation failed:', manualError)
          }
        }
      }

      return { data: existingProfile, error: null }
    } catch (error) {
      console.error('Profile check error:', error)
      return { data: null, error }
    }
  }

  return {
    user,
    session,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    ensureProfile,
  }
} 