/**
 * @fileoverview Ponto único de entrada para design tokens (CSS + TS)
 *
 * @description
 * Centraliza e tipa o acesso aos design tokens do pacote
 * @rainersoft/design-tokens, consumindo exclusivamente o diretório `/formats`.
 *
 * Este módulo expõe:
 * - Tokens tipados (primitives, themes, semantics)
 * - Utilitário cn (clsx + tailwind-merge)
 * - Presets de motion semânticos
 * - Helpers de cores (tema, status, marca)
 * - Geradores utilitários para Tailwind
 * - Constantes de layout (z-index, classes semânticas)
 *
 * @module src/lib/tokens
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// @ts-expect-error: o pacote não publica .d.ts para tokens.json; consumo direto do formats
import tokensData from '@rainersoft/design-tokens/formats/tokens.json';
import '@rainersoft/design-tokens/formats/css-vars.css';

/**
 * Tipagem base dos tokens importados
 */
export type Tokens = typeof tokensData;

/**
 * Temas suportados pelo design system
 */
export type ThemeKey = 'light' | 'dark';

/**
 * Tokens expostos de forma tipada
 */
export const tokens: Tokens = tokensData;

/**
 * Combina classes CSS utilizando clsx + tailwind-merge
 *
 * @example
 * cn('p-4', isActive && 'bg-primary')
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Mapa semântico de z-index para layout e sobreposições
 */
export const Z_INDEX = {
  base: String(tokens.primitives?.zIndex?.base ?? 100),
  navigation: String(tokens.primitives?.zIndex?.content ?? 150),
  dropdown: String(tokens.primitives?.zIndex?.dropdown ?? 300),
  modal: String(tokens.primitives?.zIndex?.modal ?? 400),
  overlay: String(tokens.primitives?.zIndex?.overlay ?? 400),
  sticky: String(tokens.primitives?.zIndex?.sticky ?? 200),
  fixed: String(tokens.primitives?.zIndex?.fixed ?? 300),
  tooltip: String(tokens.primitives?.zIndex?.tooltip ?? 500),
} as const;

/**
 * Tokens brutos de motion
 */
export const motionTokens = tokens.primitives?.motion ?? {};

/**
 * Atalhos de motion
 */
export const animationDelays = motionTokens.delay ?? {};
export const animationDurations = motionTokens.duration ?? {};
export const animationEasings = motionTokens.easing ?? {};

/**
 * Fallbacks de motion
 */
const baseDuration =
  animationDurations.normal ??
  animationDurations.default ??
  '200ms';

const fastDuration =
  animationDurations.fast ?? baseDuration;

const slowDuration =
  animationDurations.slow ?? baseDuration;

const easeInOut =
  animationEasings.easeInOut ??
  animationEasings.default ??
  'ease-in-out';

const easeOut =
  animationEasings.easeOut ?? easeInOut;

const spring =
  animationEasings.spring ?? easeInOut;

/**
 * Presets semânticos para animações
 */
export const motionPresets = {
  default: {
    duration: baseDuration,
    easing: easeInOut,
  },
  fast: {
    duration: fastDuration,
    easing: easeOut,
  },
  slow: {
    duration: slowDuration,
    easing: easeInOut,
  },
  spring: {
    duration: baseDuration,
    easing: spring,
  },
} as const;

/**
 * Retorna o objeto completo do tema
 */
export function getTheme(theme: ThemeKey) {
  return tokens.themes?.[theme] ?? {};
}

/**
 * Retorna apenas as cores do tema
 */
export function getThemeColors(theme: ThemeKey) {
  return getTheme(theme)?.colors ?? {};
}

/**
 * Retorna cores semânticas simplificadas
 */
export function getSemanticColors(theme: ThemeKey) {
  return {
    colors: getThemeColors(theme),
  };
}

/**
 * Retorna a cor base de um status
 */
export function getStatusColor(
  status: 'success' | 'warning' | 'error' | 'info',
  theme: ThemeKey = 'light'
): string {
  return (
    getThemeColors(theme)?.[status]?.base ??
    'var(--color-black)'
  );
}

/**
 * Retorna cor principal de botão
 */
export function getButtonPrimaryColor(
  theme: ThemeKey = 'light'
): string {
  return (
    getThemeColors(theme)?.primary?.base ??
    'var(--color-cyan-600)'
  );
}

/**
 * Retorna cor secundária de botão
 */
export function getButtonSecondaryColor(
  theme: ThemeKey = 'light'
): string {
  return (
    getThemeColors(theme)?.secondary?.base ??
    'var(--color-indigo-500)'
  );
}

/**
 * Retorna cor de texto do botão primário
 */
export function getButtonPrimaryTextColor(
  theme: ThemeKey = 'light'
): string {
  return (
    getThemeColors(theme)?.primary?.text ??
    'var(--color-white)'
  );
}

/**
 * Retorna uma cor específica do tema
 */
export function getColorFromTheme(
  theme: ThemeKey,
  category: string,
  shade: string
): string | undefined {
  return getThemeColors(theme)?.[category]?.[shade];
}

/**
 * Retorna cores de marca por variante
 */
export function getBrandColor(
  variant: 'primary' | 'secondary' | 'tertiary',
  theme: ThemeKey = 'light'
): string | undefined {
  return getThemeColors(theme)?.[variant]?.base;
}

/**
 * Gera classes Tailwind dinamicamente
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
  return Object.entries(options)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${key}-${value}`)
    .join(' ');
}

/**
 * Retorna uma variável CSS a partir de um token
 */
export function getTokenColor(
  tokenName: string
): string {
  return `var(--${tokenName})`;
}

/**
 * Cria overlay RGBA a partir de token CSS
 */
export function overlayFromToken(
  tokenName: string,
  alpha = 0.08
): string {
  const normalized = tokenName.startsWith('color-')
    ? tokenName
    : `color-${tokenName}`;

  return `rgba(var(--${normalized}-rgb, 0 0 0), ${alpha})`;
}

/**
 * Valida hexadecimal
 */
export function isValidHex(hex: string): boolean {
  return /^#?[0-9A-Fa-f]{6}$/.test(hex);
}

/**
 * Retorna cor de contraste baseada na luminância
 */
export function getContrastColor(hex: string): string {
  const clean = hex.replace('#', '');

  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);

  const luminance =
    (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5
    ? 'var(--color-black)'
    : 'var(--color-white)';
}

/**
 * Tokens diretos por tema
 */
export const lightTokens = tokens.themes?.light ?? {};
export const darkTokens = tokens.themes?.dark ?? {};

/**
 * Classes semânticas de layout
 */
export const COMPONENT_CLASSES =
  tokens.semantics?.layoutClasses?.components ?? {};

export const SECTION_CLASSES =
  tokens.semantics?.layoutClasses?.sections ?? {};

/**
 * Direções de gradiente
 */
export const GRADIENT_DIRECTIONS =
  tokens.primitives?.gradientDirections ?? {};
