import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPalette, FaTimes, FaUndo } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { activeTheme, changeTheme, themes } = useTheme()

  const resetToDefault = () => {
    changeTheme('neonBlue')
  }

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass-card flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          boxShadow: '0 0 20px var(--glow)',
        }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <FaTimes className="text-2xl text-white" />
          ) : (
            <FaPalette className="text-2xl" style={{ color: 'var(--accent-blue)' }} />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-80 glass-card rounded-2xl p-6 overflow-hidden"
            style={{
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--border)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            <button
              onClick={resetToDefault}
              className="w-full mb-4 py-3 px-4 rounded-xl glass flex items-center justify-center gap-2 text-sm font-medium cursor-pointer hover:scale-105 transition-all"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text)',
              }}
            >
              <FaUndo />
              Reset to Default
            </button>

            <div className="grid grid-cols-3 gap-3">
              {Object.entries(themes).map(([key, theme]) => (
                <motion.button
                  key={key}
                  onClick={() => changeTheme(key)}
                  className={`relative w-full aspect-square rounded-xl overflow-hidden cursor-pointer transition-all ${
                    activeTheme === key ? 'ring-2 scale-110' : 'hover:scale-105'
                  }`}
                  style={{
                    ringColor: 'var(--accent-blue)',
                    boxShadow: activeTheme === key ? `0 0 20px var(--glow)` : 'none',
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent.blue})`,
                    }}
                  />
                  {activeTheme === key && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ThemeCustomizer