import React from 'react'
import './Expertise.css'

function Expertise() {
  const services = [
    {
      title: 'Carbon Fiber Body Kits',
      description: 'Our design philosophy is built around precision and presence. Kasil crafts custom carbon fiber and widebody kits, tailored to each vehicle\'s natural lines. From subtle enhancements to full aerodynamic transformations, each component is engineered, tested, and finished by hand.',
      features: [
        'One-of-One Custom Carbon Kits',
        'Carbon Widebody Conversions',
        'Aerodynamic Development & Fitment Consulting'
      ]
    },
    {
      title: 'Forged Monoblock Wheels',
      description: 'Engineered for strength, lightness, and visual balance — Kasil\'s forged monoblock wheels are designed in-house and machined to order. Each wheel is crafted from aerospace-grade aluminum and optimized for both performance and style.',
      features: [
        'Fully Forged Monoblock Designs',
        'Custom Offsets, Sizes & Finishes',
        'Center-Lock or 5-Lug Configurations',
        'Track or Street-Optimized Profiles'
      ]
    },
    {
      title: 'Titanium Exhaust Systems',
      description: 'Our full titanium cat-back exhaust systems with resonators deliver a distinctive tone that blends refinement with aggression. Designed for precision fitment and optimal flow, every system is constructed from lightweight, high-grade titanium — ensuring both acoustic character and performance gains.',
      features: []
    },
    {
      title: 'Performance Tuning',
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
      <div className="container">
        <h2 className="section-title">Our Expertise</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              {service.features.length > 0 && (
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
