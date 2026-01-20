/**
 * Componente Panel
 *
 * Container de conteúdo com bordas e sombra.
 * Ideal para cards, seções e agrupamentos.
 *
 * @module @rainersoft/ui/components/layout/panel
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/tokens';

/**
 * Variantes do Panel
 */
const panelVariants = cva(
  'rounded-lg border bg-card text-card-foreground',
  {
    variants: {
      variant: {
        default: 'border-border shadow-sm',
        elevated: 'border-border shadow-md',
        outlined: 'border-2 border-border shadow-none',
        ghost: 'border-transparent shadow-none bg-transparent',
        glass: 'glass border-border shadow-sm',
        neon: 'neon-border shadow-lg dark:shadow-glow-cyan',
        gradient: 'bg-gradient-to-br from-background to-muted border-border shadow-sm',
      },
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
      padding: {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6',
        xl: 'p-8',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded',
        md: 'rounded-lg',
        lg: 'rounded-xl',
        xl: 'rounded-2xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      padding: null,
      radius: 'md',
    },
  }
);

/**
 * Props do Panel
 */
export interface PanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof panelVariants> {
  /** Se tem efeito hover */
  hover?: boolean;
  /** Se é clicável */
  clickable?: boolean;
  /** Se está selecionado */
  selected?: boolean;
  /** Se está carregando */
  loading?: boolean;
}

/**
 * Componente Panel
 *
 * Container estilizado para conteúdo.
 *
 * @example
 * ```tsx
 * // Básico
 * <Panel>
 *   <h3>Título</h3>
 *   <p>Conteúdo do painel</p>
 * </Panel>
 *
 * // Com variantes
 * <Panel variant="elevated" size="lg">
 *   <h3>Título</h3>
 *   <p>Conteúdo do painel</p>
 * </Panel>
 *
 * // Clicável
 * <Panel 
 *   clickable 
 *   hover 
 *   onClick={handleClick}
 *   className="cursor-pointer"
 * >
 *   <h3>Título</h3>
 *   <p>Conteúdo clicável</p>
 * </Panel>
 *
 * // Glass effect
 * <Panel variant="glass">
 *   <h3>Título</h3>
 *   <p>Conteúdo com glass effect</p>
 * </Panel>
 * ```
 */
export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  (
    {
      className,
      variant = 'default',
      size,
      padding,
      radius = 'md',
      hover = false,
      clickable = false,
      selected = false,
      loading = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          panelVariants({ variant, size, padding, radius }),
          hover && 'transition-all duration-[var(--motion-duration-normal)] hover:shadow-lg hover:-translate-y-0.5',
          clickable && 'cursor-pointer active:scale-[0.98]',
          selected && 'ring-2 ring-primary ring-offset-2',
          loading && 'opacity-70',
          className
        )}
        {...props}
      />
    );
  }
);

Panel.displayName = 'Panel';

/**
 * PanelHeader - Cabeçalho do painel
 */
export interface PanelHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Se tem linha divisória */
  divider?: boolean;
}

export const PanelHeader = React.forwardRef<HTMLDivElement, PanelHeaderProps>(
  (
    {
      className,
      divider = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col space-y-1.5 p-6',
          divider && 'border-b border-border',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PanelHeader.displayName = 'PanelHeader';

/**
 * PanelTitle - Título do painel
 */
export interface PanelTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const PanelTitle = React.forwardRef<HTMLHeadingElement, PanelTitleProps>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <h3
        ref={ref}
        className={cn('text-lg font-semibold leading-none tracking-tight', className)}
        {...props}
      >
        {children}
      </h3>
    );
  }
);

PanelTitle.displayName = 'PanelTitle';

/**
 * PanelDescription - Descrição do painel
 */
export interface PanelDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const PanelDescription = React.forwardRef<HTMLParagraphElement, PanelDescriptionProps>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

PanelDescription.displayName = 'PanelDescription';

/**
 * PanelContent - Conteúdo do painel
 */
export interface PanelContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PanelContent = React.forwardRef<HTMLDivElement, PanelContentProps>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('p-6 pt-0', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PanelContent.displayName = 'PanelContent';

/**
 * PanelFooter - Rodapé do painel
 */
export interface PanelFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Se tem linha divisória */
  divider?: boolean;
}

export const PanelFooter = React.forwardRef<HTMLDivElement, PanelFooterProps>(
  (
    {
      className,
      divider = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center p-6 pt-0',
          divider && 'border-t border-border mt-6 pt-6',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PanelFooter.displayName = 'PanelFooter';

/**
 * PanelGroup - Grupo de painéis
 */
export interface PanelGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Espaçamento entre painéis */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

const spacingClasses = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-10',
} as const;

export const PanelGroup = React.forwardRef<HTMLDivElement, PanelGroupProps>(
  (
    {
      className,
      spacing = 'md',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('grid', spacingClasses[spacing], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PanelGroup.displayName = 'PanelGroup';
