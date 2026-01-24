import { type StatsCardsProps, type MetricCardItem } from './stats-cards';
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
export declare function StatsOverview({ variant, items, className, isLoading, updatedAt, columns, animationDelay, theme, showFooterDate, }: StatsOverviewProps): import("react/jsx-runtime").JSX.Element;
