/**
 * @fileoverview
 * Ponto único de entrada para os Design Tokens da UI (CSS + TypeScript).
 *
 * Este módulo faz a ponte entre o pacote `@rainersoft/design-tokens` e a
 * aplicação, oferecendo:
 *
 * - **Acesso tipado aos tokens** (primitives, themes, semantics)
 * - **Integração com CSS Variables** geradas pelo pacote de design tokens
 * - **Utilitário `cn`** para composição de classes (clsx + tailwind-merge)
 * - **Presets semânticos de motion** (animações, durações, easings)
 * - **Helpers de cores** (por tema, status, marca, variantes)
 * - **Geradores utilitários para Tailwind** (classes dinâmicas)
 * - **Constantes de layout** (z-index, classes semânticas, direções de gradiente)
 *
 * A ideia é que qualquer componente da UI consuma apenas este arquivo,
 * mantendo:
 *
 * - **Consistência visual** (tudo passa pelos mesmos tokens)
 * - **Segurança de tipos** (TypeScript em cima do JSON de tokens)
 * - **Isolamento da fonte de verdade** (o pacote de design tokens pode evoluir
 *   sem quebrar a API pública da UI)
 *
 * @remarks
 * Os tokens são importados do diretório `/formats` do pacote
 * `@rainersoft/design-tokens`, que expõe:
 *
 * - `tokens.json`: estrutura tipável consumida em TypeScript
 * - `css-vars.css`: variáveis CSS globais para uso direto em estilos
 *
 * @example
 * // Uso básico em um componente React com Tailwind:
 * import { cn } from '@rainersoft/ui/lib';
 *
 * function Button({ isActive }: { isActive?: boolean }) {
 *   return (
 *     <button
 *       className={cn(
 *         'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium',
 *         isActive
 *           ? 'bg-primary text-primary-foreground'
 *           : 'bg-muted text-muted-foreground'
 *       )}
 *     >
 *       Clique aqui
 *     </button>
 *   );
 * }
 *
 * @module src/lib/tokens
 * @author Rainer Teixeira <https://github.com/rainerteixeira>
 * @version 1.0.0
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Importação dos tokens e variáveis CSS
import tokensData from '@rainersoft/design-tokens/formats/tokens.json';
import '@rainersoft/design-tokens/formats/css-vars.css';

// ============================================================================
// TIPAGEM
// ============================================================================

/**
 * Estrutura semântica dos tokens
 */
interface SemanticsDefinition {
  motion?: MotionSemantic;
  layoutClasses?: {
    components?: Record<string, string>;
    sections?: Record<string, string>;
  };
  colors?: Record<string, CategoryColors>;
}

/**
 * Token primitivo de motion
 */
interface MotionPrimitives {
  delay?: Record<string, string>;
  duration?: Record<string, string>;
  easing?: Record<string, string>;
}

/**
 * Paleta de cores de uma categoria
 */
interface CategoryColors extends Record<string, string | undefined> {
  base?: string;
  light?: string;
  dark?: string;
  foreground?: string;
}

/**
 * Configuração de botão por tema
 */
interface ButtonPalette {
  default?: string;
  text?: string;
  hover?: string;
  disabled?: string;
}

/**
 * Definição completa de um tema
 */
interface ThemeDefinition {
  colors?: Record<string, CategoryColors>;
  button?: {
    primary?: ButtonPalette;
    secondary?: ButtonPalette;
    tertiary?: ButtonPalette;
    danger?: ButtonPalette;
  };
  spacing?: Record<string, string>;
  typography?: Record<string, string>;
  [key: string]: unknown;
}

/**
 * Estrutura de motion semântico
 */
