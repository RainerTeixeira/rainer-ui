/**
 * Componente Toaster
 * 
 * @module @rainersoft/ui/components/feedback/toaster
 */

import * as React from 'react';
import { cn } from '../../lib/tokens';
import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';
import {
  AlertTriangle,
  Check,
  Info,
  Loader2,
  Octagon,
} from 'lucide-react';
import type { ToasterProps } from 'sonner';

const Toaster = React.forwardRef<HTMLElement, ToasterProps>((props, ref) => {
  const { theme = 'system' } = useTheme();

  return (
    React.createElement(
      Sonner as React.ForwardRefExoticComponent<ToasterProps & React.RefAttributes<HTMLElement>>,
      {
        ref,
        theme: theme as 'light' | 'dark' | 'system',
        className: 'toaster group',
        icons: {
          success: React.createElement(Check, { className: "h-4 w-4" }),
          info: React.createElement(Info, { className: "h-4 w-4" }),
          warning: React.createElement(AlertTriangle, { className: "h-4 w-4" }),
          error: React.createElement(Octagon, { className: "h-4 w-4" }),
          loading: React.createElement(Loader2, { className: "h-4 w-4 animate-spin" }),
        },
        toastOptions: {
          classNames: {
            toast: cn(
              'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border shadow-lg',
              'dark:group-[.toaster]:bg-background dark:group-[.toaster]:border-border'
            ),
            title: 'dark:text-foreground',
            description:
              'group-[.toast]:text-muted-foreground dark:text-muted-foreground',
            actionButton:
              'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
            cancelButton:
              'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
            error:
              'dark:bg-status-error-background dark:border-status-error-border',
            success:
              'dark:bg-status-success-background dark:border-status-success-border',
          },
        },
        ...props,
      }
    )
  );
});

Toaster.displayName = 'Toaster';

export { Toaster };
export { Sonner };
export type { ToasterProps };
