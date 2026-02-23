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
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
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
declare const menuVariants: (props?: {
    variant?: "default" | "neon" | "glass";
    size?: "sm" | "md" | "lg";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Menu
 */
export interface MenuProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof menuVariants> {
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
export declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const MenuBar: React.ForwardRefExoticComponent<MenuBarProps & React.RefAttributes<HTMLDivElement>>;
/**
 * ContextMenu - Menu de contexto
 */
export interface NavigationContextMenuProps extends Omit<MenuProps, 'trigger'> {
    /** Children que ativam o menu */
    children: React.ReactNode;
}
export declare const NavigationContextMenu: React.ForwardRefExoticComponent<NavigationContextMenuProps & React.RefAttributes<HTMLDivElement>>;
export {};
