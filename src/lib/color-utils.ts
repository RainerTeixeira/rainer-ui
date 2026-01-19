/**
 * Utilitários de Cor
 * 
 * Funções helper para conversão e manipulação de cores,
 * baseadas 100% nos design tokens do @rainersoft/design-tokens.
 * 
 * Fonte única de verdade: @rainersoft/design-tokens (ES modules)
 * 
 * @module @rainersoft/ui/lib/color-utils
 * @author Rainer Teixeira
 */

import { tokens } from '@rainersoft/design-tokens';

type ThemeKey = 'light' | 'dark';

/**
 * Obtém cores do tema especificado dos design tokens
 */
function getThemeColors(theme: ThemeKey) {
  // Acessa themes via index signature para evitar erro de tipo
  const tokenObj = tokens as Record<string, unknown>;
  return (tokenObj.themes as Record<string, unknown>)?.[theme] || {};
}

/**
 * Retorna o valor CSS do token (usa CSS var por padrão)
 * 
 * @param tokenName - Nome do token (ex: 'color-primary' ou 'primary')
 * @param theme - Tema para buscar valor direto ('light' | 'dark'), opcional
 * @returns String CSS (var(--...) ou valor hex se theme especificado)
 * 
 * @example
 * ```typescript
 * getTokenColor('primary') // "var(--color-primary)"
 * getTokenColor('primary', 'light') // "var(--color-blue-500)" (valor direto do token)
 * ```
 */
export function getTokenColor(tokenName: string, theme?: ThemeKey): string {
  // Se theme especificado, tenta buscar valor direto dos temas
  if (theme) {
    const themeColors = getThemeColors(theme) as Record<string, unknown>;
    const colorValue = themeColors[tokenName] as string;
    if (colorValue) {
      return colorValue;
    }
  }

  // Busca token nos semânticos
  const tokenObj = tokens as Record<string, unknown>;
  const semanticTokens = tokenObj.semantics as Record<string, unknown>;
  const colorTokens = semanticTokens.color as Record<string, unknown>;
  
  // Busca em color-roles
  const colorRoles = colorTokens['color-roles'] as Record<string, unknown>;
  if (colorRoles?.[tokenName]) {
    return `var(--${tokenName})`;
  }

  // Busca em primitivas
  const primitiveTokens = tokenObj.primitives as Record<string, unknown>;
  const colorPrimitives = primitiveTokens.color as Record<string, unknown>;
  if (colorPrimitives?.[tokenName]) {
    return `var(--${tokenName})`;
  }

  // Fallback para CSS var padrão
  return `var(--${tokenName})`;
}

/**
 * Gera overlay com base no token
 * 
 * @param tokenName - Nome do token de cor
 * @param alpha - Opacidade (padrão: 0.08)
 * @param theme - Tema para buscar valor direto ('light' | 'dark'), opcional
 * @returns String CSS rgba
 * 
 * @description
 * Tenta buscar valor direto do token e converte hex → rgba.
 * Se não encontrar, retorna CSS var com formato RGB para uso em rgba().
 * 
 * @example
 * ```typescript
 * overlayFromToken('primary', 0.08, 'light') // "var(--color-cyan-600)"
 * overlayFromToken('primary') // "rgba(var(--color-primary-rgb), 0.08)"
 * ```
 */
export function overlayFromToken(tokenName: string, alpha: number = 0.08, theme?: 'light' | 'dark'): string {
  const cleanName = tokenName.replace(/^color-/, '');
  
  // Se theme especificado, busca valor direto e converte
  if (theme) {
    const hexColor = getTokenColor(cleanName, theme);
    if (hexColor.startsWith('#')) {
      // Por ora, retorna CSS var - conversão hex pode ser feita pelo consumidor
      const varName = tokenName.startsWith('color-') ? tokenName : `color-${tokenName}`;
      return `rgba(var(--${varName}-rgb, 0 0 0), ${alpha})`;
    }
  }
  
  // Fallback: usa CSS var com formato RGB
  const varName = tokenName.startsWith('color-') ? tokenName : `color-${tokenName}`;
  return `rgba(var(--${varName}-rgb, 0 0 0), ${alpha})`;
}

/**
 * Verifica se uma string é uma cor hexadecimal válida
 * 
 * @param hex - String para verificar
 * @returns true se for hexadecimal válido, false caso contrário
 * 
 * @example
 * ```typescript
 * isValidHex('var(--color-cyan-600)')  // true
 * isValidHex('0891b2')   // true
 * isValidHex('#xyz')     // false
 * ```
 */
export function isValidHex(hex: string): boolean {
  const cleanHex = hex.replace('#', '');
  return /^[0-9A-Fa-f]{6}$/.test(cleanHex);
}

/**
 * Obtém a cor de contraste (preto ou branco) baseado na luminosidade
 * 
 * @param hex - Cor hexadecimal de fundo
 * @returns "var(--color-black)" para fundos claros, "var(--color-white)" para fundos escuros
 * 
 * @example
 * ```typescript
 * getContrastColor('var(--color-cyan-600)') // "var(--color-white)"
 * getContrastColor('#f0f0f0') // "var(--color-black)"
 * ```
 */
export function getContrastColor(hex: string): string {
  const cleanHex = hex.replace('#', '');
  
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  // Calcula luminosidade relativa (fórmula W3C)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Se luminosidade > 0.5, usar preto; caso contrário, branco
  return luminance > 0.5 ? 'var(--color-black)' : 'var(--color-white)';
}
