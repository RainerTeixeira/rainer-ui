'use strict';

var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

var TokensContext = react.createContext(void 0);
function TokensProvider({ tokens: initialTokens, children }) {
  const [tokens, setTokens] = react.useState(initialTokens);
  const [theme, setTheme] = react.useState("light");
  react.useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => {
      const isDark = root.classList.contains("dark") || root.dataset.theme === "dark";
      setTheme(isDark ? "dark" : "light");
    };
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class", "data-theme"] });
    return () => observer.disconnect();
  }, []);
  const themedTokens = react.useMemo(() => {
    if (!tokens) return void 0;
    return tokens?.themes?.[theme] ?? tokens?.[`${theme}Theme`] ?? tokens;
  }, [tokens, theme]);
  react.useEffect(() => {
    if (themedTokens) {
      const root = document.documentElement;
      if (themedTokens.color) {
        const applyColorVars = (value2, path) => {
          if (typeof value2 === "string") {
            root.style.setProperty(`--color-${path.join("-")}`, value2);
            return;
          }
          if (value2 && typeof value2 === "object") {
            Object.entries(value2).forEach(([k, v]) => {
              applyColorVars(v, [...path, k]);
            });
          }
        };
        Object.entries(themedTokens.color).forEach(([key, value2]) => {
          applyColorVars(value2, [key]);
        });
      }
      Object.entries(themedTokens).forEach(([category, categoryTokens]) => {
        if (category !== "color" && typeof categoryTokens === "object") {
          Object.entries(categoryTokens).forEach(([key, value2]) => {
            if (typeof value2 === "string") {
              root.style.setProperty(`--${category}-${key}`, value2);
            }
          });
        }
      });
      root.style.setProperty("color-scheme", theme);
    }
  }, [themedTokens, theme]);
  react.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);
  const value = {
    tokens,
    setTokens,
    theme,
    setTheme
  };
  return /* @__PURE__ */ jsxRuntime.jsx(TokensContext.Provider, { value, children });
}
function useTokens() {
  const context = react.useContext(TokensContext);
  if (context === void 0) {
    throw new Error("useTokens must be used within a TokensProvider");
  }
  return context;
}

exports.TokensProvider = TokensProvider;
exports.useTokens = useTokens;
//# sourceMappingURL=tokens-provider.js.map
//# sourceMappingURL=tokens-provider.js.map