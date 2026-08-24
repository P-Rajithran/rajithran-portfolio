import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import vetroImg from '../assets/images/vetro.webp'
import soloImg from '../assets/images/solo.webp'
import solo2Img from '../assets/images/solo2.webp'
import solo3Img from '../assets/images/solo3.webp'
import './Projects.css'

const projects = [
  {
    num: '001',
    name: 'Vetro Clothing',
    category: 'FULL-STACK MERN',
    status: 'LIVE',
    desc: 'Full-stack luxury e-commerce platform with 52+ products, JWT authentication, full cart & checkout flow, COD orders, admin dashboard, and Cloudinary media delivery.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Cloudinary', 'Vercel', 'Render'],
    live: 'https://vetro-clothing.vercel.app',
    github: 'https://github.com/P-Rajithran/vetro-clothing',
    image: vetroImg,
    badge: 'E-COMMERCE',
  },
  {
    num: '002',
    name: 'Solo System Tracker',
    category: 'HUNTER QUEST DASHBOARD',
    status: 'LIVE',
    desc: 'Solo Leveling-inspired real-world self-improvement dashboard with daily hunter quests, E-to-S rank progression, dynamic stat point allocation, and penalty survival mechanics.',
    tech: ['React.js', 'Vite', 'Framer Motion', 'Tailwind CSS', 'Web Audio API', 'Netlify'],
    live: 'https://solosystemtracker.netlify.app/',
    github: 'https://github.com/P-Rajithran/solosystemtracker',
    image: soloImg,
    badge: 'GAMIFIED PRODUCTIVITY',
  },
  {
    num: '003',
    name: 'Developer Portfolio',
    category: 'CYBERPUNK WEB EXPERIENCE',
    status: 'LIVE',
    desc: 'High-performance interactive developer portfolio built with React 19, Framer Motion 12, zero-rerender spring physics, and optimized Core Web Vitals.',
    tech: ['React 19', 'Framer Motion 12', 'Vite', 'CSS3', 'SEO & CWV'],
    live: 'https://rajithran-portfolio.netlify.app',
    github: 'https://github.com/P-Rajithran/rajithran-portfolio',
    image: solo3Img,
    badge: 'PORTFOLIO',
  },
  {
    num: '004',
    name: 'Solo Level Up App',
    category: 'CROSS-PLATFORM MOBILE',
    status: 'IN PROGRESS',
    desc: 'Cross-platform mobile personal growth system. Daily hunter workouts, habit tracking, skill trees, and leveling mechanics for disciplined peak performance.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Express', 'JWT Auth'],
    live: null,
    github: null,
    image: solo2Img,
    badge: 'MOBILE APP',
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
          <article
            className={`project-card ${proj.status === 'IN PROGRESS' ? 'in-progress' : ''}`}
            key={proj.num}
          >
            {/* Project Visual Thumbnail */}
            <div className="project-thumbnail-wrapper">
              <img
                src={proj.image}
                alt={`${proj.name} Preview`}
                className="project-thumbnail"
                loading="lazy"
              />
              <div className="thumbnail-overlay"></div>
              <span className="project-badge">{proj.badge}</span>
            </div>

            <div className="project-header">
              <span className="project-num">PROJECT // {proj.num}</span>
              <span className={`project-status ${proj.status === 'IN PROGRESS' ? 'pending' : ''}`}>
                {proj.status === 'LIVE' && <span className="status-live" aria-hidden="true"></span>}
                {proj.status}
              </span>
            </div>

            <div className="project-body">
              <h3 className="project-name">{proj.name}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tech">
                {proj.tech.map((t) => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                {proj.live ? (
                  <a
                    href={proj.live}
                    className="project-link primary-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ⚡ Live Site
                  </a>
                ) : (
                  <span className="project-link disabled">Coming Soon</span>
                )}
                {proj.github ? (
                  <a
                    href={proj.github}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📁 GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
