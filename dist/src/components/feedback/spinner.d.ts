/**
 * Componente Spinner
 *
 * Indicador de carregamento circular animado.
 * Suporta múltiplos tamanhos, cores e variantes visuais.
 *
 * @module @rainersoft/ui/components/feedback/spinner
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do Spinner
 */
declare const spinnerVariants: (props?: {
    variant?: "success" | "warning" | "primary" | "secondary" | "default" | "destructive" | "glow" | "pulse" | "dots";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Spinner
 */
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof spinnerVariants> {
    /** Label para acessibilidade */
    label?: string;
    /** Se deve mostrar o label */
    showLabel?: boolean;
    /** Posição do label em relação ao spinner */
    labelPosition?: 'top' | 'bottom' | 'left' | 'right';
    /** Ícone customizado */
    icon?: React.ReactNode;
    /** Velocidade da animação */
    speed?: 'slow' | 'normal' | 'fast';
}
/**
 * Componente Spinner
 *
 * Indicador de carregamento circular animado.
 *
 * @example
 * ```tsx
 * // Spinner básico
 * <Spinner />
 *
 * // Com tamanho e cor customizados
 * <Spinner size="lg" variant="primary" />
 *
 * // Com label
 * <Spinner label="Carregando..." showLabel />
 *
 * // Com ícone customizado
 * <Spinner icon={<CustomIcon />} variant="glow" />
 *
 * // Animação de dots
 * <Spinner variant="dots" size="sm" />
 * ```
 */
export declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * SpinnerOverlay - Spinner com overlay de fundo
 */
export interface SpinnerOverlayProps extends Omit<SpinnerProps, 'showLabel'> {
    /** Se o overlay deve cobrir toda a tela */
    fullscreen?: boolean;
    /** Cor de fundo do overlay */
    overlayColor?: string;
    /** Opacidade do overlay */
    opacity?: number;
}
export declare const SpinnerOverlay: React.ForwardRefExoticComponent<SpinnerOverlayProps & React.RefAttributes<HTMLDivElement>>;
/**
 * DotsSpinner - Spinner com pontos animados
 */
export interface DotsSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Número de pontos */
    count?: number;
    /** Tamanho dos pontos */
    size?: 'sm' | 'md' | 'lg';
    /** Cor dos pontos */
    color?: string;
    /** Label */
    label?: string;
}
export declare const DotsSpinner: React.ForwardRefExoticComponent<DotsSpinnerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PulseSpinner - Spinner com efeito de pulso
 */
export interface PulseSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Número de círculos concêntricos */
    rings?: number;
    /** Tamanho */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** Cor */
    color?: string;
}
export declare const PulseSpinner: React.ForwardRefExoticComponent<PulseSpinnerProps & React.RefAttributes<HTMLDivElement>>;
export {};
