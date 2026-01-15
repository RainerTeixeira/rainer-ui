import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Propriedades do componente ShareButton
 */
interface ShareButtonProps {
    /** URL a ser compartilhada */
    url: string;
    /** Título do conteúdo */
    title: string;
    /** Descrição do conteúdo (opcional) */
    description?: string;
    /** Estilo do botão */
    variant?: 'default' | 'ghost' | 'outline';
    /** Tamanho do botão */
    size?: 'sm' | 'default' | 'lg';
    /** Exibir texto "Compartilhar" no botão */
    showLabel?: boolean;
    /** Callback executado ao compartilhar em qualquer plataforma */
    onShare?: (platform: string) => void;
    /** Callback executado ao copiar o link */
    onCopy?: () => void;
}
/**
 * Componente principal ShareButton
 */
declare function ShareButton({ url, title, description, variant, size, showLabel, onShare, onCopy, }: ShareButtonProps): react_jsx_runtime.JSX.Element;

export { ShareButton, type ShareButtonProps };
