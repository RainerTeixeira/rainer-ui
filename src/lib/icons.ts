/**
 * Tipos para ícones do lucide-react
 * Workaround para problemas de importação
 */

import { ForwardRefExoticComponent, SVGProps } from 'react';

export interface LucideIconProps extends SVGProps<SVGSVGElement> {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type LucideIcon = ForwardRefExoticComponent<Omit<LucideIconProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;

// Importações diretas dos ícones
import * as Icons from 'lucide-react';

export const Plus: LucideIcon = Icons.Plus;
export const X: LucideIcon = Icons.X;
export const Edit: LucideIcon = Icons.Edit;
export const Share: LucideIcon = Icons.Share;
export const Heart: LucideIcon = Icons.Heart;
export const Menu: LucideIcon = Icons.Menu;
export const User: LucideIcon = Icons.User;
export const LogOut: LucideIcon = Icons.LogOut;
export const Bell: LucideIcon = Icons.Bell;
export const MoreVertical: LucideIcon = Icons.MoreVertical;
export const ChevronLeft: LucideIcon = Icons.ChevronLeft;
export const ChevronRight: LucideIcon = Icons.ChevronRight;
export const MoreHorizontal: LucideIcon = Icons.MoreHorizontal;
export const Dot: LucideIcon = Icons.Dot;
export const AlertTriangle: LucideIcon = Icons.AlertTriangle;
export const Info: LucideIcon = Icons.Info;
export const CheckCircle: LucideIcon = Icons.CheckCircle;
export const Minus: LucideIcon = Icons.Minus;
export const RotateCw: LucideIcon = Icons.RotateCw;
export const Play: LucideIcon = Icons.Play;
export const Pause: LucideIcon = Icons.Pause;
export const Copy: LucideIcon = Icons.Copy;
export const Check: LucideIcon = Icons.Check;
export const Quote: LucideIcon = Icons.Quote;
export const Calendar: LucideIcon = Icons.Calendar;
