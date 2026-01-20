/**
 * Componente Pagination
 *
 * Sistema de paginação com navegação.
 * Suporta página atual, totalPages e callbacks de navegação.
 *
 * @module @rainersoft/ui/components/navigation/pagination
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import MoreHorizontal from 'lucide-react/dist/esm/icons/more-horizontal';

import { Button } from '../ui/button';
import { cn } from '../../lib/tokens';

/**
 * Variantes do Pagination
 */
const paginationVariants = cva(
  'flex items-center gap-1',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      variant: {
        default: '',
        compact: 'gap-0.5',
        spaced: 'gap-2',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

/**
 * Props do Pagination
 */
export interface PaginationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof paginationVariants> {
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
 * Gera range de páginas
 */
function generateRange(page: number, totalPages: number, siblingCount: number): (number | '...')[] {
  const range: (number | '...')[] = [];
  
  // Sempre inclui a primeira página
  range.push(1);
  
  // Calcula o início e fim do range central
  let start = Math.max(2, page - siblingCount);
  let end = Math.min(totalPages - 1, page + siblingCount);
  
  // Ajusta se estiver muito no início
  if (start <= 3) {
    end = Math.min(totalPages - 1, 2 + siblingCount * 2);
  }
  
  // Ajusta se estiver muito no fim
  if (end >= totalPages - 2) {
    start = Math.max(2, totalPages - 2 - siblingCount * 2);
  }
  
  // Adiciona elipse se necessário
  if (start > 2) {
    range.push('...');
  }
  
  // Adiciona páginas do range central
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  
  // Adiciona elipse se necessário
  if (end < totalPages - 1) {
    range.push('...');
  }
  
  // Adiciona a última página (se não for a primeira)
  if (totalPages > 1) {
    range.push(totalPages);
  }
  
  return range;
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
export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      page,
      totalPages,
      onChange,
      onPrevious,
      onNext,
      showFirst = true,
      showLast = true,
      showInfo = false,
      disabled = false,
      siblingCount = 1,
      ...props
    },
    ref
  ) => {
    // Gera páginas a serem exibidas
    const pages = React.useMemo(() => {
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
      return generateRange(page, totalPages, siblingCount);
    }, [page, totalPages, siblingCount]);

    // Manipuladores de navegação
    const handlePrevious = React.useCallback(() => {
      if (page > 1) {
        onPrevious?.();
        onChange?.(page - 1);
      }
    }, [page, onChange, onPrevious]);

    const handleNext = React.useCallback(() => {
      if (page < totalPages) {
        onNext?.();
        onChange?.(page + 1);
      }
    }, [page, totalPages, onChange, onNext]);

    const handlePageClick = React.useCallback((page: number) => {
      onChange?.(page);
    }, [onChange]);

    const handleFirst = React.useCallback(() => {
      onChange?.(1);
    }, [onChange]);

    const handleLast = React.useCallback(() => {
      onChange?.(totalPages);
    }, [onChange, totalPages]);

    // Classes de tamanho
    const sizeClasses = {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
    };

    return (
      <nav
        ref={ref}
        className={cn(paginationVariants({ size, variant }), className)}
        {...props}
      >
        {/* Botão primeira página */}
        {showFirst && totalPages > 1 && (
          <Button
            variant="outline"
            size="sm"
            className={cn(sizeClasses[size], 'p-0')}
            onClick={handleFirst}
            disabled={disabled || page === 1}
          >
            <span className="sr-only">Primeira página</span>
            <ChevronLeft className="h-4 w-4" />
            <ChevronLeft className="h-4 w-4 -ml-3" />
          </Button>
        )}

        {/* Botão anterior */}
        <Button
          variant="outline"
          size="sm"
          className={cn(sizeClasses[size], 'p-0')}
          onClick={handlePrevious}
          disabled={disabled || page === 1}
        >
          <span className="sr-only">Página anterior</span>
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Páginas */}
        <div className="flex items-center gap-1">
          {pages.map((page, index) => {
            if (page === '...') {
              return (
                <div
                  key={`ellipsis-${index}`}
                  className={cn(
                    'flex items-center justify-center',
                    sizeClasses[size]
                  )}
                >
                  <MoreHorizontal className="h-4 w-4" />
                </div>
              );
            }

            return (
              <Button
                key={page}
                variant={page === page ? 'default' : 'outline'}
                size="sm"
                className={cn(sizeClasses[size], 'p-0')}
                onClick={() => handlePageClick(page as number)}
                disabled={disabled}
              >
                {page}
              </Button>
            );
          })}
        </div>

        {/* Botão próxima */}
        <Button
          variant="outline"
          size="sm"
          className={cn(sizeClasses[size], 'p-0')}
          onClick={handleNext}
          disabled={disabled || page === totalPages}
        >
          <span className="sr-only">Próxima página</span>
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Botão última página */}
        {showLast && totalPages > 1 && (
          <Button
            variant="outline"
            size="sm"
            className={cn(sizeClasses[size], 'p-0')}
            onClick={handleLast}
            disabled={disabled || page === totalPages}
          >
            <span className="sr-only">Última página</span>
            <ChevronRight className="h-4 w-4" />
            <ChevronRight className="h-4 w-4 -ml-3" />
          </Button>
        )}

        {/* Informações */}
        {showInfo && (
          <div className="ml-4 text-sm text-muted-foreground">
            Página {page} de {totalPages}
          </div>
        )}
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';

/**
 * PaginationInfo - Componente de informações da paginação
 */
export interface PaginationInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Página atual */
  page: number;
  /** Total de páginas */
  totalPages: number;
  /** Total de itens */
  totalPagesItems?: number;
  /** Itens por página */
  itemsPerPage?: number;
}

export const PaginationInfo = React.forwardRef<HTMLDivElement, PaginationInfoProps>(
  (
    {
      className,
      page,
      totalPages,
      totalPagesItems,
      itemsPerPage,
      ...props
    },
    ref
  ) => {
    const startItem = totalPagesItems ? (page - 1) * (itemsPerPage || 10) + 1 : 0;
    const endItem = totalPagesItems ? Math.min(page * (itemsPerPage || 10), totalPagesItems) : 0;

    return (
      <div
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
      >
        {totalPagesItems ? (
          <>
            Mostrando {startItem} a {endItem} de {totalPagesItems} itens
          </>
        ) : (
          <>
            Página {page} de {totalPages}
          </>
        )}
      </div>
    );
  }
);

PaginationInfo.displayName = 'PaginationInfo';

/**
 * PaginationCompact - Paginação compacta
 */
export interface PaginationCompactProps extends Omit<PaginationProps, 'showFirst' | 'showLast' | 'showInfo'> {}

export const PaginationCompact = React.forwardRef<HTMLDivElement, PaginationCompactProps>(
  (props, ref) => {
    return (
      <Pagination
        ref={ref}
        showFirst={false}
        showLast={false}
        showInfo={false}
        variant="compact"
        {...props}
      />
    );
  }
);

PaginationCompact.displayName = 'PaginationCompact';
