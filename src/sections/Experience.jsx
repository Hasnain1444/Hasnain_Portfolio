import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'AI & Software Development Intern',
      company: 'National CERT | Technology Development Centre Directorate',
      date: 'Jul 2026 – Present',
      description:
        'Selected for the National CERT Summer Internship Program under the AI & Software Development domain. Building AI-based software for real-world problems with Python and modern engineering practices.',
      responsibilities: [
        'Developing an AI-based software solution using Python and modern software engineering practices',
        'Collaborating with mentors and interns to design, develop, and implement scalable solutions',
        'Working with APIs, databases, Git, and AI concepts across the software development lifecycle',
        'Applying prompt design and model-assisted workflows to practical assessment and screening use cases',
      ],
      technologies: ['Python', 'AI/ML', 'REST APIs', 'Git', 'Databases', 'Software Engineering'],
    },
    {
      title: 'UI/UX Designer',
      company: 'Solexes (Pvt) Ltd.',
      date: 'Feb 2026 – Jul 2026',
      description:
        'Designed intuitive web and mobile experiences while contributing to AI-powered product development, including Docutect AI.',
      responsibilities: [
        'Created wireframes, user flows, and high-fidelity prototypes for web and mobile applications',
        'Designed responsive, accessible interfaces that improved usability and engagement',
        'Collaborated with developers to ship accurate design systems and UI components',
        'Contributed to Docutect AI — an AI-powered documentation intelligence platform',
      ],
      technologies: ['Figma', 'UI/UX Design', 'Product Design', 'Wireframing', 'Prototyping', 'AI Products'],
    },
    {
      title: 'Mobile Application Developer',
      company: 'CMGL | Coopers & McGil',
      date: 'Jun 2025 – Aug 2025',
      description:
        'Built modern mobile application interfaces with React Native and user-centered design for production delivery.',
      responsibilities: [
        'Built responsive, high-performance mobile interfaces using React Native',
        'Translated Figma designs into production-ready mobile screens',
        'Collaborated with cross-functional teams on UX and application workflows',
        'Delivered features on time within agile development processes',
      ],
      technologies: ['React Native', 'Expo', 'JavaScript', 'Figma', 'Git'],
    },
    {
      title: 'Computer Operator & Web Developer',
      company: 'SocialEdge (SMC-Private) Limited',
      date: 'Jun 2025 – Feb 2026',
      description:
        'Developed and maintained digital solutions while managing technical operations and supporting business-critical systems.',
      responsibilities: [
        'Built and maintained web applications focused on performance and usability',
        'Monitored systems to ensure uninterrupted operations',
        'Collaborated on technical solutions across teams',
        'Diagnosed issues and performed maintenance to improve reliability',
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
