#!/usr/bin/env node

/**
 * Script para verificar e corrigir nomes de ícones do lucide-react
 */

const fs = require('fs');
const path = require('path');

// Mapeamento de ícones problemáticos para os nomes corretos
const iconCorrections = {
  'Twitter': 'Twitter',
  'Linkedin': 'Linkedin', 
  'Facebook': 'Facebook',
  'Share2': 'Share2',
  'MessageCircle': 'MessageCircle',
  'Send': 'Send',
  'QrCode': 'QrCode',
  'Copy': 'Copy',
  'Link2': 'Link2',
  'Smartphone': 'Smartphone',
  'Plus': 'Plus',
  'X': 'X',
  'Check': 'Check',
  'ChevronDown': 'ChevronDown',
  'ChevronUp': 'ChevronUp',
  'Upload': 'Upload',
  'Calendar': 'Calendar',
  'Timer': 'Timer',
  'Clock': 'Clock',
  'Search': 'Search',
  'Filter': 'Filter',
  'Phone': 'Phone',
  'ArrowUp': 'ArrowUp',
  'ArrowDown': 'ArrowDown',
  'TrendingUp': 'TrendingUp',
  'TrendingDown': 'TrendingDown',
  'Minus': 'Minus',
  'ChevronLeft': 'ChevronLeft',
  'ChevronRight': 'ChevronRight',
  'User': 'User',
  'Settings': 'Settings',
  'Menu': 'Menu',
  'Bell': 'Bell',
  'Info': 'Info',
  'AlertTriangle': 'AlertTriangle',
  'AlertCircle': 'AlertCircle',
  'ArrowLeft': 'ArrowLeft',
  'CheckCircle': 'CheckCircle',
  'Star': 'Star',
  'StarHalf': 'StarHalf',
  'Quote': 'Quote',
  'FileText': 'FileText',
  'Eye': 'Eye',
  'Heart': 'Heart',
  'MessageSquare': 'MessageSquare',
  'Loader2': 'Loader2',
  'Octagon': 'Octagon',
  'Edit': 'Edit',
  'HelpCircle': 'HelpCircle',
  'BookOpen': 'BookOpen',
  'Video': 'Video',
  'ExternalLink': 'ExternalLink',
  'Moon': 'Moon',
  'Sun': 'Sun',
  'Home': 'Home',
  'Bookmark': 'Bookmark',
  'Download': 'Download',
  'Play': 'Play',
  'Pause': 'Pause',
  'RotateCw': 'RotateCw',
  'Wifi': 'Wifi',
  'XCircle': 'XCircle',
  'Package': 'Package',
  'MoreHorizontal': 'MoreHorizontal'
};

// Verifica quais ícones existem no lucide-react
function checkLucideIcons() {
  try {
    const lucideReact = require('lucide-react');
    const availableIcons = Object.keys(lucideReact);
    
    console.log('🔍 Verificando ícones do lucide-react...');
    
    const missingIcons = [];
    const existingIcons = [];
    
    for (const [iconName, correctName] of Object.entries(iconCorrections)) {
      if (availableIcons.includes(correctName)) {
        existingIcons.push(correctName);
      } else {
        missingIcons.push(`${iconName} -> ${correctName}`);
      }
    }
    
    console.log(`✅ Ícones existentes (${existingIcons.length}):`);
    existingIcons.forEach(icon => console.log(`  - ${icon}`));
    
    if (missingIcons.length > 0) {
      console.log(`❌ Ícones faltantes (${missingIcons.length}):`);
      missingIcons.forEach(icon => console.log(`  - ${icon}`));
    }
    
    return { existingIcons, missingIcons };
  } catch (error) {
    console.error('❌ Erro ao verificar lucide-react:', error.message);
    return { existingIcons: [], missingIcons: [] };
  }
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove imports duplicados e consolida
    const lines = content.split('\n');
    let newLines = [];
    let lucideImports = new Set();
    let skipNext = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (skipNext) {
        skipNext = false;
        continue;
      }
      
      // Verifica se é um import do lucide-react
      const importMatch = line.match(/import\s*\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/);
      
      if (importMatch) {
        const [, importNames] = importMatch;
        const iconNames = importNames.split(',').map(name => name.trim());
        
        // Adiciona todos os ícones ao conjunto
        iconNames.forEach(iconName => {
          const cleanName = iconName.split(' as ')[0].trim();
          const finalName = iconName.includes(' as ') ? iconName.split(' as ')[1].trim() : cleanName;
          lucideImports.add(finalName);
        });
        
        modified = true;
        console.log(`  🔄 Consolidando: ${line.trim()}`);
      } else {
        newLines.push(line);
      }
    }

    // Se encontrou imports, insere um único import consolidado
    if (modified && lucideImports.size > 0) {
      const sortedIcons = Array.from(lucideImports).sort();
      const newImport = `import { ${sortedIcons.join(', ')} } from 'lucide-react';`;
      
      // Encontra o melhor lugar para inserir o import
      let insertIndex = 0;
      for (let i = 0; i < newLines.length; i++) {
        if (newLines[i].trim().startsWith('import') && !newLines[i].includes('lucide-react')) {
          insertIndex = i + 1;
        } else if (newLines[i].trim() === '' && insertIndex > 0) {
          break;
        }
      }
      
      newLines.splice(insertIndex, 0, newImport);
      content = newLines.join('\n');
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFiles(dir, extensions = ['.tsx', '.ts']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔧 Verificando e corrigindo imports do lucide-react...');

// Primeiro verifica quais ícones existem
const { existingIcons, missingIcons } = checkLucideIcons();

if (missingIcons.length > 0) {
  console.log('\n⚠️  Alguns ícones podem precisar de correção manual');
}

// Depois corrige os arquivos
const srcDir = path.join(__dirname, '..', 'src');
const files = findFiles(srcDir);

console.log(`\n🔍 Procurando imports do lucide-react em ${files.length} arquivos...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`\n✨ ${fixedCount} arquivos corrigidos com imports do lucide-react`);
