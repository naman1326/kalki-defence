import { useEffect, useRef, useState } from 'react'
import { HERO_VIDEO } from '../config.js'

export default function VideoModal({ open, onClose }) {
  const ref = useRef(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) { setFailed(false); d.showModal() }
    if (!open && d.open) d.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      className="film"
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose() }}
      aria-label="KALKI Defence Systems film"
    >
      <button className="film__close" onClick={onClose} aria-label="Close film">
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.6" /></svg>
      </button>
      {open && !failed && (
        <video className="film__video" src={HERO_VIDEO} controls autoPlay playsInline onError={() => setFailed(true)} />
      )}
      {open && failed && (
        <p className="film__missing">
          No film found. Add your video at <code>public/hero.mp4</code> and reload.
        </p>
      )}
    </dialog>
  )
}
