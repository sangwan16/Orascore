import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

function createSupabaseClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase env variables: EXPO_PUBLIC_SUPABASE_URL or EXPO_PUBLIC_SUPABASE_KEY');
    return null;
  }

  const isSSR = typeof window === 'undefined'
  const ExpoWebSecureStoreAdapter = {
    getItem: (key: string) => {
      if (isSSR) return null
      console.debug('getItem', { key })
      return AsyncStorage.getItem(key)
    },
    setItem: (key: string, value: string) => {
      if (isSSR) return
      return AsyncStorage.setItem(key, value)
    },
    removeItem: (key: string) => {
      if (isSSR) return
      return AsyncStorage.removeItem(key)
    },
  }

  try {
    return createClient(supabaseUrl, supabaseKey, {
      auth: {
        storage: ExpoWebSecureStoreAdapter,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
    });
  } catch (error) {
    console.error('Failed to create Supabase client:', error);
    return null;
  }
}

export const supabase = createSupabaseClient();
