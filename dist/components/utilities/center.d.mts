import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Center
 */
declare const centerVariants: (props?: {
    direction?: "horizontal" | "vertical" | "both";
    inline?: boolean;
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Center
 */
interface CenterProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof centerVariants> {
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
declare const Center: React.ForwardRefExoticComponent<CenterProps & React.RefAttributes<HTMLDivElement>>;
/**
 * CenterInline - Atalho para center inline
 */
interface CenterInlineProps extends Omit<CenterProps, 'inline'> {
}
declare const CenterInline: React.ForwardRefExoticComponent<CenterInlineProps & React.RefAttributes<HTMLDivElement>>;
/**
 * CenterScreen - Centraliza na tela
 */
interface CenterScreenProps extends Omit<CenterProps, 'fullHeight' | 'fullWidth'> {
}
declare const CenterScreen: React.ForwardRefExoticComponent<CenterScreenProps & React.RefAttributes<HTMLDivElement>>;
/**
 * CenterText - Centraliza texto
 */
interface CenterTextProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Alinhamento do texto */
    align?: 'center' | 'start' | 'end';
}
declare const CenterText: React.ForwardRefExoticComponent<CenterTextProps & React.RefAttributes<HTMLDivElement>>;

export { Center, CenterInline, type CenterInlineProps, type CenterProps, CenterScreen, type CenterScreenProps, CenterText, type CenterTextProps };
