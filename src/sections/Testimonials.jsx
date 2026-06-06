
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      avatar: 'SJ',
      rating: 5,
      text: 'Exceptional work! Muhammad delivered beyond our expectations. His attention to detail and technical expertise made our project a huge success.',
    },
    {
      name: 'David Chen',
      role: 'Product Manager, InnovateCo',
      avatar: 'DC',
      rating: 5,
      text: 'Working with Muhammad was a fantastic experience. He understood our vision perfectly and translated it into a beautiful, functional application.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, DesignHub',
      avatar: 'ER',
      rating: 5,
      text: 'Muhammad is incredibly talented and professional. He created a stunning portfolio that perfectly showcases my work. Highly recommended!',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Client <span className="text-gradient">Testimonials</span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 lg:p-12 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-accent-blue text-lg" />
                ))}
              </div>

              <div className="relative">
                <FaQuoteLeft className="text-accent-blue/20 text-4xl mb-4" />
                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed pl-12">
                  {testimonials[currentIndex].text}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent-blue w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials