const fs = require('fs');
const path = require('path');

// Encontrar todos os arquivos .tsx nos componentes
function findComponents(dir) {
  const components = [];
  
  function traverse(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const fullPath = path.join(currentDir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (file.endsWith('.tsx') && !file.includes('.test.') && !file.includes('.stories.')) {
        const relativePath = path.relative('src/components', fullPath);
        // Converter barras invertidas para barras normais
        const normalizedPath = `src/components/${relativePath}`.replace(/\\/g, '/');
        components.push(normalizedPath);
      }
    }
  }
  
  traverse(dir);
  return components;
}

// Gerar configuração do tsup
function generateTsupConfig() {
  const components = findComponents('src/components');
  
  const config = `import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    // Componentes individuais
${components.map(comp => `    '${comp}',`).join('\n')}
  ],
  format: ['esm', 'cjs'],
  dts: false, // Temporariamente desabilitado
  sourcemap: true,
  clean: true,
  minify: false,
  splitting: false, // Desabilitado para exports individuais
  bundle: false, // Desabilitado para exports individuais
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
});`;

  fs.writeFileSync('tsup.config.ts', config);
  console.log(`✅ tsup.config.ts gerado com ${components.length} componentes`);
}

// Gerar exports para package.json
function generatePackageExports() {
  const components = findComponents('src/components');
  
  const exports = {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./styles/global.css": "./src/styles/global.css",
    "./lib/utils": {
      "types": "./dist/lib/utils.d.ts",
      "import": "./dist/lib/utils.mjs",
      "require": "./dist/lib/utils.js"
    },
    "./lib/color-utils": {
      "types": "./dist/lib/color-utils.d.ts",
      "import": "./dist/lib/color-utils.mjs",
      "require": "./dist/lib/color-utils.js"
    }
  };

  // Adicionar exports individuais
  components.forEach(comp => {
    const relativePath = comp.replace('src/components/', '');
    const exportPath = `./components/${relativePath.replace('.tsx', '')}`;
    const distPath = `./dist/components/${relativePath.replace('.tsx', '')}`;
    
    exports[exportPath] = {
      "types": `${distPath}.d.ts`,
      "import": `${distPath}.mjs`,
      "require": `${distPath}.js`
    };
  });

  exports["./package.json"] = "./package.json";

  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  packageJson.exports = exports;
  
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  console.log(`✅ package.json atualizado com ${Object.keys(exports).length} exports`);
}

// Executar
generateTsupConfig();
generatePackageExports();