interface MotionSemantic {
  transition?: {
    default?: { duration?: string; easing?: string };
    fast?: { duration?: string; easing?: string };
    slow?: { duration?: string; easing?: string };
  };
  interaction?: {
    hover?: { duration?: string; easing?: string };
    focus?: { duration?: string; easing?: string };
    active?: { duration?: string; easing?: string };
  };
  feedback?: {
    success?: { duration?: string; easing?: string };
    error?: { duration?: string; easing?: string };
    warning?: { duration?: string; easing?: string };
  };
  navigation?: {
    page?: { duration?: string; easing?: string };
    modal?: { duration?: string; easing?: string };
  };
}

/**
 * Tipagem completa dos tokens
 */
export type Tokens = typeof tokensData & {
  semantics?: SemanticsDefinition;
};

/**
 * Temas suportados pelo design system
 */
export type ThemeKey = 'light' | 'dark';

/**
 * Status de cores semânticas
 */
export type StatusColor = 'success' | 'warning' | 'error' | 'info';

/**
 * Variantes de cor de marca
 */
export type BrandColorVariant = 'primary' | 'secondary' | 'tertiary';

// ============================================================================
// TOKENS PRINCIPAIS
// ============================================================================

/**
 * Tokens expostos de forma tipada
 * @constant
 */
export const tokens: Tokens = tokensData;

/**
 * Combina classes CSS utilizando clsx + tailwind-merge
 * 
 * @param inputs - Classes CSS a serem combinadas
 * @returns String com classes CSS combinadas e otimizadas
 * 
 * @example
 * cn('p-4', isActive && 'bg-primary', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ============================================================================
// Z-INDEX
// ============================================================================

/**
 * Extrai z-index primitivos com segurança
 */
const primitiveZIndex = ((tokens.primitives as Record<string, unknown>)?.zIndex ?? {}) as Record<string, number>;

const getZIndexValue = (key: string, fallback: number): string => {
  const value = primitiveZIndex?.[key];
  return value !== undefined ? String(value) : String(fallback);
};

const baseZIndex = {
  base: getZIndexValue('base', 0),
  content: getZIndexValue('content', 100),
  overlay: getZIndexValue('overlay', 200),
  dropdown: getZIndexValue('dropdown', 300),
  modal: getZIndexValue('modal', 400),
  tooltip: getZIndexValue('tooltip', 500),
  notification: getZIndexValue('notification', 600),
  max: getZIndexValue('max', 9999),
};

/**
 * Mapa semântico de z-index para layout e sobreposições
 * Inclui aliases em CAIXA ALTA para retrocompatibilidade
 * @constant
 */
export const Z_INDEX = {
  ...baseZIndex,
  BASE: baseZIndex.base,
  CONTENT: baseZIndex.content,
  OVERLAY: baseZIndex.overlay,
  DROPDOWN: baseZIndex.dropdown,
  MODAL: baseZIndex.modal,
  TOOLTIP: baseZIndex.tooltip,
  NOTIFICATION: baseZIndex.notification,
  MAX: baseZIndex.max,
  BACKDROP: baseZIndex.overlay,
} as const;

// ============================================================================
// MOTION / ANIMAÇÕES
// ============================================================================

/**
 * Extrai tokens de motion primitivos com segurança
 */
const motionPrimitives = ((tokens.primitives as Record<string, unknown>)?.motion ?? {}) as MotionPrimitives;

/**
 * Tokens brutos de motion
 */
export const motionTokens: MotionPrimitives = motionPrimitives;

/**
 * Atalhos de motion
 */
export const animationDelays = motionTokens?.delay ?? {};
export const animationDurations = motionTokens?.duration ?? {};
export const animationEasings = motionTokens?.easing ?? {};

/**
 * Alias em MAIÚSCULAS para consumo externo
 */
export const ANIMATION_DELAYS = animationDelays;
export const ANIMATION_DURATIONS = animationDurations;
export const ANIMATION_EASINGS = animationEasings;

/**
 * Objeto consolidado de motion
 */
export const motion = {
  duration: animationDurations,
  easing: animationEasings,
  delay: animationDelays,
} as const;

