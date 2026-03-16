import React, { useEffect, useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import './index.css'

const App = () => {
  const [scroll, setScroll] = useState(0)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Scroll progress
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScroll((window.scrollY / total) * 100)
    }
    window.addEventListener('scroll', handleScroll)

    const isTouchDevice = window.matchMedia('(hover: none)').matches

    if (!isTouchDevice) {
      // Custom cursor — desktop only
      const dot = dotRef.current
      const ring = ringRef.current
      let mouseX = 0, mouseY = 0
      let ringX = 0, ringY = 0

      const moveCursor = (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
        dot.style.left = mouseX + 'px'
        dot.style.top = mouseY + 'px'
      }

      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.12
        ringY += (mouseY - ringY) * 0.12
        ring.style.left = ringX + 'px'
        ring.style.top = ringY + 'px'
        requestAnimationFrame(animateRing)
      }
      animateRing()

      const onMouseDown = () => {
        dot.classList.add('clicking')
        ring.classList.add('clicking')
      }
      const onMouseUp = () => {
        dot.classList.remove('clicking')
        ring.classList.remove('clicking')
      }

      document.addEventListener('mousemove', moveCursor)
      document.addEventListener('mousedown', onMouseDown)
      document.addEventListener('mouseup', onMouseUp)

      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
          dot.classList.add('hovering')
          ring.classList.add('hovering')
        })
        el.addEventListener('mouseleave', () => {
          dot.classList.remove('hovering')
          ring.classList.remove('hovering')
        })
      })
    }

    // Mobile touch ripple only
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

    // Sound on buttons only
    const sound = new Audio('/sound.mp3')
    document.addEventListener('click', (e) => {
      const target = e.target.closest('a, button')
      if (target) {
        sound.currentTime = 0
        sound.volume = 0.3
        sound.play().catch(() => {})
      }
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('touchstart', handleTouch)
    }
  }, [])

  return (
    <div>
      <div className="scroll-progress" style={{ width: `${scroll}%` }}></div>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  )
}

export default App