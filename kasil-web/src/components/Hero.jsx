import React, { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo">
            <span className="logo-k">K</span>
            <span className="logo-text">ASIL</span>
          </a>

          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <a href="#expertise" onClick={() => setMenuOpen(false)}>
              <span className="nav-number">01</span>
              <span className="nav-text">Expertise</span>
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              <span className="nav-number">02</span>
              <span className="nav-text">Current Build</span>
            </a>
            <a href="#upcoming" onClick={() => setMenuOpen(false)}>
              <span className="nav-number">03</span>
              <span className="nav-text">Upcoming</span>
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              <span className="nav-number">04</span>
              <span className="nav-text">Contact</span>
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-background">
          {/* Background Video - Place your video file in public/videos/hero-video.mp4 */}
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-label">Bespoke Automotive Engineering</div>
            <h1 className="hero-title">
              Redefining
              <span className="hero-title-highlight">Automotive</span>
              Craftsmanship
            </h1>
            <p className="hero-description">
              At Kasil, we design and manufacture one-of-one bespoke body kits and
              performance components for the world's most discerning automotive enthusiasts.
              Each creation merges aerodynamic precision, luxury materials, and engineering
              excellence to transform every build into a statement of power and individuality.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">Explore Our Work</a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>
    </>
  )
}

export default Hero
