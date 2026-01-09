/**
 * Componente Center
 *
 * Container para centralizar conteúdo.
 * Suporta centralização horizontal e vertical.
 *
 * @module @rainersoft/ui/components/utilities/center
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

/**
 * Variantes do Center
 */
const centerVariants = cva(
  'flex',
  {
    variants: {
      direction: {
        both: 'items-center justify-center',
        horizontal: 'justify-center',
        vertical: 'items-center',
      },
      inline: {
        true: 'inline-flex',
        false: 'flex',
      },
    },
    defaultVariants: {
      direction: 'both',
      inline: false,
    },
  }
);

/**
 * Props do Center
 */
export interface CenterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof centerVariants> {
  /** Se deve ocupar toda altura */
  fullHeight?: boolean;
  /** Se deve ocupar toda largura */
  fullWidth?: boolean;
  /** Espaçamento interno */
  padding?: string | number;
  /** Espaçamento mínimo */
  minSize?: string | number;
}

/**
 * Componente Center
 *
 * Container para centralizar conteúdo.
 *
 * @example
 * ```tsx
 * // Centraliza ambos
 * <Center>
 *   <div>Conteúdo centralizado</div>
 * </Center>
 *
 * // Apenas horizontal
 * <Center direction="horizontal">
 *   <div>Centralizado horizontalmente</div>
 * </Center>
 *
 * // Apenas vertical
 * <Center direction="vertical" className="h-screen">
 *   <div>Centralizado verticalmente</div>
 * </Center>
 *
 * // Com altura total
 * <Center fullHeight>
 *   <div>Ocupa toda altura</div>
 * </Center>
 *
 * // Inline
 * <Center inline>
 *   <span>Inline centralizado</span>
 * </Center>
 * ```
 */
export const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  (
    {
      className,
      direction = 'both',
      inline = false,
      fullHeight = false,
      fullWidth = false,
      padding,
      minSize,
      style,
      children,
      ...props
    },
    ref
  ) => {
    // Calcula estilo
    const centerStyle = React.useMemo(() => {
      const customStyle: React.CSSProperties = { ...style };
      
      if (padding !== undefined) {
        customStyle.padding = typeof padding === 'number' ? `${padding}px` : padding;
      }
      
      if (minSize !== undefined) {
        customStyle.minWidth = typeof minSize === 'number' ? `${minSize}px` : minSize;
        customStyle.minHeight = typeof minSize === 'number' ? `${minSize}px` : minSize;
      }
      
      return customStyle;
    }, [style, padding, minSize]);

    return (
      <div
        ref={ref}
        className={cn(
          centerVariants({ direction, inline }),
          fullHeight && 'min-h-screen',
          fullWidth && 'w-full',
          className
        )}
        style={centerStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Center.displayName = 'Center';

/**
 * CenterInline - Atalho para center inline
 */
export interface CenterInlineProps extends Omit<CenterProps, 'inline'> {}

export const CenterInline = React.forwardRef<HTMLDivElement, CenterInlineProps>(
  (props, ref) => {
    return (
      <Center
        ref={ref}
        inline
        {...props}
      />
    );
  }
);

CenterInline.displayName = 'CenterInline';

/**
 * CenterScreen - Centraliza na tela
 */
export interface CenterScreenProps extends Omit<CenterProps, 'fullHeight' | 'fullWidth'> {}

export const CenterScreen = React.forwardRef<HTMLDivElement, CenterScreenProps>(
  (props, ref) => {
    return (
      <Center
        ref={ref}
        fullHeight
        fullWidth
        direction="both"
        {...props}
      />
    );
  }
);

CenterScreen.displayName = 'CenterScreen';

/**
 * CenterText - Centraliza texto
 */
export interface CenterTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Alinhamento do texto */
  align?: 'center' | 'start' | 'end';
}

export const CenterText = React.forwardRef<HTMLDivElement, CenterTextProps>(
  (
    {
      className,
      align = 'center',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('text-center', className)}
        style={{ textAlign: align }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CenterText.displayName = 'CenterText';
