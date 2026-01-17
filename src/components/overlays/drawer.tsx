/**
 * Componente Drawer
 *
 * Gaveta deslizante lateral ou inferior.
 * Ideal para menus, filtros e formulários.
 *
 * @module @rainersoft/ui/components/overlays/drawer
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

/**
 * Variantes do Drawer
 */
const drawerVariants = cva(
  'fixed z-50 bg-background border border-border shadow-lg',
  {
    variants: {
      position: {
        left: 'left-0 top-0 h-full w-80',
        right: 'right-0 top-0 h-full w-80',
        top: 'top-0 left-0 right-0 h-auto max-h-[80vh]',
        bottom: 'bottom-0 left-0 right-0 h-auto max-h-[80vh]',
      },
      size: {
        sm: 'w-64',
        md: 'w-80',
        lg: 'w-96',
        xl: 'w-[480px]',
        full: 'w-full',
      },
      variant: {
        default: 'bg-background',
        glass: 'glass',
        neon: 'neon-border dark:shadow-glow-cyan',
      },
    },
    defaultVariants: {
      position: 'right',
      size: 'md',
      variant: 'default',
    },
  }
);

/**
 * Props do Drawer
 */
export interface DrawerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof drawerVariants> {
  /** Se está aberto */
  open: boolean;
  /** Callback quando muda o estado */
  onOpenChange: (open: boolean) => void;
  /** Título do drawer */
  title?: string;
  /** Descrição do drawer */
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
 * Componente Drawer
 *
 * Gaveta deslizante.
 *
 * @example
 * ```tsx
 * // Lateral direito
 * <Drawer 
 *   open={isOpen} 
 *   onOpenChange={setIsOpen}
 *   position="right"
 *   title="Menu"
 * >
 *   <div>Conteúdo do drawer</div>
 * </Drawer>
 *
 * // Inferior
 * <Drawer 
 *   open={isOpen} 
 *   onOpenChange={setIsOpen}
 *   position="bottom"
 *   size="lg"
 * >
 *   <div>Conteúdo do drawer</div>
 * </Drawer>
 *
 * // Com glass effect
 * <Drawer 
 *   open={isOpen} 
 *   onOpenChange={setIsOpen}
 *   variant="glass"
 * >
 *   <div>Conteúdo do drawer</div>
 * </Drawer>
 * ```
 */
export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      className,
      position = 'right',
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
    const drawerRef = React.useRef<HTMLDivElement>(null);

    const setDrawerRef = React.useCallback((node: HTMLDivElement | null) => {
      drawerRef.current = node;
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

    // Foco no drawer quando abre
    React.useEffect(() => {
      if (open && drawerRef.current) {
        drawerRef.current.focus();
      }
    }, [open]);

    // Fecha ao clicar no backdrop
    const handleBackdropClick = React.useCallback((event: React.MouseEvent) => {
      if (event.target === event.currentTarget && closeOnBackdrop) {
        onOpenChange(false);
      }
    }, [closeOnBackdrop, onOpenChange]);

    // Classes de animação baseadas na posição
    const animationClasses = {
      left: open 
        ? 'animate-in slide-in-from-left duration-[var(--motion-duration-normal)]'
        : 'animate-out slide-out-to-left duration-[var(--motion-duration-normal)]',
      right: open 
        ? 'animate-in slide-in-from-right duration-[var(--motion-duration-normal)]'
        : 'animate-out slide-out-to-right duration-[var(--motion-duration-normal)]',
      top: open 
        ? 'animate-in slide-in-from-top duration-[var(--motion-duration-normal)]'
        : 'animate-out slide-out-to-top duration-[var(--motion-duration-normal)]',
      bottom: open 
        ? 'animate-in slide-in-from-bottom duration-[var(--motion-duration-normal)]'
        : 'animate-out slide-out-to-bottom duration-[var(--motion-duration-normal)]',
    };

    // Classes de tamanho para posição top/bottom
    const sizeClasses = {
      top: open ? 'max-h-[80vh]' : 'max-h-0',
      bottom: open ? 'max-h-[80vh]' : 'max-h-0',
    };

    if (!open && !showBackdrop) return null;

    return (
      <div className="fixed inset-0 z-50">
        {/* Backdrop */}
        {showBackdrop && open && (
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleBackdropClick}
          />
        )}

        {/* Drawer */}
        <div
          ref={setDrawerRef}
          className={cn(
            drawerVariants({ position, size, variant, className }),
            position === 'left' && size && sizeClasses[size],
            position === 'right' && size && sizeClasses[size],
            animationClasses[position],
            loading && 'opacity-70',
            !open && 'pointer-events-none',
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'drawer-title' : undefined}
          aria-describedby={description ? 'drawer-description' : undefined}
          tabIndex={-1}
          {...props}
        >
          {/* Header */}
          {(title || closable) && (
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                {title && (
                  <h2 id="drawer-title" className="text-lg font-semibold">
                    {title}
                  </h2>
                )}
                {description && (
                  <p id="drawer-description" className="text-sm text-muted-foreground mt-1">
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
                  aria-label="Fechar drawer"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}

          {/* Content */}
          <div className={cn(
            'overflow-y-auto',
            (position === 'top' || position === 'bottom') ? 'max-h-[60vh]' : 'h-full'
          )}>
            {children}
          </div>
        </div>
      </div>
    );
  }
);

Drawer.displayName = 'Drawer';

/**
 * DrawerHeader - Cabeçalho do drawer
 */
export interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Título */
  title?: string;
  /** Descrição */
  description?: string;
}

export const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(
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
        className={cn('flex items-center justify-between p-4 border-b border-border', className)}
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

DrawerHeader.displayName = 'DrawerHeader';

/**
 * DrawerContent - Conteúdo do drawer
 */
export interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
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
        className={cn('p-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

DrawerContent.displayName = 'DrawerContent';

/**
 * DrawerFooter - Rodapé do drawer
 */
export interface DrawerFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DrawerFooter = React.forwardRef<HTMLDivElement, DrawerFooterProps>(
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
          'flex items-center justify-end gap-3 p-4 border-t border-border',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

DrawerFooter.displayName = 'DrawerFooter';

/**
 * DrawerTrigger - Botão que abre o drawer
 */
export interface DrawerTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Callback para abrir o drawer */
  onOpen?: () => void;
}

export const DrawerTrigger = React.forwardRef<HTMLButtonElement, DrawerTriggerProps>(
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

DrawerTrigger.displayName = 'DrawerTrigger';

