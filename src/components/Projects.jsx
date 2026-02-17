import { useState } from 'react'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import projectsData from '../data/projects.json'

const Projects = () => {
  const [projects] = useState(projectsData.projects)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Machine Learning', value: 'ml' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const openModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my recent work and side projects
        </p>

        <div className="projects-filter">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <span>View Details</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description.slice(0, 100)}...
                </p>
                <div className="project-tech">
                  {project.techStack.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub /> Code
                  </a>
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <div 
        className={`modal-overlay ${selectedProject ? 'active' : ''}`}
        onClick={closeModal}
      >
        {selectedProject && (
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="modal-image"
            />
            <div className="modal-body">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <p className="modal-description">{selectedProject.description}</p>
              
              <h4 className="modal-tech-title">Technologies Used:</h4>
              <div className="modal-tech">
                {selectedProject.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="modal-buttons">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FiGithub /> View Code
                </a>
                <a 
                  href={selectedProject.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