/**
 * Fallbacks de motion
 */
const baseDuration = animationDurations.normal ?? animationDurations.default ?? '200ms';
const fastDuration = animationDurations.fast ?? baseDuration;
const slowDuration = animationDurations.slow ?? baseDuration;
const easeInOut = animationEasings.easeInOut ?? animationEasings.default ?? 'ease-in-out';
const easeOut = animationEasings.easeOut ?? easeInOut;
const spring = animationEasings.spring ?? easeInOut;

/**
 * Presets semânticos para animações
 * @constant
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
 * Motion semântico (tokens > fallback)
 */
const fallbackMotionSemantic: MotionSemantic = {
  transition: {
    default: { duration: baseDuration, easing: easeInOut },
    fast: { duration: fastDuration, easing: easeOut },
    slow: { duration: slowDuration, easing: easeInOut },
  },
  interaction: {
    hover: { duration: fastDuration, easing: easeOut },
    focus: { duration: baseDuration, easing: easeInOut },
    active: { duration: fastDuration, easing: spring },
  },
  feedback: {
    success: { duration: slowDuration, easing: easeInOut },
    error: { duration: slowDuration, easing: spring },
    warning: { duration: slowDuration, easing: easeOut },
  },
  navigation: {
    page: { duration: slowDuration, easing: easeOut },
    modal: { duration: baseDuration, easing: easeInOut },
  },
};

export const motionSemantic = (tokens.semantics?.motion as MotionSemantic) ?? fallbackMotionSemantic;

/**
 * Classes utilitárias de transição (Tailwind friendly)
 * @constant
 */
export const MOTION = {
  TRANSITION: {
    DEFAULT: 'transition-all duration-200 ease-in-out',
    COLOR: 'transition-colors duration-200 ease-in-out',
    TRANSFORM: 'transition-transform duration-200 ease-in-out',
    OPACITY: 'transition-opacity duration-200 ease-in-out',
  },
} as const;

// ============================================================================
// FUNÇÕES DE TEMA
// ============================================================================

/**
 * Retorna o objeto completo do tema
 * 
 * @param theme - Nome do tema ('light' ou 'dark')
 * @returns Definição completa do tema
 */
export function getTheme(theme: ThemeKey): ThemeDefinition {
  return ((tokens.themes as Record<string, ThemeDefinition>)?.[theme] ?? {}) as ThemeDefinition;
}

/**
 * Retorna apenas as cores do tema
 * 
 * @param theme - Nome do tema ('light' ou 'dark')
 * @returns Cores do tema organizadas por categoria
 */
export function getThemeColors(theme: ThemeKey): Record<string, CategoryColors> {
  const themeData = getTheme(theme);
  return (themeData.colors ?? {}) as Record<string, CategoryColors>;
}

/**
 * Retorna cores semânticas simplificadas
 * 
 * @param theme - Nome do tema ('light' ou 'dark')
 * @returns Objeto com cores semânticas do tema
 */
export function getSemanticColors(theme: ThemeKey): { colors: Record<string, CategoryColors> } {
  return {
    colors: getThemeColors(theme),
  };
}

/**
 * Retorna a cor base de um status
 * 
 * @param status - Status da cor ('success', 'warning', 'error', 'info')
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do status ou fallback
 */
export function getStatusColor(
  status: StatusColor,
  theme: ThemeKey = 'light'
): string {
  const statusPalette = getThemeColors(theme)[status];
  return statusPalette?.base ?? `var(--color-${status})`;
}

/**
 * Retorna cor principal de botão
 * 
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do botão primário
 */
export function getButtonPrimaryColor(theme: ThemeKey = 'light'): string {
  const palette = getTheme(theme).button;
  return palette?.primary?.default ?? 'var(--color-primary)';
}

/**
 * Retorna cor secundária de botão
 * 
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do botão secundário
 */
