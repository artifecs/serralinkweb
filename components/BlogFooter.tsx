import Link from 'next/link'

export default function BlogFooter() {
  return (
    <footer className="blog-footer">
      <div className="blog-footer-wrap">
        <Link href="/" className="blog-footer-logo">Serra<span>.link</span></Link>
        <p>© 2026 Serra.link. Tots els drets reservats.</p>
        <div className="blog-footer-links">
          <a href="/#serveis">Serveis</a>
          <a href="/#projectes">Projectes</a>
          <a href="/#contact">Contacte</a>
          <a href="/#blog">Blog</a>
        </div>
      </div>
    </footer>
  )
}
