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
var phone_input_exports = {};
__export(phone_input_exports, {
  PhoneInput: () => PhoneInput
});
module.exports = __toCommonJS(phone_input_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_button = require("../ui/button");
var import_utils = require("../../lib/utils");
const COUNTRIES = [
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
const phoneInputVariants = (0, import_class_variance_authority.cva)(
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
const PhoneInput = React.forwardRef(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        className: (0, import_utils.cn)(phoneInputVariants({ size, variant }), className),
        children: [
          showCountrySelector && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              import_button.Button,
              {
                type: "button",
                variant: "outline",
                className: "rounded-r-none border-r-0 pr-1",
                onClick: () => setIsDropdownOpen(!isDropdownOpen),
                disabled,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-1", children: selectedCountry.flag }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Globe, { className: "h-4 w-4" })
                ]
              }
            ),
            isDropdownOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                ref: dropdownRef,
                className: "absolute top-full left-0 z-50 mt-1 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95 max-h-60 overflow-y-auto",
                children: countries.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: (0, import_utils.cn)(
                      "flex items-center gap-2 w-full rounded-sm px-2 py-1.5 text-sm",
                      "hover:bg-accent hover:text-accent-foreground",
                      "focus:bg-accent focus:text-accent-foreground",
                      c.code === selectedCountry.code && "bg-accent text-accent-foreground"
                    ),
                    onClick: () => handleCountrySelect(c),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.flag }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 text-left", children: c.name }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground text-xs", children: c.ddi })
                    ]
                  },
                  c.code
                ))
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "input",
              {
                ref,
                type: "tel",
                value: currentValue,
                onChange: handleInputChange,
                placeholder: inputPlaceholder,
                disabled,
                className: (0, import_utils.cn)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PhoneInput
});
//# sourceMappingURL=phone-input.js.map