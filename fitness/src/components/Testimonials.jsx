import { useState } from 'react'
import './Testimonials.css'

const reviews = [
  {
    name: 'Rahul M.',
    role: 'Lost 18kg in 5 months',
    text: "FORGE completely changed my life. Marcus pushed me beyond what I thought was possible. The community here is unlike anything I have experienced at other gyms.",
    rating: 5,
    initial: 'R',
  },
  {
    name: 'Sneha P.',
    role: 'Competed in first powerlifting meet',
    text: "Priya's HIIT classes are absolutely brutal — in the best way. I have gone from a complete beginner to deadlifting 90kg in under a year. Worth every rupee.",
    rating: 5,
    initial: 'S',
  },
  {
    name: 'Arjun K.',
    role: 'Warrior member for 2 years',
    text: "The trainers genuinely care. Dani's boxing class is my therapy. The facilities are always clean, equipment is top-notch, and the energy is unmatched.",
    rating: 5,
    initial: 'A',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const r = reviews[active]

  return (
    <section className="testimonials-section">
      <div className="container">
        <p className="section-eyebrow">Member Stories</p>
        <h2 className="section-title">Real People.<br />Real Results.</h2>

        <div className="testimonial-stage">
          <div className="testimonial-quote">
            <span className="quote-mark">"</span>
            <p className="quote-text">{r.text}</p>
            <div className="quote-author">
              <div className="quote-avatar">{r.initial}</div>
              <div>
                <p className="quote-name">{r.name}</p>
                <p className="quote-role">{r.role}</p>
              </div>
              <div className="stars">{'★'.repeat(r.rating)}</div>
            </div>
          </div>

          <div className="testimonial-nav">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`nav-dot ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}