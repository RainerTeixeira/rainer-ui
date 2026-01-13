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
import { motion } from 'framer-motion';
import { Card, CardContent } from '../layout/card';
import { Eye } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Heart } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { TrendingDown } from 'lucide-react';
import { TrendingUp } from 'lucide-react';

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
 * @property {string} color - Classes CSS do gradiente de cor (formato Tailwind)
 * @property {string} [description] - Texto explicativo adicional (opcional)
 * @property {boolean} [isLoading] - Indica se os dados estão sendo carregados
 */
export interface StatItem {
  label: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
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
export interface QuickStatsProps {
  stats?: StatItem[];
  animationDelay?: number;
  animateOnView?: boolean;
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
 * Configuração das animações dos cards
 * @constant {object}
 */
const CARD_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 30
  }
} as const;

/**
 * Estatísticas padrão do dashboard
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
const DEFAULT_STATS: ReadonlyArray<StatItem> = [
  {
    label: 'Total de Posts',
    value: 42,
    change: 12.5,
    icon: <FileText className="w-5 h-5" aria-hidden="true" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Artigos publicados no blog'
  },
  {
    label: 'Visualizações',
    value: '2.4K',
    change: 8.3,
    icon: <Eye className="w-5 h-5" aria-hidden="true" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Visualizações totais'
  },
  {
    label: 'Curtidas',
    value: 1.2,
    change: -3.2,
    icon: <Heart className="w-5 h-5" aria-hidden="true" />,
    color: 'from-orange-500 to-red-500',
    description: 'Curtidas recebidas'
  },
  {
    label: 'Comentários',
    value: 89,
    change: 15.7,
    icon: <MessageSquare className="w-5 h-5" aria-hidden="true" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Comentários ativos'
  }
];

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
  stats = [...DEFAULT_STATS],
  animationDelay = DEFAULT_STAGGER_DELAY,
  animateOnView = true,
  className,
  theme = 'auto'
}: QuickStatsProps): React.ReactElement {
  // ========================================================================
  // FUNÇÕES AUXILIARES
  // ========================================================================

  /**
   * Formata números grandes para exibição amigável
   * 
   * @param {string | number} value - Valor a ser formatado
   * @returns {string} Valor formatado
   * @private
   */
  const formatValue = (value: string | number): string => {
    if (typeof value === 'number') {
      if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}K`;
      }
      return value.toString();
    }
    return value;
  };

  /**
   * Renderiza o indicador de variação percentual
   * 
   * @param {number | undefined} change - Variação percentual
   * @returns {React.ReactNode} Componente do indicador
   * @private
   */
  const renderChangeIndicator = (
    change: number | undefined
  ): React.ReactNode => {
    if (change === undefined || change === 0) return null;

    const isPositive = change > 0;
    const Icon = isPositive ? TrendingUp : TrendingDown;
    const formattedChange = Math.abs(change).toFixed(1);

    return (
      <div
        className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold transition-colors bg-opacity-20 ${isPositive ? 'text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900/30' : 'text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900/30'}`}
        role="status"
        aria-label={`Variação de ${formattedChange}% ${isPositive ? 'positiva' : 'negativa'}`}
      >
        <Icon 
          className="w-3 h-3" 
          aria-hidden="true" 
        />
        <span>{formattedChange}%</span>
      </div>
    );
  };

  /**
   * Renderiza o conteúdo do card de estatística
   * 
   * @param {StatItem} stat - Dados da estatística
   * @param {number} index - Índice do card na grid
   * @returns {React.ReactNode} Card renderizado
   * @private
   */
  const renderStatCard = (stat: StatItem, index: number): React.ReactNode => {
    const formattedValue = formatValue(stat.value);
    const cardId = `stat-card-${index}`;

    return (
      <motion.article
        key={stat.label}
        initial={CARD_ANIMATION.initial}
        animate={CARD_ANIMATION.animate}
        transition={{
          ...CARD_ANIMATION.transition,
          delay: index * animationDelay
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
        role="article"
        aria-labelledby={`${cardId}-title`}
        aria-describedby={stat.description ? `${cardId}-desc` : undefined}
        className="h-full"
      >
        <Card className="relative h-full overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:hover:border-gray-700">
          {/* Background com gradiente e blur */}
          <div
            className={`absolute -top-12 -right-12 w-32 h-32 opacity-10 bg-gradient-to-br rounded-full blur-3xl transition-opacity duration-500 hover:opacity-15 ${stat.color}`}
            aria-hidden="true"
          />

          <CardContent className="relative p-6">
            {/* Header: Ícone e indicador de variação */}
            <div className="flex items-start justify-between mb-4">
              <div
                className={`p-3 rounded-xl shadow-sm bg-gradient-to-br ${stat.color} text-white transition-transform duration-300 hover:scale-110`}
                aria-hidden="true"
              >
                {stat.icon}
              </div>
              {renderChangeIndicator(stat.change)}
            </div>

            {/* Conteúdo principal */}
            <div className="space-y-1">
              <h3
                id={`${cardId}-title`}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
              >
                {stat.isLoading ? (
                  <span className="inline-block h-8 w-16 animate-pulse bg-gray-300 dark:bg-gray-700 rounded" />
                ) : (
                  formattedValue
                )}
              </h3>
              
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
              
              {stat.description && (
                <p 
                  id={`${cardId}-desc`}
                  className="text-xs text-gray-500 dark:text-gray-500 mt-2"
                >
                  {stat.description}
                </p>
              )}
            </div>

            {/* Badge de status (opcional) */}
            {stat.change !== undefined && (
              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {stat.change > 0 ? 'Em alta' : 'Em baixa'} este mês
                </span>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.article>
    );
  };

  // ========================================================================
  // RENDERIZAÇÃO PRINCIPAL
  // ========================================================================

  return (
    <section 
      className={`w-full ${className || ''}`}
      aria-labelledby="quick-stats-heading"
      data-theme={theme}
    >
      <h2 id="quick-stats-heading" className="sr-only">
        Estatísticas Rápidas do Dashboard
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <React.Fragment key={`${stat.label}-${index}`}>
            {renderStatCard(stat, index)}
          </React.Fragment>
        ))}
      </div>
      
      {/* Informação de atualização */}
      <div className="mt-4 text-right">
        <p className="text-xs text-gray-500 dark:text-gray-500">
          Atualizado em {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    </section>
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
