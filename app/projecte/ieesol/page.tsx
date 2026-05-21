import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projecte: IEE Sol Enginyeria | Serra.link',
  description: 'Fitxa del projecte IEE Sol Enginyeria desenvolupat per Serra.link.',
}

export default function ProjecteIeesol() {
  return (
    <main className="projecte-main">
      <span className="badge">Enginyeria · Energies Renovables</span>
      <h1>IEE Sol Enginyeria</h1>
      <p className="subtitle">Web corporativa per comunicar serveis d&apos;enginyeria, fotovoltaica i sostenibilitat energètica.</p>

      <Image
        className="shot"
        src="/assets/projects/ieesol.png"
        alt="Screenshot de IEE Sol Enginyeria"
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
            <li><strong>Sector:</strong> Enginyeria i renovables</li>
            <li><strong>Objectiu:</strong> presentar serveis i generar confiança tècnica</li>
          </ul>
        </article>
      </section>

      <div className="actions">
        <a className="btn-action btn-action-primary" href="https://www.ieesol.com" target="_blank" rel="noopener">Visitar web</a>
        <Link className="btn-action btn-action-secondary" href="/#projectes">Tornar a projectes</Link>
      </div>
    </main>
  )
}
