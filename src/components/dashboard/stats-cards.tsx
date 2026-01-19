'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import TrendingDown from 'lucide-react/dist/esm/icons/trending-down';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';

/**
 * Item de métrica para o dashboard unificado
 */
export interface MetricCardItem {
  label: string;
  value: number | string;
  change?: number; // Percentual (positivo ou negativo)
  trend?: 'up' | 'down';
  description?: string;
  icon: React.ReactNode;
  /** Caminho de cor nos tokens (ex: "status.success.base" ou "cyan.500") */
  accentKey?: string;
  /** Cor direta caso não use path de token */
  accentColor?: string;
  /** Cor secundária para gradiente/fundo */
  secondaryColor?: string;
  /** Formata o valor exibido (ex: moeda, sufixos) */
  formatValue?: (value: number | string) => string;
  /** Prefixo/Sufixo direto quando não usar formatValue */
  valuePrefix?: string;
  valueSuffix?: string;
  isLoading?: boolean;
}

export interface StatsCardsProps {
  items?: MetricCardItem[];
  isLoading?: boolean;
  className?: string;
  /** Número de colunas por breakpoint */
  columns?: { base?: number; md?: number; lg?: number };
  /** Exibe rodapé com data de atualização */
  showFooterDate?: boolean;
  updatedAt?: Date | string;
  animationDelay?: number;
  emptyMessage?: string;
}

export function StatsCards({
  items = [],
  isLoading = false,
  className,
  columns = { base: 1, md: 2, lg: 4 },
  showFooterDate,
  updatedAt,
  animationDelay,
  emptyMessage = 'Nenhum dado disponível',
}: StatsCardsProps) {
  // Valores diretos dos tokens (sem provider)
  const getColor = (path: string, fallback: string) => fallback;
  const getShadow = (path: string, fallback: string) => fallback;

  const resolvedAnimationDelay = animationDelay ?? 0.1;
  const cardRadius = '0.5rem';
  const cardShadow = getShadow('md', '0 4px 6px -1px rgb(0 0 0 / 0.1)');

  const gridClass = cn(
    'grid gap-4',
    columns.base && `grid-cols-${columns.base}`,
    columns.md && `md:grid-cols-${columns.md}`,
    columns.lg && `lg:grid-cols-${columns.lg}`,
    className
  );

  const fallbackPrimary = 'var(--color-cyan-500)';
  const fallbackSecondary = 'var(--color-info-background)';

  const resolvedItems = items.map((item) => {
    const primary = item.accentColor ?? (item.accentKey ? getColor(item.accentKey, fallbackPrimary) : fallbackPrimary);
    const secondary = item.secondaryColor
      ? getColor(item.secondaryColor, fallbackSecondary)
      : fallbackSecondary;

    return {
      ...item,
      primary,
      secondary,
    };
  });

  if (isLoading) {
    return (
      <div className={gridClass}>
        {[...Array(Math.max(resolvedItems.length, 4))].map((_, i) => (
          <Card
            key={i}
            className="animate-pulse border"
            style={{ borderRadius: cardRadius, boxShadow: cardShadow }}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="h-4 w-24 bg-muted rounded" />
              <div className="h-8 w-8 bg-muted rounded" />
            </CardHeader>
            <CardContent>
              <div className="h-8 w-20 bg-muted rounded" />
              <div className="h-3 w-28 bg-muted rounded mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!resolvedItems.length) {
    return (
      <Card className={cn('w-full', className)} style={{ borderRadius: cardRadius, boxShadow: cardShadow }}>
        <CardContent className="p-6 text-center text-muted-foreground text-sm">
          {emptyMessage}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={gridClass}>
      {resolvedItems.map((stat, index) => {
        const isPositive = stat.trend ? stat.trend === 'up' : (stat.change ?? 0) >= 0;
        const changeValue = stat.change ?? 0;
        const valueText = stat.formatValue
          ? stat.formatValue(stat.value)
          : typeof stat.value === 'number'
            ? stat.value.toLocaleString('pt-BR')
            : stat.value;
        const indicatorColor = isPositive
          ? 'var(--color-success-default)'
          : 'var(--color-error-default)';

        return (
          <motion.div
            key={`${stat.label}-${index}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * resolvedAnimationDelay }}
          >
            <Card
              className="relative overflow-hidden border backdrop-blur-sm"
              style={{ borderRadius: cardRadius, boxShadow: cardShadow }}
            >
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  background: `radial-gradient(140% 140% at 80% 0%, ${stat.primary} 0%, transparent 55%)`
                }}
                aria-hidden="true"
              />
              <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                  style={{
                    background: `linear-gradient(135deg, ${stat.primary}, ${stat.secondary})`
                  }}
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>
              </CardHeader>

              <CardContent className="relative z-10 space-y-2">
                <div className="flex items-end justify-between">
                  <div className="text-2xl font-bold">
                    {stat.valuePrefix}{valueText}{stat.valueSuffix}
                  </div>
                  {stat.change !== undefined && (
                    <div
                      className={cn(
                        'flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full',
                        isPositive
                          ? 'bg-[color:var(--token-status-success-bg,transparent)]'
                          : 'bg-[color:var(--token-status-error-bg,transparent)]'
                      )}
                      style={{
                        color: indicatorColor,
                        backgroundColor: `${indicatorColor}1a`,
                      }}
                    >
                      {isPositive ? (
                        <TrendingUp className="h-3 w-3" aria-hidden="true" />
                      ) : (
                        <TrendingDown className="h-3 w-3" aria-hidden="true" />
                      )}
                      {Math.abs(changeValue).toFixed(1)}%
                    </div>
                  )}
                </div>

                {stat.description && (
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                )}

                {stat.change !== undefined && (
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: indicatorColor }}
                      aria-hidden="true"
                    />
                    {isPositive ? 'Em alta' : 'Em baixa'} em relação ao período anterior
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        );
      })}

      {showFooterDate && (
        <div className="col-span-full text-right text-xs text-muted-foreground mt-1">
          Atualizado em {new Date(updatedAt ?? Date.now()).toLocaleString('pt-BR')}
        </div>
      )}
    </div>
  );
}
