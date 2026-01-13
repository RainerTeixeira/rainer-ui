/**
 * Componente ConfirmDialog
 *
 * Diálogo de confirmação simplificado.
 * Ideal para ações destrutivas e confirmações.
 *
 * @module @rainersoft/ui/components/overlays/confirm-dialog
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertTriangle } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Info } from 'lucide-react';
import { X } from 'lucide-react';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

/**
 * Variantes do ConfirmDialog
 */
const confirmDialogVariants = cva(
  'relative bg-background text-foreground shadow-lg rounded-lg border',
  {
    variants: {
      variant: {
        default: 'border-border',
        destructive: 'border-destructive',
        warning: 'border-amber-500',
        info: 'border-blue-500',
        success: 'border-emerald-500',
      },
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

/**
 * Props do ConfirmDialog
 */
export interface ConfirmDialogProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof confirmDialogVariants> {
  /** Se está aberto */
  open: boolean;
  /** Callback quando muda o estado */
  onOpenChange: (open: boolean) => void;
  /** Título do diálogo */
  title: string;
  /** Descrição do diálogo */
  description?: string;
  /** Texto do botão de confirmação */
  confirmText?: string;
  /** Texto do botão de cancelamento */
  cancelText?: string;
  /** Callback ao confirmar */
  onConfirm?: () => void | Promise<void>;
  /** Callback ao cancelar */
  onCancel?: () => void;
  /** Se está carregando */
  loading?: boolean;
  /** Se fecha ao confirmar */
  closeOnConfirm?: boolean;
  /** Se fecha ao cancelar */
  closeOnCancel?: boolean;
  /** Se fecha ao clicar no backdrop */
  closeOnBackdrop?: boolean;
  /** Se fecha ao pressionar ESC */
  closeOnEscape?: boolean;
  /** Variante do botão de confirmação */
  confirmVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

/**
 * Componente ConfirmDialog
 *
 * Diálogo de confirmação.
 *
 * @example
 * ```tsx
 * // Básico
 * <ConfirmDialog 
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="Tem certeza?"
 *   description="Esta ação não pode ser desfeita."
 *   onConfirm={handleConfirm}
 * />
 *
 * // Destrutivo
 * <ConfirmDialog 
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   variant="destructive"
 *   title="Excluir item?"
 *   description="Isso removerá permanentemente o item."
 *   confirmText="Excluir"
 *   onConfirm={handleDelete}
 * />
 *
 * // Customizado
 * <ConfirmDialog 
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   variant="warning"
 *   title="Salvar alterações?"
 *   description="Você tem alterações não salvas."
 *   confirmText="Salvar"
 *   cancelText="Descartar"
 *   onConfirm={handleSave}
 *   onCancel={handleDiscard}
 * />
 * ```
 */
export const ConfirmDialog = React.forwardRef<HTMLDivElement, ConfirmDialogProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      open,
      onOpenChange,
      title,
      description,
      confirmText = 'Confirmar',
      cancelText = 'Cancelar',
      onConfirm,
      onCancel,
      loading = false,
      closeOnConfirm = true,
      closeOnCancel = true,
      closeOnBackdrop = true,
      closeOnEscape = true,
      confirmVariant = 'default',
      ...props
    },
    ref
  ) => {
    const [internalLoading, setInternalLoading] = React.useState(false);
    const isLoading = loading || internalLoading;

    // Fecha ao pressionar ESC
    React.useEffect(() => {
      if (!open || !closeOnEscape) return;

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onOpenChange(false);
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [open, closeOnEscape, onOpenChange]);

    // Manipulador de confirmação
    const handleConfirm = React.useCallback(async () => {
      if (isLoading) return;

      try {
        if (onConfirm) {
          setInternalLoading(true);
          await onConfirm();
        }
        if (closeOnConfirm) {
          onOpenChange(false);
        }
      } finally {
        setInternalLoading(false);
      }
    }, [isLoading, onConfirm, closeOnConfirm, onOpenChange]);

    // Manipulador de cancelamento
    const handleCancel = React.useCallback(() => {
      if (isLoading) return;
      
      onCancel?.();
      if (closeOnCancel) {
        onOpenChange(false);
      }
    }, [isLoading, onCancel, closeOnCancel, onOpenChange]);

    // Fecha ao clicar no backdrop
    const handleBackdropClick = React.useCallback((event: React.MouseEvent) => {
      if (event.target === event.currentTarget && closeOnBackdrop && !isLoading) {
        onOpenChange(false);
      }
    }, [closeOnBackdrop, isLoading, onOpenChange]);

    // Ícone baseado na variante
    const getIcon = () => {
      switch (variant) {
        case 'destructive':
          return <AlertTriangle className="h-6 w-6 text-destructive" />;
        case 'warning':
          return <AlertTriangle className="h-6 w-6 text-amber-500" />;
        case 'info':
          return <Info className="h-6 w-6 text-blue-500" />;
        case 'success':
          return <CheckCircle className="h-6 w-6 text-emerald-500" />;
        default:
          return null;
      }
    };

    // Cor do botão de confirmação
    const getConfirmVariant = () => {
      if (confirmVariant !== 'default') return confirmVariant;
      
      switch (variant) {
        case 'destructive':
          return 'destructive';
        case 'warning':
          return 'default';
        case 'info':
          return 'default';
        case 'success':
          return 'default';
        default:
          return 'default';
      }
    };

    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        />

        {/* Dialog */}
        <div
          ref={ref}
          className={cn(
            confirmDialogVariants({ variant, size }),
            'relative z-10 p-6 animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]',
            className
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-title"
          aria-describedby="confirm-description"
        >
          {/* Botão fechar */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCancel}
            className="absolute right-4 top-4 h-8 w-8 p-0"
            disabled={isLoading}
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Conteúdo */}
          <div className="flex flex-col items-center text-center max-w-sm mx-auto">
            {/* Ícone */}
            {getIcon()}

            {/* Título */}
            <h3 id="confirm-title" className="text-lg font-semibold mt-4 mb-2">
              {title}
            </h3>

            {/* Descrição */}
            {description && (
              <p id="confirm-description" className="text-sm text-muted-foreground mb-6">
                {description}
              </p>
            )}

            {/* Botões */}
            <div className="flex gap-3 w-full">
              <Button
                variant="outline"
                onClick={handleCancel}
                disabled={isLoading}
                className="flex-1"
              >
                {cancelText}
              </Button>
              <Button
                variant={getConfirmVariant()}
                onClick={handleConfirm}
                disabled={isLoading}
                className="flex-1"
              >
                {confirmText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ConfirmDialog.displayName = 'ConfirmDialog';

/**
 * useConfirm - Hook para facilitar o uso do ConfirmDialog
 */
export interface UseConfirmOptions {
  /** Título */
  title: string;
  /** Descrição */
  description?: string;
  /** Texto do botão de confirmação */
  confirmText?: string;
  /** Texto do botão de cancelamento */
  cancelText?: string;
  /** Variante */
  variant?: VariantProps<typeof confirmDialogVariants>['variant'];
  /** Variante do botão */
  confirmVariant?: ConfirmDialogProps['confirmVariant'];
}

export function useConfirm() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [options, setOptions] = React.useState<UseConfirmOptions & { onConfirm?: () => void | Promise<void> } | null>(null);

  const confirm = React.useCallback((options: UseConfirmOptions & { onConfirm?: () => void | Promise<void> }) => {
    setOptions(options);
    setIsOpen(true);
  }, []);

  const handleConfirm = React.useCallback(async () => {
    if (options.onConfirm) {
      await options.onConfirm();
    }
    setIsOpen(false);
  }, [options]);

  const handleCancel = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const ConfirmDialogComponent = React.useCallback(() => (
    <ConfirmDialog
      open={isOpen}
      onOpenChange={setIsOpen}
      title={options.title}
      description={options.description}
      confirmText={options.confirmText}
      cancelText={options.cancelText}
      variant={options.variant}
      confirmVariant={options.confirmVariant}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  ), [isOpen, options, handleConfirm, handleCancel]);

  return {
    confirm,
    ConfirmDialog: ConfirmDialogComponent,
  };
}

