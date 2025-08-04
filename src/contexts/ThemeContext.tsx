import { createContext } from 'react'

export type Theme = 'light' | 'dark'

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const defaultContextValue: ThemeContextType = {
  theme: 'light',
  toggleTheme: () => {},
}

export const ThemeContext = createContext<ThemeContextType>(defaultContextValue)
