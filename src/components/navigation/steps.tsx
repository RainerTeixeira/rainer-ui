/**
 * Componente Steps
 *
 * Indicador de passos/etapas de um processo.
 * Suporta navegação, status e orientações.
 *
 * @module @rainersoft/ui/components/navigation/steps
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import { Loader2 } from 'lucide-react';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';

import { cn } from '../../lib/utils';

/**
 * Status de um passo
 */
export type StepStatus = 'pending' | 'active' | 'completed' | 'error';

/**
 * Interface de um passo
 */
export interface Step {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  status?: StepStatus;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Variantes do Steps
 */
const stepsVariants = cva(
  '',
  {
    variants: {
      orientation: {
        horizontal: 'flex items-center',
        vertical: 'flex flex-col space-y-4',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      size: 'md',
    },
  }
);

/**
 * Variantes do Step individual
 */
const stepVariants = cva(
  'flex items-center',
  {
    variants: {
      orientation: {
        horizontal: 'flex-col',
        vertical: 'flex-row items-start',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      size: 'md',
    },
  }
);

/**
 * Props do Steps
 */
export interface StepsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof stepsVariants> {
  /** Etapas */
  steps: Step[];
  /** Etapa atual */
  current?: number;
  /** Callback quando muda a etapa */
  onChange?: (step: number) => void;
  /** Se permite clicar para navegar */
  clickable?: boolean;
  /** Se mostra os números */
  showNumbers?: boolean;
  /** Se mostra os ícones */
  showIcons?: boolean;
  /** Se mostra o conector entre etapas */
  showConnector?: boolean;
}

/**
 * Componente Steps
 *
 * Indicador de etapas.
 *
 * @example
 * ```tsx
 * // Horizontal
 * <Steps 
 *   steps={[
 *     { id: '1', title: 'Passo 1' },
 *     { id: '2', title: 'Passo 2' },
 *     { id: '3', title: 'Passo 3' },
 *   ]}
 *   current={1}
 * />
 *
 * // Vertical
 * <Steps 
 *   orientation="vertical"
 *   steps={steps}
 *   current={2}
 *   clickable
 *   onChange={setStep}
 * />
 * ```
 */
export const Steps = React.forwardRef<HTMLDivElement, StepsProps>(
  (
    {
      className,
      orientation = 'horizontal',
      size = 'md',
      steps,
      current = 0,
      onChange,
      clickable = false,
      showConnector = true,
      ...props
    },
    ref
  ) => {
    // Determina o status de cada passo
    const stepsWithStatus = React.useMemo(() => {
      return steps.map((step, index) => {
        let status: StepStatus = 'pending';
        
        if (index < current) {
          status = 'completed';
        } else if (index === current) {
          status = step.status || 'active';
        } else if (step.status) {
          status = step.status;
        }
        
        return { ...step, status };
      });
    }, [steps, current]);

    // Classes de tamanho
    const sizeClasses = {
      sm: {
        step: 'text-xs',
        icon: 'h-6 w-6 text-xs',
        connector: 'h-0.5',
      },
      md: {
        step: 'text-sm',
        icon: 'h-8 w-8 text-sm',
        connector: 'h-0.5',
      },
      lg: {
        step: 'text-base',
        icon: 'h-10 w-10 text-base',
        connector: 'h-1',
      },
    };

    // Renderiza passo individual
    const renderStep = (step: Step, index: number, isLast: boolean) => {
      const isActive = index === current;
      const isCompleted = step.status === 'completed';
      const isError = step.status === 'error';
      const isPending = step.status === 'pending';
      const isLoading = step.status === 'active' && step.disabled;

      // Classes do ícone
      const iconClasses = cn(
        'flex items-center justify-center rounded-full border-2 font-medium transition-all duration-[var(--motion-duration-normal)]',
        sizeClasses[size].icon,
        isCompleted && 'bg-primary border-primary text-primary-foreground',
        isError && 'bg-destructive border-destructive text-destructive-foreground',
        isActive && !isLoading && 'border-primary bg-background text-primary',
        isPending && 'border-border bg-background text-muted-foreground',
        isLoading && 'border-primary',
        clickable && !step.disabled && 'cursor-pointer hover:border-primary/80',
        step.disabled && 'opacity-50 cursor-not-allowed'
      );

      // Classes do conector
      const connectorClasses = cn(
        'bg-border transition-all duration-[var(--motion-duration-normal)]',
        sizeClasses[size].connector,
        orientation === 'horizontal' ? 'flex-1' : 'w-0.5 absolute left-4 top-8 h-full',
        isCompleted && 'bg-primary',
        isError && 'bg-destructive',
        !showConnector && 'hidden'
      );

      return (
        <div
          key={step.id}
          className={cn(
            stepVariants({ orientation, size }),
            orientation === 'horizontal' && 'flex-1',
            className
          )}
        >
          {/* Conector (antes do passo) */}
          {orientation === 'horizontal' && index > 0 && (
            <div className={connectorClasses} />
          )}

          <div
            className={cn(
              'flex items-center',
              orientation === 'vertical' && 'flex-row gap-4',
              clickable && !step.disabled && 'cursor-pointer',
              step.disabled && 'cursor-not-allowed'
            )}
            onClick={() => {
              if (clickable && !step.disabled) {
                onChange?.(index);
                step.onClick?.();
              }
            }}
          >
            {/* Ícone */}
            <div className={cn('relative', orientation === 'vertical' && 'flex-shrink-0')}>
              <div className={iconClasses}>
                {isCompleted && <Check className="h-4 w-4" />}
                {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                {!isCompleted && !isLoading && (step.icon || index + 1)}
              </div>
            </div>

            {/* Conteúdo */}
            <div
              className={cn(
                'flex flex-col',
                orientation === 'horizontal' && 'items-center text-center',
                orientation === 'vertical' && 'items-start',
                sizeClasses[size].step
              )}
            >
              <div
                className={cn(
                  'font-medium',
                  isActive && !isLoading && 'text-primary',
                  isCompleted && 'text-foreground',
                  isError && 'text-destructive',
                  isPending && 'text-muted-foreground'
                )}
              >
                {step.title}
              </div>
              {step.description && (
                <div
                  className={cn(
                    'mt-1',
                    isActive && !isLoading && 'text-primary',
                    isCompleted && 'text-muted-foreground',
                    isError && 'text-destructive',
                    isPending && 'text-muted-foreground'
                  )}
                >
                  {step.description}
                </div>
              )}
            </div>
          </div>

          {/* Conector (depois do passo - apenas vertical) */}
          {orientation === 'vertical' && !isLast && (
            <div className={connectorClasses} />
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(stepsVariants({ orientation, size }), className)}
        {...props}
      >
        {stepsWithStatus.map((step, index) =>
          renderStep(step, index, index === steps.length - 1)
        )}
      </div>
    );
  }
);

Steps.displayName = 'Steps';

/**
 * StepItem - Item individual do Steps
 */
export interface StepItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Número do passo */
  number: number;
  /** Título */
  title: string;
  /** Descrição */
  description?: string;
  /** Status */
  status?: StepStatus;
  /** Se está ativo */
  active?: boolean;
  /** Ícone customizado */
  icon?: React.ReactNode;
}

export const StepItem = React.forwardRef<HTMLDivElement, StepItemProps>(
  (
    {
      className,
      number,
      title,
      description,
      status = 'pending',
      active = false,
      icon,
      ...props
    },
    ref
  ) => {
    const isCompleted = status === 'completed';
    const isError = status === 'error';
    const isLoading = status === 'active';

    const iconClasses = cn(
      'flex items-center justify-center rounded-full border-2 font-medium transition-all duration-[var(--motion-duration-normal)] h-8 w-8 text-sm',
      isCompleted && 'bg-primary border-primary text-primary-foreground',
      isError && 'bg-destructive border-destructive text-destructive-foreground',
      active && !isLoading && 'border-primary bg-background text-primary',
      status === 'pending' && 'border-border bg-background text-muted-foreground'
    );

    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-3', className)}
        {...props}
      >
        <div className={iconClasses}>
          {isCompleted && <Check className="h-4 w-4" />}
          {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          {!isCompleted && !isLoading && (icon || number)}
        </div>
        <div>
          <div
            className={cn(
              'text-sm font-medium',
              active && !isLoading && 'text-primary',
              isCompleted && 'text-foreground',
              isError && 'text-destructive',
              status === 'pending' && 'text-muted-foreground'
            )}
          >
            {title}
          </div>
          {description && (
            <div className="mt-1 text-xs text-muted-foreground">
              {description}
            </div>
          )}
        </div>
      </div>
    );
  }
);

StepItem.displayName = 'StepItem';

