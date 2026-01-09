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

import { Phone, Globe } from 'lucide-react';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

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
 * Lista de países suportados */
const COUNTRIES: Country[] = [
  { code: 'BR', name: 'Brasil', ddi: '+55', flag: '🇧🇷', mask: '(00) 00000-0000' },
  { code: 'US', name: 'Estados Unidos', ddi: '+1', flag: '🇺🇸', mask: '(000) 000-0000' },
  { code: 'PT', name: 'Portugal', ddi: '+351', flag: '🇵🇹', mask: '000 000 000' },
  { code: 'ES', name: 'Espanha', ddi: '+34', flag: '🇪🇸', mask: '000 000 000' },
  { code: 'FR', name: 'França', ddi: '+33', flag: '🇫🇷', mask: '00 00 00 00 00' },
  { code: 'IT', name: 'Itália', ddi: '+39', flag: '🇮🇹', mask: '000 000 0000' },
  { code: 'DE', name: 'Alemanha', ddi: '+49', flag: '🇩🇪', mask: '000 0000000' },
  { code: 'UK', name: 'Reino Unido', ddi: '+44', flag: '🇬🇧', mask: '0000 000 000' },
  { code: 'AR', name: 'Argentina', ddi: '+54', flag: '🇦🇷', mask: '00 0000-0000' },
  { code: 'CL', name: 'Chile', ddi: '+56', flag: '🇨🇱', mask: '0000 000 000' },
  { code: 'MX', name: 'México', ddi: '+52', flag: '🇲🇽', mask: '000 000 0000' },
  { code: 'CA', name: 'Canadá', ddi: '+1', flag: '🇨🇦', mask: '(000) 000-0000' },
  { code: 'AU', name: 'Austrália', ddi: '+61', flag: '🇦🇺', mask: '000 000 000' },
  { code: 'JP', name: 'Japão', ddi: '+81', flag: '🇯🇵', mask: '00-0000-0000' },
  { code: 'CN', name: 'China', ddi: '+86', flag: '🇨🇳', mask: '000 0000 0000' },
];

/**
 * Variantes do PhoneInput
 */
const phoneInputVariants = cva(
  'flex w-full',
  {
    variants: {
      size: {
        sm: 'h-9',
        md: 'h-10',
        lg: 'h-12',
      },
      variant: {
        default: '',
        filled: 'bg-muted',
        outlined: 'border-2',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

/**
 * Props do PhoneInput
 */
export interface PhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>,
    VariantProps<typeof phoneInputVariants> {
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
 * Aplica máscara ao telefone
 */
function applyMask(value: string, mask: string): string {
  let result = '';
  let valueIndex = 0;
  
  for (let i = 0; i < mask.length && valueIndex < value.length; i++) {
    if (mask[i] === '0') {
      result += value[valueIndex];
      valueIndex++;
    } else {
      result += mask[i];
    }
  }
  
  return result;
}

/**
 * Remove máscara do telefone
 */
function removeMask(value: string): string {
  return value.replace(/\D/g, '');
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
export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      value = '',
      onChange,
      country = 'BR',
      onCountryChange,
      placeholder,
      showCountrySelector = true,
      countries = COUNTRIES,
      disabled = false,
      includeDDI = false,
      numbersOnly = true,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(value);
    const [selectedCountry, setSelectedCountry] = React.useState<Country>(
      countries.find(c => c.code === country) || countries[0]
    );
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    
    const inputRef = React.useRef<HTMLInputElement>(null);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    // Usa valor controlado ou interno
    const currentValue = value !== undefined ? value : internalValue;

    // Atualiza país quando o prop muda
    React.useEffect(() => {
      const newCountry = countries.find(c => c.code === country) || countries[0];
      setSelectedCountry(newCountry);
    }, [country, countries]);

    // Manipula mudança no input
    const handleInputChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      let inputValue = event.target.value;
      
      // Remove caracteres não permitidos
      if (numbersOnly) {
        inputValue = removeMask(inputValue);
      }
      
      // Aplica máscara
      const maskedValue = applyMask(inputValue, selectedCountry.mask);
      
      setInternalValue(maskedValue);
      
      // Valores para o callback
      const finalValue = includeDDI 
        ? `${selectedCountry.ddi} ${removeMask(maskedValue)}`
        : removeMask(maskedValue);
      
      onChange?.(finalValue, selectedCountry);
    }, [selectedCountry, numbersOnly, includeDDI, onChange]);

    // Seleciona país
    const handleCountrySelect = React.useCallback((country: Country) => {
      setSelectedCountry(country);
      setIsDropdownOpen(false);
      onCountryChange?.(country);
      
      // Limpa o valor ao mudar de país se tiver máscaras diferentes
      if (country.mask !== selectedCountry.mask) {
        setInternalValue('');
        onChange?.('', country);
      }
    }, [selectedCountry, onCountryChange, onChange]);

    // Fecha dropdown ao clicar fora
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current && 
          !dropdownRef.current.contains(event.target as Node) &&
          !inputRef.current?.contains(event.target as Node)
        ) {
          setIsDropdownOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Placeholder baseado no país
    const inputPlaceholder = placeholder || selectedCountry.mask;

    return (
      <div
        className={cn(phoneInputVariants({ size, variant }), className)}
      >
        {/* Seletor de país */}
        {showCountrySelector && (
          <div className="relative">
            <Button
              type="button"
              variant="outline"
              className="rounded-r-none border-r-0 pr-1"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              disabled={disabled}
            >
              <span className="mr-1">{selectedCountry.flag}</span>
              <Globe className="h-4 w-4" />
            </Button>
            
            {/* Dropdown */}
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 z-50 mt-1 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95 max-h-60 overflow-y-auto"
              >
                {countries.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    className={cn(
                      'flex items-center gap-2 w-full rounded-sm px-2 py-1.5 text-sm',
                      'hover:bg-accent hover:text-accent-foreground',
                      'focus:bg-accent focus:text-accent-foreground',
                      c.code === selectedCountry.code && 'bg-accent text-accent-foreground'
                    )}
                    onClick={() => handleCountrySelect(c)}
                  >
                    <span>{c.flag}</span>
                    <span className="flex-1 text-left">{c.name}</span>
                    <span className="text-muted-foreground text-xs">{c.ddi}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Input do telefone */}
        <div className="relative flex-1">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          
          <input
            ref={ref}
            type="tel"
            value={currentValue}
            onChange={handleInputChange}
            placeholder={inputPlaceholder}
            disabled={disabled}
            className={cn(
              'flex h-full w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
              'file:border-0 file:bg-transparent file:text-sm file:font-medium',
              'placeholder:text-muted-foreground',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              showCountrySelector ? 'rounded-l-none pl-10' : 'pl-10',
              variant === 'filled' && 'border-transparent bg-muted',
              variant === 'outlined' && 'border-2'
            )}
            {...props}
          />
        </div>
      </div>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';
