import { FiAward, FiCheckCircle } from 'react-icons/fi'

const Certifications = () => {
  const certifications = [
    {
      title: 'AI For All',
      issuer: 'Intel',
      year: '2025',
      icon: <FiAward />
    },
    {
      title: 'AI-ML Engineer',
      issuer: 'Reliance Foundation',
      year: '',
      icon: <FiAward />
    },
    {
      title: 'Python for Beginners',
      issuer: 'Simplilearn',
      year: '',
      icon: <FiAward />
    },
    {
      title: 'Introduction to GenAI',
      issuer: 'Google Cloud',
      year: '',
      icon: <FiAward />
    },
    {
      title: 'Building Data Analyst AI Agent',
      issuer: 'Analytics Vidhya',
      year: '2026',
      icon: <FiAward />
    },
    {
      title: 'Data Science Job Simulation',
      issuer: 'Forage',
      year: '2025',
      icon: <FiAward />
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications and achievements
        </p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-icon">
                {cert.icon}
              </div>
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.year && <span className="certification-year">{cert.year}</span>}
              </div>
              <FiCheckCircle className="certification-check" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
