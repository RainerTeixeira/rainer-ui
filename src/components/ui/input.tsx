/**
 * Input Component
 *
 * Componente de input base com suporte a múltiplos tipos,
 * estados de validação e acessibilidade completa.
 *
 * @module components/ui/input
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Estado de erro do input */
  error?: boolean;
  /** Mensagem de ajuda ou erro */
  helperText?: string;
  /** Label do input */
  label?: string;
  /** Obrigatório */
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, helperText, label, required, id, ...props }, ref) => {
    const inputId = id || `input-${React.useId()}`;
    
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
        <input
          type={type}
          id={inputId}
          className={cn(
            // Base styles
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2',
            'text-sm ring-offset-background file:border-0 file:bg-transparent',
            'file:text-sm file:font-medium placeholder:text-muted-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            'focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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
          {...props}
        />
        {helperText && (
          <p
            className={cn(
              'text-xs',
              error ? 'text-destructive' : 'text-muted-foreground',
              'dark:text-cyan-400/70'
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
