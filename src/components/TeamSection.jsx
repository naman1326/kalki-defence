import { TEAM_MEMBERS, COMPANY_INFO } from '../config.js'

export default function TeamSection() {
  return (
    <section className="section bg-tactical-grid" id="team">
      <div className="wrap">
        <div style={{ maxWidth: '850px' }}>
          <div className="tag-telemetry">
            <span className="pip-dot" />
            <span>FOUNDING TEAM & INCUBATION</span>
          </div>
          <h2 className="title-section" style={{ marginTop: '14px' }}>
            TEAM KDS // <span style={{ color: 'var(--accent-red)' }}>ENGINEERING LEADERSHIP</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginTop: '12px', lineHeight: 1.7 }}>
            Built by engineers and researchers from VIT Chennai, incubated at V-NEST, developing sovereign AI-driven counter-drone aerial defence platforms.
          </p>
        </div>

        {/* Legal Incorporation Banner */}
        <div className="tactical-reticle-card" style={{ marginTop: '36px', padding: '24px', background: 'rgba(252, 25, 32, 0.04)', borderColor: 'rgba(252, 25, 32, 0.3)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-hud)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--accent-red-bright)', textTransform: 'uppercase' }}>
                STATUTORY CORPORATE REGISTRATION
              </div>
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', color: '#ffffff', marginTop: '4px' }}>
                {COMPANY_INFO.legalName}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '4px' }}>
                {COMPANY_INFO.incorporation}
              </p>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                CORPORATE IDENTITY NUMBER (CIN)
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#00e5ff', fontWeight: 700, letterSpacing: '0.05em', marginTop: '4px' }}>
                {COMPANY_INFO.cin}
              </div>
              <div style={{ fontFamily: 'var(--font-hud)', fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '4px', letterSpacing: '0.1em' }}>
                INCUBATED AT {COMPANY_INFO.incubator}
              </div>
            </div>
          </div>
        </div>

        {/* 6 Founders Grid */}
        <div className="team-grid" style={{ marginTop: '40px' }}>
          {TEAM_MEMBERS.map((m) => (
            <div key={m.name} className="tactical-reticle-card team-card">
              <div className="corner-tl" />
              <div className="corner-tr" />
              <div className="corner-bl" />
              <div className="corner-br" />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="tag-telemetry tag-telemetry--blue" style={{ fontSize: '10px', padding: '2px 8px' }}>
                  TEAM KDS
                </span>
                <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.75rem', color: 'var(--accent-red-bright)', letterSpacing: '0.1em' }}>
                  CORE
                </span>
              </div>

              <h3 className="team-card__name">{m.name}</h3>
              <div className="team-card__role">{m.role}</div>

              <div className="team-card__contacts" style={{ marginTop: '20px' }}>
                <a
                  href={`tel:${m.tel}`}
                  className="team-contact-phone team-contact-phone--clickable"
                  title={`Dial ${m.name}: ${m.mobile}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{m.mobile}</span>
                  <span className="phone-dial-tag">CALL</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
