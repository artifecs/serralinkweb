'use client'
/**
 * HeroPhoneAnimation — GSAP ScrollTrigger iPhone 3D animation
 *
 * Skill: gsap-scrolltrigger (claudedesignskills)
 *
 * Timeline:
 *  1. Entry   — phone flies in from above with 3D tilt + micro-bounce
 *  2. Float   — continuous y-oscillation + subtle Z-rock (GSAP loop)
 *  3. Scroll  — rotateY 13°→0° (faces viewer), parallax up, shine sweep
 *  4. Exit    — fades + scales down as section leaves viewport
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
       FULL ANIMATION (normal motion)
    ───────────────────────────────────────────────────────────────── */
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Remove CSS animations — GSAP owns all transforms from here
      visual.style.animation  = 'none'
      floater.style.animation = 'none'

      // ── 1. Initial state ─────────────────────────────────────────
      gsap.set(visual, { opacity: 0 })
      gsap.set(floater, {
        y:        -110,
        rotateY:  -20,
        rotateX:   14,
        scale:    0.78,
        opacity:    0,
      })

      // ── 2. Entry: 3D fly-in ──────────────────────────────────────
      const entry = gsap.timeline({ delay: 0.3 })
      entry
        // Outer container fades in
        .to(visual, {
          opacity:  1,
          duration: 0.55,
          ease:     'power2.out',
        }, 0)
        // Phone swoops in with depth — settles at 13° tilt (shows 3D)
        .to(floater, {
          y:        0,
          rotateY:  13,
          rotateX:  0,
          scale:    1,
          opacity:  1,
          duration: 1.15,
          ease:     'power3.out',
        }, 0)
        // Micro-bounce on landing
        .to(floater, { y:  11, duration: 0.17, ease: 'power2.in'  })
        .to(floater, { y:   0, duration: 0.44, ease: 'elastic.out(1.05, 0.52)' })
        // Start continuous float loop once phone has landed
        .call(() => {
          // Vertical float
          gsap.to(floater, {
            y:        -18,
            duration:  2.9,
            ease:     'sine.inOut',
            repeat:   -1,
            yoyo:     true,
          })
          // Subtle axial rock
          gsap.to(floater, {
            rotateZ:   0.65,
            duration:  3.7,
            ease:     'sine.inOut',
            repeat:   -1,
            yoyo:     true,
            delay:     0.35,
          })
        })

      // ── 3a. Scroll: rotateY 13°→0° (phone faces viewer) ──────────
      //        Tied to hero section scroll progress
      gsap.to(floater, {
        rotateY:  0,
        ease:    'none',
        scrollTrigger: {
          trigger: '.hero-wrapper',
          start:   'top top',
          end:     '62% top',
          scrub:    1.4,
        },
      })

      // ── 3b. Scroll: outer wrapper parallax up ────────────────────
      gsap.to(visual, {
        y:     -130,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-wrapper',
          start:   'top top',
          end:     'bottom top',
          scrub:    true,
        },
      })

      // ── 3c. Scroll: shine sweep across frame on rotation ─────────
      const shine = floater.querySelector('.iphone-shine') as HTMLElement | null
      if (shine) {
        gsap.fromTo(
          shine,
          { opacity: 0.72, x: 0 },
          {
            opacity:  0.05,
            x:        80,        // shifts right as phone faces us
            ease:    'none',
            scrollTrigger: {
              trigger: '.hero-wrapper',
              start:   'top top',
              end:     '62% top',
              scrub:    1.4,
            },
          }
        )
      }

      // ── 3d. Scroll: screen content micro-parallax ─────────────────
      const content = floater.querySelector('.iphone-content') as HTMLElement | null
      if (content) {
        gsap.to(content, {
          y:     -28,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-wrapper',
            start:   'top top',
            end:     'bottom top',
            scrub:    2.4,
          },
        })
      }

      // ── 4. Exit: fade + slight shrink as section leaves ──────────
      gsap.to(floater, {
        opacity:  0,
        scale:    0.91,
        ease:    'none',
        scrollTrigger: {
          trigger: '.hero-wrapper',
          start:   '50% top',
          end:     'bottom top',
          scrub:    1,
        },
      })

      // ── 5. Hero TEXT — drifts left + fades as phone faces viewer ─
      // Creates a counter-motion: text retreats, phone advances
      const heroText = document.querySelector('.hero > div:first-child') as HTMLElement | null
      if (heroText) {
        gsap.to(heroText, {
          opacity: 0,
          x:      -40,
          ease:   'none',
          scrollTrigger: {
            trigger: '.hero-wrapper',
            start:   '18% top',
            end:     '62% top',
            scrub:    1.2,
          },
        })
      }

      return () => {
        entry.kill()
        ScrollTrigger.getAll().forEach(st => st.kill())
      }
    })

    /* ─────────────────────────────────────────────────────────────────
       REDUCED MOTION fallback — just ensure everything is visible
    ───────────────────────────────────────────────────────────────── */
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(visual,  { opacity: 1, clearProps: 'transform' })
      gsap.set(floater, { opacity: 1, y: 0, rotateY: 0, clearProps: 'transform' })
    })

    return () => mm.revert()
  }, [])

  return null
}
