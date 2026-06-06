import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion'
import { FaDownload, FaArrowRight, FaEnvelope } from 'react-icons/fa'
import profileImage from '../assets/profile.jpg'

const Counter = ({ value, label }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: 'easeOut' })
    const unsubscribe = rounded.on('change', (v) => {
      setDisplayValue(v)
    })
    return () => {
      animation.stop()
      unsubscribe()
    }
  }, [value])

  return (
    <div className="text-center">
      <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
        {displayValue}+
      </h3>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  )
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [roleIndex, setRoleIndex] = useState(0)
  const containerRef = useRef(null)

  const roles = [
    'UI/UX Designer',
    'Full Stack Developer',
    'React Native Developer',
    'React Developer',
    'Frontend Engineer',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Muhammad
              <br />
              <span className="text-gradient">Hasnain</span>
            </motion.h1>

            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </div>

          <div className="h-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                className="text-xl md:text-2xl text-accent-blue font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
UI/UX Designer & Full-Stack Developer crafting intelligent, user-focused products that blend beautiful design with powerful technology.          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button
              className="glow-button px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleScroll(e, '#projects')}
            >
              View Projects
              <FaArrowRight />
            </motion.button>

            <motion.a
              href="/Muhammad_Hasnain_CV.pdf"
              download="Muhammad_Hasnain_CV.pdf"
              className="px-8 py-4 rounded-full border-2 border-accent-blue text-white font-semibold hover:bg-accent-blue/10 transition-all flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <FaDownload />
            </motion.a>

            <motion.button
              className="px-8 py-4 rounded-full border-2 border-gray-600 text-white font-semibold hover:border-accent-blue hover:text-accent-blue transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleScroll(e, '#contact')}
            >
              Contact Me
              <FaEnvelope />
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Counter value={2} label="Years Experience" />
            <Counter value={15} label="Projects" />
            <Counter value={5} label="Technologies" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border-2 border-accent-blue/30"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <motion.div
            className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border-2 border-accent-cyan/20"
            animate={{ rotate: -360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-accent-blue"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-accent-blue shadow-glow"
                style={{
                  transform: `translateX(${140 + i * 20}px)`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            </motion.div>
          ))}

          <motion.div
            className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full glass-card flex items-center justify-center overflow-hidden"
            animate={{
              boxShadow: [
                '0 0 40px rgba(59, 130, 246, 0.3)',
                '0 0 60px rgba(59, 130, 246, 0.5)',
                '0 0 40px rgba(59, 130, 246, 0.3)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img 
              src={profileImage} 
              alt="Muhammad Hasnain"
              className="w-full h-full object-cover object-top rounded-full scale-90 "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero