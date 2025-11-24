#!/usr/bin/env node
/**
 * Script de Migração de Componentes
 * 
 * Migra todos os componentes de UI do frontend para a biblioteca @rainersoft/ui
 * organizando-os em categorias lógicas.
 */

const fs = require('fs');
const path = require('path');

// Mapeamento de componentes para suas categorias
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

const sourceDir = 'c:/Desenvolvimento/rainer-portfolio-frontend/components/ui';
const targetDir = 'c:/Desenvolvimento/rainer-ui/src/components';

// Função para converter nome do arquivo para PascalCase
function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Função para ajustar imports no conteúdo
function adjustImports(content, category) {
  // Ajusta import do utils
  content = content.replace(
    /@\/lib\/utils/g,
    `../../../lib/utils`
  );

  // Ajusta imports de outros componentes UI
  content = content.replace(
    /@\/components\/ui\//g,
    `@rainersoft/ui/`
  );

  // Ajusta imports de design tokens
  content = content.replace(
    /@rainersoft\/design-tokens/g,
    `@rainersoft/design-tokens`
  );

  return content;
}

// Função para criar README básico para componente
function createComponentReadme(componentName) {
  const pascalName = toPascalCase(componentName);
  return `# ${pascalName}

Componente ${pascalName} da biblioteca @rainersoft/ui.

## Uso

\`\`\`tsx
import { ${pascalName} } from '@rainersoft/ui';

<${pascalName} />
\`\`\`

## Props

Ver documentação TypeScript para lista completa de props.

## Exemplos

Consulte o Storybook para exemplos interativos.
`;
}

// Função principal de migração
async function migrateComponents() {
  console.log('🚀 Iniciando migração de componentes...\n');

  // Lista todos os arquivos no diretório fonte
  const files = fs.readdirSync(sourceDir);
  
  let migratedCount = 0;
  const exportStatements = [];

  for (const file of files) {
    // Pula arquivos não .tsx e stories/tests
    if (!file.endsWith('.tsx') || file.includes('.stories.') || file.includes('.test.')) {
      continue;
    }

    const componentName = file.replace('.tsx', '');
    const category = componentMapping[componentName] || 'misc';
    const pascalName = toPascalCase(componentName);
    
    // Cria diretório de destino
    const targetComponentDir = path.join(targetDir, category, componentName);
    if (!fs.existsSync(targetComponentDir)) {
      fs.mkdirSync(targetComponentDir, { recursive: true });
    }

    // Lê o arquivo fonte
    const sourcePath = path.join(sourceDir, file);
    let content = fs.readFileSync(sourcePath, 'utf8');
    
    // Ajusta imports
    content = adjustImports(content, category);
    
    // Adiciona cabeçalho de módulo
    const moduleHeader = `/**
 * Componente ${pascalName}
 * 
 * @module @rainersoft/ui/components/${category}/${componentName}
 */

`;
    
    if (!content.startsWith('/**')) {
      content = moduleHeader + content;
    }

    // Salva o componente migrado
    const targetPath = path.join(targetComponentDir, `${pascalName}.tsx`);
    fs.writeFileSync(targetPath, content);
    
    // Cria README para o componente
    const readmePath = path.join(targetComponentDir, 'README.md');
    if (!fs.existsSync(readmePath)) {
      fs.writeFileSync(readmePath, createComponentReadme(componentName));
    }

    // Adiciona à lista de exports
    exportStatements.push(`export * from './components/${category}/${componentName}/${pascalName}';`);
    
    migratedCount++;
    console.log(`✅ Migrado: ${componentName} -> ${category}/${componentName}/`);
  }

  console.log(`\n📊 Total migrado: ${migratedCount} componentes`);
  
  // Retorna os exports para o index.ts
  return exportStatements;
}

// Executa a migração
if (require.main === module) {
  migrateComponents()
    .then(exports => {
      console.log('\n📝 Statements de export para index.ts:');
      console.log(exports.join('\n'));
      console.log('\n✨ Migração concluída com sucesso!');
    })
    .catch(err => {
      console.error('❌ Erro na migração:', err);
      process.exit(1);
    });
}

module.exports = { migrateComponents };
