import React from 'react'
import './CurrentProject.css'

function CurrentProject() {
  const components = [
    'Carbon Front Lip & Splitter',
    'Carbon Canards',
    'Carbon Hood & Grille',
    'Carbon Mirror Caps',
    'Carbon Side Skirts',
    'Front & Rear Flare Vents',
    'Carbon Diffuser',
    'Carbon Spoiler & Rear Canards'
  ]

  return (
    <section id="projects" className="current-project">
      <div className="container">
        <div className="project-header">
          <span className="project-label">Current Project</span>
          <h2 className="project-title">BMW M5 Touring — Kasil Carbon Edition</h2>
          <p className="project-description">
            Our latest bespoke build redefines the touring class. The Kasil Carbon Edition
            BMW M5 Touring is designed to embody elegance and raw performance through
            precision carbon craftsmanship.
          </p>
        </div>

        <div className="components-section">
          <h3 className="components-title">Components</h3>
          <div className="components-grid">
            {components.map((component, index) => (
              <div key={index} className="component-item">
                <div className="component-icon"></div>
                <span>{component}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="project-footer">
          Every detail has been digitally modeled and aerodynamically optimized, ensuring
          perfect fitment and performance balance.
        </p>
      </div>
    </section>
  )
}

export default CurrentProject
