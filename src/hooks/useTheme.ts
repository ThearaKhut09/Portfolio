import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import type { ThemeContextType } from '../contexts/ThemeContext'

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  return context
}
