/**
 * Biblioteca de Utilitários de Componentes UI
 * 
 * Fonte única de verdade: @rainersoft/design-tokens
 * Usa tokens.json para valores de build-time e CSS vars para runtime dinâmico
 * 
 * @module @rainersoft/ui/lib/utils
 * @author Rainer Teixeira
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';

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
 * Motion tokens - Importados diretamente do @rainersoft/design-tokens
 * 
 * @description
 * Única fonte de verdade para tokens de motion (duração, easing, delay).
 * Importados diretamente do pacote design-tokens via ES modules.
 */
export const motion = tokens?.primitives?.motion || {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  delay: {
    none: '0ms',
    short: '100ms',
    normal: '200ms',
    long: '500ms',
  },
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  }
};

/**
 * Motion semântico - Importado dos tokens semânticos
 * 
 * @description
 * Animações organizadas semanticamente para uso em componentes
 */
export const motionSemantic = (tokens as { semantics?: { motion?: typeof motion } }).semantics?.motion || {
  transition: {
    default: {
      duration: '300ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  },
  interaction: {
    hover: {
      duration: '200ms',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
    }
  },
  feedback: {
    success: {
      duration: '500ms',
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    }
  },
  navigation: {
    page: {
      duration: '400ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  }
};

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
  // Presets semânticos
  transition: motionSemantic.transition.default,
  interaction: motionSemantic.interaction.hover,
  feedback: motionSemantic.feedback.success,
  navigation: motionSemantic.navigation.page,
};
