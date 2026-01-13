/**
 * Componente Sidebar
 *
 * Barra lateral navegável com colapso.
 * Suporta menus, perfil e ações customizadas.
 *
 * @module @rainersoft/ui/components/navigation/sidebar
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import LogOut from 'lucide-react/dist/esm/icons/log-out';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import Menu from 'lucide-react/dist/esm/icons/menu';
import Settings from 'lucide-react/dist/esm/icons/settings';
import User from 'lucide-react/dist/esm/icons/user';
import X from 'lucide-react/dist/esm/icons/x';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { MenuItem } from './menu';

/**
 * Variantes do Sidebar
 */
const sidebarVariants = cva(
  'flex flex-col bg-card border-r border-border transition-all duration-[var(--motion-duration-normal)]',
  {
    variants: {
      variant: {
        default: 'bg-card',
        dark: 'bg-background',
        glass: 'glass',
        neon: 'bg-background neon-border',
      },
      size: {
        sm: 'w-48',
        md: 'w-64',
        lg: 'w-80',
        xl: 'w-96',
      },
      position: {
        left: 'left-0 top-0 h-full',
        right: 'right-0 top-0 h-full',
        top: 'top-0 left-0 right-0',
        bottom: 'bottom-0 left-0 right-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      position: 'left',
    },
  }
);

/**
 * Props do Sidebar
 */
export interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  /** Se está colapsado */
  collapsed?: boolean;
  /** Callback quando colapsa/expande */
  onCollapse?: (collapsed: boolean) => void;
  /** Itens do menu */
  items?: MenuItem[];
  /** Se mostra o toggle de colapso */
  showToggle?: boolean;
  /** Se é fixo ou overlay */
  overlay?: boolean;
  /** Se está aberto (para overlay) */
  open?: boolean;
  /** Callback quando muda o estado */
  onOpenChange?: (open: boolean) => void;
  /** Seção de perfil */
  profile?: {
    name: string;
    email?: string;
    avatar?: string;
    onClick?: () => void;
  };
  /** Ações do rodapé */
  footerActions?: React.ReactNode;
}

/**
 * Componente Sidebar
 *
 * Barra lateral navegável.
 *
 * @example
 * ```tsx
 * // Básico
 * <Sidebar
 *   items={[
 *     { id: '1', label: 'Dashboard', onClick: () => {} },
 *     { id: '2', label: 'Configurações', onClick: () => {} },
 *   ]}
 * />
 *
 * // Colapsável
 * <Sidebar
 *   collapsed={collapsed}
 *   onCollapse={setCollapsed}
 *   showToggle
 *   items={menuItems}
 * />
 *
 * // Com perfil
 * <Sidebar
 *   profile={{
 *     name: 'João Silva',
 *     email: 'joao@example.com',
 *     onClick: openProfile,
 *   }}
 *   items={menuItems}
 * />
 * ```
 */
