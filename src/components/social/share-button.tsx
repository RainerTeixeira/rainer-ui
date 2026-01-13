'use client';

/**
 * Componente ShareButton - Botão de Compartilhamento Social
 * 
 * Botão com menu dropdown para compartilhamento em múltiplas plataformas sociais.
 * Suporta compartilhamento nativo (mobile), QR Code e cópia para clipboard.
 * 
 * @component
 * @example
 * // Uso básico
 * <ShareButton url="/blog/post-123" title="Meu Post Incrível" />
 * 
 * // Com descrição e callback
 * <ShareButton
 *   url="/product/456"
 *   title="Produto em Oferta"
 *   description="Confira este produto com desconto especial!"
 *   onShare={(platform) => analytics.track('share', { platform })}
 * />
 * 
 * // Variante minimalista
 * <ShareButton
 *   url="/dashboard"
 *   title="Relatório"
 *   variant="ghost"
 *   size="sm"
 *   showLabel={false}
 * />
 */
import { Button } from '../ui/button';
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
import Check from 'lucide-react/dist/esm/icons/check';
import Facebook from 'lucide-react/dist/esm/icons/facebook';
import Link from 'lucide-react/dist/esm/icons/link';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';
import QrCode from 'lucide-react/dist/esm/icons/qr-code';
import Send from 'lucide-react/dist/esm/icons/send';
import Share2 from 'lucide-react/dist/esm/icons/share-2';
import Twitter from 'lucide-react/dist/esm/icons/twitter';

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
 * Mapeamento de URLs de compartilhamento por plataforma
 */
const SHARE_URLS = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u={url}`,
  twitter: `https://twitter.com/intent/tweet?url={url}&text={title}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url={url}`,
  whatsapp: `https://api.whatsapp.com/send?text={title}%20{url}`,
  telegram: `https://t.me/share/url?url={url}&text={title}`,
} as const;

/**
 * Componente principal ShareButton
 */
export function ShareButton({
  url,
  title,
  description = '',
  variant = 'outline',
  size = 'sm',
  showLabel = true,
  onShare,
  onCopy,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  /**
   * Constrói URL completa para compartilhamento
   */
  const shareUrl =
    typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;

  /**
   * Copia URL para a área de transferência
   */
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      onCopy?.();

      // Reseta estado após 2 segundos
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Erro ao copiar link:', error);
    }
  }

  /**
   * Compartilhamento nativo usando Web Share API (dispositivos móveis)
   */
  async function shareNative() {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: shareUrl,
        });
        onShare?.('native');
      } catch (error) {
        // Ignora erro quando usuário cancela o compartilhamento
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Erro ao compartilhar:', error);
        }
      }
    }
  }

  /**
   * Compartilha em uma plataforma social específica
   */
  function shareOnPlatform(platform: keyof typeof SHARE_URLS) {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);
    
    const platformUrl = SHARE_URLS[platform]
      .replace('{url}', encodedUrl)
      .replace('{title}', encodedTitle);

    // Abre em nova janela
    window.open(
      platformUrl,
      '_blank',
      'noopener,noreferrer,width=600,height=600'
    );
    
    onShare?.(platform);
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={variant} size={size} className="gap-2">
            <Share2 className="h-4 w-4" />
            {showLabel && <span>Compartilhar</span>}
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Compartilhar em</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* Compartilhamento nativo para dispositivos móveis */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <>
              <DropdownMenuItem onClick={shareNative}>
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar...
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}

          {/* Plataformas sociais */}
          <DropdownMenuItem onClick={() => shareOnPlatform('facebook')}>
            <Facebook className="mr-2 h-4 w-4 text-blue-600" />
            Facebook
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => shareOnPlatform('twitter')}>
            <Twitter className="mr-2 h-4 w-4 text-sky-500" />
            Twitter / X
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => shareOnPlatform('linkedin')}>
            <Linkedin className="mr-2 h-4 w-4 text-blue-700" />
            LinkedIn
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => shareOnPlatform('whatsapp')}>
            <MessageCircle className="mr-2 h-4 w-4 text-green-600" />
            WhatsApp
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => shareOnPlatform('telegram')}>
            <Send className="mr-2 h-4 w-4 text-blue-500" />
            Telegram
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Copiar link para área de transferência */}
          <DropdownMenuItem onClick={copyToClipboard}>
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span className="text-green-500">Link copiado!</span>
              </>
            ) : (
              <>
                <Link className="mr-2 h-4 w-4" />
                Copiar link
              </>
            )}
          </DropdownMenuItem>

          {/* Gerar QR Code */}
          <DropdownMenuItem onClick={() => setShowQR(true)}>
            <QrCode className="mr-2 h-4 w-4" />
            QR Code
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Modal para exibição do QR Code */}
      <Dialog open={showQR} onOpenChange={setShowQR}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="space-y-2">
            <DialogTitle>Compartilhar via QR Code</DialogTitle>
            <DialogDescription>
              Escaneie o QR Code abaixo para acessar este conteúdo
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-center p-6 bg-white rounded-lg">
            <QRCodeSVG 
              value={shareUrl} 
              size={256} 
              level="H" 
              includeMargin 
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
              <Link className="mr-2 h-4 w-4" />
              Copiar Link
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export type { ShareButtonProps };