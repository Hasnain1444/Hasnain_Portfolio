import { motion } from 'framer-motion'
import { FaBrain, FaServer, FaComments, FaCode, FaChartLine } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      title: 'GenAI / LLM Apps',
      description:
        'Building LLM-powered features for scoring, extraction, and generation — with clear prompts and measurable outputs.',
      icon: FaBrain,
    },
    {
      title: 'API Integration',
      description:
        'Connecting AI capabilities to backend systems via REST APIs so models become reliable product features.',
      icon: FaServer,
    },
    {
      title: 'Prompt Engineering',
      description:
        'Designing and iterating prompts for accuracy, cost, and consistency across assessment and screening workflows.',
      icon: FaComments,
    },
    {
      title: 'Full-Stack Delivery',
      description:
        'Shipping end-to-end systems with React, Node.js, databases, and Docker so AI features reach real users.',
      icon: FaCode,
    },
    {
      title: 'ML Experimentation',
      description:
        'Exploring models, evaluating outputs, and turning research into practical prototypes with Python and Jupyter.',
      icon: FaChartLine,
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
          What I <span className="text-gradient">Build</span>
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
