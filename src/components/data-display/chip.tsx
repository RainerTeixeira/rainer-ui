/**
 * Componente Chip
 *
 * Pequenas tags que podem ser removidas, usadas para seleções,
 * filtros ou categorias com opção de exclusão.
 *
 * @module @rainersoft/ui/components/data-display/chip
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '../../lib/utils';

/**
 * Variantes do Chip usando CVA e design tokens
 */
const chipVariants = cva(
  'inline-flex items-center gap-2 rounded-md border px-2.5 py-0.5 text-sm font-medium transition-all duration-[var(--motion-duration-fast)] ease-[var(--motion-easing-ease-out)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        success:
          'border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/50',
        warning:
          'border-transparent bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/50',
        error:
          'border-transparent bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50',
        outline:
          'border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        sm: 'h-6 px-2 text-xs',
        md: 'h-8 px-2.5 text-sm',
        lg: 'h-10 px-3 text-base',
      },
      removable: {
        true: 'pr-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

/**
 * Interface de props do Chip
 */
export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  /** Texto do chip */
  children: React.ReactNode;
  /** Se o chip pode ser removido */
  removable?: boolean;
  /** Callback quando o chip é removido */
  onRemove?: () => void;
  /** Ícone customizado para remoção */
  removeIcon?: React.ReactNode;
  /** Aria label para o botão de remover */
  removeAriaLabel?: string;
}

/**
 * Componente Chip
 *
 * Renderiza uma tag pequena com opção de remoção.
 * Ideal para filtros, seleções múltiplas e categorias.
 *
 * @example
 * ```tsx
 * // Chip simples
 * <Chip>React</Chip>
 *
 * // Chip removível
 * <Chip removable onRemove={() => console.log('removido')}>
 *   TypeScript
 * </Chip>
 *
 * // Chip com variante
 * <Chip variant="success" removable>
 *   Concluído
 * </Chip>
 * ```
 */
export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      className,
      variant,
      size,
      children,
      removable = false,
      onRemove,
      removeIcon,
      removeAriaLabel = 'Remover',
      ...props
    },
    ref
  ) => {
    const handleRemove = (e: React.MouseEvent) => {
      e.stopPropagation();
      onRemove?.();
    };

    return (
      <div
        ref={ref}
        className={cn(
          chipVariants({ variant, size, removable }),
          className
        )}
        {...props}
      >
        {children}
        
        {removable && (
          <button
            type="button"
            onClick={handleRemove}
            className={cn(
              'inline-flex items-center justify-center rounded-full p-0.5',
              'transition-colors duration-[var(--motion-duration-fast)]',
              'hover:bg-black/10 dark:hover:bg-white/10',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              'disabled:pointer-events-none disabled:opacity-50'
            )}
            aria-label={removeAriaLabel}
          >
            {removeIcon || (
              <X 
                className="h-3 w-3 shrink-0" 
                strokeWidth={2.5}
                style={{
                  stroke: 'currentColor'
                }}
              />
            )}
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = 'Chip';

/**
 * ChipGroup - Container para múltiplos chips
 */
export interface ChipGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Espaçamento entre chips */
  spacing?: 'sm' | 'md' | 'lg';
  /** Se os chips devem quebrar linha */
  wrap?: boolean;
  /** Chips filhos */
  children: React.ReactNode;
}

const spacingClasses = {
  sm: 'gap-1',
  md: 'gap-2',
  lg: 'gap-3',
} as const;

export const ChipGroup = React.forwardRef<HTMLDivElement, ChipGroupProps>(
  (
    {
      className,
      spacing = 'md',
      wrap = true,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center',
          spacingClasses[spacing],
          wrap && 'flex-wrap',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ChipGroup.displayName = 'ChipGroup';

