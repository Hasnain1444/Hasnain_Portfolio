
import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

const SkillBar = ({ name, percentage, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(percentage), delay)
      return () => clearTimeout(timer)
    }
  }, [isInView, percentage, delay])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-accent-blue text-sm font-semibold">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan"
          style={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React / Next.js', percentage: 95 },
        { name: 'TypeScript', percentage: 90 },
        { name: 'Tailwind CSS', percentage: 92 },
        { name: 'Framer Motion', percentage: 88 },
        { name: 'HTML / CSS', percentage: 95 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', percentage: 85 },
        { name: 'Express.js', percentage: 82 },
        { name: 'MongoDB', percentage: 80 },
        { name: 'PostgreSQL', percentage: 78 },
        { name: 'REST APIs', percentage: 88 },
      ],
    },
    {
      title: 'UI Design',
      skills: [
        { name: 'Figma', percentage: 90 },
        { name: 'Adobe XD', percentage: 85 },
        { name: 'Responsive Design', percentage: 95 },
        { name: 'User Research', percentage: 82 },
        { name: 'Prototyping', percentage: 88 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & <span className="text-gradient">Expertise</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-gray-700">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={skillIndex * 100 + categoryIndex * 200}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills