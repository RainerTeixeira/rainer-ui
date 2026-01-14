import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Propriedades do componente StatsCards
 */
interface StatsCardsProps {
    /** Dados estatísticos a serem exibidos */
    stats: {
        totalPosts: number;
        totalViews: number;
        totalLikes: number;
        totalComments: number;
        postsChange?: number;
        viewsChange?: number;
        likesChange?: number;
        commentsChange?: number;
    };
    /** Estado de carregamento para mostrar skeleton */
    isLoading?: boolean;
}
/**
 * Componente StatsCards
 *
 * Renderiza cards de estatísticas com animações e indicadores de mudança.
 * Suporta loading state e é completamente responsivo.
 */
declare function StatsCards({ stats, isLoading }: StatsCardsProps): react_jsx_runtime.JSX.Element;

export { StatsCards, type StatsCardsProps };
