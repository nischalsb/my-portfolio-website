import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: 'Research Scholar',
      company: 'Department of Atmospheric and Oceanic Sciences, UW-Madison',
      location: 'Madison, WI',
      period: 'Sep 2024 - Present',
      description: 'Conducting research under Dr. Mayra I. Oyola Merced to build predictive AI models for forecasting Clear Air Turbulence over Nepalese airspace, processing 10+ years of NASA MERRA-2 reanalysis data (500GB+).',
      achievements: [
        'Built AI models achieving 15% improvement in prediction accuracy',
        'Created interactive geospatial visualization platform using Python ecosystem',
        'Engineered Random Forest and SVM algorithms with custom feature extraction'
      ]
    },
    {
      title: 'Data Analyst Intern',
      company: 'African Languages Lab',
      location: 'Remote',
      period: 'Jan 2025 - Apr 2025',
      description: 'Developing scalable Python scripts for cleaning and normalizing multilingual text data across 15+ African languages, implementing custom preprocessing methods.',
      achievements: [
        'Built custom preprocessing for language-specific tokenization',
        'Implemented export-to-PDF tools for dataset documentation',
        'Handled diacritics and script variations across multiple languages'
      ]
    },
    {
      title: 'Software Development Intern',
      company: 'Farm 2 Facts',
      location: 'Madison, WI',
      period: 'Jun 2024 - Aug 2024',
      description: 'Designed and implemented dynamic front-end components using Vue.js with focus on clean, maintainable code architecture and seamless API integration.',
      achievements: [
        'Optimized data management efficiency by 30% through refactoring',
        'Developed multilingual frontend interfaces using i18next framework',
        'Built dynamic language toggles with component reusability'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Educate Nepal Initiative',
      location: 'Kathmandu, Nepal',
      period: 'Apr 2023 - Present',
      description: 'Engineered the redesign and optimization of the NGO\'s website, improving UI/UX and ensuring mobile responsiveness, resulting in a 20% increase in user engagement.',
      achievements: [
        'Increased user engagement by 20% through UI/UX improvements',
        'Boosted search engine visibility by 30% with SEO optimization',
        'Integrated Google Analytics and schema markup for data-driven insights'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section id="experience" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey and the experiences that have shaped my skills and perspective.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-black"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                          <p className="text-lg font-medium text-gray-800">{exp.company}</p>
                        </div>
                        <div className="text-right ml-4 flex-shrink-0">
                          <div className="flex items-center justify-end text-sm text-gray-600 mb-1">
                            <Calendar size={14} className="mr-1" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center justify-end text-sm text-gray-600">
                            <MapPin size={14} className="mr-1" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="font-medium mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-black rounded-full mr-2 mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 