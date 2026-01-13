'use strict';

var nextThemes = require('next-themes');
var jsxRuntime = require('react/jsx-runtime');

function ThemeProvider({ children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    nextThemes.ThemeProvider,
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

exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=theme-provider.js.map
//# sourceMappingURL=theme-provider.js.map