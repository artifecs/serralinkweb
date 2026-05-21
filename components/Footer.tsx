import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <Link href="/" className="footer-logo">Serra<span>.link</span></Link>
        <p>© 2026 Serra.link. Tots els drets reservats.</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
          <div className="footer-links">
            <a href="mailto:jordi@serra.link">jordi@serra.link</a>
            <a href="tel:+34650752356">650 75 23 56</a>
          </div>
          <div className="footer-legal">
            <a href="/#serveis">Serveis</a>
            <a href="/#projectes">Projectes</a>
            <a href="/#contact">Contacte</a>
            <a href="/#blog">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
