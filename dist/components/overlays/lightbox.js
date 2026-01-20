'use strict';

var React2 = require('react');
var classVarianceAuthority = require('class-variance-authority');
var ChevronLeft = require('lucide-react/dist/esm/icons/chevron-left');
var ChevronRight = require('lucide-react/dist/esm/icons/chevron-right');
var Download = require('lucide-react/dist/esm/icons/download');
var Maximize2 = require('lucide-react/dist/esm/icons/maximize-2');
var Minimize2 = require('lucide-react/dist/esm/icons/minimize-2');
var Pause = require('lucide-react/dist/esm/icons/pause');
var Play = require('lucide-react/dist/esm/icons/play');
var RotateCw = require('lucide-react/dist/esm/icons/rotate-cw');
var X = require('lucide-react/dist/esm/icons/x');
var ZoomIn = require('lucide-react/dist/esm/icons/zoom-in');
var ZoomOut = require('lucide-react/dist/esm/icons/zoom-out');
var reactSlot = require('@radix-ui/react-slot');
require('@rainersoft/design-tokens/formats/css-vars.css');
var tokens = require('@rainersoft/design-tokens');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React2__namespace = /*#__PURE__*/_interopNamespace(React2);
var ChevronLeft__default = /*#__PURE__*/_interopDefault(ChevronLeft);
var ChevronRight__default = /*#__PURE__*/_interopDefault(ChevronRight);
var Download__default = /*#__PURE__*/_interopDefault(Download);
var Maximize2__default = /*#__PURE__*/_interopDefault(Maximize2);
var Minimize2__default = /*#__PURE__*/_interopDefault(Minimize2);
var Pause__default = /*#__PURE__*/_interopDefault(Pause);
var Play__default = /*#__PURE__*/_interopDefault(Play);
var RotateCw__default = /*#__PURE__*/_interopDefault(RotateCw);
var X__default = /*#__PURE__*/_interopDefault(X);
var ZoomIn__default = /*#__PURE__*/_interopDefault(ZoomIn);
var ZoomOut__default = /*#__PURE__*/_interopDefault(ZoomOut);
var tokens__default = /*#__PURE__*/_interopDefault(tokens);

