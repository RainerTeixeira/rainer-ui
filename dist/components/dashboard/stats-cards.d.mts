import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

/**
 * Item de métrica para o dashboard unificado
 */
interface MetricCardItem {
    label: string;
    value: number | string;
    change?: number;
    trend?: 'up' | 'down';
    description?: string;
    icon: React__default.ReactNode;
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
interface StatsCardsProps {
    items?: MetricCardItem[];
    isLoading?: boolean;
    className?: string;
    /** Número de colunas por breakpoint */
    columns?: {
        base?: number;
        md?: number;
        lg?: number;
    };
    /** Exibe rodapé com data de atualização */
    showFooterDate?: boolean;
    updatedAt?: Date | string;
    animationDelay?: number;
    emptyMessage?: string;
}
declare function StatsCards({ items, isLoading, className, columns, showFooterDate, updatedAt, animationDelay, emptyMessage, }: StatsCardsProps): react_jsx_runtime.JSX.Element;

export { type MetricCardItem, StatsCards, type StatsCardsProps };
