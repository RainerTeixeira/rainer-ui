/**
 * Componente TimePicker
 *
 * Seletor de horário com inputs para horas e minutos.
 * Suporta formato 12h/24h e validação.
 *
 * @module @rainersoft/ui/components/forms/time-picker
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Timer } from 'lucide-react';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

/**
 * Interface de tempo
 */
export interface TimeValue {
  hours: number;
  minutes: number;
  seconds?: number;
  period?: 'AM' | 'PM';
}

/**
 * Variantes do TimePicker
 */
const timePickerVariants = cva(
  'flex items-center gap-2',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      variant: {
        default: '',
        inline: 'flex-row',
        stacked: 'flex-col',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

/**
 * Props do TimePicker
 */
export interface TimePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'>,
    VariantProps<typeof timePickerVariants> {
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
 * Formata número com zero à esquerda
 */
function padNumber(num: number): string {
  return num.toString().padStart(2, '0');
}

/**
 * Converte tempo para string
 */
function timeToString(time: TimeValue, use12Hours = false, showSeconds = false): string {
  let hours = time.hours;
  const minutes = time.minutes;
  const seconds = time.seconds || 0;
  let period = '';

  if (use12Hours) {
    period = time.period || (hours >= 12 ? 'PM' : 'AM');
    hours = hours % 12 || 12;
  }

  const timeStr = `${padNumber(hours)}:${padNumber(minutes)}`;
  const secondsStr = showSeconds ? `:${padNumber(seconds)}` : '';
  
  return `${timeStr}${secondsStr}${use12Hours ? ` ${period}` : ''}`;
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
export const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      value,
      onChange,
      placeholder = 'Selecione o horário',
      use12Hours = false,
      showSeconds = false,
      disabled = false,
      minuteStep = 1,
      secondStep = 1,
      minTime,
      maxTime,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [hours, setHours] = React.useState(value?.hours || 0);
    const [minutes, setMinutes] = React.useState(value?.minutes || 0);
    const [seconds, setSeconds] = React.useState(value?.seconds || 0);
    const [period, setPeriod] = React.useState<'AM' | 'PM'>(value?.period || 'AM');
    
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Atualiza valores quando o prop muda
    React.useEffect(() => {
      if (value) {
        setHours(value.hours);
        setMinutes(value.minutes);
        setSeconds(value.seconds || 0);
        if (use12Hours) {
          setPeriod(value.period || (value.hours >= 12 ? 'PM' : 'AM'));
        }
      }
    }, [value, use12Hours]);

    // Manipula mudança nos inputs
    const handleHoursChange = React.useCallback((newHours: number) => {
      if (newHours < 0) newHours = 0;
      if (newHours > 23) newHours = 23;
      
      setHours(newHours);
      
      const newTime: TimeValue = {
        hours: newHours,
        minutes,
        seconds: showSeconds ? seconds : undefined,
        period: use12Hours ? period : undefined,
      };
      
      onChange?.(newTime);
    }, [minutes, seconds, period, use12Hours, showSeconds, onChange]);

    const handleMinutesChange = React.useCallback((newMinutes: number) => {
      if (newMinutes < 0) newMinutes = 0;
      if (newMinutes > 59) newMinutes = 59;
      
      // Ajusta para o passo
      newMinutes = Math.round(newMinutes / minuteStep) * minuteStep;
      
      setMinutes(newMinutes);
      
      const newTime: TimeValue = {
        hours,
        minutes: newMinutes,
        seconds: showSeconds ? seconds : undefined,
        period: use12Hours ? period : undefined,
      };
      
      onChange?.(newTime);
    }, [hours, seconds, period, use12Hours, showSeconds, minuteStep, onChange]);

    const handleSecondsChange = React.useCallback((newSeconds: number) => {
      if (!showSeconds) return;
      
      if (newSeconds < 0) newSeconds = 0;
      if (newSeconds > 59) newSeconds = 59;
      
      // Ajusta para o passo
      newSeconds = Math.round(newSeconds / secondStep) * secondStep;
      
      setSeconds(newSeconds);
      
      const newTime: TimeValue = {
        hours,
        minutes,
        seconds: newSeconds,
        period: use12Hours ? period : undefined,
      };
      
      onChange?.(newTime);
    }, [hours, minutes, period, use12Hours, secondStep, onChange]);

    const handlePeriodChange = React.useCallback((newPeriod: 'AM' | 'PM') => {
      setPeriod(newPeriod);
      
      let newHours = hours;
      if (newPeriod === 'AM' && hours === 12) {
        newHours = 0;
      } else if (newPeriod === 'PM' && hours < 12) {
        newHours = hours + 12;
      }
      
      setHours(newHours);
      
      const newTime: TimeValue = {
        hours: newHours,
        minutes,
        seconds: showSeconds ? seconds : undefined,
        period: newPeriod,
      };
      
      onChange?.(newTime);
    }, [hours, minutes, seconds, showSeconds, onChange]);

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

    const displayValue = value ? timeToString(value, use12Hours, showSeconds) : '';

    return (
      <div
        ref={containerRef}
        className={cn('relative', className)}
        {...props}
      >
        {/* Botão de trigger */}
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            timePickerVariants({ size, variant })
          )}
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <Timer className="mr-2 h-4 w-4" />
          {displayValue || placeholder}
        </Button>

        {/* Popup do seletor */}
        {isOpen && (
          <div className="absolute top-full left-0 z-50 mt-1 rounded-md border bg-popover p-4 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95">
            <div className="flex items-center gap-2">
              {/* Horas */}
              <div className="flex flex-col items-center gap-1">
                <label className="text-xs font-medium text-muted-foreground">Hora</label>
                <input
                  type="number"
                  min={0}
                  max={use12Hours ? 12 : 23}
                  value={hours}
                  onChange={(e) => handleHoursChange(parseInt(e.target.value) || 0)}
                  className={cn(
                    'w-16 h-10 text-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:opacity-50'
                  )}
                  disabled={disabled}
                />
              </div>

              <span className="text-2xl font-bold mt-4">:</span>

              {/* Minutos */}
              <div className="flex flex-col items-center gap-1">
                <label className="text-xs font-medium text-muted-foreground">Min</label>
                <input
                  type="number"
                  min={0}
                  max={59}
                  value={minutes}
                  onChange={(e) => handleMinutesChange(parseInt(e.target.value) || 0)}
                  className={cn(
                    'w-16 h-10 text-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:opacity-50'
                  )}
                  disabled={disabled}
                />
              </div>

              {/* Segundos */}
              {showSeconds && (
                <>
                  <span className="text-2xl font-bold mt-4">:</span>
                  <div className="flex flex-col items-center gap-1">
                    <label className="text-xs font-medium text-muted-foreground">Seg</label>
                    <input
                      type="number"
                      min={0}
                      max={59}
                      value={seconds}
                      onChange={(e) => handleSecondsChange(parseInt(e.target.value) || 0)}
                      className={cn(
                        'w-16 h-10 text-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                        'disabled:cursor-not-allowed disabled:opacity-50'
                      )}
                      disabled={disabled}
                    />
                  </div>
                </>
              )}

              {/* Período AM/PM */}
              {use12Hours && (
                <div className="flex flex-col items-center gap-1">
                  <label className="text-xs font-medium text-muted-foreground">&nbsp;</label>
                  <div className="flex rounded-md border border-input">
                    <Button
                      type="button"
                      variant={period === 'AM' ? 'default' : 'ghost'}
                      size="sm"
                      className="h-10 rounded-r-none border-r"
                      onClick={() => handlePeriodChange('AM')}
                      disabled={disabled}
                    >
                      AM
                    </Button>
                    <Button
                      type="button"
                      variant={period === 'PM' ? 'default' : 'ghost'}
                      size="sm"
                      className="h-10 rounded-l-none"
                      onClick={() => handlePeriodChange('PM')}
                      disabled={disabled}
                    >
                      PM
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

TimePicker.displayName = 'TimePicker';

