import { useEffect, useState } from 'react'
import { NAV } from '../config.js'

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setSolid(scrollY > 20)

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

  return (
    <header className={`header ${solid || menu ? 'header--solid' : ''}`}>
      <div className="header__container">
        <div className="header__brand">
          <a href="#top" aria-label="K.A.L.K.I Defence Systems, Home">
            <img className="header__logo-img" src="/kalki-logo.png" alt="K.A.L.K.I Defence Systems" />
          </a>
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
