
import { CloudSun, Compass, House } from 'lucide-react'

function Navbar() {
  return (
    <header className="navbar">
      {/* The brand and navigation links form a compact, responsive header. */}
      <a className="brand" href="#top" aria-label="Skyline Weather home">
        <span className="brand-icon">
          <CloudSun size={27} strokeWidth={1.8} />
        </span>
        <span className="brand-copy">
          <span className="brand-name">skyline</span>
          <span className="brand-caption">WEATHER, MADE CLEAR</span>
        </span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a className="nav-link nav-link-active" href="#top">
          <House size={16} />
          <span>Dashboard</span>
        </a>
        <a className="nav-link" href="#forecast">
          <Compass size={16} />
          <span>Forecast</span>
        </a>
        <a className="nav-link" href="#tips">
          <span>Weather tips</span>
        </a>
      </nav>
      <span className="nav-status">
        <span className="status-dot" />
        Live conditions
      </span>
    </header>
  )
}

export default Navbar