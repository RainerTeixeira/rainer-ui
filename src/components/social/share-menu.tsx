'use client';

/**
 * Componente de Menu de Compartilhamento
 * 
 * Menu configurável para compartilhamento em múltiplas plataformas sociais.
 * Suporta compartilhamento nativo, cópia de link, QR Code e callbacks customizados.
 * 
 * @component
 * @example
 * // Uso básico
 * <ShareMenu url="/blog/post-123" title="Título do Post" />
 * 
 * // Plataformas específicas
 * <ShareMenu 
 *   url="/product/123" 
 *   title="Produto Incrível"
 *   platforms={['twitter', 'whatsapp', 'copy']}
 * />
 * 
 * // Com callback
 * <ShareMenu
 *   url="/dashboard/report"
 *   title="Relatório"
 *   onShare={(platform) => console.log('Compartilhado em:', platform)}
 * />
 */
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../overlays/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../overlays/dropdown-menu';
import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import {
  Check,
  Copy,
  Facebook,
  Link2,
  Linkedin,
  MessageCircle,
  QrCode,
  Send,
  Share2,
  Smartphone,
  Twitter,
} from 'lucide-react';

/**
 * Interface para plataformas de compartilhamento
 */
interface SharePlatform {
  id: string;
  name: string;
  icon: React.ReactNode;
  color?: string;
  url: string;
  order?: number;
}

/**
 * Propriedades do componente ShareMenu
 */
export interface ShareMenuProps {
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
  onShare?: (platform: string, data?: any) => void;
  /** Classes CSS adicionais */
  className?: string;
  /** Posição do menu dropdown */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** Alinhamento do menu dropdown */
  align?: 'start' | 'center' | 'end';
}

/**
 * Configurações das plataformas de compartilhamento
 */
const DEFAULT_PLATFORMS: SharePlatform[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: <Facebook className="h-4 w-4" />,
    color: 'text-blue-600',
    url: 'https://www.facebook.com/sharer/sharer.php?u={url}&t={title}',
    order: 1,
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    icon: <Twitter className="h-4 w-4" />,
    color: 'text-sky-500',
    url: 'https://twitter.com/intent/tweet?url={url}&text={title}',
    order: 2,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: <Linkedin className="h-4 w-4" />,
    color: 'text-blue-700',
    url: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
    order: 3,
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: <MessageCircle className="h-4 w-4" />,
    color: 'text-green-600',
    url: 'https://api.whatsapp.com/send?text={title}%20{url}',
    order: 4,
  },
  {
    id: 'telegram',
    name: 'Telegram',
    icon: <Send className="h-4 w-4" />,
    color: 'text-blue-500',
    url: 'https://t.me/share/url?url={url}&text={title}',
    order: 5,
  },
];

/**
 * Componente principal de menu de compartilhamento
 */
