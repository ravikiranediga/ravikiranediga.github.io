import { useState, useEffect } from 'react'
import { FiArrowDown, FiDownload } from 'react-icons/fi'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const titles = [
    'Aspiring AI/ML Engineer',
    'Python Developer', 
    'Data Science'
  ]
  const [titleIndex, setTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex, titles])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            E RaviKiran<span>.</span>
          </h1>
          <h2 className="hero-title">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            A passionate B.Tech student specializing in building exceptional digital experiences. 
            I combine technical expertise with creative problem-solving to develop innovative solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToProjects(); }}>
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToAbout(); }}>
              <FiDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll" onClick={scrollToAbout}>
        <span>Scroll Down</span>
        <FiArrowDown />
      </div>
    </section>
  )
}

export default Hero
