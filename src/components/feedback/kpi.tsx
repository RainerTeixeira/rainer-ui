/**
 * Componente KPI (Key Performance Indicator)
 *
 * Cards de métricas com indicadores visuais de tendência.
 * Exibe dados importantes com contexto visual claro.
 *
 * @module @rainersoft/ui/components/feedback/kpi
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ArrowDown } from 'lucide-react';
import { ArrowUp } from 'lucide-react';
import { Info } from 'lucide-react';
import { Minus } from 'lucide-react';
import { TrendingDown } from 'lucide-react';
import { TrendingUp } from 'lucide-react';

import { cn } from '../../lib/utils';

/**
 * Variantes do KPI
 */
const kpiVariants = cva(
  'rounded-lg border bg-card p-6 shadow-sm transition-all duration-[var(--motion-duration-normal)]',
  {
    variants: {
      variant: {
        default: 'border-border hover:shadow-md',
        elevated: 'border-border shadow-md hover:shadow-lg',
        outlined: 'border-2 border-border hover:border-primary',
        glass: 'glass border-border hover:glass-hover',
      },
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

/**
 * Variantes do trend
 */
const trendVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium',
  {
    variants: {
      trend: {
        up: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
        down: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
        neutral: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
      },
    },
  }
);

/**
 * Props do KPI
 */
export interface KPIProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Título do KPI */
  title: string;
  /** Valor principal */
  value: string | number;
  /** Descrição adicional */
  description?: string;
  /** Tendência */
  trend?: 'up' | 'down' | 'neutral';
  /** Valor da tendência */
  trendValue?: string;
  /** Ícone */
  icon?: React.ReactNode;
  /** Cor do ícone */
  iconColor?: string;
  /** Se está carregando */
  loading?: boolean;
  /** Formato do valor */
  format?: 'number' | 'currency' | 'percentage' | 'custom';
  /** Símbolo da moeda (para formato currency) */
  currency?: string;
  /** Casas decimais */
  decimals?: number;
  /** Variante visual */
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  /** Tamanho */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Formata valor baseado no formato
 */
function formatValue(
  value: string | number,
  format: 'number' | 'currency' | 'percentage' | 'custom',
  currency?: string,
  decimals = 0
): string {
  if (format === 'custom') return value.toString();
  
  const numValue = typeof value === 'number' ? value : parseFloat(value.toString());
  
  if (isNaN(numValue)) return value.toString();
  
  const formatted = numValue.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  
  switch (format) {
    case 'currency':
      return `${currency || 'R$'} ${formatted}`;
    case 'percentage':
      return `${formatted}%`;
    default:
      return formatted;
  }
}

/**
 * Componente KPI
 *
 * Card de métrica com indicador visual.
 *
 * @example
 * ```tsx
 * // KPI básico
 * <KPI 
 *   title="Vendas" 
 *   value="125430" 
 *   format="currency"
 *   trend="up" 
 *   trendValue="12%"
 * />
 *
 * // Com ícone e descrição
 * <KPI 
 *   title="Usuários Ativos" 
 *   value={8942}
 *   description="Nos últimos 30 dias"
 *   icon={<Users />}
 *   iconColor="blue"
 *   trend="up"
 *   trendValue="5.2%"
 * />
 * ```
 */
export const KPI = React.forwardRef<HTMLDivElement, KPIProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      title,
      value,
      description,
      trend,
      trendValue,
      icon,
      iconColor,
      loading = false,
      format = 'number',
      currency,
      decimals = 0,
      ...props
    },
    ref
  ) => {
    // Resolve o ícone de tendência
    const TrendIcon = 
      trend === 'up' ? TrendingUp :
      trend === 'down' ? TrendingDown : Minus;

    // Resolve o ícone de seta
    const ArrowIcon = 
      trend === 'up' ? ArrowUp :
      trend === 'down' ? ArrowDown : null;

    return (
      <div
        ref={ref}
        className={cn(kpiVariants({ variant, size }), className)}
        {...props}
      >
        {/* Header com título e ícone */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-muted-foreground">
              {title}
            </h3>
            {description && (
              <p className="text-xs text-muted-foreground/70">
                {description}
              </p>
            )}
          </div>
          
          {icon && (
            <div 
              className={cn(
                'rounded-lg p-2',
                iconColor === 'primary' && 'bg-primary/10 text-primary',
                iconColor === 'success' && 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
                iconColor === 'warning' && 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
                iconColor === 'error' && 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
                !iconColor && 'text-muted-foreground'
              )}
            >
              {icon}
            </div>
          )}
        </div>

        {/* Valor principal */}
        <div className="mt-4">
          {loading ? (
            <div className="h-8 w-24 bg-muted rounded animate-pulse" />
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-foreground">
                {formatValue(value, format, currency, decimals)}
              </span>
              
              {/* Indicador de tendência */}
              {trend && trendValue && (
                <div className={cn(trendVariants({ trend }))}>
                  {ArrowIcon && <ArrowIcon className="h-3 w-3" />}
                  {trendValue}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Informações adicionais */}
        {trend && !trendValue && (
          <div className={cn(
            'mt-3 flex items-center gap-1 text-xs',
            trend === 'up' && 'text-emerald-600 dark:text-emerald-400',
            trend === 'down' && 'text-red-600 dark:text-red-400',
            trend === 'neutral' && 'text-muted-foreground'
          )}>
            <TrendIcon className="h-3 w-3" />
            <span>
              {trend === 'up' ? 'Aumentando' :
               trend === 'down' ? 'Diminuindo' : 'Estável'}
            </span>
          </div>
        )}
      </div>
    );
  }
);

KPI.displayName = 'KPI';

/**
 * KPIGrid - Grid de múltiplos KPIs
 */
export interface KPIGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Número de colunas */
  cols?: 1 | 2 | 3 | 4;
  /** KPIs filhos */
  children: React.ReactNode;
}

const gridColsClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
} as const;

export const KPIGrid = React.forwardRef<HTMLDivElement, KPIGridProps>(
  (
    {
      className,
      cols = 4,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'grid gap-4',
          gridColsClasses[cols],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

KPIGrid.displayName = 'KPIGrid';

/**
 * KPIChart - KPI com mini gráfico
 */
export interface KPIChartProps extends KPIProps {
  /** Componente de gráfico */
  chart?: React.ReactNode;
  /** Posição do gráfico */
  chartPosition?: 'bottom' | 'right';
}

export const KPIChart = React.forwardRef<HTMLDivElement, KPIChartProps>(
  (
    {
      className,
      chart,
      chartPosition = 'bottom',
      children,
      ...props
    },
    ref
  ) => {
    const isRight = chartPosition === 'right';
    
    return (
      <div
        ref={ref}
        className={cn(
          kpiVariants({ variant: props.variant, size: props.size }),
          isRight && 'flex flex-row items-center justify-between',
          className
        )}
        {...props}
      >
        <div className={cn(isRight && 'flex-1')}>
          <KPI {...props} />
        </div>
        
        {chart && (
          <div className={cn(
            'mt-4',
            isRight && 'mt-0 ml-4 flex-1 max-w-[200px]'
          )}>
            {chart}
          </div>
        )}
      </div>
    );
  }
);

KPIChart.displayName = 'KPIChart';

