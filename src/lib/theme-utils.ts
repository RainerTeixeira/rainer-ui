/**
 * Theme Utilities
 * 
 * Utilitários para trabalhar com temas e cores do design system,
 * usando a nova estrutura de tokens semânticos.
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
 * const primaryColor = lightColors.background.primary;
 * ```
 */
export function getThemeColors(theme: 'light' | 'dark') {
  return tokens.themes[theme];
}

/**
 * Obtém cores semânticas do tema
 * 
 * @param theme - Tema para buscar ('light' | 'dark')
 * @returns Objeto com cores semânticas organizadas
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
  return tokens.themes[theme];
}

/**
 * Obtém cores semânticas de forma simplificada
 * 
 * @param theme - Tema ('light' | 'dark')
 * @returns Objeto simplificado com cores mais usadas
 */
export function getSemanticColorsSimplified(theme: 'light' | 'dark') {
  const colors = tokens.themes[theme] as any;
  
  return {
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      tertiary: colors.text.tertiary,
      disabled: colors.text.disabled,
      inverse: colors.text.inverse,
      link: colors.text.link || colors.interactive?.link?.default || colors.text.primary,
      linkHover: colors.text.linkHover || colors.interactive?.link?.hover || colors.text.primary,
    },
    background: {
      primary: colors.background.primary,
      secondary: colors.background.secondary,
      tertiary: colors.background.tertiary,
      disabled: colors.background.disabled,
      overlay: colors.background.overlay,
    },
    border: {
      default: colors.border.default,
      light: colors.border.light,
      medium: colors.border.medium || colors.border.default,
      dark: colors.border.dark || colors.border.default,
      focus: colors.border.focus || colors.border.default,
      error: colors.border.error || colors.border.default,
      success: colors.border.success || colors.border.default,
      warning: colors.border.warning || colors.border.default,
    },
    button: colors.button,
    status: colors.status,
    interactive: colors.interactive || {},
    surface: colors.surface || {},
  };
}

/**
 * Helper para obter cor de status sem hardcode
 * 
 * @param status - Tipo de status
 * @param theme - Tema (opcional, padrão: light)
 * @returns Valor hex da cor padrão do status
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
  const colors = tokens.themes[theme] as any;
  const statusColors = colors.status?.[status];
  
  if (typeof statusColors === 'string') {
    return statusColors;
  }
  
  if (statusColors && typeof statusColors === 'object' && 'default' in statusColors) {
    return statusColors.default;
  }
  
  // Fallback
  if (status === 'success') return colors.status?.success?.default || '#22c55e';
  if (status === 'error') return colors.status?.error?.default || '#ef4444';
  if (status === 'warning') return colors.status?.warning?.default || '#f87171';
  return colors.status?.info?.default || '#0ea5e9';
}

/**
 * Helper para obter cor de botão primário
 * 
 * @param theme - Tema (opcional, padrão: light)
 * @returns Valor hex da cor padrão do botão primário
 * 
 * @example
 * ```typescript
 * const primaryButton = getButtonPrimaryColor();
 * const primaryButtonDark = getButtonPrimaryColor('dark');
 * ```
 */
export function getButtonPrimaryColor(theme: 'light' | 'dark' = 'light'): string {
  const colors = tokens.themes[theme] as any;
  const buttonPrimary = colors.button?.primary;
  
  if (typeof buttonPrimary === 'string') {
    return buttonPrimary;
  }
  
  return buttonPrimary?.default || '#0ea5e9';
}

/**
 * Helper para obter cor de botão secundário
 * 
 * @param theme - Tema (opcional, padrão: light)
 * @returns Valor hex da cor padrão do botão secundário
 */
export function getButtonSecondaryColor(theme: 'light' | 'dark' = 'light'): string {
  const colors = tokens.themes[theme] as any;
  const buttonSecondary = colors.button?.secondary;
  
  if (typeof buttonSecondary === 'string') {
    return buttonSecondary;
  }
  
  return buttonSecondary?.default || '#e5e7eb';
}

/**
 * Helper para obter cor de botão terciário
 * 
 * @param theme - Tema (opcional, padrão: light)
 * @returns Valor hex da cor padrão do botão terciário
 */
export function getButtonTertiaryColor(theme: 'light' | 'dark' = 'light'): string {
  const colors = tokens.themes[theme] as any;
  const buttonTertiary = colors.button?.tertiary;
  
  if (typeof buttonTertiary === 'string') {
    return buttonTertiary;
  }
  
  return buttonTertiary?.default || 'transparent';
}

/**
 * Helper para obter cor de texto sobre fundo primário
 * 
 * @param theme - Tema (opcional, padrão: light)
 * @returns Valor hex da cor do texto
 */
export function getButtonPrimaryTextColor(theme: 'light' | 'dark' = 'light'): string {
  const colors = tokens.themes[theme] as any;
  const buttonPrimary = colors.button?.primary;
  
  if (typeof buttonPrimary === 'string') {
    return '#ffffff';
  }
  
  return buttonPrimary?.text || '#ffffff';
}

/**
 * Obtém uma cor específica de um tema por categoria e shade
 * 
 * @param theme - Tema para buscar ('light' | 'dark')
 * @param category - Categoria da cor (ex: 'background', 'text', 'button', 'border', 'status')
 * @param shade - Tom/chave da cor (ex: 'primary', 'secondary', 'default')
 * @returns Valor hex da cor ou undefined se não encontrada
 * 
 * @example
 * ```typescript
 * const primaryBg = getColorFromTheme('light', 'background', 'primary');
 * const primaryText = getColorFromTheme('light', 'text', 'primary');
 * const primaryButton = getColorFromTheme('light', 'button', 'primary');
 * ```
 */
export function getColorFromTheme(
  theme: 'light' | 'dark',
  category: 'background' | 'text' | 'button' | 'border' | 'status' | 'interactive' | 'surface',
  shade: string
): string | undefined {
  const colors = tokens.themes[theme] as any;
  const colorCategory = colors[category];
  
  if (!colorCategory || typeof colorCategory !== 'object') {
    return undefined;
  }
  
  // Se for um objeto aninhado (como button.primary.default), busca recursivamente
  const shadeValue = colorCategory[shade];
  if (typeof shadeValue === 'string') {
    return shadeValue;
  }
  
  if (shadeValue && typeof shadeValue === 'object' && 'default' in shadeValue) {
    return shadeValue.default;
  }
  
  return undefined;
}

/**
 * Helper para obter cor de botão/marca por variante
 * 
 * @param variant - Variante da cor de botão ('primary' | 'secondary' | 'tertiary')
 * @param theme - Tema (opcional, padrão: light)
 * @returns Valor hex da cor ou undefined se não encontrada
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
  const colors = tokens.themes[theme] as any;
  const button = colors.button || {};
  
  if (variant === 'primary') {
    const primary = button.primary;
    return typeof primary === 'string' ? primary : primary?.default;
  } else if (variant === 'secondary') {
    const secondary = button.secondary;
    return typeof secondary === 'string' ? secondary : secondary?.default;
  } else if (variant === 'tertiary' && button.tertiary) {
    const tertiary = button.tertiary;
    return typeof tertiary === 'string' ? tertiary : tertiary?.default;
  }
  
  return undefined;
}

/**
 * Constantes de cores semânticas para uso rápido
 * Baseadas nos tokens do design system
 */
export const SEMANTIC_COLORS = {
  light: getSemanticColorsSimplified('light'),
  dark: getSemanticColorsSimplified('dark'),
} as const;

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
