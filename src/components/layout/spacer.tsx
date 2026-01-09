/**
 * Componente Spacer
 *
 * Espaçador flexível que ocupa o espaço disponível.
 * Útil para criar separações e empurrar elementos.
 *
 * @module @rainersoft/ui/components/layout/spacer
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

/**
 * Variantes do Spacer
 */
const spacerVariants = cva(
  '',
  {
    variants: {
      size: {
        xs: 'h-2 w-2',
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-10 w-10',
        '2xl': 'h-12 w-12',
        '3xl': 'h-16 w-16',
        '4xl': 'h-20 w-20',
      },
      direction: {
        horizontal: 'flex-1 h-px',
        vertical: 'w-px flex-1',
        both: 'flex-1',
      },
      variant: {
        default: 'bg-transparent',
        line: 'bg-border',
        dotted: 'bg-transparent border-dashed',
        gradient: 'bg-gradient-to-r from-transparent via-border to-transparent',
      },
    },
    defaultVariants: {
      size: 'md',
      direction: 'both',
      variant: 'default',
    },
  }
);

/**
 * Props do Spacer
 */
export interface SpacerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spacerVariants> {
  /** Largura customizada */
  width?: string | number;
  /** Altura customizada */
  height?: string | number;
  /** Se é flexível (ocupa espaço disponível) */
  flex?: boolean;
  /** Se deve ser invisível (apenas ocupar espaço) */
  invisible?: boolean;
}

/**
 * Componente Spacer
 *
 * Espaçador flexível.
 *
 * @example
 * ```tsx
 * // Spacer flexível horizontal
 * <Flex>
 *   <div>Esquerda</div>
 *   <Spacer />
 *   <div>Direita</div>
 * </Flex>
 *
 * // Spacer com tamanho fixo
 * <Spacer size="lg" />
 *
 * // Linha divisória
 * <Spacer variant="line" direction="horizontal" />
 *
 * // Spacer vertical
 * <FlexColumn>
 *   <div>Topo</div>
 *   <Spacer direction="vertical" />
 *   <div>Base</div>
 * </FlexColumn>
 *
 * // Customizado
 * <Spacer width="100px" height="2px" variant="line" />
 * ```
 */
export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  (
    {
      className,
      size = 'md',
      direction = 'both',
      variant = 'default',
      width,
      height,
      flex = true,
      invisible = false,
      style,
      ...props
    },
    ref
  ) => {
    const spacerStyle = React.useMemo(() => {
      const customStyle: React.CSSProperties = { ...style };
      
      if (width !== undefined) {
        customStyle.width = typeof width === 'number' ? `${width}px` : width;
      }
      
      if (height !== undefined) {
        customStyle.height = typeof height === 'number' ? `${height}px` : height;
      }
      
      if (flex) {
        customStyle.flex = '1';
      }
      
      if (invisible) {
        customStyle.visibility = 'hidden';
      }
      
      return customStyle;
    }, [style, width, height, flex, invisible]);

    return (
      <div
        ref={ref}
        className={cn(
          spacerVariants({ size, direction, variant }),
          !flex && 'flex-none',
          variant === 'dotted' && 'border-b border-border',
          className
        )}
        style={spacerStyle}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

Spacer.displayName = 'Spacer';

/**
 * VerticalSpacer - Atalho para espaçador vertical
 */
export interface VerticalSpacerProps extends Omit<SpacerProps, 'direction'> {}

export const VerticalSpacer = React.forwardRef<HTMLDivElement, VerticalSpacerProps>(
  (props, ref) => {
    return (
      <Spacer
        ref={ref}
        direction="vertical"
        {...props}
      />
    );
  }
);

VerticalSpacer.displayName = 'VerticalSpacer';

/**
 * HorizontalSpacer - Atalho para espaçador horizontal
 */
export interface HorizontalSpacerProps extends Omit<SpacerProps, 'direction'> {}

export const HorizontalSpacer = React.forwardRef<HTMLDivElement, HorizontalSpacerProps>(
  (props, ref) => {
    return (
      <Spacer
        ref={ref}
        direction="horizontal"
        {...props}
      />
    );
  }
);

HorizontalSpacer.displayName = 'HorizontalSpacer';
