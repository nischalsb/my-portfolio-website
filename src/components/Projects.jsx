import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, ExternalLink, Calendar, X, Play } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'HustleChha - AI Productivity App',
      description: 'A full-stack productivity web application featuring task management, Pomodoro timer, and mood tracking capabilities with real-time data synchronization and interactive analytics dashboard.',
      longDescription: 'HustleChha is a comprehensive productivity platform that combines AI-powered insights with intuitive task management. The application features a sophisticated Pomodoro timer, mood tracking capabilities, and real-time analytics to help users optimize their productivity patterns. Built with React and TypeScript for type safety, Firebase for real-time synchronization, and includes progressive web app capabilities.',
      technologies: ['React', 'TypeScript', 'Firebase', 'CSS', 'HTML'],
      year: '2024',
      status: 'In Development',
      github: 'https://github.com/nischalsb/hustle-chha',
      image: '/assets/hustlechha.png',
      features: ['Real-time data synchronization', 'Interactive analytics dashboard', 'Mood tracking with AI insights', 'Progressive Web App']
    },
    {
      title: 'Clear Air Turbulence Prediction Model',
      description: 'AI models for forecasting Clear Air Turbulence over Nepalese airspace using NASA MERRA-2 reanalysis data with interactive geospatial visualization platform.',
      longDescription: 'Advanced machine learning research project focused on aviation safety. The system processes over 500GB of NASA MERRA-2 atmospheric data to predict Clear Air Turbulence with 15% improved accuracy. Features interactive geospatial visualizations and supports real-time risk assessment for high-altitude flight routes over Nepal.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Cartopy', 'Jupyter', 'Random Forest', 'SVM'],
      year: '2024',
      status: 'Research',
      demo: 'https://drive.google.com/file/d/1AVuJrI_pG4iLBuhBWwp6kloaHaoZ2EZu/view?usp=sharing',
      image: '/assets/turbulence.png',
      features: ['500GB+ data processing', '15% accuracy improvement', 'Interactive geospatial visualization', 'Real-time risk assessment']
    },
    {
      title: 'Educate Nepal Initiative Website',
      description: 'Complete redesign and optimization of NGO website with improved UI/UX, mobile responsiveness, and SEO optimization resulting in 20% increase in user engagement.',
      longDescription: 'Full-scale website redesign for a non-profit organization focused on education in Nepal. The project involved modern UI/UX design, mobile-first responsive development, and comprehensive SEO optimization. Implemented Google Analytics tracking and schema markup to drive data-driven improvements.',
      technologies: ['React', 'CSS', 'HTML', 'Google Analytics', 'SEO'],
      year: '2023',
      status: 'Live',
      github: 'https://github.com/nischalsb/EduN-Website',
      demo: 'https://edunep.org',
      image: '',
      features: ['20% increase in user engagement', '30% improvement in search visibility', 'Mobile-first responsive design', 'Analytics-driven optimization']
    },
    
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects and skills with smooth animations, clean design, and black-white aesthetic.',
      longDescription: 'This very portfolio website built with modern React stack. Features smooth Framer Motion animations, responsive design, and a minimalist black-and-white aesthetic. Includes interactive tech stack visualization, project modals, and optimized performance.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      year: '2025',
      status: 'Live',
      github: 'https://github.com/nischalsb/my-portfolio-website',
      demo: 'https://n1-sb.com',
      image: '/assets/portfolio.png',
      features: ['Smooth Framer Motion animations', 'Interactive tech stack', 'Mobile-first responsive design', 'Modern black-white aesthetic']
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
    <section id="projects" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for creating meaningful digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image with Overlay */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center" style={{display: 'none'}}>
                    <span className="text-gray-500 font-medium">Project Preview</span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Play size={48} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">View Details</p>
                    </motion.div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      project.status === 'Live' ? 'bg-green-100 text-green-800' :
                      project.status === 'Research' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        {project.year}
                      </div>
                    </div>
                  </div>



                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4">
                    <motion.a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-1 text-sm font-medium hover:text-gray-600 transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-1 text-sm font-medium hover:text-gray-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Want to see more projects? Check out my GitHub profile for additional work and open-source contributions.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 border border-black text-black font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-200"
            >
              <Github size={20} />
              <span>View All Projects</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative p-6 border-b border-gray-200">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h2 className="text-3xl font-playfair font-bold mb-2">
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={16} className="mr-1" />
                          {selectedProject.year}
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          selectedProject.status === 'Live' ? 'bg-green-100 text-green-800' :
                          selectedProject.status === 'Research' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {selectedProject.status}
                        </span>
                      </div>
                      

                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  {/* Project Image */}
                  <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-6 overflow-hidden">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center" style={{display: 'none'}}>
                      <span className="text-gray-500 font-medium">Project Preview</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">About This Project</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={selectedProject.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-800 transition-colors flex items-center justify-center"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      View Live Demo
                    </motion.a>
                    <motion.a
                      href={selectedProject.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border border-black text-black px-6 py-3 rounded-lg font-medium text-center hover:bg-black hover:text-white transition-colors flex items-center justify-center"
                    >
                      <Github size={20} className="mr-2" />
                      View Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects 