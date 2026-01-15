import React__default from 'react';

/**
 * Componente de Estatísticas Rápidas para Dashboard
 *
 * Exibe cards com métricas principais do sistema de forma visualmente atrativa,
 * incluindo ícones, valores e indicadores de variação percentual. O componente
 * oferece animações suaves, design responsivo e suporte a customização completa.
 *
 * @module components/dashboard/quick-stats
 * @author Rainer Teixeira
 * @version 2.1.0
 * @since 1.0.0
 *
 * @license MIT
 *
 * @example
 * ```tsx
 * // Uso básico com estatísticas padrão
 * <QuickStats />
 *
 * // Com estatísticas personalizadas
 * const customStats = [
 *   {
 *     label: 'Usuários Ativos',
 *     value: 1250,
 *     change: 15.5,
 *     icon: <Users className="w-5 h-5" />,
 *     color: 'from-blue-500 to-cyan-500'
 *   }
 * ];
 * <QuickStats stats={customStats} />
 * ```
 *
 * @see {@link https://framer.com/motion Framer Motion} - Biblioteca de animações
 * @see {@link https://lucide.dev Lucide Icons} - Conjunto de ícones utilizados
 *
 * @performance
 * - Otimizado para renderização com React.memo
 * - Animações com hardware acceleration
 * - Lazy loading de recursos visuais
 */

/**
 * Representa uma métrica individual no dashboard
 *
 * @interface StatItem
 * @property {string} label - Nome descritivo da métrica
 * @property {string | number} value - Valor atual da métrica (pode ser formatado)
 * @property {number} [change] - Variação percentual em relação ao período anterior
 * @property {React.ReactNode} icon - Elemento React contendo o ícone da métrica
 * @property {string} color - Classes CSS do gradiente de cor (formato Tailwind)
 * @property {string} [description] - Texto explicativo adicional (opcional)
 * @property {boolean} [isLoading] - Indica se os dados estão sendo carregados
 */
interface StatItem {
    label: string;
    value: string | number;
    change?: number;
    icon: React__default.ReactNode;
    color: string;
    description?: string;
    isLoading?: boolean;
}
/**
 * Propriedades do componente QuickStats
 *
 * @interface QuickStatsProps
 * @property {StatItem[]} [stats] - Array de estatísticas personalizadas
 * @property {number} [animationDelay] - Delay entre animações dos cards em segundos
 * @property {boolean} [animateOnView] - Se deve animar apenas quando visível na viewport
 * @property {string} [className] - Classes CSS adicionais para o container
 * @property {'light' | 'dark' | 'auto'} [theme] - Tema de exibição dos cards
 */
interface QuickStatsProps {
    stats?: StatItem[];
    animationDelay?: number;
    animateOnView?: boolean;
    className?: string;
    theme?: 'light' | 'dark' | 'auto';
}
/**
 * Componente QuickStats
 *
 * Renderiza uma grid responsiva de cards com métricas do sistema.
 * Cada card inclui ícone, valor, label e indicador de variação percentual.
 *
 * @component
 * @param {QuickStatsProps} props - Propriedades do componente
 * @returns {React.ReactElement} Grid de cards de estatísticas
 *
 * @features
 * - ✅ Animações suaves com Framer Motion
 * - ✅ Design responsivo (1 col mobile → 4 cols desktop)
 * - ✅ Indicadores de variação coloridos
 * - ✅ Suporte a temas claro/escuro
 * - ✅ Gradientes visuais com blur
 * - ✅ Estados de loading
 * - ✅ Acessibilidade completa
 * - ✅ Hover effects premium
 *
 * @accessibility
 * - Screen reader friendly
 * - Suporte a navegação por teclado
 * - Contraste de cores adequado
 * - Labels ARIA descritivos
 *
 * @performance
 * - Memoização de componentes
 * - Animações otimizadas
 * - Renderização condicional
 */
declare function QuickStatsComponent({ stats, animationDelay, className, theme }: QuickStatsProps): React__default.ReactElement;
/**
 * Componente QuickStats memoizado para performance otimizada
 *
 * @remarks
 * Utiliza React.memo para evitar re-renderizações desnecessárias
 * quando as props não mudam.
 */
declare const QuickStats: React__default.MemoExoticComponent<typeof QuickStatsComponent>;

export { QuickStats, type QuickStatsProps, type StatItem, QuickStats as default };
