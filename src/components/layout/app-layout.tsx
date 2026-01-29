/**
 * Componente AppLayout
 *
 * Layout principal do aplicativo com header, sidebar e área de conteúdo.
 * Combina TopBar e Sidebar para criar um layout completo.
 *
 * @module @rainersoft/ui/components/layout/app-layout
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/tokens';
import { TopBar, TopBarProps } from '../navigation/top-bar';
import { Sidebar, SidebarProps } from '../navigation/sidebar';
import { MenuItem } from '../navigation/menu';

/**
 * Variantes do AppLayout
 */
const appLayoutVariants = cva(
  'flex h-screen bg-background',
  {
    variants: {
      variant: {
        default: 'bg-background',
        dark: 'bg-background',
        glass: 'bg-background/80 backdrop-blur-sm',
        neon: 'bg-background dark:shadow-glow-cyan/10',
      },
      sidebarPosition: {
        left: '',
        right: 'flex-row-reverse',
      },
    },
    defaultVariants: {
      variant: 'default',
      sidebarPosition: 'left',
    },
  }
);

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
export const AppLayout = React.forwardRef<HTMLDivElement, AppLayoutProps>(
  (
    {
      className,
      variant = 'default',
      sidebarPosition = 'left',
      topBar,
      sidebar,
      sidebarCollapsed = false,
      onSidebarCollapse,
      children,
      showSidebarToggle = true,
      collapsedWidth = 'w-16',
      expandedWidth = 'w-64',
      ...props
    },
    ref
  ) => {
    const [internalCollapsed, setInternalCollapsed] = React.useState(sidebarCollapsed);
    
    const isCollapsed = onSidebarCollapse ? sidebarCollapsed : internalCollapsed;

    // Manipula colapso da sidebar
    const handleSidebarCollapse = React.useCallback((collapsed: boolean) => {
      if (onSidebarCollapse) {
        onSidebarCollapse(collapsed);
      } else {
        setInternalCollapsed(collapsed);
      }
    }, [onSidebarCollapse]);

    // Prepara as props do TopBar
    const topBarProps: Partial<TopBarProps> = {
      ...topBar,
      menu: showSidebarToggle ? {
        onClick: () => handleSidebarCollapse(!isCollapsed),
        label: isCollapsed ? 'Expandir menu' : 'Recolher menu',
      } : topBar?.menu,
    };

    // Prepara as props do Sidebar
    const sidebarProps: Partial<SidebarProps> = {
      ...sidebar,
      collapsed: isCollapsed,
      onCollapse: handleSidebarCollapse,
      showToggle: false, // Desabilita toggle interno pois controlamos pelo TopBar
      className: cn(
        sidebar?.className,
        isCollapsed ? collapsedWidth : expandedWidth,
        'transition-all duration-[var(--motion-duration-normal)]'
      ),
    };

    return (
      <div
        ref={ref}
        className={cn(appLayoutVariants({ variant, sidebarPosition }), className)}
        {...props}
      >
        {/* Sidebar */}
        <Sidebar {...sidebarProps} />

        {/* Conteúdo Principal */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* TopBar */}
          <TopBar {...topBarProps} />

          {/* Área de Conteúdo */}
          <main className="flex-1 overflow-auto bg-surface">
            {children}
          </main>
        </div>
      </div>
    );
  }
);

AppLayout.displayName = 'AppLayout';

/**
 * AppLayoutContent - Container para o conteúdo principal
 */
export interface AppLayoutContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AppLayoutContent = React.forwardRef<HTMLDivElement, AppLayoutContentProps>(
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
          'p-6 space-y-6',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AppLayoutContent.displayName = 'AppLayoutContent';

/**
 * AppLayoutSection - Seção dentro do conteúdo
 */
export interface AppLayoutSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Título da seção */
  title?: string;
  /** Descrição da seção */
  description?: string;
}

export const AppLayoutSection = React.forwardRef<HTMLDivElement, AppLayoutSectionProps>(
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
        className={cn('space-y-4', className)}
        {...props}
      >
        {(title || description) && (
          <div className="space-y-2">
            {title && (
              <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            )}
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    );
  }
);

AppLayoutSection.displayName = 'AppLayoutSection';
