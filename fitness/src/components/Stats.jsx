import './Stats.css'

const stats = [
  { number: '1,200+', label: 'Active Members' },
  { number: '18',     label: 'Expert Trainers' },
  { number: '32+',    label: 'Classes Weekly' },
  { number: '6',      label: 'Years of Excellence' },
]

export default function Stats() {
  return (
    <div className="stats-bar">
      <div className="container stats-inner">
        {stats.map((s, i) => (
          <div className="stat-block" key={s.label}>
            <span className="stat-num">{s.number}</span>
            <span className="stat-label">{s.label}</span>
            {i < stats.length - 1 && <div className="stat-sep" />}
          </div>
        ))}
      </div>
    </div>
  )
}