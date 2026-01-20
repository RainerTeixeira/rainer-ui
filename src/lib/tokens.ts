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

import '@rainersoft/design-tokens/formats/css-vars.css';
import { tokens as designTokens } from '@rainersoft/design-tokens';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tipo que representa a estrutura completa dos design tokens
 * @typedef {typeof tokens} Tokens
 */
export type Tokens = typeof designTokens;

export const tokens = designTokens;

/**
 * Tipo estendido que inclui suporte para múltiplos temas
 * @typedef {Object} TokensWithThemes
 * @property {Tokens} [lightTheme] - Tokens do tema claro (formato legado)
 * @property {Tokens} [darkTheme] - Tokens do tema escuro (formato legado)
 * @property {Object} [themes] - Objeto contendo os temas disponíveis
 * @property {Tokens} [themes.light] - Tokens do tema claro
 * @property {Tokens} [themes.dark] - Tokens do tema escuro
 */
type TokensWithThemes = Tokens & {
  lightTheme?: Tokens;
  darkTheme?: Tokens;
  themes?: {
    light?: Tokens;
    dark?: Tokens;
  };
};

const tokensWithThemes = tokens as TokensWithThemes;

/**
 * Tokens do tema claro
 * @description Retorna os tokens específicos do tema claro, com fallback para tokens padrão
 * @constant {Tokens}
 */
export const lightTokens: Tokens = tokensWithThemes.themes?.light ?? tokensWithThemes.lightTheme ?? tokens;

/**
 * Tokens do tema escuro
 * @description Retorna os tokens específicos do tema escuro, com fallback para tokens padrão
 * @constant {Tokens}
 */
export const darkTokens: Tokens = tokensWithThemes.themes?.dark ?? tokensWithThemes.darkTheme ?? tokens;

// ============================================================================
// UTILITÁRIOS GERAIS
// ============================================================================

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
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Classes CSS para componentes responsivos
 */
type LayoutClassesTokens = {
  semantics?: {
    layoutClasses?: {
      components?: {
        container?: string;
        spacing?: string;
        card?: { base?: string; hover?: string };
        button?: { base?: string };
        input?: { base?: string };
      };
      sections?: {
        container?: string;
      };
    };
  };
};

const layoutClassesSemantic = (tokens as LayoutClassesTokens).semantics?.layoutClasses ?? {};

export const COMPONENT_CLASSES = layoutClassesSemantic.components ?? {};

/**
 * Classes utilitárias para seções de página
 * Usado por componentes de layout como PageHeader.
 */
export const SECTION_CLASSES = layoutClassesSemantic.sections ?? {};

// ============================================================================
// Z-INDEX TOKENS
// ============================================================================

/**
 * Z-index tokens - Valores baseados nos design tokens
 * @description Hierarquia de z-index para elementos sobrepostos
 */
type ZIndexTokens = {
  semantics?: { layout?: { zIndex?: Record<string, unknown> } };
  primitives?: { zIndex?: Record<string, unknown> };
};

const zIndexSemantic = (tokens as ZIndexTokens).semantics?.layout?.zIndex ?? {};
const zIndexPrimitive = (tokens as ZIndexTokens).primitives?.zIndex ?? {};
const zIndexTokens = {
  ...zIndexPrimitive,
  ...zIndexSemantic,
};

export const Z_INDEX = {
  BACKDROP: String(zIndexTokens.overlay ?? zIndexTokens.modal ?? 400),
  MODAL: String(zIndexTokens.modal ?? 400),
  DROPDOWN: String(zIndexTokens.dropdown ?? 300),
  TOOLTIP: String(zIndexTokens.tooltip ?? 500),
  NAVIGATION: String(zIndexTokens.content ?? zIndexTokens.base ?? 100),
  OVERLAY: String(zIndexTokens.overlay ?? 400),
  STICKY: String(zIndexTokens.sticky ?? zIndexTokens.fixed ?? 200),
  FIXED: String(zIndexTokens.fixed ?? 300),
} as const;

// ============================================================================
// GRADIENT DIRECTION TOKENS
// ============================================================================

/**
 * Gradient direction tokens - Direções para gradientes CSS
 * @description Direções padronizadas para gradientes Tailwind
 */
type GradientDirectionsTokens = { primitives?: { gradientDirections?: Record<string, string> } };

export const GRADIENT_DIRECTIONS = (tokens as GradientDirectionsTokens).primitives?.gradientDirections ?? {};

/**
 * Motion constants - Classes CSS predefinidas baseadas nos tokens
 * @description Combinações prontas de duração e easing para uso direto
 */
