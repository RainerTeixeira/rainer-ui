/**
 * Componente VisuallyHidden
 *
 * Esconde visualmente o conteúdo mas mantém acessível para screen readers.
 * Utiliza design tokens do @rainersoft/design-tokens como fonte única de verdade.
 *
 * @fileoverview Componente de acessibilidade
 * @author Rainer Teixeira
 */

import * as React from 'react';
import { cn } from "@rainersoft/ui";

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean
}

const VisuallyHidden = React.forwardRef<
  HTMLSpanElement,
  VisuallyHiddenProps
>(({ className, asChild = false, ...props }, ref) => {
  if (asChild) {
    return React.cloneElement(props.children as React.ReactElement, {
      ref,
      className: cn(
        'sr-only',
        'focus:not-sr-only',
        'focus:absolute',
        'focus:top-[var(--spacing-2)]',
        'focus:left-[var(--spacing-2)]',
        'focus:z-50',
        'focus:px-[var(--spacing-4)]',
        'focus:py-[var(--spacing-2)]',
        'bg-[var(--color-primary)]',
        'text-[var(--color-white)]',
        'rounded-[var(--radius-md)]',
        className
      ),
      ...props
    })
  }

  return (
    <span
      ref={ref}
      className={cn(
        'sr-only',
        className
      )}
      {...props}
    />
  )
});
VisuallyHidden.displayName = 'VisuallyHidden';

export { VisuallyHidden };