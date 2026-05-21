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
            <Link href="/#serveis">Serveis</Link>
            <Link href="/#projectes">Projectes</Link>
            <Link href="/#contact">Contacte</Link>
            <Link href="/blog/seo-local-pimes">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
