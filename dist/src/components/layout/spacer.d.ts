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
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do Spacer
 */
declare const spacerVariants: (props?: {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    direction?: "both" | "horizontal" | "vertical";
    variant?: "default" | "line" | "dotted" | "gradient";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Spacer
 */
export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof spacerVariants> {
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
export declare const Spacer: React.ForwardRefExoticComponent<SpacerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * VerticalSpacer - Atalho para espaçador vertical
 */
export interface VerticalSpacerProps extends Omit<SpacerProps, 'direction'> {
}
export declare const VerticalSpacer: React.ForwardRefExoticComponent<VerticalSpacerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * HorizontalSpacer - Atalho para espaçador horizontal
 */
export interface HorizontalSpacerProps extends Omit<SpacerProps, 'direction'> {
}
export declare const HorizontalSpacer: React.ForwardRefExoticComponent<HorizontalSpacerProps & React.RefAttributes<HTMLDivElement>>;
export {};
