/**
 * Componente Divider
 *
 * Linha divisória com opções de texto e estilo.
 * Separa visualmente seções de conteúdo.
 *
 * @module @rainersoft/ui/components/layout/divider
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/tokens';

/**
 * Variantes do Divider
 */
const dividerVariants = cva(
  'border-t',
  {
    variants: {
      variant: {
        default: 'border-border',
        muted: 'border-muted',
        primary: 'border-primary',
        secondary: 'border-secondary',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
        gradient: 'border-none bg-gradient-to-r from-transparent via-border to-transparent h-px',
      },
      size: {
        xs: 'border-t-0.5',
        sm: 'border-t',
        md: 'border-t-2',
        lg: 'border-t-4',
      },
      orientation: {
        horizontal: 'w-full',
        vertical: 'h-full border-l border-t-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
      orientation: 'horizontal',
    },
  }
);

/**
 * Props do Divider
 */
export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  /** Texto da divisória */
  label?: string;
  /** Posição do label */
  labelPosition?: 'center' | 'start' | 'end';
  /** Componente customizado para o label */
  labelComponent?: React.ReactNode;
}

/**
 * Componente Divider
 *
 * Linha divisória com opção de texto.
 *
 * @example
 * ```tsx
 * // Linha simples
 * <Divider />
 *
 * // Com texto
 * <Divider label="Ou continue com" />
 *
 * // Variante pontilhada
 * <Divider variant="dashed" />
 *
 * // Vertical
 * <Divider orientation="vertical" className="h-20" />
 *
 * // Com label customizado
 * <Divider 
 *   labelComponent={<Badge>Novo</Badge>}
 *   labelPosition="start"
 * />
 * ```
 */
export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      variant = 'default',
      size = 'sm',
      orientation = 'horizontal',
      label,
      labelPosition = 'center',
      labelComponent,
      ...props
    },
    ref
  ) => {
    // Se tem label ou label component
    if (label || labelComponent) {
      return (
        <div
          ref={ref}
          className={cn(
            'flex items-center gap-4',
            orientation === 'vertical' && 'flex-col',
            className
          )}
          role="separator"
          aria-orientation={orientation}
          {...props}
        >
          <div
            className={cn(
              dividerVariants({ variant, size, orientation }),
              labelPosition === 'center' && 'flex-1',
              labelPosition === 'end' && 'flex-1',
              labelPosition === 'start' && 'flex-none w-10'
            )}
          />
          
          {labelComponent || (
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {label}
            </span>
          )}
          
          <div
            className={cn(
              dividerVariants({ variant, size, orientation }),
              labelPosition === 'center' && 'flex-1',
              labelPosition === 'start' && 'flex-1',
              labelPosition === 'end' && 'flex-none w-10'
            )}
          />
        </div>
      );
    }

    // Linha simples
    return (
      <div
        ref={ref}
        className={cn(
          dividerVariants({ variant, size, orientation }),
          className
        )}
        role="separator"
        aria-orientation={orientation}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

/**
 * SectionDivider - Divisória de seção com mais espaçamento
 */
export interface SectionDividerProps extends Omit<DividerProps, 'size'> {
  /** Espaçamento vertical */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

const spacingClasses = {
  sm: 'my-4',
  md: 'my-6',
  lg: 'my-8',
  xl: 'my-12',
} as const;

export const SectionDivider = React.forwardRef<HTMLDivElement, SectionDividerProps>(
  (
    {
      className,
      spacing = 'lg',
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(spacingClasses[spacing], className)}>
        <Divider ref={ref} size="md" {...props} />
      </div>
    );
  }
);

SectionDivider.displayName = 'SectionDivider';

/**
 * TextDivider - Divisória com texto estilizado
 */
export interface TextDividerProps extends Omit<DividerProps, 'label'> {
  /** Texto da divisória */
  children: React.ReactNode;
  /** Cor do texto */
  textColor?: 'default' | 'muted' | 'primary' | 'secondary';
}

const textColorClasses = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary-foreground',
} as const;

export const TextDivider = React.forwardRef<HTMLDivElement, TextDividerProps>(
  (
    {
      className,
      children,
      textColor = 'muted',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-4', className)}
        role="separator"
        {...props}
      >
        <div className="flex-1 h-px bg-border" />
        <span className={cn('text-sm font-medium whitespace-nowrap', textColorClasses[textColor])}>
          {children}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>
    );
  }
);

TextDivider.displayName = 'TextDivider';
