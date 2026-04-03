import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // Carregar variáveis de ambiente

  return {
    plugins: [react()],
    define: {
      VITE_GOOGLE_MAPS_API_KEY: JSON.stringify(env.VITE_GOOGLE_MAPS_API_KEY),
      SUPABASE_URL: JSON.stringify(env.SUPABASE_URL),
      SUPABASE_ANON_KEY: JSON.stringify(env.SUPABASE_ANON_KEY)
    },
  };
});