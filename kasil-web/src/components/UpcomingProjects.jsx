import React from 'react'
import './UpcomingProjects.css'

function UpcomingProjects() {
  const projects = [
    {
      model: 'BMW M4',
      description: 'Custom Carbon Body Kit',
      status: 'in development'
    },
    {
      model: 'BMW M3',
      description: 'Custom Carbon Body Kit',
      status: 'in development'
    }
  ]

  return (
    <section className="upcoming-projects">
      <div className="container">
        <h2 className="section-title">Upcoming Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-model">{project.model}</h3>
              <p className="project-desc">{project.description}</p>
              <span className="project-status">({project.status})</span>
            </div>
          ))}
        </div>

        <p className="projects-footer">
          Each upcoming build will extend Kasil's signature design language — precise,
          purposeful, and unmistakably individual.
        </p>
      </div>
    </section>
  )
}

export default UpcomingProjects
