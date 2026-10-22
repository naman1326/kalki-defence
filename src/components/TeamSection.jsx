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
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-contact-linkedin team-contact-linkedin--clickable"
                  title={`Connect with ${m.name} on LinkedIn`}
                >
                  <div className="team-contact-linkedin__main">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LINKEDIN PROFILE</span>
                  </div>
                  <span className="linkedin-tag">
                    <span>CONNECT</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