export function getButtonSecondaryColor(theme: ThemeKey = 'light'): string {
  const palette = getTheme(theme).button;
  return palette?.secondary?.default ?? 'var(--color-secondary)';
}

/**
 * Retorna cor de texto do botão primário
 * 
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do texto do botão primário
 */
export function getButtonPrimaryTextColor(theme: ThemeKey = 'light'): string {
  const palette = getTheme(theme).button;
  return palette?.primary?.text ?? 'var(--color-white)';
}

/**
 * Retorna cor da variante terciária do botão
 * 
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do botão terciário
 */
export function getButtonTertiaryColor(theme: ThemeKey = 'light'): string {
  const palette = getTheme(theme).button;
  return palette?.tertiary?.default ?? 'var(--color-muted)';
}

/**
 * Retorna uma cor específica do tema por categoria e tom
 * 
 * @param theme - Nome do tema ('light' ou 'dark')
 * @param category - Categoria da cor (ex: 'primary', 'secondary')
 * @param shade - Tom específico (ex: 'base', 'light', 'dark')
 * @returns Cor CSS ou undefined se não encontrada
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
 * 
 * @param variant - Variante da marca ('primary', 'secondary', 'tertiary')
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS da variante de marca
 */
export function getBrandColor(
  variant: BrandColorVariant,
  theme: ThemeKey = 'light'
): string | undefined {
  return getThemeColors(theme)?.[variant]?.base;
}

/**
 * Retorna cores semânticas simplificadas (subset comum)
 * 
 * @param theme - Nome do tema ('light' ou 'dark')
 * @returns Objeto com cores semânticas principais
 */
export function getSemanticColorsSimplified(theme: ThemeKey): Record<string, CategoryColors | undefined> {
  const colors = getThemeColors(theme);
  return {
    primary: colors?.primary,
    secondary: colors?.secondary,
    success: colors?.success,
    warning: colors?.warning,
    error: colors?.error,
    info: colors?.info,
    muted: colors?.muted,
  };
}

/**
 * Retorna constantes semânticas brutas dos tokens
 * 
 * @returns Objeto com constantes de cores semânticas
 */
export function getSemanticColorConstants(): Record<string, CategoryColors> {
  return tokens.semantics?.colors ?? {};
}

// ============================================================================
// UTILITÁRIOS TAILWIND
// ============================================================================

/**
 * Gera classes Tailwind dinamicamente a partir de opções
 * 
 * @param options - Opções de classes Tailwind
 * @returns String de classes CSS Tailwind
 * 
 * @example
 * generateTailwindClasses({ bg: 'primary', text: 'white', p: '4', rounded: 'lg' })
 * // Retorna: 'bg-primary text-white p-4 rounded-lg'
 */
export function generateTailwindClasses(options: Record<string, string | undefined>): string {
  return Object.entries(options)
    .filter(([, value]) => value !== undefined && value !== '')
    .map(([key, value]) => {
      // Trata casos especiais como prefixos
      if (key === 'bg' || key === 'text' || key === 'border') {
        return `${key}-${value}`;
      }
      return `${key}-${value}`;
    })
    .join(' ');
}

/**
 * Retorna uma variável CSS a partir de um nome de token
 * 
 * @param tokenName - Nome do token (ex: 'color-primary')
 * @returns Variável CSS formatada
 */
export function getTokenColor(tokenName: string): string {
  const normalizedName = tokenName.startsWith('--') ? tokenName.slice(2) : tokenName;
  return `var(--${normalizedName})`;
}

/**
 * Cria cor RGBA a partir de token CSS com transparência
 * 
 * @param tokenName - Nome do token CSS
 * @param alpha - Valor de transparência (0-1, padrão: 0.08)
 * @returns String RGBA
 */
