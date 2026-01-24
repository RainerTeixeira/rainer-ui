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
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do Center
 */
declare const centerVariants: (props?: {
    direction?: "both" | "horizontal" | "vertical";
    inline?: boolean;
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Center
 */
export interface CenterProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof centerVariants> {
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
export declare const Center: React.ForwardRefExoticComponent<CenterProps & React.RefAttributes<HTMLDivElement>>;
/**
 * CenterInline - Atalho para center inline
 */
export interface CenterInlineProps extends Omit<CenterProps, 'inline'> {
}
export declare const CenterInline: React.ForwardRefExoticComponent<CenterInlineProps & React.RefAttributes<HTMLDivElement>>;
/**
 * CenterScreen - Centraliza na tela
 */
export interface CenterScreenProps extends Omit<CenterProps, 'fullHeight' | 'fullWidth'> {
}
export declare const CenterScreen: React.ForwardRefExoticComponent<CenterScreenProps & React.RefAttributes<HTMLDivElement>>;
/**
 * CenterText - Centraliza texto
 */
export interface CenterTextProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Alinhamento do texto */
    align?: 'center' | 'start' | 'end';
}
export declare const CenterText: React.ForwardRefExoticComponent<CenterTextProps & React.RefAttributes<HTMLDivElement>>;
export {};
