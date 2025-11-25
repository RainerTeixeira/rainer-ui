/**
 * Utilitários da Biblioteca de Componentes UI
 * 
 * Fonte única de verdade: @rainersoft/design-tokens
 * Usa tokens.json para valores build-time e CSS vars para runtime dinâmico
 * 
 * @module @rainersoft/ui/lib/utils
 * @author Rainer Teixeira
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motionTokens } from '@rainersoft/design-tokens';

// Importa tokens.json para fallbacks build-time
let tokensJson: any = null;
try {
  tokensJson = require('@rainersoft/design-tokens/formats/tokens.json');
} catch (e) {
  console.warn('[@rainersoft/ui] tokens.json não disponível, usando fallbacks');
}

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
export const COMPONENT_CLASSES = {
  /** Container padrão com largura máxima e padding responsivo */
  container: 'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  
  /** Espaçamento vertical responsivo */
  spacing: 'space-y-4 sm:space-y-6 md:space-y-8',
  
  /** Classes base para cards */
  card: {
    base: 'rounded-lg border bg-card text-card-foreground shadow-sm',
    hover: 'transition-all duration-200 hover:shadow-lg',
  },
  
  /** Classes base para buttons */
  button: {
    base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  },
  
  /** Classes base para inputs */
  input: {
    base: 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  },
} as const;

/**
 * Classes utilitárias para seções de página
 * Usado por componentes de layout como PageHeader.
 */
export const SECTION_CLASSES = {
  /** Container padrão de página com largura máxima e padding responsivo */
  container: 'w-full max-w-6xl mx-auto px-6 py-12',
} as const;

/**
 * Motion tokens - Fonte única de verdade dos design-tokens
 * 
 * Ordem de precedência:
 * 1. motionTokens (ES modules do design-tokens)
 * 2. tokensJson.motion (tokens.json build-time)
 * 
 * Se nenhum estiver disponível, lança erro para garantir build correto
 */
const motion = (() => {
  const duration = tokensJson?.motion?.duration || motionTokens?.duration;
  const easing = tokensJson?.motion?.easing || motionTokens?.easing;
  const delay = tokensJson?.motion?.delay || motionTokens?.delay;
  
  if (!duration || !easing || !delay) {
    throw new Error(
      '[@rainersoft/ui] Motion tokens não encontrados. ' +
      'Certifique-se de que @rainersoft/design-tokens foi buildado corretamente.'
    );
  }
  
  return { duration, easing, delay };
})();

/**
 * Delays de animação importados dos design tokens
 * 
 * @description
 * Usa motion.delay com fallback seguro para garantir
 * consistência em todo o sistema de design.
 */
export const ANIMATION_DELAYS = motion.delay;

/**
 * Durações de animação importadas dos design tokens
 * 
 * @description
 * Usa motion.duration com fallback seguro para garantir
 * consistência em todo o sistema de design.
 */
export const ANIMATION_DURATIONS = motion.duration;

/**
 * Easings de animação importados dos design tokens
 * 
 * @description
 * Usa motion.easing com fallback seguro para garantir
 * transições suaves e consistentes.
 */
export const ANIMATION_EASINGS = motion.easing;

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
export const motionPresets = {
  default: {
    duration: motion.duration.normal,
    easing: motion.easing.easeInOut,
  },
  fast: {
    duration: motion.duration.fast,
    easing: motion.easing.easeOut,
  },
  slow: {
    duration: motion.duration.slow,
    easing: motion.easing.easeInOut,
  },
  spring: {
    duration: motion.duration.normal,
    easing: motion.easing.spring,
  },
};
