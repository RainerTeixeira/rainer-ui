#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

const COMPONENTS_DIR = path.join(__dirname, '..', 'src', 'components');
const TARGET_PROJECT = process.cwd();

// Mapear componentes disponíveis
const components = {
  button: {
    files: ['actions/button/Button.tsx'],
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority'],
  },
  card: {
    files: ['feedback/card/Card.tsx'],
    dependencies: [],
  },
  dialog: {
    files: ['feedback/dialog/Dialog.tsx'],
    dependencies: ['@radix-ui/react-dialog'],
  },
  dropdown: {
    files: ['navigation/dropdown-menu/DropdownMenu.tsx'],
    dependencies: ['@radix-ui/react-dropdown-menu'],
  },
  input: {
    files: ['forms/input/Input.tsx'],
    dependencies: [],
  },
  select: {
    files: ['forms/select/Select.tsx'],
    dependencies: ['@radix-ui/react-select'],
  },
  switch: {
    files: ['forms/switch/Switch.tsx'],
    dependencies: ['@radix-ui/react-switch'],
  },
  tabs: {
    files: ['layout/tabs/Tabs.tsx'],
    dependencies: ['@radix-ui/react-tabs'],
  },
  tooltip: {
    files: ['feedback/tooltip/Tooltip.tsx'],
    dependencies: ['@radix-ui/react-tooltip'],
  },
  accordion: {
    files: ['layout/accordion/Accordion.tsx'],
    dependencies: ['@radix-ui/react-accordion'],
  },
  avatar: {
    files: ['data-display/avatar/Avatar.tsx'],
    dependencies: ['@radix-ui/react-avatar'],
  },
  badge: {
    files: ['data-display/badge/Badge.tsx'],
    dependencies: ['class-variance-authority'],
  },
  calendar: {
    files: ['data-display/calendar/Calendar.tsx'],
    dependencies: [],
  },
  carousel: {
    files: ['layout/carousel/Carousel.tsx'],
    dependencies: ['embla-carousel-react'],
  },
  checkbox: {
    files: ['forms/checkbox/Checkbox.tsx'],
    dependencies: ['@radix-ui/react-checkbox'],
  },
  'command-palette': {
    files: ['utilities/command-palette/CommandPalette.tsx'],
    dependencies: ['cmdk'],
  },
  progress: {
    files: ['feedback/progress/Progress.tsx'],
    dependencies: ['@radix-ui/react-progress'],
  },
  skeleton: {
    files: ['feedback/skeleton/Skeleton.tsx'],
    dependencies: [],
  },
  toast: {
    files: ['feedback/toast/Toast.tsx'],
    dependencies: ['sonner'],
  },
};

async function copyComponent(componentName) {
  const component = components[componentName];
  if (!component) {
    console.error(`❌ Componente "${componentName}" não encontrado.`);
    console.log('Componentes disponíveis:', Object.keys(components).join(', '));
    return;
  }

  const targetDir = path.join(TARGET_PROJECT, 'components', 'ui');
  
  // Criar diretório se não existir
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`✅ Diretório criado: ${targetDir}`);
  }

  // Copiar arquivos do componente
  for (const file of component.files) {
    const sourcePath = path.join(COMPONENTS_DIR, file);
    const fileName = path.basename(file, '.tsx');
    const targetPath = path.join(targetDir, `${fileName.toLowerCase()}.tsx`);
    
    if (fs.existsSync(sourcePath)) {
      let content = fs.readFileSync(sourcePath, 'utf8');
      
      // Ajustar imports para o novo caminho
      content = content.replace(/@rainersoft\/design-tokens/g, '@/lib/tokens');
      content = content.replace(/@\/lib\/utils/g, '@/lib/utils');
      content = content.replace(/from '\.\.\/\.\.\/lib/g, "from '@/lib");
      
      fs.writeFileSync(targetPath, content);
      console.log(`✅ Componente copiado: ${fileName}`);
    }
  }

  // Instalar dependências se necessário
  if (component.dependencies.length > 0) {
    console.log(`📦 Instalando dependências: ${component.dependencies.join(', ')}`);
    try {
      await execAsync(`pnpm add ${component.dependencies.join(' ')}`, { cwd: TARGET_PROJECT });
      console.log('✅ Dependências instaladas');
    } catch (error) {
      console.error('❌ Erro ao instalar dependências:', error.message);
    }
  }

  console.log(`\n✨ Componente ${componentName} instalado com sucesso!`);
  console.log(`📁 Localização: ${targetDir}`);
}

// CLI interface
const args = process.argv.slice(2);
const command = args[0];

if (command === 'add') {
  const componentName = args[1];
  
  if (!componentName) {
    console.log('Uso: npx @rainersoft/ui add <componente>');
    console.log('\nComponentes disponíveis:');
    Object.keys(components).forEach(name => {
      console.log(`  - ${name}`);
    });
    process.exit(1);
  }

  if (componentName === 'all') {
    // Instalar todos os componentes
    console.log('📦 Instalando todos os componentes...\n');
    for (const name of Object.keys(components)) {
      await copyComponent(name);
    }
  } else {
    copyComponent(componentName);
  }
} else if (command === 'list') {
  console.log('Componentes disponíveis:');
  Object.keys(components).forEach(name => {
    console.log(`  - ${name}`);
  });
} else {
  console.log('Rainer UI - Sistema de componentes copiáveis\n');
  console.log('Comandos:');
  console.log('  npx @rainersoft/ui add <componente>  - Adiciona um componente ao projeto');
  console.log('  npx @rainersoft/ui add all           - Adiciona todos os componentes');
  console.log('  npx @rainersoft/ui list              - Lista componentes disponíveis');
}
