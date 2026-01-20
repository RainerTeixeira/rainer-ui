import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Spinner
 */
declare const spinnerVariants: (props?: {
    variant?: "default" | "success" | "warning" | "primary" | "secondary" | "destructive" | "glow" | "pulse" | "dots";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Spinner
 */
interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof spinnerVariants> {
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
declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * SpinnerOverlay - Spinner com overlay de fundo
 */
interface SpinnerOverlayProps extends Omit<SpinnerProps, 'showLabel'> {
    /** Se o overlay deve cobrir toda a tela */
    fullscreen?: boolean;
    /** Cor de fundo do overlay */
    overlayColor?: string;
    /** Opacidade do overlay */
    opacity?: number;
}
declare const SpinnerOverlay: React.ForwardRefExoticComponent<SpinnerOverlayProps & React.RefAttributes<HTMLDivElement>>;
/**
 * DotsSpinner - Spinner com pontos animados
 */
interface DotsSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Número de pontos */
    count?: number;
    /** Tamanho dos pontos */
    size?: 'sm' | 'md' | 'lg';
    /** Cor dos pontos */
    color?: string;
    /** Label */
    label?: string;
}
declare const DotsSpinner: React.ForwardRefExoticComponent<DotsSpinnerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PulseSpinner - Spinner com efeito de pulso
 */
interface PulseSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Número de círculos concêntricos */
    rings?: number;
    /** Tamanho */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** Cor */
    color?: string;
}
declare const PulseSpinner: React.ForwardRefExoticComponent<PulseSpinnerProps & React.RefAttributes<HTMLDivElement>>;

export { DotsSpinner, type DotsSpinnerProps, PulseSpinner, type PulseSpinnerProps, Spinner, SpinnerOverlay, type SpinnerOverlayProps, type SpinnerProps };
