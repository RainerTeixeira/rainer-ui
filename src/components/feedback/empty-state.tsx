/**
 * Componente EmptyState
 *
 * Estado vazio ilustrado para quando não há dados.
 * Inclui ícone, título, descrição e ações opcionais.
 *
 * @module @rainersoft/ui/components/feedback/empty-state
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import { 
  Search, 
  Inbox, 
  FileX, 
  FilterX, 
  WifiOff,
  RefreshCw
} from 'lucide-react';
import * as React from 'react';
import { cva } from 'class-variance-authority';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

/**
 * Ícones pré-definidos por tipo
 */
const defaultIcons = {
  search: Search,
  empty: Inbox,
  error: FileX,
  filtered: FilterX,
  offline: WifiOff,
  loading: RefreshCw,
} as const;

/**
 * Variantes do EmptyState
 */
const emptyStateVariants = cva(
  'flex flex-col items-center justify-center text-center p-8',
  {
    variants: {
      size: {
        sm: 'p-6',
        md: 'p-8',
        lg: 'p-12',
        xl: 'p-16',
      },
      variant: {
        default: '',
        card: 'rounded-lg border border-border bg-card',
        glass: 'glass rounded-lg',
        minimal: 'p-4',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

/**
 * Props do EmptyState
 */
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tipo de estado vazio (para ícone padrão) */
  type?: keyof typeof defaultIcons;
  /** Ícone customizado */
  icon?: React.ReactNode;
  /** Título principal */
  title: string;
  /** Descrição detalhada */
  description?: string;
  /** Ações primárias */
  actions?: React.ReactNode;
  /** Ações secundárias */
  secondaryActions?: React.ReactNode;
  /** Se o ícone deve animar */
  animated?: boolean;
  /** Cor do ícone */
  iconColor?: string;
  /** Tamanho do ícone */
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Classes de tamanho para ícones
 */
const iconSizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-20 w-20',
} as const;

/**
 * Componente EmptyState
 *
 * Estado vazio ilustrado com ações opcionais.
 *
 * @example
 * ```tsx
 * // Básico
 * <EmptyState 
 *   title="Nenhum resultado encontrado" 
 *   description="Tente ajustar sua busca"
 *   type="search"
 * />
 *
 * // Com ações
 * <EmptyState 
 *   title="Sem projetos" 
 *   description="Crie seu primeiro projeto para começar"
 *   type="empty"
 *   actions={
 *     <Button>Criar Projeto</Button>
 *   }
 * />
 *
 * // Customizado
 * <EmptyState 
 *   icon={<CustomIcon />}
 *   title="Conecte-se à internet"
 *   description="Verifique sua conexão para continuar"
 *   actions={
 *     <Button variant="outline">Tentar Novamente</Button>
 *   }
 *   animated
 * />
 * ```
 */
export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      type,
      icon,
      title,
      description,
      actions,
      secondaryActions,
      animated = false,
      iconColor,
      iconSize = 'md',
      ...props
    },
    ref
  ) => {
    // Resolve o ícone a ser usado
    let IconComponent = icon;
    if (!IconComponent && type) {
      const DefaultIcon = defaultIcons[type];
      IconComponent = <DefaultIcon className={iconSizeClasses[iconSize]} />;
    }

    return (
      <div
        ref={ref}
        className={cn(emptyStateVariants({ size, variant }), className)}
        {...props}
      >
        {/* Ícone */}
        {IconComponent && (
          <div 
            className={cn(
              'mb-4 text-muted-foreground',
              animated && 'animate-pulse',
              iconColor === 'primary' && 'text-primary',
              iconColor === 'success' && 'text-emerald-600 dark:text-emerald-500',
              iconColor === 'warning' && 'text-amber-600 dark:text-amber-500',
              iconColor === 'error' && 'text-red-600 dark:text-red-500',
              !iconColor && 'text-muted-foreground'
            )}
          >
            {IconComponent}
          </div>
        )}

        {/* Conteúdo */}
        <div className="max-w-md space-y-2">
          <h3 className="text-lg font-semibold text-foreground">
            {title}
          </h3>
          
          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Ações */}
        {(actions || secondaryActions) && (
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
            {actions}
            {secondaryActions}
          </div>
        )}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';

/**
 * EmptyStateIllustrated - Com ilustração customizada
 */
export interface EmptyStateIllustratedProps extends Omit<EmptyStateProps, 'icon'> {
  /** URL da imagem ou SVG */
  illustration?: string;
  /** Alt text da imagem */
  illustrationAlt?: string;
  /** Largura da ilustração */
  illustrationWidth?: number;
  /** Altura da ilustração */
  illustrationHeight?: number;
}

export const EmptyStateIllustrated = React.forwardRef<HTMLDivElement, EmptyStateIllustratedProps>(
  (
    {
      className,
      illustration,
      illustrationAlt = 'Ilustração',
      illustrationWidth = 200,
      illustrationHeight = 200,
      ...props
    },
    ref
  ) => {
    return (
      <EmptyState
        ref={ref}
        className={cn(className)}
        {...props}
        icon={
          illustration && (
            <img
              src={illustration}
              alt={illustrationAlt}
              width={illustrationWidth}
              height={illustrationHeight}
              className="object-contain"
            />
          )
        }
      />
    );
  }
);

EmptyStateIllustrated.displayName = 'EmptyStateIllustrated';

/**
 * EmptyStatePattern - Padrões comuns de EmptyState
 */
export const EmptyStatePatterns = {
  // Sem dados
  noData: (props?: Partial<EmptyStateProps>) => (
    <EmptyState
      type="empty"
      title="Nenhum dado disponível"
      description="Não há dados para exibir no momento."
      {...props}
    />
  ),

  // Sem resultados de busca
  noSearchResults: (onClear?: () => void) => (
    <EmptyState
      type="search"
      title="Nenhum resultado encontrado"
      description="Tente usar termos diferentes ou limpar os filtros."
      actions={onClear && <Button variant="outline" onClick={onClear}>Limpar Filtros</Button>}
    />
  ),

  // Sem itens na lista
  noItems: (onCreate?: () => void, createLabel = 'Adicionar') => (
    <EmptyState
      type="empty"
      title="Nenhum item aqui"
      description="Adicione seu primeiro item para começar."
      actions={onCreate && <Button onClick={onCreate}>{createLabel}</Button>}
    />
  ),

  // Offline
  offline: (onRetry?: () => void) => (
    <EmptyState
      type="offline"
      title="Você está offline"
      description="Verifique sua conexão com a internet e tente novamente."
      actions={onRetry && <Button onClick={onRetry}>Tentar Novamente</Button>}
      animated
    />
  ),

  // Erro ao carregar
  error: (onRetry?: () => void) => (
    <EmptyState
      type="error"
      title="Algo deu errado"
      description="Ocorreu um erro ao carregar os dados. Tente novamente."
      actions={onRetry && <Button onClick={onRetry}>Tentar Novamente</Button>}
      iconColor="error"
    />
  ),

  // Filtros sem resultado
  noFilterResults: (onClear?: () => void) => (
    <EmptyState
      type="filtered"
      title="Nenhum resultado com os filtros"
      description="Tente ajustar ou remover alguns filtros."
      actions={onClear && <Button variant="outline" onClick={onClear}>Limpar Filtros</Button>}
    />
  ),
} as const;
