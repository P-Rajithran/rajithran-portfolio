import React, { useState } from 'react'
import AudioToggle from './AudioToggle'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleLinkClick = () => { setTimeout(() => setMenuOpen(false), 200) }

  return (
    <nav className="navbar">
      <div className="nav-logo">RAJITHRAN</div>

      <div className="nav-actions">
        <AudioToggle />
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar