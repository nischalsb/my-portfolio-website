import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-black"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg leading-relaxed text-justify">
                I'm a Computer Science student at the University of Wisconsin-Madison, pursuing my Bachelor's 
                degree with an expected graduation in May 2027. As a King Morgridge Scholar with a full-ride 
                scholarship, I'm committed to academic excellence and making a meaningful impact through technology.
              </p>
              
              <p className="text-lg leading-relaxed text-justify">
                My passion lies at the intersection of AI and web development. Currently, I'm conducting research 
                under Dr. Mayra I. Oyola Merced at the Department of Atmospheric and Oceanic Sciences, where I'm 
                building predictive AI models to forecast Clear Air Turbulence over Nepalese airspace using NASA 
                MERRA-2 data.
              </p>
              
              <p className="text-lg leading-relaxed text-justify">
                Beyond research, I love building full-stack applications that solve real problems. From productivity 
                apps to multilingual platforms, I enjoy the challenge of creating scalable, user-friendly solutions 
                that make a difference in people's lives.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">What I Value</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'AI & Machine Learning',
                  'Full Stack Development',
                  'Research & Innovation',
                  'User-Centered Design',
                  'Open Source',
                  'Academic Excellence'
                ].map((value, index) => (
                  <motion.div
                    key={value}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Resume Display */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-full border border-gray-200"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              >
                {/* Resume Image */}
                <div className="mb-4">
                  <img
                    src="/assets/resume.jpg"
                    alt="Nischal Singh Bista Resume"
                    className="w-full h-auto rounded-lg shadow-sm transform scale-200"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Download Button */}
                <div className="pt-2">
                  <button className="w-full bg-black text-white py-2 px-4 rounded text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                    Download Resume
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 