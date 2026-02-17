import { useState, useEffect } from 'react'
import { FiCode, FiDatabase, FiCpu } from 'react-icons/fi'

const Skills = () => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.querySelector('.skills-grid')
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setAnimate(true)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FiCode />,
      skills: [
        { name: 'Python', progress: 90 },
        { name: 'SQL', progress: 80 },
        { name: 'HTML/CSS', progress: 75 },
        { name: 'Java', progress: 60 },
        { name: 'C Programming', progress: 55 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <FiCpu />,
      skills: [
        { name: 'Machine Learning', progress: 85 },
        { name: 'Data Analysis & EDA', progress: 88 },
        { name: 'NLP', progress: 75 },
        { name: 'Computer Vision (OpenCV)', progress: 70 },
        { name: 'Generative AI', progress: 80 },
        { name: 'Agentic AI (CrewAI)', progress: 75 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FiDatabase />,
      skills: [
        { name: 'Data Analysis', progress: 85 },
        { name: 'Excel', progress: 85 },
        { name: 'Cloud Computing', progress: 70 },
        { name: 'N8N Automation', progress: 72 },
        { name: 'Big Data', progress: 65 },
        { name: 'Git/GitHub', progress: 78 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          A comprehensive overview of my technical skills and expertise
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.progress}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${animate ? 'animate' : ''}`}
                        style={{ '--progress': `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
