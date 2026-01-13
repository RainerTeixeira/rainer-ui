#!/usr/bin/env node

/**
 * Script para corrigir imports do lucide-react
 * Converte imports nomeados para default imports
 */

const fs = require('fs');
const path = require('path');

// Mapeamento de ícones para seus caminhos
const iconMap = {
  'Check': 'check',
  'Copy': 'copy', 
  'Facebook': 'facebook',
  'Link2': 'link-2',
  'Linkedin': 'linkedin',
  'MessageCircle': 'message-circle',
  'QrCode': 'qrcode',
  'Send': 'send',
  'Share2': 'share-2',
  'Twitter': 'twitter',
  'Mail': 'mail',
  'Smartphone': 'smartphone',
  'MoreHorizontal': 'more-horizontal',
  'Plus': 'plus',
  'X': 'x',
  'Quote': 'quote',
  'Calendar': 'calendar',
  'ChevronLeft': 'chevron-left',
  'ChevronRight': 'chevron-right',
  'ChevronDown': 'chevron-down',
  'ChevronUp': 'chevron-up',
  'Search': 'search',
  'Filter': 'filter',
  'Download': 'download',
  'Upload': 'upload',
  'Edit': 'edit',
  'Trash': 'trash',
  'Settings': 'settings',
  'Bell': 'bell',
  'User': 'user',
  'Users': 'users',
  'Home': 'home',
  'Menu': 'menu',
  'Close': 'x',
  'ArrowLeft': 'arrow-left',
  'ArrowRight': 'arrow-right',
  'ArrowUp': 'arrow-up',
  'ArrowDown': 'arrow-down',
  'Eye': 'eye',
  'EyeOff': 'eye-off',
  'Heart': 'heart',
  'Star': 'star',
  'Bookmark': 'bookmark',
  'ExternalLink': 'external-link',
  'Github': 'github',
  'Linkedin': 'linkedin',
  'Twitter': 'twitter',
  'Facebook': 'facebook',
  'Instagram': 'instagram',
  'Youtube': 'youtube',
  'Play': 'play',
  'Pause': 'pause',
  'Stop': 'square',
  'Volume2': 'volume-2',
  'VolumeX': 'volume-x',
  'Wifi': 'wifi',
  'WifiOff': 'wifi-off',
  'Battery': 'battery',
  'BatteryLow': 'battery-low',
  'BatteryCharging': 'battery-charging',
  'Clock': 'clock',
  'AlarmClock': 'alarm-clock',
  'Timer': 'timer',
  'Watch': 'watch',
  'Sun': 'sun',
  'Moon': 'moon',
  'Cloud': 'cloud',
  'CloudRain': 'cloud-rain',
  'CloudSnow': 'cloud-snow',
  'Umbrella': 'umbrella',
  'Wind': 'wind',
  'Thermometer': 'thermometer',
  'Droplets': 'droplets',
  'MapPin': 'map-pin',
  'Navigation': 'navigation',
  'Compass': 'compass',
  'Camera': 'camera',
  'Image': 'image',
  'Film': 'film',
  'Music': 'music',
  'Headphones': 'headphones',
  'Mic': 'mic',
  'MicOff': 'mic-off',
  'Video': 'video',
  'VideoOff': 'video-off',
  'Phone': 'phone',
  'PhoneOff': 'phone-off',
  'MessageSquare': 'message-square',
  'AtSign': 'at-sign',
  'Hash': 'hash',
  'Percent': 'percent',
  'DollarSign': 'dollar-sign',
  'CreditCard': 'credit-card',
  'Wallet': 'wallet',
  'ShoppingCart': 'shopping-cart',
  'Package': 'package',
  'Truck': 'truck',
  'Building': 'building',
  'Store': 'store',
  'Briefcase': 'briefcase',
  'Coffee': 'coffee',
  'Pizza': 'pizza',
  'Apple': 'apple',
  'Zap': 'zap',
  'Shield': 'shield',
  'Lock': 'lock',
  'Unlock': 'unlock',
  'Key': 'key',
  'Fingerprint': 'fingerprint',
  'AlertTriangle': 'alert-triangle',
  'AlertCircle': 'alert-circle',
  'Info': 'info',
  'HelpCircle': 'help-circle',
  'XCircle': 'x-circle',
  'CheckCircle': 'check-circle'
};

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Encontra imports do lucide-react
    const importRegex = /import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"];?/g;
    
    content = content.replace(importRegex, (match, imports) => {
      modified = true;
      const iconNames = imports.split(',').map(name => name.trim());
      
      const fixedImports = iconNames.map(iconName => {
        // Remove alias se existir (ex: "Copy as CopyIcon")
        const cleanName = iconName.split(' as ')[0].trim();
        const alias = iconName.includes(' as ') ? iconName.split(' as ')[1].trim() : cleanName;
        
        // Converte para default import
        if (iconMap[cleanName]) {
          return `import { ${alias} } from 'lucide-react/dist/esm/icons/${iconMap[cleanName]}';`;
        }
        
        // Se não encontrar no mapeamento, mantém o original
        return `import ${iconName} from 'lucide-react';`;
      });
      
      return fixedImports.join('\n');
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

console.log(`🔍 Searching for lucide-react imports in ${files.length} files...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`\n✨ Fixed ${fixedCount} files with lucide-react imports`);
