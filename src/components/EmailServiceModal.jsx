import { useEffect } from 'react'
import { CONTACT_EMAIL } from '../config.js'

export default function EmailServiceModal({ open, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const subject = encodeURIComponent('Tactical Briefing Request - KALKI Defence Systems')
  const body = encodeURIComponent(
    'Official Name:\nOrganisation / Command:\nContact Number:\n\nMission Scope / Operational Requirement:\n'
  )

  const services = [
    {
      name: 'Default Mail App',
      bg: '#ffffff',
      color: '#000000',
      isDefault: true,
      url: `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
    },
    {
      name: 'Gmail',
      bg: '#EA4335',
      color: '#ffffff',
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${subject}&body=${body}`,
    },
    {
      name: 'Outlook',
      bg: '#0078D4',
      color: '#ffffff',
      url: `https://outlook.live.com/mail/0/deeplink/compose?to=${CONTACT_EMAIL}&subject=${subject}&body=${body}`,
    },
    {
      name: 'Yahoo Mail',
      bg: '#6001D2',
      color: '#ffffff',
      url: `https://compose.mail.yahoo.com/?to=${CONTACT_EMAIL}&subj=${subject}&body=${body}`,
    },
    {
      name: 'Proton Mail',
      bg: '#6D4AFF',
      color: '#ffffff',
      url: `https://mail.proton.me/u/0/compose?to=${CONTACT_EMAIL}&subject=${subject}`,
    },
    {
      name: 'Zoho Mail',
      bg: '#0096E6',
      color: '#ffffff',
      url: `https://mail.zoho.com/zm/#compose?to=${CONTACT_EMAIL}&subject=${subject}`,
    },
    {
      name: 'iCloud Mail',
      bg: '#34AADC',
      color: '#ffffff',
      url: `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
    },
  ]

  const handleSelect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <div
      className="email-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Choose Email Service"
    >
      <div className="email-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="email-modal-header">
          <h3 className="email-modal-title">Choose Email Service</h3>
          <button
            type="button"
            className="email-modal-close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Service Options List */}
        <div className="email-modal-list">
          {services.map((s) => (
            <button
              key={s.name}
              type="button"
              className="email-service-btn"
              style={{ backgroundColor: s.bg, color: s.color }}
              onClick={() => handleSelect(s.url)}
            >
              <div className="email-service-left">
                {s.isDefault ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                )}
                <span className="email-service-name">{s.name}</span>
              </div>

              {/* Diagonal Arrow Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          ))}
        </div>

        {/* Footer Subtext */}
        <div className="email-modal-footer">
          <span>Connecting to secure channel...</span>
        </div>
      </div>
    </div>
  )
}
