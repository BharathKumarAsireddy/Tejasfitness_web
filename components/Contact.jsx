'use client'

import { useState } from 'react'

const contactDetails = [
  { icon: '📧', title: 'Email Us', value: 'mangalateja7@gmail.com' },
  { icon: '📱', title: 'WhatsApp', value: '+91 9908768039' },
  { icon: '📍', title: 'Location', value: 'Worldwide Online Coaching' },
  { icon: '⏰', title: 'Response Time', value: 'Within 24 hours' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      // Redirect to Instagram DM with new lead message
      const msg = encodeURIComponent(
        `New Lead!\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nGoal: ${formData.goal}\nMessage: ${formData.message}`
      )
      window.open(`https://ig.me/m/tejas__fitness?text=${msg}`, '_blank')
    }, 1600)
  }

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="contact-inner">
          {/* Left column — info */}
          <div className="contact-info">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title">
              Ready To{' '}
              <span className="accent-text">Start?</span>
            </h2>
            <p className="section-subtitle">
              Fill out the form and Tejas will personally reach out within 24 hours to
              discuss your goals and find the perfect program for you.
            </p>

            <div className="contact-details">
              {contactDetails.map((d, i) => (
                <div className="contact-detail" key={i}>
                  <div className="contact-detail-icon">{d.icon}</div>
                  <div className="contact-detail-text">
                    <h5>{d.title}</h5>
                    <p>{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div className="contact-form-wrapper">
            <h3 className="contact-form-title">Start Your Journey</h3>
            <p className="contact-form-subtitle">
              Free consultation &bull; No commitment required
            </p>

            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">🎉</div>
                <h4>Message Sent!</h4>
                <p>
                  Thanks for reaching out! Tejas will get back to you within 24 hours
                  to discuss your goals and the best path forward for you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                    />
                  </div>

                  {/* Email */}
                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>

                  {/* Goal */}
                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="goal">
                      Primary Goal *
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      className="form-select"
                      value={formData.goal}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select your main goal...
                      </option>
                      <option value="fat-loss">Fat Loss &amp; Toning</option>
                      <option value="muscle-gain">Muscle Building</option>
                      <option value="body-recomp">Body Recomposition</option>
                      <option value="athletic">Athletic Performance</option>
                      <option value="general">General Fitness &amp; Health</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="message">
                      Tell Me About Yourself
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Share your fitness background, current situation, and what you hope to achieve..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg form-submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message & Start Journey →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
