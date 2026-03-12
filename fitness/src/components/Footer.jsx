import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">FORGE<span>.</span></p>
          <p className="footer-tagline">Where strength is built,<br />limits are broken,<br />champions are made.</p>
          <div className="footer-socials">
            {['Instagram', 'Facebook', 'YouTube', 'WhatsApp'].map(s => (
              <a href="#" key={s} className="social-pill">{s}</a>
            ))}
          </div>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <p className="fcol-title">Programs</p>
            <ul>
              {['Iron Atlas', 'Inferno HIIT', 'Strike & Grapple', 'Flow & Restore', 'CrossFit WOD', 'Ride or Die'].map(p => (
                <li key={p}><a href="#programs">{p}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <p className="fcol-title">Studio</p>
            <ul>
              {['About FORGE', 'Our Trainers', 'Membership', 'Free Trial', 'Schedule', 'Contact'].map(p => (
                <li key={p}><a href="#">{p}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <p className="fcol-title">Contact</p>
            <ul>
              <li>SG Highway, Ahmedabad</li>
              <li>+91 98765 43210</li>
              <li>hello@forgefitness.in</li>
              <li style={{ marginTop: '8px', color: 'var(--accent)', fontWeight: 600 }}>
                Mon–Sat: 5am–11pm
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} FORGE Fitness Studio. All rights reserved.</p>
          <p>Built with 💪 for champions</p>
        </div>
      </div>
    </footer>
  )
}