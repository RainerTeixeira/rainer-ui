import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Flex
 */
declare const flexVariants: (props?: {
    direction?: "col" | "row" | "row-reverse" | "col-reverse";
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    align?: "center" | "end" | "start" | "baseline" | "stretch";
    justify?: "center" | "end" | "start" | "between" | "around" | "evenly";
    gap?: 0 | 5 | 1 | 10 | 2 | 4 | 6 | 3 | 12 | 8 | "px";
    gapX?: 0 | 5 | 1 | 10 | 2 | 4 | 6 | 3 | 12 | 8 | "px";
    gapY?: 0 | 5 | 1 | 10 | 2 | 4 | 6 | 3 | 12 | 8 | "px";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Flex
 */
interface FlexProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof flexVariants> {
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
declare const Flex: React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLDivElement>>;
/**
 * FlexCenter - Atalho para centralizar conteúdo
 */
interface FlexCenterProps extends Omit<FlexProps, 'align' | 'justify'> {
}
declare const FlexCenter: React.ForwardRefExoticComponent<FlexCenterProps & React.RefAttributes<HTMLDivElement>>;
/**
 * FlexBetween - Atalho para distribuir entre extremidades
 */
interface FlexBetweenProps extends Omit<FlexProps, 'justify'> {
}
declare const FlexBetween: React.ForwardRefExoticComponent<FlexBetweenProps & React.RefAttributes<HTMLDivElement>>;
/**
 * FlexStart - Atalho para alinhar ao início
 */
interface FlexStartProps extends Omit<FlexProps, 'align' | 'justify'> {
}
declare const FlexStart: React.ForwardRefExoticComponent<FlexStartProps & React.RefAttributes<HTMLDivElement>>;
/**
 * FlexEnd - Atalho para alinhar ao fim
 */
interface FlexEndProps extends Omit<FlexProps, 'align' | 'justify'> {
}
declare const FlexEnd: React.ForwardRefExoticComponent<FlexEndProps & React.RefAttributes<HTMLDivElement>>;
/**
 * FlexColumn - Atalho para direção coluna
 */
interface FlexColumnProps extends Omit<FlexProps, 'direction'> {
}
declare const FlexColumn: React.ForwardRefExoticComponent<FlexColumnProps & React.RefAttributes<HTMLDivElement>>;
/**
 * FlexRow - Atalho para direção linha
 */
interface FlexRowProps extends Omit<FlexProps, 'direction'> {
}
declare const FlexRow: React.ForwardRefExoticComponent<FlexRowProps & React.RefAttributes<HTMLDivElement>>;

export { Flex, FlexBetween, type FlexBetweenProps, FlexCenter, type FlexCenterProps, FlexColumn, type FlexColumnProps, FlexEnd, type FlexEndProps, type FlexProps, FlexRow, type FlexRowProps, FlexStart, type FlexStartProps };
