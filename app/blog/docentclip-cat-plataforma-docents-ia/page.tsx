import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DocentClip.cat: de la nota de veu a l\'informe educatiu en un clic | Serra.link',
  description: 'Presentem DocentClip.cat, la plataforma per a docents de Catalunya que transforma notes de veu i entrevistes en informes educatius amb IA.',
  openGraph: {
    title: 'DocentClip.cat: de la nota de veu a l\'informe educatiu en un clic | Serra.link',
    type: 'article',
    url: 'https://www.serra.link/blog/docentclip-cat-plataforma-docents-ia',
  },
}

export default function BlogDocentclip() {
  return (
    <article>
      <div className="article-hero">
        <div className="article-tag">Projecte propi · Llançament</div>
        <h1 className="article-title">DocentClip.cat: de la nota de veu a l&apos;informe educatiu en un clic</h1>
        <div className="article-meta">
          <span>Serra.link</span>
          <span>Maig 2026</span>
          <span>5 min de lectura</span>
        </div>
      </div>

      <div className="article-body">
        <p>Els mestres catalans dediquen hores i hores a una feina invisible: escriure observacions, redactar informes d&apos;alumnes, documentar entrevistes amb les famílies. Temps que no és a l&apos;aula. Temps que podrien dedicar al que realment els importa: <strong>ensenyar</strong>. Avui presentem <strong>DocentClip.cat</strong>, la plataforma que volem que canviï això.</p>

        <p>La idea va néixer de converses reals amb mestres de primària i secundària. El denominador comú era sempre el mateix: la paperassa ofegava la vocació. Nosaltres vam veure una oportunitat clara per posar la IA al servei d&apos;un col·lectiu que mai no ha tingut eines prou bones.</p>

        <h2>El problema real dels docents</h2>
        <p>Un mestre de primària pot tenir 25 alumnes per aula. Cada trimestre ha de redactar informes individuals, documentar observacions del dia a dia, transcriure notes d&apos;entrevistes amb pares, preparar reunions d&apos;equip... Tot això, normalment, fora de l&apos;horari lectiu.</p>

        <p>El problema no és la manca de voluntat. És que les eines actuals —Word, notes de mòbil, correus dispersos— <strong>no estan pensades per al seu flux de treball</strong>. Gravar una entrevista amb una família és fàcil. Transformar-la en un informe estructurat i llest per enviar requeria, fins ara, moltes hores.</p>

        <div className="highlight-box">
          <p><strong>La nostra premissa:</strong> un docent no hauria de trigar més de cinc minuts a tenir un informe d&apos;entrevista llest per compartir. Amb DocentClip, és possible des del primer dia.</p>
        </div>

        <h2>Com funciona DocentClip</h2>
        <p>El flux és deliberadament simple. No cal aprendre cap eina complexa ni canviar hàbits. Funciona exactament com el docent ja treballa:</p>

        <div className="steps-flow">
          <div className="step-row">
            <div className="step-num">1</div>
            <div>
              <h4>Enregistra</h4>
              <p>Grava una nota de veu, una observació d&apos;aula o una entrevista familiar directament des del navegador. S&apos;accepten fins a 30 minuts de gravació sense tall.</p>
            </div>
          </div>
          <div className="step-row">
            <div className="step-num">2</div>
            <div>
              <h4>La IA transcriu i organitza</h4>
              <p>La intel·ligència artificial transcriu la gravació, detecta els punts clau i els estructura en seccions lògiques: context, observacions, acords, properes accions.</p>
            </div>
          </div>
          <div className="step-row">
            <div className="step-num">3</div>
            <div>
              <h4>Revisa i edita</h4>
              <p>L&apos;informe generat és totalment editable. El docent pot ajustar el text, afegir comentaris addicionals o canviar el to abans d&apos;exportar-lo.</p>
            </div>
          </div>
          <div className="step-row">
            <div className="step-num">4</div>
            <div>
              <h4>Exporta i comparteix</h4>
              <p>Descàrrega l&apos;informe en PDF o envia&apos;l directament per email a la família o a l&apos;equip docent. Tot des de la mateixa pantalla.</p>
            </div>
          </div>
        </div>

        <h2>Què inclou la plataforma</h2>
        <p>DocentClip va molt més allà de la transcripció. Hem pensat en el cicle complet de gestió documental d&apos;un mestre:</p>

        <div className="feature-grid">
          <div className="feature-card">
            <span className="feat-icon">🎙</span>
            <h4>Notes de veu i transcripció</h4>
            <p>Enregistra directament al navegador. La IA transcriu i estructura el contingut en menys d&apos;un minut, fins i tot en català i amb vocabulari educatiu específic.</p>
          </div>
          <div className="feature-card">
            <span className="feat-icon">👨‍👩‍👧</span>
            <h4>Entrevistes familiars</h4>
            <p>Fins a 30 minuts de gravació per entrevista. Perfecte per documentar reunions amb pares sense perdre detalls importants ni haver d&apos;escriure mentre escoltes.</p>
          </div>
          <div className="feature-card">
            <span className="feat-icon">📄</span>
            <h4>Informes editables i PDF</h4>
            <p>Cada nota es converteix en un informe professional, editable i exportable en PDF. Pots enviar-lo per email directament des de la plataforma.</p>
          </div>
          <div className="feature-card">
            <span className="feat-icon">📅</span>
            <h4>Calendari i etiquetes</h4>
            <p>Visualitza totes les notes ordenades per data al calendari mensual. Filtra per alumne, per grup o per tipus d&apos;activitat amb el sistema d&apos;etiquetes.</p>
          </div>
        </div>

        <h2>Dissenyat per al sistema educatiu català</h2>
        <p>DocentClip no és una eina genèrica adaptada. Ha estat construïda des de zero pensant en els docents de Catalunya: la interfície és en català, la IA entén terminologia pedagògica en català, i els informes generats utilitzen els formats i el vocabulari que s&apos;espera en el sistema educatiu del país.</p>

        <p>No és un detall menor. Un mestre de primària a Cardedeu o a Tarragona no hauria de lluitar amb una eina en castellà o en anglès per fer la seva feina del dia a dia.</p>

        <hr className="article-divider" />

        <h2>Per a qui és DocentClip</h2>
        <p>La plataforma és ideal per a:</p>
        <ul>
          <li>Mestres de primària i secundària que volen documentar observacions d&apos;aula de forma eficient.</li>
          <li>Tutors que fan entrevistes periòdiques amb famílies i necessiten un registre fiable i ràpid.</li>
          <li>Equips docents que volen centralitzar la documentació en un sol lloc accessible.</li>
          <li>Centres educatius que busquen digitalitzar i agilitzar els processos de seguiment d&apos;alumnes.</li>
        </ul>

        <h2>Preu únic, tot inclòs</h2>
        <p>Hem optat deliberadament per un model de preu senzill. Sense plans, sense opcions confuses, sense funcions amagades darrere d&apos;un pla premium:</p>

        <div className="price-single">
          <div className="price-single-info">
            <div className="plan-label">Tot inclòs</div>
            <div className="plan-price">6,90 €<span>/mes</span></div>
            <div className="plan-desc">Transcripcions il·limitades · Informes en PDF · Entrevistes de fins a 30&apos; · Calendari i etiquetes · Enviament per email</div>
          </div>
          <ul className="price-single-features">
            <li>5 dies de prova gratuïts</li>
            <li>Sense targeta de crèdit</li>
            <li>Cancel·la quan vulguis</li>
            <li>Suport en català</li>
          </ul>
        </div>

        <p>Un preu accessible perquè creiem que una eina d&apos;aquestes característiques ha d&apos;arribar a tots els docents, no només als centres amb grans pressupostos de digitalització.</p>

        <h2>El que ve ara</h2>
        <p>El llançament d&apos;avui és la versió 1.0. El full de ruta que tenim al davant inclou: mode col·laboratiu per compartir notes entre membres del claustre, integració amb les plataformes digitals dels centres (Google Workspace, Microsoft 365), plantilles d&apos;informe personalitzables per cicle i etapa educativa, i un sistema de recordatoris per al seguiment d&apos;alumnes.</p>

        <p>Cada nova funcionalitat la decidirem conjuntament amb els docents que utilitzen la plataforma. Si tens suggeriments, la nostra porta és oberta.</p>

        <div className="highlight-box">
          <p><strong>Prova DocentClip gratis 5 dies</strong> a <a href="https://www.docentclip.cat" target="_blank" rel="noopener" style={{ color: '#818cf8', textDecoration: 'none' }}>docentclip.cat</a>. Si ets docent a Catalunya, creiem que et canviarà la manera de treballar.</p>
        </div>
      </div>

      <div className="article-cta">
        <h3>Prova DocentClip.cat ara</h3>
        <p>5 dies gratis, sense targeta. La plataforma que els docents de Catalunya estaven esperant.</p>
        <div className="cta-btns">
          <a href="https://www.docentclip.cat" target="_blank" rel="noopener" className="btn-main">Anar a DocentClip.cat →</a>
          <Link href="/#contact" className="btn-sec">Parla amb nosaltres</Link>
        </div>
      </div>
    </article>
  )
}
