#!/usr/bin/env node
/**
 * Script Completo de Migração de Componentes UI
 * 
 * 1. Migra todos os componentes de UI do frontend para @rainersoft/ui
 * 2. Renomeia arquivos originais com prefixo OLD_
 * 3. Atualiza imports para usar a biblioteca
 */

const fs = require('fs').promises;
const path = require('path');

// Configuração
const SOURCE_DIR = 'C:/Desenvolvimento/rainer-portfolio-frontend/components/ui';
const TARGET_DIR = 'C:/Desenvolvimento/rainer-ui/src/components';
const FRONTEND_DIR = 'C:/Desenvolvimento/rainer-portfolio-frontend';

// Mapeamento de componentes para categorias
const componentMapping = {
  // Actions
  'button': 'actions',
  'toggle': 'actions',
  'slider': 'actions',
  
  // Forms
  'input': 'forms',
  'textarea': 'forms',
  'select': 'forms',
  'checkbox': 'forms',
  'radio-group': 'forms',
  'switch': 'forms',
  'form': 'forms',
  'label': 'forms',
  
  // Layout
  'card': 'layout',
  'sheet': 'layout',
  'separator': 'layout',
  'aspect-ratio': 'layout',
  'scroll-area': 'layout',
  'table': 'layout',
  
  // Feedback
  'alert': 'feedback',
  'alert-dialog': 'feedback',
  'progress': 'feedback',
  'skeleton': 'feedback',
  'badge': 'feedback',
  'sonner': 'feedback',
  
  // Overlays
  'dialog': 'overlays',
  'popover': 'overlays',
  'tooltip': 'overlays',
  'dropdown-menu': 'overlays',
  'context-menu': 'overlays',
  'hover-card': 'overlays',
  
  // Navigation
  'navigation-menu': 'navigation',
  'tabs': 'navigation',
  'command': 'navigation',
  'accordion': 'navigation',
  'collapsible': 'navigation',
  
  // Data Display
  'calendar': 'data-display',
  'avatar': 'data-display',
  'carousel': 'data-display',
  
  // Effects
  'particles-effect': 'effects',
  'stars-background': 'effects',
  'celestial-background': 'effects',
  'floating-grid': 'effects',
  
  // Utilities
  'back-to-top': 'utilities',
  'cookie-banner': 'utilities',
  'install-prompt': 'utilities',
  'update-notification': 'utilities',
  'loading-screen': 'utilities',
  'page-header': 'utilities',
  'visually-hidden': 'utilities',
  'tokens-demo': 'utilities',
};

