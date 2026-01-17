/**
 * Analytics Overview Component
 *
 * Visão geral de analytics com cards de métricas do blog. Exibe visualizações,
 * visitantes, curtidas e comentários com indicadores de tendência (aumento ou
 * diminuição percentual).
 *
 * @module components/domain/dashboard/analytics-overview
 * @fileoverview Visão geral de analytics com métricas do blog
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * <AnalyticsOverview className="mt-4" />
 * ```
 *
 * Características:
 * - Cards de métricas principais
 * - Indicadores de tendência (up/down)
 * - Ícones coloridos por métrica
 * - Layout responsivo em grid
 * - Integração com dados da API
 * - Animações suaves
 * - Acessibilidade completa
 */

'use client';

import { StatsOverview } from './stats-overview';
import { type MetricCardItem } from './stats-cards';

interface AnalyticsOverviewProps {
  className?: string;
  /** Métricas a serem exibidas (obrigatórias externamente) */
  metrics?: MetricCardItem[];
  isLoading?: boolean;
  updatedAt?: Date | string;
}

export function AnalyticsOverview({ className, metrics = [], isLoading, updatedAt }: AnalyticsOverviewProps) {
  const items = metrics;

  return (
    <StatsOverview
      variant="analytics"
      className={className}
      items={items}
      isLoading={isLoading}
      updatedAt={updatedAt}
      columns={{ base: 1, md: 2, lg: 4 }}
      showFooterDate
    />
  );
}



