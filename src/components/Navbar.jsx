import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleClick = (e, href) => {
    e.preventDefault()

    const element = document.querySelector(href)

    if (element) {
      setActiveSection(href.replace('#', ''))

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-secondary/90 backdrop-blur-xl border-b border-accent-blue/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-xl font-bold text-white cursor-pointer"
          style={{ fontFamily: "'Morgan Strike', sans-serif" }}
          whileHover={{ scale: 1.05 }}
          onClick={(e) => handleClick(e, '#home')}
        >
          <span className="text-gradient">hasnain's portfolio</span>
        </motion.a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, index) => {
            const isActive =
              activeSection === link.href.replace('#', '')

            return (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.08 }}
                className={`relative py-2 px-1 text-sm font-medium cursor-pointer transition-all duration-300 group ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}

                {/* Active Underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-cyan transition-all duration-300 ease-out ${
                    isActive
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </motion.a>
            )
          })}
        </div>

        {/* CTA Button */}
        <motion.button
          className="glow-button px-6 py-2.5 rounded-full text-white font-semibold text-sm whitespace-nowrap"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleClick(e, '#contact')}
        >
          Let's Talk
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar