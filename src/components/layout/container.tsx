/**
 * Componente Container
 *
 * Container responsivo com larguras máximas predefinidas.
 * Centraliza o conteúdo e gerencia espaçamentos.
 *
 * @module @rainersoft/ui/components/layout/container
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

/**
 * Variantes do Container
 */
const containerVariants = cva(
  'mx-auto px-4 sm:px-6 lg:px-8',
  {
    variants: {
      size: {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl',
        full: 'max-w-full',
        screen: 'max-w-screen-xl',
        none: '',
      },
      padding: {
        none: 'px-0',
        sm: 'px-2 sm:px-4',
        md: 'px-4 sm:px-6 lg:px-8',
        lg: 'px-6 sm:px-8 lg:px-12',
        xl: 'px-8 sm:px-12 lg:px-16',
      },
      center: {
        true: 'flex items-center justify-center',
        false: '',
      },
    },
    defaultVariants: {
      size: '7xl',
      padding: 'md',
      center: false,
    },
  }
);

/**
 * Props do Container
 */
export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  /** Se deve ter altura mínima de 100vh */
  fullHeight?: boolean;
  /** Se deve ter padding vertical */
  verticalPadding?: boolean;
}

/**
 * Componente Container
 *
 * Container responsivo para centralizar conteúdo.
 *
 * @example
 * ```tsx
 * // Básico
 * <Container>
 *   <div>Conteúdo centralizado</div>
 * </Container>
 *
 * // Tamanho customizado
 * <Container size="4xl">
 *   <div>Conteúdo com largura máxima</div>
 * </Container>
 *
 * // Com altura total
 * <Container fullHeight verticalPadding>
 *   <div>Conteúdo centralizado verticalmente</div>
 * </Container>
 *
 * // Sem padding
 * <Container size="full" padding="none">
 *   <div>Conteúdo ocupa toda largura</div>
 * </Container>
 * ```
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      size = '7xl',
      padding = 'md',
      center = false,
      fullHeight = false,
      verticalPadding = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          containerVariants({ size, padding, center }),
          fullHeight && 'min-h-screen',
          verticalPadding && 'py-4 sm:py-6 lg:py-8',
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

/**
 * ContainerFluid - Container que ocupa toda largura
 */
export interface ContainerFluidProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Padding horizontal */
  padding?: VariantProps<typeof containerVariants>['padding'];
  /** Se deve ter padding vertical */
  verticalPadding?: boolean;
}

export const ContainerFluid = React.forwardRef<HTMLDivElement, ContainerFluidProps>(
  (
    {
      className,
      padding = 'md',
      verticalPadding = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          padding === 'none' && 'px-0',
          padding === 'sm' && 'px-2 sm:px-4',
          padding === 'md' && 'px-4 sm:px-6 lg:px-8',
          padding === 'lg' && 'px-6 sm:px-8 lg:px-12',
          padding === 'xl' && 'px-8 sm:px-12 lg:px-16',
          verticalPadding && 'py-4 sm:py-6 lg:py-8',
          className
        )}
        {...props}
      />
    );
  }
);

ContainerFluid.displayName = 'ContainerFluid';

/**
 * ContainerSection - Container para seções com espaçamento
 */
export interface ContainerSectionProps extends ContainerProps {
  /** Espaçamento vertical */
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const spacingClasses = {
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
  xl: 'py-20',
  '2xl': 'py-24',
} as const;

export const ContainerSection = React.forwardRef<HTMLDivElement, ContainerSectionProps>(
  (
    {
      className,
      spacing = 'lg',
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          'w-full',
          spacingClasses[spacing],
          className
        )}
      >
        <Container {...props} />
      </section>
    );
  }
);

ContainerSection.displayName = 'ContainerSection';
