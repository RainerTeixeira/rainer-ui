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

import { Upload, X, File, ImageIcon, FileText } from 'lucide-react';
import * as React from 'react';
import { cva } from 'class-variance-authority';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

/**
 * Interface do arquivo
 */
export interface FileItem {
  id: string;
  file: File;
  preview?: string;
  progress?: number;
  error?: string;
}

/**
 * Props do FileUpload
 */
export interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
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
 * Variantes do FileUpload
 */
const fileUploadVariants = cva(
  'relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors duration-[var(--motion-duration-normal)]',
  {
    variants: {
      variant: {
        default: 'border-border bg-background hover:border-primary/50 hover:bg-accent/50',
        card: 'border-border bg-card shadow-sm hover:border-primary/50 hover:shadow-md',
        minimal: 'border-transparent hover:border-primary/30',
      },
      size: {
        sm: 'p-4 min-h-[100px]',
        md: 'p-6 min-h-[150px]',
        lg: 'p-8 min-h-[200px]',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

/**
 * Formata tamanho do arquivo
 */
function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Obtém ícone baseado no tipo do arquivo
 */
function getFileIcon(file: File): React.ReactNode {
  if (file.type.startsWith('image/')) {
    return <ImageIcon className="h-4 w-4" />;
  } else if (file.type.startsWith('text/')) {
    return <FileText className="h-4 w-4" />;
  } else {
    return <File className="h-4 w-4" />;
  }
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
export const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      className,
      files = [],
      onFilesAdd,
      onFileRemove,
      onClear,
      multiple = false,
      accept,
      maxSize,
      maxFiles,
      disabled = false,
      loading = false,
      placeholder = 'Arraste arquivos aqui ou clique para selecionar',
      secondaryText,
      variant = 'default',
      size = 'md',
      ...props
    },
    ref
  ) => {
    const [isDragging, setIsDragging] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Processa arquivos selecionados
    const processFiles = React.useCallback((fileList: FileList) => {
      const filesArray = Array.from(fileList);
      
      // Validações
      if (!multiple && filesArray.length > 1) {
        console.warn('Apenas um arquivo é permitido');
        return;
      }
      
      if (maxFiles && files.length + filesArray.length > maxFiles) {
        console.warn(`Máximo de ${maxFiles} arquivos permitido`);
        return;
      }

      const newFiles: FileItem[] = filesArray.map(file => {
        // Valida tamanho
        if (maxSize && file.size > maxSize) {
          console.warn(`Arquivo ${file.name} excede o tamanho máximo`);
          return null;
        }

        const fileItem: FileItem = {
          id: Math.random().toString(36).substr(2, 9),
          file,
        };

        // Preview para imagens
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            fileItem.preview = e.target?.result as string;
          };
          reader.readAsDataURL(file);
        }

        return fileItem;
      }).filter(Boolean) as FileItem[];

      if (newFiles.length > 0) {
        onFilesAdd?.(newFiles);
      }
    }, [multiple, maxFiles, files.length, maxSize, onFilesAdd]);

    // Manipuladores de eventos
    const handleDrop = React.useCallback((e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      
      if (disabled || loading) return;
      
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        processFiles(files);
      }
    }, [disabled, loading, processFiles]);

    const handleDragOver = React.useCallback((e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled && !loading) {
        setIsDragging(true);
      }
    }, [disabled, loading]);

    const handleDragLeave = React.useCallback((e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
    }, []);

    const handleFileSelect = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        processFiles(files);
      }
      // Limpa o input para permitir selecionar o mesmo arquivo novamente
      e.target.value = '';
    }, [processFiles]);

    const handleClick = React.useCallback(() => {
      if (!disabled && !loading) {
        inputRef.current?.click();
      }
    }, [disabled, loading]);

    // Remove arquivo
    const handleRemoveFile = React.useCallback((id: string) => {
      onFileRemove?.(id);
    }, [onFileRemove]);

    // Limpa todos
    const handleClear = React.useCallback(() => {
      onClear?.();
    }, [onClear]);

    return (
      <div ref={ref} className={cn('space-y-4', className)} {...props}>
        {/* Área de upload */}
        <div
          className={cn(
            fileUploadVariants({ variant, size, disabled }),
            isDragging && 'border-primary bg-primary/5',
            'cursor-pointer'
          )}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={handleClick}
        >
          <input
            ref={inputRef}
            type="file"
            multiple={multiple}
            accept={accept}
            onChange={handleFileSelect}
            className="hidden"
            disabled={disabled}
          />
          
          <div className="flex flex-col items-center gap-2 text-center">
            <Upload className={cn(
              'h-8 w-8 text-muted-foreground',
              size === 'sm' && 'h-6 w-6',
              size === 'lg' && 'h-10 w-10'
            )} />
            
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">
                {loading ? 'Processando...' : placeholder}
              </p>
              
              {secondaryText && (
                <p className="text-xs text-muted-foreground">
                  {secondaryText}
                </p>
              )}
              
              {accept && (
                <p className="text-xs text-muted-foreground">
                  Formatos: {accept}
                </p>
              )}
              
              {maxSize && (
                <p className="text-xs text-muted-foreground">
                  Tamanho máximo: {formatFileSize(maxSize)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Lista de arquivos */}
        {files.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {files.length} {files.length === 1 ? 'arquivo' : 'arquivos'}
              </span>
              {onClear && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClear}
                  disabled={disabled}
                >
                  Limpar todos
                </Button>
              )}
            </div>
            
            <div className="space-y-2">
              {files.map((fileItem) => (
                <div
                  key={fileItem.id}
                  className="flex items-center gap-3 rounded-md border bg-card p-3"
                >
                  {/* Preview ou ícone */}
                  <div className="flex-shrink-0">
                    {fileItem.preview ? (
                      <img
                        src={fileItem.preview}
                        alt={fileItem.file.name}
                        className="h-10 w-10 rounded-md object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                        {getFileIcon(fileItem.file)}
                      </div>
                    )}
                  </div>
                  
                  {/* Informações */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {fileItem.file.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(fileItem.file.size)}
                    </p>
                    
                    {/* Progresso */}
                    {fileItem.progress !== undefined && (
                      <div className="mt-1 w-full bg-muted rounded-full h-1">
                        <div
                          className="bg-primary h-1 rounded-full transition-all duration-[var(--motion-duration-normal)]"
                          style={{ width: `${fileItem.progress}%` }}
                        />
                      </div>
                    )}
                    
                    {/* Erro */}
                    {fileItem.error && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                        {fileItem.error}
                      </p>
                    )}
                  </div>
                  
                  {/* Botão remover */}
                  {onFileRemove && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveFile(fileItem.id)}
                      disabled={disabled}
                      className="h-8 w-8 p-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';
