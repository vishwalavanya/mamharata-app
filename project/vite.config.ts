import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/mamharata-app/", // ✅ MUST MATCH REPO NAME
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
