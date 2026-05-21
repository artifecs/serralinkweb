'use client'
import { useEffect, useRef } from 'react'

/**
 * ScrollReveal — wraps any section and activates scroll-reveal
 * on all children with className="reveal" inside.
 *
 * Usage:
 *   <ScrollReveal>
 *     <div className="reveal">...</div>
 *     <div className="reveal reveal-delay-1">...</div>
 *   </ScrollReveal>
 *
 * The CSS classes .reveal / .revealed are defined in globals.css
 */
export default function ScrollReveal({ children, className }: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    // Respect user's motion preference
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      // Mark all as revealed immediately
      container.querySelectorAll<HTMLElement>('.reveal').forEach(el => {
        el.classList.add('revealed')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            // Once revealed, stop watching
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,     // trigger when 12% of element is visible
        rootMargin: '0px 0px -40px 0px', // trigger slightly before bottom of viewport
      }
    )

    container.querySelectorAll<HTMLElement>('.reveal').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
