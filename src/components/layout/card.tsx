/**
 * Componentes de Card
 *
 * Sistema de cards composable para containers de conteúdo.
 * Fornece componentes base (Card) e subcomponentes (Header, Title, etc)
 * que podem ser combinados para criar layouts de cards flexíveis.
 *
 * Componentes disponíveis:
 * - Card: container principal com borda e sombra
 * - CardHeader: cabeçalho do card (geralmente título + descrição)
 * - CardTitle: título do card (renderizado como h3)
 * - CardDescription: descrição/subtítulo
 * - CardContent: conteúdo principal do card
 * - CardFooter: rodapé com ações/botões
 *
 * @fileoverview Sistema de cards composable
 * @author Rainer Teixeira
 * @version 1.0.0
 * @since 1.0.0
 */

import { cn } from '../../lib/utils';
import * as React from 'react';
import { GRADIENT_DIRECTIONS, MOTION } from '../../lib/constants';

/**
 * Componente Card (Container principal)
 *
 * Container base para cards. Fornece fundo, borda e sombra padrão.
 * Todos os outros componentes de card devem ser usados dentro deste.
 *
 * Usa React.forwardRef para permitir acesso ao DOM node.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props HTML do div
 * @param {React.Ref} ref - Ref encaminhada para o elemento div
 * @returns {JSX.Element} Div estilizado como card
 *
 * @example
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Título</CardTitle>
 *   </CardHeader>
 *   <CardContent>Conteúdo aqui</CardContent>
 * </Card>
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

/**
 * Componente CardHeader (Cabeçalho do card)
 *
 * Área de cabeçalho do card, geralmente contém título e descrição.
 * Usa layout flex vertical com espaçamento padrão.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props HTML do div
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Header do card
 *
 * @example
 * <CardHeader>
 *   <CardTitle>Meu Card</CardTitle>
 *   <CardDescription>Descrição do card</CardDescription>
 * </CardHeader>
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

/**
 * Componente CardTitle (Título do card)
 *
 * Título principal do card, renderizado como h3 para semântica adequada.
 * Texto grande, negrito e com tracking ajustado.
 *
 * @param {React.HTMLAttributes<HTMLHeadingElement>} props - Props HTML do h3
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Título estilizado
 *
 * @example
 * <CardTitle>Título Principal</CardTitle>
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

/**
 * Componente CardDescription (Descrição do card)
 *
 * Subtítulo ou descrição complementar ao título.
 * Texto menor em cor muted para hierarquia visual.
 *
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - Props HTML do p
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Descrição estilizada
 *
 * @example
 * <CardDescription>
 *   Esta é uma descrição do card
 * </CardDescription>
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

/**
 * Componente CardContent (Conteúdo do card)
 *
 * Área de conteúdo principal do card.
 * Padding padrão exceto no topo (pt-0) para continuidade com header.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props HTML do div
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Conteúdo do card
 *
 * @example
 * <CardContent>
 *   <p>Conteúdo principal aqui</p>
 * </CardContent>
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

/**
 * Componente CardFooter (Rodapé do card)
 *
 * Área de rodapé do card, tipicamente para ações/botões.
 * Layout flex horizontal para botões lado a lado.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props HTML do div
 * @param {React.Ref} ref - Ref encaminhada
 * @returns {JSX.Element} Footer do card
 *
 * @example
 * <CardFooter>
 *   <Button>Cancelar</Button>
 *   <Button variant="default">Confirmar</Button>
 * </CardFooter>
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

/**
 * Componente HighlightCard
 *
 * Variante de Card com estilo de destaque/glassmorphism, usando
 * tokens de gradiente e motion do design system.
 *
 * Útil para seções em destaque (ex.: formulários de perfil,
 * configurações, analytics, seções principais de dashboard).
 */
const HighlightCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'text-left bg-card/60 dark:bg-black/50',
      'backdrop-blur-xl',
      'rounded-2xl',
      'p-4 xs:p-5 sm:p-6 md:p-8',
      'border border-border/50 dark:border-cyan-400/20',
      'hover:border-primary/40 dark:hover:border-cyan-400/50',
      'hover:bg-card/80 dark:hover:bg-black/70',
      'hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-cyan-500/20',
      'h-full flex flex-col group',
      'relative overflow-hidden',
      `before:absolute before:inset-0 before:${GRADIENT_DIRECTIONS.TO_BOTTOM_RIGHT}`,
      'before:from-primary/0 before:via-primary/0 before:to-primary/0',
      'hover:before:from-primary/5 hover:before:via-transparent hover:before:to-primary/5',
      'dark:hover:before:from-cyan-400/5 dark:hover:before:via-transparent dark:hover:before:to-purple-400/5',
      'before:transition-all before:duration-500 before:ease-in-out before:pointer-events-none',
      MOTION.TRANSITION.DEFAULT,
      className,
    )}
    {...props}
  />
));
HighlightCard.displayName = 'HighlightCard';

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  HighlightCard,
};



