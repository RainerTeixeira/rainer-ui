import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui': resolve(__dirname, '../src'),
    },
  },
  define: {
    'process.env': {},
  },
  server: {
    port: 3010,
    fs: {
      allow: ['..'],
    },
  },
});
