#!/usr/bin/env node
/**
 * Script para gerar automaticamente o arquivo index.ts com todas as exportações
 */

const fs = require('fs').promises;
const path = require('path');

const COMPONENTS_DIR = 'C:/Desenvolvimento/rainer-ui/src/components';
const OUTPUT_FILE = 'C:/Desenvolvimento/rainer-ui/src/index.ts';

// Categorias de componentes
const categories = {
  actions: 'ACTIONS',
  forms: 'FORMS',
  layout: 'LAYOUT',
  feedback: 'FEEDBACK',
  overlays: 'OVERLAYS',
  navigation: 'NAVIGATION',
  'data-display': 'DATA DISPLAY',
  effects: 'EFFECTS',
  utilities: 'UTILITIES',
};

async function getAllComponents() {
  const components = {};
  
  for (const [folder, categoryName] of Object.entries(categories)) {
    const categoryPath = path.join(COMPONENTS_DIR, folder);
    
    try {
      const items = await fs.readdir(categoryPath, { withFileTypes: true });
      components[folder] = [];
      
      for (const item of items) {
        if (item.isDirectory()) {
          const componentPath = path.join(categoryPath, item.name);
          const files = await fs.readdir(componentPath);
          
          // Procura o arquivo principal do componente
          const mainFile = files.find(f => f.endsWith('.tsx') && !f.includes('.test.'));
          if (mainFile) {
            const componentName = mainFile.replace('.tsx', '');
            components[folder].push({
              name: componentName,
              path: `./${folder}/${item.name}/${componentName}`,
            });
          }
        }
      }
    } catch (error) {
      console.warn(`Categoria ${folder} não encontrada`);
    }
  }
  
  return components;
}

async function generateIndexFile(components) {
  let content = `/**
 * @rainersoft/ui - Biblioteca de Componentes UI
 * 
 * Exportações centralizadas de todos os componentes da biblioteca.
 * Organizados por categoria para facilitar a descoberta e uso.
 * 
 * @module @rainersoft/ui
 * @author Rainer Teixeira
 */

// ============================================================================
// UTILITIES
// ============================================================================
export { cn } from './lib/utils';
export type { ClassValue } from 'clsx';

`;

  // Gera exports para cada categoria
  for (const [folder, categoryName] of Object.entries(categories)) {
    if (components[folder] && components[folder].length > 0) {
      content += `// ============================================================================
// ${categoryName}
// ============================================================================
`;
      
      for (const component of components[folder]) {
        content += `export * from './components${component.path}';\n`;
      }
      
      content += '\n';
    }
  }
  
  return content;
}

async function main() {
  console.log('🔍 Analisando componentes...\n');
  
  try {
    const components = await getAllComponents();
    
    // Mostra estatísticas
    let total = 0;
    for (const [folder, items] of Object.entries(components)) {
      if (items.length > 0) {
        console.log(`📁 ${folder}: ${items.length} componentes`);
        total += items.length;
      }
    }
    
    console.log(`\n📊 Total: ${total} componentes encontrados`);
    
    // Gera o arquivo index.ts
    console.log('\n📝 Gerando index.ts...');
    const indexContent = await generateIndexFile(components);
    await fs.writeFile(OUTPUT_FILE, indexContent);
    
    console.log('✅ Arquivo index.ts gerado com sucesso!');
    console.log(`📍 Local: ${OUTPUT_FILE}`);
    
  } catch (error) {
    console.error('❌ Erro:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
