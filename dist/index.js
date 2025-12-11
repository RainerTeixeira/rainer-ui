"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }"use client"
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/index.ts










var _designtokens = require('@rainersoft/design-tokens');

// src/lib/image-utils.ts
function isAcceptedFormat(mimeType) {
  const acceptedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/avif"
  ];
  return acceptedTypes.includes(mimeType);
}
function isWebP(mimeType) {
  return mimeType === "image/webp";
}
function supportsWebP() {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  });
}
async function getImageInfo(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        size: file.size,
        type: file.type
      });
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };
    img.src = url;
  });
}
async function resizeImage(file, maxWidth, maxHeight, quality = 0.9, format = "image/jpeg") {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Failed to get canvas context"));
        return;
      }
      let { width, height } = img;
      if (width > maxWidth) {
        height = maxWidth / width * height;
        width = maxWidth;
      }
      if (height > maxHeight) {
        width = maxHeight / height * width;
        height = maxHeight;
      }
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const resizedFile = new File([blob], file.name, {
              type: format,
              lastModified: Date.now()
            });
            resolve(resizedFile);
          } else {
            reject(new Error("Failed to create blob"));
          }
        },
        format,
        quality
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };
    img.src = url;
  });
}
async function convertToWebP(file, quality = 0.9) {
  if (isWebP(file.type)) {
    return file;
  }
  return resizeImage(file, file.size, file.size, quality, "image/webp");
}
async function prepareImageForUpload(file, options = {}) {
  const {
    maxWidth = 1920,
    maxHeight = 1080,
    quality = 0.9,
    shouldConvertToWebP = true,
    maxSizeBytes = 5 * 1024 * 1024
    // 5MB
  } = options;
  if (!isAcceptedFormat(file.type)) {
    throw new Error("Formato de imagem n\xE3o suportado");
  }
  if (file.size > maxSizeBytes) {
    throw new Error(`Arquivo muito grande. M\xE1ximo: ${maxSizeBytes / 1024 / 1024}MB`);
  }
  const info = await getImageInfo(file);
  let processedFile = file;
  if (info.width > maxWidth || info.height > maxHeight) {
    processedFile = await resizeImage(file, maxWidth, maxHeight, quality);
  }
  if (shouldConvertToWebP && !isWebP(processedFile.type)) {
    try {
      const isWebPSupported = await supportsWebP();
      if (isWebPSupported === true) {
        processedFile = await convertToWebP(processedFile, quality);
      }
    } catch (e2) {
    }
  }
  return processedFile;
}
function generatePlaceholder(width, height, text = "") {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";
  ctx.fillStyle = "#e5e7eb";
  ctx.fillRect(0, 0, width, height);
  if (text) {
    ctx.fillStyle = "#6b7280";
    ctx.font = `${Math.min(width, height) / 10}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, width / 2, height / 2);
  }
  return canvas.toDataURL();
}

// src/lib/utils.ts
var _clsx = require('clsx');
var _tailwindmerge = require('tailwind-merge');

function cn(...inputs) {
  return _tailwindmerge.twMerge.call(void 0, _clsx.clsx.call(void 0, inputs));
}
var SECTION_CLASSES = {
  /** Container padrão de página com largura máxima e padding responsivo */
  container: "w-full max-w-6xl mx-auto px-6 py-12"
};
var motion = _designtokens.motionTokens;
var ANIMATION_DELAYS = motion.delay;
var ANIMATION_DURATIONS = motion.duration;
var ANIMATION_EASINGS = motion.easing;
var motionPresets = {
  default: {
    duration: motion.duration.normal,
    easing: motion.easing.easeInOut
  },
  fast: {
    duration: motion.duration.fast,
    easing: motion.easing.easeOut
  },
  slow: {
    duration: motion.duration.slow,
    easing: motion.easing.easeInOut
  },
  spring: {
    duration: motion.duration.normal,
    easing: motion.easing.spring
  }
};

// src/lib/color-utils.ts

function getTokenColor(tokenName, theme) {
  const cleanName = tokenName.replace(/^color-/, "");
  if (theme) {
    const colors = theme === "light" ? _designtokens.tokens.colors.light : _designtokens.tokens.colors.dark;
    for (const category of Object.values(colors)) {
      if (typeof category === "object" && category !== null) {
        for (const [key, value] of Object.entries(category)) {
          if (key === cleanName && typeof value === "string") {
            return value;
          }
        }
      }
    }
  }
  const varName = tokenName.startsWith("color-") ? tokenName : `color-${tokenName}`;
  return `var(--${varName})`;
}
function hexToRGB(hex) {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}
function hexToRGBA(hex, alpha = 1) {
  const rgb = hexToRGB(hex);
  return `rgba(${rgb}, ${alpha})`;
}
function overlayFromToken(tokenName, alpha = 0.08, theme) {
  const cleanName = tokenName.replace(/^color-/, "");
  if (theme) {
    const colors = theme === "light" ? _designtokens.tokens.colors.light : _designtokens.tokens.colors.dark;
    for (const category of Object.values(colors)) {
      if (typeof category === "object" && category !== null) {
        for (const [key, value] of Object.entries(category)) {
          if (key === cleanName && typeof value === "string" && value.startsWith("#")) {
            return hexToRGBA(value, alpha);
          }
        }
      }
    }
  }
  const varName = tokenName.startsWith("color-") ? tokenName : `color-${tokenName}`;
  return `rgba(var(--${varName}-rgb, 0 0 0), ${alpha})`;
}
function isValidHex(hex) {
  const cleanHex = hex.replace("#", "");
  return /^[0-9A-Fa-f]{6}$/.test(cleanHex);
}
function getContrastColor(hex) {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#ffffff";
}

// src/lib/theme-utils.ts

function getThemeColors(theme) {
  return theme === "light" ? _designtokens.tokens.colors.light : _designtokens.tokens.colors.dark;
}
function getColorFromTheme(theme, category, shade) {
  const colors = getThemeColors(theme);
  const colorCategory = colors[category];
  if (!colorCategory || typeof colorCategory !== "object") {
    return void 0;
  }
  return colorCategory[shade];
}
function getSemanticColors(theme) {
  const colors = getThemeColors(theme);
  return {
    text: {
      primary: _optionalChain([colors, 'access', _2 => _2.text, 'optionalAccess', _3 => _3.primary]) || _optionalChain([colors, 'access', _4 => _4.neutral, 'optionalAccess', _5 => _5["900"]]),
      secondary: _optionalChain([colors, 'access', _6 => _6.text, 'optionalAccess', _7 => _7.secondary]) || _optionalChain([colors, 'access', _8 => _8.neutral, 'optionalAccess', _9 => _9["600"]]),
      muted: _optionalChain([colors, 'access', _10 => _10.text, 'optionalAccess', _11 => _11.muted]) || _optionalChain([colors, 'access', _12 => _12.neutral, 'optionalAccess', _13 => _13["500"]]),
      disabled: _optionalChain([colors, 'access', _14 => _14.text, 'optionalAccess', _15 => _15.disabled]) || _optionalChain([colors, 'access', _16 => _16.neutral, 'optionalAccess', _17 => _17["400"]])
    },
    background: {
      primary: _optionalChain([colors, 'access', _18 => _18.background, 'optionalAccess', _19 => _19.primary]) || _optionalChain([colors, 'access', _20 => _20.neutral, 'optionalAccess', _21 => _21["50"]]),
      secondary: _optionalChain([colors, 'access', _22 => _22.background, 'optionalAccess', _23 => _23.secondary]) || _optionalChain([colors, 'access', _24 => _24.neutral, 'optionalAccess', _25 => _25["100"]]),
      tertiary: _optionalChain([colors, 'access', _26 => _26.background, 'optionalAccess', _27 => _27.tertiary]) || _optionalChain([colors, 'access', _28 => _28.neutral, 'optionalAccess', _29 => _29["200"]])
    },
    border: {
      default: _optionalChain([colors, 'access', _30 => _30.border, 'optionalAccess', _31 => _31.default]) || _optionalChain([colors, 'access', _32 => _32.neutral, 'optionalAccess', _33 => _33["300"]]),
      muted: _optionalChain([colors, 'access', _34 => _34.border, 'optionalAccess', _35 => _35.muted]) || _optionalChain([colors, 'access', _36 => _36.neutral, 'optionalAccess', _37 => _37["200"]]),
      strong: _optionalChain([colors, 'access', _38 => _38.border, 'optionalAccess', _39 => _39.strong]) || _optionalChain([colors, 'access', _40 => _40.neutral, 'optionalAccess', _41 => _41["400"]])
    },
    brand: {
      primary: _optionalChain([colors, 'access', _42 => _42.brand, 'optionalAccess', _43 => _43.primary]),
      secondary: _optionalChain([colors, 'access', _44 => _44.brand, 'optionalAccess', _45 => _45.secondary]),
      tertiary: _optionalChain([colors, 'access', _46 => _46.brand, 'optionalAccess', _47 => _47.tertiary])
    },
    accent: colors.accent || {},
    status: {
      success: _optionalChain([colors, 'access', _48 => _48.status, 'optionalAccess', _49 => _49.success]) || "#10b981",
      warning: _optionalChain([colors, 'access', _50 => _50.status, 'optionalAccess', _51 => _51.warning]) || "#f59e0b",
      error: _optionalChain([colors, 'access', _52 => _52.status, 'optionalAccess', _53 => _53.error]) || "#ef4444",
      info: _optionalChain([colors, 'access', _54 => _54.status, 'optionalAccess', _55 => _55.info]) || "#3b82f6"
    }
  };
}
function generateTailwindClasses(options) {
  const classes = [];
  if (options.bg) classes.push(`bg-${options.bg}`);
  if (options.text) classes.push(`text-${options.text}`);
  if (options.border) classes.push(`border-${options.border}`);
  if (options.rounded) classes.push(`rounded-${options.rounded}`);
  if (options.shadow) classes.push(`shadow-${options.shadow}`);
  if (options.p) classes.push(`p-${options.p}`);
  if (options.m) classes.push(`m-${options.m}`);
  Object.entries(options).forEach(([key, value]) => {
    if (value && !["bg", "text", "border", "rounded", "shadow", "p", "m"].includes(key)) {
      classes.push(`${key}-${value}`);
    }
  });
  return classes.join(" ");
}
var SEMANTIC_COLORS = {
  light: getSemanticColors("light"),
  dark: getSemanticColors("dark")
};
function getStatusColor(status, theme = "light") {
  return SEMANTIC_COLORS[theme].status[status];
}
function getBrandColor(variant, theme = "light") {
  return SEMANTIC_COLORS[theme].brand[variant];
}

// src/components/actions/button/Button.tsx
var _reactslot = require('@radix-ui/react-slot');
var _classvarianceauthority = require('class-variance-authority');
var _jsxruntime = require('react/jsx-runtime');
var buttonVariants = _classvarianceauthority.cva.call(void 0, 
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-[var(--motion-duration,200ms)] ease-[var(--motion-easing,cubic-bezier(.4,0,.2,1))] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:shadow-glow-cyan",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:hover:shadow-glow-purple",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 dark:hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline dark:neon-text",
        neon: "bg-primary border-2 border-primary text-primary-foreground hover:bg-primary/90 dark:neon-box",
        glass: "glass neon-border hover:glass-hover dark:text-primary"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? _reactslot.Slot : "button";
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/actions/slider/Slider.tsx
var _reactslider = require('@radix-ui/react-slider'); var SliderPrimitive = _interopRequireWildcard(_reactslider);
var _react = require('react'); var React = _interopRequireWildcard(_react); var React2 = _interopRequireWildcard(_react); var React3 = _interopRequireWildcard(_react); var React5 = _interopRequireWildcard(_react); var React4 = _interopRequireWildcard(_react); var React6 = _interopRequireWildcard(_react); var React7 = _interopRequireWildcard(_react); var React8 = _interopRequireWildcard(_react); var React9 = _interopRequireWildcard(_react); var React10 = _interopRequireWildcard(_react); var React11 = _interopRequireWildcard(_react); var React12 = _interopRequireWildcard(_react); var React13 = _interopRequireWildcard(_react); var React14 = _interopRequireWildcard(_react); var React15 = _interopRequireWildcard(_react); var React16 = _interopRequireWildcard(_react); var React17 = _interopRequireWildcard(_react); var React18 = _interopRequireWildcard(_react); var React19 = _interopRequireWildcard(_react); var React20 = _interopRequireWildcard(_react); var React21 = _interopRequireWildcard(_react); var React22 = _interopRequireWildcard(_react); var React23 = _interopRequireWildcard(_react); var React24 = _interopRequireWildcard(_react); var React25 = _interopRequireWildcard(_react); var React26 = _interopRequireWildcard(_react); var React27 = _interopRequireWildcard(_react); var React28 = _interopRequireWildcard(_react); var React29 = _interopRequireWildcard(_react); var React31 = _interopRequireWildcard(_react); var React30 = _interopRequireWildcard(_react); var React32 = _interopRequireWildcard(_react);

var Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        SliderPrimitive.Track,
        {
          className: cn(
            "relative h-2 w-full grow overflow-hidden bg-secondary rounded-full"
          ),
          children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SliderPrimitive.Range, { className: "absolute h-full bg-primary" })
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        SliderPrimitive.Thumb,
        {
          className: cn(
            "block h-5 w-5 border-2 border-primary bg-background ring-offset-background rounded-full transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:pointer-events-none",
            "disabled:opacity-50"
          )
        }
      )
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

// src/components/actions/toggle/Toggle.tsx

var _reacttoggle = require('@radix-ui/react-toggle'); var TogglePrimitive = _interopRequireWildcard(_reacttoggle);


var toggleVariants = _classvarianceauthority.cva.call(void 0, 
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Toggle = React2.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  TogglePrimitive.Root,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  }
));
Toggle.displayName = TogglePrimitive.Root.displayName;

// src/components/forms/checkbox/Checkbox.tsx

var _reactcheckbox = require('@radix-ui/react-checkbox'); var CheckboxPrimitive = _interopRequireWildcard(_reactcheckbox);
var _lucidereact = require('lucide-react');

var Checkbox = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/forms/form/Form.tsx






var _reacthookform = require('react-hook-form');

// src/components/forms/label/Label.tsx

var _reactlabel = require('@radix-ui/react-label'); var LabelPrimitive = _interopRequireWildcard(_reactlabel);


var labelVariants = _classvarianceauthority.cva.call(void 0, 
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-cyan-200 dark:font-mono"
);
var Label = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/forms/form/Form.tsx

var Form = _reacthookform.FormProvider;
var FormFieldContext = React5.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _reacthookform.Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React5.useContext(FormFieldContext);
  const itemContext = React5.useContext(FormItemContext);
  const { getFieldState, formState } = _reacthookform.useFormContext.call(void 0, );
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React5.createContext(
  {}
);
var FormItem = React5.forwardRef(({ className, ...props }, ref) => {
  const id = React5.useId();
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { ref, className: cn("space-y-2", className), ...props }) });
});
FormItem.displayName = "FormItem";
var FormLabel = React5.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    Label,
    {
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React5.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _reactslot.Slot,
    {
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
});
FormControl.displayName = "FormControl";
var FormDescription = React5.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React5.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(_optionalChain([error, 'optionalAccess', _56 => _56.message])) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "p",
    {
      ref,
      id: formMessageId,
      className: cn("text-sm font-medium text-destructive", className),
      ...props,
      children: body
    }
  );
});
FormMessage.displayName = "FormMessage";

// src/components/forms/input/Input.tsx

function Input({ className, type, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        /** Classes base: layout, tipografia, transições */
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        /** Estado de foco: borda e ring para acessibilidade */
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        /** Estado inválido: borda e ring vermelhos */
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/components/forms/radio-group/RadioGroup.tsx

var _reactradiogroup = require('@radix-ui/react-radio-group'); var RadioGroupPrimitive = _interopRequireWildcard(_reactradiogroup);


var RadioGroup = React6.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React6.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/forms/select/Select.tsx

var _reactselect = require('@radix-ui/react-select'); var SelectPrimitive = _interopRequireWildcard(_reactselect);


var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2",
      "text-sm ring-offset-background",
      "placeholder:text-muted-foreground",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "[&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React7.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.Portal, { children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectScrollUpButton, {}),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/forms/switch/Switch.tsx

var _reactswitch = require('@radix-ui/react-switch'); var SwitchPrimitives = _interopRequireWildcard(_reactswitch);

var Switch = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent",
      "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;

// src/components/forms/textarea/Textarea.tsx


var Textarea = React9.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "dark:bg-background dark:border-border dark:text-foreground dark:placeholder:text-muted-foreground dark:focus-visible:ring-ring dark:focus-visible:border-border",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";

// src/components/layout/aspect-ratio/AspectRatio.tsx
var _reactaspectratio = require('@radix-ui/react-aspect-ratio'); var AspectRatioPrimitive = _interopRequireWildcard(_reactaspectratio);
var AspectRatio = AspectRatioPrimitive.Root;

// src/components/layout/card/Card.tsx



var Card = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var HighlightCard = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "div",
  {
    ref,
    className: cn(
      "text-left bg-card/60 dark:bg-black/50",
      "backdrop-blur-xl",
      "rounded-2xl",
      "p-4 xs:p-5 sm:p-6 md:p-8",
      "border border-border/50 dark:border-cyan-400/20",
      "hover:border-primary/40 dark:hover:border-cyan-400/50",
      "hover:bg-card/80 dark:hover:bg-black/70",
      "hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-cyan-500/20",
      "h-full flex flex-col group",
      "relative overflow-hidden",
      `before:absolute before:inset-0 before:${_designtokens.GRADIENT_DIRECTIONS.TO_BR}`,
      "before:from-primary/0 before:via-primary/0 before:to-primary/0",
      "hover:before:from-primary/5 hover:before:via-transparent hover:before:to-primary/5",
      "dark:hover:before:from-cyan-400/5 dark:hover:before:via-transparent dark:hover:before:to-purple-400/5",
      "before:transition-all before:duration-500 before:ease-in-out before:pointer-events-none",
      _designtokens.MOTION.TRANSITION.DEFAULT,
      className
    ),
    ...props
  }
));
HighlightCard.displayName = "HighlightCard";

// src/components/layout/scroll-area/ScrollArea.tsx

var _reactscrollarea = require('@radix-ui/react-scroll-area'); var ScrollAreaPrimitive = _interopRequireWildcard(_reactscrollarea);

var ScrollArea = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, ScrollBar, {}),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React11.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/components/layout/separator/Separator.tsx
var _reactseparator = require('@radix-ui/react-separator'); var SeparatorPrimitive = _interopRequireWildcard(_reactseparator);


var Separator2 = React12.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        /** Define dimensões baseado na orientação */
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      ),
      ...props
    }
  )
);
Separator2.displayName = SeparatorPrimitive.Root.displayName;

// src/components/layout/sheet/Sheet.tsx
var _reactdialog = require('@radix-ui/react-dialog'); var SheetPrimitive = _interopRequireWildcard(_reactdialog); var DialogPrimitive = _interopRequireWildcard(_reactdialog);


function Sheet({ ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, SheetPortal, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SheetOverlay, {}),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          /** Lado direito: slide horizontal da direita, altura total, max 400px */
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          /** Lado esquerdo: slide horizontal da esquerda */
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          /** Lado superior: slide vertical do topo */
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          /** Lado inferior: slide vertical do fundo */
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.XIcon, { className: "size-4" }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/components/layout/table/Table.tsx


var Table = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors duration-200 hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
var TableCell = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";

// src/components/feedback/alert/Alert.tsx



var alertVariants = _classvarianceauthority.cva.call(void 0, 
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        success: "border-status-success-base/50 bg-status-success-background text-status-success-text-on-background dark:border-status-success-base dark:text-status-success-text-on-background [&>svg]:text-status-success-text-on-background",
        warning: "border-status-warning-base/50 bg-status-warning-background text-status-warning-text-on-background dark:border-status-warning-base dark:text-status-warning-text-on-background [&>svg]:text-status-warning-text-on-background",
        info: "border-status-info-base/50 bg-status-info-background text-status-info-text-on-background dark:border-status-info-base dark:text-status-info-text-on-background [&>svg]:text-status-info-text-on-background"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = React14.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
var AlertTitle = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";

// src/components/feedback/alert-dialog/AlertDialog.tsx

var _reactalertdialog = require('@radix-ui/react-alert-dialog'); var AlertDialogPrimitive = _interopRequireWildcard(_reactalertdialog);

var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogOverlay = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, AlertDialogPortal, { children: [
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, AlertDialogOverlay, {}),
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// src/components/feedback/badge/Badge.tsx


var badgeVariants = _classvarianceauthority.cva.call(void 0, 
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    /**
     * Variantes de estilo
     * Cada variante define aparência diferente do badge
     */
    variants: {
      variant: {
        /** Badge primário - cor primária com borda transparente */
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        /** Badge secundário - cor secundária */
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        /** Badge destrutivo - para status negativos/erros */
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        /** Badge outline - apenas borda, fundo transparente */
        outline: "text-foreground"
      }
    },
    /**
     * Variante padrão aplicada quando prop não é fornecida
     */
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: cn(badgeVariants({ variant }), className), ...props });
}

// src/components/feedback/progress/Progress.tsx
var _reactprogress = require('@radix-ui/react-progress'); var ProgressPrimitive = _interopRequireWildcard(_reactprogress);


var Progress = React16.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  ProgressPrimitive.Root,
  {
    ref,
    className: cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    ),
    ...props,
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      ProgressPrimitive.Indicator,
      {
        className: cn("h-full w-full flex-1 transition-all", "bg-primary"),
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive.Root.displayName;

// src/components/feedback/skeleton/Skeleton.tsx

function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}

// src/components/feedback/sonner/Sonner.tsx







var _nextthemes = require('next-themes');
var _sonner = require('sonner');

var Toaster = ({ ...props }) => {
  const { theme = "system" } = _nextthemes.useTheme.call(void 0, );
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _sonner.Toaster,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.CircleCheck, { className: "h-4 w-4" }),
        info: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Info, { className: "h-4 w-4" }),
        warning: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.TriangleAlert, { className: "h-4 w-4" }),
        error: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.OctagonX, { className: "h-4 w-4" }),
        loading: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.LoaderCircle, { className: "h-4 w-4 animate-spin" })
      },
      toastOptions: {
        classNames: {
          toast: cn(
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border shadow-lg",
            "dark:group-[.toaster]:bg-background dark:group-[.toaster]:border-border"
          ),
          title: "dark:text-foreground",
          description: "group-[.toast]:text-muted-foreground dark:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          error: "dark:bg-status-error-background dark:border-status-error-border",
          success: "dark:bg-status-success-background dark:border-status-success-border"
        }
      },
      ...props
    }
  );
};

// src/components/overlays/context-menu/ContextMenu.tsx
var _reactcontextmenu = require('@radix-ui/react-context-menu'); var ContextMenuPrimitive = _interopRequireWildcard(_reactcontextmenu);



var ContextMenu = ContextMenuPrimitive.Root;
var ContextMenuTrigger = ContextMenuPrimitive.Trigger;
var ContextMenuGroup = ContextMenuPrimitive.Group;
var ContextMenuPortal = ContextMenuPrimitive.Portal;
var ContextMenuSub = ContextMenuPrimitive.Sub;
var ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
var ContextMenuSubTrigger = React17.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  ContextMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none rounded-sm transition-colors duration-200",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
var ContextMenuSubContent = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  ContextMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden border bg-popover p-1 text-popover-foreground rounded-md shadow-md transition-all duration-200",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-context-menu-content-transform-origin]",
      className
    ),
    ...props
  }
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
var ContextMenuContent = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  ContextMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "z-50 max-h-[--radix-context-menu-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden border bg-popover p-1 text-popover-foreground",
      "rounded-md",
      "shadow-md",
      "transition-all duration-200 ease-in-out",
      "animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-context-menu-content-transform-origin]",
      className
    ),
    ...props
  }
) }));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
var ContextMenuItem = React17.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  ContextMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none",
      "rounded-sm",
      "transition-colors duration-200 ease-in-out",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none",
      "data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
var ContextMenuCheckboxItem = React17.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  ContextMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;
var ContextMenuRadioItem = React17.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  ContextMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
var ContextMenuLabel = React17.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  ContextMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm text-foreground font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
var ContextMenuSeparator = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  ContextMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-border", className),
    ...props
  }
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
var ContextMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

// src/components/overlays/dialog/Dialog.tsx





var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      _designtokens.Z_INDEX.BACKDROP,
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React18.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogPortal, { children: [
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DialogOverlay, {}),
  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg rounded-lg sm:rounded-lg",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        _designtokens.MOTION.TRANSITION.DEFAULT,
        _designtokens.Z_INDEX.MODAL,
        "dark:bg-black/95 dark:border-cyan-400/30 dark:shadow-cyan-500/20",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground dark:focus:ring-cyan-400", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "sr-only", children: "Fechar" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight dark:text-cyan-200 dark:font-mono",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  DialogPrimitive.Description,
  {
    ref,
    className: cn(
      "text-sm text-muted-foreground dark:text-gray-400",
      className
    ),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/overlays/dropdown-menu/DropdownMenu.tsx

var _reactdropdownmenu = require('@radix-ui/react-dropdown-menu'); var DropdownMenuPrimitive = _interopRequireWildcard(_reactdropdownmenu);


var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React19.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
      "focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React19.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React19.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/overlays/hover-card/HoverCard.tsx

var _reacthovercard = require('@radix-ui/react-hover-card'); var HoverCardPrimitive = _interopRequireWildcard(_reacthovercard);

var HoverCard = HoverCardPrimitive.Root;
var HoverCardTrigger = HoverCardPrimitive.Trigger;
var HoverCardContent = React20.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  HoverCardPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-hover-card-content-transform-origin]",
      className
    ),
    ...props
  }
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

// src/components/overlays/popover/Popover.tsx

var _reactpopover = require('@radix-ui/react-popover'); var PopoverPrimitive = _interopRequireWildcard(_reactpopover);

var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React21.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, PopoverPrimitive.Portal, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/overlays/tooltip/Tooltip.tsx
var _reacttooltip = require('@radix-ui/react-tooltip'); var TooltipPrimitive = _interopRequireWildcard(_reacttooltip);

function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, TooltipProvider, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, TooltipPrimitive.Portal, { children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, TooltipPrimitive.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}

// src/components/navigation/accordion/Accordion.tsx
var _reactaccordion = require('@radix-ui/react-accordion'); var AccordionPrimitive = _interopRequireWildcard(_reactaccordion);



var Accordion = AccordionPrimitive.Root;
var AccordionItem = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React22.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all duration-200 ease-in-out hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        _lucidereact.ChevronDown,
        {
          className: "h-4 w-4 shrink-0 transition-transform duration-150"
        }
      )
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React22.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/navigation/collapsible/Collapsible.tsx
var _reactcollapsible = require('@radix-ui/react-collapsible'); var CollapsiblePrimitive = _interopRequireWildcard(_reactcollapsible);
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive.CollapsibleContent;

// src/components/navigation/command/Command.tsx
var _cmdk = require('cmdk');



var Command = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  _cmdk.Command,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = _cmdk.Command.displayName;
var CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogContent, { className: "overflow-hidden p-0", children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DialogTitle, { className: "sr-only", children: "Buscar artigos" }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children })
  ] }) });
};
var CommandInput = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _cmdk.Command.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = _cmdk.Command.Input.displayName;
var CommandList = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  _cmdk.Command.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = _cmdk.Command.List.displayName;
var CommandEmpty = React23.forwardRef((props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  _cmdk.Command.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = _cmdk.Command.Empty.displayName;
var CommandGroup = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  _cmdk.Command.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = _cmdk.Command.Group.displayName;
var CommandSeparator = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  _cmdk.Command.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = _cmdk.Command.Separator.displayName;
var CommandItem = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  _cmdk.Command.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = _cmdk.Command.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
CommandShortcut.displayName = "CommandShortcut";

// src/components/navigation/navigation-menu/NavigationMenu.tsx
var _reactnavigationmenu = require('@radix-ui/react-navigation-menu'); var NavigationMenuPrimitive = _interopRequireWildcard(_reactnavigationmenu);





var NavigationMenu = React24.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex max-w-max flex-1 items-center justify-center",
      _designtokens.Z_INDEX.DROPDOWN,
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = _classvarianceauthority.cva.call(void 0, 
  cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium",
    _designtokens.MOTION.TRANSITION.COLOR,
    "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
  )
);
var NavigationMenuTrigger = React24.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        _lucidereact.ChevronDown,
        {
          className: cn(
            "relative top-px ml-1 h-3 w-3 group-data-[state=open]:rotate-180",
            _designtokens.MOTION.TRANSITION.TRANSFORM
          ),
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      "z-[1]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

// src/components/navigation/tabs/Tabs.tsx

var _reacttabs = require('@radix-ui/react-tabs'); var TabsPrimitive = _interopRequireWildcard(_reacttabs);

var Tabs = TabsPrimitive.Root;
var TabsList = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5",
      "text-sm font-medium ring-offset-background transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/components/data-display/avatar/Avatar.tsx

var _reactavatar = require('@radix-ui/react-avatar'); var AvatarPrimitive = _interopRequireWildcard(_reactavatar);

var Avatar = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// src/components/data-display/calendar/Calendar.tsx







function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}
function isSameDay(a, b) {
  if (!a || !b) return false;
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function addMonths(date, amount) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + amount);
  return d;
}
function getMonthGrid(month) {
  const firstOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
  const startDay = firstOfMonth.getDay();
  const gridStart = new Date(firstOfMonth);
  gridStart.setDate(firstOfMonth.getDate() - startDay);
  const days = [];
  for (let i = 0; i < 42; i += 1) {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    days.push(d);
  }
  return days;
}
function getWeekdayLabels(locale) {
  const base = new Date(2024, 0, 7);
  return Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    return d.toLocaleDateString(locale, { weekday: "short" });
  });
}
function Calendar({ className, selected, onSelect, disabled }) {
  const initialMonth = _nullishCoalesce(selected, () => ( /* @__PURE__ */ new Date()));
  const [currentMonth, setCurrentMonth] = React27.useState(
    startOfDay(initialMonth)
  );
  const today = React27.useMemo(() => startOfDay(/* @__PURE__ */ new Date()), []);
  const days = React27.useMemo(() => getMonthGrid(currentMonth), [currentMonth]);
  const weekdayLabels = React27.useMemo(
    () => getWeekdayLabels("pt-BR"),
    []
  );
  const handlePrevMonth = React27.useCallback(() => {
    setCurrentMonth((prev) => addMonths(prev, -1));
  }, []);
  const handleNextMonth = React27.useCallback(() => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  }, []);
  const handleSelect = React27.useCallback(
    (date) => {
      if (_optionalChain([disabled, 'optionalCall', _57 => _57(date)])) return;
      if (onSelect) {
        if (selected && isSameDay(selected, date)) {
          onSelect(void 0);
        } else {
          onSelect(date);
        }
      }
    },
    [disabled, onSelect, selected]
  );
  const monthLabel = React27.useMemo(
    () => currentMonth.toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric"
    }),
    [currentMonth]
  );
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] rounded-lg border border-border shadow-sm",
        className
      ),
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "h-[--cell-size] w-[--cell-size] p-0",
              onClick: handlePrevMonth,
              "aria-label": "M\xEAs anterior",
              children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronLeftIcon, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "text-sm font-medium capitalize", children: monthLabel }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronDownIcon, { className: "size-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "h-[--cell-size] w-[--cell-size] p-0",
              onClick: handleNextMonth,
              "aria-label": "Pr\xF3ximo m\xEAs",
              children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronRightIcon, { className: "size-4" })
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mb-1 flex w-full", children: weekdayLabels.map((label) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "div",
          {
            className: "text-muted-foreground flex-1 select-none text-center text-[0.75rem] font-normal uppercase",
            children: label
          },
          label
        )) }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "grid grid-cols-7 gap-1", children: days.map((date) => {
          const isOutsideMonth = date.getMonth() !== currentMonth.getMonth() || date.getFullYear() !== currentMonth.getFullYear();
          const isSelected = selected ? isSameDay(selected, date) : false;
          const isToday = isSameDay(today, date);
          const isDisabled = _nullishCoalesce(_optionalChain([disabled, 'optionalCall', _58 => _58(date)]), () => ( false));
          return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            CalendarDayButton,
            {
              date,
              isOutside: isOutsideMonth,
              isSelected,
              isToday,
              disabled: isDisabled,
              onSelect: handleSelect
            },
            date.toISOString()
          );
        }) })
      ]
    }
  );
}
function CalendarDayButton({
  date,
  isOutside,
  isSelected,
  isToday,
  disabled,
  onSelect,
  className
}) {
  const handleClick = React27.useCallback(() => {
    if (disabled) return;
    _optionalChain([onSelect, 'optionalCall', _59 => _59(date)]);
  }, [date, disabled, onSelect]);
  const baseClasses = cn(
    "flex aspect-square h-9 w-9 items-center justify-center rounded-md text-sm font-normal transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
    isOutside && "text-muted-foreground/60",
    disabled && "text-muted-foreground opacity-50 cursor-not-allowed",
    isToday && "border border-dashed border-primary",
    isSelected && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
    !isSelected && !disabled && !isOutside && "hover:bg-accent hover:text-accent-foreground",
    !isSelected && isOutside && !disabled && "hover:bg-muted hover:text-foreground",
    className
  );
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "button",
    {
      type: "button",
      onClick: handleClick,
      disabled,
      className: baseClasses,
      "aria-pressed": isSelected,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "text-xs leading-none", children: date.getDate() })
    }
  );
}

// src/components/data-display/carousel/Carousel.tsx
var _emblacarouselreact = require('embla-carousel-react'); var _emblacarouselreact2 = _interopRequireDefault(_emblacarouselreact);



var CarouselContext = React28.createContext(null);
function useCarousel() {
  const context = React28.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = React28.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = _emblacarouselreact2.default.call(void 0, 
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React28.useState(false);
    const [canScrollNext, setCanScrollNext] = React28.useState(false);
    const onSelect = React28.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React28.useCallback(() => {
      _optionalChain([api, 'optionalAccess', _60 => _60.scrollPrev, 'call', _61 => _61()]);
    }, [api]);
    const scrollNext = React28.useCallback(() => {
      _optionalChain([api, 'optionalAccess', _62 => _62.scrollNext, 'call', _63 => _63()]);
    }, [api]);
    const handleKeyDown = React28.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React28.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React28.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        _optionalChain([api, 'optionalAccess', _64 => _64.off, 'call', _65 => _65("select", onSelect)]);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (_optionalChain([opts, 'optionalAccess', _66 => _66.axis]) === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React28.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React28.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React28.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React28.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

// src/components/effects/particles-effect/ParticlesEffect.tsx

var PARTICLE_POSITIONS = {
  default: {
    particle1: "top-20 left-1/4",
    particle2: "top-40 right-1/3",
    particle3: "bottom-40 left-1/2"
  },
  alt1: {
    particle1: "top-24 left-1/5",
    particle2: "top-80 right-1/5",
    particle3: "bottom-80 left-1/3"
  },
  alt2: {
    particle1: "top-32 left-1/3",
    particle2: "top-60 right-1/4",
    particle3: "bottom-60 left-1/5"
  }
};
function ParticlesEffect({
  variant = "default"
} = {}) {
  const selectedPositions = PARTICLE_POSITIONS[variant];
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      className: "fixed inset-0 pointer-events-none opacity-0 dark:opacity-100 z-0",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "div",
          {
            className: `absolute ${selectedPositions.particle1} w-1 h-1 rounded-full animate-pulse opacity-40`,
            style: {
              backgroundColor: "var(--color-text-neon-cyan)"
            }
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "div",
          {
            className: `absolute ${selectedPositions.particle2} w-0.5 h-0.5 rounded-full animate-pulse opacity-30`,
            style: {
              animationDelay: ANIMATION_DELAYS.short,
              backgroundColor: "var(--color-text-neon-purple)"
            }
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "div",
          {
            className: `absolute ${selectedPositions.particle3} w-0.5 h-0.5 rounded-full animate-pulse opacity-35`,
            style: {
              animationDelay: ANIMATION_DELAYS.long,
              backgroundColor: "var(--color-text-neon-pink)"
            }
          }
        )
      ]
    }
  );
}

// src/components/effects/stars-background/StarsBackground.tsx



function StarsBackground() {
  const { resolvedTheme } = _nextthemes.useTheme.call(void 0, );
  const [mounted, setMounted] = _react.useState.call(void 0, false);
  const [stars, setStars] = _react.useState.call(void 0, []);
  _react.useEffect.call(void 0, () => {
    setMounted(true);
  }, []);
  _react.useEffect.call(void 0, () => {
    if (!mounted) return;
    const starsCount = 150;
    const newStars = Array.from({ length: starsCount }, (_, i) => {
      const randomLeft = Math.random() * 100;
      const randomTop = Math.random() * 100;
      const randomSize = Math.random() * 2 + 0.5;
      const randomDelay = Math.random() * 3;
      const randomOpacity = 0.6 + Math.random() * 0.4;
      return {
        id: i,
        left: randomLeft,
        top: randomTop,
        size: randomSize,
        delay: randomDelay,
        opacity: randomOpacity
      };
    });
    setStars(newStars);
  }, [mounted]);
  if (!mounted) {
    return null;
  }
  if (resolvedTheme !== "dark") {
    return null;
  }
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "div",
      {
        className: "fixed inset-0 pointer-events-none overflow-hidden",
        style: { zIndex: 0 },
        "aria-hidden": "true",
        children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "absolute inset-0", children: stars.map((star) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "div",
          {
            className: "absolute rounded-full",
            style: {
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              // Usa token dedicado de efeito para a cor das estrelas
              backgroundColor: "var(--effect-star-color)",
              boxShadow: `0 0 ${star.size * 2}px var(--effect-star-color)`,
              animation: "starTwinkle 3s ease-in-out infinite",
              animationDelay: `${star.delay}s`
            }
          },
          star.id
        )) })
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "style", { children: `
        /* Anima\xE7\xE3o de brilho das estrelas */
        @keyframes starTwinkle {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      ` })
  ] });
}

// src/components/effects/matrix-background/MatrixBackground.tsx


var MOBILE_BREAKPOINT = 640;
var TABLET_BREAKPOINT = 1024;
var BINARY_PATTERNS = [
  "0101",
  "1010",
  "0110",
  "1001",
  "0011",
  "1100",
  "1111",
  "0000",
  "1000",
  "0111",
  "1101",
  "0010",
  "0100",
  "1110",
  "1011",
  "0110",
  "0001",
  "1010",
  "1001",
  "0011",
  "0101",
  "0111",
  "0100",
  "1000",
  "1100",
  "0011",
  "1001",
  "0110",
  "1010",
  "0101",
  "0000",
  "1111",
  "0010",
  "1101",
  "0111",
  "1000"
];
function generateCharacters(count) {
  return Array.from({ length: count }).map((_, idx) => {
    if (idx === 0) return Math.random() > 0.5 ? "1" : "0";
    const pattern = BINARY_PATTERNS[Math.floor(Math.random() * BINARY_PATTERNS.length)] || "0101";
    return pattern[idx % pattern.length] || "0";
  });
}
function generateColumn(i, columnCount, isMobile, isTablet) {
  const randomId = Math.round(Math.random() * 1e4);
  const charactersCount = isMobile ? 12 + Math.floor(Math.random() * 8) : 15 + Math.floor(Math.random() * 12);
  return {
    id: `col-${i}-${randomId}`,
    leftPct: i / columnCount * 100,
    fontSize: isMobile ? 14 + Math.random() * 6 : isTablet ? 16 + Math.random() * 8 : 18 + Math.random() * 8,
    animationDuration: 6 + Math.random() * 4,
    // 6-10s para chuva devagar
    animationDelay: i / columnCount * 8,
    characters: generateCharacters(charactersCount)
  };
}
function MatrixBackgroundInner({ variant = "global" }) {
  const [matrixColumns, setMatrixColumns] = _react.useState.call(void 0, []);
  const [isInitialized, setIsInitialized] = _react.useState.call(void 0, false);
  const initializeMatrix = _react.useCallback.call(void 0, () => {
    if (isInitialized || typeof window === "undefined") return;
    const width = window.innerWidth;
    const isMobile = width < MOBILE_BREAKPOINT;
    const isTablet = width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT;
    const columnCount = isMobile ? Math.min(18, Math.max(10, Math.floor(width / 35))) : isTablet ? Math.min(28, Math.max(16, Math.floor(width / 38))) : Math.min(40, Math.max(25, Math.floor(width / 40)));
    const initialColumns = Array.from({ length: columnCount }).map(
      (_, i) => generateColumn(i, columnCount, isMobile, isTablet)
    );
    setMatrixColumns(initialColumns);
    setIsInitialized(true);
  }, [isInitialized]);
  _react.useEffect.call(void 0, () => {
    if (typeof window !== "undefined" && !isInitialized) {
      initializeMatrix();
    }
  }, [isInitialized, initializeMatrix]);
  if (!matrixColumns.length) return null;
  const positionClass = variant === "global" ? "fixed inset-0 -z-10" : "absolute inset-0";
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "style", { children: `
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100%) translateZ(0);
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh) translateZ(0);
            opacity: 0;
          }
        }
        .animate-matrix-fall {
          animation: matrix-fall 8s linear infinite;
          will-change: transform, opacity;
        }
      ` }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "div",
      {
        className: cn(
          "pointer-events-none overflow-hidden select-none",
          positionClass
        ),
        style: {
          perspective: 1200,
          transformStyle: "preserve-3d"
        },
        "aria-hidden": "true",
        children: matrixColumns.map((column, columnIndex) => {
          const depthFactor = columnIndex % 8 - 4;
          const translateZ = depthFactor * 80;
          const scale = 1 + depthFactor * -0.07;
          const skewY = depthFactor * -3;
          return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "div",
            {
              className: cn(
                "absolute top-[-110%] h-[220%]",
                "animate-matrix-fall"
              ),
              style: {
                left: `${column.leftPct}%`,
                fontSize: column.fontSize,
                animationDuration: `${column.animationDuration}s`,
                animationDelay: `${column.animationDelay}s`,
                transform: `translateZ(${translateZ}px) scale(${scale}) skewY(${skewY}deg)`,
                filter: "blur(0.3px)"
                // Leve blur para efeito mais suave
              },
              children: column.characters.map((ch, idx) => {
                const intensity = idx === 0 ? 100 : Math.max(30, 100 - idx * 5);
                const glowIntensity = idx === 0 ? 12 : Math.max(4, 12 - idx * 0.8);
                return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  "span",
                  {
                    className: cn(
                      "block font-mono leading-tight",
                      idx === 0 && "font-bold"
                    ),
                    style: {
                      // Usa token dedicado de efeito para a chuva Matrix
                      color: "var(--effect-matrix-rain-color)",
                      opacity: intensity / 100,
                      textShadow: `
                        0 0 ${glowIntensity}px var(--effect-matrix-rain-color),
                        0 0 ${glowIntensity * 2}px var(--effect-matrix-rain-color),
                        0 0 ${glowIntensity * 3}px var(--effect-matrix-rain-color)
                      `,
                      filter: idx === 0 ? "brightness(1.4)" : "none"
                    },
                    children: ch
                  },
                  `${column.id}-${idx}`
                );
              })
            },
            column.id
          );
        })
      }
    )
  ] });
}
var MatrixBackground = _react.memo.call(void 0, MatrixBackgroundInner);

// src/components/utilities/back-to-top/BackToTop.tsx



// src/lib/utils/scroll.ts
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function smoothScrollTo(target, options) {
  const element = typeof target === "string" ? document.querySelector(target) : target;
  if (!element) {
    return;
  }
  const shouldAnimate = !prefersReducedMotion();
  element.scrollIntoView({
    behavior: shouldAnimate ? "smooth" : "auto",
    block: "start",
    inline: "nearest",
    ...options
  });
}
function scrollToTop() {
  const shouldAnimate = !prefersReducedMotion();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: shouldAnimate ? "smooth" : "auto"
  });
}
function scrollToPosition(top, left = 0) {
  const shouldAnimate = !prefersReducedMotion();
  window.scrollTo({
    top,
    left,
    behavior: shouldAnimate ? "smooth" : "auto"
  });
}
function onReducedMotionChange(callback) {
  if (typeof window === "undefined") {
    return () => {
    };
  }
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const handler = (event) => {
    callback(event.matches);
  };
  handler(mediaQuery);
  if (mediaQuery.addEventListener && typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", handler);
    return () => {
      if (mediaQuery.removeEventListener && typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handler);
      }
    };
  }
  if (mediaQuery.addListener && typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(handler);
    return () => {
      if (mediaQuery.removeListener && typeof mediaQuery.removeListener === "function") {
        mediaQuery.removeListener(handler);
      }
    };
  }
  return () => {
  };
}

// src/hooks/use-smooth-scroll.ts

function useSmoothScroll() {
  const [reducedMotion, setReducedMotion] = _react.useState.call(void 0, false);
  _react.useEffect.call(void 0, () => {
    setReducedMotion(prefersReducedMotion());
    const cleanup = onReducedMotionChange((matches) => {
      setReducedMotion(matches);
    });
    return cleanup;
  }, []);
  const scrollTo = _react.useCallback.call(void 0, 
    (target, options) => {
      smoothScrollTo(target, options);
    },
    []
  );
  const toTop = _react.useCallback.call(void 0, () => {
    scrollToTop();
  }, []);
  const toPosition = _react.useCallback.call(void 0, (top, left) => {
    scrollToPosition(top, left);
  }, []);
  return {
    scrollTo,
    scrollToTop: toTop,
    scrollToPosition: toPosition,
    reducedMotion,
    shouldAnimate: !reducedMotion
  };
}

// src/components/utilities/back-to-top/BackToTop.tsx

var SCROLL_THRESHOLD_PX = 300;
function BackToTopButton() {
  const [isButtonVisible, setIsButtonVisible] = _react.useState.call(void 0, false);
  const { scrollToTop: scrollToTop3, reducedMotion } = useSmoothScroll();
  _react.useEffect.call(void 0, () => {
    const handleScrollEvent = () => {
      setIsButtonVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);
  if (!isButtonVisible) {
    return null;
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    Button,
    {
      onClick: scrollToTop3,
      className: "fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg",
      "aria-label": reducedMotion ? "Ir para o topo da p\xE1gina" : "Rolar suavemente para o topo da p\xE1gina",
      title: "Voltar ao topo",
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ArrowUp, { className: "h-5 w-5", "aria-hidden": "true" })
    }
  );
}
function BackToTop() {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, BackToTopButton, {});
}

// src/components/utilities/cookie-banner/CookieBanner.tsx

var _link = require('next/link'); var _link2 = _interopRequireDefault(_link);


// src/lib/cookies/cookie-manager.ts
var COOKIE_CONSENT_KEY = "cookie-consent";
var COOKIE_PREFERENCES_KEY = "cookie-preferences";
var COOKIE_VERSION = "1.0.0";
var _CookieManager = class _CookieManager {
  constructor() {
  }
  static getInstance() {
    if (!_CookieManager.instance) {
      _CookieManager.instance = new _CookieManager();
    }
    return _CookieManager.instance;
  }
  hasConsent() {
    if (typeof window === "undefined") return false;
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) return false;
      const consentData = JSON.parse(consent);
      return consentData.consented === true;
    } catch (e3) {
      return false;
    }
  }
  getPreferences() {
    if (typeof window === "undefined") return null;
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) return null;
      const consentData = JSON.parse(consent);
      return consentData.preferences || null;
    } catch (e4) {
      return null;
    }
  }
  saveConsent(preferences) {
    if (typeof window === "undefined") return;
    try {
      const consent = {
        version: COOKIE_VERSION,
        consented: true,
        timestamp: Date.now(),
        preferences
      };
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
      window.dispatchEvent(
        new CustomEvent("cookie-consent-updated", { detail: preferences })
      );
      this.loadScripts(preferences);
    } catch (e5) {
    }
  }
  updatePreferences(preferences) {
    this.saveConsent(preferences);
  }
  revokeConsent() {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      localStorage.removeItem(COOKIE_PREFERENCES_KEY);
      this.clearAnalyticsCookies();
      window.dispatchEvent(
        new CustomEvent("cookie-consent-revoked", { detail: null })
      );
    } catch (e6) {
    }
  }
  isAllowed(type) {
    const preferences = this.getPreferences();
    if (!preferences) return false;
    if (type === "essential") {
      return preferences.essential === true;
    }
    return preferences[type] === true;
  }
  loadScripts(preferences) {
    if (preferences.analytics) {
      this.loadGoogleAnalytics();
    } else {
      this.unloadGoogleAnalytics();
    }
  }
  loadGoogleAnalytics() {
  }
  unloadGoogleAnalytics() {
    const scripts = document.querySelectorAll(
      'script[src*="googletagmanager.com"], script[src*="google-analytics.com"]'
    );
    scripts.forEach((script) => script.remove());
    this.clearAnalyticsCookies();
    if (window.dataLayer) {
      window.dataLayer = [];
    }
    if (window.gtag) {
      delete window.gtag;
    }
  }
  clearAnalyticsCookies() {
    if (typeof document === "undefined") return;
    const analyticsCookies = [
      "_ga",
      "_ga_*",
      "_gid",
      "_gat",
      "_gat_gtag_*",
      "__utma",
      "__utmt",
      "__utmb",
      "__utmc",
      "__utmz",
      "__utmv"
    ];
    analyticsCookies.forEach((cookieName) => {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      if (cookieName.includes("*")) {
        const baseName = cookieName.replace("*", "");
        const cookies = document.cookie.split(";");
        cookies.forEach((cookie) => {
          const parts = cookie.split("=");
          if (parts.length === 0) return;
          const name = _optionalChain([parts, 'access', _67 => _67[0], 'optionalAccess', _68 => _68.trim, 'call', _69 => _69()]);
          if (!name || !name.startsWith(baseName)) return;
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
        });
      }
    });
  }
};
__publicField(_CookieManager, "instance");
var CookieManager = _CookieManager;
function getCookieManager() {
  return CookieManager.getInstance();
}

// src/components/utilities/cookie-banner/CookieBanner.tsx

function CookieBanner() {
  const [showBanner, setShowBanner] = _react.useState.call(void 0, false);
  const [canShowBanner, setCanShowBanner] = _react.useState.call(void 0, false);
  const [showCustomize, setShowCustomize] = _react.useState.call(void 0, false);
  const [preferences, setPreferences] = _react.useState.call(void 0, {
    essential: true,
    // Sempre true, não pode ser desabilitado
    performance: true,
    functionality: true,
    analytics: true
  });
  const cookieManager = getCookieManager();
  _react.useEffect.call(void 0, () => {
    if (typeof window === "undefined") return;
    if (!cookieManager.hasConsent()) {
      setCanShowBanner(true);
      const savedPreferences = cookieManager.getPreferences();
      if (savedPreferences) {
        setPreferences(savedPreferences);
      }
    } else {
      const savedPreferences = cookieManager.getPreferences();
      if (savedPreferences) {
        setPreferences(savedPreferences);
      }
    }
  }, [cookieManager]);
  const hasShownBannerRef = _react.useRef.call(void 0, false);
  const scrollThresholdRef = _react.useRef.call(void 0, 0);
  const scrollTimeoutRef = _react.useRef.call(void 0, null);
  const mouseTimeoutRef = _react.useRef.call(void 0, null);
  _react.useEffect.call(void 0, () => {
    if (typeof window === "undefined" || !canShowBanner || hasShownBannerRef.current)
      return;
    const heroHeight = window.innerHeight;
    scrollThresholdRef.current = heroHeight * 0.3;
    const checkCanShow = () => {
      if (hasShownBannerRef.current) return;
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > scrollThresholdRef.current) {
        hasShownBannerRef.current = true;
        setShowBanner(true);
      }
    };
    const handleScroll = () => {
      checkCanShow();
    };
    const handleMouseMove = (e) => {
      if (hasShownBannerRef.current) return;
      const scrollY = window.scrollY || window.pageYOffset;
      const mouseY = e.clientY + scrollY;
      if (mouseY > heroHeight + 150) {
        hasShownBannerRef.current = true;
        setShowBanner(true);
      }
    };
    checkCanShow();
    const throttledScroll = () => {
      if (scrollTimeoutRef.current) return;
      scrollTimeoutRef.current = setTimeout(() => {
        handleScroll();
        scrollTimeoutRef.current = null;
      }, 100);
    };
    const throttledMouseMove = (e) => {
      if (mouseTimeoutRef.current) return;
      mouseTimeoutRef.current = setTimeout(() => {
        handleMouseMove(e);
        mouseTimeoutRef.current = null;
      }, 200);
    };
    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("mousemove", throttledMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("mousemove", throttledMouseMove);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
        mouseTimeoutRef.current = null;
      }
    };
  }, [canShowBanner]);
  const saveConsent = (prefs) => {
    cookieManager.saveConsent(prefs);
    setShowBanner(false);
    setShowCustomize(false);
  };
  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      performance: true,
      functionality: true,
      analytics: true
    });
  };
  const handleRejectOptional = () => {
    saveConsent({
      essential: true,
      performance: false,
      functionality: false,
      analytics: false
    });
  };
  const handleSavePreferences = () => {
    saveConsent(preferences);
  };
  const togglePreference = (key) => {
    if (key === "essential") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  if (!showBanner) return null;
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      className: cn(
        "fixed bottom-0 left-0 right-0 p-4 sm:p-6",
        "animate-in slide-in-from-bottom-5 duration-300",
        "z-50"
      ),
      role: "dialog",
      "aria-labelledby": "cookie-banner-title",
      "aria-describedby": "cookie-banner-description",
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        Card,
        {
          className: cn(
            "mx-auto max-w-4xl shadow-2xl",
            "dark:bg-black/95 dark:border-cyan-400/20",
            "bg-background/95 backdrop-blur-xl",
            "border-2"
          ),
          children: !showCustomize ? (
            // Vista inicial do banner
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardHeader, { className: "pb-4", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-start gap-4 flex-1", children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    "div",
                    {
                      className: cn(
                        "p-3 rounded-lg",
                        "bg-primary/10 dark:bg-cyan-400/10",
                        "border border-primary/20 dark:border-cyan-400/20"
                      ),
                      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Cookie, { className: "h-6 w-6 text-primary dark:text-cyan-400" })
                    }
                  ),
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-1 space-y-2", children: [
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      CardTitle,
                      {
                        id: "cookie-banner-title",
                        className: cn(
                          "text-lg",
                          "font-bold",
                          "dark:text-cyan-200"
                        ),
                        children: "Utilizamos Cookies"
                      }
                    ),
                    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                      CardDescription,
                      {
                        id: "cookie-banner-description",
                        className: cn("text-sm", "text-muted-foreground"),
                        children: [
                          "Utilizamos cookies para melhorar sua experi\xEAncia de navega\xE7\xE3o, analisar o tr\xE1fego do site e personalizar conte\xFAdo. Ao continuar navegando, voc\xEA concorda com nossa utiliza\xE7\xE3o de cookies.",
                          " ",
                          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                            _link2.default,
                            {
                              href: "/cookies",
                              className: "text-primary hover:underline dark:text-cyan-400 font-semibold",
                              children: "Saiba mais"
                            }
                          )
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 shrink-0",
                    onClick: () => setShowBanner(false),
                    "aria-label": "Fechar banner de cookies",
                    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.X, { className: "h-4 w-4" })
                  }
                )
              ] }) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Separator2, {}),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardContent, { className: "pt-6", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex flex-col sm:flex-row gap-3 sm:justify-end", children: [
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                  Button,
                  {
                    variant: "outline",
                    onClick: () => setShowCustomize(true),
                    className: "w-full sm:w-auto",
                    children: [
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Settings, { className: "h-4 w-4 mr-2" }),
                      "Personalizar"
                    ]
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                  Button,
                  {
                    variant: "outline",
                    onClick: handleRejectOptional,
                    className: "w-full sm:w-auto",
                    children: [
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.XCircle, { className: "h-4 w-4 mr-2" }),
                      "Rejeitar Opcionais"
                    ]
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                  Button,
                  {
                    onClick: handleAcceptAll,
                    className: cn(
                      "w-full sm:w-auto",
                      "bg-primary hover:bg-primary/90",
                      "dark:bg-cyan-500 dark:hover:bg-cyan-600"
                    ),
                    children: [
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Check, { className: "h-4 w-4 mr-2" }),
                      "Aceitar Todos"
                    ]
                  }
                )
              ] }) })
            ] })
          ) : (
            // Vista de personalização
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardHeader, { className: "pb-4", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-start gap-4 flex-1", children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    "div",
                    {
                      className: cn(
                        "p-3 rounded-lg",
                        "bg-primary/10 dark:bg-cyan-400/10",
                        "border border-primary/20 dark:border-cyan-400/20"
                      ),
                      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Settings, { className: "h-6 w-6 text-primary dark:text-cyan-400" })
                    }
                  ),
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-1 space-y-2", children: [
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      CardTitle,
                      {
                        className: cn(
                          "text-lg",
                          "font-bold",
                          "dark:text-cyan-200"
                        ),
                        children: "Personalizar Cookies"
                      }
                    ),
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardDescription, { className: cn("text-sm"), children: "Escolha quais tipos de cookies voc\xEA deseja permitir. Os cookies essenciais s\xE3o necess\xE1rios para o funcionamento do site." })
                  ] })
                ] }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 shrink-0",
                    onClick: () => setShowCustomize(false),
                    "aria-label": "Voltar",
                    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.X, { className: "h-4 w-4" })
                  }
                )
              ] }) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Separator2, {}),
              /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, CardContent, { className: "pt-6 space-y-6", children: [
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg bg-muted/50", children: [
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                        Label,
                        {
                          htmlFor: "essential",
                          className: cn(
                            "text-base",
                            "font-semibold",
                            "cursor-not-allowed"
                          ),
                          children: "Cookies Essenciais"
                        }
                      ),
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                        "span",
                        {
                          className: cn(
                            "px-2 py-0.5 rounded text-xs",
                            "bg-primary text-primary-foreground",
                            "font-semibold"
                          ),
                          children: "Obrigat\xF3rio"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: cn("text-sm", "text-muted-foreground"), children: "Necess\xE1rios para o funcionamento b\xE1sico do site. N\xE3o podem ser desativados." })
                  ] }),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    Switch,
                    {
                      id: "essential",
                      checked: preferences.essential,
                      disabled: true,
                      "aria-label": "Cookies essenciais (obrigat\xF3rio)"
                    }
                  )
                ] }),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      Label,
                      {
                        htmlFor: "performance",
                        className: cn(
                          "text-base",
                          "font-semibold",
                          "cursor-pointer"
                        ),
                        children: "Cookies de Performance"
                      }
                    ),
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: cn("text-sm", "text-muted-foreground"), children: "Nos ajudam a entender como voc\xEA utiliza o site para melhorarmos a performance." })
                  ] }),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    Switch,
                    {
                      id: "performance",
                      checked: preferences.performance,
                      onCheckedChange: () => togglePreference("performance"),
                      "aria-label": "Cookies de performance"
                    }
                  )
                ] }),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      Label,
                      {
                        htmlFor: "functionality",
                        className: cn(
                          "text-base",
                          "font-semibold",
                          "cursor-pointer"
                        ),
                        children: "Cookies de Funcionalidade"
                      }
                    ),
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: cn("text-sm", "text-muted-foreground"), children: "Permitem que o site se lembre de suas prefer\xEAncias e ofere\xE7a funcionalidades aprimoradas." })
                  ] }),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    Switch,
                    {
                      id: "functionality",
                      checked: preferences.functionality,
                      onCheckedChange: () => togglePreference("functionality"),
                      "aria-label": "Cookies de funcionalidade"
                    }
                  )
                ] }),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      Label,
                      {
                        htmlFor: "analytics",
                        className: cn(
                          "text-base",
                          "font-semibold",
                          "cursor-pointer"
                        ),
                        children: "Cookies de Analytics"
                      }
                    ),
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: cn("text-sm", "text-muted-foreground"), children: "Coletam informa\xE7\xF5es sobre como voc\xEA utiliza o site para an\xE1lise e melhorias." })
                  ] }),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    Switch,
                    {
                      id: "analytics",
                      checked: preferences.analytics,
                      onCheckedChange: () => togglePreference("analytics"),
                      "aria-label": "Cookies de analytics"
                    }
                  )
                ] }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "pt-2", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "p", { className: cn("text-xs", "text-muted-foreground"), children: [
                  "Para mais informa\xE7\xF5es, consulte nossa",
                  " ",
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    _link2.default,
                    {
                      href: "/cookies",
                      className: "text-primary hover:underline dark:text-cyan-400 font-semibold",
                      children: "Pol\xEDtica de Cookies"
                    }
                  ),
                  " ",
                  "e nossa",
                  " ",
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    _link2.default,
                    {
                      href: "/privacidade",
                      className: "text-primary hover:underline dark:text-cyan-400 font-semibold",
                      children: "Pol\xEDtica de Privacidade"
                    }
                  ),
                  "."
                ] }) }),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex flex-col sm:flex-row gap-3 pt-4", children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    Button,
                    {
                      variant: "outline",
                      onClick: () => setShowCustomize(false),
                      className: "w-full sm:w-auto",
                      children: "Cancelar"
                    }
                  ),
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                    Button,
                    {
                      onClick: handleSavePreferences,
                      className: cn(
                        "w-full sm:w-auto",
                        "bg-primary hover:bg-primary/90",
                        "dark:bg-cyan-500 dark:hover:bg-cyan-600"
                      ),
                      children: [
                        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Check, { className: "h-4 w-4 mr-2" }),
                        "Salvar Prefer\xEAncias"
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          )
        }
      )
    }
  );
}
function useCookieConsent() {
  const cookieManager = getCookieManager();
  const [preferences, setPreferences] = _react.useState.call(void 0, 
    cookieManager.getPreferences()
  );
  _react.useEffect.call(void 0, () => {
    if (typeof window === "undefined") return;
    setPreferences(cookieManager.getPreferences());
    const handleConsentUpdate = (event) => {
      setPreferences(event.detail);
    };
    window.addEventListener(
      "cookie-consent-updated",
      handleConsentUpdate
    );
    return () => {
      window.removeEventListener(
        "cookie-consent-updated",
        handleConsentUpdate
      );
    };
  }, [cookieManager]);
  return preferences;
}

// src/hooks/use-pwa.ts

function usePWA() {
  const [deferredPrompt, setDeferredPrompt] = _react.useState.call(void 0, null);
  const [isInstallable, setIsInstallable] = _react.useState.call(void 0, false);
  const [isInstalled, setIsInstalled] = _react.useState.call(void 0, false);
  const [isStandalone, setIsStandalone] = _react.useState.call(void 0, false);
  const [updateAvailable, setUpdateAvailable] = _react.useState.call(void 0, false);
  const [swRegistration, setSwRegistration] = _react.useState.call(void 0, null);
  _react.useEffect.call(void 0, () => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    navigator.serviceWorker.register("/sw.js").then((registration) => {
      setSwRegistration(registration);
      setInterval(() => {
        registration.update();
      }, 60 * 60 * 1e3);
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              setUpdateAvailable(true);
            }
          });
        }
      });
    }).catch(() => {
    });
  }, []);
  _react.useEffect.call(void 0, () => {
    if (typeof window === "undefined") return;
    const isStandaloneiOS = window.navigator.standalone === true;
    const isStandaloneAndroid = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    const isStandaloneBrowser = window.matchMedia(
      "(display-mode: minimal-ui)"
    ).matches;
    const standalone = isStandaloneiOS || isStandaloneAndroid || isStandaloneBrowser;
    setIsStandalone(standalone);
    setIsInstalled(standalone);
  }, []);
  _react.useEffect.call(void 0, () => {
    if (typeof window === "undefined") return;
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);
  const promptInstall = _react.useCallback.call(void 0, async () => {
    if (!deferredPrompt) {
      return;
    }
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setIsInstallable(false);
  }, [deferredPrompt]);
  const updateServiceWorker = _react.useCallback.call(void 0, () => {
    if (!swRegistration || !swRegistration.waiting) {
      return;
    }
    swRegistration.waiting.postMessage({ type: "SKIP_WAITING" });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  }, [swRegistration]);
  return {
    isInstallable,
    isInstalled,
    isStandalone,
    updateAvailable,
    promptInstall,
    updateServiceWorker
  };
}

// src/components/utilities/install-prompt/InstallPrompt.tsx




function InstallPrompt() {
  const { resolvedTheme } = _nextthemes.useTheme.call(void 0, );
  const [mounted, setMounted] = _react.useState.call(void 0, false);
  const { isInstallable, isStandalone, promptInstall } = usePWA();
  const [showPrompt, setShowPrompt] = _react.useState.call(void 0, false);
  _react.useEffect.call(void 0, () => {
    setMounted(true);
  }, []);
  _react.useEffect.call(void 0, () => {
    if (typeof window === "undefined") return;
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    if (isInstallable && !isStandalone && !dismissed) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3e3);
      return () => clearTimeout(timer);
    }
    return void 0;
  }, [isInstallable, isStandalone]);
  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-install-dismissed", "true");
  };
  const handleInstall = async () => {
    await promptInstall();
    setShowPrompt(false);
  };
  const isDark = mounted ? resolvedTheme === "dark" : false;
  if (!showPrompt) return null;
  return (
    /**
     * Container fixo no rodapé
     *
     * - fixed bottom-0: fixado na parte inferior
     * - left-0 right-0: largura total
     * - z-50: acima de outros elementos
     * - Animação de slide up
     */
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "div",
      {
        className: cn(
          "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none",
          "animate-in slide-in-from-bottom-5 fade-in duration-300"
        ),
        children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Card,
          {
            className: cn(
              "max-w-2xl mx-auto pointer-events-auto backdrop-blur-xl border-2 shadow-2xl",
              isDark ? cn("bg-background/90", "border-primary-base/50", "shadow-glow-cyan") : cn("bg-background/90", "border-primary-base/50", "shadow-lg")
            ),
            children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "p-4 sm:p-6", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                "div",
                {
                  className: cn(
                    "shrink-0 p-3 rounded-full border",
                    "bg-primary-background",
                    "border-primary-base/30"
                  ),
                  children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Download, { className: cn("h-6 w-6", "text-primary-base") })
                }
              ),
              /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-1 space-y-3", children: [
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    "h3",
                    {
                      className: cn(
                        "text-lg font-bold font-mono",
                        "text-foreground"
                      ),
                      children: "\u{1F4F1} Instalar no seu Dispositivo"
                    }
                  ),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    "button",
                    {
                      onClick: handleDismiss,
                      className: cn(
                        "transition-colors p-1 rounded",
                        "text-muted-foreground hover:text-foreground hover:bg-muted"
                      ),
                      "aria-label": "Fechar",
                      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.X, { className: "h-5 w-5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  "p",
                  {
                    className: cn(
                      "text-sm",
                      "text-muted-foreground"
                    ),
                    children: "Instale como app nativo para acesso r\xE1pido sem navegador e funcionalidade offline completa."
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                    Button,
                    {
                      onClick: handleInstall,
                      size: "sm",
                      className: cn(
                        "font-mono font-bold",
                        "bg-primary text-primary-foreground hover:bg-primary-hover"
                      ),
                      children: [
                        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Download, { className: "h-4 w-4 mr-2" }),
                        "Instalar Agora"
                      ]
                    }
                  ),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    Button,
                    {
                      onClick: handleDismiss,
                      variant: "ghost",
                      size: "sm",
                      className: cn(
                        "text-muted-foreground hover:text-foreground hover:bg-muted"
                      ),
                      children: "Talvez Depois"
                    }
                  )
                ] })
              ] })
            ] }) })
          }
        )
      }
    )
  );
}

// src/components/utilities/loading-screen/LoadingScreen.tsx

var _reactloadingindicators = require('react-loading-indicators');



var tokensCache = null;
(async () => {
  try {
    const module = await Promise.resolve().then(() => _interopRequireWildcard(require("@rainersoft/design-tokens")));
    tokensCache = module.tokens || module.default || {};
  } catch (error) {
    console.warn("Design tokens n\xE3o dispon\xEDveis no loading-screen:", error);
    tokensCache = {};
  }
})();
var SPINNER_SIZES = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12"
};
function getTokenColor2(theme, color, shade, fallback) {
  try {
    if (!_optionalChain([tokensCache, 'optionalAccess', _70 => _70.colors, 'optionalAccess', _71 => _71[theme], 'optionalAccess', _72 => _72.primitive])) {
      return fallback;
    }
    const colorObj = tokensCache.colors[theme].primitive[color];
    if (!colorObj || typeof colorObj !== "object") {
      return fallback;
    }
    const colorValue = colorObj[shade];
    return typeof colorValue === "string" ? colorValue : fallback;
  } catch (e7) {
    return fallback;
  }
}
function LoadingSpinner({
  size = "md",
  className = "",
  label = "Carregando..."
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _lucidereact.Loader2,
    {
      className: `${SPINNER_SIZES[size]} animate-spin text-primary ${className}`,
      "aria-label": label,
      role: "status"
    }
  );
}
function FullPageLoader({
  message = "Carregando..."
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      className: "min-h-screen w-full flex flex-col items-center justify-center bg-background",
      role: "status",
      "aria-label": message,
      children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "text-center space-y-6", children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "relative", "aria-hidden": "true", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "div",
            {
              className: "absolute inset-0 w-20 h-20 border-4 border-pink-400 border-b-transparent rounded-full animate-spin mx-auto",
              style: { animationDirection: "reverse" }
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "text-cyan-600 dark:text-cyan-300 font-mono text-sm tracking-wider animate-pulse", children: message.toUpperCase() })
      ] })
    }
  );
}
function InlineLoader({
  message = "Carregando...",
  size = "md"
}) {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      className: "flex flex-col items-center justify-center py-12 space-y-4",
      role: "status",
      "aria-label": message,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, LoadingSpinner, { size }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "text-sm text-muted-foreground dark:text-gray-400", children: message })
      ]
    }
  );
}
function SkeletonGrid({
  count = 4,
  columns = 2,
  className = ""
}) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: `grid ${gridCols[columns]} gap-6 ${className}`, children: Array.from({ length: count }).map((_, index) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "space-y-4", children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Skeleton, { className: "h-48 w-full rounded-lg" }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Skeleton, { className: "h-6 w-3/4" }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Skeleton, { className: "h-4 w-full" }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Skeleton, { className: "h-4 w-2/3" })
  ] }, index)) });
}
function EmptyState({
  icon: Icon2 = _lucidereact.Loader2,
  title = "Nenhum item encontrado",
  description = "N\xE3o h\xE1 itens para exibir no momento.",
  action
}) {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "text-center py-12 px-4", children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-cyan-500/10 to-purple-500/10 dark:from-cyan-400/10 dark:to-purple-400/10 border border-cyan-400/30 mb-6", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      Icon2,
      {
        className: "w-8 h-8 sm:w-10 sm:h-10 text-cyan-600 dark:text-cyan-400",
        "aria-hidden": "true"
      }
    ) }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h3", { className: "text-xl sm:text-2xl font-bold mb-2 text-foreground dark:text-cyan-200", children: title }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "text-sm sm:text-base text-muted-foreground dark:text-gray-400 mb-6 max-w-md mx-auto", children: description }),
    action && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "flex justify-center", children: action })
  ] });
}
function LoadingScreen({ progress, currentStep }) {
  const [displayedProgress, setDisplayedProgress] = _react.useState.call(void 0, 0);
  const [stars, setStars] = _react.useState.call(void 0, []);
  const [mounted, setMounted] = _react.useState.call(void 0, false);
  const { theme, systemTheme } = _nextthemes.useTheme.call(void 0, );
  _react.useEffect.call(void 0, () => {
    setMounted(true);
  }, []);
  const currentTheme = mounted ? theme === "system" ? systemTheme : theme : "light";
  const isDark = currentTheme === "dark";
  const primaryColor = isDark ? getTokenColor2("dark", "cyan", 400, "#22d3ee") : getTokenColor2("light", "cyan", 600, "#0891b2");
  const secondaryColor = isDark ? getTokenColor2("dark", "purple", 400, "#a855f7") : getTokenColor2("light", "purple", 600, "#9333ea");
  const accentColor = isDark ? getTokenColor2("dark", "pink", 400, "#f472b6") : getTokenColor2("light", "pink", 600, "#db2777");
  const primaryRGB = hexToRGB(primaryColor);
  const secondaryRGB = hexToRGB(secondaryColor);
  _react.useEffect.call(void 0, () => {
    const starsCount = 100;
    const newStars = Array.from({ length: starsCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 3,
      opacity: 0.6 + Math.random() * 0.4
    }));
    setStars(newStars);
  }, []);
  _react.useEffect.call(void 0, () => {
    if (progress === void 0) {
      setDisplayedProgress(0);
      return;
    }
    const targetProgress = Math.min(100, Math.max(0, progress));
    const step = (targetProgress - displayedProgress) / 10;
    const interval = setInterval(() => {
      setDisplayedProgress((prev) => {
        const next = prev + step;
        if (Math.abs(next - targetProgress) < 0.5) {
          return targetProgress;
        }
        return next;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [progress, displayedProgress]);
  const currentMessage = currentStep || "Inicializando sistemas...";
  const progressValue = progress !== void 0 ? displayedProgress : void 0;
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      className: cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center",
        "bg-background backdrop-blur-sm",
        "transition-opacity duration-500"
      ),
      role: "status",
      "aria-label": "Carregando aplica\xE7\xE3o",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "absolute inset-0 overflow-hidden", "aria-hidden": "true", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "absolute inset-0", children: stars.map((star) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "div",
            {
              className: "absolute rounded-full bg-white",
              style: {
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
                animation: "starTwinkle 3s ease-in-out infinite",
                animationDelay: `${star.delay}s`
              }
            },
            star.id
          )) }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "div",
            {
              className: "absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20",
              style: {
                background: `radial-gradient(circle, rgba(${primaryRGB}, 0.3), transparent)`
              }
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "div",
            {
              className: "absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20",
              style: {
                background: `radial-gradient(circle, rgba(${secondaryRGB}, 0.3), transparent)`,
                animationDelay: "1s"
              }
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "relative z-10 flex flex-col items-center justify-center space-y-8 px-4", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "div",
            {
              className: "relative flex items-center justify-center",
              "aria-hidden": "true",
              suppressHydrationWarning: true,
              children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                _reactloadingindicators.Atom,
                {
                  color: [primaryColor, secondaryColor, accentColor, primaryColor],
                  size: "large",
                  text: "",
                  textColor: "",
                  speedPlus: 1
                }
              )
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "text-center space-y-4", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              "p",
              {
                className: cn(
                  "text-lg sm:text-xl font-mono font-semibold",
                  "tracking-wider animate-pulse"
                ),
                style: { color: primaryColor },
                "aria-live": "polite",
                children: currentMessage
              }
            ),
            progressValue !== void 0 && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "w-64 sm:w-80 space-y-2", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                "div",
                {
                  className: "h-1 bg-muted rounded-full overflow-hidden border",
                  style: {
                    borderColor: `${primaryColor}33`
                  },
                  children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    "div",
                    {
                      className: "h-full transition-all duration-300 ease-out",
                      style: {
                        width: `${progressValue}%`,
                        background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
                        boxShadow: `0 0 10px ${primaryColor}`
                      },
                      "aria-valuenow": progressValue,
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      role: "progressbar"
                    }
                  )
                }
              ),
              /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                "p",
                {
                  className: "text-xs font-mono text-right",
                  style: { color: `${primaryColor}B3` },
                  "aria-hidden": "true",
                  children: [
                    Math.round(progressValue),
                    "%"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            "div",
            {
              className: "absolute inset-0 overflow-hidden pointer-events-none opacity-20",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  "div",
                  {
                    className: "absolute top-0 left-1/4 font-mono text-xs animate-pulse",
                    style: { color: `${primaryColor}4D` },
                    children: "01001001"
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  "div",
                  {
                    className: "absolute top-1/4 left-3/4 font-mono text-xs animate-pulse",
                    style: {
                      color: `${secondaryColor}4D`,
                      animationDelay: "0.5s"
                    },
                    children: "11001100"
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  "div",
                  {
                    className: "absolute bottom-1/4 left-1/2 font-mono text-xs animate-pulse",
                    style: {
                      color: `${primaryColor}4D`,
                      animationDelay: "1s"
                    },
                    children: "10101010"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "style", { children: `
        @keyframes starTwinkle {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

      ` })
      ]
    }
  );
}

// src/components/utilities/page-header/PageHeader.tsx

function PageHeader({ title, description, children }) {
  return (
    /**
     * Container principal do header
     *
     * Utiliza SECTION_CLASSES.container para padding e layout responsivos
     * - relative z-10: fica acima de backgrounds e partículas
     */
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: `${SECTION_CLASSES.container} relative z-10`, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "text-center mb-12", children: [
      children && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "relative mb-8", children }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h1", { className: "text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-cyan-200 dark:font-mono dark:tracking-wider", children: title }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "w-24 h-1 bg-linear-to-r from-primary to-primary dark:from-cyan-400 dark:to-purple-400 mx-auto mb-6" }),
      description && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "text-muted-foreground dark:text-gray-300 text-lg max-w-2xl mx-auto dark:font-mono px-2", children: description })
    ] }) })
  );
}

// src/components/utilities/update-notification/UpdateNotification.tsx




function UpdateNotification() {
  const { resolvedTheme } = _nextthemes.useTheme.call(void 0, );
  const [mounted, setMounted] = _react.useState.call(void 0, false);
  const { updateAvailable, updateServiceWorker } = usePWA();
  _react.useEffect.call(void 0, () => {
    setMounted(true);
  }, []);
  const isDark = mounted ? resolvedTheme === "dark" : false;
  if (!updateAvailable) return null;
  return (
    /**
     * Container fixo no topo
     *
     * - fixed top-20: abaixo da navbar
     * - right-4: margem da direita
     * - z-50: acima de outros elementos
     * - Animação de slide down
     */
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "div",
      {
        className: cn(
          "fixed top-20 right-4 z-50 max-w-sm",
          "animate-in slide-in-from-top-5 fade-in duration-300"
        ),
        children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Card,
          {
            className: cn(
              "backdrop-blur-xl border-2 shadow-2xl",
              isDark ? cn("bg-background/90", "border-secondary-base/50", "shadow-glow-purple") : cn("bg-background/90", "border-secondary-base/50", "shadow-lg")
            ),
            children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "p-4", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                "div",
                {
                  className: cn(
                    "shrink-0 p-2 rounded-full border",
                    "bg-secondary-background",
                    isDark ? "border-secondary-base/30" : "border-secondary-base/30"
                  ),
                  children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    _lucidereact.RefreshCw,
                    {
                      className: cn(
                        "h-5 w-5 animate-spin text-secondary-base",
                        "[animation-duration:3s]"
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-1 space-y-2", children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  "h4",
                  {
                    className: cn(
                      "text-sm font-bold font-mono",
                      "text-foreground"
                    ),
                    children: "Nova Vers\xE3o Dispon\xEDvel"
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  "p",
                  {
                    className: cn(
                      "text-xs",
                      "text-muted-foreground"
                    ),
                    children: "Atualize para obter as \xFAltimas melhorias e corre\xE7\xF5es."
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                  Button,
                  {
                    onClick: updateServiceWorker,
                    size: "sm",
                    className: cn(
                      "w-full font-mono font-bold",
                      "bg-secondary text-secondary-foreground hover:bg-secondary-hover"
                    ),
                    children: [
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.RefreshCw, { className: "h-3 w-3 mr-2" }),
                      "Atualizar Agora"
                    ]
                  }
                )
              ] })
            ] }) })
          }
        )
      }
    )
  );
}

// src/components/utilities/visually-hidden/VisuallyHidden.tsx


var VisuallyHidden = React29.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "span",
  {
    ref,
    className: cn(
      "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
      "[clip:rect(0,0,0,0)]",
      className
    ),
    ...props
  }
));
VisuallyHidden.displayName = "VisuallyHidden";

// src/components/utilities/theme-toggle/ThemeToggle.tsx



// src/hooks/use-theme.ts


function useTheme6() {
  const { theme, resolvedTheme, setTheme } = _nextthemes.useTheme.call(void 0, );
  const toggle = React30.useCallback(() => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  }, [theme, resolvedTheme, setTheme]);
  const setLight = React30.useCallback(() => {
    setTheme("light");
  }, [setTheme]);
  const setDark = React30.useCallback(() => {
    setTheme("dark");
  }, [setTheme]);
  const setSystem = React30.useCallback(() => {
    setTheme("system");
  }, [setTheme]);
  return {
    theme,
    resolvedTheme,
    setTheme,
    toggle,
    setLight,
    setDark,
    setSystem,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
    isSystem: theme === "system"
  };
}

// src/components/utilities/theme-toggle/ThemeToggle.tsx

function ThemeToggle({ className }) {
  const { toggle, isDark } = useTheme6();
  const [mounted, setMounted] = React31.useState(false);
  React31.useEffect(() => {
    setMounted(true);
  }, []);
  const handleToggle = () => {
    toggle();
  };
  if (!mounted) {
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      "button",
      {
        className: cn(
          // Layout base
          "inline-flex items-center justify-center rounded-md",
          "text-sm font-medium transition-colors duration-200",
          "h-9 w-9 relative",
          // Estados interativos
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          // Cores do tema - usando design tokens
          "bg-surface border border-border shadow-sm",
          "hover:bg-surface-hover",
          // Dark mode
          "dark:bg-surface-dark dark:border-border-dark",
          "dark:hover:bg-surface-hover-dark",
          className
        ),
        "aria-label": "Alternar tema",
        disabled: true,
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "h-[1.2rem] w-[1.2rem]" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "sr-only", children: "Alternar tema" })
        ]
      }
    );
  }
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "button",
    {
      onClick: handleToggle,
      className: cn(
        // Layout base
        "inline-flex items-center justify-center rounded-md",
        "text-sm font-medium transition-colors duration-200",
        "h-9 w-9 relative",
        // Estados interativos
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        // Cores do tema - usando design tokens
        "bg-surface border border-border shadow-sm",
        "hover:bg-surface-hover",
        // Dark mode
        "dark:bg-surface-dark dark:border-border-dark",
        "dark:hover:bg-surface-hover-dark",
        className
      ),
      "aria-label": isDark ? "Mudar para tema claro" : "Mudar para tema escuro",
      children: [
        isDark ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          _lucidereact.Moon,
          {
            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-text-secondary",
            "aria-hidden": "true"
          }
        ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          _lucidereact.Sun,
          {
            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-text-primary",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "sr-only", children: isDark ? "Mudar para tema claro" : "Mudar para tema escuro" })
      ]
    }
  );
}

// src/components/utilities/error-boundary/ErrorBoundary.tsx



var ErrorBoundary = class extends _react.Component {
  constructor(props) {
    super(props);
    __publicField(this, "handleReset", () => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null
      });
    });
    __publicField(this, "handleGoHome", () => {
      window.location.href = "/";
    });
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _jsxruntime.Fragment, { children: this.props.fallback });
      }
      return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "min-h-screen flex items-center justify-center p-4", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, Card, { className: "max-w-lg w-full", children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, CardHeader, { className: "text-center", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.AlertTriangle, { className: "h-8 w-8 text-destructive" }) }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardTitle, { className: "text-2xl", children: "Ops! Algo deu errado" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardDescription, { children: "Encontramos um erro inesperado. Por favor, tente novamente." })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, CardContent, { className: "space-y-4", children: [
          process.env.NODE_ENV === "development" && this.state.error && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "p-4 bg-muted rounded-lg", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "text-sm font-mono text-muted-foreground", children: this.state.error.toString() }),
            this.state.errorInfo && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "details", { className: "mt-2", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "summary", { className: "cursor-pointer text-sm text-muted-foreground hover:text-foreground", children: "Stack trace" }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "pre", { className: "mt-2 text-xs overflow-auto", children: this.state.errorInfo.componentStack })
            ] })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex gap-3", children: [
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, Button, { onClick: this.handleReset, variant: "outline", className: "flex-1", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.RefreshCw, { className: "h-4 w-4 mr-2" }),
              "Tentar Novamente"
            ] }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, Button, { onClick: this.handleGoHome, className: "flex-1", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Home, { className: "h-4 w-4 mr-2" }),
              "Ir para Home"
            ] })
          ] })
        ] })
      ] }) });
    }
    return this.props.children;
  }
};

// src/components/providers/theme-provider.tsx


function ThemeProvider({ children, ...props }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _nextthemes.ThemeProvider,
    {
      attribute: "class",
      defaultTheme: "dark",
      enableSystem: true,
      storageKey: "rainer-ui-theme",
      ...props,
      children
    }
  );
}

// src/hooks/use-mobile.ts

var MOBILE_BREAKPOINT2 = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React32.useState(void 0);
  React32.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT2 - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT2);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT2);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// src/hooks/use-carousel-keyboard.ts

function useCarouselKeyboard({
  totalItems,
  currentIndex = 0,
  onIndexChange,
  autoPlay = false,
  autoPlayInterval = 3e3,
  options = {}
}) {
  const {
    loop = true,
    pauseOnHover = true,
    keyMap = ["ArrowLeft", "ArrowRight"]
  } = options;
  const [isPaused, setIsPaused] = React.default.useState(false);
  const intervalRef = React.default.useRef(null);
  const containerRef = React.default.useRef(null);
  const next = React.default.useCallback(() => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= totalItems) {
      if (loop) {
        _optionalChain([onIndexChange, 'optionalCall', _73 => _73(0)]);
      }
    } else {
      _optionalChain([onIndexChange, 'optionalCall', _74 => _74(nextIndex)]);
    }
  }, [currentIndex, totalItems, loop, onIndexChange]);
  const prev = React.default.useCallback(() => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      if (loop) {
        _optionalChain([onIndexChange, 'optionalCall', _75 => _75(totalItems - 1)]);
      }
    } else {
      _optionalChain([onIndexChange, 'optionalCall', _76 => _76(prevIndex)]);
    }
  }, [currentIndex, totalItems, loop, onIndexChange]);
  const goTo = React.default.useCallback((index) => {
    if (index >= 0 && index < totalItems) {
      _optionalChain([onIndexChange, 'optionalCall', _77 => _77(index)]);
    }
  }, [totalItems, onIndexChange]);
  React.default.useEffect(() => {
    if (autoPlay && !isPaused) {
      intervalRef.current = setInterval(next, autoPlayInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, isPaused, next, autoPlayInterval]);
  React.default.useEffect(() => {
    const handleKeyDown = (event) => {
      if (!keyMap.includes(event.key)) return;
      event.preventDefault();
      if (event.key === keyMap[0]) {
        prev();
      } else if (event.key === keyMap[1]) {
        next();
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("keydown", handleKeyDown);
    } else {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (container) {
        container.removeEventListener("keydown", handleKeyDown);
      } else {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [keyMap, next, prev]);
  React.default.useEffect(() => {
    if (!pauseOnHover || !autoPlay) return;
    const container = containerRef.current;
    if (!container) return;
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pauseOnHover, autoPlay]);
  const pause = React.default.useCallback(() => {
    setIsPaused(true);
  }, []);
  const resume = React.default.useCallback(() => {
    setIsPaused(false);
  }, []);
  const stop = React.default.useCallback(() => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  return {
    // Refs
    containerRef,
    // Funções de navegação
    next,
    prev,
    goTo,
    // Controle de auto-play
    pause,
    resume,
    stop,
    // Estado
    isPaused,
    canGoNext: loop || currentIndex < totalItems - 1,
    canGoPrev: loop || currentIndex > 0,
    // Utilitários
    isFirst: currentIndex === 0,
    isLast: currentIndex === totalItems - 1,
    progress: totalItems > 0 ? (currentIndex + 1) / totalItems * 100 : 0
  };
}

// src/hooks/use-table-of-contents.ts

function useTableOfContents({
  containerRef,
  headings = ["h2", "h3"],
  options = {}
}) {
  const {
    offset = 100,
    smoothScroll = true,
    activeOnScroll = true,
    nested = true
  } = options;
  const [items, setItems] = React.default.useState([]);
  const [activeId, setActiveId] = React.default.useState(null);
  const generateTOC = React.default.useCallback(() => {
    const container = _optionalChain([containerRef, 'optionalAccess', _78 => _78.current]);
    if (!container) return [];
    const headingElements = container.querySelectorAll(headings.join(", "));
    const tocItems = [];
    headingElements.forEach((element, index) => {
      const text = _optionalChain([element, 'access', _79 => _79.textContent, 'optionalAccess', _80 => _80.trim, 'call', _81 => _81()]) || "";
      const level = parseInt(element.tagName.substring(1));
      if (!element.id) {
        element.id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim() || `heading-${index}`;
      }
      tocItems.push({
        id: element.id,
        text,
        level,
        element,
        index
      });
    });
    return tocItems;
  }, [containerRef, headings]);
  React.default.useEffect(() => {
    const tocItems = generateTOC();
    setItems(tocItems);
  }, [generateTOC]);
  const scrollToItem = React.default.useCallback((itemId) => {
    const element = document.getElementById(itemId);
    if (!element) return;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    if (smoothScroll) {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      window.scrollTo(0, offsetPosition);
    }
    setActiveId(itemId);
  }, [offset, smoothScroll]);
  React.default.useEffect(() => {
    if (!activeOnScroll || items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -${window.innerHeight - offset - 100}px 0px`,
        threshold: 0
      }
    );
    items.forEach((item) => {
      if (item.element) {
        observer.observe(item.element);
      }
    });
    return () => {
      items.forEach((item) => {
        if (item.element) {
          observer.unobserve(item.element);
        }
      });
    };
  }, [activeOnScroll, items, offset]);
  const nestedItems = React.default.useMemo(() => {
    if (!nested) return items;
    const result = [];
    const stack = [];
    items.forEach((item) => {
      const tocItem = { ...item, children: [] };
      while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
        stack.pop();
      }
      if (stack.length === 0) {
        result.push(tocItem);
      } else {
        stack[stack.length - 1].children.push(tocItem);
      }
      stack.push(tocItem);
    });
    return result;
  }, [items, nested]);
  const renderItem = React.default.useCallback((item, depth = 0) => {
    const isActive = item.id === activeId;
    const hasChildren = "children" in item && item.children && item.children.length > 0;
    return {
      ...item,
      isActive,
      depth,
      hasChildren,
      scrollTo: () => scrollToItem(item.id)
    };
  }, [activeId, scrollToItem]);
  const renderItems = React.default.useCallback(() => {
    const flatItems = [];
    const flatten = (items2, depth = 0) => {
      items2.forEach((item) => {
        flatItems.push(renderItem(item, depth));
        if (item.children && item.children.length > 0) {
          flatten(item.children, depth + 1);
        }
      });
    };
    flatten(nestedItems);
    return flatItems;
  }, [nestedItems, renderItem]);
  const stats = React.default.useMemo(() => {
    const levelCounts = {};
    items.forEach((item) => {
      levelCounts[item.level] = (levelCounts[item.level] || 0) + 1;
    });
    return {
      totalItems: items.length,
      levels: Object.keys(levelCounts).map(Number).sort(),
      levelCounts,
      hasActive: !!activeId,
      activeIndex: items.findIndex((item) => item.id === activeId)
    };
  }, [items, activeId]);
  const refresh = React.default.useCallback(() => {
    const tocItems = generateTOC();
    setItems(tocItems);
  }, [generateTOC]);
  const reset = React.default.useCallback(() => {
    setItems([]);
    setActiveId(null);
  }, []);
  return {
    // Dados do TOC
    items,
    nestedItems,
    renderItems: renderItems(),
    // Estado
    activeId,
    hasItems: items.length > 0,
    // Funções de controle
    scrollToItem,
    refresh,
    reset,
    // Estatísticas
    stats,
    // Utilitários
    generateTOC,
    renderItem
  };
}

