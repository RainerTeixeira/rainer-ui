import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { Root, Trigger, Close, Content, Title, Description } from '@radix-ui/react-dialog';

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
declare function Sheet({ ...props }: React.ComponentProps<typeof Root>): react_jsx_runtime.JSX.Element;
/**
 * Componente SheetTrigger (Gatilho)
 *
 * Elemento que abre o sheet quando clicado.
 * Pode ser botão, link ou qualquer elemento clicável.
 *
 * @param {React.ComponentProps<typeof SheetTriggerPrimitive>} props - Props do trigger
 * @returns {JSX.Element} Trigger do sheet
 */
declare function SheetTrigger({ ...props }: React.ComponentProps<typeof Trigger>): react_jsx_runtime.JSX.Element;
/**
 * Componente SheetClose (Fechar)
 *
 * Botão ou elemento que fecha o sheet quando clicado.
 *
 * @param {React.ComponentProps<typeof SheetClosePrimitive>} props - Props do close
 * @returns {JSX.Element} Botão de fechar
 */
declare function SheetClose({ ...props }: React.ComponentProps<typeof Close>): react_jsx_runtime.JSX.Element;
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
declare function SheetContent({ className, children, side, ...props }: React.ComponentProps<typeof Content> & {
    side?: 'top' | 'right' | 'bottom' | 'left';
}): react_jsx_runtime.JSX.Element;
/**
 * Componente SheetHeader (Cabeçalho)
 *
 * Área de cabeçalho do sheet, tipicamente contém título e descrição.
 *
 * @param {React.ComponentProps<"div">} props - Props do div
 * @returns {JSX.Element} Header do sheet
 */
declare function SheetHeader({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
/**
 * Componente SheetFooter (Rodapé)
 *
 * Área de rodapé do sheet, tipicamente com botões de ação.
 * Posicionado no final do sheet (mt-auto).
 *
 * @param {React.ComponentProps<"div">} props - Props do div
 * @returns {JSX.Element} Footer do sheet
 */
declare function SheetFooter({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
/**
 * Componente SheetTitle (Título)
 *
 * Título principal do sheet, renderizado com semântica apropriada
 * para leitores de tela (Radix adiciona acessibilidade).
 *
 * @param {React.ComponentProps<typeof SheetTitlePrimitive>} props - Props do title
 * @returns {JSX.Element} Título do sheet
 */
declare function SheetTitle({ className, ...props }: React.ComponentProps<typeof Title>): react_jsx_runtime.JSX.Element;
/**
 * Componente SheetDescription (Descrição)
 *
 * Subtítulo ou descrição complementar ao título.
 * Texto menor em cor muted.
 *
 * @param {React.ComponentProps<typeof SheetDescriptionPrimitive>} props - Props da description
 * @returns {JSX.Element} Descrição do sheet
 */
declare function SheetDescription({ className, ...props }: React.ComponentProps<typeof Description>): react_jsx_runtime.JSX.Element;

export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger };
