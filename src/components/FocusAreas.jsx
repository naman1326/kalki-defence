import { FOCUS } from '../config.js'
import { CuasIcon, DetectIcon, EdgeIcon, CommandIcon } from './Icons.jsx'

const ICONS = { cuas: CuasIcon, detect: DetectIcon, edge: EdgeIcon, command: CommandIcon }

export default function FocusAreas() {
  return (
    <section className="section focus" id="focus">
      <div className="wrap">
        <h2 className="h-section">Focus areas</h2>
        <div className="focus__list">
          {FOCUS.map((f) => {
            const Icon = ICONS[f.id]
            return (
              <article className="focus__row" key={f.id} tabIndex={0}>
                <h3 className="focus__title">{f.title}</h3>
                <p className="focus__body">{f.body}</p>
                <div className="focus__icon"><Icon /></div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
