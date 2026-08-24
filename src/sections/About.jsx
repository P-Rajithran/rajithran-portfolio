import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

const About = () => {
  const ref = useScrollReveal(0.15)

  return (
    <section className="about-section" id="about">
      <span className="section-tag">// 01 — About</span>
      <h2 className="section-title">WHO <span>AM I</span></h2>

      <div className="about-grid fade-in" ref={ref}>
        <div className="about-text">
          <p>
            I'm a <strong>Full Stack Developer</strong> (MCA 2025, SRM IST Vadapalani) who builds
            end-to-end web applications using the MERN stack. I don't just write code —
            I architect systems that solve real problems.
          </p>
          <p>
            Through building <strong>Vetro Clothing</strong> — a live MERN e-commerce platform
            with 52+ products, full order flow, admin panel, and cloud deployment — I proved
            I can take a product from zero to production-ready.
          </p>
          <p>
            I combine development with <strong>digital marketing insight</strong> and AI tools
            knowledge — making me a rare full-stack thinker, not just a coder.
            My target: MNC-level developer by March 2027.
          </p>
        </div>

        <div className="status-card">
          {[
             { key: 'NAME', val: 'Rajithran', type: '' },
  { key: 'CLASS', val: 'Full Stack Developer', type: 'highlight' },
  { key: 'SPECIALITY', val: 'Digital Marketing', type: 'highlight' },
  { key: 'EDUCATION', val: 'MCA — SRM IST 2025', type: '' },
  { key: 'LOCATION', val: 'Chennai, Tamil Nadu', type: '' },
  { key: 'PHONE', val: '+91 8248683611', type: '' },
  { key: 'STATUS', val: 'Available for Hire', type: 'highlight' },
 
          ].map((item) => (
            <div className="status-row" key={item.key}>
              <span className="status-key">{item.key}</span>
              <span className={`status-val ${item.type}`}>{item.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
