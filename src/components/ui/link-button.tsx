/**
 * Componente LinkButton
 *
 * Botão com estilo de link.
 * Comporta-se como botão mas parece um link.
 *
 * @module @rainersoft/ui/components/ui/link-button
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

/**
 * Variantes do LinkButton
 */
const linkButtonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-[var(--motion-duration-fast)]',
  {
    variants: {
      variant: {
        default: 'text-primary hover:underline underline-offset-4',
        muted: 'text-muted-foreground hover:text-foreground hover:underline underline-offset-4',
        destructive: 'text-destructive hover:underline underline-offset-4',
        success: 'text-emerald-600 hover:text-emerald-700 hover:underline underline-offset-4 dark:text-emerald-400 dark:hover:text-emerald-300',
        warning: 'text-amber-600 hover:text-amber-700 hover:underline underline-offset-4 dark:text-amber-400 dark:hover:text-amber-300',
        info: 'text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 dark:text-blue-400 dark:hover:text-blue-300',
        neon: 'text-primary hover:underline underline-offset-4 dark:neon-text',
        ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-2 py-1',
        outline: 'border border-border rounded-md px-3 py-1 hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      weight: 'medium',
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
}

/**
 * Componente LinkButton
 *
 * Botão com estilo de link.
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
 *   variant="muted"
 *   size="sm"
 *   weight="semibold"
 * >
 *   Link secundário
 * </LinkButton>
 *
 * // Com ícones
 * <LinkButton 
 *   leftIcon={<Plus />}
 *   rightIcon={<ArrowRight />}
 *   href="/page"
 * >
 *   Ir para página
 * </LinkButton>
 *
 * // Link verdadeiro
 * <LinkButton 
 *   href="https://example.com"
 *   target="_blank"
 *   variant="info"
 * >
 *   Abrir site
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
      noUnderline = false,
      leftIcon,
      rightIcon,
      href,
      target,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      linkButtonVariants({ variant, size, weight }),
      noUnderline && 'hover:no-underline',
      className
    );

    // Se é um link verdadeiro
    if (href) {
      return (
        <a
          href={href}
          target={target}
          className={classes}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {leftIcon && <span className="mr-1">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-1">{rightIcon}</span>}
        </a>
      );
    }

    // Botão com estilo de link
    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {leftIcon && <span className="mr-1">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-1">{rightIcon}</span>}
      </button>
    );
  }
);

LinkButton.displayName = 'LinkButton';
