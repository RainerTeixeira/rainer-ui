import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Interface de opção
 */
interface SegmentedOption {
    /** Valor da opção */
    value: string;
    /** Label da opção */
    label: string;
    /** Ícone da opção */
    icon?: React.ReactNode;
    /** Se está desabilitada */
    disabled?: boolean;
}
/**
 * Variantes do SegmentedControl
 */
declare const segmentedControlVariants: (props?: {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "neon" | "glass" | "pill";
    fullWidth?: boolean;
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do SegmentedControl
 */
interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof segmentedControlVariants> {
    /** Opções disponíveis */
    options: SegmentedOption[];
    /** Valor selecionado */
    value?: string;
    /** Callback quando muda a seleção */
    onChange?: (value: string) => void;
    /** Valor padrão */
    defaultValue?: string;
    /** Se está desabilitado */
    disabled?: boolean;
}
/**
 * Componente SegmentedControl
 *
 * Controle segmentado para seleção.
 *
 * @example
 * ```tsx
 * // Básico
 * <SegmentedControl
 *   options={[
 *     { value: 'day', label: 'Dia' },
 *     { value: 'week', label: 'Semana' },
 *     { value: 'month', label: 'Mês' },
 *   ]}
 *   value={period}
 *   onChange={setPeriod}
 * />
 *
 * // Com ícones
 * <SegmentedControl
 *   options={[
 *     { value: 'grid', label: 'Grade', icon: <Grid /> },
 *     { value: 'list', label: 'Lista', icon: <List /> },
 *   ]}
 *   value={view}
 *   onChange={setView}
 * />
 *
 * // Full width
 * <SegmentedControl
 *   options={options}
 *   value={selected}
 *   onChange={setSelected}
 *   fullWidth
 * />
 * ```
 */
declare const SegmentedControl: React.ForwardRefExoticComponent<SegmentedControlProps & React.RefAttributes<HTMLDivElement>>;
/**
 * SegmentedControlItem - Item individual (para composição)
 */
interface SegmentedControlItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Se está ativo */
    active?: boolean;
    /** Tamanho */
    size?: VariantProps<typeof segmentedControlVariants>['size'];
    /** Ícone */
    icon?: React.ReactNode;
}
declare const SegmentedControlItem: React.ForwardRefExoticComponent<SegmentedControlItemProps & React.RefAttributes<HTMLButtonElement>>;

export { SegmentedControl, SegmentedControlItem, type SegmentedControlItemProps, type SegmentedControlProps, type SegmentedOption };
