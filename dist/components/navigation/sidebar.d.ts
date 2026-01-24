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
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { MenuItem } from './menu';
/**
 * Variantes do Sidebar
 */
declare const sidebarVariants: (props?: {
    variant?: "dark" | "default" | "neon" | "glass";
    size?: "sm" | "md" | "lg" | "xl";
    position?: "top" | "bottom" | "left" | "right";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Sidebar
 */
export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {
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
export declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLDivElement>>;
/**
 * SidebarTrigger - Botão para abrir sidebar (overlay)
 */
export interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Sidebar alvo */
    sidebarId?: string;
}
export declare const SidebarTrigger: React.ForwardRefExoticComponent<SidebarTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export {};
