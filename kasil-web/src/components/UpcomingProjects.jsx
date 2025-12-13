import React from 'react'
import './UpcomingProjects.css'

function UpcomingProjects() {
  const projects = [
    {
      number: '01',
      model: 'BMW M4',
      year: '2025',
      description: 'Custom Carbon Body Kit',
      status: 'In Development',
      features: ['Widebody Conversion', 'Custom Aero Package', 'Forged Wheels'],
      image: '/images/m4-preview.jpg' // Optional: Add image path
    },
    {
      number: '02',
      model: 'BMW M3',
      year: '2025',
      description: 'Custom Carbon Body Kit',
      status: 'In Development',
      features: ['Carbon Exterior Kit', 'Performance Tune', 'Titanium Exhaust'],
      image: '/images/m3-preview.jpg' // Optional: Add image path
    }
  ]

  return (
    <section id="upcoming" className="upcoming-projects">
      <div className="container">
        <div className="upcoming-header">
          <span className="section-label">What's Next</span>
          <h2 className="section-title">Upcoming Builds</h2>
          <p className="section-subtitle">
            Each build extends Kasil's signature design language — precise, purposeful, and unmistakably individual
          </p>
        </div>

        <div className="projects-showcase">
          {projects.map((project, index) => (
            <div key={index} className="project-showcase-card">
              <div className="showcase-background">
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.model} ${project.year}`}
                    className="showcase-image"
                  />
                )}
              </div>
              <div className="showcase-content">
                <div className="showcase-header">
                  <span className="showcase-number">{project.number}</span>
                  <span className="showcase-status">{project.status}</span>
                </div>
                <h3 className="showcase-model">
                  {project.model}
                  <span className="showcase-year">{project.year}</span>
                </h3>
                <p className="showcase-description">{project.description}</p>
                <div className="showcase-features">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingProjects
