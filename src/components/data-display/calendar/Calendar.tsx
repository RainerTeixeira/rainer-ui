/**
 * Componente Calendar (sem react-day-picker)
 *
 * Implementação própria baseada em React + Tailwind, usando
 * exclusivamente classes semânticas alinhadas aos design tokens.
 *
 * @module @rainersoft/ui/components/data-display/calendar
 */

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';
import * as React from 'react';

import { Button } from '../../actions/button/Button';
import { cn } from '../../../lib/utils';

export type CalendarProps = {
  className?: string;
  /** Data selecionada (modo single). */
  selected?: Date;
  /** Callback disparado ao selecionar uma data. */
  onSelect?: (date: Date | undefined) => void;
  /** Função opcional para desabilitar dias. */
  disabled?: (date: Date) => boolean;
};

function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function isSameDay(a?: Date, b?: Date): boolean {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function addMonths(date: Date, amount: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + amount);
  return d;
}

/**
 * Gera uma grade de 6 semanas (42 dias) começando no domingo
 * contendo todos os dias visíveis do mês atual.
 */
function getMonthGrid(month: Date): Date[] {
  const firstOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
  const startDay = firstOfMonth.getDay(); // 0 = domingo
  const gridStart = new Date(firstOfMonth);
  gridStart.setDate(firstOfMonth.getDate() - startDay);

  const days: Date[] = [];
  for (let i = 0; i < 42; i += 1) {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    days.push(d);
  }
  return days;
}

function getWeekdayLabels(locale: string): string[] {
  const base = new Date(2024, 0, 7); // domingo
  return Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    return d.toLocaleDateString(locale, { weekday: 'short' });
  });
}

function Calendar({ className, selected, onSelect, disabled }: CalendarProps) {
  const initialMonth = selected ?? new Date();
  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    startOfDay(initialMonth),
  );

  const today = React.useMemo(() => startOfDay(new Date()), []);
  const days = React.useMemo(() => getMonthGrid(currentMonth), [currentMonth]);
  const weekdayLabels = React.useMemo(
    () => getWeekdayLabels('pt-BR'),
    [],
  );

  const handlePrevMonth = React.useCallback(() => {
    setCurrentMonth((prev) => addMonths(prev, -1));
  }, []);

  const handleNextMonth = React.useCallback(() => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  }, []);

  const handleSelect = React.useCallback(
    (date: Date) => {
      if (disabled?.(date)) return;
      if (onSelect) {
        if (selected && isSameDay(selected, date)) {
          onSelect(undefined);
        } else {
          onSelect(date);
        }
      }
    },
    [disabled, onSelect, selected],
  );

  const monthLabel = React.useMemo(
    () =>
      currentMonth.toLocaleDateString('pt-BR', {
        month: 'long',
        year: 'numeric',
      }),
    [currentMonth],
  );

  return (
    <div
      className={cn(
        'bg-background group/calendar p-3 [--cell-size:2rem] rounded-lg border border-border shadow-sm',
        className,
      )}
    >
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-3">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-[--cell-size] w-[--cell-size] p-0"
          onClick={handlePrevMonth}
          aria-label="Mês anterior"
        >
          <ChevronLeftIcon className="size-4" />
        </Button>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium capitalize">
            {monthLabel}
          </span>
          <ChevronDownIcon className="size-4 text-muted-foreground" />
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-[--cell-size] w-[--cell-size] p-0"
          onClick={handleNextMonth}
          aria-label="Próximo mês"
        >
          <ChevronRightIcon className="size-4" />
        </Button>
      </div>

      {/* Cabeçalho dos dias da semana */}
      <div className="mb-1 flex w-full">
        {weekdayLabels.map((label) => (
          <div
            key={label}
            className="text-muted-foreground flex-1 select-none text-center text-[0.75rem] font-normal uppercase"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Grade de dias */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((date) => {
          const isOutsideMonth =
            date.getMonth() !== currentMonth.getMonth() ||
            date.getFullYear() !== currentMonth.getFullYear();

          const isSelected = selected ? isSameDay(selected, date) : false;
          const isToday = isSameDay(today, date);
          const isDisabled = disabled?.(date) ?? false;

          return (
            <CalendarDayButton
              key={date.toISOString()}
              date={date}
              isOutside={isOutsideMonth}
              isSelected={isSelected}
              isToday={isToday}
              disabled={isDisabled}
              onSelect={handleSelect}
            />
          );
        })}
      </div>
    </div>
  );
}

type CalendarDayButtonProps = {
  date: Date;
  isOutside?: boolean;
  isSelected?: boolean;
  isToday?: boolean;
  disabled?: boolean;
  onSelect?: (date: Date) => void;
  className?: string;
};

function CalendarDayButton({
  date,
  isOutside,
  isSelected,
  isToday,
  disabled,
  onSelect,
  className,
}: CalendarDayButtonProps) {
  const handleClick = React.useCallback(() => {
    if (disabled) return;
    onSelect?.(date);
  }, [date, disabled, onSelect]);

  const baseClasses = cn(
    'flex aspect-square h-9 w-9 items-center justify-center rounded-md text-sm font-normal transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
    isOutside && 'text-muted-foreground/60',
    disabled && 'text-muted-foreground opacity-50 cursor-not-allowed',
    isToday && 'border border-dashed border-primary',
    isSelected &&
      'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground',
    !isSelected && !disabled && !isOutside &&
      'hover:bg-accent hover:text-accent-foreground',
    !isSelected && isOutside && !disabled &&
      'hover:bg-muted hover:text-foreground',
    className,
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={baseClasses}
      aria-pressed={isSelected}
    >
      <span className="text-xs leading-none">
        {date.getDate()}
      </span>
    </button>
  );
}

export { Calendar, CalendarDayButton };


