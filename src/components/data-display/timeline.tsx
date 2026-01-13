/**
 * Componente Timeline
 *
 * Linha do tempo para exibir eventos em ordem cronológica.
 * Suporta orientação vertical ou horizontal com customização
 * de cores, ícones e conteúdo.
 *
 * @module @rainersoft/ui/components/data-display/timeline
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import { Circle } from 'lucide-react';
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { AlertTriangle } from 'lucide-react';
import { Check } from 'lucide-react';
import { X } from 'lucide-react';

import { cn } from '../../lib/utils';

/**
 * Ícones padrão por tipo de evento
 */
const defaultIcons = {
  completed: Check,
  pending: Circle,
  error: X,
  warning: AlertTriangle,
  default: 'div',
} as const;

/**
 * Variantes do ponto da Timeline
 */
const timelineDotVariants = cva(
  'relative flex items-center justify-center rounded-full border-2 bg-background',
  {
    variants: {
      status: {
        default: 'border-border',
        active: 'border-primary bg-primary',
        completed: 'border-emerald-500 bg-emerald-500',
        pending: 'border-amber-500 bg-amber-500',
        error: 'border-red-500 bg-red-500',
        warning: 'border-orange-500 bg-orange-500',
      },
      size: {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      status: 'default',
      size: 'md',
    },
  }
);

/**
 * Props do item da Timeline
 */
export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Status do item */
  status?: 'default' | 'active' | 'completed' | 'pending' | 'error' | 'warning';
  /** Ícone customizado */
  icon?: React.ReactNode;
  /** Tipo para usar ícone padrão */
  iconType?: keyof typeof defaultIcons;
  /** Tamanho do ponto */
  dotSize?: 'sm' | 'md' | 'lg';
  /** Conteúdo do item */
  children: React.ReactNode;
  /** Data/hora do evento */
  date?: string;
  /** Título do evento */
  title?: string;
  /** Descrição do evento */
  description?: string;
}

/**
 * Componente TimelineItem
 *
 * Item individual da timeline com ponto, conteúdo e data.
 */
export const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  (
    {
      className,
      status = 'default',
      icon,
      iconType,
      dotSize = 'md',
      children,
      date,
      title,
      description,
      ...props
    },
    ref
  ) => {
    // Resolve o ícone a ser usado
    let IconComponent = icon;
    if (!IconComponent && iconType) {
      IconComponent = React.createElement(defaultIcons[iconType], {
        className: 'h-2.5 w-2.5 text-primary-foreground',
      });
    }

    return (
      <div
        ref={ref}
        className={cn('relative flex gap-4 pb-8 last:pb-0', className)}
        {...props}
      >
        {/* Linha conectora */}
        <div className="absolute left-[calc(var(--dot-size)/2)] top-8 h-full w-0.5 bg-border last:hidden" 
             style={{ '--dot-size': dotSize === 'sm' ? '12px' : dotSize === 'lg' ? '20px' : '16px' } as React.CSSProperties} />
        
        {/* Ponto da timeline */}
        <div className={cn(timelineDotVariants({ status, size: dotSize }))}>
          {IconComponent}
        </div>

        {/* Conteúdo */}
        <div className="flex-1 min-w-0">
          {(date || title) && (
            <div className="mb-1 flex items-baseline gap-2">
              {date && (
                <time className="text-xs text-muted-foreground whitespace-nowrap">
                  {date}
                </time>
              )}
              {title && (
                <h3 className="text-sm font-medium text-foreground">
                  {title}
                </h3>
              )}
            </div>
          )}
          {description && (
            <p className="text-sm text-muted-foreground mb-2">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }
);

TimelineItem.displayName = 'TimelineItem';

/**
 * Props da Timeline
 */
export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientação da timeline */
  orientation?: 'vertical' | 'horizontal';
  /** Alinhamento dos itens */
  align?: 'left' | 'center' | 'right';
  /** Se deve mostrar a linha conectora */
  showConnector?: boolean;
  /** Itens da timeline */
  children: React.ReactNode;
}

/**
 * Componente Timeline
 *
 * Container para itens de timeline com linha conectora.
 *
 * @example
 * ```tsx
 * <Timeline>
 *   <TimelineItem 
 *     status="completed" 
 *     date="2024-01-01" 
 *     title="Projeto Iniciado"
 *     description="Início do desenvolvimento"
 *   >
 *     <p>Conteúdo adicional</p>
 *   </TimelineItem>
 *   <TimelineItem 
 *     status="active" 
 *     iconType="pending"
 *     date="2024-01-15" 
 *     title="Em Progresso"
 *   />
 * </Timeline>
 * ```
 */
export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
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
        className={cn('space-y-0', className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;
          
          return React.cloneElement(child, {
            ...child.props,
            className: cn(child.props.className),
          });
        })}
      </div>
    );
  }
);

Timeline.displayName = 'Timeline';

/**
 * TimelineSeparator - Separador visual entre grupos de itens
 */
export interface TimelineSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Texto do separador */
  children?: React.ReactNode;
}

export const TimelineSeparator = React.forwardRef<HTMLDivElement, TimelineSeparatorProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative my-4 py-2',
          'before:absolute before:left-[calc(var(--dot-size)/2)] before:top-0 before:h-full before:w-0.5 before:bg-border',
          className
        )}
        style={{ '--dot-size': '16px' } as React.CSSProperties}
        {...props}
      >
        <div className="relative flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-background border-2 border-border" />
          {children && (
            <span className="text-sm font-medium text-muted-foreground">
              {children}
            </span>
          )}
        </div>
      </div>
    );
  }
);

TimelineSeparator.displayName = 'TimelineSeparator';

