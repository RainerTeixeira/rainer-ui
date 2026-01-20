import { ThemeProvider as ThemeProvider$1 } from 'next-themes';
import { jsx } from 'react/jsx-runtime';

function ThemeProvider({ children, ...props }) {
  return /* @__PURE__ */ jsx(
    ThemeProvider$1,
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

export { ThemeProvider };
//# sourceMappingURL=theme-provider.mjs.map
//# sourceMappingURL=theme-provider.mjs.map