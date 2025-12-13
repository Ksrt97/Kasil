import React from 'react'
import './CurrentProject.css'

function CurrentProject() {
  const components = [
    { name: 'Carbon Front Lip & Splitter', category: 'Front' },
    { name: 'Carbon Canards', category: 'Front' },
    { name: 'Carbon Hood & Grille', category: 'Front' },
    { name: 'Carbon Mirror Caps', category: 'Sides' },
    { name: 'Carbon Side Skirts', category: 'Sides' },
    { name: 'Front & Rear Flare Vents', category: 'Sides' },
    { name: 'Carbon Diffuser', category: 'Rear' },
    { name: 'Carbon Spoiler & Rear Canards', category: 'Rear' }
  ]

  return (
    <section id="projects" className="current-project">
      <div className="project-hero">
        <div className="project-background">
          {/* Optional: Add project hero image - Place in public/images/m5-touring.jpg */}
          {/* <img src="/images/m5-touring.jpg" alt="BMW M5 Touring" className="project-hero-image" /> */}
        </div>
        <div className="container">
          <div className="project-header">
            <span className="project-label">Current Build</span>
            <h2 className="project-title">
              BMW M5 Touring
              <span className="project-edition">Kasil Carbon Edition</span>
            </h2>
            <p className="project-tagline">
              Redefining the touring class through precision carbon craftsmanship
            </p>
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="container">
          <div className="project-intro">
            <div className="intro-text">
              <h3>Elegance Meets Raw Performance</h3>
              <p>
                The Kasil Carbon Edition BMW M5 Touring is designed to embody elegance and
                raw performance through precision carbon craftsmanship. Every detail has been
                digitally modeled and aerodynamically optimized, ensuring perfect fitment and
                performance balance.
              </p>
            </div>
            <div className="intro-stats">
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span className="stat-label">Carbon Components</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Hand-Crafted</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1/1</span>
                <span className="stat-label">Bespoke Build</span>
              </div>
            </div>
          </div>

          <div className="components-section">
            <h3 className="components-title">Carbon Components</h3>
            <div className="components-list">
              {components.map((component, index) => (
                <div key={index} className="component-card">
                  <div className="component-header">
                    <span className="component-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="component-category">{component.category}</span>
                  </div>
                  <h4 className="component-name">{component.name}</h4>
                  <div className="component-line"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurrentProject
