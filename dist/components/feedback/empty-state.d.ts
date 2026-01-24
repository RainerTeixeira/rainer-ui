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
import * as React from 'react';
/**
 * Ícones pré-definidos por tipo
 */
declare const defaultIcons: {
    readonly search: any;
    readonly empty: any;
    readonly error: any;
    readonly filtered: any;
    readonly offline: any;
    readonly loading: any;
};
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
    /** Variante visual */
    variant?: 'default' | 'card' | 'glass' | 'minimal';
    /** Tamanho do componente */
    size?: 'sm' | 'md' | 'lg' | 'xl';
}
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
export declare const EmptyState: React.ForwardRefExoticComponent<EmptyStateProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const EmptyStateIllustrated: React.ForwardRefExoticComponent<EmptyStateIllustratedProps & React.RefAttributes<HTMLDivElement>>;
/**
 * EmptyStatePattern - Padrões comuns de EmptyState
 */
export declare const EmptyStatePatterns: {
    readonly noData: (props?: Partial<EmptyStateProps>) => import("react/jsx-runtime").JSX.Element;
    readonly noSearchResults: (onClear?: () => void) => import("react/jsx-runtime").JSX.Element;
    readonly noItems: (onCreate?: () => void, createLabel?: string) => import("react/jsx-runtime").JSX.Element;
    readonly offline: (onRetry?: () => void) => import("react/jsx-runtime").JSX.Element;
    readonly error: (onRetry?: () => void) => import("react/jsx-runtime").JSX.Element;
    readonly noFilterResults: (onClear?: () => void) => import("react/jsx-runtime").JSX.Element;
};
export {};
