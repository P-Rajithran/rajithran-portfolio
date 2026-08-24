import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import { playInteractionSound } from './utils/audio'
import './index.css'

const App = () => {
  // Hardware-accelerated, zero-rerender spring-smoothed scroll progress
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    let rafId = null
    let moveCursor = null
    let onMouseDown = null
    let onMouseUp = null
    let handleMouseOver = null

    if (!isTouchDevice) {
      // Custom cursor — desktop only
      const dot = dotRef.current
      const ring = ringRef.current
      let mouseX = 0, mouseY = 0
      let ringX = 0, ringY = 0

      moveCursor = (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
        if (dot) {
          dot.style.left = mouseX + 'px'
          dot.style.top = mouseY + 'px'
        }
      }

      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.12
        ringY += (mouseY - ringY) * 0.12
        if (ring) {
          ring.style.left = ringX + 'px'
          ring.style.top = ringY + 'px'
        }
        rafId = requestAnimationFrame(animateRing)
      }
      rafId = requestAnimationFrame(animateRing)

      onMouseDown = () => {
        dot?.classList.add('clicking')
        ring?.classList.add('clicking')
      }
      onMouseUp = () => {
        dot?.classList.remove('clicking')
        ring?.classList.remove('clicking')
      }

      handleMouseOver = (e) => {
        if (e.target.closest('a, button, .clickable, input, textarea')) {
          dot?.classList.add('hovering')
          ring?.classList.add('hovering')
        } else {
          dot?.classList.remove('hovering')
          ring?.classList.remove('hovering')
        }
      }

      document.addEventListener('mousemove', moveCursor)
      document.addEventListener('mousedown', onMouseDown)
      document.addEventListener('mouseup', onMouseUp)
      document.addEventListener('mouseover', handleMouseOver)
    }

    // Mobile touch ripple
    const handleTouch = (e) => {
      const touch = e.touches[0]
      const ripple = document.createElement('div')
      ripple.className = 'touch-ripple'
      ripple.style.left = touch.clientX + 'px'
      ripple.style.top = touch.clientY + 'px'
      document.body.appendChild(ripple)
      setTimeout(() => ripple.remove(), 600)
    }
    document.addEventListener('touchstart', handleTouch)

    // Interaction sound with persistent mute handling
    const handleButtonClick = (e) => {
      const target = e.target.closest('a, button, .sound-btn')
      if (target) {
        playInteractionSound('/sound.mp3', 0.3)
      }
    }
    document.addEventListener('click', handleButtonClick)

    // Complete cleanup on unmount
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (moveCursor) document.removeEventListener('mousemove', moveCursor)
      if (onMouseDown) document.removeEventListener('mousedown', onMouseDown)
      if (onMouseUp) document.removeEventListener('mouseup', onMouseUp)
      if (handleMouseOver) document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('touchstart', handleTouch)
      document.removeEventListener('click', handleButtonClick)
    }
  }, [])

  return (
    <div>
      <motion.div
        className="scroll-progress"
        style={{
          scaleX,
          transformOrigin: '0%'
        }}
      />
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App