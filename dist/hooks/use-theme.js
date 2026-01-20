'use strict';

var React = require('react');
var nextThemes = require('next-themes');

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

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function useTheme() {
  const { theme, resolvedTheme, setTheme } = nextThemes.useTheme();
  const toggle = React__namespace.useCallback(() => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  }, [theme, resolvedTheme, setTheme]);
  const setLight = React__namespace.useCallback(() => {
    setTheme("light");
  }, [setTheme]);
  const setDark = React__namespace.useCallback(() => {
    setTheme("dark");
  }, [setTheme]);
  const setSystem = React__namespace.useCallback(() => {
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

exports.useTheme = useTheme;
//# sourceMappingURL=use-theme.js.map
//# sourceMappingURL=use-theme.js.map