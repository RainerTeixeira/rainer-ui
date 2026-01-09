"use client"
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var lightbox_exports = {};
__export(lightbox_exports, {
  Lightbox: () => Lightbox
});
module.exports = __toCommonJS(lightbox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_button = require("../ui/button");
var import_utils = require("../../lib/utils");
const lightboxVariants = (0, import_class_variance_authority.cva)(
  "fixed inset-0 z-50 bg-black/90 backdrop-blur-sm",
  {
    variants: {
      variant: {
        default: "",
        vignette: "bg-gradient-to-b from-black/50 via-black/90 to-black/50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Lightbox = React.forwardRef(
  ({
    className,
    variant = "default",
    items,
    index,
    onIndexChange,
    open,
    onOpenChange,
    showControls = true,
    showThumbnails = false,
    allowDownload = false,
    allowZoom = false,
    closeOnBackdrop = true,
    closeOnEscape = true,
    ...props
  }, ref) => {
    const [zoom, setZoom] = React.useState(1);
    const [rotation, setRotation] = React.useState(0);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const videoRef = React.useRef(null);
    const currentItem = items[index];
    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "";
        };
      }
    }, [open]);
    React.useEffect(() => {
      if (!open || !closeOnEscape) return;
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onOpenChange(false);
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [open, closeOnEscape, onOpenChange]);
    React.useEffect(() => {
      if (!open) return;
      const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
          handlePrevious();
        } else if (event.key === "ArrowRight") {
          handleNext();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, index]);
    React.useEffect(() => {
      setZoom(1);
      setRotation(0);
      setIsPlaying(false);
    }, [index]);
    const handlePrevious = React.useCallback(() => {
      if (index > 0) {
        onIndexChange(index - 1);
      }
    }, [index, onIndexChange]);
    const handleNext = React.useCallback(() => {
      if (index < items.length - 1) {
        onIndexChange(index + 1);
      }
    }, [index, items.length, onIndexChange]);
    const handleZoomIn = React.useCallback(() => {
      setZoom((prev) => Math.min(prev + 0.25, 3));
    }, []);
    const handleZoomOut = React.useCallback(() => {
      setZoom((prev) => Math.max(prev - 0.25, 0.5));
    }, []);
    const handleResetZoom = React.useCallback(() => {
      setZoom(1);
      setRotation(0);
    }, []);
    const handleRotate = React.useCallback(() => {
      setRotation((prev) => (prev + 90) % 360);
    }, []);
    const handlePlayPause = React.useCallback(() => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    }, [isPlaying]);
    const handleDownload = React.useCallback(() => {
      if (currentItem?.downloadUrl || currentItem?.url) {
        const link = document.createElement("a");
        link.href = currentItem.downloadUrl || currentItem.url;
        link.download = currentItem.title || "download";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, [currentItem]);
    if (!open || !currentItem) return null;
    const transformStyle = {
      transform: `scale(${zoom}) rotate(${rotation}deg)`,
      transition: "transform 0.3s ease"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(lightboxVariants({ variant }), className),
        onClick: closeOnBackdrop ? () => onOpenChange(false) : void 0,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative flex items-center justify-center h-full", children: [
            items.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_button.Button,
                {
                  variant: "ghost",
                  size: "lg",
                  className: "absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 p-0 text-white hover:bg-white/20",
                  onClick: handlePrevious,
                  disabled: index === 0,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronLeft, { className: "h-6 w-6" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_button.Button,
                {
                  variant: "ghost",
                  size: "lg",
                  className: "absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 p-0 text-white hover:bg-white/20",
                  onClick: handleNext,
                  disabled: index === items.length - 1,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "h-6 w-6" })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "max-w-[90vw] max-h-[90vh]", children: currentItem.type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "img",
              {
                src: currentItem.url,
                alt: currentItem.title || "",
                className: "max-w-full max-h-full object-contain",
                style: transformStyle,
                onClick: (e) => e.stopPropagation(),
                onDoubleClick: allowZoom ? handleResetZoom : void 0
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "video",
              {
                ref: videoRef,
                src: currentItem.url,
                className: "max-w-full max-h-full",
                controls: showControls,
                onClick: (e) => e.stopPropagation(),
                onPlay: () => setIsPlaying(true),
                onPause: () => setIsPlaying(false)
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_button.Button,
              {
                variant: "ghost",
                size: "lg",
                className: "absolute right-4 top-4 h-12 w-12 p-0 text-white hover:bg-white/20",
                onClick: () => onOpenChange(false),
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-6 w-6" })
              }
            )
          ] }),
          showControls && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between text-white", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-md", children: [
              currentItem.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-lg font-semibold", children: currentItem.title }),
              currentItem.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm opacity-90", children: currentItem.description }),
              items.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "text-xs opacity-75 mt-1", children: [
                index + 1,
                " de ",
                items.length
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
              currentItem.type === "video" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_button.Button,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "text-white hover:bg-white/20",
                  onClick: handlePlayPause,
                  children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Play, { className: "h-4 w-4" })
                }
              ),
              allowZoom && currentItem.type === "image" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_button.Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "text-white hover:bg-white/20",
                    onClick: handleZoomOut,
                    disabled: zoom <= 0.5,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Minus, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_button.Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "text-white hover:bg-white/20",
                    onClick: handleZoomIn,
                    disabled: zoom >= 3,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Plus, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_button.Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "text-white hover:bg-white/20",
                    onClick: handleRotate,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.RotateCw, { className: "h-4 w-4" })
                  }
                )
              ] }),
              allowDownload && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_button.Button,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "text-white hover:bg-white/20",
                  onClick: handleDownload,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Download, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }) }),
          showThumbnails && items.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/60 rounded-lg", children: items.map((item, itemIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              className: (0, import_utils.cn)(
                "w-16 h-16 rounded overflow-hidden border-2 transition-all",
                itemIndex === index ? "border-white" : "border-transparent hover:border-white/50"
              ),
              onClick: () => onIndexChange(itemIndex),
              children: item.type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "img",
                {
                  src: item.url,
                  alt: item.title || "",
                  className: "w-full h-full object-cover"
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full h-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Play, { className: "h-6 w-6 text-muted-foreground" }) })
            },
            itemIndex
          )) })
        ]
      }
    );
  }
);
Lightbox.displayName = "Lightbox";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Lightbox
});
//# sourceMappingURL=lightbox.js.map