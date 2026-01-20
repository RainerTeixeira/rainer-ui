/**
 * Componente SegmentedControl
 *
 * Controle segmentado para seleção mútua.
 * Similar ao radio group mas visualmente segmentado.
 *
 * @module @rainersoft/ui/components/ui/segmented-control
 * @author Rainer Teixeira
 * @version 1.0.0
 */

'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/tokens';

/**
 * Interface de opção
 */
export interface SegmentedOption {
  /** Valor da opção */
  value: string;
  /** Label da opção */
  label: string;
  /** Ícone da opção */
  icon?: React.ReactNode;
  /** Se está desabilitada */
  disabled?: boolean;
}

/**
 * Variantes do SegmentedControl
 */
const segmentedControlVariants = cva(
  'inline-flex items-center rounded-lg border border-border bg-background p-1 text-foreground',
  {
    variants: {
      size: {
        sm: 'h-8 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
      },
      variant: {
        default: '',
        pill: 'rounded-full',
        neon: 'neon-border dark:shadow-glow-cyan',
        glass: 'glass border-border',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      fullWidth: false,
    },
  }
);

/**
 * Props do SegmentedControl
 */
export interface SegmentedControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof segmentedControlVariants> {
  /** Opções disponíveis */
  options: SegmentedOption[];
  /** Valor selecionado */
  value?: string;
  /** Callback quando muda a seleção */
  onChange?: (value: string) => void;
  /** Valor padrão */
  defaultValue?: string;
  /** Se está desabilitado */
  disabled?: boolean;
}

/**
 * Componente SegmentedControl
 *
 * Controle segmentado para seleção.
 *
 * @example
 * ```tsx
 * // Básico
 * <SegmentedControl 
 *   options={[
 *     { value: 'day', label: 'Dia' },
 *     { value: 'week', label: 'Semana' },
 *     { value: 'month', label: 'Mês' },
 *   ]}
 *   value={period}
 *   onChange={setPeriod}
 * />
 *
 * // Com ícones
 * <SegmentedControl 
 *   options={[
 *     { value: 'grid', label: 'Grade', icon: <Grid /> },
 *     { value: 'list', label: 'Lista', icon: <List /> },
 *   ]}
 *   value={view}
 *   onChange={setView}
 * />
 *
 * // Full width
 * <SegmentedControl 
 *   options={options}
 *   value={selected}
 *   onChange={setSelected}
 *   fullWidth
 * />
 * ```
 */
export const SegmentedControl = React.forwardRef<HTMLDivElement, SegmentedControlProps>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      fullWidth = false,
      options,
      value,
      onChange,
      defaultValue,
      disabled = false,
      ...props
    },
    ref
  ) => {
    // Estado interno se não for controlado
    const [internalValue, setInternalValue] = React.useState(defaultValue || options[0]?.value);
    const currentValue = value !== undefined ? value : internalValue;

    // Manipulador de clique
    const handleOptionClick = React.useCallback((optionValue: string, isDisabled: boolean) => {
      if (isDisabled || disabled) return;
      
      if (value === undefined) {
        setInternalValue(optionValue);
      }
      onChange?.(optionValue);
    }, [value, onChange, disabled]);

    // Classes de tamanho
    const sizeClasses = {
      sm: 'px-3 py-1 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    };

    return (
      <div
        ref={ref}
        className={cn(
          segmentedControlVariants({ size, variant, fullWidth }),
          disabled && 'opacity-50 pointer-events-none',
          className
        )}
        role="radiogroup"
        {...props}
      >
        {options.map((option) => {
          const isActive = currentValue === option.value;
          const isDisabled = option.disabled || disabled;

          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isActive}
              disabled={isDisabled}
              className={cn(
                'flex items-center justify-center gap-2 font-medium transition-all duration-[var(--motion-duration-fast)]',
                'rounded-md',
                sizeClasses[size],
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50',
                isDisabled && 'pointer-events-none opacity-50',
                fullWidth && 'flex-1'
              )}
              onClick={() => handleOptionClick(option.value, isDisabled)}
            >
              {option.icon && (
                <span className="h-4 w-4">{option.icon}</span>
              )}
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    );
  }
);

SegmentedControl.displayName = 'SegmentedControl';

/**
 * SegmentedControlItem - Item individual (para composição)
 */
export interface SegmentedControlItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Se está ativo */
  active?: boolean;
  /** Tamanho */
  size?: VariantProps<typeof segmentedControlVariants>['size'];
  /** Ícone */
  icon?: React.ReactNode;
}

export const SegmentedControlItem = React.forwardRef<HTMLButtonElement, SegmentedControlItemProps>(
  (
    {
      className,
      active = false,
      size = 'md',
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'px-3 py-1 text-xs h-8',
      md: 'px-4 py-2 text-sm h-10',
      lg: 'px-6 py-3 text-base h-12',
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'flex items-center justify-center gap-2 font-medium transition-all duration-[var(--motion-duration-fast)]',
          'rounded-md',
          sizeClasses[size],
          active
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground hover:bg-accent/50',
          className
        )}
        {...props}
      >
        {icon && (
          <span className="h-4 w-4">{icon}</span>
        )}
        {children}
      </button>
    );
  }
);

SegmentedControlItem.displayName = 'SegmentedControlItem';
