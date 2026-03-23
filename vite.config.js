import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // This tells Vite exactly where to find tslib if it gets lost
      tslib: 'tslib',
    },
  },
  optimizeDeps: {
    // This forces Vite to pre-bundle these specifically
    include: ['@supabase/supabase-js', 'tslib'],
  },
})