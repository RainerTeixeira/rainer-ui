"use client"
"use client";
import { jsx } from "react/jsx-runtime";
import { ThemeProvider as NextThemesProvider } from "next-themes";
function ThemeProvider({ children, ...props }) {
  return /* @__PURE__ */ jsx(
    NextThemesProvider,
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
export {
  ThemeProvider
};
//# sourceMappingURL=theme-provider.mjs.map