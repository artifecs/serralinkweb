import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projecte: Medical Inn | Serra.link',
  description: 'Fitxa del projecte Medical Inn desenvolupat per Serra.link.',
}

export default function ProjecteMedicalInn() {
  return (
    <main className="projecte-main">
      <span className="badge">Salut · Corporatiu</span>
      <h1>Medical Inn</h1>
      <p className="subtitle">Web de centre mèdic privat amb serveis, equip i orientació a captació de cites.</p>

      <Image
        className="shot"
        src="/assets/projects/medicalinn.png"
        alt="Screenshot de Medical Inn"
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
            <li><strong>Sector:</strong> Salut</li>
            <li><strong>Objectiu:</strong> incrementar contactes i sol·licituds de cita</li>
          </ul>
        </article>
      </section>

      <div className="actions">
        <a className="btn-action btn-action-primary" href="http://medicalinn.net" target="_blank" rel="noopener">Visitar web</a>
        <Link className="btn-action btn-action-secondary" href="/#projectes">Tornar a projectes</Link>
      </div>
    </main>
  )
}
