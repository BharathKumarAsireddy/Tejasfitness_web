import Image from 'next/image'
import img1 from '../assets/WhatsApp Image 2026-03-04 at 1.40.08 PM (1).jpeg'
import img2 from '../assets/WhatsApp Image 2026-03-04 at 1.38.16 PM.jpeg'
import img3 from '../assets/WhatsApp Image 2026-03-04 at 1.40.08 PM (2).jpeg'
import img4 from '../assets/WhatsApp Image 2026-03-04 at 1.40.08 PM.jpeg'
import ScrollReveal from './ScrollReveal'

const galleryItems = [
  { src: img1, alt: 'Tejas — dumbbell curls in gym', label: 'Strength', direction: 'left', delay: 0 },
  { src: img2, alt: 'Tejas — competition physique', label: 'Discipline', direction: 'bottom', delay: 120 },
  { src: img3, alt: 'Tejas — lat pulldown back training', label: 'Sculpting', direction: 'bottom', delay: 240 },
  { src: img4, alt: 'Tejas — intense dumbbell training', label: 'Power', direction: 'right', delay: 360 },
]

export default function FitnessGallery() {
  return (
    <section className="fitness-gallery">
      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <ScrollReveal key={i} direction={item.direction} delay={item.delay} className="gallery-reveal-wrap">
            <div className="gallery-item">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-label">{item.label}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
