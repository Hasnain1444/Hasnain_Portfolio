import { motion } from 'framer-motion'
import { FaBrain, FaCode, FaDatabase, FaRobot } from 'react-icons/fa'

const About = () => {
  const cards = [
    {
      title: 'GenAI & LLMs',
      icon: FaBrain,
      description: 'Building LLM apps with prompt engineering, local models, and evaluation-minded workflows',
    },
    {
      title: 'Python & Backend',
      icon: FaCode,
      description: 'Strong Python fundamentals with REST APIs, OOP, debugging, and clean software practices',
    },
    {
      title: 'Data & ML',
      icon: FaDatabase,
      description: 'Hands-on ML with Pandas, NumPy, Scikit-learn, and foundations in NLP and neural networks',
    },
    {
      title: 'AI Systems',
      icon: FaRobot,
      description: 'Shipping AI features into real products — scoring pipelines, document intelligence, and APIs',
    },
  ]

  const techTags = [
    'Python',
    'LLMs',
    'Prompt Engineering',
    'Ollama',
    'Machine Learning',
    'REST APIs',
    'Node.js',
    'PostgreSQL',
    'React',
    'Docker',
  ]

  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 lg:mb-20 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Building Intelligent Systems,
          <br />
          <span className="text-gradient">One Model at a Time</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              I'm a Computer Science graduate and AI Engineer focused on Generative AI and LLM-based
              applications. I build practical systems that use models for scoring, extraction, and
              decision support — then ship them behind solid APIs and product UX.
            </p>

            <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
              Recently I've been developing an AI recruitment platform with a locally hosted LLM
              (Ollama) for CV screening, and contributing to AI-powered product design. I care about
              clear prompts, measurable outputs, and software that teams can actually run and trust.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {techTags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 rounded-full glass text-sm text-gray-300 border border-accent-blue/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                    boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                className="glass-card p-6 lg:p-8 rounded-2xl cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
                }}
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors">
                  <card.icon className="text-2xl lg:text-3xl text-accent-blue" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
