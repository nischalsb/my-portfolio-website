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
    </div>
  )
}

export default App 