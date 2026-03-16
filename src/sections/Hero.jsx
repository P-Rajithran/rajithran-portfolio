import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      
      {/* Video Background */}
      <div className="hero-video-container">
        <video autoPlay loop muted playsInline>
          <source src="/videos/hero-bg.webm" type="video/webm" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="system-alert"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="alert-dot"></div>
          FULL STACK DEVELOPER — AVAILABLE FOR HIRE
        </motion.div>

        <div className="hero-main">
          <div className="hero-text">
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I AM<br /><span>RAJITHRAN</span>
            </motion.h1>

            <motion.p
              className="hero-title-line"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer &nbsp;·&nbsp; Digital Marketing Specialist
            </motion.p>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Building powerful MERN web applications and driving digital growth
              through data-driven marketing strategies. From code to campaigns —
              I deliver complete digital solutions.
            </motion.p>

            <motion.div
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a href="#projects" className="btn-primary sound-btn">View Projects</a>
              <a href="#contact" className="btn-secondary sound-btn">Hire Me</a>
            </motion.div>
          </div>

          <motion.div
            className="hero-photo-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-photo-frame">
              <div className="photo-corner tl"></div>
              <div className="photo-corner tr"></div>
              <div className="photo-corner bl"></div>
              <div className="photo-corner br"></div>
              <div className="photo-scan"></div>
              <img src="/rajithran.jpg" alt="Rajithran" className="hero-photo" />
            </div>
            <div className="photo-tag">FULL STACK + DIGITAL MARKETING</div>
          </motion.div>
        </div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="stat-item">
            <div className="stat-num">1+</div>
            <div className="stat-label">Year Dev Exp</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">4+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">15+</div>
            <div className="stat-label">APIs Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">5+</div>
            <div className="stat-label">Marketing Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero