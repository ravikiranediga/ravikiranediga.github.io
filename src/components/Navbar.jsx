import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#home')}>
        RK
      </a>
      
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
