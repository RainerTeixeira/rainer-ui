/**
 * Componente FAB (Floating Action Button)
 *
 * Botão de ação flutuante circular.
 * Ideal para ações principais e rápidas.
 *
 * @module @rainersoft/ui/components/ui/fab
 * @author Rainer Teixeira
 * @version 1.0.0
 */

'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Plus from 'lucide-react/dist/esm/icons/plus';
import X from 'lucide-react/dist/esm/icons/x';


import { Button } from './button';
import { cn } from '../../lib/tokens';

/**
 * Variantes do FAB
 */
const fabVariants = cva(
  'fixed z-40 rounded-full shadow-lg transition-all duration-[var(--motion-duration-normal)]',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'bg-background border border-border hover:bg-accent hover:text-accent-foreground',
        neon: 'bg-primary border-2 border-primary text-primary-foreground hover:bg-primary/90 dark:neon-box',
        glass: 'glass border border-border hover:glass-hover',
      },
      size: {
        sm: 'h-12 w-12',
        md: 'h-14 w-14',
        lg: 'h-16 w-16',
        xl: 'h-20 w-20',
      },
      position: {
        'bottom-right': 'bottom-6 right-6',
        'bottom-left': 'bottom-6 left-6',
        'top-right': 'top-6 right-6',
        'top-left': 'top-6 left-6',
        'bottom-center': 'bottom-6 left-1/2 -translate-x-1/2',
        'top-center': 'top-6 left-1/2 -translate-x-1/2',
      },
      extended: {
        true: 'rounded-full px-6 w-auto',
        false: 'w-14 h-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      position: 'bottom-right',
      extended: false,
    },
  }
);

/**
 * Props do FAB
 */
export interface FABProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'variant'>,
    VariantProps<typeof fabVariants> {
  /** Ícone do botão */
  icon?: React.ReactNode;
  /** Texto quando estendido */
  text?: string;
  /** Se está ativo/expandido */
  active?: boolean;
  /** Callback ao clicar */
  onClick?: () => void;
  /** Se tem animação de entrada */
  animate?: boolean;
  /** Ações rápidas */
  actions?: Array<{
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
  }>;
}

/**
 * Componente FAB
 *
 * Botão de ação flutuante.
 *
 * @example
 * ```tsx
 * // Básico
 * <FAB 
 *   icon={<Plus />}
 *   onClick={handleClick}
 * />
 *
 * // Estendido
 * <FAB 
 *   icon={<Edit />}
 *   text="Nova nota"
 *   extended
 *   onClick={handleClick}
 * />
 *
 * // Com ações
 * <FAB 
 *   icon={<Share />}
 *   active={showActions}
 *   actions={[
 *     { icon: <Download />, label: 'Download', onClick: handleDownload },
 *     { icon: <Upload />, label: 'Upload', onClick: handleUpload },
 *   ]}
 *   onClick={toggleActions}
 * />
 *
 * // Customizado
 * <FAB 
 *   icon={<Heart />}
 *   variant="secondary"
 *   size="lg"
 *   position="bottom-left"
 *   onClick={handleLike}
 * />
 * ```
 */
export const FAB = React.forwardRef<HTMLButtonElement, FABProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      position = 'bottom-right',
      extended = false,
      icon,
      text,
      active = false,
      onClick,
      animate = true,
      actions = [],
      ...props
    },
    ref
  ) => {
    const [showActions, setShowActions] = React.useState(active);
    const isExtended = extended && text;

    // Sincroniza com prop active
    React.useEffect(() => {
      setShowActions(active);
    }, [active]);

    // Toggle ações
    const handleClick = React.useCallback(() => {
      if (actions.length > 0) {
        setShowActions(!showActions);
      }
      onClick?.();
    }, [actions.length, showActions, onClick]);

    // Ícone padrão baseado no estado
    const defaultIcon = actions.length > 0 
      ? showActions ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />
      : <Plus className="h-5 w-5" />;

    return (
      <div className="relative">
        {/* Ações rápidas */}
        {showActions && actions.length > 0 && (
          <div className="absolute bottom-0 flex flex-col-reverse gap-3 mb-4">
            {actions.map((action, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-center gap-3 animate-in slide-in-from-bottom-2 fade-in-0',
                  'duration-[var(--motion-duration-normal)]',
                  position.includes('left') && 'flex-row-reverse',
                  position.includes('center') && 'flex-row-reverse'
                )}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="text-sm font-medium whitespace-nowrap bg-background px-2 py-1 rounded-md shadow-md">
                  {action.label}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-10 w-10 rounded-full"
                  onClick={action.onClick}
                >
                  {action.icon}
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* FAB Principal */}
        <Button
          ref={ref}
          variant={variant as 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'neon' | 'glass'}
          className={cn(
            fabVariants({ variant, size, position, extended: isExtended ? true : false }),
            animate && 'animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]',
            className
          )}
          onClick={handleClick}
          {...props}
        >
          <span className="flex items-center gap-2">
            {icon || defaultIcon}
            {isExtended && text && (
              <span className="font-medium">{text}</span>
            )}
          </span>
        </Button>
      </div>
    );
  }
);

FAB.displayName = 'FAB';

/**
 * FABGroup - Grupo de FABs
 */
export interface FABGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** FAB principal */
  main: React.ReactElement;
  /** FABs secundários */
  secondary?: React.ReactElement[];
  /** Posição do grupo */
  position?: VariantProps<typeof fabVariants>['position'];
}

export const FABGroup = React.forwardRef<HTMLDivElement, FABGroupProps>(
  (
    {
      className,
      main,
      secondary = [],
      position = 'bottom-right',
      ...props
    },
    ref
  ) => {
    const positionClasses = {
      'bottom-right': 'bottom-6 right-6 flex-col-reverse',
      'bottom-left': 'bottom-6 left-6 flex-col-reverse',
      'top-right': 'top-6 right-6 flex-col',
      'top-left': 'top-6 left-6 flex-col',
      'bottom-center': 'bottom-6 left-1/2 -translate-x-1/2 flex-col-reverse',
      'top-center': 'top-6 left-1/2 -translate-x-1/2 flex-col',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'fixed z-40 flex gap-3',
          positionClasses[position],
          className
        )}
        {...props}
      >
        {secondary.map((fab, index) => (
          <div
            key={index}
            className="animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            {fab}
          </div>
        ))}
        {main}
      </div>
    );
  }
);

FABGroup.displayName = 'FABGroup';

