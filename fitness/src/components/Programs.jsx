import './Programs.css'

const programs = [
  {
    tag: 'Strength',
    title: 'Iron Atlas',
    desc: 'Progressive overload-based strength training designed to build raw power. Barbell, dumbbell, and compound movements.',
    schedule: 'Mon · Wed · Fri',
    level: 'All Levels',
    emoji: '🏋️',
  },
  {
    tag: 'Cardio',
    title: 'Inferno HIIT',
    desc: 'High-intensity intervals that torch calories and skyrocket endurance. 45-minute sessions, zero rest days accepted.',
    schedule: 'Tue · Thu · Sat',
    level: 'Intermediate',
    emoji: '🔥',
    featured: true,
  },
  {
    tag: 'Combat',
    title: 'Strike & Grapple',
    desc: 'Boxing, kickboxing and BJJ fundamentals for fitness and self-defence. No experience needed — just heart.',
    schedule: 'Mon · Thu · Sat',
    level: 'Beginner',
    emoji: '🥊',
  },
  {
    tag: 'Recovery',
    title: 'Flow & Restore',
    desc: 'Mobility, yoga and deep-stretch sessions to keep your body performing at its peak between hard training days.',
    schedule: 'Daily',
    level: 'All Levels',
    emoji: '🧘',
  },
  {
    tag: 'Endurance',
    title: 'CrossFit WOD',
    desc: 'Daily workout of the day combining gymnastics, weightlifting and metabolic conditioning for total fitness.',
    schedule: 'Mon–Sat',
    level: 'Advanced',
    emoji: '⚡',
  },
  {
    tag: 'Cycle',
    title: 'Ride or Die',
    desc: 'Indoor cycling sessions to the best music. Build lower-body strength and cardiovascular stamina simultaneously.',
    schedule: 'Tue · Thu · Sun',
    level: 'All Levels',
    emoji: '🚴',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="programs-section">
      <div className="container">
        <div className="programs-header">
          <div>
            <p className="section-eyebrow">Training Programs</p>
            <h2 className="section-title">Choose Your<br />Battle Plan</h2>
          </div>
          <p className="section-subtitle">
            Eight elite programs engineered by professional coaches. Find the one that matches your goals — or mix them all.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((p, i) => (
            <div className={`program-card ${p.featured ? 'featured' : ''}`} key={p.title}
                 style={{ animationDelay: `${i * 0.07}s` }}>
              {p.featured && <div className="featured-badge">Most Popular</div>}
              <div className="prog-icon">{p.emoji}</div>
              <span className="prog-tag">{p.tag}</span>
              <h3 className="prog-title">{p.title}</h3>
              <p className="prog-desc">{p.desc}</p>
              <div className="prog-meta">
                <span>📅 {p.schedule}</span>
                <span>⚡ {p.level}</span>
              </div>
              <a href="#contact" className={p.featured ? 'btn-fire' : 'btn-ghost'} style={{ marginTop: 'auto', display: 'inline-block', textAlign: 'center' }}>
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}