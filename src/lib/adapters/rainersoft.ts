/**
 * Adaptador Rainersoft para @rainersoft/ui
 * 
 * Conecta a biblioteca UI com @rainersoft/design-tokens quando disponível.
 * Fallback para tokens genéricos se não instalado.
 * 
 * @module @rainersoft/ui/lib/adapters/rainersoft
 * @author Rainer Teixeira
 */

import { createRequire } from 'node:module';
import type { AdapterConfig, AdapterFactory } from '../../types/adapter';
import type { DesignTokens } from '../../types/tokens';
import type { ThemeColors } from '../../types/theme';
import { genericAdapter, GENERIC_TOKENS } from './generic';
import { DEFAULT_LIGHT_COLORS, DEFAULT_DARK_COLORS } from '../../types/theme';

const require = createRequire(import.meta.url);

let rainersoftTokens: DesignTokens | null = null;
let rainersoftLightColors: ThemeColors | null = null;
let rainersoftDarkColors: ThemeColors | null = null;

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
  const designTokens = require('@rainersoft/design-tokens');
  if (designTokens?.tokens) {
    rainersoftTokens = designTokens.tokens as DesignTokens;
  }
  if (designTokens?.lightTheme) {
    rainersoftLightColors = mapThemeToColors(designTokens.lightTheme);
  }
  if (designTokens?.darkTheme) {
    rainersoftDarkColors = mapThemeToColors(designTokens.darkTheme);
  }
} catch {
  // design-tokens não instalado, usar genérico
}

function mapThemeToColors(theme: Record<string, unknown>): ThemeColors {
  const colors = theme?.colors as Record<string, unknown> | undefined;
  if (!colors) return DEFAULT_LIGHT_COLORS;

  return {
    primary: getNestedString(colors, 'brand.primary') || DEFAULT_LIGHT_COLORS.primary,
    primaryForeground: getNestedString(colors, 'text.inverse') || DEFAULT_LIGHT_COLORS.primaryForeground,
    secondary: getNestedString(colors, 'brand.secondary') || DEFAULT_LIGHT_COLORS.secondary,
    secondaryForeground: getNestedString(colors, 'text.inverse') || DEFAULT_LIGHT_COLORS.secondaryForeground,
    accent: getNestedString(colors, 'brand.accent') || DEFAULT_LIGHT_COLORS.accent,
    accentForeground: getNestedString(colors, 'text.primary') || DEFAULT_LIGHT_COLORS.accentForeground,
    background: getNestedString(colors, 'background.primary') || DEFAULT_LIGHT_COLORS.background,
    foreground: getNestedString(colors, 'text.primary') || DEFAULT_LIGHT_COLORS.foreground,
    muted: getNestedString(colors, 'background.muted') || DEFAULT_LIGHT_COLORS.muted,
    mutedForeground: getNestedString(colors, 'text.secondary') || DEFAULT_LIGHT_COLORS.mutedForeground,
    card: getNestedString(colors, 'surface.primary') || DEFAULT_LIGHT_COLORS.card,
    cardForeground: getNestedString(colors, 'text.primary') || DEFAULT_LIGHT_COLORS.cardForeground,
    popover: getNestedString(colors, 'surface.elevated') || DEFAULT_LIGHT_COLORS.popover,
    popoverForeground: getNestedString(colors, 'text.primary') || DEFAULT_LIGHT_COLORS.popoverForeground,
    border: getNestedString(colors, 'border.default') || DEFAULT_LIGHT_COLORS.border,
    input: getNestedString(colors, 'border.default') || DEFAULT_LIGHT_COLORS.input,
    ring: getNestedString(colors, 'border.focus') || DEFAULT_LIGHT_COLORS.ring,
    destructive: getNestedString(colors, 'status.error.base') || DEFAULT_LIGHT_COLORS.destructive,
    destructiveForeground: getNestedString(colors, 'status.error.text') || DEFAULT_LIGHT_COLORS.destructiveForeground,
    success: getNestedString(colors, 'status.success.base') || DEFAULT_LIGHT_COLORS.success,
    successForeground: getNestedString(colors, 'status.success.text') || DEFAULT_LIGHT_COLORS.successForeground,
    warning: getNestedString(colors, 'status.warning.base') || DEFAULT_LIGHT_COLORS.warning,
    warningForeground: getNestedString(colors, 'status.warning.text') || DEFAULT_LIGHT_COLORS.warningForeground,
    info: getNestedString(colors, 'status.info.base') || DEFAULT_LIGHT_COLORS.info,
    infoForeground: getNestedString(colors, 'status.info.text') || DEFAULT_LIGHT_COLORS.infoForeground,
  };
}

function getNestedString(obj: unknown, path: string): string | undefined {
  const keys = path.split('.');
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  
  return typeof current === 'string' ? current : undefined;
}

export const rainersoftAdapter: AdapterConfig = rainersoftTokens ? {
  name: 'rainersoft',
  version: '2.6.0',
  tokens: rainersoftTokens,
  lightColors: rainersoftLightColors || DEFAULT_LIGHT_COLORS,
  darkColors: rainersoftDarkColors || DEFAULT_DARK_COLORS,
  cssVarsPath: '@rainersoft/design-tokens/formats/css-vars.css',
} : {
  ...genericAdapter,
  name: 'rainersoft-fallback',
};

export const createRainersoftAdapter: AdapterFactory = (options) => {
  if (!rainersoftTokens) {
    console.warn(
      '[@rainersoft/ui] @rainersoft/design-tokens não encontrado. ' +
      'Usando tokens genéricos. Instale com: pnpm add @rainersoft/design-tokens'
    );
    return genericAdapter;
  }

  return {
    ...rainersoftAdapter,
    ...(options?.customTransforms && { customTransforms: options.customTransforms }),
  };
};

export const isRainersoftAvailable = (): boolean => rainersoftTokens !== null;

export { GENERIC_TOKENS as FALLBACK_TOKENS };
