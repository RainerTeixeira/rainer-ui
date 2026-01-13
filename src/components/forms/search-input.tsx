/**
 * Componente SearchInput
 *
 * Campo de busca com sugestões e filtros.
 * Suporta autocomplete, histórico e ações customizadas.
 *
 * @module @rainersoft/ui/components/forms/search-input
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Clock from 'lucide-react/dist/esm/icons/clock';
import Filter from 'lucide-react/dist/esm/icons/filter';
import Search from 'lucide-react/dist/esm/icons/search';
import X from 'lucide-react/dist/esm/icons/x';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

/**
 * Interface de sugestão
 */
export interface SearchSuggestion {
  id: string;
  text: string;
  type?: 'history' | 'trending' | 'filter';
  description?: string;
  icon?: React.ReactNode;
  action?: () => void;
}

/**
 * Variantes do SearchInput
 */
const searchInputVariants = cva(
  'relative flex w-full items-center',
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
        minimal: 'border-transparent bg-transparent',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

/**
 * Props do SearchInput
 */
export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size' | 'onSubmit'>,
    VariantProps<typeof searchInputVariants> {
  /** Valor do input */
  value?: string;
  /** Callback quando muda o valor */
  onChange?: (value: string) => void;
  /** Callback ao submeter */
  onSubmit?: (value: string) => void;
  /** Placeholder */
  placeholder?: string;
  /** Sugestões de autocomplete */
  suggestions?: SearchSuggestion[];
  /** Histórico de buscas */
  history?: string[];
  /** Se mostra o botão de limpar */
  showClear?: boolean;
  /** Se mostra o botão de filtro */
  showFilter?: boolean;
  /** Callback ao clicar no filtro */
  onFilter?: () => void;
  /** Se está carregando */
  loading?: boolean;
  /** Tempo de debounce (ms) */
  debounceTime?: number;
  /** Número máximo de sugestões */
  maxSuggestions?: number;
  /** Se deve salvar no histórico */
  saveToHistory?: boolean;
}

/**
 * Componente SearchInput
 *
 * Campo de busca avançado com sugestões.
 *
 * @example
 * ```tsx
 * // Básico
 * <SearchInput 
 *   value={search}
 *   onChange={setSearch}
 *   onSubmit={handleSearch}
 *   placeholder="Buscar produtos..."
 * />
 *
 * // Com sugestões
 * <SearchInput 
 *   value={search}
 *   onChange={setSearch}
 *   suggestions={suggestions}
 *   history={searchHistory}
 *   showFilter
 *   onFilter={openFilters}
 * />
 * ```
 */
export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      value = '',
      onChange,
      onSubmit,
      placeholder = 'Buscar...',
      suggestions = [],
      history = [],
      showClear = true,
      showFilter = false,
      onFilter,
      loading = false,
      debounceTime = 300,
      maxSuggestions = 10,
      // saveToHistory, // TODO: implementar funcionalidade de histórico
      disabled,
      // props, // Props adicionais não utilizados
    },
    // ref, // TODO: implementar ref forwarding
  ) => {
    const [internalValue, setInternalValue] = React.useState(value);
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    const [filteredSuggestions, setFilteredSuggestions] = React.useState<SearchSuggestion[]>([]);
    
    const inputRef = React.useRef<HTMLInputElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const debounceRef = React.useRef<NodeJS.Timeout>();

    // Usa valor controlado ou interno
    const currentValue = value !== undefined ? value : internalValue;

    // Atualiza valor com debounce
    const setValue = React.useCallback((newValue: string) => {
      setInternalValue(newValue);
      
      // Cancela debounce anterior
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      
      // Debounce
      debounceRef.current = setTimeout(() => {
        onChange?.(newValue);
      }, debounceTime);
    }, [onChange, debounceTime]);

    // Filtra sugestões
    React.useEffect(() => {
      if (!currentValue.trim()) {
        // Mostra histórico e trending
        const historySuggestions: SearchSuggestion[] = history
          .slice(0, 5)
          .map((item, index) => ({
            id: `history-${index}`,
            text: item,
            type: 'history' as const,
            icon: <Clock className="h-4 w-4" />,
          }));
        
        const trendingSuggestions: SearchSuggestion[] = suggestions
          .filter(s => s.type === 'trending')
          .slice(0, 5);
        
        setFilteredSuggestions([...historySuggestions, ...trendingSuggestions]);
      } else {
        // Filtra por texto
        const filtered = suggestions.filter(s => 
          s.text.toLowerCase().includes(currentValue.toLowerCase())
        ).slice(0, maxSuggestions);
        
        setFilteredSuggestions(filtered);
      }
    }, [currentValue, suggestions, history, maxSuggestions]);

    // Manipuladores de eventos
    const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
      switch (event.key) {
        case 'Enter':
          event.preventDefault();
          if (selectedIndex >= 0 && filteredSuggestions[selectedIndex]) {
            const suggestion = filteredSuggestions[selectedIndex];
            if (suggestion.action) {
              suggestion.action();
            } else {
              setValue(suggestion.text);
              onSubmit?.(suggestion.text);
            }
          } else {
            onSubmit?.(currentValue);
          }
          setIsOpen(false);
          break;
          
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredSuggestions.length - 1 ? prev + 1 : prev
          );
          break;
          
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
          
        case 'Escape':
          setIsOpen(false);
          setSelectedIndex(-1);
          inputRef.current?.blur();
          break;
      }
    }, [selectedIndex, filteredSuggestions, currentValue, setValue, onSubmit]);

    const handleFocus = React.useCallback(() => {
      setIsOpen(true);
    }, []);

    const handleBlur = React.useCallback((event: React.FocusEvent) => {
      // Fecha se não clicou em uma sugestão
      if (!event.relatedTarget?.closest('.search-suggestion')) {
        setTimeout(() => setIsOpen(false), 150);
      }
    }, []);

    const handleClear = React.useCallback(() => {
      setValue('');
      inputRef.current?.focus();
    }, [setValue]);

    const handleSuggestionClick = React.useCallback((suggestion: SearchSuggestion) => {
      if (suggestion.action) {
        suggestion.action();
      } else {
        setValue(suggestion.text);
        onSubmit?.(suggestion.text);
      }
      setIsOpen(false);
    }, [setValue, onSubmit]);

    // Fecha ao clicar fora
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Ícone por tipo
    const getIcon = (type?: SearchSuggestion['type']) => {
      switch (type) {
        case 'history':
          return <Clock className="h-4 w-4 text-muted-foreground" />;
        case 'trending':
          return <TrendingUp className="h-4 w-4 text-amber-500" />;
        case 'filter':
          return <Filter className="h-4 w-4 text-blue-500" />;
        default:
          return null;
      }
    };

    return (
      <div
        ref={containerRef}
        className={cn('relative', className)}
      >
        {/* Input */}
        <div className={cn(
          searchInputVariants({ size: size as 'sm' | 'md' | 'lg', variant }),
          'rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
          'focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
          disabled && 'opacity-50 cursor-not-allowed',
          variant === 'filled' && 'border-transparent',
          variant === 'outlined' && 'border-2',
          variant === 'minimal' && 'border-transparent bg-transparent'
        )}>
          <Search className="h-4 w-4 text-muted-foreground" />
          
          <input
            ref={inputRef}
            type="text"
            value={currentValue}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            className="flex-1 bg-transparent outline-none ml-2 placeholder:text-muted-foreground"
            // {...props} // Props adicionais não utilizados
          />
          
          {/* Botões */}
          <div className="flex items-center gap-1">
            {loading && (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            )}
            
            {showClear && currentValue && !disabled && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={handleClear}
              >
                <X className="h-3 w-3" />
              </Button>
            )}
            
            {showFilter && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={onFilter}
                disabled={disabled}
              >
                <Filter className="h-3 w-3" />
              </Button>
            )}
          </div>
        </div>

        {/* Sugestões */}
        {isOpen && filteredSuggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95">
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={suggestion.id}
                className={cn(
                  'search-suggestion flex items-center gap-3 rounded-sm px-2 py-1.5 text-sm cursor-pointer',
                  'hover:bg-accent hover:text-accent-foreground',
                  'focus:bg-accent focus:text-accent-foreground',
                  index === selectedIndex && 'bg-accent text-accent-foreground'
                )}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.icon || getIcon(suggestion.type)}
                <div className="flex-1 min-w-0">
                  <div className="truncate">{suggestion.text}</div>
                  {suggestion.description && (
                    <div className="text-xs text-muted-foreground truncate">
                      {suggestion.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

