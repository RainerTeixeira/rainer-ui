import File from 'lucide-react/dist/esm/icons/file';
import * as React from 'react';

/**
 * Componente FileUpload
 *
 * Upload de arquivos com drag & drop.
 * Suporta múltiplos arquivos, preview de imagens e validação.
 *
 * @module @rainersoft/ui/components/forms/file-upload
 * @author Rainer Teixeira
 * @version 1.0.0
 */

/**
 * Interface do arquivo
 */
interface FileItem {
    id: string;
    file: File;
    preview?: string;
    progress?: number;
    error?: string;
}
/**
 * Props do FileUpload
 */
interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Arquivos atuais */
    files?: FileItem[];
    /** Callback quando arquivos são adicionados */
    onFilesAdd?: (files: FileItem[]) => void;
    /** Callback quando arquivo é removido */
    onFileRemove?: (id: string) => void;
    /** Callback quando todos são removidos */
    onClear?: () => void;
    /** Se aceita múltiplos arquivos */
    multiple?: boolean;
    /** Tipos de arquivo aceitos */
    accept?: string;
    /** Tamanho máximo em bytes */
    maxSize?: number;
    /** Número máximo de arquivos */
    maxFiles?: number;
    /** Se está desabilitado */
    disabled?: boolean;
    /** Se está carregando */
    loading?: boolean;
    /** Texto do placeholder */
    placeholder?: string;
    /** Texto secundário */
    secondaryText?: string;
    /** Variante visual */
    variant?: 'default' | 'card' | 'minimal';
    /** Tamanho */
    size?: 'sm' | 'md' | 'lg';
}
/**
 * Componente FileUpload
 *
 * Upload de arquivos com drag & drop.
 *
 * @example
 * ```tsx
 * // Básico
 * <FileUpload
 *   onFilesAdd={handleFilesAdd}
 *   accept="image/*"
 *   maxSize={5 * 1024 * 1024} // 5MB
 * />
 *
 * // Múltiplos arquivos
 * <FileUpload
 *   multiple
 *   maxFiles={5}
 *   files={files}
 *   onFileRemove={handleRemove}
 * />
 * ```
 */
declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLDivElement>>;

export { type FileItem, FileUpload, type FileUploadProps };
