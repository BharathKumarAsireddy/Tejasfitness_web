import Link from 'next/link'

const schedule = [
  {
    time: '6:00 AM – 6:15 AM',
    phase: 'Warm-Up',
    icon: '🔥',
    details: [
      '5 min light cardio (jog in place / jumping jacks)',
      'Dynamic stretches: leg swings, arm circles, hip rotations',
      'Activation: glute bridges × 15, band pull-aparts × 15',
    ],
  },
  {
    time: '6:15 AM – 7:00 AM',
    phase: 'Strength Training Block',
    icon: '💪',
    details: [
      'Squat (Barbell / Goblet) — 4 × 10',
      'Dumbbell Romanian Deadlift — 3 × 12',
      'Incline Dumbbell Press — 4 × 10',
      'Cable / Dumbbell Row — 4 × 12',
      'Overhead Press — 3 × 10',
      'Bicep Curl superset Tricep Pushdown — 3 × 12 each',
    ],
  },
  {
    time: '7:00 AM – 7:15 AM',
    phase: 'Core & Finisher',
    icon: '⚡',
    details: [
      'Plank — 3 × 45 sec',
      'Hanging Knee Raises — 3 × 15',
      'Russian Twists — 3 × 20',
      'Optional: 10 min LISS cardio (treadmill walk / bike)',
    ],
  },
  {
    time: '7:15 AM – 7:30 AM',
    phase: 'Cool-Down & Recovery',
    icon: '🧘',
    details: [
      'Static stretches: quads, hamstrings, chest, lats',
      'Foam roll: IT band, thoracic spine, calves',
      'Deep breathing — 10 slow breaths',
    ],
  },
]

const knowledge = [
  {
    title: 'Progressive Overload',
    icon: '📈',
    body: 'Add weight, reps, or sets each week. Even 0.5 kg more is progress. Your body adapts — keep pushing the stimulus forward.',
  },
  {
    title: 'Nutrition Timing',
    icon: '🥗',
    body: 'Eat a balanced meal 1–2 hrs before training (protein + carbs). Post-workout: 30–40 g protein within 60 min to maximise muscle protein synthesis.',
  },
  {
    title: 'Rest & Sleep',
    icon: '😴',
    body: 'Muscle is built during recovery, not during the workout. Aim for 7–9 hrs of quality sleep. Schedule at least 1 full rest day per week.',
  },
  {
    title: 'Mind-Muscle Connection',
    icon: '🧠',
    body: 'Focus on the muscle you are training. Slow the eccentric (lowering) phase to 3–4 seconds. Feeling the target muscle working > just moving the weight.',
  },
  {
    title: 'Hydration',
    icon: '💧',
    body: 'Drink 3–4 L of water daily. Dehydration of even 2% drops strength and focus. Sip consistently through the day — don\'t chug just before a session.',
  },
  {
    title: 'Consistency > Perfection',
    icon: '🏆',
    body: 'One perfect workout means nothing. 3–4 consistent workouts every week for months builds the physique. Show up even on hard days.',
  },
]

export const metadata = {
  title: 'Foundation Plan — TejasFitness',
  description: 'Your complete one-day training schedule and fitness knowledge guide.',
}

export default function FoundationPlanPage() {
  return (
    <main className="fp-page">
      {/* Hero */}
      <section className="fp-hero">
        <div className="container">
          <Link href="/" className="fp-back">← Back to Home</Link>
          <div className="section-tag" style={{ marginTop: '1.5rem' }}>Foundation Plan</div>
          <h1 className="fp-title">
            Your <span className="accent-text">One-Day</span> Training Blueprint
          </h1>
          <p className="fp-subtitle">
            Follow this science-backed daily schedule and absorb the coaching knowledge
            below — this is the exact framework Tejas uses with every Foundation Plan client.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="fp-section">
        <div className="container">
          <h2 className="fp-section-title">Daily Training Schedule</h2>
          <div className="fp-timeline">
            {schedule.map((block, i) => (
              <div className="fp-block" key={i}>
                <div className="fp-block-icon">{block.icon}</div>
                <div className="fp-block-content">
                  <div className="fp-block-time">{block.time}</div>
                  <h3 className="fp-block-phase">{block.phase}</h3>
                  <ul className="fp-block-details">
                    {block.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge */}
      <section className="fp-section fp-section-alt">
        <div className="container">
          <h2 className="fp-section-title">Coaching Knowledge</h2>
          <p className="fp-section-sub">
            The principles Tejas teaches every client from day one.
          </p>
          <div className="fp-knowledge-grid">
            {knowledge.map((k, i) => (
              <div className="fp-knowledge-card" key={i}>
                <div className="fp-knowledge-icon">{k.icon}</div>
                <h4 className="fp-knowledge-title">{k.title}</h4>
                <p className="fp-knowledge-body">{k.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fp-cta-section">
        <div className="container fp-cta-inner">
          <h2 className="fp-cta-title">Ready to get your personalised plan?</h2>
          <p className="fp-cta-sub">
            The Foundation Plan gives you this schedule tailored specifically to your body,
            goals, and schedule — plus Tejas's direct support every step of the way.
          </p>
          <Link href="/#contact" className="btn btn-primary btn-lg">
            Start Foundation Plan →
          </Link>
        </div>
      </section>
    </main>
  )
}
