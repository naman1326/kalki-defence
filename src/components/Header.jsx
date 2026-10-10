import { useEffect, useState } from 'react'
import { NAV } from '../config.js'

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${solid || menu ? 'header--solid' : ''}`}>
      <div className="header__bar">
        <a href="#top" className="header__logo" aria-label="KALKI Defence Systems, home">
          <img src="/kalki-logo.png" alt="KALKI Defence Systems" />
        </a>

        <nav className={`nav ${menu ? 'nav--open' : ''}`} aria-label="Primary">
          {NAV.map((i) => (
            <a key={i.href} href={i.href} onClick={() => setMenu(false)}>
              {i.label}
            </a>
          ))}
          <a className="btn btn--sm nav__cta" href="#contact" onClick={() => setMenu(false)}>
            Partner with us
          </a>
        </nav>

        <button
          className="burger"
          aria-expanded={menu}
          aria-label={menu ? 'Close menu' : 'Open menu'}
          onClick={() => setMenu((m) => !m)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  )
}
