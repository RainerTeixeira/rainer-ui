import * as react_jsx_runtime from 'react/jsx-runtime';

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
interface AnalyticsOverviewProps {
    className?: string;
}
declare function AnalyticsOverview({ className }: AnalyticsOverviewProps): react_jsx_runtime.JSX.Element;

export { AnalyticsOverview };
