import { defineConfig } from 'tsup';
import path from 'path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false,
  sourcemap: true,
  clean: true,
  minify: false,
  splitting: true,
  bundle: true,
  external: [
    'react', 
    'react-dom',
    'next-themes',
    'next/link',
    'react-loading-indicators',
    '@rainersoft/design-tokens',
    '@radix-ui/react-avatar',
    '@radix-ui/react-separator',
    '@radix-ui/react-progress',
    'class-variance-authority',
    'lucide-react',
    'next',
    'framer-motion',
    'date-fns',
    'react-day-picker'
  ],
  target: 'es2020',
  outDir: 'dist',
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
    // Resolve @ alias para src
    options.alias = {
      '@': path.resolve(__dirname, 'src'),
    };
  },
});

