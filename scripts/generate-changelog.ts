#!/usr/bin/env node

/**
 * @fileoverview Script de Geração de CHANGELOG
 *
 * @description
 * Script que gera automaticamente o CHANGELOG.md baseado em commits:
 * - Analisa commits com Conventional Commits
 * - Gera changelog no formato Keep a Changelog
 * - Atualiza versão automaticamente
 * - Integra com sistema de release
 *
 * Uso: npx tsx scripts/generate-changelog.ts [opções]
 *
 * @module scripts/generate-changelog
 * @version 1.0.0
 * @author Rainer Teixeira
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';

// Tipos
interface Colors {
  reset: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  cyan: string;
  magenta: string;
}

interface CommitInfo {
  hash: string;
  type: string;
  scope?: string;
  description: string;
  breaking?: boolean;
}

interface ChangelogSection {
  title: string;
  commits: CommitInfo[];
}

// Cores para output
const colors: Colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

function log(message: string, color: keyof Colors = 'reset'): void {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step: string, message: string): void {
  console.log(`${colors.blue}${step}${colors.reset} ${message}`);
}

function logSuccess(message: string): void {
  log(`✅ ${message}`, 'green');
}

function logWarning(message: string): void {
  log(`⚠️  ${message}`, 'yellow');
}

function logError(message: string): void {
  log(`❌ ${message}`, 'red');
}

function logInfo(message: string): void {
  log(`ℹ️  ${message}`, 'cyan');
}

function logHeader(title: string): void {
  console.log('');
  log(`🚀 ${title}`, 'magenta');
  console.log('');
}

/**
 * Obtém informações do package.json
 */
function getPackageInfo(): { name: string; version: string } {
  try {
    const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
    return {
      name: packageJson.name || '@rainersoft/ui',
      version: packageJson.version || '1.0.0'
    };
  } catch (error) {
    logError('Erro ao ler package.json');
    process.exit(1);
  }
}

/**
 * Analisa commits desde a última tag
 */
function getCommitsSinceLastTag(): CommitInfo[] {
  try {
    // Obter última tag
    const lastTag = execSync('git describe --tags --abbrev=0 2>/dev/null || echo ""', { 
      encoding: 'utf8' 
    }).trim();

    // Obter commits desde a última tag (ou todos se não há tag)
    const range = lastTag ? `${lastTag}..HEAD` : 'HEAD';
    const commitOutput = execSync(
      `git log ${range} --pretty=format:"%H|%s" --no-merges`,
      { encoding: 'utf8' }
    ).trim();

    if (!commitOutput) {
      logWarning('Nenhum commit encontrado desde a última release');
      return [];
    }

    const commits: CommitInfo[] = commitOutput
      .split('\n')
      .map(line => {
        const [hash, message] = line.split('|');
        const match = message.match(/^(feat|fix|docs|style|refactor|test|chore|perf)(\(([^)]+)\))?:?\s*(.+?)(\s*BREAKING CHANGE:\s*.+)?$/);
        
        if (!match) return null;

        const [, type, , scope, description, breaking] = match;
        
        return {
          hash: hash.substring(0, 8),
          type,
          scope: scope?.trim(),
          description: description?.trim(),
          breaking: !!breaking
        };
      })
      .filter(Boolean) as CommitInfo[];

    return commits;
  } catch (error) {
    logError('Erro ao analisar commits');
    return [];
  }
}

/**
 * Agrupa commits por tipo
 */
function groupCommitsByType(commits: CommitInfo[]): ChangelogSection[] {
  const typeGroups: { [key: string]: CommitInfo[] } = {
    feat: [],
    fix: [],
    docs: [],
    style: [],
    refactor: [],
    test: [],
    chore: [],
    perf: []
  };

  // Agrupar commits
  commits.forEach(commit => {
    if (typeGroups[commit.type]) {
      typeGroups[commit.type].push(commit);
    }
  });

  // Mapear para seções do changelog
  const sections: ChangelogSection[] = [
    { title: '🚀 Added', commits: typeGroups.feat },
    { title: '🐛 Fixed', commits: typeGroups.fix },
    { title: '📚 Documentation', commits: typeGroups.docs },
    { title: '🎨 Styles', commits: typeGroups.style },
    { title: '♻️ Refactoring', commits: typeGroups.refactor },
    { title: '🧪 Testing', commits: typeGroups.test },
    { title: '🛠️ Improvements', commits: typeGroups.chore },
    { title: '⚡ Performance', commits: typeGroups.perf }
  ].filter(section => section.commits.length > 0);

  return sections;
}

