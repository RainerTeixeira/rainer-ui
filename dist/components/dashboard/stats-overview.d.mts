import * as react_jsx_runtime from 'react/jsx-runtime';
import { MetricCardItem, StatsCardsProps } from './stats-cards.mjs';
import 'react';

type StatsOverviewVariant = 'quick' | 'analytics';
interface StatsOverviewProps {
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
declare function StatsOverview({ variant, items, className, isLoading, updatedAt, columns, animationDelay, theme, showFooterDate, }: StatsOverviewProps): react_jsx_runtime.JSX.Element;

export { StatsOverview, type StatsOverviewProps, type StatsOverviewVariant };