export function ShareMenu({
  url,
  title,
  description = '',
  platforms = ['facebook', 'twitter', 'linkedin', 'whatsapp', 'copy', 'qr'],
  showCopyLink = true,
  showQRCode = true,
  showNativeShare = true,
  variant = 'outline',
  size = 'sm',
  label = 'Compartilhar',
  showLabel = true,
  onShare,
  className,
  side = 'bottom',
  align = 'end',
}: ShareMenuProps) {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  /**
   * Obtém URL completa para compartilhamento
   */
  const shareUrl = typeof window !== 'undefined' 
    ? url.startsWith('http') 
      ? url 
      : `${window.location.origin}${url}`
    : url;

  /**
   * Copia link para área de transferência
   */
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      onShare?.('copy', { url: shareUrl });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Erro ao copiar link:', error);
      onShare?.('copy-error', { error });
    }
  };

  /**
   * Compartilhamento nativo usando Web Share API (mobile)
   */
  const shareNative = async () => {
    if (!navigator.share) return;

    try {
      await navigator.share({
        title,
        text: description,
        url: shareUrl,
      });
      onShare?.('native', { title, description, url: shareUrl });
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('Erro no compartilhamento nativo:', error);
        onShare?.('native-error', { error });
      }
    }
  };

  /**
   * Compartilha em uma plataforma específica
   */
  const shareOnPlatform = (platform: SharePlatform) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);
    const platformUrl = platform.url
      .replace('{url}', encodedUrl)
      .replace('{title}', encodedTitle);

    window.open(
      platformUrl,
      '_blank',
      'noopener,noreferrer,width=600,height=600'
    );
    
    onShare?.(platform.id, { 
      platform: platform.name, 
      url: shareUrl, 
      title 
    });
  };

  /**
   * Filtra e ordena as plataformas habilitadas
   */
  const enabledPlatforms = DEFAULT_PLATFORMS
    .filter(p => platforms.includes(p.id as any))
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  /**
   * Componente do botão de trigger
   */
  const TriggerButton = () => (
    <Button variant={variant} size={size} className={cn('gap-2', className)}>
      <Share2 className="h-4 w-4" />
      {showLabel && <span>{label}</span>}
    </Button>
  );

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <TriggerButton />
        </DropdownMenuTrigger>
        
        <DropdownMenuContent align={align} side={side} className="w-56">
          <DropdownMenuLabel>Compartilhar em</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* Compartilhamento nativo para dispositivos móveis */}
          {showNativeShare && typeof navigator !== 'undefined' && 'share' in navigator && (
            <>
              <DropdownMenuItem onClick={shareNative}>
                <Smartphone className="mr-2 h-4 w-4" />
                Compartilhar...
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}

          {/* Plataformas sociais habilitadas */}
          {enabledPlatforms.map((platform) => (
            <DropdownMenuItem 
              key={platform.id}
              onClick={() => shareOnPlatform(platform)}
            >
              <span className={cn('mr-2 h-4 w-4', platform.color)}>
                {platform.icon}
              </span>
              {platform.name}
            </DropdownMenuItem>
          ))}

          {/* Ações adicionais (copiar link, QR Code) */}
          {(showCopyLink || showQRCode) && <DropdownMenuSeparator />}

          {/* Copiar link para área de transferência */}
          {showCopyLink && (
            <DropdownMenuItem onClick={copyToClipboard}>
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-green-500">Link copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copiar link
                </>
              )}
            </DropdownMenuItem>
          )}

          {/* Gerar QR Code */}
          {showQRCode && (
            <DropdownMenuItem onClick={() => setShowQR(true)}>
              <QrCode className="mr-2 h-4 w-4" />
              QR Code
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Modal para exibição do QR Code */}
      {showQRCode && (
        <Dialog open={showQR} onOpenChange={setShowQR}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="space-y-2">
              <DialogTitle>Compartilhar via QR Code</DialogTitle>
              <DialogDescription>
                Escaneie o QR Code para acessar este conteúdo
              </DialogDescription>
            </DialogHeader>

            <div className="flex justify-center p-6 bg-white rounded-lg">
              <QRCodeSVG 
                value={shareUrl} 
                size={256} 
                level="H" 
                includeMargin 
                bgColor="white"
                fgColor="black"
              />
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={() => setShowQR(false)}
              >
                Fechar
              </Button>
              <Button 
                variant="default" 
                size="lg" 
                className="flex-1" 
                onClick={copyToClipboard}
              >
                <Link2 className="mr-2 h-4 w-4" />
                Copiar Link
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

/**
 * Variantes pré-configuradas do ShareMenu para diferentes casos de uso
 */
export const ShareMenuVariants = {
  /**
   * Variante para blogs com foco em redes sociais
   */
  Blog: (props: Omit<ShareMenuProps, 'platforms' | 'showCopyLink' | 'showQRCode'>) => (
    <ShareMenu 
      {...props} 
      platforms={['twitter', 'facebook', 'linkedin', 'whatsapp', 'copy', 'qr']} 
    />
  ),

  /**
   * Variante para e-commerce com foco em WhatsApp
   */
  Ecommerce: (props: Omit<ShareMenuProps, 'platforms'>) => (
    <ShareMenu 
      {...props} 
      platforms={['whatsapp', 'facebook', 'telegram', 'copy']} 
      showQRCode={false} 
    />
  ),

  /**
   * Variante minimalista para dashboards
   */
  Dashboard: (props: Omit<ShareMenuProps, 'platforms' | 'variant' | 'size'>) => (
    <ShareMenu 
      {...props} 
      platforms={['copy']} 
      variant="ghost" 
      size="sm" 
      showQRCode={false} 
    />
  ),

  /**
   * Variante otimizada para dispositivos móveis
   */
  Mobile: (props: Omit<ShareMenuProps, 'platforms' | 'showNativeShare'>) => (
    <ShareMenu 
      {...props} 
      platforms={['native', 'whatsapp', 'telegram', 'copy']} 
      showNativeShare={true} 
    />
  ),
} as const;