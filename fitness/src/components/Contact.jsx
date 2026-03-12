import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', plan: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    console.log(form)
    setSent(true)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div className="contact-left">
          <p className="section-eyebrow">Join FORGE</p>
          <h2 className="section-title">Take The<br />First Step.</h2>
          <p className="section-subtitle">
            Fill out the form and our team will contact you within 24 hours to schedule your free trial session.
          </p>

          <div className="contact-details">
            {[
              { icon: '📍', label: 'Location', val: 'FORGE Gym, SG Highway, Ahmedabad' },
              { icon: '📞', label: 'Phone', val: '+91 98765 43210' },
              { icon: '🕐', label: 'Hours', val: 'Mon–Sat: 5am–11pm · Sun: 7am–9pm' },
            ].map(d => (
              <div className="contact-detail" key={d.label}>
                <span className="detail-icon">{d.icon}</span>
                <div>
                  <p className="detail-label">{d.label}</p>
                  <p className="detail-val">{d.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-box">
          {sent ? (
            <div className="form-success">
              <div className="success-icon">🔥</div>
              <h3>You're In!</h3>
              <p>We'll contact you within 24 hrs to set up your free trial. Get ready to FORGE.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="forge-form">
              <h3 className="form-title">Claim Your Free Trial</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input name="name" placeholder="John Doe" value={form.name} onChange={handle} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="john@email.com" value={form.email} onChange={handle} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handle} />
                </div>
                <div className="form-group">
                  <label>Interested Plan</label>
                  <select name="plan" value={form.plan} onChange={handle}>
                    <option value="">Select plan...</option>
                    <option>Rookie — ₹999/mo</option>
                    <option>Warrior — ₹1,799/mo</option>
                    <option>Elite — ₹2,999/mo</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Goals / Message</label>
                <textarea name="message" rows="4" placeholder="Tell us your fitness goals..." value={form.message} onChange={handle} />
              </div>
              <button type="submit" className="btn-fire" style={{ width: '100%', justifyContent: 'center', padding: '18px' }}>
                Book My Free Trial 🔥
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}