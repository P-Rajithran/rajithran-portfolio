import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        DESIGNED & DEVELOPED BY <span>RAJITHRAN</span> &nbsp;|&nbsp; © {new Date().getFullYear()}
      </div>
      <div className="footer-right">FULL STACK + DIGITAL MARKETING</div>
    </footer>
  )
}

export default Footer