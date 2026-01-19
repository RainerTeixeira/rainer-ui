import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Spacer
 */
declare const spacerVariants: (props?: {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    direction?: "horizontal" | "vertical" | "both";
    variant?: "default" | "line" | "dotted" | "gradient";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Spacer
 */
interface SpacerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof spacerVariants> {
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
declare const Spacer: React.ForwardRefExoticComponent<SpacerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * VerticalSpacer - Atalho para espaçador vertical
 */
interface VerticalSpacerProps extends Omit<SpacerProps, 'direction'> {
}
declare const VerticalSpacer: React.ForwardRefExoticComponent<VerticalSpacerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * HorizontalSpacer - Atalho para espaçador horizontal
 */
interface HorizontalSpacerProps extends Omit<SpacerProps, 'direction'> {
}
declare const HorizontalSpacer: React.ForwardRefExoticComponent<HorizontalSpacerProps & React.RefAttributes<HTMLDivElement>>;

export { HorizontalSpacer, type HorizontalSpacerProps, Spacer, type SpacerProps, VerticalSpacer, type VerticalSpacerProps };