export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      position = 'left',
      collapsed = false,
      onCollapse,
      items = [],
      showToggle = false,
      overlay = false,
      open = false,
      onOpenChange,
      profile,
      footerActions,
      children,
      ...props
    },
    ref
  ) => {
    // Controla estado interno se não for controlado
    const [internalCollapsed, setInternalCollapsed] = React.useState(collapsed);
    const [internalOpen, setInternalOpen] = React.useState(open);
    
    const isCollapsed = onCollapse ? collapsed : internalCollapsed;
    const isOpen = overlay ? (onOpenChange ? open : internalOpen) : true;

    // Manipula colapso
    const handleCollapse = React.useCallback(() => {
      if (onCollapse) {
        onCollapse(!isCollapsed);
      } else {
        setInternalCollapsed(!isCollapsed);
      }
    }, [isCollapsed, onCollapse]);

    // Manipula abertura/fechamento (overlay)
    const handleOpenChange = React.useCallback((newOpen: boolean) => {
      if (onOpenChange) {
        onOpenChange(newOpen);
      } else {
        setInternalOpen(newOpen);
      }
    }, [onOpenChange]);

    // Fecha ao clicar fora (overlay)
    React.useEffect(() => {
      if (overlay && isOpen) {
        const handleClickOutside = (event: MouseEvent) => {
          const target = event.target as Node;
          const sidebar = document.getElementById('rainer-sidebar');
          
          if (sidebar && !sidebar.contains(target)) {
            handleOpenChange(false);
          }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [overlay, isOpen, handleOpenChange]);

    // Classes baseadas no estado
    const sidebarClasses = cn(
      sidebarVariants({ variant, size, position }),
      overlay && 'fixed z-50',
      overlay && !isOpen && 'translate-x-full',
      position === 'right' && !overlay && (isCollapsed ? 'translate-x-full' : 'translate-x-0'),
      position === 'left' && !overlay && (isCollapsed ? '-translate-x-full' : 'translate-x-0'),
      className
    );

    // Renderiza item do menu
    const renderMenuItem = (item: MenuItem, level = 0): React.ReactNode => {
      if (item.separator) {
        return (
          <div key={item.id} className="my-2 h-px bg-border" />
        );
      }

      return (
        <button
          key={item.id}
          className={cn(
            'w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors duration-[var(--motion-duration-fast)]',
            'hover:bg-accent hover:text-accent-foreground',
            'focus:bg-accent focus:text-accent-foreground',
            item.disabled && 'pointer-events-none opacity-50',
            item.active && 'bg-accent text-accent-foreground',
            level > 0 && 'pl-6'
          )}
          onClick={() => {
            if (!item.disabled) {
              item.onClick?.();
            }
          }}
          disabled={item.disabled}
        >
          {item.icon && (
            <span className="h-4 w-4 flex-shrink-0">{item.icon}</span>
          )}
          <span className={cn(
            'truncate',
            isCollapsed && 'w-0 opacity-0'
          )}>
            {item.label}
          </span>
          {item.badge && !isCollapsed && (
            <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
              {item.badge}
            </span>
          )}
        </button>
      );
    };

    return (
      <>
        {/* Overlay backdrop */}
        {overlay && isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => handleOpenChange(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          id="rainer-sidebar"
          ref={ref}
          className={sidebarClasses}
          {...props}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            {!isCollapsed && (
              <h2 className="text-lg font-semibold">Menu</h2>
            )}
            {showToggle && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCollapse}
                className="h-8 w-8 p-0"
              >
                {isCollapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </Button>
            )}
            {overlay && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleOpenChange(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Perfil */}
          {profile && !isCollapsed && (
            <div className="p-4 border-b border-border">
              <button
                className="flex w-full items-center gap-3 rounded-md p-2 transition-colors hover:bg-accent"
                onClick={profile.onClick}
              >
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  {profile.avatar ? (
                    <img src={profile.avatar} alt={profile.name} className="h-full w-full rounded-full object-cover" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">{profile.name}</div>
                  {profile.email && (
                    <div className="text-xs text-muted-foreground">{profile.email}</div>
                  )}
                </div>
              </button>
            </div>
          )}

          {/* Menu */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {items.map(item => renderMenuItem(item))}
            </div>
            {children}
          </div>

          {/* Footer */}
          {(footerActions || !isCollapsed) && (
            <div className="p-4 border-t border-border">
              {!isCollapsed && (
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Configurações
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </Button>
                </div>
              )}
              {isCollapsed && (
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              )}
              {footerActions}
            </div>
          )}
        </aside>
      </>
    );
  }
);

Sidebar.displayName = 'Sidebar';

/**
 * SidebarTrigger - Botão para abrir sidebar (overlay)
 */
export interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Sidebar alvo */
  sidebarId?: string;
}

export const SidebarTrigger = React.forwardRef<HTMLButtonElement, SidebarTriggerProps>(
  (
    {
      className,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      // Dispara evento customizado para o sidebar
      window.dispatchEvent(new CustomEvent('sidebar:toggle'));
    }, [onClick]);

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="sm"
        className={cn('h-8 w-8 p-0', className)}
        onClick={handleClick}
        {...props}
      >
        {children || <Menu className="h-4 w-4" />}
      </Button>
    );
  }
);

SidebarTrigger.displayName = 'SidebarTrigger';

