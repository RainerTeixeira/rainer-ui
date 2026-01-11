import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: false,
  sourcemap: true,
  clean: true,
  minify: false,
  splitting: false,
  bundle: true,
  treeshake: true,
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
    'react-day-picker',
    'qrcode.react',
    'sonner',
    'cmdk',
    'embla-carousel-react',
    'react-hook-form'
  ],
  target: 'es2020',
  outDir: 'dist',
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});