import { useState, useEffect } from 'react'
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
  const [roleIndex, setRoleIndex] = useState(0)

  const roles = [
    'Junior AI Engineer',
    'GenAI / LLM Developer',
    'Python Developer',
    'Full-Stack Developer',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
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
            Computer Science graduate building GenAI and LLM applications — from local LLM
            scoring pipelines to intelligent full-stack systems with Python, REST APIs, and modern ML tools.
          </motion.p>

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
              View AI Projects
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
            <Counter value={1} label="Years in AI/ML" />
            <Counter value={10} label="Projects" />
            <Counter value={12} label="Technologies" />
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

          <div
            className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border-2 border-accent-blue/20"
            style={{ animation: 'heroSpin 25s linear infinite' }}
          />

          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-accent-blue"
              style={{
                top: '50%',
                left: '50%',
                animation: `heroOrbit ${10 + i * 3}s linear infinite`,
              }}
            >
              <div
                className="absolute w-3 h-3 rounded-full bg-accent-blue shadow-glow"
                style={{
                  transform: `translateX(${150 + i * 25}px)`,
                  animation: `heroPulse 2.5s ease-in-out ${i * 0.4}s infinite`,
                }}
              />
            </div>
          ))}

          <style>{`
            @keyframes heroSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes heroOrbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes heroPulse { 0%,100% { opacity: 0.5; transform: translateX(150px) scale(1); } 50% { opacity: 1; transform: translateX(150px) scale(1.2); } }
          `}</style>

          <div
            className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full glass-card flex items-center justify-center overflow-hidden"
            style={{ boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)' }}
          >
            <img
              src={profileImage}
              alt="Muhammad Hasnain"
              className="w-full h-full object-cover object-top rounded-full scale-90 "
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
