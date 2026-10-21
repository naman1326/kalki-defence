import { useState, useRef, useEffect, useCallback } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [fading, setFading] = useState(false)
  const [mounted, setMounted] = useState(true)
  const videoRef = useRef(null)
  const fadeTriggeredRef = useRef(false)

  const triggerFade = useCallback(() => {
    if (fadeTriggeredRef.current) return
    fadeTriggeredRef.current = true
    setFading(true)

    // After fade-out duration (900ms), unmount loading screen completely
    setTimeout(() => {
      setMounted(false)
      if (onComplete) onComplete()
    }, 950)
  }, [onComplete])

  // Video timeupdate: At ~8.8s the logo is fully revealed on screen
  // Prompt requirement: "at the end the logo comes at that point the screen should fade to reveal the website"
  const handleTimeUpdate = () => {
    const v = videoRef.current
    if (!v) return
    if (v.currentTime >= 8.85) {
      triggerFade()
    }
  }

  const handleEnded = () => {
    triggerFade()
  }

  // Keyboard shortcut to skip intro
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault()
        triggerFade()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [triggerFade])

  // Ensure autoplay starts properly
  useEffect(() => {
    const v = videoRef.current
    if (v) {
      const playPromise = v.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // In case of aggressive autoplay policies, attempt play on any user click
          const handleUserInteraction = () => {
            v.play().catch(() => triggerFade())
            window.removeEventListener('click', handleUserInteraction)
          }
          window.addEventListener('click', handleUserInteraction, { once: true })
        })
      }
    }

    // Safety timeout: in the unlikely event the video gets stuck, fade out gracefully
    const maxTimer = setTimeout(() => {
      if (!fadeTriggeredRef.current) {
        triggerFade()
      }
    }, 11500)

    return () => clearTimeout(maxTimer)
  }, [triggerFade])

  if (!mounted) return null

  return (
    <div
      className={`loading-screen ${fading ? 'loading-screen--fading' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="K.A.L.K.I Defence Systems Loading Sequence"
    >
      <div className="loading-screen__video-wrapper">
        <video
          ref={videoRef}
          className="loading-screen__video"
          src="/loading.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />
      </div>

      {/* Cinematic HUD Overlay Frame */}
      <div className="loading-screen__hud" aria-hidden="true">
        {/* Top Telemetry Header */}
        <div className="loading-hud__header">
          <div className="loading-hud__brand">
            <span className="loading-hud__dot" />
            <span className="loading-hud__mono loading-hud__mono--desktop">
              K.A.L.K.I DEFENCE SYSTEMS // AIR DEFENCE MESH INIT
            </span>
            <span className="loading-hud__mono loading-hud__mono--mobile">
              K.A.L.K.I DEFENCE
            </span>
          </div>
          <button
            type="button"
            className="loading-hud__skip-btn"
            onClick={triggerFade}
            aria-label="Skip introductory video sequence"
          >
            <span className="loading-hud__skip-text--desktop">SKIP INTRO [ESC]</span>
            <span className="loading-hud__skip-text--mobile">SKIP</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Tactical Corner HUD Reticles */}
        <div className="loading-hud__reticle loading-hud__reticle--tl" />
        <div className="loading-hud__reticle loading-hud__reticle--tr" />
        <div className="loading-hud__reticle loading-hud__reticle--bl" />
        <div className="loading-hud__reticle loading-hud__reticle--br" />

        {/* Bottom Status Readout */}
        <div className="loading-hud__footer">
          <div className="loading-hud__status">
            <span className="loading-hud__radar-ping" />
            <span className="loading-hud__mono">
              SYSTEM STATUS: AIR DEFENCE MESH LIVE
            </span>
          </div>
          <div className="loading-hud__legal">
            CIN: U72100PN2026PTC260421 // V-NEST VIT CHENNAI
          </div>
        </div>
      </div>
    </div>
  )
}
