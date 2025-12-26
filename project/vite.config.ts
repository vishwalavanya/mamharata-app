import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./", // ✅ THIS LINE FIXES GITHUB PAGES
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