// src/lib/scroll-utils.ts
function prefersReducedMotion2() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function smoothScrollTo2(target, options) {
  const element = typeof target === "string" ? document.querySelector(target) : target;
  if (!element) {
    console.warn(`Elemento n\xE3o encontrado: ${target}`);
    return;
  }
  const shouldAnimate = !prefersReducedMotion2();
  element.scrollIntoView({
    behavior: shouldAnimate ? "smooth" : "auto",
    block: "start",
    inline: "nearest",
    ...options
  });
}
function scrollToTop2() {
  const shouldAnimate = !prefersReducedMotion2();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: shouldAnimate ? "smooth" : "auto"
  });
}
function scrollToPosition2(x, y, smooth = true) {
  const shouldAnimate = smooth && !prefersReducedMotion2();
  window.scrollTo({
    top: y,
    left: x,
    behavior: shouldAnimate ? "smooth" : "auto"
  });
}
function disableScroll() {
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.overflow = "";
}








































































































































































































































exports.ANIMATION_DELAYS = ANIMATION_DELAYS; exports.ANIMATION_DURATIONS = ANIMATION_DURATIONS; exports.ANIMATION_EASINGS = ANIMATION_EASINGS; exports.Accordion = Accordion; exports.AccordionContent = AccordionContent; exports.AccordionItem = AccordionItem; exports.AccordionTrigger = AccordionTrigger; exports.Alert = Alert; exports.AlertDescription = AlertDescription; exports.AlertDialog = AlertDialog; exports.AlertDialogAction = AlertDialogAction; exports.AlertDialogCancel = AlertDialogCancel; exports.AlertDialogContent = AlertDialogContent; exports.AlertDialogDescription = AlertDialogDescription; exports.AlertDialogFooter = AlertDialogFooter; exports.AlertDialogHeader = AlertDialogHeader; exports.AlertDialogOverlay = AlertDialogOverlay; exports.AlertDialogPortal = AlertDialogPortal; exports.AlertDialogTitle = AlertDialogTitle; exports.AlertDialogTrigger = AlertDialogTrigger; exports.AlertTitle = AlertTitle; exports.AspectRatio = AspectRatio; exports.Avatar = Avatar; exports.AvatarFallback = AvatarFallback; exports.AvatarImage = AvatarImage; exports.BACKGROUND = _designtokens.BACKGROUND; exports.BackToTop = BackToTop; exports.BackToTopButton = BackToTopButton; exports.Badge = Badge; exports.Button = Button; exports.Calendar = Calendar; exports.CalendarDayButton = CalendarDayButton; exports.Card = Card; exports.CardContent = CardContent; exports.CardDescription = CardDescription; exports.CardFooter = CardFooter; exports.CardHeader = CardHeader; exports.CardTitle = CardTitle; exports.Carousel = Carousel; exports.CarouselContent = CarouselContent; exports.CarouselItem = CarouselItem; exports.CarouselNext = CarouselNext; exports.CarouselPrevious = CarouselPrevious; exports.Checkbox = Checkbox; exports.Collapsible = Collapsible; exports.CollapsibleContent = CollapsibleContent2; exports.CollapsibleTrigger = CollapsibleTrigger2; exports.Command = Command; exports.CommandDialog = CommandDialog; exports.CommandEmpty = CommandEmpty; exports.CommandGroup = CommandGroup; exports.CommandInput = CommandInput; exports.CommandItem = CommandItem; exports.CommandList = CommandList; exports.CommandSeparator = CommandSeparator; exports.CommandShortcut = CommandShortcut; exports.ContextMenu = ContextMenu; exports.ContextMenuCheckboxItem = ContextMenuCheckboxItem; exports.ContextMenuContent = ContextMenuContent; exports.ContextMenuGroup = ContextMenuGroup; exports.ContextMenuItem = ContextMenuItem; exports.ContextMenuLabel = ContextMenuLabel; exports.ContextMenuPortal = ContextMenuPortal; exports.ContextMenuRadioGroup = ContextMenuRadioGroup; exports.ContextMenuRadioItem = ContextMenuRadioItem; exports.ContextMenuSeparator = ContextMenuSeparator; exports.ContextMenuShortcut = ContextMenuShortcut; exports.ContextMenuSub = ContextMenuSub; exports.ContextMenuSubContent = ContextMenuSubContent; exports.ContextMenuSubTrigger = ContextMenuSubTrigger; exports.ContextMenuTrigger = ContextMenuTrigger; exports.CookieBanner = CookieBanner; exports.Dialog = Dialog; exports.DialogClose = DialogClose; exports.DialogContent = DialogContent; exports.DialogDescription = DialogDescription; exports.DialogFooter = DialogFooter; exports.DialogHeader = DialogHeader; exports.DialogOverlay = DialogOverlay; exports.DialogPortal = DialogPortal; exports.DialogTitle = DialogTitle; exports.DialogTrigger = DialogTrigger; exports.DropdownMenu = DropdownMenu; exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem; exports.DropdownMenuContent = DropdownMenuContent; exports.DropdownMenuGroup = DropdownMenuGroup; exports.DropdownMenuItem = DropdownMenuItem; exports.DropdownMenuLabel = DropdownMenuLabel; exports.DropdownMenuPortal = DropdownMenuPortal; exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup; exports.DropdownMenuRadioItem = DropdownMenuRadioItem; exports.DropdownMenuSeparator = DropdownMenuSeparator; exports.DropdownMenuShortcut = DropdownMenuShortcut; exports.DropdownMenuSub = DropdownMenuSub; exports.DropdownMenuSubContent = DropdownMenuSubContent; exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger; exports.DropdownMenuTrigger = DropdownMenuTrigger; exports.EmptyState = EmptyState; exports.ErrorBoundary = ErrorBoundary; exports.Form = Form; exports.FormControl = FormControl; exports.FormDescription = FormDescription; exports.FormField = FormField; exports.FormItem = FormItem; exports.FormLabel = FormLabel; exports.FormMessage = FormMessage; exports.FullPageLoader = FullPageLoader; exports.GRADIENTS = _designtokens.GRADIENTS; exports.GRADIENT_DIRECTIONS = _designtokens.GRADIENT_DIRECTIONS; exports.HighlightCard = HighlightCard; exports.HoverCard = HoverCard; exports.HoverCardContent = HoverCardContent; exports.HoverCardTrigger = HoverCardTrigger; exports.InlineLoader = InlineLoader; exports.Input = Input; exports.InstallPrompt = InstallPrompt; exports.Label = Label; exports.LoadingScreen = LoadingScreen; exports.LoadingSpinner = LoadingSpinner; exports.MOTION = _designtokens.MOTION; exports.MatrixBackground = MatrixBackground; exports.NavigationMenu = NavigationMenu; exports.NavigationMenuContent = NavigationMenuContent; exports.NavigationMenuIndicator = NavigationMenuIndicator; exports.NavigationMenuItem = NavigationMenuItem; exports.NavigationMenuLink = NavigationMenuLink; exports.NavigationMenuList = NavigationMenuList; exports.NavigationMenuTrigger = NavigationMenuTrigger; exports.NavigationMenuViewport = NavigationMenuViewport; exports.PageHeader = PageHeader; exports.ParticlesEffect = ParticlesEffect; exports.Popover = Popover; exports.PopoverContent = PopoverContent; exports.PopoverTrigger = PopoverTrigger; exports.Progress = Progress; exports.RadioGroup = RadioGroup; exports.RadioGroupItem = RadioGroupItem; exports.SEMANTIC_COLORS = SEMANTIC_COLORS; exports.ScrollArea = ScrollArea; exports.ScrollBar = ScrollBar; exports.Select = Select; exports.SelectContent = SelectContent; exports.SelectGroup = SelectGroup; exports.SelectItem = SelectItem; exports.SelectLabel = SelectLabel; exports.SelectScrollDownButton = SelectScrollDownButton; exports.SelectScrollUpButton = SelectScrollUpButton; exports.SelectSeparator = SelectSeparator; exports.SelectTrigger = SelectTrigger; exports.SelectValue = SelectValue; exports.Separator = Separator2; exports.Sheet = Sheet; exports.SheetClose = SheetClose; exports.SheetContent = SheetContent; exports.SheetDescription = SheetDescription; exports.SheetFooter = SheetFooter; exports.SheetHeader = SheetHeader; exports.SheetTitle = SheetTitle; exports.SheetTrigger = SheetTrigger; exports.Skeleton = Skeleton; exports.SkeletonGrid = SkeletonGrid; exports.Slider = Slider; exports.StarsBackground = StarsBackground; exports.Switch = Switch; exports.Table = Table; exports.TableBody = TableBody; exports.TableCaption = TableCaption; exports.TableCell = TableCell; exports.TableFooter = TableFooter; exports.TableHead = TableHead; exports.TableHeader = TableHeader; exports.TableRow = TableRow; exports.Tabs = Tabs; exports.TabsContent = TabsContent; exports.TabsList = TabsList; exports.TabsTrigger = TabsTrigger; exports.Textarea = Textarea; exports.ThemeProvider = ThemeProvider; exports.ThemeToggle = ThemeToggle; exports.Toaster = Toaster; exports.Toggle = Toggle; exports.Tooltip = Tooltip; exports.TooltipContent = TooltipContent; exports.TooltipProvider = TooltipProvider; exports.TooltipTrigger = TooltipTrigger; exports.UpdateNotification = UpdateNotification; exports.VisuallyHidden = VisuallyHidden; exports.badgeVariants = badgeVariants; exports.buttonVariants = buttonVariants; exports.cn = cn; exports.convertToWebP = convertToWebP; exports.darkTheme = _designtokens.darkTheme; exports.darkThemeColors = _designtokens.darkThemeColors; exports.disableScroll = disableScroll; exports.enableScroll = enableScroll; exports.generatePlaceholder = generatePlaceholder; exports.generateTailwindClasses = generateTailwindClasses; exports.getBrandColor = getBrandColor; exports.getColorFromTheme = getColorFromTheme; exports.getContrastColor = getContrastColor; exports.getImageInfo = getImageInfo; exports.getSemanticColors = getSemanticColors; exports.getStatusColor = getStatusColor; exports.getThemeColors = getThemeColors; exports.getTokenColor = getTokenColor; exports.hexToRGB = hexToRGB; exports.hexToRGBA = hexToRGBA; exports.isAcceptedFormat = isAcceptedFormat; exports.isValidHex = isValidHex; exports.isWebP = isWebP; exports.lightTheme = _designtokens.lightTheme; exports.lightThemeColors = _designtokens.lightThemeColors; exports.motion = motion; exports.navigationMenuTriggerStyle = navigationMenuTriggerStyle; exports.overlayFromToken = overlayFromToken; exports.prefersReducedMotion = prefersReducedMotion2; exports.prepareImageForUpload = prepareImageForUpload; exports.resizeImage = resizeImage; exports.scrollToPosition = scrollToPosition2; exports.scrollToTop = scrollToTop2; exports.smoothScrollTo = smoothScrollTo2; exports.supportsWebP = supportsWebP; exports.toggleVariants = toggleVariants; exports.tokens = _designtokens.tokens; exports.useCarouselKeyboard = useCarouselKeyboard; exports.useCookieConsent = useCookieConsent; exports.useFormField = useFormField; exports.useIsMobile = useIsMobile; exports.usePWA = usePWA; exports.useTableOfContents = useTableOfContents; exports.useTheme = useTheme6;
//# sourceMappingURL=index.js.map