import { VISION } from '../config.js'

export default function Vision() {
  return (
    <section className="section section--panel bg-tactical-grid" id="vision">
      <div className="wrap">
        <div className="tag-telemetry">
          <span className="pip-dot" />
          <span>STRATEGIC VISION & SCALING</span>
        </div>

        <h2 className="title-section" style={{ marginTop: '14px', maxWidth: '850px' }}>
          SCALING MASS PRODUCTION FOR <span style={{ color: 'var(--accent-red)' }}>NATIONAL SECURITY</span>
        </h2>

        <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {VISION.map((v, i) => (
            <div
              key={v.title}
              className="tactical-reticle-card"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div className="corner-tl" />
              <div className="corner-tr" />
              <div className="corner-bl" />
              <div className="corner-br" />
              <div className="accent-slide" />

              <div>
                <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.8125rem', color: 'var(--accent-red-bright)', letterSpacing: '0.2em' }}>
                  PILLAR 0{i + 1}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, textTransform: 'uppercase', marginTop: '12px', color: '#ffffff' }}>
                  {v.title}
                </h3>
              </div>

              <p style={{ marginTop: '16px', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
