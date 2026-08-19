import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Vercel deployment - use root path
  base: process.env.VITE_BASE_PATH || '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['color-functions', 'import', 'legacy-js-api'],
        api: 'modern-compiler',
      }
    }
  },
  optimizeDeps: {
    include: ['bootstrap', 'react-bootstrap']
  }
});