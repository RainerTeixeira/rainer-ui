import * as React from 'react';

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

/**
 * Props do KPI
 */
interface KPIProps extends React.HTMLAttributes<HTMLDivElement> {
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
declare const KPI: React.ForwardRefExoticComponent<KPIProps & React.RefAttributes<HTMLDivElement>>;
/**
 * KPIGrid - Grid de múltiplos KPIs
 */
interface KPIGridProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Número de colunas */
    cols?: 1 | 2 | 3 | 4;
    /** KPIs filhos */
    children: React.ReactNode;
}
declare const KPIGrid: React.ForwardRefExoticComponent<KPIGridProps & React.RefAttributes<HTMLDivElement>>;
/**
 * KPIChart - KPI com mini gráfico
 */
interface KPIChartProps extends KPIProps {
    /** Componente de gráfico */
    chart?: React.ReactNode;
    /** Posição do gráfico */
    chartPosition?: 'bottom' | 'right';
}
declare const KPIChart: React.ForwardRefExoticComponent<KPIChartProps & React.RefAttributes<HTMLDivElement>>;

export { KPI, KPIChart, type KPIChartProps, KPIGrid, type KPIGridProps, type KPIProps };
