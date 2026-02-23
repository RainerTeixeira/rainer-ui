/**
 * Loading Screen e Estados de Carregamento
 *
 * Componentes unificados para estados de carregamento. Inclui tela de loading inicial,
 * loaders inline, skeletons e spinners. Mantém consistência visual em toda a aplicação.
 *
 * @module components/infrastructure/loading-screen
 * @fileoverview Componentes de loading unificados e otimizados
 * @author Rainer Teixeira
 * @version 3.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // Tela de loading inicial
 * <LoadingScreen progress={50} currentStep="Carregando..." />
 *
 * // Loading inline
 * <InlineLoader message="Carregando dados..." />
 *
 * // Grid de skeletons
 * <SkeletonGrid columns={3} count={6} />
 *
 * // Spinner básico
 * <LoadingSpinner size="lg" />
 * ```
 */
import React, { ReactNode } from 'react';
/**
 * Tamanhos de spinner disponíveis
 */
declare const SPINNER_SIZES: {
    readonly sm: "h-4 w-4";
    readonly md: "h-6 w-6";
    readonly lg: "h-8 w-8";
    readonly xl: "h-12 w-12";
};
type SpinnerSize = keyof typeof SPINNER_SIZES;
interface LoadingSpinnerProps {
    readonly size?: SpinnerSize;
    readonly className?: string;
    readonly label?: string;
}
interface FullPageLoaderProps {
    readonly message?: string;
}
interface InlineLoaderProps {
    readonly message?: string;
    readonly size?: SpinnerSize;
}
interface SkeletonGridProps {
    readonly count?: number;
    readonly columns?: 1 | 2 | 3 | 4;
    readonly className?: string;
}
interface LoadingScreenProps {
    readonly progress?: number;
    readonly currentStep?: string;
}
interface EmptyStateProps {
    readonly icon?: React.ComponentType<{
        className?: string;
    }>;
    readonly title?: string;
    readonly description?: string;
    readonly action?: ReactNode;
}
/**
 * Loading Spinner básico
 *
 * Ícone de loading animado customizável.
 *
 * @param size - Tamanho do spinner
 * @param className - Classes CSS adicionais
 * @param label - Label de acessibilidade
 */
export declare function LoadingSpinner({ size, className, label, }: LoadingSpinnerProps): import("react/jsx-runtime").JSX.Element;
/**
 * Full Page Loader
 *
 * Loading que ocupa tela inteira.
 * Usado em transições de página e carregamento inicial.
 *
 * @param message - Mensagem opcional de carregamento
 */
export declare function FullPageLoader({ message, }: FullPageLoaderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Inline Loader
 *
 * Loading inline para seções ou componentes.
 * Não ocupa tela inteira.
 *
 * @param message - Mensagem de carregamento
 * @param size - Tamanho do spinner
 */
export declare function InlineLoader({ message, size, }: InlineLoaderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Skeleton Grid
 *
 * Grid de skeleton loaders para listas.
 * Usado em blog, dashboard, portfolio, etc.
 *
 * @param count - Número de skeletons
 * @param columns - Número de colunas
 * @param className - Classes CSS adicionais
 */
export declare function SkeletonGrid({ count, columns, className, }: SkeletonGridProps): import("react/jsx-runtime").JSX.Element;
/**
 * Empty State Component
 *
 * Estado vazio padronizado para listas sem conteúdo.
 *
 * @param icon - Ícone a exibir
 * @param title - Título do estado vazio
 * @param description - Descrição
 * @param action - Ação opcional (botão)
 */
export declare function EmptyState({ icon: Icon, title, description, action, }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
/**
 * LoadingScreen Component
 *
 * Tela de carregamento inicial com estilo cyberpunk profissional.
 * Exibe animações suaves, mensagens dinâmicas e progresso visual.
 * Otimizado para performance e uso eficiente de tokens.
 *
 * @param progress - Progresso de 0 a 100 (opcional)
 * @param currentStep - Etapa atual de inicialização (opcional)
 */
export declare function LoadingScreen({ progress, currentStep }: LoadingScreenProps): import("react/jsx-runtime").JSX.Element;
export {};
