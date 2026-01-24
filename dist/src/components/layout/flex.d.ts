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
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do Flex
 */
declare const flexVariants: (props?: {
    direction?: "row" | "col" | "row-reverse" | "col-reverse";
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    align?: "center" | "end" | "start" | "baseline" | "stretch";
    justify?: "center" | "end" | "start" | "between" | "around" | "evenly";
    gap?: 0 | 2 | 1 | 4 | 6 | 5 | 3 | 8 | 10 | 12 | "px";
    gapX?: 0 | 2 | 1 | 4 | 6 | 5 | 3 | 8 | 10 | 12 | "px";
    gapY?: 0 | 2 | 1 | 4 | 6 | 5 | 3 | 8 | 10 | 12 | "px";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Flex
 */
export interface FlexProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof flexVariants> {
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
export declare const Flex: React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLDivElement>>;
/**
 * FlexCenter - Atalho para centralizar conteúdo
 */
export interface FlexCenterProps extends Omit<FlexProps, 'align' | 'justify'> {
}
export declare const FlexCenter: React.ForwardRefExoticComponent<FlexCenterProps & React.RefAttributes<HTMLDivElement>>;
/**
 * FlexBetween - Atalho para distribuir entre extremidades
 */
export interface FlexBetweenProps extends Omit<FlexProps, 'justify'> {
}
export declare const FlexBetween: React.ForwardRefExoticComponent<FlexBetweenProps & React.RefAttributes<HTMLDivElement>>;
/**
 * FlexStart - Atalho para alinhar ao início
 */
export interface FlexStartProps extends Omit<FlexProps, 'align' | 'justify'> {
}
export declare const FlexStart: React.ForwardRefExoticComponent<FlexStartProps & React.RefAttributes<HTMLDivElement>>;
/**
 * FlexEnd - Atalho para alinhar ao fim
 */
export interface FlexEndProps extends Omit<FlexProps, 'align' | 'justify'> {
}
export declare const FlexEnd: React.ForwardRefExoticComponent<FlexEndProps & React.RefAttributes<HTMLDivElement>>;
/**
 * FlexColumn - Atalho para direção coluna
 */
export interface FlexColumnProps extends Omit<FlexProps, 'direction'> {
}
export declare const FlexColumn: React.ForwardRefExoticComponent<FlexColumnProps & React.RefAttributes<HTMLDivElement>>;
/**
 * FlexRow - Atalho para direção linha
 */
export interface FlexRowProps extends Omit<FlexProps, 'direction'> {
}
export declare const FlexRow: React.ForwardRefExoticComponent<FlexRowProps & React.RefAttributes<HTMLDivElement>>;
export {};
