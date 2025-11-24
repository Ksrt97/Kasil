import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">KASIL</h2>
            <p className="footer-tagline">Bespoke. Powerful. Uncompromised.</p>
            <p className="footer-description">
              Kasil builds are not mass-produced — they're engineered experiences,
              designed for those who demand exclusivity and perfection in every line and curve.
            </p>
          </div>

          <div className="footer-info">
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Carbon Fiber Body Kits</li>
                <li>Forged Monoblock Wheels</li>
                <li>Titanium Exhaust Systems</li>
                <li>Performance Tuning</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>inquiries@kasil.com</li>
                <li>Instagram: @kasil</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kasil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