type MotionClassesTokens = {
  semantics?: {
    motionClasses?: {
      transition?: {
        default?: string;
        fast?: string;
        slow?: string;
        color?: string;
        transform?: string;
        opacity?: string;
      };
    };
  };
};

const motionClasses = (tokens as MotionClassesTokens).semantics?.motionClasses ?? {};

export const MOTION = {
  TRANSITION: {
    DEFAULT: motionClasses.transition?.default,
    FAST: motionClasses.transition?.fast,
    SLOW: motionClasses.transition?.slow,
    COLOR: motionClasses.transition?.color,
    TRANSFORM: motionClasses.transition?.transform,
    OPACITY: motionClasses.transition?.opacity,
  },
} as const;

/**
 * Motion tokens - Importados diretamente do @rainersoft/design-tokens
 * 
 * @description
 * Única fonte de verdade para tokens de motion (duração, easing, delay).
 * Importados diretamente do pacote design-tokens via ES modules.
 */
type MotionTokens = {
  MOTION?: Record<string, unknown>;
  motionTokens?: Record<string, unknown>;
  primitives?: { motion?: Record<string, unknown> };
};

const motionTokens =
  (tokens as MotionTokens).MOTION ??
  (tokens as MotionTokens).motionTokens ??
  (tokens as MotionTokens).primitives?.motion ??
  {};

export const motion = motionTokens;

/**
 * Motion semântico - Importado dos tokens de motion
 * 
 * @description
 * Animações organizadas semanticamente para uso em componentes.
 * Usa tokens.MOTION como fonte única de verdade.
 */
type MotionSemanticTokens = { semantics?: { motion?: Record<string, unknown> } };

const motionSemanticTokens = (tokens as MotionSemanticTokens).semantics?.motion ?? {};

export const motionSemantic = motionSemanticTokens;

/**
 * Delays de animação importados dos design tokens
 * 
 * @description
 * Usa motion.delay com fallback seguro para garantir
 * consistência em todo o sistema de design.
 */
export const ANIMATION_DELAYS = (motion?.delay ?? {}) as Record<string, string>;

/**
 * Durações de animação importadas dos design tokens
 * 
 * @description
 * Usa motion.duration com fallback seguro para garantir
 * consistência em todo o sistema de design.
 */
export const ANIMATION_DURATIONS = (motion?.duration ?? {}) as Record<string, string>;

/**
 * Easings de animação importados dos design tokens
 * 
 * @description
 * Usa motion.easing com fallback seguro para garantir
 * transições suaves e consistentes.
 */
export const ANIMATION_EASINGS = (motion?.easing ?? {}) as Record<string, string>;

/**
 * Motion presets prontos para uso
 * 
 * @description
 * Combinações pre-configuradas de duration + easing para casos comuns
 * 
 * @example
 * ```tsx
 * <motion.div
 *   transition={motionPresets.default}
 * />
 * ```
 */
const safeMotionDuration = ANIMATION_DURATIONS as Record<string, string>;
const safeMotionEasing = ANIMATION_EASINGS as Record<string, string>;

const defaultDuration = safeMotionDuration?.normal ?? safeMotionDuration?.default;
const fastDuration = safeMotionDuration?.fast ?? defaultDuration;
const slowDuration = safeMotionDuration?.slow ?? defaultDuration;

const easeInOut = safeMotionEasing?.easeInOut ?? safeMotionEasing?.default;
const easeOut = safeMotionEasing?.easeOut ?? easeInOut;
const spring = safeMotionEasing?.spring ?? easeInOut;

type MotionSemanticShape = {
  transition?: { default?: unknown };
  interaction?: { hover?: unknown };
  feedback?: { success?: unknown };
  navigation?: { page?: unknown };
};

const motionSemanticTyped = motionSemantic as MotionSemanticShape;

export const motionPresets = {
  default: {
    duration: defaultDuration,
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
    duration: defaultDuration,
    easing: spring,
  },
  // Presets semânticos
  semantic: {
    transition: motionSemanticTyped.transition?.default,
    interaction: motionSemanticTyped.interaction?.hover,
    feedback: motionSemanticTyped.feedback?.success,
    navigation: motionSemanticTyped.navigation?.page,
  }
};

// ============================================================================
// THEME UTILITIES
// ============================================================================

type ThemeKey = 'light' | 'dark';

/**
 * Obtém todas as cores de um tema específico
 */
