
import { motion } from 'framer-motion'
import { FaCode, FaPaintBrush, FaMobileAlt, FaBullhorn, FaBriefcase } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and performant web applications with modern technologies.',
      icon: FaCode,
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces and experiences.',
      icon: FaPaintBrush,
    },
    {
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications with native-like performance.',
      icon: FaMobileAlt,
    },
    {
      title: 'Branding',
      description: 'Crafting unique brand identities that resonate with your target audience.',
      icon: FaBullhorn,
    },
    {
      title: 'Portfolio Design',
      description: 'Designing stunning portfolios that showcase your work effectively.',
      icon: FaBriefcase,
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-gradient">Services</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group glass-card p-8 lg:p-10 rounded-2xl relative overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 50px rgba(59, 130, 246, 0.3)',
              }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center mb-6 group-hover:from-accent-blue/30 group-hover:to-accent-cyan/30 transition-all duration-300">
                <service.icon className="text-3xl text-accent-blue" />
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent-blue/10 rounded-full blur-3xl group-hover:bg-accent-blue/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services