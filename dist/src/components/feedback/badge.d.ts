/**
 * Componente Badge (Etiqueta/Tag)
 *
 * Pequenos elementos visuais para destacar informações, categorias,
 * status ou tags. Renderizado como pill (bordas totalmente arredondadas).
 *
 * Variantes disponíveis:
 * - default: badge primário (cor primária)
 * - secondary: badge secundário (cor secundária)
 * - destructive: badge para status negativos/erros
 * - outline: badge apenas com borda
 *
 * @fileoverview Componente de badge/etiqueta reutilizável
 * @author Rainer Teixeira
 * @version 1.0.0
 * @since 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do badge usando CVA
 *
 * Define classes base e variantes para diferentes estilos.
 *
 * Classes base:
 * - inline-flex: layout flex inline
 * - items-center: centralização vertical
 * - rounded-full: bordas totalmente arredondadas (pill)
 * - border: borda de 1px
 * - px-2.5 py-0.5: padding pequeno
 * - text-xs: texto pequeno
 * - font-semibold: negrito
 * - transition-colors: transições suaves de cor
 * - focus:ring: anel de foco para acessibilidade
 *
 * @constant
 * @type {Function}
 */
declare const badgeVariants: (props?: {
    variant?: "secondary" | "default" | "destructive" | "outline";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Interface de props do Badge
 * Extende HTMLAttributes do div e inclui variantes do CVA
 *
 * @interface BadgeProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 * @extends VariantProps<typeof badgeVariants>
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
/**
 * Componente Badge
 *
 * Renderiza uma etiqueta/tag pequena para destacar informações.
 * Ideal para status, categorias, contadores ou labels.
 *
 * @param {BadgeProps} props - Propriedades do componente
 * @param {string} [props.variant="default"] - Variante de estilo
 * @param {string} [props.className] - Classes CSS adicionais
 * @returns {JSX.Element} Badge estilizado
 *
 * @example
 * // Badge simples
 * <Badge>Novo</Badge>
 *
 * @example
 * // Badge secundário com ícone
 * <Badge variant="secondary">
 *   <Star className="w-3 h-3 mr-1" />
 *   Popular
 * </Badge>
 *
 * @example
 * // Badge destrutivo
 * <Badge variant="destructive">Erro</Badge>
 */
declare function Badge({ className, variant, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };
