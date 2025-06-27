import { supabase } from './supabaseClient';

// Payout operations
export const payoutService = {
  async createPayout(userId: string, amount: number, status: string = 'Pending') {
    const { data, error } = await supabase
      .from('payouts')
      .insert([{ user_id: userId, amount, status }])
      .select();
    
    return { data, error };
  },

  async getUserPayouts(userId: string) {
    const { data, error } = await supabase
      .from('payouts')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    return { data, error };
  },

  async getAllPayouts() {
    const { data, error } = await supabase
      .from('payouts')
      .select('*, profiles(full_name, email)')
      .order('created_at', { ascending: false });
    
    return { data, error };
  },

  async updatePayoutStatus(payoutId: string, status: string) {
    const { data, error } = await supabase
      .from('payouts')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', payoutId)
      .select();
    
    return { data, error };
  }
};

// Bank account operations
export const bankAccountService = {
  async saveBankAccount(userId: string, accountData: {
    account_name: string;
    account_number: string;
    bank: string;
  }) {
    const { data, error } = await supabase
      .from('bank_accounts')
      .upsert({
        user_id: userId,
        ...accountData,
        updated_at: new Date().toISOString()
      })
      .select();
    
    return { data, error };
  },

  async getUserBankAccount(userId: string) {
    const { data, error } = await supabase
      .from('bank_accounts')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    return { data, error };
  }
};

// User profile operations
export const profileService = {
  async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    return { data, error };
  },

  async updateUserProfile(userId: string, updates: any) {
    const { data, error } = await supabase
      .from('profiles')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', userId)
      .select();
    
    return { data, error };
  },

  async getAllUsers() {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });
    
    return { data, error };
  }
};

// Trading signals operations
export const signalsService = {
  async createSignal(signalData: {
    title: string;
    description: string;
    symbol: string;
    entry_price: number;
    target_price: number;
    stop_loss: number;
    type: 'buy' | 'sell';
    risk_level: 'low' | 'medium' | 'high';
  }) {
    const { data, error } = await supabase
      .from('trading_signals')
      .insert([signalData])
      .select();
    
    return { data, error };
  },

  async getSignals() {
    const { data, error } = await supabase
      .from('trading_signals')
      .select('*')
      .order('created_at', { ascending: false });
    
    return { data, error };
  },

  async updateSignal(signalId: string, updates: any) {
    const { data, error } = await supabase
      .from('trading_signals')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', signalId)
      .select();
    
    return { data, error };
  }
};

// Portfolio tracking operations
export const portfolioService = {
  async addTrade(userId: string, tradeData: {
    symbol: string;
    type: 'buy' | 'sell';
    amount: number;
    price: number;
    date: string;
  }) {
    const { data, error } = await supabase
      .from('trades')
      .insert([{
        user_id: userId,
        ...tradeData
      }])
      .select();
    
    return { data, error };
  },

  async getUserTrades(userId: string) {
    const { data, error } = await supabase
      .from('trades')
      .select('*')
      .eq('user_id', userId)
      .order('date', { ascending: false });
    
    return { data, error };
  }
}; 