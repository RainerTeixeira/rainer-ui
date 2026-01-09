/**
 * Componente Masonry
 *
 * Layout em grade com colunas de alturas variáveis.
 * Perfeito para galerias de imagens, cards de diferentes tamanhos
 * ou conteúdo com altura dinâmica.
 *
 * @module @rainersoft/ui/components/data-display/masonry
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cn } from '../../lib/utils';

/**
 * Interface de props do Masonry
 */
export interface MasonryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Número de colunas (ou responsivo) */
  columns?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  /** Espaçamento entre itens */
  gap?: number | string;
  /** Largura mínima de cada coluna */
  minWidth?: number;
  /** Children devem ser elementos React */
  children: React.ReactNode;
}

/**
 * Hook para calcular posições dos itens no layout Masonry
 */
function useMasonryLayout(
  containerRef: React.RefObject<HTMLDivElement>,
  columns: number,
  gap: number
) {
  const [positions, setPositions] = React.useState<Array<{ top: number; left: number }>>([]);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const columnWidth = (containerWidth - gap * (columns - 1)) / columns;
    
    // Alturas atuais de cada coluna
    const columnHeights = new Array(columns).fill(0);
    const newPositions: Array<{ top: number; left: number }> = [];

    // Calcula posição para cada item filho
    const children = container.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const height = child.offsetHeight;
      
      // Encontra a coluna mais baixa
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      const top = columnHeights[shortestColumnIndex];
      const left = shortestColumnIndex * (columnWidth + gap);
      
      newPositions.push({ top, left });
      columnHeights[shortestColumnIndex] += height + gap;
    }

    setPositions(newPositions);
  }, [columns, gap]);

  return positions;
}

/**
 * Componente Masonry
 *
 * Cria um layout em grade onde os itens são posicionados
 * otimamente para minimizar espaços vazios.
 *
 * @example
 * ```tsx
 * // Masonry simples
 * <Masonry columns={3} gap={16}>
 *   {items.map(item => (
 *     <div key={item.id}>
 *       <img src={item.image} alt="" />
 *       <p>{item.title}</p>
 *     </div>
 *   ))}
 * </Masonry>
 *
 * // Masonry responsivo
 * <Masonry columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={20}>
 *   {children}
 * </Masonry>
 * ```
 */
export const Masonry = React.forwardRef<HTMLDivElement, MasonryProps>(
  (
    {
      className,
      columns = { sm: 1, md: 2, lg: 3, xl: 4 },
      gap = 16,
      children,
      ...props
    },
    ref
  ) => {
    const innerRef = React.useRef<HTMLDivElement>(null);
    const [resolvedColumns, setResolvedColumns] = React.useState(4);

    // Resolve número de colunas baseado no tamanho da tela
    React.useEffect(() => {
      const handleResize = () => {
        if (typeof columns === 'number') {
          setResolvedColumns(columns);
        } else {
          const width = window.innerWidth;
          if (width >= 1280 && columns.xl) setResolvedColumns(columns.xl);
          else if (width >= 1024 && columns.lg) setResolvedColumns(columns.lg);
          else if (width >= 768 && columns.md) setResolvedColumns(columns.md);
          else if (columns.sm) setResolvedColumns(columns.sm);
          else setResolvedColumns(1);
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [columns]);

    const gapValue = typeof gap === 'number' ? gap : parseInt(gap) || 16;
    const positions = useMasonryLayout(innerRef, resolvedColumns, gapValue);

    // Clone children com posições absolutas
    const childrenWithPositions = React.Children.toArray(children).map((child, index) => {
      if (!React.isValidElement(child)) return child;

      const position = positions[index];
      if (!position) return child;

      const containerWidth = innerRef.current?.offsetWidth || 0;
      const columnWidth = (containerWidth - gapValue * (resolvedColumns - 1)) / resolvedColumns;

      return React.cloneElement(child as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
        style: {
          ...child.props.style,
          position: 'absolute' as const,
          top: position.top,
          left: position.left,
          width: columnWidth,
          transition: 'all 0.3s ease-in-out',
        },
      });
    });

    // Calcula altura total do container
    const containerHeight = positions.reduce((max, pos, index) => {
      const child = innerRef.current?.children[index] as HTMLElement;
      if (!child) return max;
      return Math.max(max, pos.top + child.offsetHeight);
    }, 0);

    return (
      <div
        ref={ref}
        className={cn('relative', className)}
        {...props}
      >
        <div
          ref={innerRef}
          className="relative w-full"
          style={{ height: containerHeight }}
        >
          {childrenWithPositions}
        </div>
      </div>
    );
  }
);

Masonry.displayName = 'Masonry';

/**
 * MasonryItem - Item individual para o Masonry
 */
export interface MasonryItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Conteúdo do item */
  children: React.ReactNode;
}

export const MasonryItem = React.forwardRef<HTMLDivElement, MasonryItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('overflow-hidden', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

MasonryItem.displayName = 'MasonryItem';
