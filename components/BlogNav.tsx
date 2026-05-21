'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function BlogNav() {
  return (
    <nav className="blog-nav">
      <Link href="/" className="blog-nav-logo">
        Serra<span>.link</span>
      </Link>
      <div className="nav-right">
        <Link href="/#blog" className="nav-back">
          ← Tornar al blog
        </Link>
        <ThemeToggle />
        <Link href="/#contact" className="nav-cta-btn">Parlem</Link>
      </div>
    </nav>
  )
}
