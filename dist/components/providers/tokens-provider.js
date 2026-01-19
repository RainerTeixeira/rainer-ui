'use strict';

var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

var TokensContext = react.createContext(void 0);
function TokensProvider({ tokens: initialTokens, children }) {
  const [tokens, setTokens] = react.useState(initialTokens);
  const [theme, setTheme] = react.useState("light");
  react.useEffect(() => {
    if (tokens) {
      const root = document.documentElement;
      if (tokens.color) {
        Object.entries(tokens.color).forEach(([key, value2]) => {
          if (typeof value2 === "object") {
            Object.entries(value2).forEach(([subKey, subValue]) => {
              root.style.setProperty(`--color-${key}-${subKey}`, subValue);
            });
          } else {
            root.style.setProperty(`--color-${key}`, value2);
          }
        });
      }
      Object.entries(tokens).forEach(([category, categoryTokens]) => {
        if (category !== "color" && typeof categoryTokens === "object") {
          Object.entries(categoryTokens).forEach(([key, value2]) => {
            if (typeof value2 === "string") {
              root.style.setProperty(`--${category}-${key}`, value2);
            }
          });
        }
      });
    }
  }, [tokens]);
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