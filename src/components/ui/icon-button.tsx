/**
 * Componente IconButton
 *
 * Botão apenas com ícone.
 * Suporta múltiplos tamanhos e variantes.
 *
 * @module @rainersoft/ui/components/ui/icon-button
 */

'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { Button } from './button';
import { cn } from '../../lib/utils';

/**
 * Variantes do IconButton
 */
const iconButtonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-all duration-[var(--motion-duration-fast)]',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        neon: 'bg-primary border-2 border-primary text-primary-foreground hover:bg-primary/90 dark:neon-box',
        glass: 'glass neon-border hover:glass-hover dark:text-primary',
      },
      size: {
        xs: 'h-6 w-6',
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
        xl: 'h-14 w-14',
        icon: 'h-9 w-9',
        'icon-sm': 'h-8 w-8',
        'icon-lg': 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
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
}

/**
 * Componente IconButton
 *
 * Botão apenas com ícone.
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
 * />
 *
 * // Com tooltip
 * <IconButton 
 *   icon={<Settings />}
 *   tooltip="Configurações"
 *   tooltipPosition="right"
 * />
 * ```
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      icon,
      tooltip,
      tooltipPosition = 'top',
      children,
      ...props
    },
    ref
  ) => {
    const [showTooltip, setShowTooltip] = React.useState(false);

    const tooltipClasses = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    return (
      <div className="relative inline-block">
        <Button
          ref={ref}
          variant={variant as any}
          size={size as any}
          className={cn(
            iconButtonVariants({ variant, size }),
            'p-0',
            className
          )}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          {...props}
        >
          {icon}
          {children}
        </Button>

        {/* Tooltip */}
        {tooltip && showTooltip && (
          <div
            className={cn(
              'absolute z-50 px-2 py-1 text-xs text-white bg-black rounded whitespace-nowrap animate-in fade-in-0 zoom-in-95',
              tooltipClasses[tooltipPosition]
            )}
          >
            {tooltip}
          </div>
        )}
      </div>
    );
  }
);

IconButton.displayName = 'IconButton';
