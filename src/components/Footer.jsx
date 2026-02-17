import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>© {currentYear} <span>Ravikiran</span>. All rights reserved.</p>
          </div>

          <div className="footer-socials">
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
              href="mailto:www.sreenivasul@gmail.com" 
              className="social-link"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>

          <button 
            className="back-to-top" 
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
