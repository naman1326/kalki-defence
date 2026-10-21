import { PARTNERS } from '../config.js'

export default function PartnerTicker() {
  // Double list to create seamless loop
  const list = [...PARTNERS, ...PARTNERS]

  return (
    <section className="ticker-section" aria-label="Ecosystem Partners and Collaborators">
      <div className="wrap" style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div className="tag-telemetry" style={{ justifyContent: 'center' }}>
          <span className="pip-dot pip-dot--blue" />
          <span>DEFENCE ECOSYSTEM & COLLABORATORS</span>
        </div>
      </div>

      <div className="ticker-wrapper">
        <div className="ticker-track">
          {list.map((p, idx) => (
            <div className="ticker-item" key={`${p.name}-${idx}`}>
              <span className="ticker-item__name">{p.name}</span>
              <span className="ticker-item__cat">{p.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
