/**
 * Utilitários da Biblioteca de Componentes UI
 * 
 * @module @rainersoft/ui/lib/utils
 * @author Rainer Teixeira
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
 * Delays de animação padronizados
 */
export const ANIMATION_DELAYS = {
  instant: '0ms',
  fast: '100ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const;

/**
 * Durações de animação padronizadas
 */
export const ANIMATION_DURATIONS = {
  instant: '0ms',
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '700ms',
} as const;
