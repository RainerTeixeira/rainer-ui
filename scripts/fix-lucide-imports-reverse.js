#!/usr/bin/env node

/**
 * Script para corrigir imports do lucide-react
 * Converte imports de paths internos para imports públicos
 * Fix para compatibilidade com Next.js 15 e Webpack
 */

const fs = require('fs');
const path = require('path');

// Mapeamento reverso: de path interno para nome do ícone
const pathToIconMap = {
  'lucide-react/dist/esm/icons/check': 'Check',
  'lucide-react/dist/esm/icons/copy': 'Copy',
  'lucide-react/dist/esm/icons/facebook': 'Facebook',
  'lucide-react/dist/esm/icons/link-2': 'Link2',
  'lucide-react/dist/esm/icons/linkedin': 'Linkedin',
  'lucide-react/dist/esm/icons/message-circle': 'MessageCircle',
  'lucide-react/dist/esm/icons/qr-code': 'QrCode',
  'lucide-react/dist/esm/icons/send': 'Send',
  'lucide-react/dist/esm/icons/share-2': 'Share2',
  'lucide-react/dist/esm/icons/twitter': 'Twitter',
  'lucide-react/dist/esm/icons/mail': 'Mail',
  'lucide-react/dist/esm/icons/smartphone': 'Smartphone',
  'lucide-react/dist/esm/icons/more-horizontal': 'MoreHorizontal',
  'lucide-react/dist/esm/icons/plus': 'Plus',
  'lucide-react/dist/esm/icons/x': 'X',
  'lucide-react/dist/esm/icons/quote': 'Quote',
  'lucide-react/dist/esm/icons/calendar': 'Calendar',
  'lucide-react/dist/esm/icons/chevron-left': 'ChevronLeft',
  'lucide-react/dist/esm/icons/chevron-right': 'ChevronRight',
  'lucide-react/dist/esm/icons/chevron-down': 'ChevronDown',
  'lucide-react/dist/esm/icons/chevron-up': 'ChevronUp',
  'lucide-react/dist/esm/icons/search': 'Search',
  'lucide-react/dist/esm/icons/filter': 'Filter',
  'lucide-react/dist/esm/icons/download': 'Download',
  'lucide-react/dist/esm/icons/upload': 'Upload',
  'lucide-react/dist/esm/icons/edit': 'Edit',
  'lucide-react/dist/esm/icons/trash': 'Trash',
  'lucide-react/dist/esm/icons/settings': 'Settings',
  'lucide-react/dist/esm/icons/bell': 'Bell',
  'lucide-react/dist/esm/icons/user': 'User',
  'lucide-react/dist/esm/icons/users': 'Users',
  'lucide-react/dist/esm/icons/home': 'Home',
  'lucide-react/dist/esm/icons/menu': 'Menu',
  'lucide-react/dist/esm/icons/arrow-left': 'ArrowLeft',
  'lucide-react/dist/esm/icons/arrow-right': 'ArrowRight',
  'lucide-react/dist/esm/icons/arrow-up': 'ArrowUp',
  'lucide-react/dist/esm/icons/arrow-down': 'ArrowDown',
  'lucide-react/dist/esm/icons/eye': 'Eye',
  'lucide-react/dist/esm/icons/eye-off': 'EyeOff',
  'lucide-react/dist/esm/icons/heart': 'Heart',
  'lucide-react/dist/esm/icons/star': 'Star',
  'lucide-react/dist/esm/icons/bookmark': 'Bookmark',
  'lucide-react/dist/esm/icons/external-link': 'ExternalLink',
  'lucide-react/dist/esm/icons/github': 'Github',
  'lucide-react/dist/esm/icons/instagram': 'Instagram',
  'lucide-react/dist/esm/icons/youtube': 'Youtube',
  'lucide-react/dist/esm/icons/play': 'Play',
  'lucide-react/dist/esm/icons/pause': 'Pause',
  'lucide-react/dist/esm/icons/square': 'Stop',
  'lucide-react/dist/esm/icons/volume-2': 'Volume2',
  'lucide-react/dist/esm/icons/volume-x': 'VolumeX',
  'lucide-react/dist/esm/icons/wifi': 'Wifi',
  'lucide-react/dist/esm/icons/wifi-off': 'WifiOff',
  'lucide-react/dist/esm/icons/battery': 'Battery',
  'lucide-react/dist/esm/icons/battery-low': 'BatteryLow',
  'lucide-react/dist/esm/icons/battery-charging': 'BatteryCharging',
  'lucide-react/dist/esm/icons/clock': 'Clock',
  'lucide-react/dist/esm/icons/alarm-clock': 'AlarmClock',
  'lucide-react/dist/esm/icons/timer': 'Timer',
  'lucide-react/dist/esm/icons/watch': 'Watch',
  'lucide-react/dist/esm/icons/sun': 'Sun',
  'lucide-react/dist/esm/icons/moon': 'Moon',
  'lucide-react/dist/esm/icons/cloud': 'Cloud',
  'lucide-react/dist/esm/icons/cloud-rain': 'CloudRain',
  'lucide-react/dist/esm/icons/cloud-snow': 'CloudSnow',
  'lucide-react/dist/esm/icons/umbrella': 'Umbrella',
  'lucide-react/dist/esm/icons/wind': 'Wind',
  'lucide-react/dist/esm/icons/thermometer': 'Thermometer',
  'lucide-react/dist/esm/icons/droplets': 'Droplets',
  'lucide-react/dist/esm/icons/map-pin': 'MapPin',
  'lucide-react/dist/esm/icons/navigation': 'Navigation',
  'lucide-react/dist/esm/icons/compass': 'Compass',
  'lucide-react/dist/esm/icons/camera': 'Camera',
  'lucide-react/dist/esm/icons/image': 'Image',
  'lucide-react/dist/esm/icons/film': 'Film',
  'lucide-react/dist/esm/icons/music': 'Music',
  'lucide-react/dist/esm/icons/headphones': 'Headphones',
  'lucide-react/dist/esm/icons/mic': 'Mic',
  'lucide-react/dist/esm/icons/mic-off': 'MicOff',
  'lucide-react/dist/esm/icons/video': 'Video',
  'lucide-react/dist/esm/icons/video-off': 'VideoOff',
  'lucide-react/dist/esm/icons/phone': 'Phone',
  'lucide-react/dist/esm/icons/phone-off': 'PhoneOff',
  'lucide-react/dist/esm/icons/message-square': 'MessageSquare',
  'lucide-react/dist/esm/icons/at-sign': 'AtSign',
  'lucide-react/dist/esm/icons/hash': 'Hash',
  'lucide-react/dist/esm/icons/percent': 'Percent',
  'lucide-react/dist/esm/icons/dollar-sign': 'DollarSign',
  'lucide-react/dist/esm/icons/credit-card': 'CreditCard',
  'lucide-react/dist/esm/icons/wallet': 'Wallet',
  'lucide-react/dist/esm/icons/shopping-cart': 'ShoppingCart',
  'lucide-react/dist/esm/icons/package': 'Package',
  'lucide-react/dist/esm/icons/truck': 'Truck',
  'lucide-react/dist/esm/icons/building': 'Building',
  'lucide-react/dist/esm/icons/store': 'Store',
  'lucide-react/dist/esm/icons/briefcase': 'Briefcase',
  'lucide-react/dist/esm/icons/coffee': 'Coffee',
  'lucide-react/dist/esm/icons/pizza': 'Pizza',
  'lucide-react/dist/esm/icons/apple': 'Apple',
  'lucide-react/dist/esm/icons/zap': 'Zap',
  'lucide-react/dist/esm/icons/shield': 'Shield',
  'lucide-react/dist/esm/icons/lock': 'Lock',
  'lucide-react/dist/esm/icons/unlock': 'Unlock',
  'lucide-react/dist/esm/icons/key': 'Key',
  'lucide-react/dist/esm/icons/fingerprint': 'Fingerprint',
  'lucide-react/dist/esm/icons/alert-triangle': 'AlertTriangle',
  'lucide-react/dist/esm/icons/alert-circle': 'AlertCircle',
  'lucide-react/dist/esm/icons/info': 'Info',
  'lucide-react/dist/esm/icons/help-circle': 'HelpCircle',
  'lucide-react/dist/esm/icons/x-circle': 'XCircle',
  'lucide-react/dist/esm/icons/check-circle': 'CheckCircle',
  'lucide-react/dist/esm/icons/loader-2': 'Loader2',
  'lucide-react/dist/esm/icons/trending-up': 'TrendingUp',
  'lucide-react/dist/esm/icons/trending-down': 'TrendingDown',
  'lucide-react/dist/esm/icons/minus': 'Minus',
  'lucide-react/dist/esm/icons/octagon-alert': 'Octagon'
};

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Agrupa imports do lucide-react por arquivo
    const lucideImports = {};
    const importLines = [];

    // Encontra todos os imports do lucide-react
    const lines = content.split('\n');
    let newLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Verifica se é um import do lucide-react com path interno (named import)
      const namedImportMatch = line.match(/import\s*\{([^}]+)\}\s+from\s+['"]lucide-react\/dist\/esm\/icons\/([^'"]+)['"];?/);
      
      // Verifica se é um import do lucide-react com path interno (default import)
      const defaultImportMatch = line.match(/import\s+(\w+)(?:\s+as\s+(\w+))?\s+from\s+['"]lucide-react\/dist\/esm\/icons\/([^'"]+)['"];?/);
      
      const importMatch = namedImportMatch || defaultImportMatch;
      
      if (importMatch) {
        if (namedImportMatch) {
          const [, importNames] = namedImportMatch;
          const iconNames = importNames.split(',').map(name => name.trim());
          
          for (const iconName of iconNames) {
            const cleanName = iconName.split(' as ')[0].trim();
            const finalName = iconName.includes(' as ') ? iconName.split(' as ')[1].trim() : cleanName;
            
            if (!lucideImports['lucide-react']) {
              lucideImports['lucide-react'] = [];
            }
            lucideImports['lucide-react'].push(finalName);
          }
        } else {
          const [, importName, alias] = defaultImportMatch;
          const finalName = alias || importName;
          
          if (!lucideImports['lucide-react']) {
            lucideImports['lucide-react'] = [];
          }
          lucideImports['lucide-react'].push(finalName);
        }
        
        modified = true;
        console.log(`  🔄 Converting: ${line.trim()}`);
      } else {
        newLines.push(line);
      }
    }

    // Se encontrou imports para converter, insere o novo import no início
    if (modified && lucideImports['lucide-react']) {
      const iconNames = lucideImports['lucide-react'].join(', ');
      const newImport = `import { ${iconNames} } from 'lucide-react';`;
      
      // Encontra o último import antes de inserir o novo
      let insertIndex = 0;
      for (let i = 0; i < newLines.length; i++) {
        if (newLines[i].trim().startsWith('import')) {
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
const srcDir = path.join(__dirname, '..', 'src');
const files = findFiles(srcDir);

console.log(`🔍 Searching for lucide-react internal path imports in ${files.length} files...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`\n✨ Fixed ${fixedCount} files with lucide-react imports`);
