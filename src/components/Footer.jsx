import { COMPANY_INFO } from '../config.js'

export default function Footer({ onRequestBriefing }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <div className="tag-telemetry" style={{ marginBottom: '16px' }}>
              <span className="pip-dot" />
              <span>DEFENCE TECHNOLOGY & ASYMMETRIC COUNTER-UAS</span>
            </div>
            <h2 className="footer__statement">
              ENGINEERING AUTONOMOUS <span>COUNTER-DRONE AIR DEFENCE.</span>
            </h2>
          </div>

          <div>
            <button type="button" className="btn-polygon" onClick={onRequestBriefing}>
              <span>Request Briefing</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__columns">
          <div>
            <img style={{ height: '36px', width: 'auto' }} src="/kalki-logo.png" alt="K.A.L.K.I Defence Systems" />
            <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.6, maxWidth: '280px' }}>
              <strong>{COMPANY_INFO.legalName}</strong>
              <br />
              {COMPANY_INFO.incorporation}
              <br />
              CIN: {COMPANY_INFO.cin}
            </p>
            <div style={{ marginTop: '16px', fontFamily: 'var(--font-hud)', fontSize: '0.8125rem', letterSpacing: '0.15em', color: 'var(--accent-red-bright)' }}>
              INCUBATED AT {COMPANY_INFO.incubator}
            </div>
          </div>

          <div>
            <div className="footer__col-title">Primary Program</div>
            <div className="footer__links">
              <a href="#system">KALKI C-UAS Platform</a>
              <a href="#system">Dynamic Swarm Allocation</a>
              <a href="#system">Optical & Vision Guidance</a>
            </div>
          </div>

          <div>
            <div className="footer__col-title">Architecture & Mission</div>
            <div className="footer__links">
              <a href="#differentiators">Strategic Differentiators</a>
              <a href="#mission">Problem & Solution</a>
              <a href="#contact">Tactical Briefing Channel</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. ALL RIGHTS RESERVED.</span>
          <span>BUILT IN BHARAT // MISSION-CRITICAL AUTONOMY // CIN: {COMPANY_INFO.cin}</span>
        </div>
      </div>
    </footer>
  )
}
