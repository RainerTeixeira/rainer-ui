#!/usr/bin/env node

/**
 * Script de Validação - Zero Hardcode para @rainersoft/ui
 * 
 * Verifica se existem valores hardcoded no código
 */

const { execSync } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function main() {
  log('🔍 Validando @rainersoft/ui para valores hardcoded...', 'yellow');
  
  let hasIssues = false;
  
  // Check for hex colors
  try {
    const result = execSync(
      `grep -r --include="*.tsx" --include="*.ts" "#[0-9a-fA-F]\\{3,6\\}" src/`,
      { encoding: 'utf8', stdio: 'pipe' }
    );
    
    if (result.trim()) {
      const lines = result.trim().split('\n').filter(line => 
        !line.includes('//') && 
        !line.includes('.test.') && 
        !line.includes('.stories.')
      );
      
      if (lines.length > 0) {
        log('\n⚠️  Cores hexadecimais encontradas:', 'yellow');
        lines.slice(0, 5).forEach(line => log(`  ${line}`, 'yellow'));
        hasIssues = true;
      }
    }
  } catch (e) {
    // No matches found (grep exit code 1)
  }
  
  // Check for hardcoded spacing
  try {
    const result = execSync(
      `grep -r --include="*.tsx" "\\(padding\\|margin\\): [0-9]" src/components/`,
      { encoding: 'utf8', stdio: 'pipe' }
    );
    
    if (result.trim()) {
      log('\n⚠️  Padding/margin hardcoded encontrado:', 'yellow');
      hasIssues = true;
    }
  } catch (e) {
    // No matches found
  }
  
  if (!hasIssues) {
    log('\n✅ Nenhum valor hardcoded encontrado!', 'green');
    process.exit(0);
  } else {
    log('\n❌ Encontrados valores hardcoded. Use @rainersoft/design-tokens!', 'red');
    process.exit(1);
  }
}

main();
