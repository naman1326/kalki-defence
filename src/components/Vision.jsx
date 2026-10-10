import { VISION } from '../config.js'

export default function Vision() {
  return (
    <section className="section vision" id="vision">
      <div className="wrap">
        <h2 className="h-label">Our vision</h2>
        <p className="vision__statement">
          To contribute to India&rsquo;s self-reliance in defence technology through indigenous
          engineering, practical innovation and scalable solutions.
        </p>
        <div className="vision__cols">
          {VISION.map((v) => (
            <div className="vision__col" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
