import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Projects.css'

const projects = [
  {
    num: '001',
    name: 'Vetro Clothing',
    status: 'LIVE',
    desc: 'Full-stack MERN e-commerce platform with 52+ products, JWT auth, cart system, COD orders, admin panel, and luxury Dark Green & Gold UI. Fully deployed on cloud.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Cloudinary', 'Vercel', 'Render'],
    live: 'https://vetro-clothing.vercel.app',
    github: 'https://github.com/P-Rajithran/vetro-clothing',
  },
  {
    num: '002',
    name: 'Rajithran Portfolio',
    status: 'LIVE',
    desc: 'Solo Leveling-inspired animated developer portfolio built with React and Framer Motion. Features video background, smooth animations, and professional sections.',
    tech: ['React', 'Framer Motion', 'Vite', 'CSS3'],
    live: '#',
    github: 'https://github.com/P-Rajithran/rajithran-portfolio',
  },
  {
    num: '003',
    name: "Dad's Electrical Services",
    status: 'IN PROGRESS',
    desc: 'Professional business landing page for an electrical contracting service. Showcases completed works, services offered, and contact details for new clients.',
    tech: ['React', 'CSS3', 'Vite'],
    live: null,
    github: null,
  },
  {
    num: '004',
    name: 'Solo Level Up App',
    status: 'IN PROGRESS',
    desc: 'A life-changing personal growth system. Daily tasks, goal tracking, and progress system for students, workers, and job seekers.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    live: null,
    github: null,
  },
]


const Projects = () => {
  const ref = useScrollReveal(0.1)

  return (
    <section className="projects-section" id="projects">
      <span className="section-tag">// 04 — Projects</span>
      <h2 className="section-title">DUNGEON <span>CLEARED</span></h2>

      <div className="projects-grid fade-in" ref={ref}>
        {projects.map((proj) => (
          <div
            className={`project-card ${proj.status === 'IN PROGRESS' ? 'in-progress' : ''}`}
            key={proj.num}
          >
            <div className="project-header">
              <span className="project-num">PROJECT // {proj.num}</span>
              <span className={`project-status ${proj.status === 'IN PROGRESS' ? 'pending' : ''}`}>
                {proj.status === 'LIVE' && <div className="status-live"></div>}
                {proj.status}
              </span>
            </div>
            <div className="project-body">
              <div className="project-name">{proj.name}</div>
              <div className="project-desc">{proj.desc}</div>
              <div className="project-tech">
                {proj.tech.map((t) => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                {proj.live ? (
                  <a href={proj.live} className="project-link primary-link" target="_blank" rel="noreferrer">
                    Live Site
                  </a>
                ) : (
                  <span className="project-link disabled">Coming Soon</span>
                )}
                {proj.github ? (
                  <a href={proj.github} className="project-link" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
