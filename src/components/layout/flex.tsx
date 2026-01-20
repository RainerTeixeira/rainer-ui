/**
 * Componente Flex
 *
 * Container flexbox com propriedades simplificadas.
 * Facilita o alinhamento e distribuição de elementos.
 *
 * @module @rainersoft/ui/components/layout/flex
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/tokens';

/**
 * Variantes do Flex
 */
const flexVariants = cva(
  'flex',
  {
    variants: {
      direction: {
        row: 'flex-row',
        'row-reverse': 'flex-row-reverse',
        col: 'flex-col',
        'col-reverse': 'flex-col-reverse',
      },
      wrap: {
        nowrap: 'flex-nowrap',
        wrap: 'flex-wrap',
        'wrap-reverse': 'flex-wrap-reverse',
      },
      align: {
        start: 'items-start',
        end: 'items-end',
        center: 'items-center',
        baseline: 'items-baseline',
        stretch: 'items-stretch',
      },
      justify: {
        start: 'justify-start',
        end: 'justify-end',
        center: 'justify-center',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      gap: {
        0: 'gap-0',
        1: 'gap-1',
        2: 'gap-2',
        3: 'gap-3',
        4: 'gap-4',
        5: 'gap-5',
        6: 'gap-6',
        8: 'gap-8',
        10: 'gap-10',
        12: 'gap-12',
        px: 'gap-px',
      },
      gapX: {
        0: 'gap-x-0',
        1: 'gap-x-1',
        2: 'gap-x-2',
        3: 'gap-x-3',
        4: 'gap-x-4',
        5: 'gap-x-5',
        6: 'gap-x-6',
        8: 'gap-x-8',
        10: 'gap-x-10',
        12: 'gap-x-12',
        px: 'gap-x-px',
      },
      gapY: {
        0: 'gap-y-0',
        1: 'gap-y-1',
        2: 'gap-y-2',
        3: 'gap-y-3',
        4: 'gap-y-4',
        5: 'gap-y-5',
        6: 'gap-y-6',
        8: 'gap-y-8',
        10: 'gap-y-10',
        12: 'gap-y-12',
        px: 'gap-y-px',
      },
    },
  }
);

/**
 * Props do Flex
 */
export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  /** Se deve ocupar o espaço disponível */
  full?: boolean;
  /** Se deve ter altura mínima de 100vh */
  fullHeight?: boolean;
}

/**
 * Componente Flex
 *
 * Container flexbox simplificado.
 *
 * @example
 * ```tsx
 * // Flex básico
 * <Flex gap={4} align="center">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 *
 * // Row com espaçamento
 * <Flex direction="row" justify="between" gap={2}>
 *   <div>Esquerda</div>
 *   <div>Direita</div>
 * </Flex>
 *
 * // Column centralizado
 * <Flex direction="col" align="center" gap={4}>
 *   <div>Título</div>
 *   <div>Conteúdo</div>
 * </Flex>
 *
 * // Responsive
 * <Flex direction="col" md={{ direction: 'row' }} gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 * ```
 */
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction = 'row',
      wrap = 'nowrap',
      align,
      justify,
      gap,
      gapX,
      gapY,
      full = false,
      fullHeight = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          flexVariants({
            direction,
            wrap,
            align,
            justify,
            gap,
            gapX,
            gapY,
          }),
          full && 'w-full',
          fullHeight && 'min-h-screen',
          className
        )}
        {...props}
      />
    );
  }
);

Flex.displayName = 'Flex';

/**
 * FlexCenter - Atalho para centralizar conteúdo
 */
export interface FlexCenterProps extends Omit<FlexProps, 'align' | 'justify'> {}

export const FlexCenter = React.forwardRef<HTMLDivElement, FlexCenterProps>(
  (props, ref) => {
    return (
      <Flex
        ref={ref}
        align="center"
        justify="center"
        {...props}
      />
    );
  }
);

FlexCenter.displayName = 'FlexCenter';

/**
 * FlexBetween - Atalho para distribuir entre extremidades
 */
export interface FlexBetweenProps extends Omit<FlexProps, 'justify'> {}

export const FlexBetween = React.forwardRef<HTMLDivElement, FlexBetweenProps>(
  (props, ref) => {
    return (
      <Flex
        ref={ref}
        justify="between"
        {...props}
      />
    );
  }
);

FlexBetween.displayName = 'FlexBetween';

/**
 * FlexStart - Atalho para alinhar ao início
 */
export interface FlexStartProps extends Omit<FlexProps, 'align' | 'justify'> {}

export const FlexStart = React.forwardRef<HTMLDivElement, FlexStartProps>(
  (props, ref) => {
    return (
      <Flex
        ref={ref}
        align="start"
        justify="start"
        {...props}
      />
    );
  }
);

FlexStart.displayName = 'FlexStart';

/**
 * FlexEnd - Atalho para alinhar ao fim
 */
export interface FlexEndProps extends Omit<FlexProps, 'align' | 'justify'> {}

export const FlexEnd = React.forwardRef<HTMLDivElement, FlexEndProps>(
  (props, ref) => {
    return (
      <Flex
        ref={ref}
        align="end"
        justify="end"
        {...props}
      />
    );
  }
);

FlexEnd.displayName = 'FlexEnd';

/**
 * FlexColumn - Atalho para direção coluna
 */
export interface FlexColumnProps extends Omit<FlexProps, 'direction'> {}

export const FlexColumn = React.forwardRef<HTMLDivElement, FlexColumnProps>(
  (props, ref) => {
    return (
      <Flex
        ref={ref}
        direction="col"
        {...props}
      />
    );
  }
);

FlexColumn.displayName = 'FlexColumn';

/**
 * FlexRow - Atalho para direção linha
 */
export interface FlexRowProps extends Omit<FlexProps, 'direction'> {}

export const FlexRow = React.forwardRef<HTMLDivElement, FlexRowProps>(
  (props, ref) => {
    return (
      <Flex
        ref={ref}
        direction="row"
        {...props}
      />
    );
  }
);

FlexRow.displayName = 'FlexRow';
