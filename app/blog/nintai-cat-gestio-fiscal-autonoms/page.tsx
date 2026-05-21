import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nintai.cat: la gestió fiscal per a autònoms catalans que esperàveu | Serra.link',
  description: 'Presentem Nintai.cat, la plataforma SaaS de gestió fiscal per a autònoms catalans amb facturació, despeses, resum trimestral i jul_IA_, una assessora virtual en català.',
  openGraph: {
    title: 'Nintai.cat: la gestió fiscal per a autònoms catalans | Serra.link',
    type: 'article',
    url: 'https://www.serra.link/blog/nintai-cat-gestio-fiscal-autonoms',
  },
}

export default function BlogNintai() {
  return (
    <article>
      <div className="article-hero">
        <div className="article-tag">Projecte propi · Llançament</div>
        <h1 className="article-title">Nintai.cat: la gestió fiscal per a autònoms catalans que esperàveu</h1>
        <div className="article-meta">
          <span>Serra.link</span>
          <span>Maig 2026</span>
          <span>5 min de lectura</span>
        </div>
      </div>

      <div className="article-body">
        <p>Hem passat mesos treballant en un projecte que va néixer d&apos;una necessitat molt real: els autònoms catalans no tenien cap eina de gestió fiscal pensada per a ells, en la seva llengua, i que fos veritablement simple d&apos;usar. Avui presentem <strong>Nintai.cat</strong>.</p>

        <p>El nom prové del japonès 忍耐 (<em>nintai</em>), que significa &quot;paciència i perseverança&quot;. Reflecteix exactament el que volem oferir: una eina que treballa per tu sense estress, perquè et puguis centrar en allò que de veritat importa.</p>

        <h2>El problema que volem resoldre</h2>
        <p>Cada trimestre, milers d&apos;autònoms catalans fan front a la mateixa rutina esgotadora: buscar factures escampades per l&apos;email, repassar targetes i rebuts, actualitzar fulls de càlcul a mà, i acabar trucant al gestor amb la pressió del termini al damunt.</p>
        <p>No és un problema de manca de disciplina. És un problema de <strong>falta d&apos;eines adequades</strong>. La majoria de plataformes del mercat estan pensades per a empreses grans, en castellà, i amb una corba d&apos;aprenentatge que fa por.</p>

        <div className="highlight-box">
          <p><strong>La nostra premissa:</strong> un autònom hauria de poder tancar el seu fiscal trimestral en menys d&apos;una hora. Amb Nintai, és possible.</p>
        </div>

        <h2>Què fa Nintai</h2>
        <p>Nintai és una plataforma web SaaS amb quatre pilars fonamentals:</p>

        <div className="feature-grid">
          <div className="feature-card">
            <span className="feat-icon">🧾</span>
            <h4>Facturació professional</h4>
            <p>Crea i envia factures amb el teu logo i branding. Gestió de clients, numeració automàtica i seguiment de l&apos;estat (pendent, cobrada, vençuda).</p>
          </div>
          <div className="feature-card">
            <span className="feat-icon">📊</span>
            <h4>Control de despeses</h4>
            <p>Registra i categoritza totes les teves despeses. Visió clara del flux de caixa mensual i anual per prendre millors decisions.</p>
          </div>
          <div className="feature-card">
            <span className="feat-icon">📋</span>
            <h4>Resum fiscal trimestral</h4>
            <p>Generació automàtica del resum de cada trimestre, llestos per exportar i compartir amb el teu gestor. Sense Excel, sense errors de còpia.</p>
          </div>
          <div className="feature-card">
            <span className="feat-icon">🤖</span>
            <h4>jul_IA_, assessora en català</h4>
            <p>Una IA especialitzada en fiscalitat per a autònoms que respon les teves preguntes en català, les 24 hores del dia. Inclosa en el pla Més + IA.</p>
          </div>
        </div>

        <h2>jul_IA_: l&apos;assessora que mai no tanca</h2>
        <p>La funcionalitat que més ens enorgulleix és jul_IA_, una assistenta virtual entrenada específicament en normativa fiscal per a autònoms i pimes catalanes. Pots preguntar-li quan cal presentar el model 303, com calcular l&apos;IVA d&apos;una despesa mixta, o si has de facturar amb retenció a un client concret.</p>
        <p>La seva resposta és immediata, en català, i sempre contextualitzada a la realitat d&apos;un autònom. No és un chatbot genèric: és una eina fiscal especialitzada.</p>

        <hr className="article-divider" />

        <h2>Per a qui és Nintai</h2>
        <p>Nintai és ideal si ets:</p>
        <ul>
          <li>Autònom o freelance que vol portar les finances sense dependre del gestor per a cada dubte.</li>
          <li>Petita empresa o microempresa de parla catalana que busca una alternativa accessible a les grans plataformes.</li>
          <li>Professional que vol tenir el fiscal al dia sense dedicar-hi hores cada trimestre.</li>
        </ul>

        <h2>Plans i preus</h2>
        <p>Hem dissenyat tres plans per adaptar-nos a realitats molt diferents:</p>

        <div className="price-box">
          <div className="price-item">
            <div className="plan-name">Calma</div>
            <div className="plan-price">7,99 €<span>/mes</span></div>
            <div className="plan-desc">Factures, despeses i resum fiscal trimestral. Per qui vol portar les finances al dia.</div>
          </div>
          <div className="price-item featured">
            <div className="plan-name">Més + IA ⭐</div>
            <div className="plan-price">12,99 €<span>/mes</span></div>
            <div className="plan-desc">Tot el pla Calma, més jul_IA_ il·limitada. La nostra recomanació per a la majoria d&apos;autònoms.</div>
          </div>
          <div className="price-item">
            <div className="plan-name">Equip</div>
            <div className="plan-price">A mida</div>
            <div className="plan-desc">Per a equips, assessories i empreses que gestionen múltiples usuaris o empreses.</div>
          </div>
        </div>

        <p>Tots els plans inclouen <strong>5 dies de prova gratuïts, sense targeta de crèdit</strong>. Si no quedes convençut, no pagues res.</p>

        <h2>El que ve ara</h2>
        <p>El llançament d&apos;avui és la versió 1.0. Tenim un full de ruta ambiciós: connexió directa amb l&apos;Agència Tributària per a la presentació automatitzada de models, facturació electrònica (Facturae), integració amb bancs per a reconciliació automàtica de despeses, i molt més.</p>
        <p>Cada millora la treballarem en estret contacte amb els usuaris. Si tens suggeriments o necessitats específiques, escriu-nos directament.</p>

        <div className="highlight-box">
          <p><strong>Prova Nintai gratis 5 dies</strong> a <a href="https://www.nintai.cat" target="_blank" rel="noopener" style={{ color: '#4ade80', textDecoration: 'none' }}>nintai.cat</a>. Si ets autònom i et trobes a Catalunya, creiem que l&apos;estimaràs.</p>
        </div>
      </div>

      <div className="article-cta">
        <h3>Prova Nintai.cat ara</h3>
        <p>5 dies gratis, sense targeta. La gestió fiscal que els autònoms catalans mereixien.</p>
        <div className="cta-btns">
          <a href="https://www.nintai.cat" target="_blank" rel="noopener" className="btn-main">Anar a Nintai.cat →</a>
          <Link href="/#contact" className="btn-sec">Parla amb nosaltres</Link>
        </div>
      </div>
    </article>
  )
}
