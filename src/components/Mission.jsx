export default function Mission() {
  return (
    <section className="section bg-tactical-grid" id="mission">
      <div className="wrap">
        <div className="tag-telemetry">
          <span className="pip-dot" />
          <span>PROBLEM STATEMENT & PROPOSED SOLUTION</span>
        </div>

        <div className="mission-split" style={{ marginTop: '36px' }}>
          <div>
            <h2 className="title-section" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.75rem)' }}>
              THE CRISIS: <span className="glow-text-red">ASYMMETRIC DRONE WARFARE</span>
            </h2>
            <p style={{ marginTop: '24px', fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
              Drone warfare is evolving rapidly, while existing counter-drone solutions remain costly,
              difficult to scale, and inefficient against mass drone attacks.
            </p>
            <p style={{ marginTop: '18px', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Traditional surface-to-air missile interceptors cost anywhere between $500,000 to over
              $2,000,000 per missile. Defending sovereign airspace against waves of low-cost adversary drones
              with multi-million dollar missiles creates an economically unsustainable defense posture. India
              needs an indigenous, AI-powered defence platform that delivers the lowest cost per kill.
            </p>
          </div>

          <div>
            <h2 className="title-section" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.75rem)' }}>
              THE SOLUTION: <span className="glow-text-blue">AUTONOMOUS C-UAS SWARMS</span>
            </h2>
            <p style={{ marginTop: '24px', fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
              We are building a scalable, low-cost autonomous aerial defense system designed to address
              the cost and response gaps in modern drone warfare.
            </p>
            <p style={{ marginTop: '18px', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Our approach leverages coordinated, AI-enabled unmanned systems operating collaboratively to extend
              operational coverage, adapt dynamically to changing threats, and maintain mission continuity.
              By integrating with radar and tactical command-and-control networks, the system
              enables rapid deployment of defensive aerial formations to detect, track, and neutralize low- to
              medium-altitude threats.
            </p>

            <div style={{ marginTop: '32px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-hud)', fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
                <span className="pip-dot pip-dot--green" />
                <span>Automated C2 Interoperable</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-hud)', fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
                <span className="pip-dot pip-dot--green" />
                <span>Lowest Cost-Per-Kill</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-hud)', fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
                <span className="pip-dot pip-dot--green" />
                <span>100% Indigenous Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
