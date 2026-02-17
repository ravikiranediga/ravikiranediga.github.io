import { useState } from 'react'
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual endpoint)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'www.sreenivasul@gmail.com',
      link: 'mailto:www.sreenivasul@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+91 6281495540',
      link: 'tel:+916281495540'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Puttur, Andhra Pradesh, India',
      link: null
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions. Feel free to contact me through any of the 
              following channels.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link || '#'} 
                  className="contact-item"
                  style={{ cursor: info.link ? 'pointer' : 'default' }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-socials">
              <a 
                href="https://github.com/ravikiranediga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/ravikiranediga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a 
                href="mailto:ravikiran@example.com" 
                className="social-link"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          <div className="contact-form">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className={`form-group ${errors.name ? 'error' : ''}`}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className={`form-group ${errors.email ? 'error' : ''}`}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className={`form-group ${errors.subject ? 'error' : ''}`}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className={`form-group ${errors.message ? 'error' : ''}`}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <><FiSend /> Send Message</>
                  )}
                </button>
              </form>
            ) : (
              <div className="form-success show">
                <div className="success-icon">
                  <FiCheck />
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
