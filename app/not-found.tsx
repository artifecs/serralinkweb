import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pàgina no trobada — Serra.link',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 5% 80px', textAlign: 'center', minHeight: '80vh' }}>
      <div className="error-num">404</div>
      <h1 className="error-title">Aquesta pàgina no existeix</h1>
      <p className="error-desc">Sembla que la pàgina que busques s&apos;ha mogut, eliminat o mai no ha existit. T&apos;ajudem a trobar el que necessites.</p>

      <div className="error-btns">
        <Link href="/" className="btn-primary">Anar a l&apos;inici →</Link>
        <Link href="/#contact" className="btn-secondary">Contacta&apos;ns</Link>
      </div>

      <p className="links-label">O explora el que tenim</p>
      <div className="links-grid">
        <a href="/#serveis" className="link-card">
          <div className="link-card-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
          <div><div className="link-card-text">Serveis</div><div className="link-card-sub">Web, IA i màrqueting</div></div>
        </a>
        <a href="/#projectes" className="link-card">
          <div className="link-card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
          <div><div className="link-card-text">Projectes</div><div className="link-card-sub">Feina feta</div></div>
        </a>
        <a href="/#ia" className="link-card">
          <div className="link-card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg></div>
          <div><div className="link-card-text">Intel·ligència Artificial</div><div className="link-card-sub">IA al teu negoci</div></div>
        </a>
        <a href="/#blog" className="link-card">
          <div className="link-card-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg></div>
          <div><div className="link-card-text">Blog</div><div className="link-card-sub">Articles i consells</div></div>
        </a>
        <a href="/#nosaltres" className="link-card">
          <div className="link-card-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg></div>
          <div><div className="link-card-text">Nosaltres</div><div className="link-card-sub">Qui som</div></div>
        </a>
        <a href="/#contact" className="link-card">
          <div className="link-card-icon"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg></div>
          <div><div className="link-card-text">Contacte</div><div className="link-card-sub">Parlem del teu projecte</div></div>
        </a>
      </div>
    </main>
  )
}
