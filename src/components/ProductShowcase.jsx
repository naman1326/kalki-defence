import { useState } from 'react'
import { PRODUCT } from '../config.js'

export default function ProductShowcase({ onRequestBriefing }) {
  const [activeSub, setActiveSub] = useState('01')

  return (
    <section className="section product-showcase bg-tactical-grid" id="system">
      <div className="wrap">
        <div style={{ marginBottom: '48px' }}>
          <div className="tag-telemetry">
            <span className="pip-dot" />
            <span>PRIMARY SYSTEM // 5-UAV AUTONOMOUS TESTBED IN DEVELOPMENT</span>
          </div>
          <h2 className="title-section" style={{ marginTop: '14px' }}>
            {PRODUCT.code} // <span style={{ color: 'var(--accent-red)' }}>AUTONOMOUS C-UAS SWARM</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginTop: '12px', maxWidth: '820px', lineHeight: 1.7 }}>
            {PRODUCT.description}
          </p>
        </div>

        <div className="product-grid">
          {/* Left Column: Subsystem Hardware & AI Breakdown */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.8125rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-red-bright)', fontWeight: 700 }}>
                Core System Architecture
              </span>
              <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                CLICK TO INSPECT SUBSYSTEMS
              </span>
            </div>

            <div className="subsystems-list">
              {PRODUCT.subsystems.map((sub) => {
                const isActive = activeSub === sub.id
                return (
                  <div key={sub.id} className={`subsystem-item ${isActive ? 'is-active' : ''}`}>
                    <button
                      className="subsystem-btn"
                      onClick={() => setActiveSub(sub.id)}
                      aria-expanded={isActive}
                    >
                      <div>
                        <span className="index-badge">[{sub.id}]</span>
                        <span>{sub.title}</span>
                      </div>
                      <div className="subsystem-chevron">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>

                    {isActive && (
                      <div className="subsystem-body">
                        <p style={{ color: 'var(--accent-red-bright)', fontFamily: 'var(--font-hud)', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>
                          {sub.subtitle}
                        </p>
                        <p style={{ lineHeight: 1.65, color: 'var(--text-secondary)' }}>{sub.desc}</p>
                        <div className="subsystem-specs">
                          {sub.specs.map((sp) => (
                            <div key={sp.key}>
                              <div className="spec-cell__label">{sp.key}</div>
                              <div className="spec-cell__val">{sp.val}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div style={{ marginTop: '36px' }}>
              <button
                type="button"
                className="btn-polygon btn-polygon--red"
                onClick={onRequestBriefing}
              >
                <span>Request Technical Briefing Under NDA</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Tactical HUD Pod with Interceptor Telemetry */}
          <div>
            <div className="drone-hud-pod">
              <div className="reticle-overlay" />

              {/* Corner Telemetry Readouts */}
              <div className="telemetry-readout telemetry-readout--tl">
                SYS: KALKI C-UAS [AUTONOMOUS SWARM]
              </div>
              <div className="telemetry-readout telemetry-readout--tr">
                SEEKER: ONBOARD EDGE-AI
              </div>
              <div className="telemetry-readout telemetry-readout--bl">
                C2 LINK: DEFENCE GRID ONLINE
              </div>
              <div className="telemetry-readout telemetry-readout--br">
                ALGO: DYNAMIC SWARM ALLOCATION
              </div>

              {/* Tactical Defensive Interceptor Drone Silhouette */}
              <svg
                className="drone-silhouette-svg"
                width="340"
                height="240"
                viewBox="0 0 340 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Central High-Torque Carbon Airframe Frame */}
                <rect x="135" y="85" width="70" height="70" rx="8" fill="#18181b" stroke="#ffffff" strokeWidth="1.5" />
                
                {/* 4 Carbon Arms */}
                <line x1="140" y1="90" x2="60" y2="40" stroke="#a1a1aa" strokeWidth="6" strokeLinecap="round" />
                <line x1="200" y1="90" x2="280" y2="40" stroke="#a1a1aa" strokeWidth="6" strokeLinecap="round" />
                <line x1="140" y1="150" x2="60" y2="200" stroke="#a1a1aa" strokeWidth="6" strokeLinecap="round" />
                <line x1="200" y1="150" x2="280" y2="200" stroke="#a1a1aa" strokeWidth="6" strokeLinecap="round" />

                {/* 4 Emax ECOII Brushless Motors */}
                <circle cx="60" cy="40" r="18" fill="#27272a" stroke="#fc1920" strokeWidth="2" />
                <circle cx="280" cy="40" r="18" fill="#27272a" stroke="#fc1920" strokeWidth="2" />
                <circle cx="60" cy="200" r="18" fill="#27272a" stroke="#fc1920" strokeWidth="2" />
                <circle cx="280" cy="200" r="18" fill="#27272a" stroke="#fc1920" strokeWidth="2" />

                {/* Propeller Rotation Arcs */}
                <ellipse cx="60" cy="40" rx="36" ry="12" stroke="rgba(252,25,32,0.6)" strokeWidth="1.5" strokeDasharray="4 4" />
                <ellipse cx="280" cy="40" rx="36" ry="12" stroke="rgba(252,25,32,0.6)" strokeWidth="1.5" strokeDasharray="4 4" />
                <ellipse cx="60" cy="200" rx="36" ry="12" stroke="rgba(252,25,32,0.6)" strokeWidth="1.5" strokeDasharray="4 4" />
                <ellipse cx="280" cy="200" rx="36" ry="12" stroke="rgba(252,25,32,0.6)" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Onboard Edge AI Processor */}
                <rect x="148" y="98" width="44" height="44" rx="4" fill="#090a0f" stroke="#00e5ff" strokeWidth="1.5" />
                <text x="170" y="124" fill="#00e5ff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">EDGE AI</text>

                {/* Waveshare IMX415 8MP Forward Camera Module */}
                <circle cx="170" cy="80" r="9" fill="#fc1920" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="170" cy="80" r="3" fill="#ffffff" />

                {/* Tactical Reticle Crosshairs */}
                <circle cx="170" cy="80" r="26" stroke="rgba(252,25,32,0.7)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="130" y1="80" x2="210" y2="80" stroke="rgba(252,25,32,0.5)" strokeWidth="1" />
                <line x1="170" y1="40" x2="170" y2="120" stroke="rgba(252,25,32,0.5)" strokeWidth="1" />
              </svg>

              {/* HUD Lock Target Reticle Text */}
              <div className="drone-hud-lock-badge">
                RADAR CUE: INTEGRATED // C-UAS INTERCEPT LOCK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
