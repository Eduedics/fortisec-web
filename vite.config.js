import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base:process.env.VITE_BASE_PATH || "/fortisec-web",
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
        // Silence deprecation warnings from Bootstrap
        silenceDeprecations: ['color-functions', 'import', 'legacy-js-api'],
        // Use modern Sass API
        api: 'modern-compiler',
        // DO NOT add additionalData here - it causes circular imports
      }
    }
  },
  optimizeDeps: {
    include: ['bootstrap', 'react-bootstrap']
  }
});