import { ClassValue } from 'clsx';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as React from 'react';

/**
 * Utilitários da Biblioteca de Componentes UI
 *
 * @module @rainersoft/ui/lib/utils
 * @author Rainer Teixeira
 */

/**
 * Combina e mescla classes CSS de forma inteligente
 *
 * Esta função é essencial para trabalhar com Tailwind CSS e componentes
 * dinâmicos. Ela resolve conflitos entre classes Tailwind e permite
 * composição condicional de estilos.
 *
 * @param inputs - Classes CSS para combinar
 * @returns String final com classes CSS mescladas
 *
 * @example
 * ```tsx
 * cn('px-4 py-2', 'bg-blue-500') // "px-4 py-2 bg-blue-500"
 * cn('px-4', 'px-2') // "px-2" (resolve conflitos)
 * cn('btn', { 'btn-active': isActive })
 * ```
 */
declare function cn(...inputs: ClassValue[]): string;

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "neon" | "glass" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

/**
 * Componente Input
 *
 * Campo de entrada (input) HTML com estilos consistentes.
 * Suporta todos os tipos HTML5: text, email, password, number, file, etc.
 *
 * Classes aplicadas:
 * - Base: altura 36px (h-9), bordas arredondadas, padding horizontal
 * - Focus: borda e ring coloridos para acessibilidade
 * - Invalid: borda e ring vermelhos quando aria-invalid
 * - Disabled: opacidade reduzida, cursor not-allowed
 * - File: estilos específicos para botão de seleção de arquivo
 * - Dark mode: background semi-transparente
 *
 * @param {React.ComponentProps<"input">} props - Props nativas do input
 * @param {string} [props.type="text"] - Tipo do input (text, email, etc)
 * @param {string} [props.className] - Classes CSS adicionais
 * @param {string} [props.placeholder] - Texto placeholder
 * @param {boolean} [props.disabled] - Se input está desabilitado
 * @returns {JSX.Element} Input estilizado
 *
 * @example
 * // Input de texto simples
 * <Input type="text" placeholder="Digite seu nome" />
 *
 * @example
 * // Input de email com validação
 * <Input
 *   type="email"
 *   placeholder="email@exemplo.com"
 *   aria-invalid={!isEmailValid}
 *   required
 * />
 *
 * @example
 * // Input de arquivo
 * <Input
 *   type="file"
 *   accept="image/*"
 *   onChange={handleFileChange}
 * />
 */
declare function Input({ className, type, ...props }: React.ComponentProps<'input'>): react_jsx_runtime.JSX.Element;

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

export { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, buttonVariants, cn };
