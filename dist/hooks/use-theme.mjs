import * as React from 'react';
import { useTheme as useTheme$1 } from 'next-themes';

function useTheme() {
  const { theme, resolvedTheme, setTheme } = useTheme$1();
  const toggle = React.useCallback(() => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  }, [theme, resolvedTheme, setTheme]);
  const setLight = React.useCallback(() => {
    setTheme("light");
  }, [setTheme]);
  const setDark = React.useCallback(() => {
    setTheme("dark");
  }, [setTheme]);
  const setSystem = React.useCallback(() => {
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

export { useTheme };
//# sourceMappingURL=use-theme.mjs.map
//# sourceMappingURL=use-theme.mjs.map