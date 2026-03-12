import './Trainers.css'

const trainers = [
  {
    name: 'Marcus Steel',
    role: 'Head Strength Coach',
    specialty: 'Powerlifting · Olympic Lifting',
    exp: '10 yrs',
    cert: 'NSCA-CSCS',
    initials: 'MS',
    color: '#FF4500',
  },
  {
    name: 'Priya Khatri',
    role: 'HIIT & Cardio Specialist',
    specialty: 'HIIT · Nutrition · Cycling',
    exp: '7 yrs',
    cert: 'ACE-CPT',
    initials: 'PK',
    color: '#F5A623',
  },
  {
    name: 'Dani Torres',
    role: 'Combat & MMA Coach',
    specialty: 'Boxing · BJJ · Kickboxing',
    exp: '12 yrs',
    cert: 'NASM · UFC Gym Certified',
    initials: 'DT',
    color: '#FF4500',
  },
  {
    name: 'Leo Marsh',
    role: 'Mobility & Recovery Coach',
    specialty: 'Yoga · Physiotherapy · Stretch',
    exp: '5 yrs',
    cert: 'RYT-500 · CSMT',
    initials: 'LM',
    color: '#F5A623',
  },
]

export default function Trainers() {
  return (
    <section id="trainers" className="trainers-section">
      <div className="container">
        <p className="section-eyebrow">The Coaches</p>
        <div className="trainers-header">
          <h2 className="section-title">Trained By<br />The Best</h2>
          <p className="section-subtitle">
            Every FORGE trainer is certified, experienced, and obsessed with your results.
            No exceptions.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map(t => (
            <div className="trainer-card" key={t.name}>
              <div className="trainer-avatar" style={{ '--trainer-color': t.color }}>
                {t.initials}
              </div>
              <div className="trainer-info">
                <h3 className="trainer-name">{t.name}</h3>
                <p className="trainer-role">{t.role}</p>
                <p className="trainer-specialty">{t.specialty}</p>
                <div className="trainer-badges">
                  <span className="tbadge">📋 {t.cert}</span>
                  <span className="tbadge">⏱ {t.exp} exp</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}