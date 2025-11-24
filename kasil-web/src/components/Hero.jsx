import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <nav className="nav">
        <div className="nav-container">
          <h1 className="logo">KASIL</h1>
          <div className="nav-links">
            <a href="#expertise">Expertise</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Bespoke Automotive Engineering</h2>
          <p className="hero-subtitle">Redefining Automotive Craftsmanship</p>
          <p className="hero-description">
            At Kasil, we design and manufacture one-of-one bespoke body kits and
            performance components for the world's most discerning automotive enthusiasts.
            Each creation merges aerodynamic precision, luxury materials, and engineering
            excellence to transform every build into a statement of power and individuality.
          </p>
        </div>
      </div>

      <div className="hero-overlay"></div>
    </section>
  )
}

export default Hero
