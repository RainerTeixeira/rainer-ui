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
 * getTokenColor('primary', 'light') // "#0ea5e9" (valor direto do token)
 * ```
 */
declare function getTokenColor(tokenName: string, theme?: ThemeKey): string;
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
declare function hexToRGB(hex: string): string;
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
declare function hexToRGBA(hex: string, alpha?: number): string;
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
 * overlayFromToken('primary', 0.08, 'light') // "rgba(8, 145, 178, 0.08)"
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
 * isValidHex('#0891b2')  // true
 * isValidHex('0891b2')   // true
 * isValidHex('#xyz')     // false
 * ```
 */
declare function isValidHex(hex: string): boolean;
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
declare function getContrastColor(hex: string): string;

export { getContrastColor, getTokenColor, hexToRGB, hexToRGBA, isValidHex, overlayFromToken };
