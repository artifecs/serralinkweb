import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projecte: Surgest | Serra.link',
  description: 'Fitxa del projecte Surgest desenvolupat per Serra.link.',
}

export default function ProjecteSurgest() {
  return (
    <main className="projecte-main">
      <span className="badge">Corporatiu · Serveis</span>
      <h1>Surgest</h1>
      <p className="subtitle">Web corporativa enfocada a posicionament de marca i captació de leads per a serveis professionals.</p>

      <Image
        className="shot"
        src="/assets/projects/surgest.png"
        alt="Screenshot de Surgest"
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
            <li><strong>Tipus:</strong> Web corporativa</li>
            <li><strong>Sector:</strong> Serveis professionals</li>
            <li><strong>Objectiu:</strong> captar contactes qualificats</li>
          </ul>
        </article>
      </section>

      <div className="actions">
        <a className="btn-action btn-action-primary" href="https://www.surgest.com" target="_blank" rel="noopener">Visitar web</a>
        <Link className="btn-action btn-action-secondary" href="/#projectes">Tornar a projectes</Link>
      </div>
    </main>
  )
}
