/**
 * Theme Utilities
 * 
 * Utilitários para trabalhar com temas e cores do design system.
 * Fonte única de verdade: @rainersoft/design-tokens
 * 
 * @module @rainersoft/ui/lib/theme-utils
 * @author Rainer Teixeira
 */

import { themes } from '@rainersoft/design-tokens';

type ThemeKey = 'light' | 'dark';

/**
 * Obtém todas as cores de um tema específico
 */
export function getThemeColors(theme: ThemeKey) {
  return themes[theme];
}

/**
 * Obtém cores semânticas do tema
 */
export function getSemanticColors(theme: ThemeKey) {
  return themes[theme];
}

/**
 * Obtém cores simplificadas do tema
 */
export function getSemanticColorsSimplified(theme: ThemeKey) {
  const themeData = themes[theme] as Record<string, unknown>;
  return {
    colors: themeData?.colors || {},
  };
}

/**
 * Helper para obter cor de status
 */
export function getStatusColor(
  status: 'success' | 'warning' | 'error' | 'info',
  theme: ThemeKey = 'light'
): string {
  const themeData = themes[theme] as { colors?: Record<string, { base?: string }> };
  return themeData?.colors?.[status]?.base || 'var(--color-black)';
}

/**
 * Helper para obter cor de botão primário
 */
export function getButtonPrimaryColor(theme: ThemeKey = 'light'): string {
  const themeData = themes[theme] as { colors?: Record<string, { base?: string }> };
  return themeData?.colors?.primary?.base || 'var(--color-cyan-600)';
}

/**
 * Helper para obter cor de botão secundário
 */
export function getButtonSecondaryColor(theme: ThemeKey = 'light'): string {
  const themeData = themes[theme] as { colors?: Record<string, { base?: string }> };
  return themeData?.colors?.secondary?.base || '#6366f1';
}

/**
 * Helper para obter cor de botão terciário
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getButtonTertiaryColor(theme: ThemeKey = 'light'): string {
  return 'transparent';
}

/**
 * Helper para obter cor de texto sobre fundo primário
 */
export function getButtonPrimaryTextColor(theme: ThemeKey = 'light'): string {
  const themeData = themes[theme] as { colors?: Record<string, { text?: string }> };
  return themeData?.colors?.primary?.text || 'var(--color-white)';
}

/**
 * Obtém uma cor específica de um tema
 */
export function getColorFromTheme(
  theme: ThemeKey,
  category: string,
  shade: string
): string | undefined {
  const themeData = themes[theme] as { colors?: Record<string, Record<string, string>> };
  return themeData?.colors?.[category]?.[shade];
}

/**
 * Helper para obter cor de marca por variante
 */
export function getBrandColor(
  variant: 'primary' | 'secondary' | 'tertiary',
  theme: ThemeKey = 'light'
): string | undefined {
  const themeData = themes[theme] as { colors?: Record<string, { base?: string }> };
  return themeData?.colors?.[variant]?.base;
}

/**
 * Obtém constantes de cores semânticas (lazy-loaded)
 */
export function getSemanticColorConstants() {
  return {
    light: getSemanticColorsSimplified('light'),
    dark: getSemanticColorsSimplified('dark'),
  };
}

/**
 * Gera classes Tailwind CSS
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
  
  Object.entries(options).forEach(([key, value]) => {
    if (value && !['bg', 'text', 'border', 'rounded', 'shadow', 'p', 'm'].includes(key)) {
      classes.push(`${key}-${value}`);
    }
  });
  
  return classes.join(' ');
}
