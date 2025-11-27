/**
 * Theme Utilities
 * 
 * Utilitários para trabalhar com temas e cores do design system,
 * facilitando o uso sem hardcode de valores.
 * 
 * @module @rainersoft/ui/lib/theme-utils
 * @author Rainer Teixeira
 */

import { tokens } from '@rainersoft/design-tokens';

/**
 * Obtém todas as cores de um tema específico
 * 
 * @param theme - Tema para buscar cores ('light' | 'dark')
 * @returns Objeto com todas as cores do tema
 * 
 * @example
 * ```typescript
 * const lightColors = getThemeColors('light');
 * const primaryColor = lightColors.brand.primary;
 * ```
 */
export function getThemeColors(theme: 'light' | 'dark') {
  return theme === 'light' ? tokens.colors.light : tokens.colors.dark;
}

/**
 * Obtém uma cor específica de um tema
 * 
 * @param theme - Tema para buscar ('light' | 'dark')
 * @param category - Categoria da cor (ex: 'brand', 'accent', 'neutral')
 * @param shade - Tom da cor (ex: 'primary', 'secondary', '50', '900')
 * @returns Valor hex da cor ou undefined se não encontrada
 * 
 * @example
 * ```typescript
 * const primary = getColorFromTheme('light', 'brand', 'primary');
 * const cyan500 = getColorFromTheme('dark', 'accent', 'cyan');
 * ```
 */
export function getColorFromTheme(
  theme: 'light' | 'dark',
  category: string,
  shade: string
): string | undefined {
  const colors = getThemeColors(theme);
  const colorCategory = (colors as any)[category];
  
  if (!colorCategory || typeof colorCategory !== 'object') {
    return undefined;
  }
  
  return colorCategory[shade];
}

/**
 * Gera um objeto de cores semantic para uso em componentes
 * 
 * @param theme - Tema base ('light' | 'dark')
 * @returns Objeto com cores semantic prontas para uso
 * 
 * @example
 * ```typescript
 * const semantic = getSemanticColors('light');
 * 
 * <div style={{ color: semantic.text.primary }}>
 *   Texto principal
 * </div>
 * ```
 */
export function getSemanticColors(theme: 'light' | 'dark') {
  const colors = getThemeColors(theme);
  
  return {
    text: {
      primary: (colors as any).text?.primary || (colors as any).neutral?.['900'],
      secondary: (colors as any).text?.secondary || (colors as any).neutral?.['600'],
      muted: (colors as any).text?.muted || (colors as any).neutral?.['500'],
      disabled: (colors as any).text?.disabled || (colors as any).neutral?.['400'],
    },
    background: {
      primary: (colors as any).background?.primary || (colors as any).neutral?.['50'],
      secondary: (colors as any).background?.secondary || (colors as any).neutral?.['100'],
      tertiary: (colors as any).background?.tertiary || (colors as any).neutral?.['200'],
    },
    border: {
      default: (colors as any).border?.default || (colors as any).neutral?.['300'],
      muted: (colors as any).border?.muted || (colors as any).neutral?.['200'],
      strong: (colors as any).border?.strong || (colors as any).neutral?.['400'],
    },
    brand: {
      primary: (colors as any).brand?.primary,
      secondary: (colors as any).brand?.secondary,
      tertiary: (colors as any).brand?.tertiary,
    },
    accent: (colors as any).accent || {},
    status: {
      success: (colors as any).status?.success || '#10b981',
      warning: (colors as any).status?.warning || '#f59e0b',
      error: (colors as any).status?.error || '#ef4444',
      info: (colors as any).status?.info || '#3b82f6',
    },
  };
}

/**
 * Gera classes Tailwind CSS baseadas em tokens
 * 
 * @param options - Opções de geração
 * @returns String com classes Tailwind
 * 
 * @example
 * ```typescript
 * const classes = generateTailwindClasses({
 *   bg: 'primary',
 *   text: 'primary-foreground',
 *   rounded: 'md',
 *   shadow: 'sm',
 * });
 * // "bg-primary text-primary-foreground rounded-md shadow-sm"
 * ```
 */
export function generateTailwindClasses(options: {
  bg?: string;
  text?: string;
  border?: string;
  rounded?: string;
  shadow?: string;
  p?: string;
  m?: string;
  [key: string]: string | undefined;
}): string {
  const classes: string[] = [];
  
  if (options.bg) classes.push(`bg-${options.bg}`);
  if (options.text) classes.push(`text-${options.text}`);
  if (options.border) classes.push(`border-${options.border}`);
  if (options.rounded) classes.push(`rounded-${options.rounded}`);
  if (options.shadow) classes.push(`shadow-${options.shadow}`);
  if (options.p) classes.push(`p-${options.p}`);
  if (options.m) classes.push(`m-${options.m}`);
  
  // Adiciona outras classes personalizadas
  Object.entries(options).forEach(([key, value]) => {
    if (value && !['bg', 'text', 'border', 'rounded', 'shadow', 'p', 'm'].includes(key)) {
      classes.push(`${key}-${value}`);
    }
  });
  
  return classes.join(' ');
}

/**
 * Constantes de cores semantic para uso rápido
 * Baseadas nos tokens do design system
 */
export const SEMANTIC_COLORS = {
  light: getSemanticColors('light'),
  dark: getSemanticColors('dark'),
} as const;

/**
 * Helper para obter cor de status sem hardcode
 * 
 * @param status - Tipo de status
 * @param theme - Tema (opcional, padrão: light)
 * @returns Valor hex da cor
 * 
 * @example
 * ```typescript
 * const successColor = getStatusColor('success');
 * const errorColorDark = getStatusColor('error', 'dark');
 * ```
 */
export function getStatusColor(
  status: 'success' | 'warning' | 'error' | 'info',
  theme: 'light' | 'dark' = 'light'
): string {
  return SEMANTIC_COLORS[theme].status[status];
}

/**
 * Helper para obter cor de marca sem hardcode
 * 
 * @param variant - Variante da cor de marca
 * @param theme - Tema (opcional, padrão: light)
 * @returns Valor hex da cor
 * 
 * @example
 * ```typescript
 * const primaryBrand = getBrandColor('primary');
 * const secondaryBrandDark = getBrandColor('secondary', 'dark');
 * ```
 */
export function getBrandColor(
  variant: 'primary' | 'secondary' | 'tertiary',
  theme: 'light' | 'dark' = 'light'
): string | undefined {
  return SEMANTIC_COLORS[theme].brand[variant];
}
