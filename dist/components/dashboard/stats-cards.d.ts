import React from 'react';
/**
 * Item de métrica para o dashboard unificado
 */
export interface MetricCardItem {
    label: string;
    value: number | string;
    change?: number;
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
export declare function StatsCards({ items, isLoading, className, columns, showFooterDate, updatedAt, animationDelay, emptyMessage, }: StatsCardsProps): import("react/jsx-runtime").JSX.Element;
