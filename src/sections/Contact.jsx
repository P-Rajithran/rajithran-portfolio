import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Contact.css'

const contactLinks = [
  {
    icon: 'GM',
    label: 'Gmail',
    sub: 'rajithran83@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rajithran83@gmail.com',
  },
  {
    icon: 'LN',
    label: 'LinkedIn',
    sub: 'linkedin.com/in/rajithran83',
    href: 'https://www.linkedin.com/in/rajithran83/',
  },
  {
    icon: 'GH',
    label: 'GitHub',
    sub: 'github.com/P-Rajithran',
    href: 'https://github.com/P-Rajithran',
  },
]

const Contact = () => {
  const ref = useScrollReveal(0.1)

  return (
    <section className="contact-section" id="contact">
      <span className="section-tag">// 05 — Contact</span>
      <h2 className="section-title">SEND <span>MESSAGE</span></h2>

      <div className="contact-grid fade-in" ref={ref}>
        <div className="contact-info">
          <p>Open to full-stack developer roles, freelance projects, and collaborations. If you're building something powerful — let's talk.</p>
          <div className="contact-links-list">
            {contactLinks.map((item) => (
              <a key={item.label} href={item.href} className="contact-link-item" target="_blank" rel="noreferrer">
                <div className="contact-link-icon">{item.icon}</div>
                <div>
                  <div className="contact-link-label">{item.label}</div>
                  <div className="contact-link-sub">{item.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-cta">
          <p>Ready to build something legendary together? I'm currently available for full-time roles and freelance projects.</p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rajithran83@gmail.com" className="cta-email" target="_blank" rel="noreferrer">
            rajithran83@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/rajithran83/" className="btn-primary" target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