var tokensWithThemes = tokens__default.default;
tokensWithThemes.themes?.light ?? tokensWithThemes.lightTheme ?? tokens__default.default;
tokensWithThemes.themes?.dark ?? tokensWithThemes.darkTheme ?? tokens__default.default;
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var layoutClassesSemantic = tokens__default.default.semantics?.layoutClasses ?? {};
layoutClassesSemantic.components ?? {};
layoutClassesSemantic.sections ?? {};
var zIndexSemantic = tokens__default.default.semantics?.layout?.zIndex ?? {};
var zIndexPrimitive = tokens__default.default.primitives?.zIndex ?? {};
({
  ...zIndexPrimitive,
  ...zIndexSemantic
});
tokens__default.default.primitives?.gradientDirections ?? {};
var motionClasses = tokens__default.default.semantics?.motionClasses ?? {};
({
  TRANSITION: {
    DEFAULT: motionClasses.transition?.default,
    FAST: motionClasses.transition?.fast,
    SLOW: motionClasses.transition?.slow,
    COLOR: motionClasses.transition?.color,
    TRANSFORM: motionClasses.transition?.transform,
    OPACITY: motionClasses.transition?.opacity
  }
});
var motionTokens = tokens__default.default.MOTION ?? tokens__default.default.motionTokens ?? tokens__default.default.primitives?.motion ?? {};
var motion = motionTokens;
var motionSemanticTokens = tokens__default.default.semantics?.motion ?? {};
var motionSemantic = motionSemanticTokens;
motion?.delay ?? {};
var ANIMATION_DURATIONS = motion?.duration ?? {};
var ANIMATION_EASINGS = motion?.easing ?? {};
var safeMotionDuration = ANIMATION_DURATIONS;
var safeMotionEasing = ANIMATION_EASINGS;
var defaultDuration = safeMotionDuration?.normal ?? safeMotionDuration?.default;
safeMotionDuration?.fast ?? defaultDuration;
safeMotionDuration?.slow ?? defaultDuration;
var easeInOut = safeMotionEasing?.easeInOut ?? safeMotionEasing?.default;
safeMotionEasing?.easeOut ?? easeInOut;
safeMotionEasing?.spring ?? easeInOut;
var motionSemanticTyped = motionSemantic;
({
  // Presets semânticos
  semantic: {
    transition: motionSemanticTyped.transition?.default,
    interaction: motionSemanticTyped.interaction?.hover,
    feedback: motionSemanticTyped.feedback?.success,
    navigation: motionSemanticTyped.navigation?.page
  }
});
var buttonVariants = classVarianceAuthority.cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 select-none',
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md",
        outline: "border-2 border-input bg-background shadow-sm hover:bg-accent hover:border-accent",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline focus-visible:underline",
        neon: "relative bg-gradient-to-r from-neon-cyan to-cyan-600 border-2 border-neon-cyan text-gray-950 shadow-lg shadow-neon-cyan hover:shadow-neon-cyan hover:shadow-xl",
        glass: "relative bg-glass border border-white/20 text-foreground backdrop-blur-sm shadow-sm hover:bg-white/20",
        minimal: "bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground"
      },
      size: {
        xs: "h-7 px-2 text-xs rounded-md",
        sm: "h-8 px-3 text-sm rounded-md has-[>svg]:px-2",
        default: "h-9 px-4 py-2 rounded-md has-[>svg]:px-3",
        lg: "h-10 px-6 text-base rounded-lg has-[>svg]:px-4",
        xl: "h-12 px-8 text-lg rounded-lg has-[>svg]:px-5",
        icon: "size-9 rounded-lg",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-10 rounded-lg",
        "icon-xl": "size-12 rounded-xl"
      },
      animation: {
        none: "",
        scale: "hover:scale-105 active:scale-95",
        glow: "hover:shadow-lg active:shadow-sm",
        bounce: "hover:animate-bounce",
        pulse: "hover:animate-pulse"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "scale"
    }
  }
);
var ButtonComponent = React2__namespace.forwardRef(
  ({
    className,
    variant,
    size,
    animation,
    asChild = false,
    loading = false,
    loadingIcon,
    disabled,
    children,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading;
    if (asChild) {
      const child = React2__namespace.Children.only(children);
      return /* @__PURE__ */ jsxRuntime.jsx(
        reactSlot.Slot,
        {
          className: cn(
            buttonVariants({ variant, size, animation }),
            // Efeito neon especial
            variant === "neon" && [
              "before:absolute before:inset-0 before:rounded-lg before:bg-primary before:opacity-20",
              "after:absolute after:inset-0 after:rounded-lg after:bg-primary after:opacity-0",
              "hover:after:opacity-20 hover:shadow-primary/25 hover:shadow-xl",
              "before:transition-opacity after:transition-opacity",
              "before:duration-300 after:duration-300"
            ],
            className
          ),
          ref,
          "aria-busy": loading || void 0,
          ...props,
          children: loading ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "inline-flex items-center gap-2", children: [
            loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }),
            child
          ] }) : child
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        className: cn(
          buttonVariants({ variant, size, animation }),
          // Efeito neon especial
          variant === "neon" && [
            "before:absolute before:inset-0 before:rounded-lg before:bg-primary before:opacity-20",
            "after:absolute after:inset-0 after:rounded-lg after:bg-primary after:opacity-0",
            "hover:after:opacity-20 hover:shadow-primary/25 hover:shadow-xl",
            "before:transition-opacity after:transition-opacity",
            "before:duration-300 after:duration-300"
          ],
          className
        ),
        ref,
        disabled: isDisabled,
        "aria-busy": loading || void 0,
        ...props,
        children: [
          loading && (loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" })),
          children
        ]
      }
    );
  }
);
ButtonComponent.displayName = "Button";
var Button = ButtonComponent;
var ZOOM_CONFIG = {
  MIN: 0.5,
  MAX: 4,
  STEP: 0.25,
  DEFAULT: 1
};
var lightboxVariants = classVarianceAuthority.cva(
  "fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        vignette: "bg-gradient-to-b from-black/60 via-black/95 to-black/60",
        subtle: "bg-black/85 backdrop-blur-none"
      },
      animation: {
        none: "",
        fade: "animate-in fade-in duration-300",
        slideUp: "animate-in slide-in-from-bottom duration-300",
        slideDown: "animate-in slide-in-from-top duration-300"
      }
    },
    defaultVariants: {
      variant: "default",
      animation: "fade"
    }
  }
);
var Lightbox = React2__namespace.forwardRef(
  ({
    className,
    variant = "default",
    animation = "fade",
    items,
    index,
    onIndexChange,
    open,
    onOpenChange,
    showControls = true,
    showThumbnails = false,
    allowDownload = false,
    allowZoom = false,
    allowRotation = true,
    closeOnBackdrop = true,
    closeOnEscape = true,
    showProgress = true,
    enableGestures = true,
    autoPlayInterval,
    autoPlayVideos = false,
    thumbnailSize = "md",
    thumbnailsPosition = "bottom",
    mediaContainerClassName,
    ...props
  }, ref) => {
    const [zoom, setZoom] = React2__namespace.useState(ZOOM_CONFIG.DEFAULT);
    const [rotation, setRotation] = React2__namespace.useState(0);
    const [isPlaying, setIsPlaying] = React2__namespace.useState(autoPlayVideos);
    const [isFullscreen, setIsFullscreen] = React2__namespace.useState(false);
    const [touchStart, setTouchStart] = React2__namespace.useState(null);
    const [isDragging, setIsDragging] = React2__namespace.useState(false);
    const [dragOffset, setDragOffset] = React2__namespace.useState({ x: 0, y: 0 });
    const videoRef = React2__namespace.useRef(null);
    const containerRef = React2__namespace.useRef(null);
    const mediaRef = React2__namespace.useRef(null);
    const currentItem = items[index];
    const hasMultipleItems = items.length > 1;
    const isImage = currentItem?.type === "image";
    const isVideo = currentItem?.type === "video";
    React2__namespace.useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "";
        };
      }
    }, [open]);
    React2__namespace.useEffect(() => {
      if (!open) return;
      const handleKeyDown = (event) => {
        switch (event.key) {
          case "Escape":
            if (closeOnEscape) {
              onOpenChange(false);
            }
            break;
          case "ArrowLeft":
            handlePrevious();
            break;
          case "ArrowRight":
            handleNext();
            break;
          case " ":
            if (isVideo) {
              event.preventDefault();
              handlePlayPause();
            }
            break;
          case "+":
          case "=":
            if (allowZoom && isImage) {
              event.preventDefault();
              handleZoomIn();
            }
            break;
          case "-":
            if (allowZoom && isImage) {
              event.preventDefault();
              handleZoomOut();
            }
            break;
          case "0":
            if (allowZoom && isImage) {
              event.preventDefault();
              handleResetZoom();
            }
            break;
          case "r":
          case "R":
            if (allowRotation && isImage) {
              event.preventDefault();
              handleRotate();
            }
            break;
          case "f":
          case "F":
            handleToggleFullscreen();
            break;
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, index, zoom, isVideo, allowZoom, allowRotation]);
    React2__namespace.useEffect(() => {
      if (isVideo && autoPlayVideos && videoRef.current && open) {
        videoRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    }, [index, isVideo, autoPlayVideos, open]);
    React2__namespace.useEffect(() => {
      if (!autoPlayInterval || !hasMultipleItems || !open) return;
      const interval = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }, [autoPlayInterval, hasMultipleItems, open, index]);
    React2__namespace.useEffect(() => {
      setZoom(ZOOM_CONFIG.DEFAULT);
      setRotation(0);
      setDragOffset({ x: 0, y: 0 });
      setIsDragging(false);
      if (isVideo) {
        setIsPlaying(autoPlayVideos);
      }
    }, [index, isVideo, autoPlayVideos]);
    const handlePrevious = React2__namespace.useCallback(() => {
      if (index > 0) {
        onIndexChange(index - 1);
      } else if (hasMultipleItems) {
        onIndexChange(items.length - 1);
      }
    }, [index, items.length, onIndexChange, hasMultipleItems]);
    const handleNext = React2__namespace.useCallback(() => {
      if (index < items.length - 1) {
        onIndexChange(index + 1);
      } else if (hasMultipleItems) {
        onIndexChange(0);
      }
    }, [index, items.length, onIndexChange, hasMultipleItems]);
    const handleZoomIn = React2__namespace.useCallback(() => {
      setZoom((prev) => Math.min(prev + ZOOM_CONFIG.STEP, ZOOM_CONFIG.MAX));
    }, []);
    const handleZoomOut = React2__namespace.useCallback(() => {
      setZoom((prev) => Math.max(prev - ZOOM_CONFIG.STEP, ZOOM_CONFIG.MIN));
    }, []);
    const handleResetZoom = React2__namespace.useCallback(() => {
      setZoom(ZOOM_CONFIG.DEFAULT);
      setRotation(0);
      setDragOffset({ x: 0, y: 0 });
    }, []);
    const handleRotate = React2__namespace.useCallback(() => {
      setRotation((prev) => (prev + 90) % 360);
    }, []);
    const handlePlayPause = React2__namespace.useCallback(() => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch(console.error);
        }
        setIsPlaying(!isPlaying);
      }
    }, [isPlaying]);
    const handleToggleFullscreen = React2__namespace.useCallback(() => {
      if (!containerRef.current) return;
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().then(() => {
          setIsFullscreen(true);
        });
      } else {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }, []);
    React2__namespace.useEffect(() => {
      const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
      };
      document.addEventListener("fullscreenchange", handleFullscreenChange);
      return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);
    const handleDownload = React2__namespace.useCallback(() => {
      if (currentItem?.downloadUrl || currentItem?.url) {
        const link = document.createElement("a");
        link.href = currentItem.downloadUrl || currentItem.url;
        link.download = currentItem.title || "download";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, [currentItem]);
    const handleTouchStart = React2__namespace.useCallback((e) => {
      if (!enableGestures || !isImage || zoom <= ZOOM_CONFIG.DEFAULT) return;
      setTouchStart({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
      setIsDragging(true);
    }, [enableGestures, isImage, zoom]);
    const handleTouchMove = React2__namespace.useCallback((e) => {
      if (!touchStart || !isDragging || !isImage || zoom <= ZOOM_CONFIG.DEFAULT) return;
      const deltaX = e.touches[0].clientX - touchStart.x;
      const deltaY = e.touches[0].clientY - touchStart.y;
      setDragOffset({
        x: deltaX,
        y: deltaY
      });
    }, [touchStart, isDragging, isImage, zoom]);
    const handleTouchEnd = React2__namespace.useCallback(() => {
      if (!enableGestures || !isImage) return;
      if (!isDragging && touchStart && zoom <= ZOOM_CONFIG.DEFAULT) {
        const swipeThreshold = 50;
        const deltaX = dragOffset.x;
        if (Math.abs(deltaX) > swipeThreshold) {
          if (deltaX > 0) {
            handlePrevious();
          } else {
            handleNext();
          }
        }
      }
      setTouchStart(null);
      setIsDragging(false);
    }, [enableGestures, isImage, zoom, dragOffset, handlePrevious, handleNext, isDragging, touchStart]);
    const handleDoubleClick = React2__namespace.useCallback(() => {
      if (allowZoom && isImage) {
        if (zoom > ZOOM_CONFIG.DEFAULT) {
          handleResetZoom();
        } else {
          handleZoomIn();
        }
      }
    }, [allowZoom, isImage, zoom, handleResetZoom, handleZoomIn]);
    const transformStyle = {
      transform: `scale(${zoom}) rotate(${rotation}deg) translate(${dragOffset.x}px, ${dragOffset.y}px)`,
      transition: isDragging ? "none" : "transform 0.2s ease-out",
      cursor: zoom > ZOOM_CONFIG.DEFAULT ? "grab" : "default"
    };
    const thumbnailClasses = {
      sm: "w-12 h-12",
      md: "w-16 h-16",
      lg: "w-20 h-20"
    };
    const thumbnailsPositionClasses = {
      bottom: "bottom-20 left-1/2 -translate-x-1/2 flex-row",
      left: "left-4 top-1/2 -translate-y-1/2 flex-col",
      right: "right-4 top-1/2 -translate-y-1/2 flex-col"
    };
    if (!open || !currentItem) return null;
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(lightboxVariants({ variant, animation }), className),
        onClick: closeOnBackdrop ? () => onOpenChange(false) : void 0,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            ref: containerRef,
            className: "relative w-full h-full",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "absolute right-4 top-4 z-10 h-10 w-10 text-white hover:bg-white/20 rounded-full backdrop-blur-sm",
                  onClick: () => onOpenChange(false),
                  "aria-label": "Fechar lightbox",
                  children: /* @__PURE__ */ jsxRuntime.jsx(X__default.default, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center h-full px-4", children: [
                hasMultipleItems && /* @__PURE__ */ jsxRuntime.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 text-white hover:bg-white/20 rounded-full backdrop-blur-sm",
                    onClick: handlePrevious,
                    "aria-label": "Item anterior",
                    children: /* @__PURE__ */ jsxRuntime.jsx(ChevronLeft__default.default, { className: "h-6 w-6" })
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    ref: mediaRef,
                    className: cn(
                      "relative max-w-[95vw] max-h-[85vh] overflow-hidden",
                      mediaContainerClassName
                    ),
                    onTouchStart: handleTouchStart,
                    onTouchMove: handleTouchMove,
                    onTouchEnd: handleTouchEnd,
                    onDoubleClick: handleDoubleClick,
                    children: isImage ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(
                      "img",
                      {
                        src: currentItem.url,
                        alt: currentItem.title || "",
                        className: "max-w-full max-h-full object-contain select-none",
                        style: transformStyle,
                        draggable: false
                      }
                    ) }) : /* @__PURE__ */ jsxRuntime.jsx(
                      "video",
                      {
                        ref: videoRef,
                        src: currentItem.url,
                        className: "max-w-full max-h-full object-contain rounded-lg",
                        controls: showControls,
                        autoPlay: autoPlayVideos,
                        playsInline: true,
                        onEnded: () => setIsPlaying(false),
                        onPlay: () => setIsPlaying(true),
                        onPause: () => setIsPlaying(false)
                      }
                    )
                  }
                ),
                hasMultipleItems && /* @__PURE__ */ jsxRuntime.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 text-white hover:bg-white/20 rounded-full backdrop-blur-sm",
                    onClick: handleNext,
                    "aria-label": "Pr\xF3ximo item",
                    children: /* @__PURE__ */ jsxRuntime.jsx(ChevronRight__default.default, { className: "h-6 w-6" })
                  }
                )
              ] }),
              showProgress && hasMultipleItems && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute top-4 left-1/2 -translate-x-1/2 z-10 flex gap-1", children: items.map((_, idx) => /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  className: cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    idx === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"
                  ),
                  onClick: () => onIndexChange(idx),
                  "aria-label": `Ir para item ${idx + 1}`
                },
                idx
              )) }),
              showControls && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center gap-4 max-w-6xl mx-auto", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center text-white max-w-3xl", children: [
                  currentItem.title && /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-xl font-semibold mb-1", children: currentItem.title }),
                  currentItem.description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm opacity-90", children: currentItem.description }),
                  hasMultipleItems && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs opacity-75 mt-2", children: [
                    index + 1,
                    " de ",
                    items.length
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2", children: [
                  isVideo && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-white hover:bg-white/20",
                        onClick: handlePlayPause,
                        "aria-label": isPlaying ? "Pausar" : "Reproduzir",
                        children: isPlaying ? /* @__PURE__ */ jsxRuntime.jsx(Pause__default.default, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntime.jsx(Play__default.default, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-px h-4 bg-white/30" })
                  ] }),
                  allowZoom && isImage && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-white hover:bg-white/20",
                        onClick: handleZoomOut,
                        disabled: zoom <= ZOOM_CONFIG.MIN,
                        "aria-label": "Reduzir zoom",
                        children: /* @__PURE__ */ jsxRuntime.jsx(ZoomOut__default.default, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-xs text-white min-w-[40px] text-center", children: [
                      Math.round(zoom * 100),
                      "%"
                    ] }),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-white hover:bg-white/20",
                        onClick: handleZoomIn,
                        disabled: zoom >= ZOOM_CONFIG.MAX,
                        "aria-label": "Aumentar zoom",
                        children: /* @__PURE__ */ jsxRuntime.jsx(ZoomIn__default.default, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-white hover:bg-white/20",
                        onClick: handleResetZoom,
                        disabled: zoom === ZOOM_CONFIG.DEFAULT && rotation === 0,
                        "aria-label": "Resetar zoom",
                        children: /* @__PURE__ */ jsxRuntime.jsx(Minimize2__default.default, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-px h-4 bg-white/30" })
                  ] }),
                  allowRotation && isImage && /* @__PURE__ */ jsxRuntime.jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "icon",
                      className: "h-8 w-8 text-white hover:bg-white/20",
                      onClick: handleRotate,
                      "aria-label": "Rotacionar",
                      children: /* @__PURE__ */ jsxRuntime.jsx(RotateCw__default.default, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "icon",
                      className: "h-8 w-8 text-white hover:bg-white/20",
                      onClick: handleToggleFullscreen,
                      "aria-label": isFullscreen ? "Sair da tela cheia" : "Tela cheia",
                      children: isFullscreen ? /* @__PURE__ */ jsxRuntime.jsx(Minimize2__default.default, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntime.jsx(Maximize2__default.default, { className: "h-4 w-4" })
                    }
                  ),
                  allowDownload && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-px h-4 bg-white/30" }),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-white hover:bg-white/20",
                        onClick: handleDownload,
                        "aria-label": "Download",
                        children: /* @__PURE__ */ jsxRuntime.jsx(Download__default.default, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ] })
              ] }) }),
              showThumbnails && hasMultipleItems && /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: cn(
                    "absolute z-10 flex gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-lg",
                    "overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent",
                    thumbnailsPositionClasses[thumbnailsPosition]
                  ),
                  children: items.map((item, idx) => /* @__PURE__ */ jsxRuntime.jsxs(
                    "button",
                    {
                      className: cn(
                        "relative flex-shrink-0 overflow-hidden rounded transition-all duration-200",
                        "border-2 focus:outline-none focus:ring-2 focus:ring-white/50",
                        idx === index ? "border-white ring-2 ring-white/30" : "border-transparent hover:border-white/50",
                        thumbnailClasses[thumbnailSize]
                      ),
                      onClick: () => onIndexChange(idx),
                      "aria-label": `Ver item ${idx + 1}`,
                      "aria-current": idx === index,
                      children: [
                        item.thumbnailUrl || item.type === "image" ? /* @__PURE__ */ jsxRuntime.jsx(
                          "img",
                          {
                            src: item.thumbnailUrl || item.url,
                            alt: item.title || `Item ${idx + 1}`,
                            className: "w-full h-full object-cover",
                            loading: "lazy"
                          }
                        ) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(Play__default.default, { className: "h-5 w-5 text-gray-400" }) }),
                        item.type === "video" && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute bottom-1 right-1 bg-black/60 rounded-full p-1", children: /* @__PURE__ */ jsxRuntime.jsx(Play__default.default, { className: "h-2 w-2 text-white" }) })
                      ]
                    },
                    idx
                  ))
                }
              )
            ]
          }
        )
      }
    );
  }
);
Lightbox.displayName = "Lightbox";

exports.Lightbox = Lightbox;
//# sourceMappingURL=lightbox.js.map
//# sourceMappingURL=lightbox.js.map