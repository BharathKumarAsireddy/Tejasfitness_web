import Image from 'next/image'
import img1 from '../assets/WhatsApp Image 2026-03-04 at 1.40.08 PM (1).jpeg'
import img2 from '../assets/WhatsApp Image 2026-03-04 at 1.38.16 PM.jpeg'
import img3 from '../assets/WhatsApp Image 2026-03-04 at 1.40.08 PM (2).jpeg'
import img4 from '../assets/WhatsApp Image 2026-03-04 at 1.40.08 PM.jpeg'
import tfLogo from '../assets/TF Logo.jpeg'
import ScrollReveal from './ScrollReveal'

const galleryItems = [
  { src: img1, alt: 'Tejas — dumbbell curls in gym', label: 'Strength', direction: 'left', delay: 0 },
  { src: img2, alt: 'Tejas — competition physique', label: 'Discipline', direction: 'bottom', delay: 120 },
  { src: img3, alt: 'Tejas — lat pulldown back training', label: 'Sculpting', direction: 'bottom', delay: 240 },
  { src: img4, alt: 'Tejas — intense dumbbell training', label: 'Power', direction: 'right', delay: 360 },
]

export default function FitnessGallery() {
  return (
    <section className="fitness-gallery section-padding">
      <div className="container">

        {/* Instagram Profile Card */}
        <ScrollReveal direction="bottom" delay={0}>
          <div className="ig-profile-card">
            <div className="ig-profile-header">
              {/* Avatar */}
              <div className="ig-avatar-wrap">
                <Image
                  src={tfLogo}
                  alt="Tejas Fitness"
                  width={90}
                  height={90}
                  className="ig-avatar"
                />
              </div>

              {/* Profile Info */}
              <div className="ig-profile-info">
                <div className="ig-profile-top">
                  <span className="ig-username">tejasfitness</span>
                  <a
                    href="https://www.instagram.com/tejas__fitness?igsh=azA4djk3dzV3aGcx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ig-follow-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    Follow on Instagram
                  </a>
                </div>

                <div className="ig-stats">
                  <span><strong>4</strong> posts</span>
                  <span><strong>6+</strong> yrs coaching</span>
                </div>

                <div className="ig-bio">
                  <strong>Tejas Fitness</strong><br />
                  🏋️ Coach · Transform your body · Rewire your mind<br />
                  💪 Strength · Discipline · Growth<br />
                  🎯 Training · Nutrition · Accountability
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Instagram Photo Grid */}
        <div className="ig-grid">
          {galleryItems.map((item, i) => (
            <ScrollReveal key={i} direction={item.direction} delay={item.delay} className="ig-grid-reveal">
              <div className="ig-grid-item">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="ig-grid-overlay">
                  <span className="ig-grid-label">{item.label}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
