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

'use client';

// ============================================================================
// IMPORTAÇÕES
// ============================================================================

import React from 'react';
import { StatsOverview } from './stats-overview';
import { type MetricCardItem } from './stats-cards';

// Ícones Lucide para as métricas padrão

// ============================================================================
// TIPOS E INTERFACES
// ============================================================================

/**
 * Representa uma métrica individual no dashboard
 * 
 * @interface StatItem
 * @property {string} label - Nome descritivo da métrica
 * @property {string | number} value - Valor atual da métrica (pode ser formatado)
 * @property {number} [change] - Variação percentual em relação ao período anterior
 * @property {React.ReactNode} icon - Elemento React contendo o ícone da métrica
 * @property {string} [accentKey] - Caminho de cor nos tokens (ex: status.success.base)
 * @property {string} [accentColor] - Cor direta caso não use token
 * @property {string} [secondaryColor] - Cor secundária para gradiente/fundo
 * @property {string} [description] - Texto explicativo adicional (opcional)
 * @property {boolean} [isLoading] - Indica se os dados estão sendo carregados
 */
export interface StatItem extends MetricCardItem {}

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
export interface QuickStatsProps {
  stats?: StatItem[];
  animationDelay?: number;
  className?: string;
  theme?: 'light' | 'dark' | 'auto';
}

// ============================================================================
// CONSTANTES
// ============================================================================

/**
 * Delay padrão para animações em cascata (stagger)
 * @constant {number}
 */
const DEFAULT_STAGGER_DELAY = 0.1;

/**
 * Estatísticas padrão do dashboard (mapeadas para tokens)
 * 
 * @constant {ReadonlyArray<StatItem>}
 * 
 * @example
 * // Estrutura de exemplo:
 * {
 *   label: 'Total de Posts',
 *   value: 42,
 *   change: 12.5,
 *   icon: <FileText />,
 *   color: 'from-cyan-500 to-blue-500',
 *   description: 'Artigos publicados no blog'
 * }
 */
// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================

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
function QuickStatsComponent({
  stats = [],
  animationDelay = DEFAULT_STAGGER_DELAY,
  className,
  theme = 'auto'
}: QuickStatsProps): React.ReactElement {
  return (
    <StatsOverview
      variant="quick"
      items={stats}
      animationDelay={animationDelay}
      className={className}
      theme={theme}
      showFooterDate
    />
  );
}

// ============================================================================
// EXPORTAÇÃO
// ============================================================================

/**
 * Componente QuickStats memoizado para performance otimizada
 * 
 * @remarks
 * Utiliza React.memo para evitar re-renderizações desnecessárias
 * quando as props não mudam.
 */
export const QuickStats = React.memo(QuickStatsComponent);

/**
 * Exibição do nome do componente para ferramentas de debug
 */
QuickStats.displayName = 'QuickStats';

export default QuickStats;
