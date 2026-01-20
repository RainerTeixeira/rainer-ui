/**
 * Card Component
 *
 * Componente card versátil para conteúdo estruturado.
 * Suporta múltiplas variantes e layouts.
 *
 * @module components/ui/card
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cn } from '../../lib/tokens';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'outline' | 'elevated' | 'glass'
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Base styles
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      // Variant styles
      variant === 'default' && 'border-border bg-background dark:bg-black/40 dark:border-cyan-400/20',
      variant === 'outline' && 'border-2 border-border bg-transparent dark:border-cyan-400/30',
      variant === 'elevated' && 'border-border/50 shadow-lg dark:bg-black/60 dark:border-cyan-400/20 dark:shadow-cyan-500/10',
      variant === 'glass' && 'border-border/20 bg-background/80 backdrop-blur-md dark:bg-black/40 dark:border-cyan-400/30 dark:backdrop-blur-xl',
      // Transitions
      'transition-all duration-200',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col space-y-1.5 p-6',
      'dark:border-cyan-400/10',
      className
    )}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      'dark:text-cyan-200 dark:font-mono',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-sm text-muted-foreground',
      'dark:text-cyan-400/80',
      className
    )}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center p-6 pt-0',
      'dark:border-t dark:border-cyan-400/10',
      className
    )}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
