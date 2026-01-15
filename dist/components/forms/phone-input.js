'use strict';

var Globe = require('lucide-react/dist/esm/icons/globe');
var React2 = require('react');
var classVarianceAuthority = require('class-variance-authority');
var Phone = require('lucide-react/dist/esm/icons/phone');
var reactSlot = require('@radix-ui/react-slot');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
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

var Globe__default = /*#__PURE__*/_interopDefault(Globe);
var React2__namespace = /*#__PURE__*/_interopNamespace(React2);
var Phone__default = /*#__PURE__*/_interopDefault(Phone);

// src/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var motion = designTokens.tokens.MOTION || {
  duration: {
    fast: "100ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms"},
  easing: {
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  delay: {
    }
};
var motionSemantic = designTokens.tokens.MOTION || {
  transition: {
    default: {
      duration: motion.duration.normal,
      easing: motion.easing.easeInOut
    }
  },
  interaction: {
    hover: {
      duration: motion.duration.fast,
      easing: motion.easing.easeOut
    }
  },
  feedback: {
    success: {
      duration: motion.duration.slower,
      easing: motion.easing.spring
    }
  },
  navigation: {
    page: {
      duration: motion.duration.slow,
      easing: motion.easing.easeInOut
    }
  }
};
motion.delay;
motion.duration;
motion.easing;
({
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
  },
  // Presets semânticos
  semantic: {
    transition: motionSemantic.transition.default,
    interaction: motionSemantic.interaction.hover,
    feedback: motionSemantic.feedback.success,
    navigation: motionSemantic.navigation.page
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
    const Comp = asChild ? reactSlot.Slot : "button";
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Comp,
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
        ...props,
        children: [
          loading && /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }) }),
          children
        ]
      }
    );
  }
);
ButtonComponent.displayName = "Button";
var Button = ButtonComponent;
var COUNTRIES = [
  { code: "BR", name: "Brasil", ddi: "+55", flag: "\u{1F1E7}\u{1F1F7}", mask: "(00) 00000-0000" },
  { code: "US", name: "Estados Unidos", ddi: "+1", flag: "\u{1F1FA}\u{1F1F8}", mask: "(000) 000-0000" },
  { code: "PT", name: "Portugal", ddi: "+351", flag: "\u{1F1F5}\u{1F1F9}", mask: "000 000 000" },
  { code: "ES", name: "Espanha", ddi: "+34", flag: "\u{1F1EA}\u{1F1F8}", mask: "000 000 000" },
  { code: "FR", name: "Fran\xE7a", ddi: "+33", flag: "\u{1F1EB}\u{1F1F7}", mask: "00 00 00 00 00" },
  { code: "IT", name: "It\xE1lia", ddi: "+39", flag: "\u{1F1EE}\u{1F1F9}", mask: "000 000 0000" },
  { code: "DE", name: "Alemanha", ddi: "+49", flag: "\u{1F1E9}\u{1F1EA}", mask: "000 0000000" },
  { code: "UK", name: "Reino Unido", ddi: "+44", flag: "\u{1F1EC}\u{1F1E7}", mask: "0000 000 000" },
  { code: "AR", name: "Argentina", ddi: "+54", flag: "\u{1F1E6}\u{1F1F7}", mask: "00 0000-0000" },
  { code: "CL", name: "Chile", ddi: "+56", flag: "\u{1F1E8}\u{1F1F1}", mask: "0000 000 000" },
  { code: "MX", name: "M\xE9xico", ddi: "+52", flag: "\u{1F1F2}\u{1F1FD}", mask: "000 000 0000" },
  { code: "CA", name: "Canad\xE1", ddi: "+1", flag: "\u{1F1E8}\u{1F1E6}", mask: "(000) 000-0000" },
  { code: "AU", name: "Austr\xE1lia", ddi: "+61", flag: "\u{1F1E6}\u{1F1FA}", mask: "000 000 000" },
  { code: "JP", name: "Jap\xE3o", ddi: "+81", flag: "\u{1F1EF}\u{1F1F5}", mask: "00-0000-0000" },
  { code: "CN", name: "China", ddi: "+86", flag: "\u{1F1E8}\u{1F1F3}", mask: "000 0000 0000" }
];
var phoneInputVariants = classVarianceAuthority.cva(
  "flex w-full",
  {
    variants: {
      size: {
        sm: "h-9",
        md: "h-10",
        lg: "h-12"
      },
      variant: {
        default: "",
        filled: "bg-muted",
        outlined: "border-2"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
function applyMask(value, mask) {
  let result = "";
  let valueIndex = 0;
  for (let i = 0; i < mask.length && valueIndex < value.length; i++) {
    if (mask[i] === "0") {
      result += value[valueIndex];
      valueIndex++;
    } else {
      result += mask[i];
    }
  }
  return result;
}
function removeMask(value) {
  return value.replace(/\D/g, "");
}
var PhoneInput = React2__namespace.forwardRef(
  ({
    className,
    size = "md",
    variant = "default",
    value = "",
    onChange,
    country = "BR",
    onCountryChange,
    placeholder,
    showCountrySelector = true,
    countries = COUNTRIES,
    disabled = false,
    includeDDI = false,
    numbersOnly = true,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React2__namespace.useState(value);
    const [selectedCountry, setSelectedCountry] = React2__namespace.useState(
      countries.find((c) => c.code === country) || countries[0]
    );
    const [isDropdownOpen, setIsDropdownOpen] = React2__namespace.useState(false);
    const inputRef = React2__namespace.useRef(null);
    const dropdownRef = React2__namespace.useRef(null);
    const currentValue = value !== void 0 ? value : internalValue;
    React2__namespace.useEffect(() => {
      const newCountry = countries.find((c) => c.code === country) || countries[0];
      setSelectedCountry(newCountry);
    }, [country, countries]);
    const handleInputChange = React2__namespace.useCallback((event) => {
      let inputValue = event.target.value;
      if (numbersOnly) {
        inputValue = removeMask(inputValue);
      }
      const maskedValue = applyMask(inputValue, selectedCountry.mask);
      setInternalValue(maskedValue);
      const finalValue = includeDDI ? `${selectedCountry.ddi} ${removeMask(maskedValue)}` : removeMask(maskedValue);
      onChange?.(finalValue, selectedCountry);
    }, [selectedCountry, numbersOnly, includeDDI, onChange]);
    const handleCountrySelect = React2__namespace.useCallback((country2) => {
      setSelectedCountry(country2);
      setIsDropdownOpen(false);
      onCountryChange?.(country2);
      if (country2.mask !== selectedCountry.mask) {
        setInternalValue("");
        onChange?.("", country2);
      }
    }, [selectedCountry, onCountryChange, onChange]);
    React2__namespace.useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !inputRef.current?.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const inputPlaceholder = placeholder || selectedCountry.mask;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: cn(phoneInputVariants({ size, variant }), className),
        children: [
          showCountrySelector && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntime.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                className: "rounded-r-none border-r-0 pr-1",
                onClick: () => setIsDropdownOpen(!isDropdownOpen),
                disabled,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mr-1", children: selectedCountry.flag }),
                  /* @__PURE__ */ jsxRuntime.jsx(Globe__default.default, { className: "h-4 w-4" })
                ]
              }
            ),
            isDropdownOpen && /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                ref: dropdownRef,
                className: "absolute top-full left-0 z-50 mt-1 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95 max-h-60 overflow-y-auto",
                children: countries.map((c) => /* @__PURE__ */ jsxRuntime.jsxs(
                  "button",
                  {
                    type: "button",
                    className: cn(
                      "flex items-center gap-2 w-full rounded-sm px-2 py-1.5 text-sm",
                      "hover:bg-accent hover:text-accent-foreground",
                      "focus:bg-accent focus:text-accent-foreground",
                      c.code === selectedCountry.code && "bg-accent text-accent-foreground"
                    ),
                    onClick: () => handleCountrySelect(c),
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx("span", { children: c.flag }),
                      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1 text-left", children: c.name }),
                      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground text-xs", children: c.ddi })
                    ]
                  },
                  c.code
                ))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Phone__default.default, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "input",
              {
                ref,
                type: "tel",
                value: currentValue,
                onChange: handleInputChange,
                placeholder: inputPlaceholder,
                disabled,
                className: cn(
                  "flex h-full w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                  "file:border-0 file:bg-transparent file:text-sm file:font-medium",
                  "placeholder:text-muted-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                  showCountrySelector ? "rounded-l-none pl-10" : "pl-10",
                  variant === "filled" && "border-transparent bg-muted",
                  variant === "outlined" && "border-2"
                ),
                ...props
              }
            )
          ] })
        ]
      }
    );
  }
);
PhoneInput.displayName = "PhoneInput";

exports.PhoneInput = PhoneInput;
//# sourceMappingURL=phone-input.js.map
//# sourceMappingURL=phone-input.js.map