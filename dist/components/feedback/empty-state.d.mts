import * as react_jsx_runtime from 'react/jsx-runtime';
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
interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
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
declare const EmptyState: React.ForwardRefExoticComponent<EmptyStateProps & React.RefAttributes<HTMLDivElement>>;
/**
 * EmptyStateIllustrated - Com ilustração customizada
 */
interface EmptyStateIllustratedProps extends Omit<EmptyStateProps, 'icon'> {
    /** URL da imagem ou SVG */
    illustration?: string;
    /** Alt text da imagem */
    illustrationAlt?: string;
    /** Largura da ilustração */
    illustrationWidth?: number;
    /** Altura da ilustração */
    illustrationHeight?: number;
}
declare const EmptyStateIllustrated: React.ForwardRefExoticComponent<EmptyStateIllustratedProps & React.RefAttributes<HTMLDivElement>>;
/**
 * EmptyStatePattern - Padrões comuns de EmptyState
 */
declare const EmptyStatePatterns: {
    readonly noData: (props?: Partial<EmptyStateProps>) => react_jsx_runtime.JSX.Element;
    readonly noSearchResults: (onClear?: () => void) => react_jsx_runtime.JSX.Element;
    readonly noItems: (onCreate?: () => void, createLabel?: string) => react_jsx_runtime.JSX.Element;
    readonly offline: (onRetry?: () => void) => react_jsx_runtime.JSX.Element;
    readonly error: (onRetry?: () => void) => react_jsx_runtime.JSX.Element;
    readonly noFilterResults: (onClear?: () => void) => react_jsx_runtime.JSX.Element;
};

export { EmptyState, EmptyStateIllustrated, type EmptyStateIllustratedProps, EmptyStatePatterns, type EmptyStateProps };
