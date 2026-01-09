/**
 * Componente Menu
 *
 * Menu dropdown com navegação e ações.
 * Suporta submenus, ícones e separadores.
 *
 * @module @rainersoft/ui/components/navigation/menu
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import { ChevronDown, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

/**
 * Interface de item do menu
 */
export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  badge?: string | number;
  children?: MenuItem[];
  separator?: boolean;
}

/**
 * Variantes do Menu
 */
const menuVariants = cva(
  'min-w-[200px] rounded-md border bg-popover p-1 text-popover-foreground shadow-lg',
  {
    variants: {
      variant: {
        default: 'border-border',
        glass: 'glass border-border',
        neon: 'neon-border dark:shadow-glow-cyan',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

/**
 * Props do Menu
 */
export interface MenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof menuVariants> {
  /** Itens do menu */
  items: MenuItem[];
  /** Trigger do menu */
  trigger?: React.ReactNode;
  /** Se está aberto */
  open?: boolean;
  /** Callback quando muda o estado */
  onOpenChange?: (open: boolean) => void;
  /** Posição do menu */
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  /** Se deve fechar ao clicar */
  closeOnClick?: boolean;
}

/**
 * Componente Menu
 *
 * Menu dropdown contextual.
 *
 * @example
 * ```tsx
 * // Menu básico
 * <Menu 
 *   trigger={<Button>Menu</Button>}
 *   items={[
 *     { id: '1', label: 'Item 1', onClick: () => {} },
 *     { id: '2', label: 'Item 2', onClick: () => {} },
 *   ]}
 * />
 *
 * // Com submenus
 * <Menu 
 *   trigger={<Button>Menu</Button>}
 *   items={[
 *     {
 *       id: '1',
 *       label: 'Arquivo',
 *       children: [
 *         { id: '1-1', label: 'Novo', onClick: () => {} },
 *         { id: '1-2', label: 'Abrir', onClick: () => {} },
 *       ],
 *     },
 *   ]}
 * />
 * ```
 */
export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      items,
      trigger,
      open: controlledOpen,
      onOpenChange,
      position = 'bottom-left',
      closeOnClick = true,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const [openSubmenus, setOpenSubmenus] = React.useState<Set<string>>(new Set());
    
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Controla estado do menu
    const handleOpenChange = React.useCallback((newOpen: boolean) => {
      if (controlledOpen === undefined) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    }, [controlledOpen, onOpenChange]);

    // Controla submenu
    const toggleSubmenu = React.useCallback((itemId: string) => {
      setOpenSubmenus(prev => {
        const next = new Set(prev);
        if (next.has(itemId)) {
          next.delete(itemId);
        } else {
          next.add(itemId);
        }
        return next;
      });
    }, []);

    // Fecha ao clicar fora
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          handleOpenChange(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [handleOpenChange]);

    // Classes de posição
    const positionClasses = {
      'bottom-left': 'top-full left-0 mt-1',
      'bottom-right': 'top-full right-0 mt-1',
      'top-left': 'bottom-full left-0 mb-1',
      'top-right': 'bottom-full right-0 mb-1',
    };

    // Renderiza item do menu
    const renderItem = (item: MenuItem, level = 0): React.ReactNode => {
      const hasChildren = item.children && item.children.length > 0;
      const isSubmenuOpen = openSubmenus.has(item.id);

      if (item.separator) {
        return (
          <div key={item.id} className="my-1 h-px bg-border" />
        );
      }

      if (hasChildren) {
        return (
          <div key={item.id} className="relative">
            <button
              className={cn(
                'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
                'transition-colors duration-[var(--motion-duration-fast)]',
                'hover:bg-accent hover:text-accent-foreground',
                'focus:bg-accent focus:text-accent-foreground',
                item.disabled && 'pointer-events-none opacity-50',
                item.active && 'bg-accent text-accent-foreground',
                level > 0 && 'pl-6'
              )}
              onClick={() => toggleSubmenu(item.id)}
              disabled={item.disabled}
            >
              {item.icon && (
                <span className="mr-2 h-4 w-4">{item.icon}</span>
              )}
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                  {item.badge}
                </span>
              )}
              <ChevronRight
                className={cn(
                  'h-4 w-4 transition-transform duration-[var(--motion-duration-fast)]',
                  isSubmenuOpen && 'rotate-90'
                )}
              />
            </button>
            
            {isSubmenuOpen && (
              <div className="absolute left-full top-0 ml-1 min-w-[200px] rounded-md border bg-popover p-1 shadow-lg">
                {item.children.map(child => renderItem(child, level + 1))}
              </div>
            )}
          </div>
        );
      }

      const content = (
        <button
          className={cn(
            'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
            'transition-colors duration-[var(--motion-duration-fast)]',
            'hover:bg-accent hover:text-accent-foreground',
            'focus:bg-accent focus:text-accent-foreground',
            item.disabled && 'pointer-events-none opacity-50',
            item.active && 'bg-accent text-accent-foreground',
            level > 0 && 'pl-6'
          )}
          onClick={() => {
            if (!item.disabled) {
              item.onClick?.();
              if (closeOnClick) {
                handleOpenChange(false);
              }
            }
          }}
          disabled={item.disabled}
        >
          {item.icon && (
            <span className="mr-2 h-4 w-4">{item.icon}</span>
          )}
          <span className="flex-1 text-left">{item.label}</span>
          {item.badge && (
            <span className="ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
              {item.badge}
            </span>
          )}
        </button>
      );

      if (item.href) {
        return (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              'relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
              'transition-colors duration-[var(--motion-duration-fast)]',
              'hover:bg-accent hover:text-accent-foreground',
              'focus:bg-accent focus:text-accent-foreground',
              item.disabled && 'pointer-events-none opacity-50',
              item.active && 'bg-accent text-accent-foreground',
              level > 0 && 'pl-6'
            )}
            onClick={() => {
              if (closeOnClick) {
                handleOpenChange(false);
              }
            }}
          >
            {item.icon && (
              <span className="mr-2 h-4 w-4">{item.icon}</span>
            )}
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                {item.badge}
              </span>
            )}
          </a>
        );
      }

      return content;
    };

    return (
      <div
        ref={containerRef}
        className={cn('relative inline-block', className)}
        {...props}
      >
        {/* Trigger */}
        {trigger && (
          <div onClick={() => handleOpenChange(!isOpen)}>
            {trigger}
          </div>
        )}

        {/* Menu Dropdown */}
        {isOpen && (
          <div
            ref={ref}
            className={cn(
              menuVariants({ variant, size }),
              'absolute z-50 animate-in fade-in-0 zoom-in-95',
              positionClasses[position]
            )}
          >
            {items.map(item => renderItem(item))}
          </div>
        )}
      </div>
    );
  }
);

