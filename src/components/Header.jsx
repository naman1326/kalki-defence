import { useEffect, useState } from 'react'
import { NAV } from '../config.js'

export default function Header({ onRequestBriefing }) {
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setSolid(scrollY > 20)

      // Calculate total page scroll percentage
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100))
        setScrollProgress(progress)
      }

      // Detect current active section based on scroll position
      const sectionIds = ['system', 'differentiators', 'mission', 'team', 'contact']
      const scrollPos = scrollY + 200

      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            current = `#${id}`
          }
        }
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentNavItem = NAV.find((item) => item.href === activeSection)

  return (
    <header className={`header ${solid || menu ? 'header--solid' : ''}`}>
      {/* Scroll Progress Bar along bottom of nav bar */}
      <div
        className="header__progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="header__container">
        <div className="header__brand">
          <a href="#top" aria-label="K.A.L.K.I Defence Systems, Home">
            <img className="header__logo-img" src="/kalki-logo.png" alt="K.A.L.K.I Defence Systems" />
          </a>
          <div className="tag-telemetry tag-telemetry--blue header__badge">
            <span className="pip-dot pip-dot--blue" />
            <span style={{ fontSize: '11px', letterSpacing: '0.15em' }}>
              {currentNavItem ? `SECT // ${currentNavItem.label.toUpperCase()}` : 'AIR DEFENCE MESH // ACTIVE'}
            </span>
          </div>
        </div>

        <nav className={`header__nav ${menu ? 'nav--open' : ''}`} aria-label="Primary Navigation">
          {NAV.map((item) => {
            const isActive = activeSection === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                className={isActive ? 'is-active' : ''}
                onClick={() => setMenu(false)}
              >
                {isActive && <span className="nav-pip-indicator" />}
                {item.label}
              </a>
            )
          })}
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
