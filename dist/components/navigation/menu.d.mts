import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Interface de item do menu
 */
interface MenuItem {
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
declare const menuVariants: (props?: {
    variant?: "default" | "neon" | "glass";
    size?: "sm" | "md" | "lg";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Menu
 */
interface MenuProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof menuVariants> {
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
declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement>>;
/**
 * MenuBar - Barra de menu horizontal
 */
interface MenuBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Menus da barra */
    menus: Array<{
        id: string;
        label: string;
        items: MenuItem[];
    }>;
}
declare const MenuBar: React.ForwardRefExoticComponent<MenuBarProps & React.RefAttributes<HTMLDivElement>>;
/**
 * ContextMenu - Menu de contexto
 */
interface NavigationContextMenuProps extends Omit<MenuProps, 'trigger'> {
    /** Children que ativam o menu */
    children: React.ReactNode;
}
declare const NavigationContextMenu: React.ForwardRefExoticComponent<NavigationContextMenuProps & React.RefAttributes<HTMLDivElement>>;

export { Menu, MenuBar, type MenuBarProps, type MenuItem, type MenuProps, NavigationContextMenu, type NavigationContextMenuProps };
