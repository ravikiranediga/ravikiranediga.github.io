import { useState, useEffect } from 'react'
import { FiDownload } from 'react-icons/fi'

const About = () => {
  const [counters, setCounters] = useState({ projects: 0, years: 0, clients: 0, coffee: 0 })

  useEffect(() => {
    const targets = { projects: 6, years: 3, clients: 5, coffee: 300 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    const timers = []
    Object.keys(targets).forEach((key) => {
      let current = 0
      const stepValue = targets[key] / steps
      
      const timer = setInterval(() => {
        current += stepValue
        if (current >= targets[key]) {
          setCounters(prev => ({ ...prev, [key]: targets[key] }))
          clearInterval(timer)
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
        }
      }, increment)
      
      timers.push(timer)
    })

    return () => timers.forEach(clearInterval)
  }, [])

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about me and my journey in AI/ML
        </p>

        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image-bg"></div>
            <img 
              src="/profile.jpg.jpeg" 
              alt="E RaviKiran Profile" 
              className="about-image"
            />
          </div>

          <div className="about-text">
            <h3>
              I'm a <span>B.Tech 3rd Year CSE (AI)</span> Student passionate about AI & Data Science
            </h3>
            <p>
              I am a passionate 3rd-year AI student at <strong>Sri Venkatesa Perumal College of Engineering</strong>, 
              with a strong interest in <strong>Artificial Intelligence, Data Science, and Machine Learning</strong>. 
              During my academic journey, I have gained hands-on experience in Python, SQL, Machine Learning, 
              AI Workflows, Exploratory Data Analysis (EDA), Cloud Computing, Agentic AI frameworks, 
              Big Data, and Data Analytics.
            </p>
            <p>
              I have worked on multiple machine learning models, Gen AI, and data analysis projects, 
              where I analyzed datasets, cleaned data, built models, and derived meaningful insights. 
              Currently, I am looking for an internship opportunity in Data Science/AI/EDA/Machine Learning 
              where I can apply my technical knowledge, gain industry exposure, and contribute to impactful projects.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">{counters.projects}+</div>
                <div className="stat-label">ML Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{counters.years}+</div>
                <div className="stat-label">Years Learning</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{counters.clients}+</div>
                <div className="stat-label">ML Models</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{counters.coffee}+</div>
                <div className="stat-label">Cups of Coffee</div>
              </div>
            </div>

            <a href="/resume.html" target="_blank" className="btn btn-primary">
              <FiDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
