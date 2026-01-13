import Globe from 'lucide-react/dist/esm/icons/globe';
import * as React from 'react';
import { cva } from 'class-variance-authority';
import Phone from 'lucide-react/dist/esm/icons/phone';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var motion = tokens.primitives.motion;
var motionSemantic = tokens.semantics.motion || {
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
  transition: motionSemantic.transition.default,
  interaction: motionSemantic.interaction.hover,
  feedback: motionSemantic.feedback.success,
  navigation: motionSemantic.navigation.page
});
var buttonVariants = cva(
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
        glass: "glass neon-border hover:glass-hover dark:text-primary",
        minimal: "bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground"
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
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
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
var phoneInputVariants = cva(
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
var PhoneInput = React.forwardRef(
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
    const [internalValue, setInternalValue] = React.useState(value);
    const [selectedCountry, setSelectedCountry] = React.useState(
      countries.find((c) => c.code === country) || countries[0]
    );
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const inputRef = React.useRef(null);
    const dropdownRef = React.useRef(null);
    const currentValue = value !== void 0 ? value : internalValue;
    React.useEffect(() => {
      const newCountry = countries.find((c) => c.code === country) || countries[0];
      setSelectedCountry(newCountry);
    }, [country, countries]);
    const handleInputChange = React.useCallback((event) => {
      let inputValue = event.target.value;
      if (numbersOnly) {
        inputValue = removeMask(inputValue);
      }
      const maskedValue = applyMask(inputValue, selectedCountry.mask);
      setInternalValue(maskedValue);
      const finalValue = includeDDI ? `${selectedCountry.ddi} ${removeMask(maskedValue)}` : removeMask(maskedValue);
      onChange?.(finalValue, selectedCountry);
    }, [selectedCountry, numbersOnly, includeDDI, onChange]);
    const handleCountrySelect = React.useCallback((country2) => {
      setSelectedCountry(country2);
      setIsDropdownOpen(false);
      onCountryChange?.(country2);
      if (country2.mask !== selectedCountry.mask) {
        setInternalValue("");
        onChange?.("", country2);
      }
    }, [selectedCountry, onCountryChange, onChange]);
    React.useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !inputRef.current?.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const inputPlaceholder = placeholder || selectedCountry.mask;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(phoneInputVariants({ size, variant }), className),
        children: [
          showCountrySelector && /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                className: "rounded-r-none border-r-0 pr-1",
                onClick: () => setIsDropdownOpen(!isDropdownOpen),
                disabled,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "mr-1", children: selectedCountry.flag }),
                  /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" })
                ]
              }
            ),
            isDropdownOpen && /* @__PURE__ */ jsx(
              "div",
              {
                ref: dropdownRef,
                className: "absolute top-full left-0 z-50 mt-1 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95 max-h-60 overflow-y-auto",
                children: countries.map((c) => /* @__PURE__ */ jsxs(
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
                      /* @__PURE__ */ jsx("span", { children: c.flag }),
                      /* @__PURE__ */ jsx("span", { className: "flex-1 text-left", children: c.name }),
                      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-xs", children: c.ddi })
                    ]
                  },
                  c.code
                ))
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsx(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(
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

export { PhoneInput };
//# sourceMappingURL=phone-input.mjs.map
//# sourceMappingURL=phone-input.mjs.map