/**
 * Progress Component
 *
 * Componente progress bar para indicar carregamento,
 * upload de arquivos e andamento de tarefas.
 *
 * @module components/ui/progress
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '../../lib/utils';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    /** Cor da progress bar */
    color?: 'default' | 'success' | 'warning' | 'destructive' | 'cyberpunk';
  }
>(({ className, value, color = 'default', ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      // Base styles
      'relative h-2 w-full overflow-hidden rounded-full bg-secondary',
      // Dark mode
      'dark:bg-black/40 dark:border dark:border-cyan-400/20',
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        // Base indicator
        'h-full w-full flex-1 bg-primary transition-all duration-300',
        // Color variants
        color === 'default' && 'bg-primary dark:bg-cyan-400',
        color === 'success' && 'bg-green-500 dark:bg-green-400',
        color === 'warning' && 'bg-yellow-500 dark:bg-yellow-400',
        color === 'destructive' && 'bg-red-500 dark:bg-red-400',
        color === 'cyberpunk' && 'bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400'
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
