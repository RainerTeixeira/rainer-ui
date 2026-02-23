/**
 * Componentes de Sheet (Painel Lateral)
 *
 * Sistema composable para painéis laterais/drawers deslizantes.
 * Baseado em Radix UI Dialog, mas adaptado para slide-ins dos 4 lados.
 *
 * Componentes disponíveis:
 * - Sheet: container root (controla estado aberto/fechado)
 * - SheetTrigger: elemento que abre o sheet (botão, link, etc)
 * - SheetContent: conteúdo do sheet com animação de entrada
 * - SheetClose: botão para fechar o sheet
 * - SheetHeader: cabeçalho do sheet
 * - SheetTitle: título do sheet
 * - SheetDescription: descrição/subtítulo
 * - SheetFooter: rodapé com ações
 * - SheetOverlay: camada escura sobre o conteúdo
 * - SheetPortal: portal para renderizar fora do DOM tree
 *
 * @fileoverview Sistema de painéis laterais deslizantes
 * @author Rainer Teixeira
 * @version 1.1.1
 * @since 1.0.0
 */
import * as React from 'react';
import { Root as SheetRootPrimitive, Trigger as SheetTriggerPrimitive, Close as SheetClosePrimitive, Content as SheetContentPrimitive, Title as SheetTitlePrimitive, Description as SheetDescriptionPrimitive } from '@radix-ui/react-dialog';
/**
 * Componente Sheet (Root)
 *
 * Container root que gerencia estado do sheet.
 * Controla se está aberto/fechado via prop `open` ou modo não controlado.
 *
 * @param {React.ComponentProps<typeof SheetRootPrimitive>} props - Props do Radix Dialog
 * @param {boolean} [props.open] - Estado aberto (modo controlado)
 * @param {Function} [props.onOpenChange] - Callback de mudança de estado
 * @returns {JSX.Element} Container do sheet
 */
declare function Sheet({ ...props }: React.ComponentProps<typeof SheetRootPrimitive>): import("react/jsx-runtime").JSX.Element;
/**
 * Componente SheetTrigger (Gatilho)
 *
 * Elemento que abre o sheet quando clicado.
 * Pode ser botão, link ou qualquer elemento clicável.
 *
 * @param {React.ComponentProps<typeof SheetTriggerPrimitive>} props - Props do trigger
 * @returns {JSX.Element} Trigger do sheet
 */
declare function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetTriggerPrimitive>): import("react/jsx-runtime").JSX.Element;
/**
 * Componente SheetClose (Fechar)
 *
 * Botão ou elemento que fecha o sheet quando clicado.
 *
 * @param {React.ComponentProps<typeof SheetClosePrimitive>} props - Props do close
 * @returns {JSX.Element} Botão de fechar
 */
declare function SheetClose({ ...props }: React.ComponentProps<typeof SheetClosePrimitive>): import("react/jsx-runtime").JSX.Element;
/**
 * Componente SheetContent (Conteúdo)
 *
 * Painel deslizante com conteúdo do sheet.
 * Pode deslizar de qualquer um dos 4 lados da tela.
 *
 * Inclui automaticamente:
 * - SheetOverlay
 * - Botão X para fechar (canto superior direito)
 * - Animações de entrada/saída baseadas no lado
 *
 * @param {React.ComponentProps<typeof SheetContentPrimitive>} props - Props do content
 * @param {"top" | "right" | "bottom" | "left"} [props.side="right"] - Lado de entrada
 * @param {string} [props.className] - Classes CSS adicionais
 * @param {React.ReactNode} props.children - Conteúdo do sheet
 * @returns {JSX.Element} Painel deslizante
 *
 * @example
 * <Sheet>
 *   <SheetTrigger>Abrir Menu</SheetTrigger>
 *   <SheetContent side="left">
 *     <SheetHeader>
 *       <SheetTitle>Menu</SheetTitle>
 *     </SheetHeader>
 *     <div>Conteúdo do sheet aqui</div>
 *   </SheetContent>
 * </Sheet>
 */
declare function SheetContent({ className, children, side, ...props }: React.ComponentProps<typeof SheetContentPrimitive> & {
    side?: 'top' | 'right' | 'bottom' | 'left';
}): import("react/jsx-runtime").JSX.Element;
/**
 * Componente SheetHeader (Cabeçalho)
 *
 * Área de cabeçalho do sheet, tipicamente contém título e descrição.
 *
 * @param {React.ComponentProps<"div">} props - Props do div
 * @returns {JSX.Element} Header do sheet
 */
declare function SheetHeader({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
/**
 * Componente SheetFooter (Rodapé)
 *
 * Área de rodapé do sheet, tipicamente com botões de ação.
 * Posicionado no final do sheet (mt-auto).
 *
 * @param {React.ComponentProps<"div">} props - Props do div
 * @returns {JSX.Element} Footer do sheet
 */
declare function SheetFooter({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
/**
 * Componente SheetTitle (Título)
 *
 * Título principal do sheet, renderizado com semântica apropriada
 * para leitores de tela (Radix adiciona acessibilidade).
 *
 * @param {React.ComponentProps<typeof SheetTitlePrimitive>} props - Props do title
 * @returns {JSX.Element} Título do sheet
 */
declare function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetTitlePrimitive>): import("react/jsx-runtime").JSX.Element;
/**
 * Componente SheetDescription (Descrição)
 *
 * Subtítulo ou descrição complementar ao título.
 * Texto menor em cor muted.
 *
 * @param {React.ComponentProps<typeof SheetDescriptionPrimitive>} props - Props da description
 * @returns {JSX.Element} Descrição do sheet
 */
declare function SheetDescription({ className, ...props }: React.ComponentProps<typeof SheetDescriptionPrimitive>): import("react/jsx-runtime").JSX.Element;
export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, };
