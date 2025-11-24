import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/lib/utils.ts',
    'src/lib/color-utils.ts'
  ],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    'react', 
    'react-dom',
    'next-themes',
    'next/link',
    '@/lib/cookies/cookie-manager',
    '@/hooks/use-pwa',
    '@/hooks/use-smooth-scroll',
    'react-loading-indicators',
    '@rainersoft/design-tokens'
  ],
  treeshake: true,
  minify: process.env.NODE_ENV === 'production',
  target: 'es2020',
  outDir: 'dist',
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
