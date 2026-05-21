import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projecte: Pizarras de Baloncesto | Serra.link',
  description: 'Fitxa del projecte Pizarras de Baloncesto desenvolupat per Serra.link.',
}

export default function ProjectePizarrasBaloncesto() {
  return (
    <main className="projecte-main">
      <span className="badge">E-commerce · Esport</span>
      <h1>Pizarras de Baloncesto</h1>
      <p className="subtitle">Projecte e-commerce per a la venda de pissarres tàctiques i material d&apos;entrenament esportiu.</p>

      <Image
        className="shot"
        src="/assets/projects/pizarrasbaloncesto.png"
        alt="Screenshot de Pizarras de Baloncesto"
        width={1200}
        height={460}
        style={{ width: '100%', height: '460px', objectFit: 'cover', objectPosition: 'top' }}
      />

      <section className="project-page-grid">
        <article className="project-page-card">
          <h3>Resum del projecte</h3>
          <p>Web orientada a conversió amb catàleg de producte, navegació clara i estructura per facilitar la compra des de mòbil i escriptori.</p>
        </article>
        <article className="project-page-card">
          <h3>Informació clau</h3>
          <ul>
            <li><strong>Tipus:</strong> Botiga online</li>
            <li><strong>Sector:</strong> Esport</li>
            <li><strong>Objectiu:</strong> augmentar vendes directes</li>
          </ul>
        </article>
      </section>

      <div className="actions">
        <a className="btn-action btn-action-primary" href="https://www.pizarrasbaloncesto.com" target="_blank" rel="noopener">Visitar web</a>
        <Link className="btn-action btn-action-secondary" href="/#projectes">Tornar a projectes</Link>
      </div>
    </main>
  )
}
