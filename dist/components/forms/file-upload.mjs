"use client"
import { jsx, jsxs } from "react/jsx-runtime";
import { Upload, X, File, ImageIcon, FileText } from "lucide-react";
import * as React from "react";
import { cva } from "class-variance-authority";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
const fileUploadVariants = cva(
  "relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors duration-[var(--motion-duration-normal)]",
  {
    variants: {
      variant: {
        default: "border-border bg-background hover:border-primary/50 hover:bg-accent/50",
        card: "border-border bg-card shadow-sm hover:border-primary/50 hover:shadow-md",
        minimal: "border-transparent hover:border-primary/30"
      },
      size: {
        sm: "p-4 min-h-[100px]",
        md: "p-6 min-h-[150px]",
        lg: "p-8 min-h-[200px]"
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
function getFileIcon(file) {
  if (file.type.startsWith("image/")) {
    return /* @__PURE__ */ jsx(ImageIcon, { className: "h-4 w-4" });
  } else if (file.type.startsWith("text/")) {
    return /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" });
  } else {
    return /* @__PURE__ */ jsx(File, { className: "h-4 w-4" });
  }
}
const FileUpload = React.forwardRef(
  ({
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
    placeholder = "Arraste arquivos aqui ou clique para selecionar",
    secondaryText,
    variant = "default",
    size = "md",
    ...props
  }, ref) => {
    const [isDragging, setIsDragging] = React.useState(false);
    const inputRef = React.useRef(null);
    const processFiles = React.useCallback((fileList) => {
      const filesArray = Array.from(fileList);
      if (!multiple && filesArray.length > 1) {
        console.warn("Apenas um arquivo \xE9 permitido");
        return;
      }
      if (maxFiles && files.length + filesArray.length > maxFiles) {
        console.warn(`M\xE1ximo de ${maxFiles} arquivos permitido`);
        return;
      }
      const newFiles = filesArray.map((file) => {
        if (maxSize && file.size > maxSize) {
          console.warn(`Arquivo ${file.name} excede o tamanho m\xE1ximo`);
          return null;
        }
        const fileItem = {
          id: Math.random().toString(36).substr(2, 9),
          file
        };
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            fileItem.preview = e.target?.result;
          };
          reader.readAsDataURL(file);
        }
        return fileItem;
      }).filter(Boolean);
      if (newFiles.length > 0) {
        onFilesAdd?.(newFiles);
      }
    }, [multiple, maxFiles, files.length, maxSize, onFilesAdd]);
    const handleDrop = React.useCallback((e) => {
      e.preventDefault();
      setIsDragging(false);
      if (disabled || loading) return;
      const files2 = e.dataTransfer.files;
      if (files2.length > 0) {
        processFiles(files2);
      }
    }, [disabled, loading, processFiles]);
    const handleDragOver = React.useCallback((e) => {
      e.preventDefault();
      if (!disabled && !loading) {
        setIsDragging(true);
      }
    }, [disabled, loading]);
    const handleDragLeave = React.useCallback((e) => {
      e.preventDefault();
      setIsDragging(false);
    }, []);
    const handleFileSelect = React.useCallback((e) => {
      const files2 = e.target.files;
      if (files2 && files2.length > 0) {
        processFiles(files2);
      }
      e.target.value = "";
    }, [processFiles]);
    const handleClick = React.useCallback(() => {
      if (!disabled && !loading) {
        inputRef.current?.click();
      }
    }, [disabled, loading]);
    const handleRemoveFile = React.useCallback((id) => {
      onFileRemove?.(id);
    }, [onFileRemove]);
    const handleClear = React.useCallback(() => {
      onClear?.();
    }, [onClear]);
    return /* @__PURE__ */ jsxs("div", { ref, className: cn("space-y-4", className), ...props, children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            fileUploadVariants({ variant, size, disabled }),
            isDragging && "border-primary bg-primary/5",
            "cursor-pointer"
          ),
          onDrop: handleDrop,
          onDragOver: handleDragOver,
          onDragLeave: handleDragLeave,
          onClick: handleClick,
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                type: "file",
                multiple,
                accept,
                onChange: handleFileSelect,
                className: "hidden",
                disabled
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 text-center", children: [
              /* @__PURE__ */ jsx(Upload, { className: cn(
                "h-8 w-8 text-muted-foreground",
                size === "sm" && "h-6 w-6",
                size === "lg" && "h-10 w-10"
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: loading ? "Processando..." : placeholder }),
                secondaryText && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: secondaryText }),
                accept && /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  "Formatos: ",
                  accept
                ] }),
                maxSize && /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  "Tamanho m\xE1ximo: ",
                  formatFileSize(maxSize)
                ] })
              ] })
            ] })
          ]
        }
      ),
      files.length > 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
            files.length,
            " ",
            files.length === 1 ? "arquivo" : "arquivos"
          ] }),
          onClear && /* @__PURE__ */ jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: handleClear,
              disabled,
              children: "Limpar todos"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: files.map((fileItem) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-3 rounded-md border bg-card p-3",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: fileItem.preview ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: fileItem.preview,
                  alt: fileItem.file.name,
                  className: "h-10 w-10 rounded-md object-cover"
                }
              ) : /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-md bg-muted", children: getFileIcon(fileItem.file) }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", children: fileItem.file.name }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: formatFileSize(fileItem.file.size) }),
                fileItem.progress !== void 0 && /* @__PURE__ */ jsx("div", { className: "mt-1 w-full bg-muted rounded-full h-1", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "bg-primary h-1 rounded-full transition-all duration-[var(--motion-duration-normal)]",
                    style: { width: `${fileItem.progress}%` }
                  }
                ) }),
                fileItem.error && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-600 dark:text-red-400 mt-1", children: fileItem.error })
              ] }),
              onFileRemove && /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => handleRemoveFile(fileItem.id),
                  disabled,
                  className: "h-8 w-8 p-0",
                  children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
                }
              )
            ]
          },
          fileItem.id
        )) })
      ] })
    ] });
  }
);
FileUpload.displayName = "FileUpload";
export {
  FileUpload
};
//# sourceMappingURL=file-upload.mjs.map