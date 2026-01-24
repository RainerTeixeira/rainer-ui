/**
 * Componente RangeSlider
 *
 * Slider de intervalo com dois controles.
 * Suporta valores mínimos, máximos e passos customizados.
 *
 * @module @rainersoft/ui/components/forms/range-slider
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Interface de valores do range
 */
export interface RangeValue {
    min: number;
    max: number;
}
/**
 * Variantes do RangeSlider
 */
declare const rangeSliderVariants: (props?: {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "colored";
    disabled?: boolean;
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do RangeSlider
 */
export interface RangeSliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'onChange' | 'defaultValue'>, VariantProps<typeof rangeSliderVariants> {
    /** Valor atual */
    value?: RangeValue;
    /** Valor inicial */
    defaultValue?: RangeValue;
    /** Callback quando muda o valor */
    onChange?: (value: RangeValue) => void;
    /** Callback quando solta o controle */
    onChangeEnd?: (value: RangeValue) => void;
    /** Valor mínimo */
    min?: number;
    /** Valor máximo */
    max?: number;
    /** Passo do slider */
    step?: number;
    /** Se está desabilitado */
    disabled?: boolean;
    /** Se mostra os valores */
    showValue?: boolean;
    /** Labels dos controles */
    labels?: {
        min?: string;
        max?: string;
    };
    /** Prefixo do valor */
    prefix?: string;
    /** Sufixo do valor */
    suffix?: string;
    /** Cor do slider */
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}
/**
 * Componente RangeSlider
 *
 * Slider com dois controles para seleção de intervalo.
 *
 * @example
 * ```tsx
 * // Básico
 * <RangeSlider
 *   value={[25, 75]}
 *   onChange={setValue}
 *   min={0}
 *   max={100}
 * />
 *
 * // Com valores visíveis
 * <RangeSlider
 *   value={[1000, 5000]}
 *   onChange={setValue}
 *   min={0}
 *   max={10000}
 *   step={100}
 *   showValue
 *   prefix="R$"
 * />
 *
 * // Com cores customizadas
 * <RangeSlider
 *   value={[1, 5]}
 *   onChange={setValue}
 *   min={1}
 *   max={10}
 *   color="success"
 * />
 * ```
 */
export declare const RangeSlider: React.ForwardRefExoticComponent<RangeSliderProps & React.RefAttributes<HTMLDivElement>>;
export {};
