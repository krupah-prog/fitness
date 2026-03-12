import './Pricing.css'

const plans = [
  {
    name: 'Rookie',
    price: '999',
    period: '/month',
    desc: 'Perfect for beginners finding their rhythm.',
    perks: [
      'Access to gym floor',
      '2 group classes/week',
      'Locker room access',
      'Fitness assessment',
    ],
    unavailable: ['Personal training', 'Nutrition coaching', 'Unlimited classes'],
  },
  {
    name: 'Warrior',
    price: '1,799',
    period: '/month',
    desc: 'For those serious about results.',
    perks: [
      'Full gym floor access',
      'Unlimited group classes',
      '2 PT sessions/month',
      'Nutrition guidance',
      'Priority class booking',
      'Guest pass (1/month)',
    ],
    unavailable: [],
    featured: true,
  },
  {
    name: 'Elite',
    price: '2,999',
    period: '/month',
    desc: 'Dedicated coaching for peak performance.',
    perks: [
      'Everything in Warrior',
      '8 PT sessions/month',
      'Custom meal planning',
      'Recovery sessions',
      'Quarterly body scan',
      'Dedicated locker',
    ],
    unavailable: [],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <p className="section-eyebrow">Membership Plans</p>
        <div className="pricing-header">
          <h2 className="section-title">Invest In<br />Your Body</h2>
          <p className="section-subtitle">
            Flexible plans with no lock-in contracts. Cancel anytime. Upgrade anytime. All prices in INR.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map(plan => (
            <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
              {plan.featured && <div className="popular-tag">⚡ Best Value</div>}
              <p className="plan-name">{plan.name}</p>
              <div className="plan-price">
                <span className="currency">₹</span>
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="plan-desc">{plan.desc}</p>
              <hr className="plan-divider" />
              <ul className="plan-perks">
                {plan.perks.map(p => (
                  <li key={p} className="perk available">
                    <span className="perk-icon">✓</span> {p}
                  </li>
                ))}
                {plan.unavailable.map(p => (
                  <li key={p} className="perk unavailable">
                    <span className="perk-icon">✗</span> {p}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={plan.featured ? 'btn-fire' : 'btn-ghost'} style={{ display: 'block', textAlign: 'center', marginTop: 'auto' }}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}