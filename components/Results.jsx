const testimonials = [
  {
    stars: 5,
    text: "Tejas completely changed the way I think about fitness. In just 12 weeks I lost 18 lbs of fat while gaining noticeable muscle. The personalized approach made all the difference — no cookie-cutter plans, just real results.",
    name: 'Marcus T.',
    result: 'Lost 18 lbs in 12 weeks',
    initial: 'M',
  },
  {
    stars: 5,
    text: "I've tried every program out there. Nothing worked until I found Tejas. His nutrition coaching alone was worth 10x the price. Down 25 lbs and finally feeling incredible about myself.",
    name: 'Sarah K.',
    result: 'Lost 25 lbs, found confidence',
    initial: 'S',
  },
  {
    stars: 5,
    text: "The Coach's Edge program is unreal. Having Tejas available when I need him made staying consistent so much easier. Best investment I've ever made in my health. My physique is completely transformed.",
    name: 'David R.',
    result: 'Gained 12 lbs of lean muscle',
    initial: 'D',
  },
  {
    stars: 5,
    text: "As a busy mom of three, I thought getting back in shape was impossible. Tejas designed everything around my schedule. Six months later, I'm in the best shape of my life. Absolutely life-changing.",
    name: 'Jennifer M.',
    result: 'Post-pregnancy transformation',
    initial: 'J',
  },
  {
    stars: 5,
    text: "I was skeptical about online coaching but Tejas proved me completely wrong. His knowledge, attention to detail, and genuine care for his clients is unmatched. I've referred five friends already.",
    name: 'Alex P.',
    result: 'Full body recomposition',
    initial: 'A',
  },
  {
    stars: 5,
    text: "Lost 30 pounds in 5 months without feeling deprived once. The nutrition plan was sustainable and the workouts were actually enjoyable. Tejas keeps you accountable without being harsh. Life-changing.",
    name: 'Rachel N.',
    result: 'Lost 30 lbs in 5 months',
    initial: 'R',
  },
]

const stats = [
  { number: '45-50', label: 'Clients Transformed' },
  { number: '98%', label: 'Success Rate' },
  { number: '4.9★', label: 'Average Rating' },
  { number: '6+', label: 'Years Coaching' },
]

export default function Results() {
  return (
    <section className="results section-padding" id="results">
      <div className="container">
        <div className="results-header">
          <div className="section-tag">Client Results</div>
          <h2 className="section-title">
            Real People.{' '}
            <span className="accent-text">Real Results.</span>
          </h2>
          <p className="section-subtitle">
            Don&apos;t take our word for it. Here&apos;s what our clients say about their
            transformation journey with TejasFitness.
          </p>
        </div>

        {/* Testimonials — left-to-right marquee */}
        <div className="testimonials-scroll-wrapper">
          <div className="testimonials-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div className="testimonial-info">
                    <h4>{t.name}</h4>
                    <p>{t.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="results-stats-bar">
          {stats.map((s, i) => (
            <div className="result-stat" key={i}>
              <div className="result-stat-number">{s.number}</div>
              <div className="result-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
