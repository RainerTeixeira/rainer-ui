/**
 * Componente Kbd
 *
 * Indicador visual de teclas do teclado.
 * Ideal para atalhos e documentação.
 *
 * @module @rainersoft/utils/content/kbd
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do Kbd
 */
declare const kbdVariants: (props?: {
    variant?: "default" | "outline" | "ghost" | "neon" | "filled";
    size?: "xs" | "sm" | "md" | "lg";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Kbd
 */
export interface KbdProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof kbdVariants> {
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
export declare const Kbd: React.ForwardRefExoticComponent<KbdProps & React.RefAttributes<HTMLElement>>;
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
export declare const KbdCombo: React.ForwardRefExoticComponent<KbdComboProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Atalhos comuns pré-definidos */
export declare const KeyboardShortcuts: {
    CtrlC: () => import("react/jsx-runtime").JSX.Element;
    CtrlV: () => import("react/jsx-runtime").JSX.Element;
    CtrlX: () => import("react/jsx-runtime").JSX.Element;
    CtrlZ: () => import("react/jsx-runtime").JSX.Element;
    CtrlY: () => import("react/jsx-runtime").JSX.Element;
    CtrlA: () => import("react/jsx-runtime").JSX.Element;
    CtrlS: () => import("react/jsx-runtime").JSX.Element;
    CtrlF: () => import("react/jsx-runtime").JSX.Element;
    CtrlP: () => import("react/jsx-runtime").JSX.Element;
    Delete: () => import("react/jsx-runtime").JSX.Element;
    Enter: () => import("react/jsx-runtime").JSX.Element;
    Esc: () => import("react/jsx-runtime").JSX.Element;
    Space: () => import("react/jsx-runtime").JSX.Element;
    Tab: () => import("react/jsx-runtime").JSX.Element;
    ShiftTab: () => import("react/jsx-runtime").JSX.Element;
    AltTab: () => import("react/jsx-runtime").JSX.Element;
    CmdC: () => import("react/jsx-runtime").JSX.Element;
    CmdV: () => import("react/jsx-runtime").JSX.Element;
    CmdX: () => import("react/jsx-runtime").JSX.Element;
    CmdZ: () => import("react/jsx-runtime").JSX.Element;
    CmdShiftZ: () => import("react/jsx-runtime").JSX.Element;
    CmdA: () => import("react/jsx-runtime").JSX.Element;
    CmdS: () => import("react/jsx-runtime").JSX.Element;
    CmdF: () => import("react/jsx-runtime").JSX.Element;
    CmdP: () => import("react/jsx-runtime").JSX.Element;
    CmdSpace: () => import("react/jsx-runtime").JSX.Element;
    OptionTab: () => import("react/jsx-runtime").JSX.Element;
    ArrowUp: () => import("react/jsx-runtime").JSX.Element;
    ArrowDown: () => import("react/jsx-runtime").JSX.Element;
    ArrowLeft: () => import("react/jsx-runtime").JSX.Element;
    ArrowRight: () => import("react/jsx-runtime").JSX.Element;
    F1: () => import("react/jsx-runtime").JSX.Element;
    F2: () => import("react/jsx-runtime").JSX.Element;
    F3: () => import("react/jsx-runtime").JSX.Element;
    F4: () => import("react/jsx-runtime").JSX.Element;
    F5: () => import("react/jsx-runtime").JSX.Element;
    F6: () => import("react/jsx-runtime").JSX.Element;
    F7: () => import("react/jsx-runtime").JSX.Element;
    F8: () => import("react/jsx-runtime").JSX.Element;
    F9: () => import("react/jsx-runtime").JSX.Element;
    F10: () => import("react/jsx-runtime").JSX.Element;
    F11: () => import("react/jsx-runtime").JSX.Element;
    F12: () => import("react/jsx-runtime").JSX.Element;
};
export {};
