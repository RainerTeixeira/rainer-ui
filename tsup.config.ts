import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    'react', 
    'react-dom',
    'next-themes',
    '@/lib/cookies/cookie-manager',
    '@/lib/utils/color-utils'
  ],
  treeshake: true,
  minify: false,
  target: 'es2020',
  outDir: 'dist',
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
