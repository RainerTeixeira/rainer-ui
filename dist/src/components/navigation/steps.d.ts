/**
 * Componente Steps
 *
 * Indicador de passos/etapas de um processo.
 * Suporta navegação, status e orientações.
 *
 * @module @rainersoft/ui/components/navigation/steps
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Status de um passo
 */
export type StepStatus = 'pending' | 'active' | 'completed' | 'error';
/**
 * Interface de um passo
 */
export interface Step {
    id: string;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    status?: StepStatus;
    disabled?: boolean;
    onClick?: () => void;
}
/**
 * Variantes do Steps
 */
declare const stepsVariants: (props?: {
    orientation?: "horizontal" | "vertical";
    size?: "sm" | "md" | "lg";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Steps
 */
export interface StepsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof stepsVariants> {
    /** Etapas */
    steps: Step[];
    /** Etapa atual */
    current?: number;
    /** Callback quando muda a etapa */
    onChange?: (step: number) => void;
    /** Se permite clicar para navegar */
    clickable?: boolean;
    /** Se mostra os números */
    showNumbers?: boolean;
    /** Se mostra os ícones */
    showIcons?: boolean;
    /** Se mostra o conector entre etapas */
    showConnector?: boolean;
}
/**
 * Componente Steps
 *
 * Indicador de etapas.
 *
 * @example
 * ```tsx
 * // Horizontal
 * <Steps
 *   steps={[
 *     { id: '1', title: 'Passo 1' },
 *     { id: '2', title: 'Passo 2' },
 *     { id: '3', title: 'Passo 3' },
 *   ]}
 *   current={1}
 * />
 *
 * // Vertical
 * <Steps
 *   orientation="vertical"
 *   steps={steps}
 *   current={2}
 *   clickable
 *   onChange={setStep}
 * />
 * ```
 */
export declare const Steps: React.ForwardRefExoticComponent<StepsProps & React.RefAttributes<HTMLDivElement>>;
/**
 * StepItem - Item individual do Steps
 */
export interface StepItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Número do passo */
    number: number;
    /** Título */
    title: string;
    /** Descrição */
    description?: string;
    /** Status */
    status?: StepStatus;
    /** Se está ativo */
    active?: boolean;
    /** Ícone customizado */
    icon?: React.ReactNode;
}
export declare const StepItem: React.ForwardRefExoticComponent<StepItemProps & React.RefAttributes<HTMLDivElement>>;
export {};
