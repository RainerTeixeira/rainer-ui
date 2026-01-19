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
type ThemeKey = 'light' | 'dark';
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
declare function getTokenColor(tokenName: string, theme?: ThemeKey): string;
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
declare function overlayFromToken(tokenName: string, alpha?: number, theme?: 'light' | 'dark'): string;
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
declare function isValidHex(hex: string): boolean;
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
declare function getContrastColor(hex: string): string;

export { getContrastColor, getTokenColor, isValidHex, overlayFromToken };
