import { useEffect, useRef } from 'react'

const RED = '252,25,32'
const TAU = Math.PI * 2

// Decorative detection HUD: a radar sweep that finds and locks onto drones.
// Pure canvas, no external imagery. Sits over the hero video (or stands in for it).
export default function RadarCanvas({ strong }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0, h = 0, cx = 0, cy = 0, R = 0, raf = 0, start = performance.now()

    // Seeded so the scene is the same on every load.
    let seed = 7
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)

    const targets = Array.from({ length: 7 }, (_, i) => ({
      id: 14 + i * 9,
      a: rnd() * TAU,
      d: 0.22 + rnd() * 0.7,
      va: (rnd() - 0.5) * 0.00018,
      vd: (rnd() - 0.5) * 0.00002,
      found: false,
      lit: 0,
    }))

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const narrow = w < 760
      cx = narrow ? w * 0.5 : w * 0.7
      cy = narrow ? h * 0.36 : h * 0.48
      R = Math.min(narrow ? w * 0.95 : w * 0.5, h * 0.78)
      if (reduce) draw(2.2, true)
    }

    const pos = (t) => ({
      x: cx + Math.cos(t.a) * t.d * R,
      y: cy + Math.sin(t.a) * t.d * R,
    })

    const drone = (x, y, s, alpha) => {
      ctx.strokeStyle = `rgba(255,255,255,${alpha})`
      ctx.fillStyle = `rgba(${RED},${alpha})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(x - s, y - s); ctx.lineTo(x + s, y + s)
      ctx.moveTo(x + s, y - s); ctx.lineTo(x - s, y + s)
      ctx.stroke()
      for (const [dx, dy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
        ctx.beginPath()
        ctx.arc(x + dx * s, y + dy * s, s * 0.45, 0, TAU)
        ctx.stroke()
      }
      ctx.beginPath(); ctx.arc(x, y, s * 0.35, 0, TAU); ctx.fill()
    }

    const bracket = (x, y, r, alpha) => {
      const l = r * 0.45
      ctx.strokeStyle = `rgba(${RED},${alpha})`
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ;[[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([sx, sy]) => {
        ctx.moveTo(x + sx * r, y + sy * (r - l))
        ctx.lineTo(x + sx * r, y + sy * r)
        ctx.lineTo(x + sx * (r - l), y + sy * r)
      })
      ctx.stroke()
    }

    function draw(sweep, still = false) {
      ctx.clearRect(0, 0, w, h)

      // range rings + crosshair
      ctx.lineWidth = 1
      ctx.strokeStyle = 'rgba(255,255,255,0.10)'
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath(); ctx.arc(cx, cy, (R * i) / 4, 0, TAU); ctx.stroke()
      }
      ctx.beginPath()
      ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy)
      ctx.moveTo(cx, cy - R); ctx.lineTo(cx, cy + R)
      ctx.stroke()

      // bearing ticks on the outer ring
      for (let deg = 0; deg < 360; deg += 5) {
        const a = (deg * Math.PI) / 180
        const len = deg % 30 === 0 ? 12 : 5
        ctx.beginPath()
        ctx.moveTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R)
        ctx.lineTo(cx + Math.cos(a) * (R - len), cy + Math.sin(a) * (R - len))
        ctx.stroke()
      }

      // sweep trail
      for (let k = 0; k < 36; k++) {
        const a1 = sweep - k * 0.022
        const a0 = sweep - (k + 1) * 0.022
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.arc(cx, cy, R, a0, a1)
        ctx.closePath()
        ctx.fillStyle = `rgba(${RED},${0.2 * (1 - k / 36)})`
        ctx.fill()
      }
      ctx.strokeStyle = `rgba(${RED},0.9)`
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.lineTo(cx + Math.cos(sweep) * R, cy + Math.sin(sweep) * R)
      ctx.stroke()

      // targets
      ctx.font = '10px "Space Mono", "Rajdhani", monospace'
      for (const t of targets) {
        const hit = Math.abs(((t.a - sweep) % TAU + TAU) % TAU) < 0.05
        if (hit || still) { t.found = true; t.lit = 1 }
        if (!t.found) continue
        const { x, y } = pos(t)
        const a = Math.max(0.35, t.lit)
        drone(x, y, 4, a)
        bracket(x, y, 16, a)
        ctx.fillStyle = `rgba(255,255,255,${a * 0.9})`
        const bearing = String(Math.round(((t.a * 180) / Math.PI + 90) % 360)).padStart(3, '0')
        ctx.fillText(`SWARM-${t.id}`, x + 22, y - 4)
        ctx.fillStyle = `rgba(252,25,32,${a * 0.85})`
        ctx.fillText(`BRG ${bearing}° // 250 KM/H`, x + 22, y + 10)
      }
    }

    const loop = (now) => {
      const dt = now - start
      for (const t of targets) {
        t.a += t.va * 16
        t.d = Math.min(0.95, Math.max(0.2, t.d + t.vd * 16))
        t.lit *= 0.985
      }
      draw((dt * 0.00045) % TAU)
      raf = requestAnimationFrame(loop)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    if (!reduce) raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={ref} className={`radar ${strong ? 'radar--strong' : ''}`} aria-hidden="true" />
}
