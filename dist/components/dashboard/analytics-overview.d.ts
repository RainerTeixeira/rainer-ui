import * as react_jsx_runtime from 'react/jsx-runtime';
import { MetricCardItem } from './stats-cards.js';
import 'react';

interface AnalyticsOverviewProps {
    className?: string;
    /** Métricas a serem exibidas (obrigatórias externamente) */
    metrics?: MetricCardItem[];
    isLoading?: boolean;
    updatedAt?: Date | string;
}
declare function AnalyticsOverview({ className, metrics, isLoading, updatedAt }: AnalyticsOverviewProps): react_jsx_runtime.JSX.Element;

export { AnalyticsOverview };
