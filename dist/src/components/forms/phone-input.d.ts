/**
 * Componente PhoneInput
 *
 * Campo de entrada para números de telefone.
 * Suporta máscaras, DDI e validação internacional.
 *
 * @module @rainersoft/ui/components/forms/phone-input
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Interface de país
 */
export interface Country {
    code: string;
    name: string;
    ddi: string;
    flag: string;
    mask: string;
}
/**
 * Variantes do PhoneInput
 */
declare const phoneInputVariants: (props?: {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "filled" | "outlined";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do PhoneInput
 */
export interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'>, VariantProps<typeof phoneInputVariants> {
    /** Valor do telefone */
    value?: string;
    /** Callback quando muda o valor */
    onChange?: (value: string, country: Country) => void;
    /** País selecionado */
    country?: string;
    /** Callback quando muda o país */
    onCountryChange?: (country: Country) => void;
    /** Placeholder */
    placeholder?: string;
    /** Se mostra o seletor de país */
    showCountrySelector?: boolean;
    /** Lista de países disponíveis */
    countries?: Country[];
    /** Se está desabilitado */
    disabled?: boolean;
    /** Se deve incluir o DDI no valor */
    includeDDI?: boolean;
    /** Se permite apenas números */
    numbersOnly?: boolean;
}
/**
 * Componente PhoneInput
 *
 * Campo de telefone com seletor de país e máscara.
 *
 * @example
 * ```tsx
 * // Básico
 * <PhoneInput
 *   value={phone}
 *   onChange={setPhone}
 *   country="BR"
 * />
 *
 * // Sem seletor de país
 * <PhoneInput
 *   value={phone}
 *   onChange={setPhone}
 *   showCountrySelector={false}
 *   placeholder="(00) 00000-0000"
 * />
 *
 * // Com DDI incluído
 * <PhoneInput
 *   value={phone}
 *   onChange={setPhone}
 *   includeDDI
 *   showCountrySelector
 * />
 * ```
 */
export declare const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
