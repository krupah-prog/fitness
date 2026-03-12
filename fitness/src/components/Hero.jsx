import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Noise texture overlay */}
      <div className="hero-noise" />

      {/* Background image placeholder */}
      <div className="hero-bg" />

      <div className="container hero-content">
        <p className="section-eyebrow" style={{ color: '#F5A623' }}>
          Est. 2018 · Ahmedabad
        </p>

        <h1 className="hero-headline">
          FORGE<br />
          YOUR<br />
          <span className="fire-text">LIMITS.</span>
        </h1>

        <p className="hero-sub">
          Elite training. World-class coaches. A community built on grit.
          Join FORGE and discover what you're truly capable of.
        </p>

        <div className="hero-actions">
          <a href="#programs" className="btn-fire">
            Start Training
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#pricing" className="btn-ghost">View Memberships</a>
        </div>

        <div className="hero-marquee-wrapper">
          <div className="hero-marquee">
            {Array(2).fill(['STRENGTH', 'ENDURANCE', 'POWER', 'SPEED', 'FOCUS', 'DISCIPLINE', 'FORGE']).flat().map((word, i) => (
              <span key={i} className="marquee-item">
                {word} <em>✦</em>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}