export function overlayFromToken(tokenName: string, alpha: number = 0.08): string {
  const normalized = tokenName.startsWith('color-') ? tokenName : `color-${tokenName}`;
  const rgbVar = `--${normalized}-rgb`;

  return `rgba(var(${rgbVar}, 0 0 0), ${alpha})`;
}

/**
 * Valida se uma string é um hexadecimal válido
 * 
 * @param hex - String hexadecimal a validar
 * @returns Verdadeiro se for hexadecimal válido
 */
export function isValidHex(hex: string): boolean {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(hex);
}

/**
 * Retorna cor de contraste (preto ou branco) baseada na luminância
 * 
 * @param hex - Cor hexadecimal
 * @returns 'var(--color-black)' ou 'var(--color-white)'
 */
export function getContrastColor(hex: string): string {
  const cleanHex = hex.replace('#', '');
  
  // Converte para RGB
  let r: number, g: number, b: number;
  
  if (cleanHex.length === 3) {
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  } else if (cleanHex.length === 6 || cleanHex.length === 8) {
    r = parseInt(cleanHex.slice(0, 2), 16);
    g = parseInt(cleanHex.slice(2, 4), 16);
    b = parseInt(cleanHex.slice(4, 6), 16);
  } else {
    return 'var(--color-black)';
  }
  
  // Calcula luminância relativa
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance > 0.5 ? 'var(--color-black)' : 'var(--color-white)';
}

// ============================================================================
// TOKENS DIRETOS
// ============================================================================

/**
 * Tokens do tema claro
 */
export const lightTokens = (tokens.themes as Record<string, ThemeDefinition>)?.light ?? {};

/**
 * Tokens do tema escuro
 */
export const darkTokens = (tokens.themes as Record<string, ThemeDefinition>)?.dark ?? {};

// ============================================================================
// CLASSES SEMÂNTICAS
// ============================================================================

/**
 * Classes CSS semânticas para componentes
 */
export const COMPONENT_CLASSES = tokens.semantics?.layoutClasses?.components ?? {};

/**
 * Classes CSS semânticas para seções
 */
export const SECTION_CLASSES = tokens.semantics?.layoutClasses?.sections ?? {};

// ============================================================================
// GRADIENTES
// ============================================================================

/**
 * Direções de gradiente padrão
 */
const defaultGradientDirections = {
  TO_R: 'to-r',
  TO_L: 'to-l',
  TO_T: 'to-t',
  TO_B: 'to-b',
  TO_BR: 'to-br',
  TO_BL: 'to-bl',
  TO_TR: 'to-tr',
  TO_TL: 'to-tl',
  TO_BOTTOM: 'to-b',
  TO_BOTTOM_RIGHT: 'to-br',
  TO_BOTTOM_LEFT: 'to-bl',
  TO_TOP_RIGHT: 'to-tr',
  TO_TOP_LEFT: 'to-tl',
} as const;

/**
 * Direções de gradiente suportadas
 */
const rawGradientDirections = ((tokens.primitives as Record<string, unknown>)?.gradientDirections ?? {}) as
  | Record<string, string>
  | undefined;

export const GRADIENT_DIRECTIONS = rawGradientDirections ?? defaultGradientDirections;

// ============================================================================
// EXPORTAÇÕES ADICIONAIS
// ============================================================================

/**
 * Objeto com todas as utilidades exportadas
 */
export const tokenUtils = {
  // Funções principais
  cn,
  getTheme,
  getThemeColors,
  getStatusColor,
  getBrandColor,
  getTokenColor,
  overlayFromToken,
  isValidHex,
  getContrastColor,
  generateTailwindClasses,
  
  // Constantes
  Z_INDEX,
  motion,
  motionPresets,
  motionSemantic,
  MOTION,
  COMPONENT_CLASSES,
  SECTION_CLASSES,
  GRADIENT_DIRECTIONS,
  
  // Tokens diretos
  lightTokens,
  darkTokens,
};

/**
 * Exportação padrão para importações em lote
 */
export default tokenUtils;