export function getThemeColors(theme: ThemeKey) {
  const tokenObj = tokens as Record<string, unknown>;
  return (tokenObj.themes as Record<string, unknown>)?.[theme] || {};
}

/**
 * Obtém cores semânticas do tema
 */
export function getSemanticColors(theme: ThemeKey) {
  return getThemeColors(theme);
}

/**
 * Obtém cores simplificadas do tema
 */
export function getSemanticColorsSimplified(theme: ThemeKey) {
  const themeData = getThemeColors(theme) as Record<string, unknown>;
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
  const themeData = getThemeColors(theme) as { colors?: Record<string, { base?: string }> };
  return themeData?.colors?.[status]?.base || 'var(--color-black)';
}

/**
 * Helper para obter cor de botão primário
 */
export function getButtonPrimaryColor(theme: ThemeKey = 'light'): string {
  const themeData = getThemeColors(theme) as { colors?: Record<string, { base?: string }> };
  return themeData?.colors?.primary?.base || 'var(--color-cyan-600)';
}

/**
 * Helper para obter cor de botão secundário
 */
export function getButtonSecondaryColor(theme: ThemeKey = 'light'): string {
  const themeData = getThemeColors(theme) as { colors?: Record<string, { base?: string }> };
  return themeData?.colors?.secondary?.base || '#6366f1';
}

/**
 * Helper para obter cor de botão terciário
 */
export function getButtonTertiaryColor(_theme: ThemeKey = 'light'): string {
  return 'transparent';
}

/**
 * Helper para obter cor de texto sobre fundo primário
 */
export function getButtonPrimaryTextColor(theme: ThemeKey = 'light'): string {
  const themeData = getThemeColors(theme) as { colors?: Record<string, { text?: string }> };
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
  const themeData = getThemeColors(theme) as { colors?: Record<string, Record<string, string>> };
  return themeData?.colors?.[category]?.[shade];
}

/**
 * Helper para obter cor de marca por variante
 */
export function getBrandColor(
  variant: 'primary' | 'secondary' | 'tertiary',
  theme: ThemeKey = 'light'
): string | undefined {
  const themeData = getThemeColors(theme) as { colors?: Record<string, { base?: string }> };
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

// ============================================================================
// COLOR UTILITIES
// ============================================================================

/**
 * Retorna o valor CSS do token (usa CSS var por padrão)
 */
export function getTokenColor(tokenName: string, theme?: ThemeKey): string {
  if (theme) {
    const themeColors = getThemeColors(theme) as Record<string, unknown>;
    const colorValue = themeColors[tokenName] as string;
    if (colorValue) {
      return colorValue;
    }
  }

  const tokenObj = tokens as Record<string, unknown>;
  const semanticTokens = tokenObj.semantics as Record<string, unknown>;
  const colorTokens = semanticTokens.color as Record<string, unknown>;
  
  const colorRoles = colorTokens['color-roles'] as Record<string, unknown>;
  if (colorRoles?.[tokenName]) {
    return `var(--${tokenName})`;
  }

  const primitiveTokens = tokenObj.primitives as Record<string, unknown>;
  const colorPrimitives = primitiveTokens.color as Record<string, unknown>;
  if (colorPrimitives?.[tokenName]) {
    return `var(--${tokenName})`;
  }

  return `var(--${tokenName})`;
}

/**
 * Gera overlay com base no token
 */
export function overlayFromToken(tokenName: string, alpha: number = 0.08, theme?: 'light' | 'dark'): string {
  const cleanName = tokenName.replace(/^color-/, '');
  
  if (theme) {
    const hexColor = getTokenColor(cleanName, theme);
    if (hexColor.startsWith('#')) {
      const varName = tokenName.startsWith('color-') ? tokenName : `color-${tokenName}`;
      return `rgba(var(--${varName}-rgb, 0 0 0), ${alpha})`;
    }
  }
  
  const varName = tokenName.startsWith('color-') ? tokenName : `color-${tokenName}`;
  return `rgba(var(--${varName}-rgb, 0 0 0), ${alpha})`;
}

/**
 * Verifica se uma string é uma cor hexadecimal válida
 */
export function isValidHex(hex: string): boolean {
  const cleanHex = hex.replace('#', '');
  return /^[0-9A-Fa-f]{6}$/.test(cleanHex);
}

/**
 * Obtém a cor de contraste (preto ou branco) baseado na luminosidade
 */
export function getContrastColor(hex: string): string {
  const cleanHex = hex.replace('#', '');
  
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance > 0.5 ? 'var(--color-black)' : 'var(--color-white)';
}
