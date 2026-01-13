#!/usr/bin/env node

/**
 * Script para converter ícones problemáticos para default imports
 */

const fs = require('fs');
const path = require('path');

// Ícones que precisam ser convertidos para default imports
const problematicIcons = [
  'Twitter', 'Linkedin', 'Facebook', 'Share2', 'MessageCircle', 
  'Send', 'QrCode', 'Copy', 'Link2', 'Smartphone', 'Plus', 'Check',
  'ChevronDown', 'ChevronUp', 'Upload', 'Calendar', 'Timer', 
  'Clock', 'Search', 'Filter', 'Phone', 'ArrowUp', 'ArrowDown',
  'TrendingUp', 'TrendingDown', 'Minus', 'ChevronLeft', 'ChevronRight',
  'User', 'Settings', 'Menu', 'Bell', 'Info', 'AlertTriangle',
  'AlertCircle', 'ArrowLeft', 'CheckCircle', 'Star', 'StarHalf',
  'Quote', 'FileText', 'Eye', 'Heart', 'MessageSquare', 'Loader2',
  'Octagon', 'Edit', 'HelpCircle', 'BookOpen', 'Video', 'ExternalLink',
  'Moon', 'Sun', 'Home', 'Bookmark', 'Download', 'Play', 'Pause',
  'RotateCw', 'Wifi', 'XCircle', 'Package', 'MoreHorizontal',
  'X', 'CheckIcon', 'CopyIcon', 'QuoteIcon', 'LinkIcon', 'MinusIcon',
  'PlusIcon', 'RotateCw', 'XIcon', 'CalendarIcon'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Encontra imports do lucide-react
    const importRegex = /import\s*\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/g;
    
    content = content.replace(importRegex, (match, imports) => {
      modified = true;
      const iconNames = imports.split(',').map(name => name.trim());
      
      // Separa ícones problemáticos e não problemáticos
      const problemIcons = [];
      const normalIcons = [];
      
      iconNames.forEach(iconName => {
        const cleanName = iconName.split(' as ')[0].trim();
        const alias = iconName.includes(' as ') ? iconName.split(' as ')[1].trim() : cleanName;
        
        if (problematicIcons.includes(cleanName)) {
          problemIcons.push({ name: cleanName, alias });
        } else {
          normalIcons.push(iconName);
        }
      });
      
      const newImports = [];
      
      // Adiciona imports normais como named imports
      if (normalIcons.length > 0) {
        newImports.push(`import { ${normalIcons.join(', ')} } from 'lucide-react';`);
      }
      
      // Adiciona ícones problemáticos como default imports
      problemIcons.forEach(icon => {
        if (icon.alias === icon.name) {
          newImports.push(`import ${icon.name} from 'lucide-react';`);
        } else {
          newImports.push(`import ${icon.name} as ${icon.alias} from 'lucide-react';`);
        }
      });
      
      return newImports.join('\n');
    });

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
const srcDir = path.join(__dirname, '..', 'src');
const files = findFiles(srcDir);

console.log(`🔍 Fixing problematic lucide-react imports in ${files.length} files...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`\n✨ Fixed ${fixedCount} files with problematic lucide-react imports`);
