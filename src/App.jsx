<<<<<<< HEAD
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simple loading timer
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          >
            <div className="text-center">
              {/* Animated Mountain Peaks */}
              <div className="relative mb-8">
                <svg width="200" height="100" viewBox="0 0 200 100" className="overflow-visible">
                  {/* Mountain 1 */}
                  <motion.path
                    d="M20 80 L40 40 L60 80 Z"
                    fill="#374151"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  {/* Mountain 2 */}
                  <motion.path
                    d="M50 80 L80 25 L110 80 Z"
                    fill="#1f2937"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  {/* Mountain 3 */}
                  <motion.path
                    d="M90 80 L130 35 L170 80 Z"
                    fill="#374151"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                  
                  {/* Snow caps */}
                  <motion.path
                    d="M70 25 L80 25 L85 35 L75 35 Z"
                    fill="#f3f4f6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                  />
                  <motion.path
                    d="M125 35 L135 35 L140 45 L120 45 Z"
                    fill="#f3f4f6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 }}
                  />
                  
                  {/* Animated clouds */}
                  <motion.circle
                    cx="150"
                    cy="20"
                    r="8"
                    fill="#e5e7eb"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.6, x: 0 }}
                    transition={{ duration: 1, delay: 1.6 }}
                  />
                  <motion.circle
                    cx="160"
                    cy="25"
                    r="6"
                    fill="#e5e7eb"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.4, x: 0 }}
                    transition={{ duration: 1, delay: 1.8 }}
                  />
                </svg>
                
                {/* Animated dots climbing the mountain */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <motion.div
                    className="absolute w-2 h-2 bg-red-500 rounded-full"
                    initial={{ x: 80, y: 80 }}
                    animate={{ 
                      x: [80, 78, 76, 74, 72, 70, 68, 66, 64, 62, 60],
                      y: [80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30]
                    }}
                    transition={{ duration: 2, delay: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>
              

              

              

            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              <Home />
              <About />
              <TechStack />
              <Experience />
              <Projects />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
=======
import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#18181b",
        backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        color: "#fff"
      }}
    >
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Contact />
>>>>>>> 9178ac2a372fe82da17b4a7c32893217f6e0025d
    </div>
  )
}

export default App 