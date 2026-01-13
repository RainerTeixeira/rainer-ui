/**
 * Componente Notification
 *
 * Notificações toast persistentes com ações.
 * Suporta múltiplas variantes, auto-dismiss e ações customizadas.
 *
 * @module @rainersoft/ui/components/feedback/notification
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Check } from 'lucide-react';
import { Info } from 'lucide-react';
import { X } from 'lucide-react';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

/**
 * Ícones por variante
 */
const variantIcons = {
  success: Check,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  default: Bell,
} as const;

/**
 * Variantes da Notification
 */
const notificationVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all duration-[var(--motion-duration-normal)]',
  {
    variants: {
      variant: {
        default: 'border-border bg-background text-foreground',
        success: 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200',
        error: 'border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200',
        warning: 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200',
        info: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

/**
 * Props da Notification
 */
export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {
  /** Título da notificação */
  title?: string;
  /** Descrição da notificação */
  description?: string;
  /** Se pode ser fechada */
  dismissible?: boolean;
  /** Callback ao fechar */
  onDismiss?: () => void;
  /** Ações da notificação */
  actions?: React.ReactNode;
  /** Ícone customizado */
  icon?: React.ReactNode;
  /** Data/hora da notificação */
  timestamp?: string;
  /** Se tem auto-dismiss */
  autoClose?: boolean;
  /** Tempo para auto-dismiss (ms) */
  autoCloseDelay?: number;
  /** Se está em modo toast */
  toast?: boolean;
}

/**
 * Componente Notification
 *
 * Notificação com ações e dismiss opcional.
 *
 * @example
 * ```tsx
 * // Básica
 * <Notification 
 *   title="Sucesso!" 
 *   description="Arquivo salvo com sucesso."
 *   variant="success"
 * />
 *
 * // Com ações
 * <Notification 
 *   title="Atualização disponível"
 *   description="Uma nova versão está disponível."
 *   actions={
 *     <Button size="sm">Atualizar</Button>
 *   }
 * />
 *
 * // Com auto-dismiss
 * <Notification 
 *   title="Notificação"
 *   description="Esta mensagem desaparecerá em 5 segundos."
 *   autoClose
 *   autoCloseDelay={5000}
 * />
 * ```
 */
export const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      className,
      variant = 'default',
      title,
      description,
      dismissible = true,
      onDismiss,
      actions,
      icon,
      timestamp,
      autoClose = false,
      autoCloseDelay = 5000,
      toast = false,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(true);

    // Auto-dismiss
    React.useEffect(() => {
      if (autoClose && onDismiss) {
        const timer = setTimeout(() => {
          handleClose();
        }, autoCloseDelay);

        return () => clearTimeout(timer);
      }
    }, [autoClose, autoCloseDelay, onDismiss]);

    const handleClose = () => {
      setVisible(false);
      onDismiss?.();
    };

    // Resolve o ícone
    let IconComponent = icon;
    if (!IconComponent) {
      const VariantIcon = variantIcons[variant];
      IconComponent = <VariantIcon className="h-5 w-5" />;
    }

    if (!visible) return null;

    return (
      <div
        ref={ref}
        className={cn(
          notificationVariants({ variant }),
          toast && 'animate-in slide-in-from-bottom-full',
          className
        )}
        {...props}
      >
        {/* Ícone */}
        <div className={cn(
          'flex-shrink-0',
          variant === 'success' && 'text-emerald-600 dark:text-emerald-400',
          variant === 'error' && 'text-red-600 dark:text-red-400',
          variant === 'warning' && 'text-amber-600 dark:text-amber-400',
          variant === 'info' && 'text-blue-600 dark:text-blue-400',
          variant === 'default' && 'text-muted-foreground'
        )}>
          {IconComponent}
        </div>

        {/* Conteúdo */}
        <div className="flex-1 space-y-1">
          {title && (
            <p className="text-sm font-medium">{title}</p>
          )}
          {description && (
            <p className="text-sm opacity-90">{description}</p>
          )}
          {timestamp && (
            <p className="text-xs opacity-70">{timestamp}</p>
          )}
        </div>

        {/* Ações */}
        {actions && (
          <div className="flex flex-shrink-0 gap-2">
            {actions}
          </div>
        )}

        {/* Botão de fechar */}
        {dismissible && (
          <button
            onClick={handleClose}
            className={cn(
              'absolute right-2 top-2 rounded-md p-1',
              'transition-colors duration-[var(--motion-duration-fast)]',
              'hover:bg-black/10 dark:hover:bg-white/10',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            )}
          >
            <X className="h-4 w-4 opacity-60 hover:opacity-100" />
          </button>
        )}
      </div>
    );
  }
);

Notification.displayName = 'Notification';

/**
 * NotificationGroup - Container para múltiplas notificações
 */
export interface NotificationGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Notificações filhas */
  children: React.ReactNode;
  /** Posição do grupo */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  /** Espaçamento entre notificações */
  spacing?: 'sm' | 'md' | 'lg';
}

