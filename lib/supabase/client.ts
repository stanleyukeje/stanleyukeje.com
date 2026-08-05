import { createClient } from '@supabase/supabase-js';
import { supabaseConfig } from '@/config/supabase';

export function createBrowserClient() {
  return createClient(
    supabaseConfig.url || 'https://placeholder.supabase.co',
    supabaseConfig.anonKey || 'placeholder'
  );
}
