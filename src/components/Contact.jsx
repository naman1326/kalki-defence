import { CONTACT_EMAIL, DIRECT_PHONES, COMPANY_INFO } from '../config.js'

export default function Contact({ onRequestBriefing }) {
  return (
    <section className="section bg-tactical-grid" id="contact">
      <div className="wrap">
        <div className="tag-telemetry">
          <span className="pip-dot" />
          <span>SECURE DEFENCE BRIEFING CHANNEL</span>
        </div>

        <div className="contact-section-grid" style={{ marginTop: '36px' }}>
          {/* Left Column: Context & Security Policy */}
          <div>
            <h2 className="title-section">
              REQUEST A <span style={{ color: 'var(--accent-red)' }}>TACTICAL BRIEFING</span>
            </h2>
            <p style={{ marginTop: '20px', color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 300 }}>
              We welcome strategic engagements, operational capability demonstrations, and pilot deployment discussions
              with Indian Armed Forces commands, defence agencies, and critical infrastructure security authorities.
            </p>
            <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
              Our engineering team is prepared to deliver classified telemetry, flight simulations, and technical
              specifications under mutual Non-Disclosure Agreement (NDA).
            </p>

            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'var(--font-hud)', fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                <span className="pip-dot pip-dot--blue" />
                <span>Incubator: {COMPANY_INFO.incubator}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'var(--font-hud)', fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                <span className="pip-dot pip-dot--blue" />
                <span>CIN: {COMPANY_INFO.cin}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'var(--font-hud)', fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                <span className="pip-dot pip-dot--blue" />
                <span>Corporate Registration: {COMPANY_INFO.incorporation}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Contact Card (Themed after Reference Dialog) */}
          <div>
            <div className="contact-reference-card">
              <div className="contact-card-header">
                <div className="tag-telemetry tag-telemetry--blue" style={{ fontSize: '11px', padding: '3px 10px' }}>
                  <span className="pip-dot pip-dot--blue" />
                  <span>DIRECT DEFENCE INQUIRIES</span>
                </div>
                <span className="contact-card-secure-badge">ENCRYPTED CHANNEL</span>
              </div>

              {/* Email Block */}
              <div className="contact-email-block">
                <span className="contact-block-label">OFFICIAL TRANSMISSION CHANNEL</span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="contact-email-link"
                  onClick={(e) => {
                    e.preventDefault()
                    onRequestBriefing()
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <button
                  type="button"
                  className="btn-polygon btn-polygon--red contact-briefing-cta"
                  onClick={onRequestBriefing}
                >
                  <span>Request Tactical Briefing</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* 3 Clickable Mobile Numbers with Default Dialer */}
              <div className="contact-phones-block">
                <span className="contact-block-label">TACTICAL COMMUNICATIONS (DIRECT DIAL)</span>
                <div className="contact-phones-list">
                  {DIRECT_PHONES.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="contact-phone-item"
                      title={`Call ${phone.display}`}
                    >
                      <div className="contact-phone-info">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span className="contact-phone-num">{phone.display}</span>
                      </div>
                      <div className="contact-phone-dial-icon">
                        <span>DIAL</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Security Note */}
              <div className="form-security-note" style={{ marginTop: '20px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Classified & technical data shared under mutual Non-Disclosure Agreement (NDA)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
