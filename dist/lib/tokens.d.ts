import tokens from '@rainersoft/design-tokens';
export { default as tokens } from '@rainersoft/design-tokens';
import { ClassValue } from 'clsx';

/**
 * @fileoverview Ponto único de entrada para design tokens (variáveis CSS + objeto JS)
 *
 * @description
 * Este módulo exporta os design tokens do pacote @rainersoft/design-tokens,
 * incluindo suporte para temas claro e escuro. Importa automaticamente as
 * variáveis CSS necessárias. Também centraliza utilitários gerais e motion.
 *
 * @module src/lib/tokens
 * @author Rainer Teixeira
 * @version 1.0.0
 */

/**
 * Tipo que representa a estrutura completa dos design tokens
 * @typedef {typeof tokens} Tokens
 */
type Tokens = typeof tokens;

/**
 * Tokens do tema claro
 * @description Retorna os tokens específicos do tema claro, com fallback para tokens padrão
 * @constant {Tokens}
 */
declare const lightTokens: Tokens;
/**
 * Tokens do tema escuro
 * @description Retorna os tokens específicos do tema escuro, com fallback para tokens padrão
 * @constant {Tokens}
 */
declare const darkTokens: Tokens;
/**
 * Combina e mescla classes CSS de forma inteligente
 *
 * Esta função é essencial para trabalhar com Tailwind CSS e componentes
 * dinâmicos. Ela resolve conflitos entre classes Tailwind e permite
 * composição condicional de estilos.
 *
 * @param inputs - Classes CSS para combinar
 * @returns String final com classes CSS mescladas
 *
 * @example
 * ```tsx
 * cn('px-4 py-2', 'bg-blue-500') // "px-4 py-2 bg-blue-500"
 * cn('px-4', 'px-2') // "px-2" (resolve conflitos)
 * cn('btn', { 'btn-active': isActive })
 * ```
 */
declare function cn(...inputs: ClassValue[]): string;
declare const COMPONENT_CLASSES: {
    container?: string;
    spacing?: string;
    card?: {
        base?: string;
        hover?: string;
    };
    button?: {
        base?: string;
    };
    input?: {
        base?: string;
    };
};
/**
 * Classes utilitárias para seções de página
 * Usado por componentes de layout como PageHeader.
 */
declare const SECTION_CLASSES: {
    container?: string;
};
declare const Z_INDEX: {
    readonly BACKDROP: string;
    readonly MODAL: string;
    readonly DROPDOWN: string;
    readonly TOOLTIP: string;
    readonly NAVIGATION: string;
    readonly OVERLAY: string;
    readonly STICKY: string;
    readonly FIXED: string;
};
declare const GRADIENT_DIRECTIONS: Record<string, string>;
declare const MOTION: {
    readonly TRANSITION: {
        readonly DEFAULT: string;
        readonly FAST: string;
        readonly SLOW: string;
        readonly COLOR: string;
        readonly TRANSFORM: string;
        readonly OPACITY: string;
    };
};
declare const motion: Record<string, unknown>;
declare const motionSemantic: Record<string, unknown>;
/**
 * Delays de animação importados dos design tokens
 *
 * @description
 * Usa motion.delay com fallback seguro para garantir
 * consistência em todo o sistema de design.
 */
declare const ANIMATION_DELAYS: Record<string, string>;
/**
 * Durações de animação importadas dos design tokens
 *
 * @description
 * Usa motion.duration com fallback seguro para garantir
 * consistência em todo o sistema de design.
 */
declare const ANIMATION_DURATIONS: Record<string, string>;
/**
 * Easings de animação importados dos design tokens
 *
 * @description
 * Usa motion.easing com fallback seguro para garantir
 * transições suaves e consistentes.
 */
declare const ANIMATION_EASINGS: Record<string, string>;
declare const motionPresets: {
    default: {
        duration: string;
        easing: string;
    };
    fast: {
        duration: string;
        easing: string;
    };
    slow: {
        duration: string;
        easing: string;
    };
    spring: {
        duration: string;
        easing: string;
    };
    semantic: {
        transition: unknown;
        interaction: unknown;
        feedback: unknown;
        navigation: unknown;
    };
};
type ThemeKey = 'light' | 'dark';
/**
 * Obtém todas as cores de um tema específico
 */
declare function getThemeColors(theme: ThemeKey): unknown;
/**
 * Obtém cores semânticas do tema
 */
declare function getSemanticColors(theme: ThemeKey): unknown;
/**
 * Obtém cores simplificadas do tema
 */
declare function getSemanticColorsSimplified(theme: ThemeKey): {
    colors: unknown;
};
/**
 * Helper para obter cor de status
 */
declare function getStatusColor(status: 'success' | 'warning' | 'error' | 'info', theme?: ThemeKey): string;
/**
 * Helper para obter cor de botão primário
 */
declare function getButtonPrimaryColor(theme?: ThemeKey): string;
/**
 * Helper para obter cor de botão secundário
 */
declare function getButtonSecondaryColor(theme?: ThemeKey): string;
/**
 * Helper para obter cor de botão terciário
 */
declare function getButtonTertiaryColor(_theme?: ThemeKey): string;
/**
 * Helper para obter cor de texto sobre fundo primário
 */
declare function getButtonPrimaryTextColor(theme?: ThemeKey): string;
/**
 * Obtém uma cor específica de um tema
 */
declare function getColorFromTheme(theme: ThemeKey, category: string, shade: string): string | undefined;
/**
 * Helper para obter cor de marca por variante
 */
declare function getBrandColor(variant: 'primary' | 'secondary' | 'tertiary', theme?: ThemeKey): string | undefined;
/**
 * Obtém constantes de cores semânticas (lazy-loaded)
 */
declare function getSemanticColorConstants(): {
    light: {
        colors: unknown;
    };
    dark: {
        colors: unknown;
    };
};
/**
 * Gera classes Tailwind CSS
 */
declare function generateTailwindClasses(options: {
    bg?: string;
    text?: string;
    border?: string;
    rounded?: string;
    shadow?: string;
    p?: string;
    m?: string;
    [key: string]: string | undefined;
}): string;
/**
 * Retorna o valor CSS do token (usa CSS var por padrão)
 */
declare function getTokenColor(tokenName: string, theme?: ThemeKey): string;
/**
 * Gera overlay com base no token
 */
declare function overlayFromToken(tokenName: string, alpha?: number, theme?: 'light' | 'dark'): string;
/**
 * Verifica se uma string é uma cor hexadecimal válida
 */
declare function isValidHex(hex: string): boolean;
/**
 * Obtém a cor de contraste (preto ou branco) baseado na luminosidade
 */
declare function getContrastColor(hex: string): string;

export { ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS, COMPONENT_CLASSES, GRADIENT_DIRECTIONS, MOTION, SECTION_CLASSES, type Tokens, Z_INDEX, cn, darkTokens, generateTailwindClasses, getBrandColor, getButtonPrimaryColor, getButtonPrimaryTextColor, getButtonSecondaryColor, getButtonTertiaryColor, getColorFromTheme, getContrastColor, getSemanticColorConstants, getSemanticColors, getSemanticColorsSimplified, getStatusColor, getThemeColors, getTokenColor, isValidHex, lightTokens, motion, motionPresets, motionSemantic, overlayFromToken };
