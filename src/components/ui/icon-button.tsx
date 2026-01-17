/**
 * Componente IconButton
 *
 * Botão especializado para ícones com tooltip integrado.
 * Suporta múltiplos tamanhos, variantes e estados.
 *
 * @module @rainersoft/ui/components/ui/icon-button
 */

'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { Button, type ButtonProps } from './button';
import { cn } from '../../lib/utils';

/**
 * Variantes do IconButton
 */
const iconButtonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md',
        outline: 'border-2 border-input bg-background shadow-sm hover:bg-accent hover:border-accent',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline focus-visible:underline',
        neon: 'relative bg-primary border-2 border-primary text-primary-foreground shadow-lg',
        glass: 'relative bg-white/10 border border-white/20 text-foreground backdrop-blur-sm shadow-sm hover:bg-white/20',
        minimal: 'bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground',
      },
      size: {
        xs: 'h-6 w-6 rounded-md',
        sm: 'h-8 w-8 rounded-md',
        md: 'h-10 w-10 rounded-lg',
        lg: 'h-12 w-12 rounded-lg',
        xl: 'h-14 w-14 rounded-xl',
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
        rotate: 'hover:rotate-90',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      animation: 'scale',
    },
  }
);

/**
 * Props do IconButton
 */
export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'variant'>,
    VariantProps<typeof iconButtonVariants> {
  /** Ícone */
  icon: React.ReactNode;
  /** Tooltip */
  tooltip?: string;
  /** Posição do tooltip */
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  /** Estado de loading */
  loading?: boolean;
  /** Ícone de loading */
  loadingIcon?: React.ReactNode;
}

/**
 * Componente IconButton
 *
 * Botão especializado para ícones com:
 * - Tooltip integrado
 * - Múltiplas variantes e tamanhos
 * - Animações customizáveis
 * - Estado de loading
 * - Total acessibilidade
 *
 * @example
 * ```tsx
 * // Básico
 * <IconButton icon={<Plus />} onClick={handleClick} />
 *
 * // Com variantes
 * <IconButton 
 *   icon={<Trash />} 
 *   variant="destructive"
 *   size="lg"
 *   animation="glow"
 * />
 *
 * // Com tooltip
 * <IconButton 
 *   icon={<Settings />}
 *   tooltip="Configurações"
 *   tooltipPosition="right"
 * />
 *
 * // Com loading
 * <IconButton 
 *   icon={<Save />}
 *   loading
 *   tooltip="Salvando..."
 * />
 * ```
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      animation = 'scale',
      icon,
      tooltip,
      tooltipPosition = 'top',
      loading = false,
      loadingIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    const [tooltipVisible, setTooltipVisible] = React.useState(false);

    const tooltipClasses = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    const tooltipArrowClasses = {
      top: 'top-full left-1/2 -translate-x-1/2 -mt-1 border-l-transparent border-r-transparent border-b-transparent border-t-current',
      bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-1 border-l-transparent border-r-transparent border-t-transparent border-b-current',
      left: 'left-full top-1/2 -translate-y-1/2 -ml-1 border-t-transparent border-b-transparent border-r-transparent border-l-current',
      right: 'right-full top-1/2 -translate-y-1/2 -mr-1 border-t-transparent border-b-transparent border-l-transparent border-r-current',
    };

    React.useEffect(() => {
      if (showTooltip) {
        const timer = setTimeout(() => setTooltipVisible(true), 100);
        return () => clearTimeout(timer);
      } else {
        setTooltipVisible(false);
      }
    }, [showTooltip]);

    const isDisabled = disabled || loading;

    return (
      <div className="relative inline-block">
        <Button
          ref={ref}
          variant={variant as ButtonProps['variant']}
          size={size as ButtonProps['size']}
          className={cn(
            iconButtonVariants({ variant, size, animation }),
            'p-0',
            // Efeito neon especial
            variant === 'neon' && [
              'before:absolute before:inset-0 before:rounded-inherit before:bg-primary before:opacity-20',
              'after:absolute after:inset-0 after:rounded-inherit after:bg-primary after:opacity-0',
              'hover:after:opacity-20 hover:shadow-primary/25 hover:shadow-xl',
              'before:transition-opacity after:transition-opacity',
              'before:duration-300 after:duration-300',
            ],
            className
          )}
          disabled={isDisabled}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          {...props}
        >
          {loading ? (
            loadingIcon || (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            )
          ) : (
            icon
          )}
          {children}
        </Button>

        {/* Tooltip */}
        {tooltip && showTooltip && (
          <div
            className={cn(
              'absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg border border-gray-700',
              'transition-all duration-200 ease-in-out',
              tooltipVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
              tooltipClasses[tooltipPosition]
            )}
          >
            <div className="relative">
              {tooltip}
              <div
                className={cn(
                  'absolute w-2 h-2 bg-gray-900 border border-gray-700 rotate-45',
                  tooltipArrowClasses[tooltipPosition]
                )}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
);

IconButton.displayName = 'IconButton';
