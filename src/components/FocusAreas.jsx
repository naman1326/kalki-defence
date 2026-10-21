import { KEY_DIFFERENTIATORS, COMPETITION_COMPARISON } from '../config.js'

export default function FocusAreas() {
  return (
    <section className="section section--dark bg-tactical-grid" id="differentiators">
      <div className="wrap">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="tag-telemetry">
            <span className="pip-dot" />
            <span>COMPETITIVE ADVANTAGE & STRATEGIC DIFFERENTIATORS</span>
          </div>
          <h2 className="title-section">
            ENGINEERED TO OUTPERFORM <span style={{ color: 'var(--accent-red)' }}>LEGACY DEFENCE</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '780px', lineHeight: 1.7 }}>
            By combining onboard edge intelligence, automated air defence C2 interoperability, and modular kinetic airframes,
            KALKI delivers an asymmetrical advantage over conventional systems and competing drone manufacturers.
          </p>
        </div>

        {/* 6 Key Differentiators Grid */}
        <div className="capabilities-grid" style={{ marginTop: '36px' }}>
          {KEY_DIFFERENTIATORS.map((diff) => (
            <div className="tactical-reticle-card capability-card" key={diff.id}>
              <div className="corner-tl" />
              <div className="corner-tr" />
              <div className="corner-bl" />
              <div className="corner-br" />
              <div className="accent-slide" />

              <div>
                <div className="capability-top">
                  <div className="tag-telemetry tag-telemetry--blue" style={{ fontSize: '11px' }}>
                    <span className="pip-dot pip-dot--blue" />
                    <span>DIFFERENTIATOR</span>
                  </div>
                  <span className="capability-idx">[{diff.id}]</span>
                </div>
                <h3 className="capability-title">{diff.title}</h3>
              </div>

              <p className="capability-body">{diff.body}</p>
            </div>
          ))}
        </div>

        {/* Competitive Benchmark Table */}
        <div style={{ marginTop: '56px' }}>
          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.8125rem', letterSpacing: '0.15em', color: 'var(--accent-red-bright)', textTransform: 'uppercase' }}>
                MARKET BENCHMARK & COMPETITIVE MATRIX
              </span>
              <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)', fontFamily: 'var(--font-display)', color: '#ffffff', marginTop: '6px' }}>
                HOW KALKI COMPUTES AGAINST ALTERNATIVES
              </h3>
            </div>
            <span className="table-scroll-hint">
              SWIPE TO COMPARE ↔
            </span>
          </div>

          <div className="competition-table-wrapper">
            <table className="competition-table">
              <thead>
                <tr>
                  <th>Player / Category</th>
                  <th>Current Market Focus</th>
                  <th>Operational Limitation</th>
                  <th>The KALKI Defence Advantage</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITION_COMPARISON.map((c) => (
                  <tr key={c.competitor}>
                    <td className="comp-name">{c.competitor}</td>
                    <td>{c.focus}</td>
                    <td className="comp-limit">{c.limitation}</td>
                    <td className="comp-edge">
                      <span className="edge-bullet">✔</span> {c.kalkiEdge}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
