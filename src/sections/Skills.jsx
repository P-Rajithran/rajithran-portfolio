import React, { useEffect, useRef } from 'react'
import './Skills.css'

const skills = [
  {
    title: 'Frontend',
    icon: '⚡',
    tags: [
      { label: 'React.js', hot: true },
      { label: 'HTML5' },
      { label: 'CSS3' },
      { label: 'Tailwind CSS', hot: true },
      { label: 'Framer Motion' },
      { label: 'Vite' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    tags: [
      { label: 'Node.js', hot: true },
      { label: 'Express.js', hot: true },
      { label: 'REST APIs' },
      { label: 'JWT Auth' },
      { label: 'Bcrypt' },
      { label: 'Multer' },
    ],
  },
  {
    title: 'Database & Cloud',
    icon: '🗄️',
    tags: [
      { label: 'MongoDB', hot: true },
      { label: 'Mongoose' },
      { label: 'MongoDB Atlas' },
      { label: 'Cloudinary' },
      { label: 'Vercel' },
      { label: 'Render' },
    ],
  },
  {
    title: 'Tools & Other',
    icon: '🛠️',
    tags: [
      { label: 'Git/GitHub', hot: true },
      { label: 'Postman' },
      { label: 'VS Code' },
      { label: 'Digital Marketing' },
      { label: 'AI Tools' },
      { label: 'Python (Learning)' },
    ],
  },
]

const Skills = () => {
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
    <section className="skills-section" id="skills">
      <span className="section-tag">// 02 — Skills</span>
      <h2 className="section-title">ABILITY <span>SYSTEM</span></h2>

      <div className="skills-grid fade-in" ref={ref}>
        {skills.map((card) => (
          <div className="skill-card" key={card.title}>
            <div className="skill-card-title">
              <span>{card.icon}</span> {card.title}
            </div>
            <div className="skill-tags">
              {card.tags.map((tag) => (
                <span className={`skill-tag ${tag.hot ? 'hot' : ''}`} key={tag.label}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
