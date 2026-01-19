import { createContext, useState, useEffect, useContext } from 'react';
import { jsx } from 'react/jsx-runtime';

var TokensContext = createContext(void 0);
function TokensProvider({ tokens: initialTokens, children }) {
  const [tokens, setTokens] = useState(initialTokens);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
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
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(TokensContext.Provider, { value, children });
}
function useTokens() {
  const context = useContext(TokensContext);
  if (context === void 0) {
    throw new Error("useTokens must be used within a TokensProvider");
  }
  return context;
}

export { TokensProvider, useTokens };
//# sourceMappingURL=tokens-provider.mjs.map
//# sourceMappingURL=tokens-provider.mjs.map