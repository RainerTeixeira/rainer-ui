import React, { createContext, useContext, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useThemeProvider() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useThemeProvider must be used within ThemeProvider')
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ backgroundColor: theme === 'light' ? 'var(--color-background-primary)' : 'var(--color-background-inverse)', color: theme === 'light' ? 'var(--color-text-primary)' : 'var(--color-text-inverse)' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
