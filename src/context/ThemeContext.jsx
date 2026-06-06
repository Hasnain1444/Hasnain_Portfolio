import { createContext, useContext, useState, useEffect } from 'react'
import { themes, fonts } from '../data/themes'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('theme') || 'neonBlue'
  })

  const [activeFont, setActiveFont] = useState(() => {
    return localStorage.getItem('font') || 'Inter'
  })

  useEffect(() => {
    const theme = themes[activeTheme]
    const root = document.documentElement

    root.style.setProperty('--primary', theme.colors.primary)
    root.style.setProperty('--secondary', theme.colors.secondary)
    root.style.setProperty('--accent-blue', theme.colors.accent.blue)
    root.style.setProperty('--accent-cyan', theme.colors.accent.cyan)
    root.style.setProperty('--accent-purple', theme.colors.accent.purple)
    root.style.setProperty('--text', theme.colors.text)
    root.style.setProperty('--text-muted', theme.colors.textMuted)
    root.style.setProperty('--border', theme.colors.border)
    root.style.setProperty('--glow', theme.colors.glow)

    document.body.style.background = theme.colors.primary
    document.body.style.color = theme.colors.text

    localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

  useEffect(() => {
    const font = fonts.find(f => f.name === activeFont)
    if (font) {
      document.documentElement.style.setProperty('--font-family', font.value)
      document.body.style.fontFamily = font.value
    }
    localStorage.setItem('font', activeFont)
  }, [activeFont])

  const changeTheme = (themeName) => {
    setActiveTheme(themeName)
  }

  const changeFont = (fontName) => {
    setActiveFont(fontName)
  }

  return (
    <ThemeContext.Provider value={{ activeTheme, activeFont, changeTheme, changeFont, themes, fonts }}>
      <div style={{ fontFamily: 'var(--font-family)' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)