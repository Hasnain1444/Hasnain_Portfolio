import { useMemo } from 'react'

const AnimatedBackground = () => {

  // Memoize particles so they don't recreate on every render
  const particles = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    })), []
  )

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <div className="absolute inset-0" style={{ background: 'var(--primary)' }} />

      {/* Two ambient gradient blobs instead of four — reduced blur */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Reduced particles: 15 instead of 50, simpler animations */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: 'var(--accent-blue)',
            opacity: 0.2,
            animation: `particleFade ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes particleFade {
          0%, 100% { opacity: 0.1; transform: translateY(0); }
          50% { opacity: 0.3; transform: translateY(-15px); }
        }
      `}</style>
    </div>
  )
}

export default AnimatedBackground
