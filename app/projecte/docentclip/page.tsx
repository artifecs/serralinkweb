import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projecte: DocentClip.cat | Serra.link',
  description: 'Fitxa del projecte DocentClip.cat desenvolupat per Serra.link.',
}

export default function ProjecteDocentclip() {
  return (
    <main className="projecte-main">
      <span className="badge">SaaS · Educació · Intel·ligència Artificial</span>
      <h1>DocentClip.cat</h1>
      <p className="subtitle">Plataforma per a docents de Catalunya que transforma observacions d&apos;aula, entrevistes familiars i notes de veu en transcripcions, resums i informes educatius llests per compartir, gràcies a la IA.</p>

      <Image
        className="shot"
        src="/assets/projects/docentclip.svg"
        alt="Screenshot de DocentClip.cat"
        width={1200}
        height={460}
        style={{ width: '100%', height: '460px', objectFit: 'cover', objectPosition: 'top' }}
      />

      <section className="project-page-grid">
        <article className="project-page-card">
          <h3>Resum del projecte</h3>
          <p>DocentClip neix per eliminar la paperassa que ofega els mestres. El docent enregistra una nota de veu o una entrevista (fins a 30 minuts), i la plataforma transcriu, analitza i genera automàticament un informe editable, exportable en PDF i enviable per email. Tot organitzat amb etiquetes, filtres i un calendari mensual. Dissenyat específicament per al sistema educatiu català.</p>
        </article>
        <article className="project-page-card">
          <h3>Informació clau</h3>
          <ul>
            <li><strong>Tipus:</strong> Aplicació web SaaS</li>
            <li><strong>Sector:</strong> Tecnologia educativa (EdTech)</li>
            <li><strong>Públic:</strong> Mestres, tutors i equips docents de Catalunya</li>
            <li><strong>Funcions:</strong> Transcripció per IA, informes PDF, entrevistes 30&apos;, calendari</li>
            <li><strong>Preu:</strong> 6,90 €/mes · 5 dies de prova gratuïts</li>
            <li><strong>Web:</strong> <a href="https://www.docentclip.cat" target="_blank" rel="noopener" style={{ color: '#00D9A3', textDecoration: 'none' }}>docentclip.cat</a></li>
          </ul>
        </article>
      </section>

      <div className="actions">
        <a className="btn-action btn-action-primary" href="https://www.docentclip.cat" target="_blank" rel="noopener">Visitar web</a>
        <Link className="btn-action btn-action-secondary" href="/#projectes">Tornar a projectes</Link>
      </div>
    </main>
  )
}
