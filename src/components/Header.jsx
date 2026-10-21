import { useEffect, useState } from 'react'
import { NAV, COMPANY_INFO } from '../config.js'

export default function Header({ onRequestBriefing }) {
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${solid || menu ? 'header--solid' : ''}`}>
      <div className="header__container">
        <div className="header__brand">
          <a href="#top" aria-label="K.A.L.K.I Defence Systems, Home">
            <img className="header__logo-img" src="/kalki-logo.png" alt="K.A.L.K.I Defence Systems" />
          </a>
          <div className="tag-telemetry tag-telemetry--blue header__badge" style={{ display: 'none' }}>
            <span className="pip-dot pip-dot--blue" />
            <span style={{ fontSize: '11px', letterSpacing: '0.15em' }}>
              AUTONOMOUS C-UAS // V-NEST INCUBATED
            </span>
          </div>
        </div>

        <nav className={`header__nav ${menu ? 'nav--open' : ''}`} aria-label="Primary Navigation">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenu(false)}>
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="btn-polygon btn-polygon--red header__cta"
            onClick={() => {
              setMenu(false)
              if (onRequestBriefing) onRequestBriefing()
            }}
          >
            Request Briefing
          </button>
        </nav>

        <button
          className="burger"
          aria-expanded={menu}
          aria-label={menu ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          onClick={() => setMenu((m) => !m)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
