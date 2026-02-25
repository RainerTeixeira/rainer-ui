import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Interface de tempo
 */
interface TimeValue {
    hours: number;
    minutes: number;
    seconds?: number;
    period?: 'AM' | 'PM';
}
/**
 * Variantes do TimePicker
 */
declare const timePickerVariants: (props?: {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "inline" | "stacked";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do TimePicker
 */
interface TimePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'>, VariantProps<typeof timePickerVariants> {
    /** Valor do tempo */
    value?: TimeValue;
    /** Callback quando muda o tempo */
    onChange?: (time: TimeValue | undefined) => void;
    /** Placeholder */
    placeholder?: string;
    /** Se usa formato 12 horas */
    use12Hours?: boolean;
    /** Se mostra segundos */
    showSeconds?: boolean;
    /** Se está desabilitado */
    disabled?: boolean;
    /** Passo dos minutos */
    minuteStep?: number;
    /** Passo dos segundos */
    secondStep?: number;
    /** Hora mínima */
    minTime?: TimeValue;
    /** Hora máxima */
    maxTime?: TimeValue;
}
/**
 * Componente TimePicker
 *
 * Seletor de horário com inputs.
 *
 * @example
 * ```tsx
 * // Básico
 * <TimePicker
 *   value={time}
 *   onChange={setTime}
 * />
 *
 * // Formato 12 horas
 * <TimePicker
 *   use12Hours
 *   value={time}
 *   onChange={setTime}
 * />
 *
 * // Com segundos
 * <TimePicker
 *   showSeconds
 *   value={time}
 *   onChange={setTime}
 * />
 * ```
 */
declare const TimePicker: React.ForwardRefExoticComponent<TimePickerProps & React.RefAttributes<HTMLDivElement>>;

export { TimePicker, type TimePickerProps, type TimeValue };