Menu.displayName = 'Menu';

/**
 * MenuBar - Barra de menu horizontal
 */
export interface MenuBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Menus da barra */
  menus: Array<{
    id: string;
    label: string;
    items: MenuItem[];
  }>;
}

export const MenuBar = React.forwardRef<HTMLDivElement, MenuBarProps>(
  (
    {
      className,
      menus,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-1 rounded-md border bg-background p-1',
          className
        )}
        {...props}
      >
        {menus.map(menu => (
          <Menu
            key={menu.id}
            items={menu.items}
            trigger={
              <Button variant="ghost" size="sm">
                {menu.label}
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            }
          />
        ))}
      </div>
    );
  }
);

MenuBar.displayName = 'MenuBar';

/**
 * ContextMenu - Menu de contexto
 */
export interface NavigationContextMenuProps extends Omit<MenuProps, 'trigger'> {
  /** Children que ativam o menu */
  children: React.ReactNode;
}

export const NavigationContextMenu = React.forwardRef<HTMLDivElement, NavigationContextMenuProps>(
  (
    {
      className,
      children,
      items,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleContextMenu = React.useCallback((event: React.MouseEvent) => {
      event.preventDefault();
      setPosition({ x: event.clientX, y: event.clientY });
      setOpen(true);
    }, []);

    return (
      <div
        ref={containerRef}
        className={cn('relative inline-block', className)}
        onContextMenu={handleContextMenu}
      >
        {children}
        
        {open && (
          <div
            ref={ref}
            className={cn(
              menuVariants(),
              'fixed z-50 animate-in fade-in-0 zoom-in-95'
            )}
            style={{
              left: position.x,
              top: position.y,
            }}
            {...props}
          >
            {items.map(item => {
              if (item.separator) {
                return (
                  <div key={item.id} className="my-1 h-px bg-border" />
                );
              }

              return (
                <button
                  key={item.id}
                  className={cn(
                    'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
                    'transition-colors duration-[var(--motion-duration-fast)]',
                    'hover:bg-accent hover:text-accent-foreground',
                    'focus:bg-accent focus:text-accent-foreground',
                    item.disabled && 'pointer-events-none opacity-50',
                    item.active && 'bg-accent text-accent-foreground'
                  )}
                  onClick={() => {
                    if (!item.disabled) {
                      item.onClick?.();
                      setOpen(false);
                    }
                  }}
                  disabled={item.disabled}
                >
                  {item.icon && (
                    <span className="mr-2 h-4 w-4">{item.icon}</span>
                  )}
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

NavigationContextMenu.displayName = 'NavigationContextMenu';
