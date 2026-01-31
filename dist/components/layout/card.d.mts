import * as React from 'react';

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
declare const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
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
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
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
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
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
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
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
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
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
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
/**
 * Componente HighlightCard
 *
 * Variante de Card com estilo de destaque/glassmorphism, usando
 * tokens de gradiente e motion do design system.
 *
 * Útil para seções em destaque (ex.: formulários de perfil,
 * configurações, analytics, seções principais de dashboard).
 */
declare const HighlightCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, HighlightCard };
