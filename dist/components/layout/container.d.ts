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
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do Container
 */
declare const containerVariants: (props?: {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "none" | "4xl" | "5xl" | "6xl" | "7xl" | "full" | "screen";
    padding?: "sm" | "md" | "lg" | "xl" | "none";
    center?: boolean;
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Container
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
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
export declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * ContainerFluid - Container que ocupa toda largura
 */
export interface ContainerFluidProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Padding horizontal */
    padding?: VariantProps<typeof containerVariants>['padding'];
    /** Se deve ter padding vertical */
    verticalPadding?: boolean;
}
export declare const ContainerFluid: React.ForwardRefExoticComponent<ContainerFluidProps & React.RefAttributes<HTMLDivElement>>;
/**
 * ContainerSection - Container para seções com espaçamento
 */
export interface ContainerSectionProps extends ContainerProps {
    /** Espaçamento vertical */
    spacing?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
export declare const ContainerSection: React.ForwardRefExoticComponent<ContainerSectionProps & React.RefAttributes<HTMLDivElement>>;
export {};