const positionClasses = {
  'top-right': 'top-0 right-0',
  'top-left': 'top-0 left-0',
  'bottom-right': 'bottom-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'top-center': 'top-0 left-1/2 -translate-x-1/2',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
} as const;

const spacingClasses = {
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
} as const;

export const NotificationGroup = React.forwardRef<HTMLDivElement, NotificationGroupProps>(
  (
    {
      className,
      children,
      position = 'top-right',
      spacing = 'md',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'fixed z-50 flex max-h-screen w-full flex-col-reverse p-4',
          'md:max-w-[420px]',
          positionClasses[position],
          spacingClasses[spacing],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NotificationGroup.displayName = 'NotificationGroup';

/**
 * NotificationToast - Notificação estilo toast
 */
export interface NotificationToastProps extends Omit<NotificationProps, 'toast'> {
  /** ID única para o toast */
  id?: string;
}

export const NotificationToast = React.forwardRef<HTMLDivElement, NotificationToastProps>(
  (props, ref) => {
    return (
      <Notification
        ref={ref}
        toast
        {...props}
      />
    );
  }
);

NotificationToast.displayName = 'NotificationToast';

/**
 * useNotification - Hook para gerenciar notificações
 */
export interface UseNotificationOptions {
  /** ID única */
  id?: string;
  /** Título */
  title?: string;
  /** Descrição */
  description?: string;
  /** Variante */
  variant?: VariantProps<typeof notificationVariants>['variant'];
  /** Auto dismiss */
  autoClose?: boolean;
  /** Tempo de auto dismiss */
  autoCloseDelay?: number;
  /** Ações */
  actions?: React.ReactNode;
}

export function useNotification() {
  const [notifications, setNotifications] = React.useState<Map<string, UseNotificationOptions>>(new Map());

  const notify = React.useCallback((options: UseNotificationOptions) => {
    const id = options.id || Math.random().toString(36).substr(2, 9);
    
    setNotifications(prev => new Map(prev).set(id, options));

    if (options.autoClose !== false) {
      const delay = options.autoCloseDelay || 5000;
      setTimeout(() => {
        dismiss(id);
      }, delay);
    }

    return id;
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setNotifications(prev => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const clear = React.useCallback(() => {
    setNotifications(new Map());
  }, []);

  return {
    notifications: Array.from(notifications.entries()),
    notify,
    dismiss,
    clear,
  };
}

/**
 * NotificationProvider - Provider para notificações globais
 */
export interface NotificationProviderProps {
  children: React.ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const { notifications, dismiss } = useNotification();

  return (
    <>
      {children}
      <NotificationGroup>
        {notifications.map(([id, options]) => (
          <NotificationToast
            key={id}
            id={id}
            onDismiss={() => dismiss(id)}
            {...options}
          />
        ))}
      </NotificationGroup>
    </>
  );
};

