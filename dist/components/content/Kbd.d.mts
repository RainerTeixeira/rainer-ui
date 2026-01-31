import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Kbd
 */
declare const kbdVariants: (props?: {
    variant?: "default" | "outline" | "ghost" | "neon" | "filled";
    size?: "xs" | "sm" | "md" | "lg";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Kbd
 */
interface KbdProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof kbdVariants> {
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
declare const Kbd: React.ForwardRefExoticComponent<KbdProps & React.RefAttributes<HTMLElement>>;
/**
 * KbdCombo - Combinação de teclas
 */
interface KbdComboProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Teclas da combinação */
    keys: React.ReactNode[];
    /** Separador entre teclas */
    separator?: string;
    /** Tamanho das teclas */
    size?: VariantProps<typeof kbdVariants>['size'];
    /** Variante das teclas */
    variant?: VariantProps<typeof kbdVariants>['variant'];
}
declare const KbdCombo: React.ForwardRefExoticComponent<KbdComboProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Atalhos comuns pré-definidos */
declare const KeyboardShortcuts: {
    CtrlC: () => react_jsx_runtime.JSX.Element;
    CtrlV: () => react_jsx_runtime.JSX.Element;
    CtrlX: () => react_jsx_runtime.JSX.Element;
    CtrlZ: () => react_jsx_runtime.JSX.Element;
    CtrlY: () => react_jsx_runtime.JSX.Element;
    CtrlA: () => react_jsx_runtime.JSX.Element;
    CtrlS: () => react_jsx_runtime.JSX.Element;
    CtrlF: () => react_jsx_runtime.JSX.Element;
    CtrlP: () => react_jsx_runtime.JSX.Element;
    Delete: () => react_jsx_runtime.JSX.Element;
    Enter: () => react_jsx_runtime.JSX.Element;
    Esc: () => react_jsx_runtime.JSX.Element;
    Space: () => react_jsx_runtime.JSX.Element;
    Tab: () => react_jsx_runtime.JSX.Element;
    ShiftTab: () => react_jsx_runtime.JSX.Element;
    AltTab: () => react_jsx_runtime.JSX.Element;
    CmdC: () => react_jsx_runtime.JSX.Element;
    CmdV: () => react_jsx_runtime.JSX.Element;
    CmdX: () => react_jsx_runtime.JSX.Element;
    CmdZ: () => react_jsx_runtime.JSX.Element;
    CmdShiftZ: () => react_jsx_runtime.JSX.Element;
    CmdA: () => react_jsx_runtime.JSX.Element;
    CmdS: () => react_jsx_runtime.JSX.Element;
    CmdF: () => react_jsx_runtime.JSX.Element;
    CmdP: () => react_jsx_runtime.JSX.Element;
    CmdSpace: () => react_jsx_runtime.JSX.Element;
    OptionTab: () => react_jsx_runtime.JSX.Element;
    ArrowUp: () => react_jsx_runtime.JSX.Element;
    ArrowDown: () => react_jsx_runtime.JSX.Element;
    ArrowLeft: () => react_jsx_runtime.JSX.Element;
    ArrowRight: () => react_jsx_runtime.JSX.Element;
    F1: () => react_jsx_runtime.JSX.Element;
    F2: () => react_jsx_runtime.JSX.Element;
    F3: () => react_jsx_runtime.JSX.Element;
    F4: () => react_jsx_runtime.JSX.Element;
    F5: () => react_jsx_runtime.JSX.Element;
    F6: () => react_jsx_runtime.JSX.Element;
    F7: () => react_jsx_runtime.JSX.Element;
    F8: () => react_jsx_runtime.JSX.Element;
    F9: () => react_jsx_runtime.JSX.Element;
    F10: () => react_jsx_runtime.JSX.Element;
    F11: () => react_jsx_runtime.JSX.Element;
    F12: () => react_jsx_runtime.JSX.Element;
};

export { Kbd, KbdCombo, type KbdComboProps, type KbdProps, KeyboardShortcuts };
