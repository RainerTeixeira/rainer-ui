/**
 * Componente Calendar (sem react-day-picker)
 *
 * Implementação própria baseada em React + Tailwind, usando
 * exclusivamente classes semânticas alinhadas aos design tokens.
 *
 * @module @rainersoft/ui/components/data-display/calendar
 */
export type CalendarProps = {
    className?: string;
    /** Data selecionada (modo single). */
    selected?: Date;
    /** Callback disparado ao selecionar uma data. */
    onSelect?: (date: Date | undefined) => void;
    /** Função opcional para desabilitar dias. */
    disabled?: (date: Date) => boolean;
};
declare function Calendar({ className, selected, onSelect, disabled }: Readonly<CalendarProps>): import("react/jsx-runtime").JSX.Element;
type CalendarDayButtonProps = {
    date: Date;
    isOutside?: boolean;
    isSelected?: boolean;
    isToday?: boolean;
    disabled?: boolean;
    onSelect?: (date: Date) => void;
    className?: string;
};
declare function CalendarDayButton({ date, isOutside, isSelected, isToday, disabled, onSelect, className, }: Readonly<CalendarDayButtonProps>): import("react/jsx-runtime").JSX.Element;
export { Calendar, CalendarDayButton };
