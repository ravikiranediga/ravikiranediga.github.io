import { FiBook, FiMapPin } from 'react-icons/fi'

const Education = () => {
  const education = [
    {
      institution: "Sri Venkatesa Perumal College of Engineering and Technology",
      degree: "B.Tech 3rd Year, CSE(AI)",
      year: "2023 - 2027",
      location: "Puttur, Andhra Pradesh",
      image: "/college.jpg"
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic background and qualifications
        </p>

        <div className="education-content">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-image">
                <img src={edu.image} alt={edu.institution} />
              </div>
              <div className="education-details">
                <h3>{edu.institution}</h3>
                <p className="education-degree">{edu.degree}</p>
                <div className="education-meta">
                  <span><FiBook /> {edu.year}</span>
                  <span><FiMapPin /> {edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