/**
 * Gera conteúdo do changelog
 */
function generateChangelogContent(
  sections: ChangelogSection[],
  version: string
): string {
  const today = new Date().toISOString().split('T')[0];
  let content = `# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [${version}] - ${today}

`;

  // Adicionar seções
  sections.forEach(section => {
    if (section.commits.length === 0) return;

    content += `### ${section.title}\n\n`;

    section.commits.forEach(commit => {
      const scope = commit.scope ? `**${commit.scope}**: ` : '';
      const breaking = commit.breaking ? ' **(BREAKING CHANGE)**' : '';
      content += `- ${scope}${commit.description}${breaking}\n`;
    });

    content += '\n';
  });

  // Manter conteúdo existente (se houver)
  const changelogPath = 'docs/98-CHANGELOG.md';
  if (existsSync(changelogPath)) {
    const existingContent = readFileSync(changelogPath, 'utf8');
    const existingEntries = existingContent.split('---').slice(2).join('---');
    
    if (existingEntries.trim()) {
      content += '---\n\n' + existingEntries;
    }
  }

  return content;
}

/**
 * Atualiza o arquivo CHANGELOG.md
 */
function updateChangelog(content: string): void {
  const changelogPath = 'docs/98-CHANGELOG.md';
  
  try {
    writeFileSync(changelogPath, content, 'utf8');
    logSuccess(`CHANGELOG.md atualizado: ${changelogPath}`);
  } catch (error) {
    logError(`Erro ao salvar CHANGELOG.md: ${error}`);
    process.exit(1);
  }
}

/**
 * Atualiza versão no package.json
 */
function updateVersion(newVersion: string): void {
  try {
    const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
    packageJson.version = newVersion;
    
    writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n', 'utf8');
    logSuccess(`Versão atualizada para ${newVersion}`);
  } catch (error) {
    logError(`Erro ao atualizar versão: ${error}`);
    process.exit(1);
  }
}

/**
 * Calcula próxima versão baseada nos commits
 */
function calculateNextVersion(currentVersion: string, commits: CommitInfo[]): string {
  const [major, minor, patch] = currentVersion.split('.').map(Number);
  
  // Verificar se há breaking changes
  const hasBreaking = commits.some(commit => commit.breaking);
  if (hasBreaking) {
    return `${major + 1}.0.0`;
  }
  
  // Verificar se há novos features
  const hasFeatures = commits.some(commit => commit.type === 'feat');
  if (hasFeatures) {
    return `${major}.${minor + 1}.0`;
  }
  
  // Se há apenas fixes ou outros, incrementar patch
  const hasFixes = commits.some(commit => commit.type === 'fix');
  if (hasFixes) {
    return `${major}.${minor}.${patch + 1}`;
  }
  
  return currentVersion;
}

/**
 * Função principal
 */
function main(): void {
  logHeader('Gerador de CHANGELOG Automático');

  // Obter informações atuais
  const packageInfo = getPackageInfo();
  logInfo(`Pacote: ${packageInfo.name}`);
  logInfo(`Versão atual: ${packageInfo.version}`);

  // Analisar commits
  logStep('📝', 'Analisando commits desde a última release...');
  const commits = getCommitsSinceLastTag();
  
  if (commits.length === 0) {
    logWarning('Nenhum commit novo encontrado. CHANGELOG não será atualizado.');
    return;
  }

  logInfo(`Encontrados ${commits.length} commits`);

  // Agrupar commits por tipo
  const sections = groupCommitsByType(commits);
  
  // Calcular próxima versão
  const nextVersion = calculateNextVersion(packageInfo.version, commits);
  logInfo(`Próxima versão: ${nextVersion}`);

  // Gerar conteúdo do changelog
  const changelogContent = generateChangelogContent(sections, nextVersion);

  // Atualizar arquivos
  updateChangelog(changelogContent);
  
  if (nextVersion !== packageInfo.version) {
    updateVersion(nextVersion);
  }

  // Exibir resumo
  logHeader('Resumo da Geração');
  console.log(`📦 Pacote: ${packageInfo.name}`);
  console.log(`🔢 Versão: ${packageInfo.version} → ${nextVersion}`);
  console.log(`📝 Commits: ${commits.length}`);
  console.log(`📂 Arquivo: docs/98-CHANGELOG.md`);

  logSuccess('CHANGELOG gerado com sucesso!');
}

// Executar script
if (require.main === module) {
  main();
}

export { main, getCommitsSinceLastTag, groupCommitsByType, generateChangelogContent };
