/**
 * Theme Utilities
 *
 * Utilitários para trabalhar com temas e cores do design system.
 * Fonte única de verdade: @rainersoft/design-tokens
 *
 * @module @rainersoft/ui/lib/theme-utils
 * @author Rainer Teixeira
 */
type ThemeKey = 'light' | 'dark';
/**
 * Obtém todas as cores de um tema específico
 */
declare function getThemeColors(theme: ThemeKey): any;
/**
 * Obtém cores semânticas do tema
 */
declare function getSemanticColors(theme: ThemeKey): any;
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
declare function getButtonTertiaryColor(theme?: ThemeKey): string;
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

export { generateTailwindClasses, getBrandColor, getButtonPrimaryColor, getButtonPrimaryTextColor, getButtonSecondaryColor, getButtonTertiaryColor, getColorFromTheme, getSemanticColorConstants, getSemanticColors, getSemanticColorsSimplified, getStatusColor, getThemeColors };
