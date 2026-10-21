import RadarCanvas from './RadarCanvas.jsx'
import { PRODUCT, COMPANY_INFO } from '../config.js'

export default function Hero({ onRequestBriefing }) {
  return (
    <section className="hero bg-tactical-grid" id="top">
      <div className="hero__media" aria-hidden="true">
        <div className="hero__vignette" />
        <RadarCanvas strong={true} />
      </div>

      <div className="wrap hero__content">
        <h1 className="title-display hero__headline" style={{ marginTop: '24px' }}>
          AUTONOMOUS AIR DEFENCE THROUGH <span className="highlight">COORDINATED SWARMS.</span>
        </h1>

        <p className="hero__sub">
          <strong>{COMPANY_INFO.tagline}</strong>
          <br />
          Engineering India&rsquo;s indigenous AI-powered counter-drone aerial defence platform.
          Designed to neutralize low-to-medium altitude drone swarms with the lowest cost per kill,
          powered by onboard Edge-AI and multi-agent decentralized swarm coordination.
        </p>

        <div className="hero__actions">
          <a className="btn-polygon" href="#system">
            <span>Explore C-UAS Platform</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button type="button" className="btn-polygon-ghost" onClick={onRequestBriefing}>
            <span>Request Briefing</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="hero__metrics">
          {PRODUCT.metrics.map((m) => (
            <div className="metric-card" key={m.label}>
              <div className="metric-card__value">{m.value}</div>
              <div className="metric-card__label">{m.label}</div>
              <div className="metric-card__detail">{m.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
