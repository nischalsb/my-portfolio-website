import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Check, X } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  // New state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        const result = await response.json()
        console.log('Message saved with ID:', result.id)
        
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        const error = await response.json()
        console.error('Error:', error)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Network error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'nsbista@wisc.edu',
      href: 'mailto:nsbista@wisc.edu'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '(405) 992-4628',
      href: 'tel:+14059924628'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Madison, WI',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      href: 'https://github.com/nischalsb',
      color: 'hover:text-gray-700'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      href: 'https://linkedin.com/in/nischalsb',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Website',
      icon: <Mail size={24} />,
      href: 'https://www.n1-sb.com',
      color: 'hover:text-gray-600'
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
    <section id="contact" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing research opportunities, internships, full-stack development projects, or collaborating on AI/ML initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you're interested in research collaboration, have an internship opportunity, 
                  or want to discuss AI/ML projects, I'd love to hear from you. Feel free to reach out 
                  through any of these channels.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="text-black">{info.icon}</div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-gray-600">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 ${social.color}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-medium tracking-wide transition-colors duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-black hover:bg-gray-800'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center space-x-2"
                  >
                    <Check size={20} />
                    <span> Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center space-x-2"
                  >
                    <X size={20} />
                    <span>❌ Error sending message. Please try again or email me directly.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-2 pt-6 pb-0 border-t border-gray-200 text-center"
      >
        <p className="text-gray-600 text-lg">
          © {new Date().getFullYear()} Nischal Singh Bista. Built with React, Tailwind CSS, and FastAPI.
        </p>
      </motion.div>
    </section>
  )
}

export default Contact 
 