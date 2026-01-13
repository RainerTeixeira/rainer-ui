/**
 * Componente DatePicker
 *
 * Seletor de datas avançado com calendário popup.
 * Suporta seleção única, range de datas e validação.
 *
 * @module @rainersoft/ui/components/forms/date-picker
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { DayPicker } from 'react-day-picker';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

/**
 * Variantes do DatePicker
 */
const datePickerVariants = cva(
  'flex gap-2',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

/**
 * Interface de range de datas
 */
export interface DateRange {
  from: Date | undefined;
  to?: Date | undefined;
}

/**
 * Props do DatePicker
 */
export interface DatePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'>,
    VariantProps<typeof datePickerVariants> {
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
 * Formata data para exibição
 */
function formatDate(date: Date, format?: string): string {
  if (!date) return '';
  
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  
  if (format === 'MM/DD/YYYY') {
    return `${month}/${day}/${year}`;
  } else if (format === 'DD/MM/YYYY') {
    return `${day}/${month}/${year}`;
  }
  
  // Default: DD/MM/YYYY
  return `${day}/${month}/${year}`;
}

/**
 * Formata range de datas
 */
function formatDateRange(range: DateRange): string {
  if (!range.from) return '';
  if (!range.to) return formatDate(range.from);
  
  return `${formatDate(range.from)} - ${formatDate(range.to)}`;
}

/**
 * Formata múltiplas datas
 */
function formatMultipleDates(dates: Date[]): string {
  if (dates.length === 0) return '';
  if (dates.length === 1) return formatDate(dates[0]);
  if (dates.length === 2) return `${formatDate(dates[0])} e ${formatDate(dates[1])}`;
  
  return `${formatDate(dates[0])} (+${dates.length - 1})`;
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
export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      className,
      size = 'md',
      value,
      onChange,
      placeholder = 'Selecione uma data',
      multiple = false,
      range = false,
      disabledDates,
      minDate,
      maxDate,
      fromYear,
      toYear,
      format,
      showWeekNumber = false,
      fixedWeeks = false,
      disabled = false,
      ...props
    },
    _ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);
    const [inputValue, setInputValue] = React.useState('');
    
    const containerRef = React.useRef<HTMLDivElement>(null);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    // Atualiza input quando o valor muda
    React.useEffect(() => {
      if (!value) {
        setInputValue('');
        setSelectedDates([]);
        return;
      }

      if (range && value && 'from' in value) {
        const rangeValue = value as DateRange;
        const dates = rangeValue.from ? [rangeValue.from] : [];
        if (rangeValue.to) dates.push(rangeValue.to);
        setSelectedDates(dates);
        setInputValue(formatDateRange(rangeValue));
      } else if (multiple && Array.isArray(value)) {
        setSelectedDates(value as Date[]);
        setInputValue(formatMultipleDates(value as Date[]));
      } else if (value instanceof Date) {
        setSelectedDates([value]);
        setInputValue(formatDate(value, format));
      }
    }, [value, range, multiple, format]);

    // Handlers específicos para cada modo
    const handleSingleSelect = React.useCallback((day: Date | undefined) => {
      onChange?.(day);
    }, [onChange]);

    const handleMultipleSelect = React.useCallback((dates: Date[] | undefined) => {
      onChange?.(dates);
    }, [onChange]);

    const handleRangeSelect = React.useCallback((range: DateRange | undefined) => {
      onChange?.(range);
    }, [onChange]);

    // Fecha ao clicar fora
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Classes CSS para o DayPicker
    const dayPickerClassNames = {
      months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
      month: 'space-y-4',
      caption: 'flex justify-center pt-1 relative items-center',
      caption_label: 'text-sm font-medium',
      nav: 'space-x-1 flex items-center',
      nav_button: cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-7 w-7',
        'absolute'
      ),
      nav_button_previous: 'left-1',
      nav_button_next: 'right-1',
      table: 'w-full border-collapse space-y-1',
      head_row: 'flex',
      head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
      row: 'flex w-full mt-2',
      cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
      day: cn(
        'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-md'
      ),
      day_range_end: 'day-range-end',
      day_selected: 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
      day_today: 'bg-accent text-accent-foreground',
      day_outside: 'text-muted-foreground opacity-50',
      day_disabled: 'text-muted-foreground opacity-50',
      day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
      day_hidden: 'invisible',
    };

    return (
      <div
        ref={_ref || containerRef}
        className={cn('relative', className)}
        {...props}
      >
        {/* Botão de trigger */}
        <Button
          ref={buttonRef}
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            datePickerVariants({ size })
          )}
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <Calendar className="mr-2 h-4 w-4" />
          {inputValue || placeholder}
          <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
        </Button>

        {/* Popup do calendário */}
        {isOpen && (
          <div className="absolute top-full left-0 z-50 mt-1 rounded-md border bg-popover p-0 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95">
            {range ? (
              <DayPicker
                mode="range"
                selected={value as DateRange}
                onSelect={handleRangeSelect}
                disabled={disabledDates}
                fromDate={minDate}
                toDate={maxDate}
                fromYear={fromYear}
                toYear={toYear}
                showWeekNumber={showWeekNumber}
                fixedWeeks={fixedWeeks}
                classNames={dayPickerClassNames}
                initialFocus
              />
            ) : multiple ? (
              <DayPicker
                mode="multiple"
                selected={selectedDates}
                onSelect={handleMultipleSelect}
                disabled={disabledDates}
                fromDate={minDate}
                toDate={maxDate}
                fromYear={fromYear}
                toYear={toYear}
                showWeekNumber={showWeekNumber}
                fixedWeeks={fixedWeeks}
                classNames={dayPickerClassNames}
                initialFocus
              />
            ) : (
              <DayPicker
                mode="single"
                selected={value instanceof Date ? value : undefined}
                onSelect={handleSingleSelect}
                disabled={disabledDates}
                fromDate={minDate}
                toDate={maxDate}
                fromYear={fromYear}
                toYear={toYear}
                showWeekNumber={showWeekNumber}
                fixedWeeks={fixedWeeks}
                classNames={dayPickerClassNames}
                initialFocus
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

