import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }))

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <div className="absolute inset-0" style={{ background: 'var(--primary)' }} />

      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${getComputedStyle(document.documentElement).getPropertyValue('--accent-blue')}26 0%, transparent 70%)`,
          filter: 'blur(80px)',
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${getComputedStyle(document.documentElement).getPropertyValue('--accent-cyan')}1f 0%, transparent 70%)`,
          filter: 'blur(100px)',
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[40%] right-[20%] w-[500px] h-[500px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${getComputedStyle(document.documentElement).getPropertyValue('--accent-purple')}1a 0%, transparent 70%)`,
          filter: 'blur(90px)',
          x: mousePosition.x * 0.4,
          y: mousePosition.y * 0.4,
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[60%] left-[30%] w-[400px] h-[400px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${getComputedStyle(document.documentElement).getPropertyValue('--accent-blue')}14 0%, transparent 70%)`,
          filter: 'blur(70px)',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: 'var(--accent-blue)',
            opacity: 0.3,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${getComputedStyle(document.documentElement).getPropertyValue('--accent-blue')}14 0%, transparent 70%)`,
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground