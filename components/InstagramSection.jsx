import Image from 'next/image'
import tfLogo from '../assets/TF Logo.jpeg'
import post1 from '../assets/WhatsApp Image 2026-03-04 at 1.40.07 PM.jpeg'
import post2 from '../assets/WhatsApp Image 2026-03-04 at 1.40.08 PM.jpeg'
import post3 from '../assets/WhatsApp Image 2026-03-04 at 1.41.33 PM.jpeg'

const IG_URL = 'https://www.instagram.com/tejas__fitness?igsh=azA4djk3dzV3aGcx'

export default function InstagramSection() {
  return (
    <section className="ig-section section-padding">
      <div className="container">
        <div className="ig-wrapper">

          {/* Profile card */}
          <div className="ig-card">
            {/* Left — avatar */}
            <div className="ig-avatar-wrap">
              <Image
                src={tfLogo}
                alt="TejasFitness Instagram"
                width={80}
                height={80}
                className="ig-avatar"
              />
            </div>

            {/* Right — info */}
            <div className="ig-info">
              <h3 className="ig-name">Tejas Fitness</h3>
              <p className="ig-handle">@tejasfitness</p>
              <p className="ig-role">Coach</p>

              <ul className="ig-bio">
                <li>🔥 Coach · Transform your body · Rewire your mind</li>
                <li>🧠 Discipline · Structure · Growth</li>
                <li>🏋🏼 Training · Nutrition · Accountability</li>
              </ul>

              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary ig-follow-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Post thumbnails */}
          <div className="ig-posts">
            {[post1, post2, post3].map((src, i) => (
              <a
                key={i}
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ig-post-thumb"
              >
                <Image
                  src={src}
                  alt={`TejasFitness post ${i + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 90vw, 30vw"
                />
                <div className="ig-post-overlay">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
