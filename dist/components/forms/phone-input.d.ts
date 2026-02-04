import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Interface de país
 */
interface Country {
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
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do PhoneInput
 */
interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'>, VariantProps<typeof phoneInputVariants> {
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
declare const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps & React.RefAttributes<HTMLInputElement>>;

export { type Country, PhoneInput, type PhoneInputProps };
