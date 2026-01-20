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

import * as React from 'react';
import { cva } from 'class-variance-authority';
import Star from 'lucide-react/dist/esm/icons/star';
import StarHalf from 'lucide-react/dist/esm/icons/star-half';

import { cn } from '../../lib/tokens';

/**
 * Variantes do Rating
 */
const ratingVariants = cva(
  'flex items-center gap-1',
  {
    variants: {
      size: {
        sm: 'gap-0.5',
        md: 'gap-1',
        lg: 'gap-1.5',
      },
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
    },
    defaultVariants: {
      size: 'md',
      orientation: 'horizontal',
    },
  }
);

/**
 * Classes de tamanho para estrelas
 */
const starSizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
} as const;

/**
 * Props do Rating
 */
export interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      className,
      value = 0,
      max = 5,
      allowHalf = false,
      readOnly = false,
      showValue = false,
      onChange,
      onHover,
      size = 'md',
      orientation = 'horizontal',
      fillIcon,
      emptyIcon,
      halfIcon,
      color,
      ...props
    },
    ref
  ) => {
    const [hoverValue, setHoverValue] = React.useState<number>(0);
    const [isHovering, setIsHovering] = React.useState(false);
    
    // Calcula o valor exibido (hover ou valor real)
    const displayValue = isHovering ? hoverValue : value;
    
    // Calcula o valor formatado para exibição
    const formattedValue = allowHalf ? displayValue.toFixed(1) : Math.round(displayValue).toString();

    // Manipuladores de eventos
    const handleStarClick = (starValue: number) => {
      if (readOnly) return;
      onChange?.(starValue);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>, starIndex: number) => {
      if (readOnly) return;
      
      const rect = event.currentTarget.getBoundingClientRect();
      const { width } = rect;
      const { offsetX } = event.nativeEvent;
      
      let newHoverValue = starIndex + 1;
      
      // Se permite meia estrela, verifica a posição do mouse
      if (allowHalf) {
        const isHalf = offsetX < width / 2;
        if (isHalf) {
          newHoverValue = starIndex + 0.5;
        }
      }
      
      setHoverValue(newHoverValue);
      onHover?.(newHoverValue);
    };

    const handleMouseEnter = () => {
      if (!readOnly) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      if (!readOnly) {
        setIsHovering(false);
        setHoverValue(0);
      }
    };

    // Renderiza estrela individual
    const renderStar = (starIndex: number) => {
      const starValue = starIndex + 1;
      const isFilled = starValue <= displayValue;
      const isHalf = allowHalf && starValue - 0.5 === displayValue;
      
      // Resolve o ícone a ser usado
      let icon = emptyIcon || <Star className={starSizeClasses[size]} />;
      
      if (isHalf) {
        icon = halfIcon || <StarHalf className={starSizeClasses[size]} />;
      } else if (isFilled) {
        icon = fillIcon || <Star className={starSizeClasses[size]} fill="currentColor" />;
      }

      // Aplica cor customizada se fornecida
      const iconStyle = color && (isFilled || isHalf) ? { color } : undefined;

      return (
        <div
          key={starIndex}
          className={cn(
            'cursor-pointer transition-all duration-[var(--motion-duration-fast)]',
            'hover:scale-110 active:scale-95',
            readOnly && 'cursor-default',
            (isFilled || isHalf) ? 'text-primary' : 'text-muted-foreground/30'
          )}
          onMouseMove={(e) => handleMouseMove(e, starIndex)}
          onClick={() => handleStarClick(isHalf ? starIndex + 0.5 : starValue)}
          style={iconStyle}
        >
          {icon}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(ratingVariants({ size, orientation }), className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className="flex items-center">
          {Array.from({ length: max }, (_, index) => renderStar(index))}
          
          {showValue && (
            <span className={cn(
              'ml-2 text-sm font-medium',
              orientation === 'vertical' && 'ml-0 mt-2'
            )}>
              {formattedValue}/{max}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Rating.displayName = 'Rating';

/**
 * RatingProgress - Barra de progresso visual para o rating
 */
export interface RatingProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Valor atual (0-100) */
  value: number;
  /** Cor da barra */
  color?: string;
  /** Altura da barra */
  height?: 'sm' | 'md' | 'lg';
  /** Se deve mostrar o percentual */
  showPercentage?: boolean;
}

const progressHeightClasses = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
} as const;

export const RatingProgress = React.forwardRef<HTMLDivElement, RatingProgressProps>(
  (
    {
      className,
      value,
      color,
      height = 'md',
      showPercentage = false,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, value));
    
    return (
      <div className={cn('w-full', className)} {...props}>
        <div
          ref={ref}
          className={cn(
            'w-full bg-muted rounded-full overflow-hidden',
            progressHeightClasses[height]
          )}
        >
          <div
            className={cn(
              'h-full bg-primary transition-all duration-[var(--motion-duration-normal)] ease-[var(--motion-easing-ease-out)]',
              color && 'opacity-80'
            )}
            style={{
              width: `${percentage}%`,
              backgroundColor: color,
            }}
          />
        </div>
        
        {showPercentage && (
          <span className="mt-1 text-xs text-muted-foreground">
            {percentage.toFixed(0)}%
          </span>
        )}
      </div>
    );
  }
);

RatingProgress.displayName = 'RatingProgress';

/**
 * RatingSummary - Resumo estatístico de ratings
 */
export interface RatingSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Rating médio */
  average: number;
  /** Total de avaliações */
  total: number;
  /** Distribuição das avaliações */
  distribution?: Array<{ rating: number; count: number }>;
}

export const RatingSummary = React.forwardRef<HTMLDivElement, RatingSummaryProps>(
  (
    {
      className,
      average,
      total,
      distribution,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('space-y-2', className)}
        {...props}
      >
        <div className="flex items-center gap-4">
          <div className="text-3xl font-bold">{average.toFixed(1)}</div>
          <div className="flex-1">
            <Rating value={average} readOnly size="sm" />
            <p className="text-sm text-muted-foreground mt-1">
              {total} {total === 1 ? 'avaliação' : 'avaliações'}
            </p>
          </div>
        </div>
        
        {distribution && (
          <div className="space-y-1">
            {distribution.map(({ rating, count }) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-3">
                  {rating}
                </span>
                <RatingProgress
                  value={total > 0 ? (count / total) * 100 : 0}
                  height="sm"
                  className="flex-1"
                />
                <span className="text-xs text-muted-foreground w-8 text-right">
                  {count}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

RatingSummary.displayName = 'RatingSummary';

