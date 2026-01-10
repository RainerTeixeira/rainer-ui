import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    // Arquivos principais
    'src/index.ts',
    
    // Todos os arquivos .ts/.tsx em src/lib e src/hooks
    'src/lib/**/*.{ts,tsx}',
    'src/hooks/**/*.{ts,tsx}',
    
    // Todos os arquivos .ts/.tsx em src/components
    'src/components/**/*.{ts,tsx}',
  ],
  format: ['esm', 'cjs'],
  dts: false,
  sourcemap: true,
  clean: true,
  minify: false,
  splitting: false,
  bundle: false,
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