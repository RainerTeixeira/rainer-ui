/**
 * Componente TopBar
 *
 * Barra superior com título, ações e navegação.
 * Ideal para headers de páginas e aplicações.
 *
 * @module @rainersoft/ui/components/navigation/top-bar
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import MoreVertical from 'lucide-react/dist/esm/icons/more-vertical';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';
import Bell from 'lucide-react/dist/esm/icons/bell';
import Menu from 'lucide-react/dist/esm/icons/menu';
import Search from 'lucide-react/dist/esm/icons/search';
import Settings from 'lucide-react/dist/esm/icons/settings';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

/**
 * Variantes do TopBar
 */
const topBarVariants = cva(
  'flex items-center justify-between border-b bg-background px-4 py-3',
  {
    variants: {
      variant: {
        default: 'border-border bg-background',
        floating: 'border-border shadow-sm rounded-lg mx-4 mt-4',
        glass: 'glass border-transparent',
        neon: 'neon-border bg-background dark:shadow-glow-cyan',
        transparent: 'border-transparent bg-transparent',
      },
      size: {
        sm: 'h-12 px-3 py-2',
        md: 'h-14 px-4 py-3',
        lg: 'h-16 px-6 py-4',
      },
      sticky: {
        true: 'sticky top-0 z-40',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      sticky: false,
    },
  }
);

/**
 * Props do TopBar
 */
export interface TopBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof topBarVariants> {
  /** Título da barra */
  title?: string;
  /** Subtítulo */
  subtitle?: string;
  /** Seção esquerda customizada */
  left?: React.ReactNode;
  /** Seção central customizada */
  center?: React.ReactNode;
  /** Seção direita customizada */
  right?: React.ReactNode;
  /** Botão voltar */
  back?: {
    onClick: () => void;
    label?: string;
  };
  /** Botão menu */
  menu?: {
    onClick: () => void;
    label?: string;
  };
  /** Campo de busca */
  search?: {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
  };
  /** Notificações */
  notifications?: {
    count?: number;
    onClick?: () => void;
  };
}

/**
 * Componente TopBar
 *
 * Barra superior de navegação.
 *
 * @example
 * ```tsx
 * // Básico
 * <TopBar 
 *   title="Minha Página"
 *   back={{ onClick: () => history.back() }}
 * />
 *
 * // Com busca e ações
 * <TopBar 
 *   title="Produtos"
 *   search={{
 *     placeholder: "Buscar produtos...",
 *     onChange: setQuery,
 *   }}
 *   notifications={{ count: 5, onClick: openNotifications }}
 * />
 *
 * // Customizado
 * <TopBar 
 *   left={<Button>Voltar</Button>}
 *   center={<h1>Título</h1>}
 *   right={<Button>Ação</Button>}
 * />
 * ```
 */
export const TopBar = React.forwardRef<HTMLDivElement, TopBarProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      sticky = false,
      title,
      subtitle,
      left,
      center,
      right,
      back,
      menu,
      search,
      notifications,
      children,
      ...props
    },
    ref
  ) => {
    // Renderiza seção esquerda
    const renderLeft = () => {
      if (left) return left;

      return (
        <div className="flex items-center gap-2">
          {back && (
            <Button
              variant="ghost"
              size="sm"
              onClick={back.onClick}
              className="h-8 w-8 p-0"
              aria-label={back.label || 'Voltar'}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          )}
          {menu && (
            <Button
              variant="ghost"
              size="sm"
              onClick={menu.onClick}
              className="h-8 w-8 p-0"
              aria-label={menu.label || 'Menu'}
            >
              <Menu className="h-4 w-4" />
            </Button>
          )}
          {(title || subtitle) && (
            <div className="flex flex-col">
              {title && (
                <h1 className="text-lg font-semibold leading-none">{title}</h1>
              )}
              {subtitle && (
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              )}
            </div>
          )}
        </div>
      );
    };

    // Renderiza seção central
    const renderCenter = () => {
      if (center) return center;

      if (search) {
        return (
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={search.placeholder || 'Buscar...'}
                value={search.value}
                onChange={(e) => search.onChange?.(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    search.onSubmit?.(e.currentTarget.value);
                  }
                }}
                className={cn(
                  'w-full h-9 pl-10 pr-4 rounded-md border border-input bg-background',
                  'text-sm ring-offset-background',
                  'placeholder:text-muted-foreground',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                  'disabled:cursor-not-allowed disabled:opacity-50'
                )}
              />
            </div>
          </div>
        );
      }

      if (title && (back || menu)) {
        return (
          <div className="flex-1 flex justify-center">
            <h1 className="text-lg font-semibold">{title}</h1>
          </div>
        );
      }

      return null;
    };

    // Renderiza seção direita
    const renderRight = () => {
      if (right) return right;

      return (
        <div className="flex items-center gap-2">
          {notifications && (
            <Button
              variant="ghost"
              size="sm"
              onClick={notifications.onClick}
              className="relative h-8 w-8 p-0"
            >
              <Bell className="h-4 w-4" />
              {notifications.count && notifications.count > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {notifications.count > 99 ? '99+' : notifications.count}
                </span>
              )}
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <Settings className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(topBarVariants({ variant, size, sticky }), className)}
        {...props}
      >
        {renderLeft()}
        {renderCenter()}
        {renderRight()}
        {children}
      </div>
    );
  }
);

TopBar.displayName = 'TopBar';

/**
 * TopBarTitle - Título centralizado
 */
export interface TopBarTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Título principal */
  title: string;
  /** Subtítulo */
  subtitle?: string;
}

export const TopBarTitle = React.forwardRef<HTMLHeadingElement, TopBarTitleProps>(
  (
    {
      className,
      title,
      subtitle,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col items-center', className)}
        {...props}
      >
        <h1 className="text-lg font-semibold leading-none">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
    );
  }
);

TopBarTitle.displayName = 'TopBarTitle';

/**
 * TopBarActions - Container para ações
 */
export interface TopBarActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TopBarActions = React.forwardRef<HTMLDivElement, TopBarActionsProps>(
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
        className={cn('flex items-center gap-2', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TopBarActions.displayName = 'TopBarActions';

