import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projecte: Gatamagat.cat | Serra.link',
  description: 'Fitxa del projecte Gatamagat.cat desenvolupat per Serra.link.',
}

export default function ProjecteGatamagat() {
  return (
    <main className="projecte-main">
      <span className="badge">E-commerce · Moda · Cultura</span>
      <h1>Gatamagat.cat</h1>
      <p className="subtitle">Botiga online de samarretes i roba catalana amb identitat, disseny i sostenibilitat real. Cotó orgànic certificat GOTS i enviament gratuït per a comandes superiors a 50€.</p>

      <Image
        className="shot"
        src="/assets/projects/gatamagat.svg"
        alt="Screenshot de Gatamagat.cat"
        width={1200}
        height={460}
        style={{ width: '100%', height: '460px', objectFit: 'cover', objectPosition: 'top' }}
      />

      <section className="project-page-grid">
        <article className="project-page-card">
          <h3>Resum del projecte</h3>
          <p>Disseny i desenvolupament d&apos;una botiga online especialitzada en productes de moda amb identitat catalana. L&apos;e-commerce combina una estètica neta i natural amb una experiència de compra àgil, optimitzada per a mòbil i enfocada a convertir des del primer impacte. S&apos;ha treballat especialment el posicionament de marca i la comunicació dels valors de sostenibilitat.</p>
        </article>
        <article className="project-page-card">
          <h3>Informació clau</h3>
          <ul>
            <li><strong>Tipus:</strong> E-commerce</li>
            <li><strong>Sector:</strong> Moda i cultura catalana</li>
            <li><strong>Objectiu:</strong> Venda online i posicionament de marca</li>
            <li><strong>Web:</strong> <a href="https://www.gatamagat.cat" target="_blank" rel="noopener" style={{ color: '#00D9A3', textDecoration: 'none' }}>gatamagat.cat</a></li>
            <li><strong>Productes:</strong> Samarretes, sudaderes, mitjons, bosses</li>
            <li><strong>Certificació:</strong> Cotó orgànic GOTS</li>
          </ul>
        </article>
      </section>

      <div className="actions">
        <a className="btn-action btn-action-primary" href="https://www.gatamagat.cat" target="_blank" rel="noopener">Visitar web</a>
        <Link className="btn-action btn-action-secondary" href="/#projectes">Tornar a projectes</Link>
      </div>
    </main>
  )
}
