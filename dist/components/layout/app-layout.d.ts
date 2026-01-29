import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { TopBarProps } from '../navigation/top-bar';
import { SidebarProps } from '../navigation/sidebar';
import { MenuItem } from '../navigation/menu';

/**
 * Variantes do AppLayout
 */
declare const appLayoutVariants: cva.ReturnType;

/**
 * Props do AppLayout
 */
export interface AppLayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof appLayoutVariants> {
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
 */
export declare const AppLayout: React.ForwardRefExoticComponent<AppLayoutProps & React.RefAttributes<HTMLDivElement>>;

/**
 * AppLayoutContent - Container para o conteúdo principal
 */
export interface AppLayoutContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export declare const AppLayoutContent: React.ForwardRefExoticComponent<AppLayoutContentProps & React.RefAttributes<HTMLDivElement>>;

/**
 * AppLayoutSection - Seção dentro do conteúdo
 */
export interface AppLayoutSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Título da seção */
  title?: string;
  /** Descrição da seção */
  description?: string;
}

export declare const AppLayoutSection: React.ForwardRefExoticComponent<AppLayoutSectionProps & React.RefAttributes<HTMLDivElement>>;
