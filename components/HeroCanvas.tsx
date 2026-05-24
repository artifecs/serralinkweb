'use client'
/**
 * HeroCanvas — animated teal particle network on the hero background canvas.
 * Activates the existing #heroCanvas element (currently CSS display:none).
 * Uses requestAnimationFrame only — no external libs.
 * Respects prefers-reduced-motion.
 */
import { useEffect } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  alpha: number
}

const LINK_DIST   = 130   // px — max distance to draw a connecting line
const BASE_SPEED  = 0.28  // px/frame

export default function HeroCanvas() {
  useEffect(() => {
    const canvas = document.getElementById('heroCanvas') as HTMLCanvasElement | null
    if (!canvas) return

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Show the canvas (CSS hides it by default)
    canvas.style.display = 'block'

    let animId    = 0
    let W         = 0
    let H         = 0
    let particles: Particle[] = []

    /* ── resize ─────────────────────────────────────────────────── */
    function resize() {
      W = canvas!.width  = canvas!.offsetWidth
      H = canvas!.height = canvas!.offsetHeight
      init()
    }

    /* ── particle factory ────────────────────────────────────────── */
    function init() {
      // Fewer particles on small screens for perf
      const count = Math.min(70, Math.max(30, Math.floor((W * H) / 18000)))
      particles = Array.from({ length: count }, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random() - 0.5) * BASE_SPEED * 2,
        vy:    (Math.random() - 0.5) * BASE_SPEED * 2,
        r:     Math.random() * 1.4 + 0.5,
        alpha: Math.random() * 0.45 + 0.15,
      }))
    }

    /* ── animation loop ──────────────────────────────────────────── */
    function draw() {
      ctx!.clearRect(0, 0, W, H)

      // Move + wrap particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0
      }

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.18
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.strokeStyle = `rgba(0,217,163,${alpha})`
            ctx!.lineWidth   = 0.7
            ctx!.stroke()
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(0,217,163,${p.alpha})`
        ctx!.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    /* ── init & observe resize ───────────────────────────────────── */
    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
      canvas.style.display = 'none'
    }
  }, [])

  return null
}
