/**
 * Textarea Component
 *
 * Componente de textarea com suporte a resize,
 * estados de validação e acessibilidade completa.
 *
 * @module components/ui/textarea
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Estado de erro do textarea */
  error?: boolean;
  /** Mensagem de ajuda ou erro */
  helperText?: string;
  /** Label do textarea */
  label?: string;
  /** Obrigatório */
  required?: boolean;
  /** Número máximo de caracteres */
  maxLength?: number;
  /** Mostrar contador de caracteres */
  showCount?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    error, 
    helperText, 
    label, 
    required, 
    id, 
    maxLength,
    showCount,
    value,
    ...props 
  }, ref) => {
    const inputId = id || `textarea-${React.useId()}`;
    const [characterCount, setCharacterCount] = React.useState(0);
    
    React.useEffect(() => {
      if (typeof value === 'string') {
        setCharacterCount(value.length);
      }
    }, [value]);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (maxLength) {
        const newValue = e.target.value.slice(0, maxLength);
        e.target.value = newValue;
        setCharacterCount(newValue.length);
      }
      props.onChange?.(e);
    };
    
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              error ? 'text-destructive' : 'text-foreground',
              'dark:text-cyan-200 dark:font-mono'
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <textarea
          id={inputId}
          className={cn(
            // Base styles
            'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2',
            'text-sm ring-offset-background placeholder:text-muted-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            'focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            'resize-none',
            // Dark mode
            'dark:bg-black/50 dark:border-cyan-400/30 dark:text-cyan-100',
            'dark:placeholder:text-cyan-400/50 dark:ring-offset-black',
            'dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-black',
            // Error state
            error && 'border-destructive focus-visible:ring-destructive',
            'dark:border-red-400/50 dark:focus-visible:ring-red-400',
            // Transitions
            'transition-all duration-200',
            className
          )}
          ref={ref}
          maxLength={maxLength}
          value={value}
          onChange={handleInputChange}
          {...props}
        />
        {(helperText || (showCount && maxLength)) && (
          <div className="flex justify-between items-center">
            {helperText && (
              <p
                className={cn(
                  'text-xs',
                  error ? 'text-destructive' : 'text-muted-foreground',
                  'dark:text-cyan-400/70 dark:text-red-400/70'
                )}
              >
                {helperText}
              </p>
            )}
            {showCount && maxLength && (
              <p
                className={cn(
                  'text-xs',
                  characterCount >= maxLength ? 'text-destructive' : 'text-muted-foreground',
                  'dark:text-cyan-400/70'
                )}
              >
                {characterCount}/{maxLength}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
