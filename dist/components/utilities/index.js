'use strict';

var React12 = require('react');
var lucideReact = require('lucide-react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');
var Link = require('next/link');
var LabelPrimitive = require('@radix-ui/react-label');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var SwitchPrimitives = require('@radix-ui/react-switch');
var nextThemes = require('next-themes');
var Moon = require('lucide-react/dist/esm/icons/moon');
var Sun = require('lucide-react/dist/esm/icons/sun');
var reactLoadingIndicators = require('react-loading-indicators');
var Check2 = require('lucide-react/dist/esm/icons/check');
var Copy = require('lucide-react/dist/esm/icons/copy');
var QuoteIcon = require('lucide-react/dist/esm/icons/quote');

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

var React12__namespace = /*#__PURE__*/_interopNamespace(React12);
var Link__default = /*#__PURE__*/_interopDefault(Link);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);
var SwitchPrimitives__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitives);
var Moon__default = /*#__PURE__*/_interopDefault(Moon);
var Sun__default = /*#__PURE__*/_interopDefault(Sun);
var Check2__default = /*#__PURE__*/_interopDefault(Check2);
var Copy__default = /*#__PURE__*/_interopDefault(Copy);
var QuoteIcon__default = /*#__PURE__*/_interopDefault(QuoteIcon);

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
function hexToRGB(hex) {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

// src/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var SECTION_CLASSES = {
  /** Container padrão de página com largura máxima e padding responsivo */
  container: "w-full max-w-6xl mx-auto px-6 py-12"
};
var motion = designTokens.tokens?.primitives?.motion || {
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
var motionSemantic = designTokens.tokens.semantics.motion || {
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
var buttonVariants = classVarianceAuthority.cva(
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
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/lib/scroll-utils.ts
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function smoothScrollTo(target, options) {
  const element = typeof target === "string" ? document.querySelector(target) : target;
  if (!element) {
    console.warn(`Elemento n\xE3o encontrado: ${target}`);
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
function scrollToPosition(x, y, smooth = true) {
  const shouldAnimate = smooth && !prefersReducedMotion();
  window.scrollTo({
    top: y,
    left: x,
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
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }
  if (mediaQuery.addListener) {
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }
  return () => {
  };
}
function useSmoothScroll() {
  const [reducedMotion, setReducedMotion] = React12.useState(false);
  React12.useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    const cleanup = onReducedMotionChange((matches) => {
      setReducedMotion(matches);
    });
    return cleanup;
  }, []);
  const scrollTo = React12.useCallback(
    (target, options) => {
      smoothScrollTo(target, options);
    },
    []
  );
  const toTop = React12.useCallback(() => {
    scrollToTop();
  }, []);
  const toPosition = React12.useCallback((top, left = 0) => {
    scrollToPosition(left, top);
  }, []);
  return {
    scrollTo,
    scrollToTop: toTop,
    scrollToPosition: toPosition,
    reducedMotion,
    shouldAnimate: !reducedMotion
  };
}
var SCROLL_THRESHOLD_PX = 300;
function BackToTopButton() {
  const [isButtonVisible, setIsButtonVisible] = React12.useState(false);
  const { scrollToTop: scrollToTop2, reducedMotion } = useSmoothScroll();
  React12.useEffect(() => {
    const handleScrollEvent = () => {
      setIsButtonVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);
  if (!isButtonVisible) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button,
    {
      onClick: scrollToTop2,
      className: "fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg",
      "aria-label": reducedMotion ? "Ir para o topo da p\xE1gina" : "Rolar suavemente para o topo da p\xE1gina",
      title: "Voltar ao topo",
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUp, { className: "h-5 w-5", "aria-hidden": "true" })
    }
  );
}
function BackToTop() {
  return /* @__PURE__ */ jsxRuntime.jsx(BackToTopButton, {});
}

// src/lib/constants.ts
var MOTION = {
  TRANSITION: {
    DEFAULT: "transition-all duration-200 ease-in-out"}};
var GRADIENT_DIRECTIONS = {
  TO_BOTTOM_RIGHT: "to-br"};
var Card = React12__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardHeader = React12__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React12__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardDescription = React12__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React12__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React12__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var HighlightCard = React12__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
      `before:absolute before:inset-0 before:${GRADIENT_DIRECTIONS.TO_BOTTOM_RIGHT}`,
      "before:from-primary/0 before:via-primary/0 before:to-primary/0",
      "hover:before:from-primary/5 hover:before:via-transparent hover:before:to-primary/5",
      "dark:hover:before:from-cyan-400/5 dark:hover:before:via-transparent dark:hover:before:to-purple-400/5",
      "before:transition-all before:duration-500 before:ease-in-out before:pointer-events-none",
      MOTION.TRANSITION.DEFAULT,
      className
    ),
    ...props
  }
));
HighlightCard.displayName = "HighlightCard";
var labelVariants = classVarianceAuthority.cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-cyan-200 dark:font-mono"
);
var Label = React12__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  LabelPrimitive__namespace.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive__namespace.Root.displayName;
var Separator = React12__namespace.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    SeparatorPrimitive__namespace.Root,
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
Separator.displayName = SeparatorPrimitive__namespace.Root.displayName;
var Switch = React12__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SwitchPrimitives__namespace.Root,
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
    children: /* @__PURE__ */ jsxRuntime.jsx(
      SwitchPrimitives__namespace.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives__namespace.Root.displayName;

// src/lib/cookie-utils.ts
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
    } catch {
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
    } catch {
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
    } catch {
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
    } catch {
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
          const name = parts[0]?.trim();
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
var NextLink = Link__default.default;
function CookieBanner() {
  const [showBanner, setShowBanner] = React12.useState(false);
  const [canShowBanner, setCanShowBanner] = React12.useState(false);
  const [showCustomize, setShowCustomize] = React12.useState(false);
  const [preferences, setPreferences] = React12.useState({
    essential: true,
    // Sempre verdadeiro, não pode ser desabilitado
    performance: true,
    functionality: true,
    analytics: true
  });
  const cookieManager = getCookieManager();
  React12.useEffect(() => {
    if (typeof globalThis.window === "undefined") return;
    if (cookieManager.hasConsent()) {
      const savedPreferences = cookieManager.getPreferences();
      if (savedPreferences) {
        setPreferences(savedPreferences);
      }
    } else {
      setCanShowBanner(true);
      const savedPreferences = cookieManager.getPreferences();
      if (savedPreferences) {
        setPreferences(savedPreferences);
      }
    }
  }, [cookieManager]);
  const hasShownBannerRef = React12.useRef(false);
  const scrollThresholdRef = React12.useRef(0);
  const scrollTimeoutRef = React12.useRef(null);
  const mouseTimeoutRef = React12.useRef(null);
  React12.useEffect(() => {
    if (typeof globalThis.window === "undefined" || !canShowBanner || hasShownBannerRef.current)
      return;
    const heroHeight = globalThis.window.innerHeight;
    scrollThresholdRef.current = heroHeight * 0.3;
    const checkCanShow = () => {
      if (hasShownBannerRef.current) return;
      const scrollY = globalThis.window.scrollY || globalThis.window.pageYOffset;
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
    globalThis.window.addEventListener("scroll", throttledScroll, {
      passive: true
    });
    globalThis.window.addEventListener("mousemove", throttledMouseMove, {
      passive: true
    });
    return () => {
      globalThis.window.removeEventListener("scroll", throttledScroll);
      globalThis.window.removeEventListener("mousemove", throttledMouseMove);
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
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  if (!showBanner) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "dialog",
    {
      className: cn(
        "fixed bottom-0 left-0 right-0 p-4 sm:p-6",
        "animate-in slide-in-from-bottom-5 duration-300",
        "z-50"
      ),
      open: true,
      "aria-labelledby": "cookie-banner-title",
      "aria-describedby": "cookie-banner-description",
      children: /* @__PURE__ */ jsxRuntime.jsx(
        Card,
        {
          className: cn(
            "mx-auto max-w-4xl shadow-2xl",
            "dark:bg-black/95 dark:border-cyan-400/20",
            "bg-background/95 backdrop-blur-xl",
            "border-2"
          ),
          children: showCustomize ? (
            // Visualização principal do banner
            /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-4 flex-1", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      className: cn(
                        "p-3 rounded-lg",
                        "bg-primary/10 dark:bg-cyan-400/10",
                        "border border-primary/20 dark:border-cyan-400/20"
                      ),
                      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Cookie, { className: "h-6 w-6 text-primary dark:text-cyan-400" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
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
                    /* @__PURE__ */ jsxRuntime.jsxs(
                      CardDescription,
                      {
                        id: "cookie-banner-description",
                        className: cn("text-sm", "text-muted-foreground"),
                        children: [
                          "Utilizamos cookies para melhorar sua experi\xEAncia de navega\xE7\xE3o, analisar o tr\xE1fego do site e personalizar conte\xFAdo. Ao continuar navegando, voc\xEA concorda com nossa utiliza\xE7\xE3o de cookies.",
                          " ",
                          /* @__PURE__ */ jsxRuntime.jsx(
                            NextLink,
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
                /* @__PURE__ */ jsxRuntime.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 shrink-0",
                    onClick: () => setShowBanner(false),
                    "aria-label": "Fechar banner de cookies",
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntime.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntime.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 sm:justify-end", children: [
                /* @__PURE__ */ jsxRuntime.jsxs(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => setShowCustomize(true),
                    className: "w-full sm:w-auto",
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Settings, { className: "h-4 w-4 mr-2" }),
                      "Personalizar"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs(
                  Button,
                  {
                    variant: "outline",
                    onClick: handleRejectOptional,
                    className: "w-full sm:w-auto",
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XCircle, { className: "h-4 w-4 mr-2" }),
                      "Rejeitar Opcionais"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs(
                  Button,
                  {
                    onClick: handleAcceptAll,
                    className: cn(
                      "w-full sm:w-auto",
                      "bg-primary hover:bg-primary/90",
                      "dark:bg-cyan-500 dark:hover:bg-cyan-600"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4 mr-2" }),
                      "Aceitar Todos"
                    ]
                  }
                )
              ] }) })
            ] })
          ) : (
            // Visualização de personalização de cookies
            /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-4 flex-1", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      className: cn(
                        "p-3 rounded-lg",
                        "bg-primary/10 dark:bg-cyan-400/10",
                        "border border-primary/20 dark:border-cyan-400/20"
                      ),
                      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Settings, { className: "h-6 w-6 text-primary dark:text-cyan-400" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
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
                    /* @__PURE__ */ jsxRuntime.jsx(CardDescription, { className: cn("text-sm"), children: "Escolha quais tipos de cookies voc\xEA deseja permitir. Os cookies essenciais s\xE3o necess\xE1rios para o funcionamento do site." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 shrink-0",
                    onClick: () => setShowCustomize(false),
                    "aria-label": "Voltar",
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntime.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "pt-6 space-y-6", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg bg-muted/50", children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntime.jsx(
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
                      /* @__PURE__ */ jsxRuntime.jsx(
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
                    /* @__PURE__ */ jsxRuntime.jsx("p", { className: cn("text-sm", "text-muted-foreground"), children: "Necess\xE1rios para o funcionamento b\xE1sico do site. N\xE3o podem ser desativados." })
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    Switch,
                    {
                      id: "essential",
                      checked: preferences.essential,
                      disabled: true,
                      "aria-label": "Cookies essenciais (obrigat\xF3rio)"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
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
                    /* @__PURE__ */ jsxRuntime.jsx("p", { className: cn("text-sm", "text-muted-foreground"), children: "Nos ajudam a entender como voc\xEA utiliza o site para melhorarmos a performance." })
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    Switch,
                    {
                      id: "performance",
                      checked: preferences.performance,
                      onCheckedChange: () => togglePreference("performance"),
                      "aria-label": "Cookies de performance"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
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
                    /* @__PURE__ */ jsxRuntime.jsx("p", { className: cn("text-sm", "text-muted-foreground"), children: "Permitem que o site se lembre de suas prefer\xEAncias e ofere\xE7a funcionalidades aprimoradas." })
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    Switch,
                    {
                      id: "functionality",
                      checked: preferences.functionality,
                      onCheckedChange: () => togglePreference("functionality"),
                      "aria-label": "Cookies de funcionalidade"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
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
                    /* @__PURE__ */ jsxRuntime.jsx("p", { className: cn("text-sm", "text-muted-foreground"), children: "Coletam informa\xE7\xF5es sobre como voc\xEA utiliza o site para an\xE1lise e melhorias." })
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    Switch,
                    {
                      id: "analytics",
                      checked: preferences.analytics,
                      onCheckedChange: () => togglePreference("analytics"),
                      "aria-label": "Cookies de analytics"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntime.jsxs("p", { className: cn("text-xs", "text-muted-foreground"), children: [
                  "Para mais informa\xE7\xF5es, consulte nossa",
                  " ",
                  /* @__PURE__ */ jsxRuntime.jsx(
                    NextLink,
                    {
                      href: "/cookies",
                      className: "text-primary hover:underline dark:text-cyan-400 font-semibold",
                      children: "Pol\xEDtica de Cookies"
                    }
                  ),
                  " ",
                  "e nossa",
                  " ",
                  /* @__PURE__ */ jsxRuntime.jsx(
                    NextLink,
                    {
                      href: "/privacidade",
                      className: "text-primary hover:underline dark:text-cyan-400 font-semibold",
                      children: "Pol\xEDtica de Privacidade"
                    }
                  ),
                  "."
                ] }) }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-4", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    Button,
                    {
                      variant: "outline",
                      onClick: () => setShowCustomize(false),
                      className: "w-full sm:w-auto",
                      children: "Cancelar"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsxs(
                    Button,
                    {
                      onClick: handleSavePreferences,
                      className: cn(
                        "w-full sm:w-auto",
                        "bg-primary hover:bg-primary/90",
                        "dark:bg-cyan-500 dark:hover:bg-cyan-600"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4 mr-2" }),
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
function useTheme() {
  const { theme, resolvedTheme, setTheme } = nextThemes.useTheme();
  const toggle = React12__namespace.useCallback(() => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  }, [theme, resolvedTheme, setTheme]);
  const setLight = React12__namespace.useCallback(() => {
    setTheme("light");
  }, [setTheme]);
  const setDark = React12__namespace.useCallback(() => {
    setTheme("dark");
  }, [setTheme]);
  const setSystem = React12__namespace.useCallback(() => {
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
function ThemeToggle({ className }) {
  const { toggle, isDark } = useTheme();
  const [mounted, setMounted] = React12__namespace.useState(false);
  React12__namespace.useEffect(() => {
    setMounted(true);
  }, []);
  const handleToggle = () => {
    toggle();
  };
  if (!mounted) {
    return /* @__PURE__ */ jsxRuntime.jsxs(
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
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-[1.2rem] w-[1.2rem]" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Alternar tema" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        isDark ? /* @__PURE__ */ jsxRuntime.jsx(
          Moon__default.default,
          {
            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-text-secondary",
            "aria-hidden": "true"
          }
        ) : /* @__PURE__ */ jsxRuntime.jsx(
          Sun__default.default,
          {
            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-text-primary",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: isDark ? "Mudar para tema claro" : "Mudar para tema escuro" })
      ]
    }
  );
}
function usePWA() {
  const [deferredPrompt, setDeferredPrompt] = React12.useState(null);
  const [isInstallable, setIsInstallable] = React12.useState(false);
  const [isInstalled, setIsInstalled] = React12.useState(false);
  const [isStandalone, setIsStandalone] = React12.useState(false);
  const [updateAvailable, setUpdateAvailable] = React12.useState(false);
  const [swRegistration, setSwRegistration] = React12.useState(null);
  React12.useEffect(() => {
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
  React12.useEffect(() => {
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
  React12.useEffect(() => {
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
  const promptInstall = React12.useCallback(async () => {
    if (!deferredPrompt) {
      return;
    }
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setIsInstallable(false);
  }, [deferredPrompt]);
  const updateServiceWorker = React12.useCallback(() => {
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
function InstallPrompt() {
  const { resolvedTheme } = nextThemes.useTheme();
  const [mounted, setMounted] = React12.useState(false);
  const { isInstallable, isStandalone, promptInstall } = usePWA();
  const [showPrompt, setShowPrompt] = React12.useState(false);
  React12.useEffect(() => {
    setMounted(true);
  }, []);
  React12.useEffect(() => {
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
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none",
          "animate-in slide-in-from-bottom-5 fade-in duration-300"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Card,
          {
            className: cn(
              "max-w-2xl mx-auto pointer-events-auto backdrop-blur-xl border-2 shadow-2xl",
              isDark ? cn("bg-background/90", "border-primary-base/50", "shadow-glow-cyan") : cn("bg-background/90", "border-primary-base/50", "shadow-lg")
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: cn(
                    "shrink-0 p-3 rounded-full border",
                    "bg-primary-background",
                    "border-primary-base/30"
                  ),
                  children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Download, { className: cn("h-6 w-6", "text-primary-base") })
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 space-y-3", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "h3",
                    {
                      className: cn(
                        "text-lg font-bold font-mono",
                        "text-foreground"
                      ),
                      children: "\u{1F4F1} Instalar no seu Dispositivo"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "button",
                    {
                      onClick: handleDismiss,
                      className: cn(
                        "transition-colors p-1 rounded",
                        "text-muted-foreground hover:text-foreground hover:bg-muted"
                      ),
                      "aria-label": "Fechar",
                      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-5 w-5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "p",
                  {
                    className: cn(
                      "text-sm",
                      "text-muted-foreground"
                    ),
                    children: "Instale como app nativo para acesso r\xE1pido sem navegador e funcionalidade offline completa."
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntime.jsxs(
                    Button,
                    {
                      onClick: handleInstall,
                      size: "sm",
                      className: cn(
                        "font-mono font-bold",
                        "bg-primary text-primary-foreground hover:bg-primary-hover"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Download, { className: "h-4 w-4 mr-2" }),
                        "Instalar Agora"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx(
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
function UpdateNotification() {
  const { resolvedTheme } = nextThemes.useTheme();
  const [mounted, setMounted] = React12.useState(false);
  const { updateAvailable, updateServiceWorker } = usePWA();
  React12.useEffect(() => {
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
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "fixed top-20 right-4 z-50 max-w-sm",
          "animate-in slide-in-from-top-5 fade-in duration-300"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Card,
          {
            className: cn(
              "backdrop-blur-xl border-2 shadow-2xl",
              isDark ? cn("bg-background/90", "border-secondary-base/50", "shadow-glow-purple") : cn("bg-background/90", "border-secondary-base/50", "shadow-lg")
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: cn(
                    "shrink-0 p-2 rounded-full border",
                    "bg-secondary-background",
                    "border-secondary-base/30"
                  ),
                  children: /* @__PURE__ */ jsxRuntime.jsx(
                    lucideReact.RefreshCw,
                    {
                      className: cn(
                        "h-5 w-5 animate-spin text-secondary-base",
                        "[animation-duration:3s]"
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 space-y-2", children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  "h4",
                  {
                    className: cn(
                      "text-sm font-bold font-mono",
                      "text-foreground"
                    ),
                    children: "Nova Vers\xE3o Dispon\xEDvel"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "p",
                  {
                    className: cn(
                      "text-xs",
                      "text-muted-foreground"
                    ),
                    children: "Atualize para obter as \xFAltimas melhorias e corre\xE7\xF5es."
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs(
                  Button,
                  {
                    onClick: updateServiceWorker,
                    size: "sm",
                    className: cn(
                      "w-full font-mono font-bold",
                      "bg-secondary text-secondary-foreground hover:bg-secondary-hover"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.RefreshCw, { className: "h-3 w-3 mr-2" }),
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
function LoadingScreen({ progress, currentStep }) {
  const [displayedProgress, setDisplayedProgress] = React12.useState(0);
  const [stars, setStars] = React12.useState([]);
  const [mounted, setMounted] = React12.useState(false);
  const { theme, systemTheme } = nextThemes.useTheme();
  React12.useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = mounted ? theme === "system" ? systemTheme : theme : "light";
  const isDark = currentTheme === "dark";
  const primaryColor = isDark ? designTokens.tokens.primitives.color.blue["400"] : designTokens.tokens.primitives.color.blue["600"];
  const secondaryColor = isDark ? designTokens.tokens.primitives.color.purple["400"] : designTokens.tokens.primitives.color.purple["600"];
  const accentColor = isDark ? designTokens.tokens.primitives.color.red["400"] : designTokens.tokens.primitives.color.red["600"];
  const primaryRGB = hexToRGB(primaryColor);
  const secondaryRGB = hexToRGB(secondaryColor);
  React12.useEffect(() => {
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
  React12.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute inset-0 overflow-hidden", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0", children: stars.map((star) => /* @__PURE__ */ jsxRuntime.jsx(
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
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20",
              style: {
                background: `radial-gradient(circle, rgba(${primaryRGB}, 0.3), transparent)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
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
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center space-y-8 px-4", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "relative flex items-center justify-center",
              "aria-hidden": "true",
              suppressHydrationWarning: true,
              children: /* @__PURE__ */ jsxRuntime.jsx(
                reactLoadingIndicators.Atom,
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
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center space-y-4", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
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
            progressValue !== void 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-64 sm:w-80 space-y-2", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: "h-1 bg-muted rounded-full overflow-hidden border",
                  style: {
                    borderColor: `${primaryColor}33`
                  },
                  children: /* @__PURE__ */ jsxRuntime.jsx(
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
              /* @__PURE__ */ jsxRuntime.jsxs(
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
          /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              className: "absolute inset-0 overflow-hidden pointer-events-none opacity-20",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    className: "absolute top-0 left-1/4 font-mono text-xs animate-pulse",
                    style: { color: `${primaryColor}4D` },
                    children: "01001001"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
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
                /* @__PURE__ */ jsxRuntime.jsx(
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
        /* @__PURE__ */ jsxRuntime.jsx("style", { children: `
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
function PageHeader({ title, description, children }) {
  return (
    /**
     * Container principal do header
     *
     * Utiliza SECTION_CLASSES.container para padding e layout responsivos
     * - relative z-10: fica acima de backgrounds e partículas
     */
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: `${SECTION_CLASSES.container} relative z-10`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center mb-12", children: [
      children && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative mb-8", children }),
      /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-cyan-200 dark:font-mono dark:tracking-wider", children: title }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-24 h-1 bg-linear-to-r from-primary to-primary dark:from-cyan-400 dark:to-purple-400 mx-auto mb-6" }),
      description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-muted-foreground dark:text-gray-300 text-lg max-w-2xl mx-auto dark:font-mono px-2", children: description })
    ] }) })
  );
}
function TokensDemo() {
  const [mounted, setMounted] = React12.useState(false);
  React12.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const neonCyan = "#60a5fa";
  const neonPurple = "#c084fc";
  const neonPink = "#ef4444";
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-6 p-6", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { children: "Design Tokens - Cores" }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-cyan-400/30",
              style: { backgroundColor: neonCyan }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-purple-400/30",
              style: { backgroundColor: neonPurple }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-pink-400/30",
              style: { backgroundColor: neonPink }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-muted-foreground", children: "Cores neon: Cyan, Purple, Pink" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { children: "Design Tokens - Espa\xE7amentos" }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-2 bg-primary rounded", style: { width: "16px" } }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-2 bg-primary rounded", style: { width: "24px" } }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-2 bg-primary rounded", style: { width: "32px" } }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-2 bg-primary rounded", style: { width: "48px" } })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-muted-foreground", children: "Espa\xE7amentos: xs, sm, md, lg" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { children: "Design Tokens - Tipografia" }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs", children: "Texto xs (12px)" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm", children: "Texto sm (14px)" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-base", children: "Texto base (16px)" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-lg", children: "Texto lg (18px)" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xl", children: "Texto xl (20px)" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-muted-foreground", children: "Tamanhos de fonte dispon\xEDveis" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { children: "Design Tokens - Raios" }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-4 items-end", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-8 h-8 bg-primary rounded-sm" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-8 h-8 bg-primary rounded" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-8 h-8 bg-primary rounded-md" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-8 h-8 bg-primary rounded-lg" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-8 h-8 bg-primary rounded-full" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-muted-foreground", children: "Raios: sm, default, md, lg, full" })
      ] })
    ] })
  ] });
}
var VisuallyHidden = React12__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var kbdVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded border font-mono text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground shadow-sm",
        outline: "border-border bg-transparent text-foreground",
        filled: "border-border bg-muted text-foreground",
        ghost: "border-transparent bg-transparent text-muted-foreground",
        neon: "neon-border bg-background text-primary dark:shadow-glow-cyan"
      },
      size: {
        xs: "h-5 px-1.5 text-[10px]",
        sm: "h-6 px-2 text-xs",
        md: "h-7 px-2.5 text-xs",
        lg: "h-8 px-3 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm"
    }
  }
);
var Kbd = React12__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "sm",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "kbd",
      {
        ref,
        className: cn(kbdVariants({ variant, size }), className),
        ...props,
        children
      }
    );
  }
);
Kbd.displayName = "Kbd";
var KbdCombo = React12__namespace.forwardRef(
  ({
    className,
    keys,
    separator = "+",
    size = "sm",
    variant = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("flex items-center gap-1", className),
        ...props,
        children: keys.map((key, index) => /* @__PURE__ */ jsxRuntime.jsxs(React12__namespace.Fragment, { children: [
          index > 0 && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground text-xs font-normal", children: separator }),
          /* @__PURE__ */ jsxRuntime.jsx(Kbd, { size, variant, children: key })
        ] }, index))
      }
    );
  }
);
KbdCombo.displayName = "KbdCombo";
var KeyboardShortcuts = {
  // Windows/Linux
  CtrlC: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "C"] }),
  CtrlV: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "V"] }),
  CtrlX: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "X"] }),
  CtrlZ: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "Z"] }),
  CtrlY: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "Y"] }),
  CtrlA: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "A"] }),
  CtrlS: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "S"] }),
  CtrlF: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "F"] }),
  CtrlP: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "P"] }),
  Delete: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Delete" }),
  Enter: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Enter" }),
  Esc: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Esc" }),
  Space: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Space" }),
  Tab: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Tab" }),
  ShiftTab: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Shift", "Tab"] }),
  AltTab: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Alt", "Tab"] }),
  // macOS
  CmdC: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "C"] }),
  CmdV: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "V"] }),
  CmdX: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "X"] }),
  CmdZ: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "Z"] }),
  CmdShiftZ: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "Shift", "Z"] }),
  CmdA: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "A"] }),
  CmdS: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "S"] }),
  CmdF: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "F"] }),
  CmdP: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "P"] }),
  CmdSpace: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "Space"] }),
  OptionTab: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2325", "Tab"] }),
  // Setas
  ArrowUp: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "\u2191" }),
  ArrowDown: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "\u2193" }),
  ArrowLeft: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "\u2190" }),
  ArrowRight: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "\u2192" }),
  // Função
  F1: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F1" }),
  F2: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F2" }),
  F3: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F3" }),
  F4: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F4" }),
  F5: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F5" }),
  F6: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F6" }),
  F7: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F7" }),
  F8: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F8" }),
  F9: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F9" }),
  F10: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F10" }),
  F11: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F11" }),
  F12: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F12" })
};
var codeVariants = classVarianceAuthority.cva(
  "rounded-md font-mono text-sm",
  {
    variants: {
      variant: {
        inline: "bg-muted px-1.5 py-0.5 text-[13px]",
        block: "bg-muted p-4 text-sm",
        ghost: "bg-transparent px-1.5 py-0.5 text-[13px]",
        neon: "bg-primary/10 text-primary px-1.5 py-0.5 text-[13px] dark:bg-primary/20",
        success: "bg-emerald-100 text-emerald-800 px-1.5 py-0.5 text-[13px] dark:bg-emerald-900/20 dark:text-emerald-400",
        warning: "bg-amber-100 text-amber-800 px-1.5 py-0.5 text-[13px] dark:bg-amber-900/20 dark:text-amber-400",
        error: "bg-red-100 text-red-800 px-1.5 py-0.5 text-[13px] dark:bg-red-900/20 dark:text-red-400"
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: {
      variant: "inline",
      size: "sm"
    }
  }
);
var Code = React12__namespace.forwardRef(
  ({
    className,
    variant = "inline",
    size = "sm",
    language,
    showCopy = false,
    wrap = false,
    startLine = 1,
    showLineNumbers = false,
    children,
    ...props
  }, ref) => {
    const [copied, setCopied] = React12__namespace.useState(false);
    const codeRef = React12__namespace.useRef(null);
    const handleCopy = React12__namespace.useCallback(async () => {
      if (codeRef.current) {
        const text = codeRef.current.textContent || "";
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2e3);
      }
    }, []);
    if (variant === "inline" || variant === "ghost" || variant === "neon" || variant === "success" || variant === "warning" || variant === "error") {
      return /* @__PURE__ */ jsxRuntime.jsx(
        "code",
        {
          ref,
          className: cn(codeVariants({ variant, size }), className),
          ...props,
          children
        }
      );
    }
    const codeString = typeof children === "string" ? children : String(children);
    const lines = codeString.split("\n");
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative group", children: [
      (language || showCopy) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50 rounded-t-md", children: [
        language && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium text-muted-foreground uppercase", children: language }),
        showCopy && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 px-2 text-xs",
            onClick: handleCopy,
            children: copied ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(Check2__default.default, { className: "h-3 w-3 mr-1" }),
              "Copiado!"
            ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(Copy__default.default, { className: "h-3 w-3 mr-1" }),
              "Copiar"
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "pre",
        {
          className: cn(
            codeVariants({ variant: "block", size }),
            wrap && "whitespace-pre-wrap break-all",
            !showLineNumbers && "overflow-x-auto",
            language && !showCopy && "rounded-t-md border-t border-border",
            className
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx("code", { ref, ...props, children: showLineNumbers ? /* @__PURE__ */ jsxRuntime.jsx("table", { className: "w-full", children: /* @__PURE__ */ jsxRuntime.jsx("tbody", { children: lines.map((line, index) => /* @__PURE__ */ jsxRuntime.jsxs("tr", { className: "hover:bg-muted/50", children: [
            /* @__PURE__ */ jsxRuntime.jsx("td", { className: "sticky left-0 w-12 px-3 py-0 text-right text-muted-foreground select-none bg-muted/50", children: startLine + index }),
            /* @__PURE__ */ jsxRuntime.jsx("td", { className: "px-0 py-0", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "block px-4 py-0", children: line || "\xA0" }) })
          ] }, index)) }) }) : children })
        }
      )
    ] });
  }
);
Code.displayName = "Code";
var CodeInline = React12__namespace.forwardRef(
  ({
    className,
    color = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Code,
      {
        ref,
        variant: color,
        className,
        ...props
      }
    );
  }
);
CodeInline.displayName = "CodeInline";
var CodeBlock = React12__namespace.forwardRef(
  ({
    className,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Code,
      {
        ref,
        variant: "block",
        className,
        ...props
      }
    );
  }
);
CodeBlock.displayName = "CodeBlock";
var quoteVariants = classVarianceAuthority.cva(
  "relative border-l-4 pl-6 italic",
  {
    variants: {
      variant: {
        default: "border-border",
        muted: "border-muted",
        primary: "border-primary",
        secondary: "border-secondary",
        success: "border-emerald-500",
        warning: "border-amber-500",
        error: "border-red-500",
        testimonial: "border-transparent bg-muted/30 rounded-lg p-6",
        card: "border-border bg-card rounded-lg p-6 shadow-sm",
        glass: "glass border-transparent rounded-lg p-6",
        neon: "neon-border rounded-lg p-6"
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Quote = React12__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    author,
    source,
    sourceUrl,
    showIcon = false,
    icon,
    iconPosition = "top",
    children,
    ...props
  }, ref) => {
    const IconComponent = icon || (variant === "testimonial" || variant === "card" ? /* @__PURE__ */ jsxRuntime.jsx(QuoteIcon__default.default, { className: "h-8 w-8 text-primary/20" }) : /* @__PURE__ */ jsxRuntime.jsx(QuoteIcon__default.default, { className: "h-4 w-4 text-muted-foreground" }));
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "blockquote",
      {
        ref,
        className: cn(
          quoteVariants({ variant, size }),
          (variant === "testimonial" || variant === "card" || variant === "glass" || variant === "neon") && "border-l-0",
          className
        ),
        ...props,
        children: [
          showIcon && iconPosition === "top" && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute -top-2 -left-2", children: IconComponent }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative", children }),
          (author || source) && /* @__PURE__ */ jsxRuntime.jsxs("footer", { className: "mt-4 not-italic", children: [
            author && /* @__PURE__ */ jsxRuntime.jsx("cite", { className: "font-semibold not-italic text-foreground", children: author }),
            source && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              author && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground mx-2", children: "\u2022" }),
              sourceUrl ? /* @__PURE__ */ jsxRuntime.jsx(
                "a",
                {
                  href: sourceUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-muted-foreground hover:text-foreground underline",
                  children: source
                }
              ) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground", children: source })
            ] })
          ] }),
          showIcon && iconPosition === "bottom" && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute -bottom-2 -right-2", children: IconComponent })
        ]
      }
    );
  }
);
Quote.displayName = "Quote";
var QuoteTestimonial = React12__namespace.forwardRef(
  ({
    className,
    author,
    source,
    avatar,
    rating,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("bg-card rounded-lg p-6 shadow-sm", className), children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Quote,
        {
          ref,
          variant: "testimonial",
          author,
          source,
          showIcon: true,
          ...props,
          children
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mt-4", children: [
        avatar && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "img",
            {
              src: avatar,
              alt: author,
              className: "h-10 w-10 rounded-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            author && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-semibold text-foreground", children: author }),
            source && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-muted-foreground", children: source })
          ] })
        ] }),
        rating && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex gap-0.5", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: cn(
              "text-lg",
              i < rating ? "text-amber-400" : "text-muted-foreground/30"
            ),
            children: "\u2605"
          },
          i
        )) })
      ] })
    ] });
  }
);
QuoteTestimonial.displayName = "QuoteTestimonial";
var QuoteBlock = React12__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative my-8 py-8", children: /* @__PURE__ */ jsxRuntime.jsx(
      Quote,
      {
        ref,
        variant: "default",
        size: "xl",
        className: cn(
          "text-center border-l-0 border-r-0 border-t-2 border-b-2 border-border py-8",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-2xl md:text-3xl font-normal text-muted-foreground", children })
      }
    ) });
  }
);
QuoteBlock.displayName = "QuoteBlock";
var ASPECT_RATIOS = {
  square: "1/1",
  video: "16/9",
  widescreen: "21/9",
  cinema: "2.39/1",
  portrait: "3/4",
  golden: "1.618/1",
  post: "4/5",
  story: "9/16"
};
var aspectRatioBoxVariants = classVarianceAuthority.cva(
  "relative w-full overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        bordered: "border border-border rounded-md",
        rounded: "rounded-lg",
        card: "border border-border rounded-lg shadow-sm",
        glass: "glass rounded-lg",
        neon: "neon-border rounded-lg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var AspectRatioBox = React12__namespace.forwardRef(
  ({
    className,
    variant = "default",
    ratio,
    children,
    objectFit = "cover",
    ...props
  }, ref) => {
    const resolvedRatio = React12__namespace.useMemo(() => {
      if (typeof ratio === "string" && ratio in ASPECT_RATIOS) {
        return ASPECT_RATIOS[ratio];
      }
      return ratio;
    }, [ratio]);
    const paddingBottom = React12__namespace.useMemo(() => {
      const [width, height] = resolvedRatio.split("/").map(Number);
      return `${height / width * 100}%`;
    }, [resolvedRatio]);
    const objectFitClasses = {
      cover: "absolute inset-0 w-full h-full object-cover",
      contain: "absolute inset-0 w-full h-full object-contain",
      fill: "absolute inset-0 w-full h-full"
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(aspectRatioBoxVariants({ variant }), className),
        style: { paddingBottom },
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0", children: React12__namespace.isValidElement(children) ? React12__namespace.cloneElement(children, {
          className: cn(
            objectFitClasses[objectFit],
            children.props.className
          )
        }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(objectFitClasses[objectFit]), children }) })
      }
    );
  }
);
AspectRatioBox.displayName = "AspectRatioBox";
var AspectRatioImage = React12__namespace.forwardRef(
  ({
    className,
    ratio = "square",
    variant = "default",
    src,
    alt,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(AspectRatioBox, { ratio, variant, children: /* @__PURE__ */ jsxRuntime.jsx(
      "img",
      {
        ref,
        src,
        alt,
        className: "w-full h-full object-cover",
        ...props
      }
    ) });
  }
);
AspectRatioImage.displayName = "AspectRatioImage";
var AspectRatioVideo = React12__namespace.forwardRef(
  ({
    className,
    ratio = "video",
    variant = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(AspectRatioBox, { ratio, variant, children: /* @__PURE__ */ jsxRuntime.jsx(
      "video",
      {
        ref,
        className: "w-full h-full object-cover",
        ...props
      }
    ) });
  }
);
AspectRatioVideo.displayName = "AspectRatioVideo";
var AspectRatioIframe = React12__namespace.forwardRef(
  ({
    className,
    ratio = "video",
    variant = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(AspectRatioBox, { ratio, variant, children: /* @__PURE__ */ jsxRuntime.jsx(
      "iframe",
      {
        ref,
        className: "w-full h-full",
        ...props
      }
    ) });
  }
);
AspectRatioIframe.displayName = "AspectRatioIframe";
var centerVariants = classVarianceAuthority.cva(
  "flex",
  {
    variants: {
      direction: {
        both: "items-center justify-center",
        horizontal: "justify-center",
        vertical: "items-center"
      },
      inline: {
        true: "inline-flex",
        false: "flex"
      }
    },
    defaultVariants: {
      direction: "both",
      inline: false
    }
  }
);
var Center = React12__namespace.forwardRef(
  ({
    className,
    direction = "both",
    inline = false,
    fullHeight = false,
    fullWidth = false,
    padding,
    minSize,
    style,
    children,
    ...props
  }, ref) => {
    const centerStyle = React12__namespace.useMemo(() => {
      const customStyle = { ...style };
      if (padding !== void 0) {
        customStyle.padding = typeof padding === "number" ? `${padding}px` : padding;
      }
      if (minSize !== void 0) {
        customStyle.minWidth = typeof minSize === "number" ? `${minSize}px` : minSize;
        customStyle.minHeight = typeof minSize === "number" ? `${minSize}px` : minSize;
      }
      return customStyle;
    }, [style, padding, minSize]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          centerVariants({ direction, inline }),
          fullHeight && "min-h-screen",
          fullWidth && "w-full",
          className
        ),
        style: centerStyle,
        ...props,
        children
      }
    );
  }
);
Center.displayName = "Center";
var CenterInline = React12__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Center,
      {
        ref,
        inline: true,
        ...props
      }
    );
  }
);
CenterInline.displayName = "CenterInline";
var CenterScreen = React12__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Center,
      {
        ref,
        fullHeight: true,
        fullWidth: true,
        direction: "both",
        ...props
      }
    );
  }
);
CenterScreen.displayName = "CenterScreen";
var CenterText = React12__namespace.forwardRef(
  ({
    className,
    align = "center",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("text-center", className),
        style: { textAlign: align },
        ...props,
        children
      }
    );
  }
);
CenterText.displayName = "CenterText";

exports.ASPECT_RATIOS = ASPECT_RATIOS;
exports.AspectRatioBox = AspectRatioBox;
exports.AspectRatioIframe = AspectRatioIframe;
exports.AspectRatioImage = AspectRatioImage;
exports.AspectRatioVideo = AspectRatioVideo;
exports.BackToTop = BackToTop;
exports.Center = Center;
exports.CenterInline = CenterInline;
exports.CenterScreen = CenterScreen;
exports.CenterText = CenterText;
exports.Code = Code;
exports.CodeBlock = CodeBlock;
exports.CodeInline = CodeInline;
exports.CookieBanner = CookieBanner;
exports.InstallPrompt = InstallPrompt;
exports.Kbd = Kbd;
exports.KbdCombo = KbdCombo;
exports.KeyboardShortcuts = KeyboardShortcuts;
exports.LoadingScreen = LoadingScreen;
exports.PageHeader = PageHeader;
exports.Quote = Quote;
exports.QuoteBlock = QuoteBlock;
exports.QuoteTestimonial = QuoteTestimonial;
exports.ThemeToggle = ThemeToggle;
exports.TokensDemo = TokensDemo;
exports.UpdateNotification = UpdateNotification;
exports.VisuallyHidden = VisuallyHidden;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map