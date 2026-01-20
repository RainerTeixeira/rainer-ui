/**
 * Componente Spinner
 *
 * Indicador de carregamento circular animado.
 * Suporta múltiplos tamanhos, cores e variantes visuais.
 *
 * @module @rainersoft/ui/components/feedback/spinner
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import { Loader2 } from 'lucide-react';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/tokens';

/**
 * Variantes do Spinner
 */
const spinnerVariants = cva(
  'animate-spin text-muted-foreground',
  {
    variants: {
      variant: {
        default: '',
        primary: 'text-primary',
        secondary: 'text-secondary',
        destructive: 'text-destructive',
        success: 'text-emerald-600 dark:text-emerald-500',
        warning: 'text-amber-600 dark:text-amber-500',
        glow: 'text-primary dark:text-cyan-400',
        pulse: 'animate-pulse',
        dots: 'animate-bounce',
      },
      size: {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
        xl: 'h-8 w-8',
        '2xl': 'h-12 w-12',
        '3xl': 'h-16 w-16',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

/**
 * Props do Spinner
 */
export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  /** Label para acessibilidade */
  label?: string;
  /** Se deve mostrar o label */
  showLabel?: boolean;
  /** Posição do label em relação ao spinner */
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
  /** Ícone customizado */
  icon?: React.ReactNode;
  /** Velocidade da animação */
  speed?: 'slow' | 'normal' | 'fast';
}

/**
 * Classes de velocidade de animação
 */
const speedClasses = {
  slow: 'animate-spin-slow',
  normal: 'animate-spin',
  fast: 'animate-spin-fast',
} as const;

/**
 * Componente Spinner
 *
 * Indicador de carregamento circular animado.
 *
 * @example
 * ```tsx
 * // Spinner básico
 * <Spinner />
 *
 * // Com tamanho e cor customizados
 * <Spinner size="lg" variant="primary" />
 *
 * // Com label
 * <Spinner label="Carregando..." showLabel />
 *
 * // Com ícone customizado
 * <Spinner icon={<CustomIcon />} variant="glow" />
 *
 * // Animação de dots
 * <Spinner variant="dots" size="sm" />
 * ```
 */
export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      label = 'Carregando...',
      showLabel = false,
      labelPosition = 'bottom',
      icon,
      speed = 'normal',
      ...props
    },
    ref
  ) => {
    // Resolve o ícone a ser usado
    const IconComponent = icon || <Loader2 className={spinnerVariants({ variant, size })} />;

    // Aplica velocidade customizada se não for variant pulso ou dots
    const animationClass = 
      variant === 'pulse' 
        ? 'animate-pulse' 
        : variant === 'dots' 
        ? 'animate-bounce' 
        : speedClasses[speed];

    // Classes de layout baseado na posição do label
    const layoutClasses = {
      top: 'flex-col-reverse',
      bottom: 'flex-col',
      left: 'flex-row-reverse',
      right: 'flex-row',
    }[labelPosition];

    // Classes de espaçamento
    const spacingClasses = {
      top: 'gap-1',
      bottom: 'gap-1',
      left: 'gap-2',
      right: 'gap-2',
    }[labelPosition];

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center',
          layoutClasses,
          spacingClasses,
          className
        )}
        role="status"
        aria-label={label}
        {...props}
      >
        <div className={cn(animationClass)}>
          {IconComponent}
        </div>
        
        {showLabel && (
          <span className={cn(
            'text-sm text-muted-foreground',
            (labelPosition === 'top' || labelPosition === 'bottom') && 'text-center',
            variant === 'glow' && 'text-primary dark:text-cyan-400'
          )}>
            {label}
          </span>
        )}
        
        {/* Screen reader only label */}
        <span className="sr-only">{label}</span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';

/**
 * SpinnerOverlay - Spinner com overlay de fundo
 */
export interface SpinnerOverlayProps extends Omit<SpinnerProps, 'showLabel'> {
  /** Se o overlay deve cobrir toda a tela */
  fullscreen?: boolean;
  /** Cor de fundo do overlay */
  overlayColor?: string;
  /** Opacidade do overlay */
  opacity?: number;
}

export const SpinnerOverlay = React.forwardRef<HTMLDivElement, SpinnerOverlayProps>(
  (
    {
      className,
      fullscreen = false,
      overlayColor = 'var(--color-black)',
      opacity = 0.5,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center',
          fullscreen 
            ? 'fixed inset-0 z-50' 
            : 'absolute inset-0 z-10',
          className
        )}
        style={{
          backgroundColor: overlayColor.replace(/[\d.]+\)$/, `${opacity})`),
        }}
      >
        <div className="bg-background rounded-lg p-4 shadow-lg">
          <Spinner {...props} showLabel />
        </div>
      </div>
    );
  }
);

SpinnerOverlay.displayName = 'SpinnerOverlay';

/**
 * DotsSpinner - Spinner com pontos animados
 */
export interface DotsSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Número de pontos */
  count?: number;
  /** Tamanho dos pontos */
  size?: 'sm' | 'md' | 'lg';
  /** Cor dos pontos */
  color?: string;
  /** Label */
  label?: string;
}

const dotSizeClasses = {
  sm: 'h-1 w-1',
  md: 'h-2 w-2',
  lg: 'h-3 w-3',
} as const;

export const DotsSpinner = React.forwardRef<HTMLDivElement, DotsSpinnerProps>(
  (
    {
      className,
      count = 3,
      size = 'md',
      color,
      label,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-1', className)}
        role="status"
        aria-label={label || 'Carregando...'}
        {...props}
      >
        {Array.from({ length: count }, (_, index) => (
          <div
            key={index}
            className={cn(
              'rounded-full bg-current',
              dotSizeClasses[size],
              'animate-bounce'
            )}
            style={{
              color: color || 'hsl(var(--muted-foreground))',
              animationDelay: `${index * 0.1}s`,
              animationDuration: '0.6s',
            }}
          />
        ))}
        {label && (
          <span className="ml-2 text-sm text-muted-foreground">
            {label}
          </span>
        )}
      </div>
    );
  }
);

DotsSpinner.displayName = 'DotsSpinner';

/**
 * PulseSpinner - Spinner com efeito de pulso
 */
export interface PulseSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Número de círculos concêntricos */
  rings?: number;
  /** Tamanho */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Cor */
  color?: string;
}

const pulseSizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-20 w-20',
} as const;

export const PulseSpinner = React.forwardRef<HTMLDivElement, PulseSpinnerProps>(
  (
    {
      className,
      rings = 3,
      size = 'md',
      color,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('relative flex items-center justify-center', className)}
        {...props}
      >
        {Array.from({ length: rings }, (_, index) => (
          <div
            key={index}
            className={cn(
              'absolute rounded-full border-2 border-current opacity-0',
              pulseSizeClasses[size]
            )}
            style={{
              color: color || 'hsl(var(--primary))',
              animation: `ping ${1.5 + index * 0.3}s cubic-bezier(0, 0, 0.2, 1) infinite`,
              animationDelay: `${index * 0.2}s`,
            }}
          />
        ))}
      </div>
    );
  }
);

PulseSpinner.displayName = 'PulseSpinner';

