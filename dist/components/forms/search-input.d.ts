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
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
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
declare const searchInputVariants: (props?: {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "minimal" | "filled" | "outlined";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do SearchInput
 */
export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size' | 'onSubmit'>, VariantProps<typeof searchInputVariants> {
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
export declare const SearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
