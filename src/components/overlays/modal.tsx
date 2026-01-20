/**
 * Componente Modal
 *
 * Janela modal sobreposta com backdrop.
 * Suporta diferentes tamanhos, animações e customizações.
 *
 * @module @rainersoft/ui/components/overlays/modal
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { Button } from '../ui/button';
import { cn } from '../../lib/tokens';

/**
 * Variantes do Modal
 */
const modalVariants = cva(
  'relative bg-background text-foreground shadow-lg rounded-lg',
  {
    variants: {
      size: {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl',
        full: 'max-w-full mx-4',
        screen: 'w-screen h-screen max-w-none rounded-none',
      },
      variant: {
        default: 'border border-border',
        glass: 'glass border-border',
        neon: 'neon-border dark:shadow-glow-cyan',
        minimal: 'border-0 shadow-none',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

/**
 * Props do Modal
 */
export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  /** Se está aberto */
  open: boolean;
  /** Callback quando muda o estado */
  onOpenChange: (open: boolean) => void;
  /** Título do modal */
  title?: string;
  /** Descrição do modal */
  description?: string;
  /** Se pode ser fechado */
  closable?: boolean;
  /** Se fecha ao clicar no backdrop */
  closeOnBackdrop?: boolean;
  /** Se fecha ao pressionar ESC */
  closeOnEscape?: boolean;
  /** Se mostra o backdrop */
  showBackdrop?: boolean;
  /** Se previne scroll do body */
  preventBodyScroll?: boolean;
  /** Se está carregando */
  loading?: boolean;
}

/**
 * Componente Modal
 *
 * Janela modal sobreposta.
 *
 * @example
 * ```tsx
 * // Básico
 * <Modal open={isOpen} onOpenChange={setIsOpen}>
 *   <div>Conteúdo do modal</div>
 * </Modal>
 *
 * // Com título e descrição
 * <Modal 
 *   open={isOpen} 
 *   onOpenChange={setIsOpen}
 *   title="Confirmar ação"
 *   description="Tem certeza que deseja continuar?
 * >
 *   <div>Conteúdo</div>
 * </Modal>
 *
 * // Grande e glass effect
 * <Modal 
 *   open={isOpen} 
 *   onOpenChange={setIsOpen}
 *   size="2xl"
 *   variant="glass"
 * >
 *   <div>Conteúdo grande</div>
 * </Modal>
 * ```
 */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      open,
      onOpenChange,
      title,
      description,
      closable = true,
      closeOnBackdrop = true,
      closeOnEscape = true,
      showBackdrop = true,
      preventBodyScroll = true,
      loading = false,
      children,
      ...props
    },
    ref
  ) => {
    const modalRef = React.useRef<HTMLDivElement>(null);

    const setModalRef = React.useCallback((node: HTMLDivElement | null) => {
      modalRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    }, [ref]);

    // Previnir scroll do body
    React.useEffect(() => {
      if (open && preventBodyScroll) {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = '';
        };
      }
    }, [open, preventBodyScroll]);

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

    // Foco no modal quando abre
    React.useEffect(() => {
      if (open && modalRef.current) {
        modalRef.current.focus();
      }
    }, [open]);

    // Fecha ao clicar no backdrop
    const handleBackdropClick = React.useCallback((event: React.MouseEvent) => {
      if (event.target === event.currentTarget && closeOnBackdrop) {
        onOpenChange(false);
      }
    }, [closeOnBackdrop, onOpenChange]);

    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        {showBackdrop && (
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleBackdropClick}
          />
        )}

        {/* Modal */}
        <div
          ref={setModalRef}
          className={cn(
            modalVariants({ size, variant }),
            'relative z-10 max-h-[90vh] overflow-hidden',
            'animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]',
            loading && 'opacity-70',
            className
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          aria-describedby={description ? 'modal-description' : undefined}
          tabIndex={-1}
          {...props}
        >
          {/* Header */}
          {(title || closable) && (
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                {title && (
                  <h2 id="modal-title" className="text-lg font-semibold">
                    {title}
                  </h2>
                )}
                {description && (
                  <p id="modal-description" className="text-sm text-muted-foreground mt-1">
                    {description}
                  </p>
                )}
              </div>
              {closable && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onOpenChange(false)}
                  className="h-8 w-8 p-0"
                  aria-label="Fechar modal"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="max-h-[calc(90vh-8rem)] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';

/**
 * ModalHeader - Cabeçalho do modal
 */
export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Título */
  title?: string;
  /** Descrição */
  description?: string;
}

export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  (
    {
      className,
      title,
      description,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-between p-6 border-b border-border', className)}
        {...props}
      >
        <div>
          {title && (
            <h2 className="text-lg font-semibold">{title}</h2>
          )}
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        {children}
      </div>
    );
  }
);

ModalHeader.displayName = 'ModalHeader';

/**
 * ModalContent - Conteúdo do modal
 */
export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('p-6', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ModalContent.displayName = 'ModalContent';

/**
 * ModalFooter - Rodapé do modal
 */
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-end gap-3 p-6 border-t border-border',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ModalFooter.displayName = 'ModalFooter';

/**
 * ModalTrigger - Botão que abre o modal
 */
export interface ModalTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Callback para abrir o modal */
  onOpen?: () => void;
}

export const ModalTrigger = React.forwardRef<HTMLButtonElement, ModalTriggerProps>(
  (
    {
      className,
      children,
      onOpen,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      onOpen?.();
    }, [onClick, onOpen]);

    return (
      <Button
        ref={ref}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

ModalTrigger.displayName = 'ModalTrigger';

