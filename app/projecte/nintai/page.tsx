import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projecte: Nintai.cat | Serra.link',
  description: 'Fitxa del projecte Nintai.cat desenvolupat per Serra.link.',
}

export default function ProjecteNintai() {
  return (
    <main className="projecte-main">
      <span className="badge">SaaS · Fiscal · Intel·ligència Artificial</span>
      <h1>Nintai.cat</h1>
      <p className="subtitle">Plataforma de gestió fiscal dissenyada per a autònoms i petites empreses de parla catalana. Factures, despeses, resum trimestral i jul_IA_, una assessora virtual en català disponible 24/7.</p>

      <Image
        className="shot"
        src="/assets/projects/nintai.svg"
        alt="Screenshot de Nintai.cat"
        width={1200}
        height={460}
        style={{ width: '100%', height: '460px', objectFit: 'cover', objectPosition: 'top' }}
      />

      <section className="project-page-grid">
        <article className="project-page-card">
          <h3>Resum del projecte</h3>
          <p>Nintai (忍耐, &quot;paciència&quot; en japonès) és una aplicació web SaaS pensada perquè els autònoms catalans puguin gestionar la seva fiscalitat sense estrès. Inclou creació de factures, control de despeses, monitoratge del flux de caixa i resums trimestrals automàtics. El diferencial és jul_IA_, una assessora virtual basada en IA que resol dubtes fiscals en català les 24 hores.</p>
        </article>
        <article className="project-page-card">
          <h3>Informació clau</h3>
          <ul>
            <li><strong>Tipus:</strong> Aplicació web SaaS</li>
            <li><strong>Sector:</strong> Gestió fiscal i comptabilitat</li>
            <li><strong>Públic:</strong> Autònoms i pimes catalanes</li>
            <li><strong>Funcions destacades:</strong> Facturació, despeses, fiscal trimestral, IA en català</li>
            <li><strong>Plans:</strong> Calma (7,99€/mes), Més + IA (12,99€/mes), Equip</li>
            <li><strong>Web:</strong> <a href="https://www.nintai.cat" target="_blank" rel="noopener" style={{ color: '#00D9A3', textDecoration: 'none' }}>nintai.cat</a></li>
          </ul>
        </article>
      </section>

      <div className="actions">
        <a className="btn-action btn-action-primary" href="https://www.nintai.cat" target="_blank" rel="noopener">Visitar web</a>
        <Link className="btn-action btn-action-secondary" href="/#projectes">Tornar a projectes</Link>
      </div>
    </main>
  )
}
