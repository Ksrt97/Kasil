import React, { useState } from 'react'
import './Expertise.css'

function Expertise() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      number: '01',
      title: 'Carbon Fiber Body Kits',
      shortDesc: 'Precision & Presence',
      description: 'Our design philosophy is built around precision and presence. Kasil crafts custom carbon fiber and widebody kits, tailored to each vehicle\'s natural lines. From subtle enhancements to full aerodynamic transformations, each component is engineered, tested, and finished by hand.',
      features: [
        'One-of-One Custom Carbon Kits',
        'Carbon Widebody Conversions',
        'Aerodynamic Development & Fitment Consulting'
      ]
    },
    {
      number: '02',
      title: 'Forged Monoblock Wheels',
      shortDesc: 'Strength & Artistry',
      description: 'Engineered for strength, lightness, and visual balance — Kasil\'s forged monoblock wheels are designed in-house and machined to order. Each wheel is crafted from aerospace-grade aluminum and optimized for both performance and style.',
      features: [
        'Fully Forged Monoblock Designs',
        'Custom Offsets, Sizes & Finishes',
        'Center-Lock or 5-Lug Configurations',
        'Track or Street-Optimized Profiles'
      ]
    },
    {
      number: '03',
      title: 'Titanium Exhaust Systems',
      shortDesc: 'Acoustic Excellence',
      description: 'Our full titanium cat-back exhaust systems with resonators deliver a distinctive tone that blends refinement with aggression. Designed for precision fitment and optimal flow, every system is constructed from lightweight, high-grade titanium — ensuring both acoustic character and performance gains.',
      features: [
        'Full Titanium Construction',
        'Precision Engineered Resonators',
        'Optimal Flow Dynamics'
      ]
    },
    {
      number: '04',
      title: 'Performance Tuning',
      shortDesc: 'Unleash Potential',
      description: 'Through our partnership with Stage 4 Tuning, we offer custom ECU tunes and piggyback systems to unlock every vehicle\'s full potential. From calibrated daily performance to track-optimized configurations, Kasil ensures every build performs as beautifully as it looks.',
      features: [
        'ECU Remapping',
        'Piggyback Systems',
        'Dyno-Tuned Performance Packages'
      ]
    }
  ]

  return (
    <section id="expertise" className="expertise">
      <div className="expertise-header">
        <div className="container">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">
            Four pillars of automotive excellence, crafted to perfection
          </p>
        </div>
      </div>

      <div className="expertise-content">
        <div className="container-wide">
          <div className="services-tabs">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-tab ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <span className="tab-number">{service.number}</span>
                <span className="tab-title">{service.title}</span>
                <span className="tab-desc">{service.shortDesc}</span>
              </button>
            ))}
          </div>

          <div className="service-detail">
            <div className="detail-content">
              <div className="detail-header">
                <span className="detail-number">{services[activeService].number}</span>
                <h3 className="detail-title">{services[activeService].title}</h3>
              </div>
              <p className="detail-description">{services[activeService].description}</p>
              <div className="detail-features">
                {services[activeService].features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-line"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
