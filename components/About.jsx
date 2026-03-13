import Image from 'next/image'
import coachImg from '../assets/WhatsApp Image 2026-03-04 at 1.38.18 PM.jpeg'
import achieveImg from '../assets/WhatsApp Image 2026-03-04 at 1.38.59 PM.jpeg'
import ScrollReveal from './ScrollReveal'

const credentials = [
  { icon: '🏆', title: 'NASM Certified', desc: 'Personal Trainer & Nutritionist' },
  { icon: '📊', title: '45-50 Clients', desc: 'Transformed worldwide' },
  { icon: '🎓', title: 'Sports Science', desc: 'BSc Exercise Physiology' },
  { icon: '⭐', title: '6+ Years', desc: 'Professional coaching experience' },
]

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-inner">
          {/* Visual Column */}
          <ScrollReveal direction="left" className="about-visual">
            <div className="about-image-wrapper">
              <Image
                src={coachImg}
                alt="Coach Tejas — Muscle Mania Hyderabad gold medal"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 1024px) 90vw, 50vw"
                quality={85}
              />
              <div className="about-image-tint" />
            </div>

            {/* Floating badge — bottom left */}
            <div className="about-badge-card">
              <div className="about-badge-icon">🏆</div>
              <div className="about-badge-text">
                <h4>45-50</h4>
                <p>Lives Transformed</p>
              </div>
            </div>

            {/* Floating tag — top right */}
            <div className="about-float-tag">
              <strong>6+</strong>
              <span>Years Exp.</span>
            </div>

            {/* Achievement mini photo — bottom right */}
            <div className="about-achieve-card">
              <Image
                src={achieveImg}
                alt="TVK Classic 2025 — 4th Place"
                width={110}
                height={130}
                style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: '10px', display: 'block' }}
                quality={80}
              />
              <div className="about-achieve-label">🏅 TVK Classic 2025</div>
            </div>
          </ScrollReveal>

          {/* Content Column */}
          <ScrollReveal direction="right" delay={150} className="about-content">
            <div className="section-tag">Meet Your Coach</div>
            <h2 className="about-title">
              Your Coach,{' '}
              <span className="accent-text">Your Advantage</span>
            </h2>

            <p className="about-bio">
              I&apos;m Tejas — a certified personal trainer and nutrition coach with over 6 years of
              experience helping people build the body and mindset they&apos;ve always dreamed of.
              My approach blends cutting-edge sports science with practical strategies that fit
              real life.
            </p>
            <p className="about-bio">
              I don&apos;t believe in cookie-cutter programs. Every client receives a fully
              personalized plan built around their unique body, goals, and schedule — because
              that&apos;s the only way to achieve results that actually last.
            </p>

            <div className="about-credentials">
              {credentials.map((c, i) => (
                <div className="credential-item" key={i}>
                  <div className="credential-icon">{c.icon}</div>
                  <div className="credential-text">
                    <h5>{c.title}</h5>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary btn-lg">
              Work With Tejas →
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
