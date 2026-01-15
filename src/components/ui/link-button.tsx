/**
 * Componente LinkButton
 *
 * Botão com comportamento de link ou botão.
 * Suporta múltiplas variantes, pesos e tamanhos.
 *
 * @module @rainersoft/ui/components/ui/link-button
 * @author Rainer Teixeira
 * @version 2.0.0
 */

'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

/**
 * Variantes do LinkButton
 */
const linkButtonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none',
  {
    variants: {
      variant: {
        default: 'text-primary hover:underline underline-offset-4 hover:text-primary/80',
        muted: 'text-muted-foreground hover:text-foreground hover:underline underline-offset-4',
        destructive: 'text-destructive hover:text-destructive/80 hover:underline underline-offset-4',
        success: 'text-emerald-600 hover:text-emerald-700 hover:underline underline-offset-4 dark:text-emerald-400 dark:hover:text-emerald-300',
        warning: 'text-amber-600 hover:text-amber-700 hover:underline underline-offset-4 dark:text-amber-400 dark:hover:text-amber-300',
        info: 'text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 dark:text-blue-400 dark:hover:text-blue-300',
        neon: 'text-primary hover:underline underline-offset-4 hover:text-primary/80 dark:hover:text-cyan-400',
        ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2',
        outline: 'border-2 border-border rounded-md px-4 py-2 hover:bg-accent hover:border-accent hover:text-accent-foreground',
        pill: 'bg-gray-100 text-gray-900 rounded-full px-4 py-2 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
      },
      size: {
        xs: 'text-xs px-2 py-1',
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-5 py-2.5',
        xl: 'text-xl px-6 py-3',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      animation: {
        none: '',
        scale: 'hover:scale-105 active:scale-95',
        glow: 'hover:text-current',
        slide: 'hover:translate-x-1',
        bounce: 'hover:animate-bounce',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      weight: 'medium',
      animation: 'scale',
    },
  }
);

/**
 * Props do LinkButton
 */
export interface LinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof linkButtonVariants> {
  /** Se desabilita o sublinhado */
  noUnderline?: boolean;
  /** Ícone à esquerda */
  leftIcon?: React.ReactNode;
  /** Ícone à direita */
  rightIcon?: React.ReactNode;
  /** Se é um link verdadeiro */
  href?: string;
  /** Target do link */
  target?: string;
  /** Estado de loading */
  loading?: boolean;
  /** Ícone de loading */
  loadingIcon?: React.ReactNode;
}

/**
 * Componente LinkButton
 *
 * Botão com comportamento de link com suporte a:
 * - Múltiplas variantes visuais
 * - Diferentes pesos e tamanhos
 * - Ícones posicionais
 * - Comportamento de link ou botão
 * - Estado de loading
 * - Animações customizáveis
 *
 * @example
 * ```tsx
 * // Básico
 * <LinkButton onClick={handleClick}>
 *   Clique aqui
 * </LinkButton>
 *
 * // Com variantes
 * <LinkButton 
 *   variant="pill"
 *   size="sm"
 *   weight="semibold"
 *   leftIcon={<Plus />}
 * >
 *   Adicionar Item
 * </LinkButton>
 *
 * // Link verdadeiro
 * <LinkButton 
 *   href="https://example.com"
 *   target="_blank"
 *   variant="info"
 *   rightIcon={<ExternalLink />}
 * >
 *   Abrir site
 * </LinkButton>
 *
 * // Com loading
 * <LinkButton 
 *   loading
 *   loadingIcon={<Spinner />}
 *   variant="success"
 * >
 *   Processando...
 * </LinkButton>
 * ```
 */
export const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      weight = 'medium',
      animation = 'scale',
      noUnderline = false,
      leftIcon,
      rightIcon,
      href,
      target,
      loading = false,
      loadingIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      linkButtonVariants({ variant, size, weight, animation }),
      noUnderline && 'hover:no-underline',
      loading && 'cursor-not-allowed opacity-70',
      className
    );

    const isDisabled = disabled || loading;

    // Se é um link verdadeiro
    if (href && !loading) {
      return (
        <a
          href={href}
          target={target}
          className={classes}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {loading && (
            loadingIcon || (
              <div className="mr-2 h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
            )
          )}
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </a>
      );
    }

    // Botão com estilo de link
    return (
      <button
        ref={ref}
        className={classes}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          loadingIcon || (
            <div className="mr-2 h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
          )
        )}
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

LinkButton.displayName = 'LinkButton';
