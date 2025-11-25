/**
 * Utilitários de Cor
 * 
 * Funções helper para conversão e manipulação de cores,
 * baseadas 100% nos design tokens do @rainersoft/design-tokens.
 * 
 * Fonte única de verdade: @rainersoft/design-tokens/formats/tokens.json
 * 
 * @module @rainersoft/ui/lib/color-utils
 * @author Rainer Teixeira
 */

// Importa tokens.json para resolução de cores
let tokensJson: any = null;
try {
  tokensJson = require('@rainersoft/design-tokens/formats/tokens.json');
} catch (e) {
  console.warn('[@rainersoft/ui] tokens.json não disponível para color-utils');
}

/**
 * Retorna o valor CSS do token (prefere CSS var se existir)
 * 
 * @param tokenName - Nome do token (ex: 'color-primary' ou 'primary')
 * @returns String CSS (var(--...) ou valor hex)
 * 
 * @example
 * ```typescript
 * getTokenColor('primary') // "var(--color-primary)"
 * getTokenColor('color-primary') // "var(--color-primary)"
 * ```
 */
export function getTokenColor(tokenName: string): string {
  // Remove prefixo 'color-' se presente para busca
  const cleanName = tokenName.replace(/^color-/, '');
  
  // Tenta encontrar no tokens.json
  if (tokensJson?.colors) {
    for (const [_category, values] of Object.entries(tokensJson.colors)) {
      if (typeof values === 'object' && values !== null) {
        const token = (values as any)[cleanName];
        if (token) {
          // Se tem variable definida, retornar CSS var
          if (token.variable) return `var(--${token.variable})`;
          // Se tem value, retornar diretamente
          if (token.value) return token.value;
        }
      }
    }
  }
  
  // Fallback: assume que tokenName é nome de CSS var
  const varName = tokenName.startsWith('color-') ? tokenName : `color-${tokenName}`;
  return `var(--${varName})`;
}

/**
 * Converte uma cor hexadecimal para RGB
 * 
 * @param hex - Cor em formato hexadecimal (ex: "#0891b2" ou "0891b2")
 * @returns String RGB no formato "r, g, b" (ex: "8, 145, 178")
 * 
 * @example
 * ```typescript
 * hexToRGB('#0891b2') // "8, 145, 178"
 * hexToRGB('0891b2')  // "8, 145, 178"
 * ```
 */
export function hexToRGB(hex: string): string {
  // Remove # se presente
  const cleanHex = hex.replace('#', '');
  
  // Converte hex para RGB
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
}

/**
 * Converte uma cor hexadecimal para RGBA com alpha
 * 
 * @param hex - Cor em formato hexadecimal
 * @param alpha - Valor de opacidade entre 0 e 1 (padrão: 1)
 * @returns String RGBA no formato "rgba(r, g, b, alpha)"
 * 
 * @example
 * ```typescript
 * hexToRGBA('#0891b2', 0.5) // "rgba(8, 145, 178, 0.5)"
 * hexToRGBA('#0891b2') // "rgba(8, 145, 178, 1)"
 * ```
 */
export function hexToRGBA(hex: string, alpha: number = 1): string {
  const rgb = hexToRGB(hex);
  return `rgba(${rgb}, ${alpha})`;
}

/**
 * Gera overlay com base no token
 * 
 * @param tokenName - Nome do token de cor
 * @param alpha - Opacidade (padrão: 0.08)
 * @returns String CSS rgba
 * 
 * @description
 * Se token.value existir, converte hex → rgba.
 * Caso contrário, retorna CSS var com formato RGB para uso em rgba().
 * 
 * @example
 * ```typescript
 * overlayFromToken('primary', 0.08) // "rgba(8, 145, 178, 0.08)"
 * overlayFromToken('primary') // usa alpha padrão 0.08
 * ```
 */
export function overlayFromToken(tokenName: string, alpha: number = 0.08): string {
  const cleanName = tokenName.replace(/^color-/, '');
  
  // Busca valor hex no tokens.json
  if (tokensJson?.colors) {
    for (const [_category, values] of Object.entries(tokensJson.colors)) {
      if (typeof values === 'object' && values !== null) {
        const token = (values as any)[cleanName];
        if (token?.value) {
          return hexToRGBA(token.value, alpha);
        }
      }
    }
  }
  
  // Fallback: retorna rgba usando CSS var
  // Assume que --color-*-rgb existe (padrão do design-tokens)
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
 * isValidHex('#0891b2')  // true
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
 * @returns "#000000" para fundos claros, "#ffffff" para fundos escuros
 * 
 * @example
 * ```typescript
 * getContrastColor('#0891b2') // "#ffffff"
 * getContrastColor('#f0f0f0') // "#000000"
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
  return luminance > 0.5 ? '#000000' : '#ffffff';
}
