'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import tfLogo from '../assets/TF Logo.jpeg'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Programs', id: 'programs' },
  { label: 'Achievements', id: 'about' },
  { label: 'Results', id: 'results' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Get In Touch', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={(e) => scrollTo(e, 'home')}>
            <Image src={tfLogo} alt="Tejas Fitness" width={52} height={52} className="navbar-logo-img" priority />
          </a>

          {/* Desktop Nav Links */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={(e) => scrollTo(e, link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + Hamburger */}
          <div className="navbar-actions">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => scrollTo(e, 'contact')}
            >
              Start Today
            </a>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul className="mobile-menu-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={(e) => scrollTo(e, link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="btn btn-primary btn-lg mobile-menu-cta"
          onClick={(e) => scrollTo(e, 'contact')}
        >
          Start Your Journey →
        </a>
      </div>
    </>
  )
}
