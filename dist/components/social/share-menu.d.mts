import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Propriedades do componente ShareMenu
 */
interface ShareMenuProps {
    /** URL para compartilhar */
    url: string;
    /** Título do conteúdo */
    title: string;
    /** Descrição do conteúdo */
    description?: string;
    /** Plataformas habilitadas */
    platforms?: Array<'facebook' | 'twitter' | 'linkedin' | 'whatsapp' | 'telegram' | 'copy' | 'qr' | 'native'>;
    /** Exibir opção de copiar link */
    showCopyLink?: boolean;
    /** Exibir opção de QR Code */
    showQRCode?: boolean;
    /** Exibir compartilhamento nativo (mobile) */
    showNativeShare?: boolean;
    /** Estilo do botão */
    variant?: 'default' | 'ghost' | 'outline' | 'minimal';
    /** Tamanho do botão */
    size?: 'sm' | 'default' | 'lg';
    /** Texto do botão */
    label?: string;
    /** Exibir texto no botão */
    showLabel?: boolean;
    /** Callback ao compartilhar */
    onShare?: (platform: string, data?: Record<string, unknown>) => void;
    /** Classes CSS adicionais */
    className?: string;
    /** Posição do menu dropdown */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /** Alinhamento do menu dropdown */
    align?: 'start' | 'center' | 'end';
}
/**
 * Componente principal de menu de compartilhamento
 */
declare function ShareMenu({ url, title, description, platforms, showCopyLink, showQRCode, showNativeShare, variant, size, label, showLabel, onShare, className, side, align, }: ShareMenuProps): react_jsx_runtime.JSX.Element;
/**
 * Variantes pré-configuradas do ShareMenu para diferentes casos de uso
 */
declare const ShareMenuVariants: {
    /**
     * Variante para blogs com foco em redes sociais
     */
    readonly Blog: (props: Omit<ShareMenuProps, "platforms" | "showCopyLink" | "showQRCode">) => react_jsx_runtime.JSX.Element;
    /**
     * Variante para e-commerce com foco em WhatsApp
     */
    readonly Ecommerce: (props: Omit<ShareMenuProps, "platforms">) => react_jsx_runtime.JSX.Element;
    /**
     * Variante minimalista para dashboards
     */
    readonly Dashboard: (props: Omit<ShareMenuProps, "platforms" | "variant" | "size">) => react_jsx_runtime.JSX.Element;
    /**
     * Variante otimizada para dispositivos móveis
     */
    readonly Mobile: (props: Omit<ShareMenuProps, "platforms" | "showNativeShare">) => react_jsx_runtime.JSX.Element;
};

export { ShareMenu, type ShareMenuProps, ShareMenuVariants };
