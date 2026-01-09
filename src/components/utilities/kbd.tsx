/**
 * Componente Kbd
 *
 * Indicador visual de teclas do teclado.
 * Ideal para atalhos e documentação.
 *
 * @module @rainersoft/ui/components/utilities/kbd
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

/**
 * Variantes do Kbd
 */
const kbdVariants = cva(
  'inline-flex items-center justify-center rounded border font-mono text-xs font-semibold',
  {
    variants: {
      variant: {
        default: 'border-border bg-background text-foreground shadow-sm',
        outline: 'border-border bg-transparent text-foreground',
        filled: 'border-border bg-muted text-foreground',
        ghost: 'border-transparent bg-transparent text-muted-foreground',
        neon: 'neon-border bg-background text-primary dark:shadow-glow-cyan',
      },
      size: {
        xs: 'h-5 px-1.5 text-[10px]',
        sm: 'h-6 px-2 text-xs',
        md: 'h-7 px-2.5 text-xs',
        lg: 'h-8 px-3 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  }
);

/**
 * Props do Kbd
 */
export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {
  /** Tecla a ser exibida */
  children: React.ReactNode;
}

/**
 * Componente Kbd
 *
 * Indicador de tecla do teclado.
 *
 * @example
 * ```tsx
 * // Simples
 * <Kbd>Ctrl</Kbd>
 *
 * // Com variantes
 * <Kbd variant="filled" size="md">
 *   Shift
 * </Kbd>
 *
 * // Combinações
 * <span className="flex items-center gap-1">
 *   <Kbd>Ctrl</Kbd>
 *   <span className="text-muted-foreground">+</span>
 *   <Kbd>C</Kbd>
 * </span>
 *
 * // Atalhos comuns
 * <div className="flex gap-2">
 *   <Kbd>⌘</Kbd>
 *   <Kbd>K</Kbd>
 * </div>
 * ```
 */
export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  (
    {
      className,
      variant = 'default',
      size = 'sm',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <kbd
        ref={ref}
        className={cn(kbdVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </kbd>
    );
  }
);

Kbd.displayName = 'Kbd';

/**
 * KbdCombo - Combinação de teclas
 */
export interface KbdComboProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Teclas da combinação */
  keys: React.ReactNode[];
  /** Separador entre teclas */
  separator?: string;
  /** Tamanho das teclas */
  size?: VariantProps<typeof kbdVariants>['size'];
  /** Variante das teclas */
  variant?: VariantProps<typeof kbdVariants>['variant'];
}

export const KbdCombo = React.forwardRef<HTMLDivElement, KbdComboProps>(
  (
    {
      className,
      keys,
      separator = '+',
      size = 'sm',
      variant = 'default',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-1', className)}
        {...props}
      >
        {keys.map((key, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-muted-foreground text-xs font-normal">
                {separator}
              </span>
            )}
            <Kbd size={size} variant={variant}>
              {key}
            </Kbd>
          </React.Fragment>
        ))}
      </div>
    );
  }
);

KbdCombo.displayName = 'KbdCombo';

/**
 * Atalhos comuns pré-definidos */
export const KeyboardShortcuts = {
  // Windows/Linux
  CtrlC: () => (
    <KbdCombo keys={['Ctrl', 'C']} />
  ),
  CtrlV: () => (
    <KbdCombo keys={['Ctrl', 'V']} />
  ),
  CtrlX: () => (
    <KbdCombo keys={['Ctrl', 'X']} />
  ),
  CtrlZ: () => (
    <KbdCombo keys={['Ctrl', 'Z']} />
  ),
  CtrlY: () => (
    <KbdCombo keys={['Ctrl', 'Y']} />
  ),
  CtrlA: () => (
    <KbdCombo keys={['Ctrl', 'A']} />
  ),
  CtrlS: () => (
    <KbdCombo keys={['Ctrl', 'S']} />
  ),
  CtrlF: () => (
    <KbdCombo keys={['Ctrl', 'F']} />
  ),
  CtrlP: () => (
    <KbdCombo keys={['Ctrl', 'P']} />
  ),
  Delete: () => (
    <Kbd>Delete</Kbd>
  ),
  Enter: () => (
    <Kbd>Enter</Kbd>
  ),
  Esc: () => (
    <Kbd>Esc</Kbd>
  ),
  Space: () => (
    <Kbd>Space</Kbd>
  ),
  Tab: () => (
    <Kbd>Tab</Kbd>
  ),
  ShiftTab: () => (
    <KbdCombo keys={['Shift', 'Tab']} />
  ),
  AltTab: () => (
    <KbdCombo keys={['Alt', 'Tab']} />
  ),
  
  // macOS
  CmdC: () => (
    <KbdCombo keys={['⌘', 'C']} />
  ),
  CmdV: () => (
    <KbdCombo keys={['⌘', 'V']} />
  ),
  CmdX: () => (
    <KbdCombo keys={['⌘', 'X']} />
  ),
  CmdZ: () => (
    <KbdCombo keys={['⌘', 'Z']} />
  ),
  CmdShiftZ: () => (
    <KbdCombo keys={['⌘', 'Shift', 'Z']} />
  ),
  CmdA: () => (
    <KbdCombo keys={['⌘', 'A']} />
  ),
  CmdS: () => (
    <KbdCombo keys={['⌘', 'S']} />
  ),
  CmdF: () => (
    <KbdCombo keys={['⌘', 'F']} />
  ),
  CmdP: () => (
    <KbdCombo keys={['⌘', 'P']} />
  ),
  CmdSpace: () => (
    <KbdCombo keys={['⌘', 'Space']} />
  ),
  OptionTab: () => (
    <KbdCombo keys={['⌥', 'Tab']} />
  ),
  
  // Setas
  ArrowUp: () => (
    <Kbd>↑</Kbd>
  ),
  ArrowDown: () => (
    <Kbd>↓</Kbd>
  ),
  ArrowLeft: () => (
    <Kbd>←</Kbd>
  ),
  ArrowRight: () => (
    <Kbd>→</Kbd>
  ),
  
  // Função
  F1: () => <Kbd>F1</Kbd>,
  F2: () => <Kbd>F2</Kbd>,
  F3: () => <Kbd>F3</Kbd>,
  F4: () => <Kbd>F4</Kbd>,
  F5: () => <Kbd>F5</Kbd>,
  F6: () => <Kbd>F6</Kbd>,
  F7: () => <Kbd>F7</Kbd>,
  F8: () => <Kbd>F8</Kbd>,
  F9: () => <Kbd>F9</Kbd>,
  F10: () => <Kbd>F10</Kbd>,
  F11: () => <Kbd>F11</Kbd>,
  F12: () => <Kbd>F12</Kbd>,
};
