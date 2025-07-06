import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      title: 'Backend & AI',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Machine Learning', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Data Analysis', level: 85 }
      ]
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Pandas', level: 85 },
        { name: 'Jupyter', level: 80 },
        { name: 'Matplotlib', level: 75 },
        { name: 'Cartopy', level: 70 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section id="skills" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-black h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Years of Experience', value: '2+' },
                { label: 'Projects Completed', value: '15+' },
                { label: 'Research Papers', value: '1+' },
                { label: 'Technologies Used', value: '20+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="space-y-2"
                >
                  <div className="text-2xl sm:text-3xl font-bold font-playfair">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 