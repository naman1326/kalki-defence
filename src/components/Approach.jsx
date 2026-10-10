import { STAGES } from '../config.js'

export default function Approach() {
  return (
    <section className="section approach" id="approach">
      <div className="wrap">
        <h2 className="h-section">From sky to decision</h2>
        <p className="approach__intro">
          Sensing, edge AI and software are built to work as one system, not three separate products.
        </p>
        <ol className="stages">
          {STAGES.map((s) => (
            <li className="stage" key={s.n}>
              <span className="stage__node" aria-hidden="true">{s.n}</span>
              <h3 className="stage__title">{s.title}</h3>
              <p className="stage__body">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
