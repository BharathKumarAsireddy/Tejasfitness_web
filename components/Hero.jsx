import Image from 'next/image'
import heroImg from '../assets/WhatsApp Image 2026-03-04 at 1.40.05 PM.jpeg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-bg-gradient" />
        <div className="hero-grid" />
      </div>

      <div className="container">
        <div className="hero-layout">
          {/* Content */}
          <div className="hero-content">
            {/* Badge */}
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Elite Fitness Coaching — Real Results
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              Transform
              <span className="line-accent"> Your Body.</span>
              <br />
              Transform
              <br />
              Your Life.
            </h1>

            <p className="hero-description">
              Expert coaching, fully customized programs, and unwavering support — everything
              you need to break through your limits and build the physique you&apos;ve always wanted.
            </p>

            {/* CTAs */}
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary btn-lg">
                Start Your Journey →
              </a>
              <a href="#programs" className="btn btn-secondary btn-lg">
                View Programs
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">
                  500<span className="stat-accent">+</span>
                </div>
                <div className="hero-stat-label">Clients Transformed</div>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <div className="hero-stat-number">
                  8<span className="stat-accent">+</span>
                </div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <div className="hero-stat-number">
                  98<span className="stat-accent">%</span>
                </div>
                <div className="hero-stat-label">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image-col">
            <div className="hero-image-frame">
              <Image
                src={heroImg}
                alt="Coach Tejas — elite fitness training"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                priority
                quality={90}
              />
              <div className="hero-image-vignette" />
            </div>

            {/* Floating badge */}
            <div className="hero-img-badge">
              <div className="hero-img-badge-icon">🔥</div>
              <div className="hero-img-badge-text">
                <strong>Elite Training</strong>
                <span>100% Personalized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
