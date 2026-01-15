import * as React from 'react';

/**
 * Componente Rating
 *
 * Sistema de avaliação com estrelas interativas.
 * Suporta leitura e escrita, meias estrelas, customização
 * de cores e ícones.
 *
 * @module @rainersoft/ui/components/data-display/rating
 * @author Rainer Teixeira
 * @version 1.0.0
 */

/**
 * Props do Rating
 */
interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Valor atual do rating (0-5 ou 0-10 para meias estrelas) */
    value?: number;
    /** Valor máximo (padrão 5) */
    max?: number;
    /** Se permite meias estrelas */
    allowHalf?: boolean;
    /** Se é somente leitura */
    readOnly?: boolean;
    /** Se deve mostrar o valor numérico */
    showValue?: boolean;
    /** Callback quando muda o valor */
    onChange?: (value: number) => void;
    /** Callback quando passa o mouse */
    onHover?: (value: number) => void;
    /** Tamanho do rating */
    size?: 'sm' | 'md' | 'lg';
    /** Orientação */
    orientation?: 'horizontal' | 'vertical';
    /** Ícone de estrela preenchida */
    fillIcon?: React.ReactNode;
    /** Ícone de estrela vazia */
    emptyIcon?: React.ReactNode;
    /** Ícone de meia estrela */
    halfIcon?: React.ReactNode;
    /** Cor customizada */
    color?: string;
}
/**
 * Componente Rating
 *
 * Sistema de avaliação com estrelas interativas.
 *
 * @example
 * ```tsx
 * // Rating básico
 * <Rating value={3} onChange={setValue} />
 *
 * // Com meias estrelas
 * <Rating value={3.5} allowHalf onChange={setValue} />
 *
 * // Somente leitura
 * <Rating value={4} readOnly showValue />
 *
 * // Customizado
 * <Rating
 *   value={4.5}
 *   allowHalf
 *   size="lg"
 *   color="#fbbf24"
 *   showValue
 * />
 * ```
 */
declare const Rating: React.ForwardRefExoticComponent<RatingProps & React.RefAttributes<HTMLDivElement>>;
/**
 * RatingProgress - Barra de progresso visual para o rating
 */
interface RatingProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Valor atual (0-100) */
    value: number;
    /** Cor da barra */
    color?: string;
    /** Altura da barra */
    height?: 'sm' | 'md' | 'lg';
    /** Se deve mostrar o percentual */
    showPercentage?: boolean;
}
declare const RatingProgress: React.ForwardRefExoticComponent<RatingProgressProps & React.RefAttributes<HTMLDivElement>>;
/**
 * RatingSummary - Resumo estatístico de ratings
 */
interface RatingSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Rating médio */
    average: number;
    /** Total de avaliações */
    total: number;
    /** Distribuição das avaliações */
    distribution?: Array<{
        rating: number;
        count: number;
    }>;
}
declare const RatingSummary: React.ForwardRefExoticComponent<RatingSummaryProps & React.RefAttributes<HTMLDivElement>>;

export { Rating, RatingProgress, type RatingProgressProps, type RatingProps, RatingSummary, type RatingSummaryProps };
