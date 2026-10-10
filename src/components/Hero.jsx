import { useState } from 'react'
import RadarCanvas from './RadarCanvas.jsx'
import { HERO_VIDEO, HERO_POSTER } from '../config.js'

export default function Hero({ onWatch }) {
  const [videoOk, setVideoOk] = useState(false)

  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <video
          className={`hero__video ${videoOk ? 'is-ready' : ''}`}
          src={HERO_VIDEO}
          poster={HERO_POSTER || undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoOk(true)}
          onError={() => setVideoOk(false)}
        />
        <div className="hero__shade" />
        <RadarCanvas strong={!videoOk} />
      </div>

      <div className="wrap hero__content">
        <h1 className="hero__title">
          Building India&rsquo;s next generation of aerial defence technology
        </h1>
        <p className="hero__sub">
          AI-enabled counter-drone and autonomous aerial defence solutions, engineered in India.
        </p>
        <div className="hero__actions">
          <a className="btn" href="#contact">Partner with us</a>
          <button className="btn btn--ghost" onClick={onWatch}>
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 1l9 5-9 5z" fill="currentColor" /></svg>
            Watch the film
          </button>
        </div>
      </div>
    </section>
  )
}
