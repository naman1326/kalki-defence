import { NAV } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <img className="footer__logo" src="/kalki-logo.png" alt="KALKI Defence Systems" />
          <p className="footer__legal">KALKI Defence Systems Private Limited</p>
        </div>
        <nav aria-label="Footer" className="footer__nav">
          {NAV.map((i) => <a key={i.href} href={i.href}>{i.label}</a>)}
        </nav>
      </div>
      <div className="wrap footer__base">
        <span>&copy; {new Date().getFullYear()} KALKI Defence Systems Private Limited. All rights reserved.</span>
      </div>
    </footer>
  )
}
