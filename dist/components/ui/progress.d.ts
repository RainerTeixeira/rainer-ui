/**
 * Progress Component
 *
 * Componente progress bar para indicar carregamento,
 * upload de arquivos e andamento de tarefas.
 *
 * @module components/ui/progress
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
declare const Progress: React.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    /** Cor da progress bar */
    color?: "default" | "success" | "warning" | "destructive" | "cyberpunk";
} & React.RefAttributes<HTMLDivElement>>;
export { Progress };
