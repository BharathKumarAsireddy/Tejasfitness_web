'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const plans = [
  {
    name: 'Foundation Plan',
    title: 'Foundation',
    price: '1999',
    description:
      'The perfect starting point for those ready to build a solid foundation and start seeing real results.',
    features: [
      { text: 'Custom workout program', available: true },
      { text: 'Nutrition guide & macro targets', available: true },
      { text: 'Bi-weekly check-in calls', available: true },
      { text: 'Email support (48hr response)', available: true },
      { text: 'Access to exercise video library', available: true },
      { text: '1-on-1 video coaching sessions', available: false },
      { text: 'Daily messaging support', available: false },
      { text: 'Same-day priority response', available: false },
    ],
    featured: false,
    cta: 'Get Started',
    href: '/foundation-plan',
  },
  {
    name: "The Coach's Edge",
    title: "The Coach's Edge",
    price: '3999',
    description:
      'The full coaching experience for serious athletes who want maximum accountability and the fastest results.',
    features: [
      { text: 'Fully custom workout program', available: true },
      { text: 'Full personalized nutrition coaching', available: true },
      { text: 'Weekly check-in calls & reviews', available: true },
      { text: 'Priority email support', available: true },
      { text: 'Access to exercise video library', available: true },
      { text: '2x monthly video coaching sessions', available: true },
      { text: 'Daily messaging support', available: true },
      { text: 'Same-day priority response', available: true },
    ],
    featured: true,
    cta: 'Start Now',
    href: '#contact',
  },
]

export default function Pricing() {
  const router = useRouter()
  const [selected, setSelected] = useState(null)

  const handleSelect = (plan) => {
    setSelected(plan.name)
    if (plan.name === 'Foundation Plan') {
      router.push('/foundation-plan')
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pricing section-padding" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <div className="section-tag">Pricing Plans</div>
          <h2 className="section-title">
            Invest In{' '}
            <span className="accent-text">Your Best Self</span>
          </h2>
          <p className="section-subtitle">
            Choose the plan that fits your goals. Both plans include everything you need
            to start seeing real, lasting transformations.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              className={`pricing-card${plan.featured ? ' featured' : ''}${selected === plan.name ? ' plan-selected' : ''}`}
              key={i}
              onClick={() => handleSelect(plan)}
              style={{ cursor: 'pointer' }}
            >
              {plan.featured && (
                <div className="featured-badge">Most Popular</div>
              )}

              <div className="plan-name">{plan.name}</div>
              <h3 className="plan-title">{plan.title}</h3>

              <div className="plan-price">
                <span className="currency">₹</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/mo</span>
              </div>

              <p className="plan-description">{plan.description}</p>
              <div className="plan-divider" />

              <ul className="plan-features">
                {plan.features.map((feature, j) => (
                  <li key={j} className={!feature.available ? 'unavailable' : ''}>
                    <span className="check">{feature.available ? '✓' : '×'}</span>
                    {feature.text}
                  </li>
                ))}
              </ul>

              {/* Checkbox selector */}
              <label className="plan-checkbox-label" onClick={() => handleSelect(plan)}>
                <span className={`plan-checkbox${selected === plan.name ? ' checked' : ''}`}>
                  {selected === plan.name ? '✓' : ''}
                </span>
                <span className="plan-checkbox-text">
                  {selected === plan.name ? 'Plan Selected' : 'Select this plan'}
                </span>
              </label>

              {plan.name === 'Foundation Plan' ? (
                <Link href="/foundation-plan" className="btn btn-outline plan-cta">
                  {plan.cta} →
                </Link>
              ) : (
                <a
                  href="#contact"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} plan-cta`}
                >
                  {plan.cta} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
