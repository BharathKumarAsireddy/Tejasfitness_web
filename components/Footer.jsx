import Image from 'next/image'
import tfLogo from '../assets/TF Logo.jpeg'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Programs', id: 'programs' },
  { label: 'About', id: 'about' },
  { label: 'Results', id: 'results' },
  { label: 'Pricing', id: 'pricing' },
]

const programLinks = [
  { label: 'Strength Training', id: 'programs' },
  { label: 'Nutrition Coaching', id: 'programs' },
  { label: 'Body Transformation', id: 'programs' },
  { label: 'Online Coaching', id: 'programs' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo-link">
              <Image src={tfLogo} alt="Tejas Fitness" width={72} height={72} className="footer-logo-img" />
            </a>
            <p className="footer-tagline">
              Transform your body, transform your life. Expert coaching backed by sports
              science and proven by hundreds of real client transformations.
            </p>

            {/* Social — Instagram & YouTube prominently */}
            <div className="footer-social">
              <a
                href="https://www.instagram.com/tejas__fitness?igsh=azA4djk3dzV3aGcx"
                className="social-link social-link-ig"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://youtube.com/@tejasfitness-g1t?si=sFQDm44yjYyBQy4q"
                className="social-link social-link-yt"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="footer-col-title">Navigate</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="footer-col-title">Programs</h4>
            <ul className="footer-links">
              {programLinks.map((link, i) => (
                <li key={i}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-links">
              <li><a href="#contact">Get In Touch</a></li>
              <li><a href="mailto:coach@tejasfitness.com">coach@tejasfitness.com</a></li>
              <li><a href="tel:+15551234567">+1 (555) 123-4567</a></li>
              <li><a href="#contact">Free Consultation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; 2025 <span className="footer-brand-name">TejasFitness</span>. All rights
            reserved. Built for champions.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
