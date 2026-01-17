import React from 'react';
import { StatsCards, type StatsCardsProps, type MetricCardItem } from './stats-cards';

export type StatsOverviewVariant = 'quick' | 'analytics';

export interface StatsOverviewProps {
  variant?: StatsOverviewVariant;
  items?: MetricCardItem[];
  className?: string;
  isLoading?: boolean;
  updatedAt?: Date | string;
  columns?: StatsCardsProps['columns'];
  animationDelay?: number;
  theme?: 'light' | 'dark' | 'auto';
  showFooterDate?: boolean;
}

export function StatsOverview({
  variant = 'quick',
  items,
  className,
  isLoading,
  updatedAt,
  columns,
  animationDelay,
  theme = 'auto',
  showFooterDate = true,
}: StatsOverviewProps) {
  return (
    <section
      className={`w-full ${className || ''}`}
      aria-labelledby={`${variant}-stats-heading`}
      data-theme={theme}
    >
      <h2 id={`${variant}-stats-heading`} className="sr-only">
        Estatísticas do Dashboard ({variant})
      </h2>

      <StatsCards
        items={items ?? []}
        isLoading={isLoading}
        updatedAt={updatedAt}
        columns={columns ?? { base: 1, md: 2, lg: 4 }}
        animationDelay={animationDelay}
        showFooterDate={showFooterDate}
      />
    </section>
  );
}
