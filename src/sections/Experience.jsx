
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'UI/UX Designer',
      company: 'Solexes (Pvt) Ltd.',
      date: 'Feb 2026 – Present',
      description: 'Designing intuitive and user-centered web and mobile experiences while contributing to AI-powered product development.',
      responsibilities: [
        'Created wireframes, user flows, and high-fidelity prototypes for web and mobile applications',
        'Designed responsive and accessible interfaces that improved usability and user engagement',
        'Collaborated closely with developers to ensure accurate implementation of design systems and UI components',
        'Conducted user experience improvements through usability testing, feedback analysis, and iterative design processes',
      ],
      technologies: ['Figma', 'UI/UX Design', 'Product Design','Wireframing','Prototyping','Design Systems','User Research','Responsive Design'],
    },
    {
  title: 'Mobile Application Developer',
  company: 'CMGL | Coopers & McGil',
  date: 'Jun 2025 - Aug 2025',
  description: 'Collaborated on the development of modern mobile applications, combining React Native development with user-centered design principles to deliver engaging digital experiences.',
  responsibilities: [
    'Built responsive and high-performance mobile application interfaces using React Native',
    'Translated Figma designs into production-ready mobile screens',
    'Worked closely with cross-functional teams to enhance user experience and application usability',
    'Implemented frontend features and optimized application workflows',
    'Contributed to agile development processes and technical solution discussions',
  ],
  technologies: ['React Native', 'Expo', 'JavaScript', 'Figma', 'Git'],
},
   {
  title: 'Computer Operator & Web Developer',
  company: 'Socialedge (SMC-Private) Limited',
  date: '2024 - 2025',
  description: 'Contributed to the development and maintenance of digital solutions while managing technical operations and supporting business-critical systems.',
  responsibilities: [
    'Built and maintained web applications with a focus on performance and usability',
    'Monitored and managed computer systems to ensure uninterrupted operations',
    'Collaborated with cross-functional teams to design and implement technical solutions',
    'Diagnosed and resolved technical issues, improving system reliability and efficiency',
    'Performed software maintenance, updates, and optimization to enhance application performance',
  ],
  technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Git'],
},
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-purple transform md:-translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-blue rounded-full transform -translate-x-1/2 mt-6 z-10 shadow-glow">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent-blue"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <motion.div
                    className="glass-card p-6 lg:p-8 rounded-2xl"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)',
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-accent-blue font-semibold text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                        {exp.date}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-accent-blue mt-1.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs text-accent-blue"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience