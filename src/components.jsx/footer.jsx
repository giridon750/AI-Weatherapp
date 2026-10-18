import { Droplets, Sun, Umbrella } from 'lucide-react'

const tips = [
  {
    icon: Sun,
    title: 'Beat the heat',
    description: 'Take shade during the brightest hours of the day.',
    className: 'tip-sun',
  },
  {
    icon: Droplets,
    title: 'Stay hydrated',
    description: 'Keep water close, especially when you are out and about.',
    className: 'tip-water',
  },
  {
    icon: Umbrella,
    title: 'Be rain-ready',
    description: 'A compact umbrella is always a clever companion.',
    className: 'tip-rain',
  },
]

function Footer() {
  return (
    <>
      <section className="tips-section" id="tips">
        {/* These quick tips make the forecast useful for everyday plans. */}
        <div className="section-heading tips-heading">
          <div>
            <span className="section-kicker">A LITTLE WEATHER WISDOM</span>
            <h2>Make the most of today</h2>
          </div>
        </div>

        {/* Each tip card pairs one simple weather action with a short reason. */}
        <div className="tips-grid">
          {tips.map(({ icon: Icon, title, description, className }) => (
            <article className="tip-card" key={title}>
              <span className={`tip-icon ${className}`}>
                <Icon size={20} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* The footer closes the dashboard with a short brand note. */}
      <footer className="site-footer">
        <span className="footer-brand">skyline</span>
        <span>Good days start with knowing the weather.</span>
        <span className="footer-credit">Made for your everyday forecast</span>
      </footer>
    </>
  )
}

export default Footer
