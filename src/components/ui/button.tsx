/**
 * Componente Button
 * 
 * Botão universal com múltiplas variantes e estados.
 * Totalmente acessível e customizável via design tokens.
 * 
 * @module @rainersoft/ui/components/ui/button
 */

'use client';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../../lib/utils';

/**
 * Sistema de variantes do Button
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 select-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md',
        outline: 'border-2 border-input bg-background shadow-sm hover:bg-accent hover:border-accent',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline focus-visible:underline',
        neon: 'relative bg-gradient-to-r from-neon-cyan to-cyan-600 border-2 border-neon-cyan text-gray-950 shadow-lg shadow-neon-cyan hover:shadow-neon-cyan hover:shadow-xl',
        glass: 'relative bg-glass border border-white/20 text-foreground backdrop-blur-sm shadow-sm hover:bg-white/20',
        minimal: 'bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground',
      },
      size: {
        xs: 'h-7 px-2 text-xs rounded-md',
        sm: 'h-8 px-3 text-sm rounded-md has-[>svg]:px-2',
        default: 'h-9 px-4 py-2 rounded-md has-[>svg]:px-3',
        lg: 'h-10 px-6 text-base rounded-lg has-[>svg]:px-4',
        xl: 'h-12 px-8 text-lg rounded-lg has-[>svg]:px-5',
        icon: 'size-9 rounded-lg',
        'icon-sm': 'size-8 rounded-md',
        'icon-lg': 'size-10 rounded-lg',
        'icon-xl': 'size-12 rounded-xl',
      },
      animation: {
        none: '',
        scale: 'hover:scale-105 active:scale-95',
        glow: 'hover:shadow-lg active:shadow-sm',
        bounce: 'hover:animate-bounce',
        pulse: 'hover:animate-pulse',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      animation: 'scale',
    },
  }
);

/**
 * Props do Button
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Se deve renderizar como filho (Slot) */
  asChild?: boolean;
  /** Estado de loading */
  loading?: boolean;
  /** Ícone de loading */
  loadingIcon?: React.ReactNode;
}

/**
 * Componente Button
 *
 * Botão universal com suporte a:
 * - Múltiplas variantes visuais
 * - Diferentes tamanhos
 * - Animações e efeitos
 * - Estado de loading
 * - Total acessibilidade
 *
 * @example
 * ```tsx
 * // Básico
 * <Button onClick={handleClick}>Clique</Button>
 *
 * // Com variantes
 * <Button variant="neon" size="lg" animation="glow">
 *   Botão Neon
 * </Button>
 *
 * // Com loading
 * <Button loading loadingIcon={<Spinner />}>
 *   Processando...
 * </Button>
 *
 * // Como link
 * <Button asChild>
 *   <Link href="/page">Ir para página</Link>
 * </Button>
 * ```
 */
const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    animation,
    asChild = false,
    loading = false,
    loadingIcon,
    disabled,
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    const isDisabled = disabled || loading;

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, animation }),
          // Efeito neon especial
          variant === 'neon' && [
            'before:absolute before:inset-0 before:rounded-lg before:bg-primary before:opacity-20',
            'after:absolute after:inset-0 after:rounded-lg after:bg-primary after:opacity-0',
            'hover:after:opacity-20 hover:shadow-primary/25 hover:shadow-xl',
            'before:transition-opacity after:transition-opacity',
            'before:duration-300 after:duration-300',
          ],
          className
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <>
            {loadingIcon || (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            )}
          </>
        )}
        {children}
      </Comp>
    );
  }
);

ButtonComponent.displayName = 'Button';

export const Button = ButtonComponent;
export { buttonVariants };

