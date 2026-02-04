import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { TopBarProps } from '../navigation/top-bar.mjs';
import { SidebarProps } from '../navigation/sidebar.mjs';
import '../navigation/menu.mjs';

/**
 * Variantes do AppLayout
 */
declare const appLayoutVariants: (props?: {
    variant?: "dark" | "default" | "neon" | "glass";
    sidebarPosition?: "left" | "right";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do AppLayout
 */
interface AppLayoutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof appLayoutVariants> {
    /** Props do TopBar */
    topBar?: Partial<TopBarProps>;
    /** Props do Sidebar */
    sidebar?: Partial<SidebarProps>;
    /** Se a sidebar está colapsada */
    sidebarCollapsed?: boolean;
    /** Callback quando sidebar colapsa/expande */
    onSidebarCollapse?: (collapsed: boolean) => void;
    /** Conteúdo principal */
    children: React.ReactNode;
    /** Se mostra o toggle da sidebar no TopBar */
    showSidebarToggle?: boolean;
    /** Largura da sidebar quando colapsada */
    collapsedWidth?: string;
    /** Largura da sidebar quando expandida */
    expandedWidth?: string;
}
/**
 * Componente AppLayout
 *
 * Layout principal com header e sidebar.
 *
 * @example
 * ```tsx
 * // Básico
 * <AppLayout
 *   topBar={{ title: "Minha Aplicação" }}
 *   sidebar={{ items: menuItems }}
 * >
 *   <div>Conteúdo principal</div>
 * </AppLayout>
 *
 * // Com controle de colapso
 * <AppLayout
 *   sidebarCollapsed={collapsed}
 *   onSidebarCollapse={setCollapsed}
 *   showSidebarToggle
 *   topBar={{ title: "Dashboard" }}
 *   sidebar={{ items: menuItems }}
 * >
 *   <DashboardContent />
 * </AppLayout>
 *
 * // Customizado
 * <AppLayout
 *   variant="glass"
 *   sidebarPosition="right"
 *   topBar={{
 *     title: "ERP System",
 *     subtitle: "Gestão Empresarial",
 *     search: { placeholder: "Buscar..." },
 *     notifications: { count: 5 }
 *   }}
 *   sidebar={{
 *     items: menuItems,
 *     profile: {
 *       name: "João Silva",
 *       email: "joao@empresa.com"
 *     }
 *   }}
 * >
 *   <MainContent />
 * </AppLayout>
 * ```
 */
declare const AppLayout: React.ForwardRefExoticComponent<AppLayoutProps & React.RefAttributes<HTMLDivElement>>;
/**
 * AppLayoutContent - Container para o conteúdo principal
 */
interface AppLayoutContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const AppLayoutContent: React.ForwardRefExoticComponent<AppLayoutContentProps & React.RefAttributes<HTMLDivElement>>;
/**
 * AppLayoutSection - Seção dentro do conteúdo
 */
interface AppLayoutSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Título da seção */
    title?: string;
    /** Descrição da seção */
    description?: string;
}
declare const AppLayoutSection: React.ForwardRefExoticComponent<AppLayoutSectionProps & React.RefAttributes<HTMLDivElement>>;

export { AppLayout, AppLayoutContent, type AppLayoutContentProps, type AppLayoutProps, AppLayoutSection, type AppLayoutSectionProps };
