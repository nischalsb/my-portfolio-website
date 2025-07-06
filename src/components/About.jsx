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
<<<<<<< HEAD
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
=======
            {/* Mountain Sketches */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main Mountain Range */}
              <svg
                width="400"
                height="300"
                viewBox="0 0 400 300"
                className="absolute inset-0 w-full h-auto max-w-lg"
                style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))' }}
              >
                {/* Background Mountains */}
                <path
                  d="M0,250 L50,180 L100,200 L150,150 L200,170 L250,140 L300,160 L350,130 L400,150 L400,300 L0,300 Z"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  opacity="0.3"
                />
                
                {/* Middle Mountains */}
                <path
                  d="M0,280 L40,220 L80,240 L120,190 L160,210 L200,180 L240,200 L280,170 L320,190 L360,160 L400,180 L400,300 L0,300 Z"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  opacity="0.5"
                />
                
                {/* Foreground Mountains */}
                <path
                  d="M0,300 L30,260 L60,280 L90,240 L120,260 L150,220 L180,240 L210,200 L240,220 L270,190 L300,210 L330,180 L360,200 L390,170 L400,190 L400,300 Z"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2.5"
                  opacity="0.7"
                />
                
                {/* Detailed Peak */}
                <path
                  d="M150,220 L180,160 L210,180 L240,140 L270,160 L300,120 L330,140 L360,110 L390,130"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  opacity="0.9"
                />
                
                {/* Small details and texture lines */}
                <path
                  d="M180,160 L185,170 M240,140 L245,150 M300,120 L305,130 M360,110 L365,120"
                  stroke="#000"
                  strokeWidth="1"
                  opacity="0.6"
                />
                
                {/* Tree sketches */}
                <g opacity="0.4">
                  <path
                    d="M80,280 L82,260 L84,280 M79,275 L85,275"
                    stroke="#000"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M120,270 L122,250 L124,270 M119,265 L125,265"
                    stroke="#000"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M200,250 L202,230 L204,250 M199,245 L205,245"
                    stroke="#000"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </g>
                
                {/* Clouds */}
                <g opacity="0.3">
                  <path
                    d="M100,80 Q90,70 80,80 Q70,70 60,80 Q50,70 40,80 Q50,90 60,80 Q70,90 80,80 Q90,90 100,80"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1"
                  />
                  <path
                    d="M320,60 Q310,50 300,60 Q290,50 280,60 Q270,50 260,60 Q270,70 280,60 Q290,70 300,60 Q310,70 320,60"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1"
                  />
                </g>
                
                {/* Sun */}
                <circle
                  cx="350"
                  cy="50"
                  r="15"
                  fill="none"
                  stroke="#000"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <g opacity="0.4">
                  <path d="M350,25 L350,35 M350,65 L350,75 M325,50 L335,50 M365,50 L375,50" stroke="#000" strokeWidth="1"/>
                  <path d="M332,32 L339,39 M361,39 L368,32 M332,68 L339,61 M361,61 L368,68" stroke="#000" strokeWidth="1"/>
                </g>
              </svg>
              
              {/* Floating Mountain Silhouette */}
              <motion.div
                className="absolute top-10 right-10 opacity-20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg width="100" height="80" viewBox="0 0 100 80">
                  <path
                    d="M0,80 L20,40 L40,50 L60,30 L80,40 L100,20 L100,80 Z"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  />
                </svg>
              </motion.div>
              
              {/* Small decorative elements */}
              <motion.div
                className="absolute bottom-20 left-10 opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg width="60" height="40" viewBox="0 0 60 40">
                  <path
                    d="M10,35 L20,20 L30,25 L40,15 L50,20 L50,40 L10,40 Z"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.5"
                  />
                </svg>
>>>>>>> 9178ac2a372fe82da17b4a7c32893217f6e0025d
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 