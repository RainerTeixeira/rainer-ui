#!/usr/bin/env tsx

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

/**
 * Script para remover cores hardcoded e substituir por CSS variables dos design tokens
 */

interface ColorMapping {
  [hex: string]: string;
}

// Mapeamento de cores hexadecimais para CSS variables dos design tokens
const colorMappings: ColorMapping = {
  // Cores primárias
  '#ffffff': 'var(--color-white)',
  '#000000': 'var(--color-black)',
  'transparent': 'transparent',
  
  // Gray scale
  '#f9fafb': 'var(--color-gray-50)',
  '#f3f4f6': 'var(--color-gray-100)',
  '#e5e7eb': 'var(--color-gray-200)',
  '#d1d5db': 'var(--color-gray-300)',
  '#9ca3af': 'var(--color-gray-400)',
  '#6b7280': 'var(--color-gray-500)',
  '#4b5563': 'var(--color-gray-600)',
  '#374151': 'var(--color-gray-700)',
  '#1f2937': 'var(--color-gray-800)',
  '#111827': 'var(--color-gray-900)',
  
  // Blue scale
  '#f0f9ff': 'var(--color-blue-50)',
  '#e0f2fe': 'var(--color-blue-100)',
  '#bae6fd': 'var(--color-blue-200)',
  '#7dd3fc': 'var(--color-blue-300)',
  '#38bdf8': 'var(--color-blue-400)',
  '#0ea5e9': 'var(--color-blue-500)',
  '#0284c7': 'var(--color-blue-600)',
  '#0369a1': 'var(--color-blue-700)',
  '#075985': 'var(--color-blue-800)',
  '#0c4a6e': 'var(--color-blue-900)',
  
  // Red scale
  '#fef2f2': 'var(--color-red-50)',
  '#fee2e2': 'var(--color-red-100)',
  '#fecaca': 'var(--color-red-200)',
  '#fca5a5': 'var(--color-red-300)',
  '#f87171': 'var(--color-red-400)',
  '#ef4444': 'var(--color-red-500)',
  '#dc2626': 'var(--color-red-600)',
  '#b91c1c': 'var(--color-red-700)',
  '#991b1b': 'var(--color-red-800)',
  '#7f1d1d': 'var(--color-red-900)',
  
  // Green scale
  '#f0fdf4': 'var(--color-green-50)',
  '#dcfce7': 'var(--color-green-100)',
  '#bbf7d0': 'var(--color-green-200)',
  '#86efac': 'var(--color-green-300)',
  '#4ade80': 'var(--color-green-400)',
  '#22c55e': 'var(--color-green-500)',
  '#16a34a': 'var(--color-green-600)',
  '#15803d': 'var(--color-green-700)',
  '#166534': 'var(--color-green-800)',
  '#14532d': 'var(--color-green-900)',
  
  // Cyan scale
  '#ecfeff': 'var(--color-cyan-50)',
  '#cffafe': 'var(--color-cyan-100)',
  '#a5f3fc': 'var(--color-cyan-200)',
  '#67e8f9': 'var(--color-cyan-300)',
  '#22d3ee': 'var(--color-cyan-400)',
  '#06b6d4': 'var(--color-cyan-500)',
  '#0891b2': 'var(--color-cyan-600)',
  '#0e7490': 'var(--color-cyan-700)',
  '#155e75': 'var(--color-cyan-800)',
  '#164e63': 'var(--color-cyan-900)',
  
  // Purple scale
  '#faf5ff': 'var(--color-purple-50)',
  '#f3e8ff': 'var(--color-purple-100)',
  '#e9d5ff': 'var(--color-purple-200)',
  '#d8b4fe': 'var(--color-purple-300)',
  '#c084fc': 'var(--color-purple-400)',
  '#a855f7': 'var(--color-purple-500)',
  '#9333ea': 'var(--color-purple-600)',
  '#7c3aed': 'var(--color-purple-700)',
  '#6d28d9': 'var(--color-purple-800)',
  '#581c87': 'var(--color-purple-900)',
};

function findFilesToProcess(dir: string): string[] {
  try {
    // Usar PowerShell para Windows
    const result = execSync(`powershell -Command "Get-ChildItem -Path '${dir}' -Recurse -Include '*.tsx','*.ts','*.jsx','*.js' | Select-Object -ExpandProperty FullName"`, { encoding: 'utf-8' });
    return result.split('\n')
      .map(file => file.trim())
      .filter(file => file !== '' && existsSync(file));
  } catch (error) {
    console.error('Erro ao buscar arquivos:', error);
    return [];
  }
}

function processFile(filePath: string): boolean {
  try {
    const content = readFileSync(filePath, 'utf-8');
    let modified = false;
    let newContent = content;

    // Substituir cores hexadecimais por CSS variables
    for (const [hex, cssVar] of Object.entries(colorMappings)) {
      const regex = new RegExp(hex.replace(/[#]/g, '\\#'), 'g');
      if (regex.test(newContent)) {
        newContent = newContent.replace(regex, cssVar);
        modified = true;
        console.log(`  ✅ Substituído ${hex} → ${cssVar}`);
      }
    }

    // Substituir cores rgba hardcoded
    const rgbaRegex = /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([\d.]+)\s*\)/g;
    newContent = newContent.replace(rgbaRegex, (match, r, g, b, _a) => {
      // Converter para hex e depois para CSS variable
      const hex = '#' + [r, g, b].map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
      const cssVar = colorMappings[hex.toLowerCase()];
      if (cssVar) {
        modified = true;
        console.log(`  ✅ Substituído ${match} → ${cssVar}`);
        return cssVar;
      }
      return match;
    });

    if (modified) {
      writeFileSync(filePath, newContent, 'utf-8');
      console.log(`📝 Arquivo atualizado: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Erro ao processar arquivo ${filePath}:`, error);
    return false;
  }
}

function main() {
  console.log('🚀 Iniciando remoção de cores hardcoded...\n');

  const srcDir = join(__dirname, '..', 'src');
  const files = findFilesToProcess(srcDir);

  console.log(`📁 Encontrados ${files.length} arquivos para processar\n`);

  let processedCount = 0;
  let modifiedCount = 0;

  for (const file of files) {
    processedCount++;
    console.log(`[${processedCount}/${files.length}] Processando: ${file}`);
    
    if (processFile(file)) {
      modifiedCount++;
    }
  }

  console.log(`\n✅ Processo concluído!`);
  console.log(`📊 Estatísticas:`);
  console.log(`  - Arquivos processados: ${processedCount}`);
  console.log(`  - Arquivos modificados: ${modifiedCount}`);
  console.log(`  - Arquivos sem alterações: ${processedCount - modifiedCount}`);
  
  if (modifiedCount > 0) {
    console.log(`\n🎯 Todos os arquivos agora usam CSS variables dos design tokens!`);
  } else {
    console.log(`\n✨ Nenhuma alteração necessária - todos os arquivos já usam design tokens!`);
  }
}

if (require.main === module) {
  main();
}

export { main as removeHardcodedColors };
