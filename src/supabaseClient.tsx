import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Atenção: Chaves do Supabase não encontradas!");
  }

export const supabase = createClient(supabaseUrl, supabaseAnonKey);