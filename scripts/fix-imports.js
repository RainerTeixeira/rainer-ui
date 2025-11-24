#!/usr/bin/env node
/**
 * Script para corrigir imports incorretos nos componentes migrados
 */

const fs = require('fs').promises;
const path = require('path');

const COMPONENTS_DIR = 'C:/Desenvolvimento/rainer-ui/src/components';

// Mapeamento de imports incorretos para correções
const importFixes = {
  // Imports relativos incorretos
  './button': '@rainersoft/ui',
  './card': '@rainersoft/ui',
  './skeleton': '@rainersoft/ui',
  './switch': '@rainersoft/ui',
  './label': '@rainersoft/ui',
  './separator': '@rainersoft/ui',
  
  // Imports de @rainersoft/ui que devem ser absolutos
  '@rainersoft/ui/button': '@rainersoft/ui',
  '@rainersoft/ui/card': '@rainersoft/ui',
  '@rainersoft/ui/switch': '@rainersoft/ui',
  '@rainersoft/ui/label': '@rainersoft/ui',
  '@rainersoft/ui/separator': '@rainersoft/ui',
  '@rainersoft/ui/skeleton': '@rainersoft/ui',
  
  // Imports que precisam ser externos
  'next-themes': 'next-themes',
  '@/lib/cookies/cookie-manager': '@/lib/cookies/cookie-manager',
  
  // Ajuste de paths de utils
  '../../lib/utils': '../../../lib/utils',
  '../../../lib/utils/color-utils': '../../../lib/utils',
};

async function fixFileImports(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf8');
    let modified = false;
    
    // Corrige cada padrão de import
    for (const [wrong, correct] of Object.entries(importFixes)) {
      const regex = new RegExp(`from ['"]${wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`, 'g');
      
      if (regex.test(content)) {
        content = content.replace(regex, `from '${correct}'`);
        modified = true;
      }
    }
    
    // Corrige imports de utils baseado na profundidade do arquivo
    const depth = filePath.split('/components/')[1].split('/').length - 1;
    const utilsPath = '../'.repeat(depth) + 'lib/utils';
    
    // Ajusta import de utils apenas se ainda não está correto
    const utilsRegex = /from ['"]\.+\/lib\/utils['"]/g;
    if (utilsRegex.test(content)) {
      content = content.replace(utilsRegex, `from '${utilsPath}'`);
      modified = true;
    }
    
    // Remove dependências problemáticas temporariamente
    const problematicImports = [
      /import\s+{[^}]*}\s+from\s+['"]next-themes['"];?\s*/g,
      /import\s+{[^}]*}\s+from\s+['"]@\/lib\/cookies\/cookie-manager['"];?\s*/g,
    ];
    
    for (const regex of problematicImports) {
      if (regex.test(content)) {
        content = content.replace(regex, '// TODO: Fix this import\n');
        modified = true;
      }
    }
    
    if (modified) {
      await fs.writeFile(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Erro ao processar ${filePath}:`, error.message);
    return false;
  }
}

async function getAllFiles(dir, fileList = []) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      await getAllFiles(filePath, fileList);
    } else if (file.isFile() && file.name.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

async function main() {
  console.log('🔧 Corrigindo imports nos componentes...\n');
  
  try {
    const files = await getAllFiles(COMPONENTS_DIR);
    let fixedCount = 0;
    
    for (const file of files) {
      if (await fixFileImports(file)) {
        console.log(`✅ Corrigido: ${path.relative(COMPONENTS_DIR, file)}`);
        fixedCount++;
      }
    }
    
    console.log(`\n✨ ${fixedCount} arquivos corrigidos!`);
    
  } catch (error) {
    console.error('❌ Erro:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
