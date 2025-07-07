import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'


const Home = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Nepal Mountain Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mountain Range 1 - Back layer */}
        <svg
          className="absolute bottom-0 left-0 w-full h-64 text-gray-100 opacity-60"
          viewBox="0 0 1200 300"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,300 L0,180 L120,80 L240,140 L360,60 L480,120 L600,40 L720,100 L840,20 L960,80 L1080,120 L1200,60 L1200,300 Z" />
        </svg>
        
        {/* Mountain Range 2 - Middle layer */}
        <svg
          className="absolute bottom-0 left-0 w-full h-48 text-gray-200 opacity-80"
          viewBox="0 0 1200 240"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,240 L0,160 L150,100 L300,140 L450,80 L600,120 L750,60 L900,100 L1050,80 L1200,120 L1200,240 Z" />
        </svg>
        
        {/* Mountain Range 3 - Front layer */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 text-gray-300 opacity-90"
          viewBox="0 0 1200 160"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,160 L0,120 L200,80 L400,100 L600,60 L800,90 L1000,70 L1200,100 L1200,160 Z" />
        </svg>

        {/* Decorative Mountain Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 right-20 hidden lg:block"
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-gray-400">
            <path
              d="M30 10 L20 35 L40 35 Z M25 15 L35 15 L30 8 Z"
              fill="currentColor"
              opacity="0.6"
            />
            <path
              d="M30 8 L25 15 L35 15 Z"
              fill="currentColor"
              opacity="0.8"
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-32 left-16 hidden lg:block"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-gray-400">
            <path
              d="M20 8 L12 25 L28 25 Z M16 12 L24 12 L20 5 Z"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-40 right-32 hidden lg:block"
        >
          <svg width="50" height="50" viewBox="0 0 50 50" className="text-gray-400">
            <path
              d="M25 12 L15 30 L35 30 Z M20 16 L30 16 L25 8 Z"
              fill="currentColor"
              opacity="0.4"
            />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:order-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-tight">
                <span className="block">Nischal Singh</span>
                <span className="block gradient-text">Bista</span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl font-light text-gray-600 font-inter flex items-center gap-3"
              >
                I do AI/ ML/ Full Stack
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="inline-block"
                >
                  
                </motion.span>
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed max-w-2xl text-justify">
              Hey, I'm Nischal! I'm a sophomore at the University of Wisconsin–Madison, majoring in Computer Science. From building full-stack applications to experimenting with AI/ML, I love turning random ideas into real, working things. I'm all about clean code, clever design, and solving problems.
              Outside of coding, you might catch me messing with side projects, browsing tech Reddit, or pretending to understand the latest AI papers.
              </p>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 shadow-xl">
                {/* Profile image */}
                <img
                  src="../dist/assets/profile.jpeg"
                  alt="Nischal Singh Bista"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center absolute top-0 left-0" style={{ display: 'none' }}>
                  <span className="text-4xl sm:text-5xl font-playfair font-bold text-gray-500">NSB</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-black rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-black rounded-full"
              />
              

            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm font-medium tracking-wide">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home 