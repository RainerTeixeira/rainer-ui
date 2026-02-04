import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Pagination
 */
declare const paginationVariants: (props?: {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "compact" | "spaced";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Pagination
 */
interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof paginationVariants> {
    /** Página atual */
    page?: number;
    /** Total de páginas */
    totalPages: number;
    /** Callback quando muda a página */
    onChange?: (page: number) => void;
    /** Callback para primeira página */
    onFirst?: () => void;
    /** Callback para página anterior */
    onPrevious?: () => void;
    /** Callback para próxima página */
    onNext?: () => void;
    /** Callback para última página */
    onLast?: () => void;
    /** Se mostra informações */
    showInfo?: boolean;
    /** Se mostra botões de navegação */
    showNavigation?: boolean;
    /** Se mostra números de página */
    showPageNumbers?: boolean;
    /** Se mostra botão primeira página */
    showFirst?: boolean;
    /** Se mostra botão última página */
    showLast?: boolean;
    /** Se está desabilitado */
    disabled?: boolean;
    /** Número de páginas vizinhas */
    siblingCount?: number;
    /** Texto personalizado */
    labels?: {
        info?: string;
        previous?: string;
        next?: string;
        first?: string;
        last?: string;
    };
}
/**
 * Componente Pagination
 *
 * Sistema de paginação.
 *
 * @example
 * ```tsx
 * // Básico
 * <Pagination
 *   page={1}
 *   totalPages={10}
 *   onChange={setPage}
 * />
 *
 * // Com informações
 * <Pagination
 *   page={1}
 *   totalPages={10}
 *   onChange={setPage}
 *   showInfo
 * />
 *
 * // Compacto
 * <Pagination
 *   page={1}
 *   totalPages={10}
 *   onChange={setPage}
 *   variant="compact"
 *   size="sm"
 * />
 * ```
 */
declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PaginationInfo - Componente de informações da paginação
 */
interface PaginationInfoProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Página atual */
    page: number;
    /** Total de páginas */
    totalPages: number;
    /** Total de itens */
    totalPagesItems?: number;
    /** Itens por página */
    itemsPerPage?: number;
}
declare const PaginationInfo: React.ForwardRefExoticComponent<PaginationInfoProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PaginationCompact - Paginação compacta
 */
interface PaginationCompactProps extends Omit<PaginationProps, 'showFirst' | 'showLast' | 'showInfo'> {
}
declare const PaginationCompact: React.ForwardRefExoticComponent<PaginationCompactProps & React.RefAttributes<HTMLDivElement>>;

export { Pagination, PaginationCompact, type PaginationCompactProps, PaginationInfo, type PaginationInfoProps, type PaginationProps };
