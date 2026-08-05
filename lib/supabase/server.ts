import { createClient } from '@supabase/supabase-js';
import { supabaseConfig } from '@/config/supabase';

export function createServerClient() {
  return createClient(
    supabaseConfig.url || 'https://placeholder.supabase.co',
    supabaseConfig.anonKey || 'placeholder',
    {
      auth: {
        persistSession: false,
      },
    }
  );
}
