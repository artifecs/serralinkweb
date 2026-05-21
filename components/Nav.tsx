'use client'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const WA_URL = "https://wa.me/34650752356?text=Hola%2C%20m%27agradaria%20m%C3%A9s%20informaci%C3%B3%20sobre%20els%20vostres%20serveis%20web."

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  function toggleMenu() {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav>
        <a href="/" className="nav-logo">
          <img src="https://www.serra.link/logo_serra_link.webp" alt="Serra.link" style={{ height: '32px', width: 'auto', display: 'block' }} />
        </a>
        <ul className="nav-links">
          <li>
            <a href="/#serveis">
              <svg className="nav-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
              Serveis
            </a>
          </li>
          <li>
            <a href="/#projectes">
              <svg className="nav-icon" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
              Projectes
            </a>
          </li>
          <li>
            <a href="/#marketing">
              <svg className="nav-icon" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
              Màrqueting
            </a>
          </li>
          <li>
            <a href="/#ia">
              <svg className="nav-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              IA
            </a>
          </li>
          <li>
            <a href="/#nosaltres">
              <svg className="nav-icon" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
              Nosaltres
            </a>
          </li>
          <li>
            <a href="/#faq">
              <svg className="nav-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" /></svg>
              FAQ
            </a>
          </li>
          <li>
            <a href="/#contact" className="nav-cta">
              <svg className="nav-icon" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
              Parlem
            </a>
          </li>
          <li>
            <a href={WA_URL} target="_blank" rel="noopener" className="nav-whatsapp" aria-label="WhatsApp">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
                <path fill="#fff" d="M16 2C8.268 2 2 8.268 2 16c0 2.522.666 4.888 1.83 6.93L2 30l7.28-1.808A13.938 13.938 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" />
                <path fill="#25D366" d="M16 4.5C9.596 4.5 4.5 9.596 4.5 16c0 2.21.638 4.272 1.742 6.01l.233.374-1.02 3.728 3.832-.999.36.213A11.453 11.453 0 0016 27.5c6.404 0 11.5-5.096 11.5-11.5S22.404 4.5 16 4.5z" />
                <path fill="#fff" fillRule="evenodd" d="M12.18 10.5c-.297-.66-.61-.673-.893-.685-.232-.01-.497-.01-.762-.01-.265 0-.695.1-1.059.497-.364.398-1.39 1.358-1.39 3.312 0 1.953 1.423 3.842 1.621 4.107.198.265 2.747 4.39 6.782 5.98 3.355 1.325 4.036 1.062 4.763.996.727-.066 2.349-.96 2.68-1.887.331-.928.331-1.723.232-1.888-.099-.166-.364-.265-.762-.464-.397-.199-2.349-1.16-2.714-1.292-.364-.133-.629-.199-.894.199-.265.398-1.025 1.292-1.257 1.557-.232.265-.464.298-.861.1-.398-.2-1.679-.619-3.198-1.973-1.182-1.054-1.98-2.356-2.212-2.754-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.132-.265.066-.497-.034-.696-.1-.2-.87-2.163-1.21-2.947z" clipRule="evenodd" />
              </svg>
            </a>
          </li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ThemeToggle />
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="/#serveis" onClick={closeMenu}>Serveis</a>
        <a href="/#projectes" onClick={closeMenu}>Projectes</a>
        <a href="/#marketing" onClick={closeMenu}>Màrqueting</a>
        <a href="/#ia" onClick={closeMenu}>Intel·ligència Artificial</a>
        <a href="/#nosaltres" onClick={closeMenu}>Nosaltres</a>
        <a href="/#faq" onClick={closeMenu}>FAQ</a>
        <a href="/#contact" onClick={closeMenu}>Contacte</a>
        <a href={WA_URL} target="_blank" rel="noopener" onClick={closeMenu} style={{ color: '#25d366' }}>WhatsApp</a>
        <a href="tel:+34650752356" className="mobile-menu-phone" onClick={closeMenu}>650 75 23 56</a>
      </div>
    </>
  )
}
