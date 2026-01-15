import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do DatePicker
 */
declare const datePickerVariants: (props?: {
    size?: "sm" | "md" | "lg";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Interface de range de datas
 */
interface DateRange {
    from: Date | undefined;
    to?: Date | undefined;
}
/**
 * Props do DatePicker
 */
interface DatePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'>, VariantProps<typeof datePickerVariants> {
    /** Data selecionada */
    value?: Date | Date[] | DateRange;
    /** Callback quando muda a data */
    onChange?: (date: Date | Date[] | DateRange | undefined) => void;
    /** Placeholder do input */
    placeholder?: string;
    /** Se permite selecionar múltiplas datas */
    multiple?: boolean;
    /** Se permite selecionar um range de datas */
    range?: boolean;
    /** Datas desabilitadas */
    disabledDates?: (date: Date) => boolean;
    /** Data mínima */
    minDate?: Date;
    /** Data máxima */
    maxDate?: Date;
    /** Ano inicial */
    fromYear?: number;
    /** Ano final */
    toYear?: number;
    /** Formato de exibição */
    format?: string;
    /** Se está desabilitado */
    disabled?: boolean;
    /** Se deve mostrar o número da semana */
    showWeekNumber?: boolean;
    /** Se deve fixar a semana */
    fixedWeeks?: boolean;
    /** Locale */
    locale?: string;
}
/**
 * Componente DatePicker
 *
 * Seletor de datas com calendário popup.
 *
 * @example
 * ```tsx
 * // Data única
 * <DatePicker
 *   value={date}
 *   onChange={setDate}
 *   placeholder="Selecione uma data"
 * />
 *
 * // Range de datas
 * <DatePicker
 *   range
 *   value={dateRange}
 *   onChange={setDateRange}
 *   placeholder="Selecione o período"
 * />
 *
 * // Múltiplas datas
 * <DatePicker
 *   multiple
 *   value={dates}
 *   onChange={setDates}
 * />
 * ```
 */
declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLDivElement>>;

export { DatePicker, type DatePickerProps, type DateRange };
