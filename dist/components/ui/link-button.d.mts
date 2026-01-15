import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do LinkButton
 */
declare const linkButtonVariants: (props?: {
    variant?: "default" | "success" | "warning" | "info" | "destructive" | "outline" | "ghost" | "neon" | "muted" | "pill";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    weight?: "bold" | "normal" | "medium" | "semibold";
    animation?: "none" | "scale" | "glow" | "bounce" | "slide";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do LinkButton
 */
interface LinkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof linkButtonVariants> {
    /** Se desabilita o sublinhado */
    noUnderline?: boolean;
    /** Ícone à esquerda */
    leftIcon?: React.ReactNode;
    /** Ícone à direita */
    rightIcon?: React.ReactNode;
    /** Se é um link verdadeiro */
    href?: string;
    /** Target do link */
    target?: string;
    /** Estado de loading */
    loading?: boolean;
    /** Ícone de loading */
    loadingIcon?: React.ReactNode;
}
/**
 * Componente LinkButton
 *
 * Botão com comportamento de link com suporte a:
 * - Múltiplas variantes visuais
 * - Diferentes pesos e tamanhos
 * - Ícones posicionais
 * - Comportamento de link ou botão
 * - Estado de loading
 * - Animações customizáveis
 *
 * @example
 * ```tsx
 * // Básico
 * <LinkButton onClick={handleClick}>
 *   Clique aqui
 * </LinkButton>
 *
 * // Com variantes
 * <LinkButton
 *   variant="pill"
 *   size="sm"
 *   weight="semibold"
 *   leftIcon={<Plus />}
 * >
 *   Adicionar Item
 * </LinkButton>
 *
 * // Link verdadeiro
 * <LinkButton
 *   href="https://example.com"
 *   target="_blank"
 *   variant="info"
 *   rightIcon={<ExternalLink />}
 * >
 *   Abrir site
 * </LinkButton>
 *
 * // Com loading
 * <LinkButton
 *   loading
 *   loadingIcon={<Spinner />}
 *   variant="success"
 * >
 *   Processando...
 * </LinkButton>
 * ```
 */
declare const LinkButton: React.ForwardRefExoticComponent<LinkButtonProps & React.RefAttributes<HTMLButtonElement>>;

export { LinkButton, type LinkButtonProps };
