import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://qjphwxkhigllyjpmqsri.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqcGh3eGtoaWdsbHlqcG1xc3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NzUyNzgsImV4cCI6MjA5MDQ1MTI3OH0.tjTIgWZLJYC3O7CWhuHBS5P8KyAQhiHH1VWDN6d3Rh0";

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Atenção: Chaves do Supabase não encontradas!");
  }

export const supabase = createClient(supabaseUrl, supabaseAnonKey);