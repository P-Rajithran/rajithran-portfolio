import React, { useEffect, useRef } from 'react'
import './Experience.css'

const experience = [
  

  {
    role: 'Social Media Manager',
    company: 'Lynxeye Digital Marketing',
    period: '2025 – 2026',
    desc: 'Managed brand presence across social media platforms. Created content strategies, analyzed engagement metrics, and grew audience through targeted campaigns.',
  },
    {
    role: 'Junior Full Stack Developer Intern',
    company: 'Shanthi IT Solutions',
    period: '2024 – 2025',
    desc: 'Built and maintained full-stack web applications using the MERN stack. Developed RESTful APIs, implemented JWT authentication, and deployed projects to cloud platforms.',
  },
  {
    role: 'MCA Graduate',
    company: 'SRM IST Vadapalani',
    period: '2023 – 2025',
    desc: 'Master of Computer Applications with focus on full-stack development, algorithms, and software engineering. Built Vetro Clothing as capstone project — a production-ready MERN e-commerce platform deployed live.',
  },
]

const Experience = () => {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="exp-section" id="experience">
      <span className="section-tag">// 03 — Experience</span>
      <h2 className="section-title">QUEST <span>HISTORY</span></h2>
      <div className="exp-timeline fade-in" ref={ref}>
        {experience.map((item) => (
          <div className="exp-item" key={item.role}>
            <div className="exp-role">{item.role}</div>
            <div className="exp-company">{item.company}</div>
            <div className="exp-period">{item.period}</div>
            <div className="exp-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience