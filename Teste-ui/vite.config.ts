import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui': resolve(__dirname, '../src'),
      '@rainersoft/ui': resolve(__dirname, '../src'),
      '@rainersoft/ui/*': resolve(__dirname, '../src/*'),
      '@rainersoft/utils': resolve(__dirname, '../../rainer-utils/src'),
      '@rainersoft/utils/*': resolve(__dirname, '../../rainer-utils/src/*'),
      '@rainersoft/design-tokens/formats/css-vars.css': resolve(
        __dirname,
        'node_modules/.pnpm/@rainersoft+design-tokens@file+..+..+rainer-design-tokens/node_modules/@rainersoft/design-tokens/formats/css-vars.css'
      ),
    },
  },
  define: {
    'process.env': {},
  },
  server: {
    port: 3010,
    fs: {
      allow: [
        '..',
        '../..',
        '../../rainer-design-tokens',
        // Permitir acesso ao código-fonte local do monorepo (rainer-ui)
        fileURLToPath(new URL('..', import.meta.url)),
      ],
    },
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/dist/**',
        '**/.git/**',
      ],
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },
  esbuild: {
    target: 'es2020'
  }
});