// Converte nome para PascalCase
function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Ajusta imports no conteúdo do componente
function adjustComponentImports(content, componentName, category) {
  // Remove 'use client' se existir (será adicionado pelo tsup)
  content = content.replace(/^['"]use client['"];?\s*\n/m, '');
  
  // Ajusta import do utils baseado na profundidade
  content = content.replace(
    /@\/lib\/utils/g,
    '../../../lib/utils'
  );
  
  // Ajusta imports de outros componentes UI
  content = content.replace(
    /@\/components\/ui\//g,
    '@rainersoft/ui/'
  );
  
  // Adiciona cabeçalho do módulo
  const pascalName = toPascalCase(componentName);
  const moduleHeader = `/**
 * Componente ${pascalName}
 * 
 * @module @rainersoft/ui/components/${category}/${componentName}
 */

`;
  
  if (!content.startsWith('/**')) {
    content = moduleHeader + content;
  }
  
  return content;
}

// Ajusta imports nos arquivos do frontend
async function updateFrontendImports(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf8');
    let modified = false;
    
    // Padrões de import para substituir
    const importPatterns = [
      // import { Component } from '@/components/ui/component'
      {
        regex: /import\s+{([^}]+)}\s+from\s+['"]@\/components\/ui\/([^'"]+)['"]/g,
        replacement: "import {$1} from '@rainersoft/ui'"
      },
      // import Component from '@/components/ui/component'
      {
        regex: /import\s+(\w+)\s+from\s+['"]@\/components\/ui\/([^'"]+)['"]/g,
        replacement: "import $1 from '@rainersoft/ui'"
      },
      // import * as Component from '@/components/ui/component'
      {
        regex: /import\s+\*\s+as\s+(\w+)\s+from\s+['"]@\/components\/ui\/([^'"]+)['"]/g,
        replacement: "import * as $1 from '@rainersoft/ui'"
      },
      // import '@/components/ui/component'
      {
        regex: /import\s+['"]@\/components\/ui\/([^'"]+)['"]/g,
        replacement: "import '@rainersoft/ui'"
      }
    ];
    
    for (const pattern of importPatterns) {
      if (pattern.regex.test(content)) {
        content = content.replace(pattern.regex, pattern.replacement);
        modified = true;
      }
    }
    
    if (modified) {
      await fs.writeFile(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Erro ao atualizar ${filePath}:`, error.message);
    return false;
  }
}

// Processa um componente
async function processComponent(fileName) {
  const componentName = fileName.replace('.tsx', '').replace('.ts', '');
  const category = componentMapping[componentName] || 'misc';
  const pascalName = toPascalCase(componentName);
  
  try {
    // 1. Lê o arquivo original
    const sourcePath = path.join(SOURCE_DIR, fileName);
    const content = await fs.readFile(sourcePath, 'utf8');
    
    // 2. Cria diretório de destino
    const targetComponentDir = path.join(TARGET_DIR, category, componentName);
    await fs.mkdir(targetComponentDir, { recursive: true });
    
    // 3. Ajusta e salva o componente migrado
    const adjustedContent = adjustComponentImports(content, componentName, category);
    const targetPath = path.join(targetComponentDir, `${pascalName}.tsx`);
    await fs.writeFile(targetPath, adjustedContent);
    
    // 4. Cria README para o componente
    const readmePath = path.join(targetComponentDir, 'README.md');
    const readmeContent = createComponentReadme(componentName, pascalName);
    await fs.writeFile(readmePath, readmeContent);
    
    // 5. Renomeia arquivo original
    const oldPath = path.join(SOURCE_DIR, `OLD_${fileName}`);
    await fs.rename(sourcePath, oldPath);
    
    return {
      success: true,
      componentName,
      category,
      pascalName
    };
  } catch (error) {
    return {
      success: false,
      componentName,
      error: error.message
    };
  }
}

// Cria README para componente
function createComponentReadme(componentName, pascalName) {
  return `# ${pascalName}

Componente ${pascalName} da biblioteca @rainersoft/ui.

## Uso Básico

\`\`\`tsx
import { ${pascalName} } from '@rainersoft/ui';

function Example() {
  return <${pascalName} />;
}
\`\`\`

## Props

Consulte a documentação TypeScript para lista completa de props disponíveis.

## Exemplos Avançados

Para mais exemplos e casos de uso, consulte o Storybook:

\`\`\`bash
pnpm storybook
\`\`\`

## Temas

Este componente suporta temas dinâmicos através de CSS Variables:

\`\`\`tsx
// Light theme (padrão)
<div data-theme="light">
  <${pascalName} />
</div>

// Dark theme
<div data-theme="dark">
  <${pascalName} />
</div>
\`\`\`
`;
}

// Encontra todos os arquivos TypeScript/React no frontend
async function findAllTypeScriptFiles(dir, fileList = []) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    
    // Ignora node_modules, .next, e diretórios ocultos
    if (file.isDirectory()) {
      if (!file.name.startsWith('.') && 
          file.name !== 'node_modules' && 
          file.name !== '.next' &&
          file.name !== 'dist' &&
          file.name !== 'build') {
        await findAllTypeScriptFiles(filePath, fileList);
      }
    } else if (file.isFile() && 
               (file.name.endsWith('.tsx') || 
                file.name.endsWith('.ts')) &&
               !file.name.includes('.test.') &&
               !file.name.includes('.spec.')) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

// Função principal
async function main() {
  console.log('🚀 Iniciando migração completa de componentes UI\n');
  console.log('📂 Origem:', SOURCE_DIR);
  console.log('📂 Destino:', TARGET_DIR);
  console.log('');
  
  try {
    // 1. Lista todos os componentes
    const files = await fs.readdir(SOURCE_DIR);
    const components = files.filter(f => 
      (f.endsWith('.tsx') || f.endsWith('.ts')) && 
      !f.startsWith('OLD_') &&
      !f.includes('.stories.') && 
      !f.includes('.test.') &&
      f !== 'index.ts'
    );
    
    console.log(`📊 Encontrados ${components.length} componentes para migrar\n`);
    
    // 2. Processa cada componente
    const results = [];
    for (const component of components) {
      process.stdout.write(`⏳ Migrando ${component}...`);
      const result = await processComponent(component);
      results.push(result);
      
      if (result.success) {
        console.log(` ✅ ${result.category}/${result.componentName}/`);
      } else {
        console.log(` ❌ Erro: ${result.error}`);
      }
    }
    
    // 3. Atualiza imports no frontend
    console.log('\n🔄 Atualizando imports no frontend...\n');
    const frontendFiles = await findAllTypeScriptFiles(FRONTEND_DIR);
    let updatedCount = 0;
    
    for (const file of frontendFiles) {
      if (await updateFrontendImports(file)) {
        updatedCount++;
        console.log(`✏️  Atualizado: ${path.relative(FRONTEND_DIR, file)}`);
      }
    }
    
    // 4. Gera arquivo de exportação
    console.log('\n📝 Gerando arquivo de exportação...\n');
    const exportStatements = results
      .filter(r => r.success)
      .map(r => `export * from './components/${r.category}/${r.componentName}/${r.pascalName}';`)
      .join('\n');
    
    const indexPath = path.join(TARGET_DIR, '..', 'index-exports.txt');
    await fs.writeFile(indexPath, exportStatements);
    
    // 5. Resumo final
    console.log('\n' + '='.repeat(60));
    console.log('📊 RESUMO DA MIGRAÇÃO');
    console.log('='.repeat(60));
    console.log(`✅ Componentes migrados: ${results.filter(r => r.success).length}`);
    console.log(`❌ Erros: ${results.filter(r => !r.success).length}`);
    console.log(`📝 Arquivos atualizados: ${updatedCount}`);
    console.log('\n✨ Migração concluída!');
    console.log('\n📌 Próximos passos:');
    console.log('1. cd C:\\Desenvolvimento\\rainer-ui');
    console.log('2. pnpm install');
    console.log('3. pnpm build');
    console.log('4. No frontend: pnpm add @rainersoft/ui@workspace:*');
    
  } catch (error) {
    console.error('\n❌ Erro fatal:', error);
    process.exit(1);
  }
}

// Executa se for o arquivo principal
if (require.main === module) {
  main();
}

module.exports = { main };
