/**
 * Componente RangeSlider
 *
 * Slider de intervalo com dois controles.
 * Suporta valores mínimos, máximos e passos customizados.
 *
 * @module @rainersoft/ui/components/forms/range-slider
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/tokens';

/**
 * Interface de valores do range
 */
export interface RangeValue {
  min: number;
  max: number;
}

/**
 * Variantes do RangeSlider
 */
const rangeSliderVariants = cva(
  'relative flex items-center select-none touch-none w-full',
  {
    variants: {
      size: {
        sm: 'h-5',
        md: 'h-6',
        lg: 'h-7',
      },
      variant: {
        default: '',
        colored: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

/**
 * Props do RangeSlider
 */
export interface RangeSliderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'onChange' | 'defaultValue'>,
    VariantProps<typeof rangeSliderVariants> {
  /** Valor atual */
  value?: RangeValue;
  /** Valor inicial */
  defaultValue?: RangeValue;
  /** Callback quando muda o valor */
  onChange?: (value: RangeValue) => void;
  /** Callback quando solta o controle */
  onChangeEnd?: (value: RangeValue) => void;
  /** Valor mínimo */
  min?: number;
  /** Valor máximo */
  max?: number;
  /** Passo do slider */
  step?: number;
  /** Se está desabilitado */
  disabled?: boolean;
  /** Se mostra os valores */
  showValue?: boolean;
  /** Labels dos controles */
  labels?: {
    min?: string;
    max?: string;
  };
  /** Prefixo do valor */
  prefix?: string;
  /** Sufixo do valor */
  suffix?: string;
  /** Cor do slider */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

/**
 * Componente RangeSlider
 *
 * Slider com dois controles para seleção de intervalo.
 *
 * @example
 * ```tsx
 * // Básico
 * <RangeSlider 
 *   value={[25, 75]}
 *   onChange={setValue}
 *   min={0}
 *   max={100}
 * />
 *
 * // Com valores visíveis
 * <RangeSlider 
 *   value={[1000, 5000]}
 *   onChange={setValue}
 *   min={0}
 *   max={10000}
 *   step={100}
 *   showValue
 *   prefix="R$"
 * />
 *
 * // Com cores customizadas
 * <RangeSlider 
 *   value={[1, 5]}
 *   onChange={setValue}
 *   min={1}
 *   max={10}
 *   color="success"
 * />
 * ```
 */
export const RangeSlider = React.forwardRef<HTMLDivElement, RangeSliderProps>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      value,
      defaultValue = { min: 0, max: 100 },
      onChange,
      onChangeEnd,
      min = 0,
      max = 100,
      step = 1,
      disabled = false,
      showValue = false,
      labels,
      prefix,
      suffix,
      color = 'primary',
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<RangeValue>(defaultValue);
    const [isDragging, setIsDragging] = React.useState<'min' | 'max' | null>(null);
    
    const sliderRef = React.useRef<HTMLDivElement>(null);
    const minThumbRef = React.useRef<HTMLDivElement>(null);
    const maxThumbRef = React.useRef<HTMLDivElement>(null);

    // Usa valor controlado ou interno
    const currentValue = value || internalValue;

    // Converte valor para porcentagem
    const valueToPercent = (val: number): number => {
      return ((val - min) / (max - min)) * 100;
    };

    // Converte porcentagem para valor
    const percentToValue = (percent: number): number => {
      const rawValue = (percent / 100) * (max - min) + min;
      return Math.round(rawValue / step) * step;
    };

    // Obtém posição do mouse
    const getPosition = (event: MouseEvent | TouchEvent): number => {
      if (!sliderRef.current) return 0;
      
      const rect = sliderRef.current.getBoundingClientRect();
      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
      const position = clientX - rect.left;
      const percent = (position / rect.width) * 100;
      
      return Math.max(0, Math.min(100, percent));
    };

    // Atualiza valor
    const updateValue = React.useCallback((type: 'min' | 'max', percent: number) => {
      const newValue = percentToValue(percent);
      
      const updated = { ...currentValue };
        
        if (type === 'min') {
          updated.min = Math.min(newValue, currentValue.max - step);
        } else {
          updated.max = Math.max(newValue, currentValue.min + step);
        }
        
        setValue(updated);
    }, [step]);

    // Define valor
    const setValue = React.useCallback((newValue: RangeValue) => {
      setInternalValue(newValue);
      onChange?.(newValue);
    }, [onChange]);

    // Manipuladores de eventos
    const handleMouseDown = React.useCallback((type: 'min' | 'max') => {
      if (disabled) return;
      setIsDragging(type);
    }, [disabled]);

    const handleMouseMove = React.useCallback((event: MouseEvent | TouchEvent) => {
      if (!isDragging || disabled) return;
      
      const percent = getPosition(event);
      updateValue(isDragging, percent);
    }, [isDragging, disabled, updateValue]);

    const handleMouseUp = React.useCallback(() => {
      if (isDragging) {
        onChangeEnd?.(currentValue);
        setIsDragging(null);
      }
    }, [isDragging, currentValue, onChangeEnd]);

    // Event listeners globais
    React.useEffect(() => {
      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleMouseMove);
        document.addEventListener('touchend', handleMouseUp);
        
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.removeEventListener('touchmove', handleMouseMove);
          document.removeEventListener('touchend', handleMouseUp);
        };
      }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    // Classes de cor
    const colorClasses = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      success: 'bg-emerald-500',
      warning: 'bg-amber-500',
      error: 'bg-red-500',
    };

    // Classes do thumb
    const thumbClasses = cn(
      'block h-5 w-5 rounded-full border-2 border-background bg-background shadow-lg transition-all',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'hover:scale-110 active:scale-95',
      disabled && 'cursor-not-allowed',
      color === 'primary' && 'focus-visible:ring-primary',
      color === 'secondary' && 'focus-visible:ring-secondary',
      color === 'success' && 'focus-visible:ring-emerald-500',
      color === 'warning' && 'focus-visible:ring-amber-500',
      color === 'error' && 'focus-visible:ring-red-500'
    );

    const minPercent = valueToPercent(currentValue.min);
    const maxPercent = valueToPercent(currentValue.max);

    return (
      <div
        ref={ref}
        className={cn('space-y-2', className)}
        {...props}
      >
        {/* Labels */}
        {labels && (
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{labels.min}</span>
            <span>{labels.max}</span>
          </div>
        )}

        {/* Slider */}
        <div
          ref={sliderRef}
          className={cn(
            rangeSliderVariants({ size, variant, disabled })
          )}
        >
          {/* Trilha */}
          <div className="absolute h-full w-full rounded-full bg-muted" />
          
          {/* Preenchimento */}
          <div
            className={cn(
              'absolute h-full rounded-full',
              colorClasses[color]
            )}
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />

          {/* Thumb mínimo */}
          <div
            ref={minThumbRef}
            className={cn(thumbClasses, 'absolute')}
            style={{
              left: `calc(${minPercent}% - 10px)`,
              cursor: disabled ? 'not-allowed' : 'grab',
            }}
            onMouseDown={() => handleMouseDown('min')}
            onTouchStart={() => handleMouseDown('min')}
          />

          {/* Thumb máximo */}
          <div
            ref={maxThumbRef}
            className={cn(thumbClasses, 'absolute')}
            style={{
              left: `calc(${maxPercent}% - 10px)`,
              cursor: disabled ? 'not-allowed' : 'grab',
            }}
            onMouseDown={() => handleMouseDown('max')}
            onTouchStart={() => handleMouseDown('max')}
          />
        </div>

        {/* Valores */}
        {showValue && (
          <div className="flex justify-between text-sm font-medium">
            <span>
              {prefix}{currentValue.min}{suffix}
            </span>
            <span>
              {prefix}{currentValue.max}{suffix}
            </span>
          </div>
        )}
      </div>
    );
  }
);

RangeSlider.displayName = 'RangeSlider';
