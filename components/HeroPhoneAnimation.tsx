'use client'
/**
 * HeroPhoneAnimation — GSAP ScrollTrigger iPhone 3D animation
 *
 * Desktop (≥769px, no reduced-motion):
 *   1. Entry  — phone flies in from above with 3D tilt + micro-bounce
 *   2. Float  — continuous y-oscillation + subtle Z-rock (GSAP loop)
 *   3. Scroll — rotateY 13°→0° (faces viewer), shine sweep, screen parallax
 *      ⚠ NO fade-out, NO opacity animation — phone stays visible always
 *
 * Mobile (≤768px) / reduced-motion:
 *   — CSS animations kept as-is, phone always visible, no GSAP transforms
 */
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroPhoneAnimation() {
  useEffect(() => {
    const visual  = document.getElementById('heroVisual')
    const floater = document.getElementById('iphoneFloater')
    if (!visual || !floater) return

    const mm = gsap.matchMedia()

    /* ─────────────────────────────────────────────────────────────────
       DESKTOP FULL ANIMATION  (≥769px, no reduced-motion)
    ───────────────────────────────────────────────────────────────── */
    mm.add(
      '(min-width: 769px) and (prefers-reduced-motion: no-preference)',
      () => {
        // Take full transform control — remove CSS animations
        visual.style.animation  = 'none'
        floater.style.animation = 'none'

        // ── 1. Initial state ───────────────────────────────────────
        gsap.set(visual,  { opacity: 0 })
        gsap.set(floater, { y: -110, rotateY: -20, rotateX: 14, scale: 0.78, opacity: 0 })

        // ── 2. Entry: 3D fly-in ────────────────────────────────────
        const entry = gsap.timeline({ delay: 0.3 })
        entry
          .to(visual,  { opacity: 1, duration: 0.55, ease: 'power2.out' }, 0)
          .to(floater, {
            y: 0, rotateY: 13, rotateX: 0, scale: 1, opacity: 1,
            duration: 1.15, ease: 'power3.out',
          }, 0)
          // Micro-bounce on landing
          .to(floater, { y:  11, duration: 0.17, ease: 'power2.in' })
          .to(floater, { y:   0, duration: 0.44, ease: 'elastic.out(1.05, 0.52)' })
          // Continuous float loop — runs forever
          .call(() => {
            gsap.to(floater, {
              y: -18, duration: 2.9, ease: 'sine.inOut', repeat: -1, yoyo: true,
            })
            gsap.to(floater, {
              rotateZ: 0.65, duration: 3.7, ease: 'sine.inOut',
              repeat: -1, yoyo: true, delay: 0.35,
            })
          })

        // ── 3a. Scroll: rotateY 13°→0° (Apple face-forward reveal) ─
        // Phone rotates to face the viewer as they scroll — stays VISIBLE
        gsap.to(floater, {
          rotateY: 0, ease: 'none',
          scrollTrigger: {
            trigger: '.hero-wrapper',
            start:   'top top',
            end:     '65% top',
            scrub:    1.4,
          },
        })

        // ── 3b. Shine: fades as phone rotates face-forward ─────────
        const shine = floater.querySelector('.iphone-shine') as HTMLElement | null
        if (shine) {
          gsap.fromTo(shine,
            { opacity: 0.72, x: 0 },
            { opacity: 0.05, x: 70, ease: 'none',
              scrollTrigger: {
                trigger: '.hero-wrapper',
                start:   'top top',
                end:     '65% top',
                scrub:    1.4,
              },
            }
          )
        }

        // ── 3c. Screen content micro-parallax (subtle depth) ───────
        const content = floater.querySelector('.iphone-content') as HTMLElement | null
        if (content) {
          gsap.to(content, {
            y: -20, ease: 'none',
            scrollTrigger: {
              trigger: '.hero-wrapper',
              start:   'top top',
              end:     'bottom top',
              scrub:    2.4,
            },
          })
        }

        // ⚠ NO step 4 — phone is NEVER faded out or moved off-screen
        // It scrolls away naturally with the hero section

        return () => {
          entry.kill()
          ScrollTrigger.getAll().forEach(st => st.kill())
        }
      }
    )

    /* ─────────────────────────────────────────────────────────────────
       MOBILE (≤768px) — phone always visible, CSS handles float
    ───────────────────────────────────────────────────────────────── */
    mm.add('(max-width: 768px)', () => {
      gsap.set(visual,  { clearProps: 'all' })
      gsap.set(floater, { clearProps: 'all' })
    })

    /* ─────────────────────────────────────────────────────────────────
       REDUCED MOTION (any width)
    ───────────────────────────────────────────────────────────────── */
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(visual,  { clearProps: 'all' })
      gsap.set(floater, { clearProps: 'all' })
    })

    return () => mm.revert()
  }, [])

  return null
}
