import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/samoa-gaming-gateway/https://github.com/Hamobcdev/Samoa-Gaming-Gateway',
  optimizeDeps: {
    exclude: ['lucide-react'], 
  },
});