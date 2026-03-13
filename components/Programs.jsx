import Image from 'next/image'
import strengthImg from '../assets/WhatsApp Image 2026-03-04 at 1.40.07 PM (1).jpeg'
import nutritionImg from '../assets/WhatsApp Image 2026-03-04 at 1.41.33 PM.jpeg'
import transformImg from '../assets/WhatsApp Image 2026-03-04 at 1.40.07 PM.jpeg'
import onlineImg from '../assets/WhatsApp Image 2026-03-04 at 1.40.08 PM (2).jpeg'

const programs = [
  {
    img: strengthImg,
    imgAlt: 'Strength training — dumbbell curl',
    imgPos: 'center center',
    icon: '💪',
    title: 'Strength Training',
    description:
      'Build serious muscle and strength with science-backed programming engineered for your body type and goals.',
    features: [
      'Custom workout programming',
      'Progressive overload strategy',
      'Form & technique coaching',
      'Weekly plan adjustments',
    ],
  },
  {
    img: nutritionImg,
    imgAlt: 'Nutrition coaching — fit physique',
    imgPos: 'center top',
    icon: '🥗',
    title: 'Nutrition Coaching',
    description:
      'Fuel your transformation with a personalized nutrition strategy that fits your lifestyle and accelerates results.',
    features: [
      'Custom macro targets',
      'Flexible meal planning',
      'Supplement guidance',
      'Weekly nutrition reviews',
    ],
  },
  {
    img: transformImg,
    imgAlt: 'Body transformation — barbell squat',
    imgPos: 'center top',
    icon: '🔥',
    title: 'Body Transformation',
    description:
      'Complete body recomposition combining optimized training and nutrition for maximum fat loss and muscle gain.',
    features: [
      'Body composition analysis',
      'Cardio programming',
      'Physique goal setting',
      'Progress photo reviews',
    ],
  },
  {
    img: onlineImg,
    imgAlt: 'Online coaching — lat pulldown',
    imgPos: 'center center',
    icon: '📱',
    title: 'Online Coaching',
    description:
      'World-class coaching from anywhere on the planet. Accountability, support, and expert guidance in your pocket.',
    features: [
      'Video check-in calls',
      'App-based tracking',
      '24/7 messaging support',
      'Private community access',
    ],
  },
]

export default function Programs() {
  return (
    <section className="programs section-padding" id="programs">
      <div className="container">
        <div className="programs-header">
          <div className="section-tag">What We Offer</div>
          <h2 className="section-title">
            Programs Designed To{' '}
            <span className="accent-text">Deliver Results</span>
          </h2>
          <p className="section-subtitle">
            Every program is engineered for maximum impact with science-backed methods
            and real-world strategies that actually work.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program, i) => (
            <div className="program-card" key={i}>
              <div className="program-card-img-wrap">
                <Image
                  src={program.img}
                  alt={program.imgAlt}
                  fill
                  style={{ objectFit: 'cover', objectPosition: program.imgPos }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  quality={80}
                />
                <div className="program-card-img-overlay" />
                <div className="program-card-img-icon">{program.icon}</div>
              </div>
              <div className="program-card-body">
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <ul className="program-features">
                  {program.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <a href="#contact" className="program-link">
                  Get Started →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
