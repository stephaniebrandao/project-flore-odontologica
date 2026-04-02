import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env?.VITE_SUPABASE_URL) || "";
const supabaseAnonKey = (import.meta.env?.VITE_SUPABASE_ANON_KEY || "");

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Atenção: Chaves do Supabase não encontradas!");
  }

export const supabase = createClient(supabaseUrl, supabaseAnonKey);