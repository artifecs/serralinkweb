import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disseny de pàgines web: com crear un lloc que converteixi visitants en clients | Serra.link',
  description: 'Descobreix els principis de disseny web que fan que una pàgina web sigui efectiva, ràpida i que converteixi visites en clients.',
  openGraph: {
    title: 'Disseny de pàgines web: com crear un lloc que converteixi | Serra.link',
    type: 'article',
    url: 'https://www.serra.link/blog/disseny-pagines-web',
  },
}

export default function BlogDissenyPaginesWeb() {
  return (
    <article>
      <div className="article-hero">
        <div className="article-tag">Disseny Web</div>
        <h1 className="article-title">Disseny de pàgines web: com crear un lloc que converteixi visitants en clients</h1>
        <div className="article-meta">
          <span>Serra.link</span>
          <span>Juny 2025</span>
          <span>8 min de lectura</span>
        </div>
      </div>

      <div className="article-body">
        <p>Quan una persona aterra a la teva pàgina web, tens menys de <strong>tres segons</strong> per convèncer-la que segueixi llegint. Tres segons. En aquest breu instant, el teu disseny web ha de respondre una pregunta silenciosa però crucial: &quot;Puc fiar-me d&apos;aquest lloc?&quot;</p>

        <p>Un bon disseny web no és simplement una qüestió estètica. És una estratègia de comunicació, confiança i conversió. En aquest article t&apos;expliquem els principis que fan que una pàgina web no només sigui bonica, sinó efectiva.</p>

        <h2>Per què el disseny web és una inversió, no una despesa</h2>

        <p>Molts empresaris veuen la creació d&apos;una pàgina web com una despesa puntual. Però la realitat és diferent: <strong>la teva web treballa 24 hores al dia, 7 dies a la setmana</strong>, representant el teu negoci davant de milers de potencials clients.</p>

        <p>Una web mal dissenyada genera desconfiança, augmenta la taxa de rebot i fa perdre oportunitats de negoci cada dia. En canvi, una web professional ben estructurada pot ser el teu millor comercial.</p>

        <div className="highlight-box">
          <p><strong>Dada clau:</strong> El 75% dels usuaris jutgen la credibilitat d&apos;una empresa basant-se en el disseny del seu lloc web. La primera impressió es forma en 50 milisegons.</p>
        </div>

        <h2>Els 7 principis del disseny web que converteix</h2>

        <h3>1. Jerarquia visual clara</h3>
        <p>El teu visitant ha de saber instantàniament on mirar i quin és el pas següent. Això s&apos;aconsegueix amb una jerarquia visual ben definida: títols grans i impactants, subtítols clars, text llegible i botons d&apos;acció ben destacats.</p>
        <p>La regla és simple: <strong>si tot és important, res és important</strong>. Prioritza el missatge principal i guia l&apos;ull de l&apos;usuari fins a l&apos;acció que vols que faci.</p>

        <h3>2. Velocitat de càrrega</h3>
        <p>Google penalitza les webs lentes i els usuaris les abandonen. Un segon de retard en la càrrega pot suposar una reducció del 7% en les conversions. Imatges optimitzades, codi net i un bon servidor són fonamentals.</p>

        <h3>3. Disseny adaptatiu (responsive)</h3>
        <p>Més del <strong>60% del tràfic web prové de dispositius mòbils</strong>. Una web que no funciona correctament al mòbil perd més de la meitat dels seus visitants potencials. El disseny responsive no és opcional: és imprescindible.</p>

        <h3>4. Crida a l&apos;acció (CTA) efectiva</h3>
        <p>Cada pàgina ha de tenir un objectiu clar i un botó o formulari que guiï l&apos;usuari cap a aquell objectiu. &quot;Contacta&apos;ns&quot;, &quot;Demana pressupost&quot;, &quot;Truca ara&quot;... La CTA ha de ser visible, clara i fàcil de fer.</p>

        <h3>5. Proves socials i credibilitat</h3>
        <p>Testimonis de clients, logos d&apos;empreses amb qui has treballat, premis, certificacions o anys d&apos;experiència: tots aquests elements construeixen confiança. En un entorn digital on no hi ha contacte físic, la prova social és essencial.</p>

        <h3>6. Navegació intuïtiva</h3>
        <p>L&apos;usuari no ha de pensar per trobar el que busca. El menú ha de ser clar, les categories lògiques i el camí fins a la informació o al contacte, el més curt possible. La regla dels tres clics: qualsevol informació ha de ser accessible en màxim 3 clics.</p>

        <h3>7. Identitat visual coherent</h3>
        <p>Colors, tipografies, iconografia i imatges han de comunicar els mateixos valors que el teu negoci. Una identitat visual coherent construeix reconeixement de marca i transmet professionalitat.</p>

        <hr className="article-divider" />

        <h2>Disseny web i SEO: dues cares de la mateixa moneda</h2>

        <p>Un bon disseny web no serveix de res si ningú no el veu. Per això, el disseny i el posicionament a cercadors (SEO) han d&apos;anar de la mà des del primer moment.</p>

        <p>Aspectes com l&apos;estructura de capçaleres H1-H2-H3, la velocitat de càrrega, l&apos;experiència d&apos;usuari (UX), els textos alternatius de les imatges i la navegabilitat afecten directament al posicionament a Google.</p>

        <div className="highlight-box">
          <p>A Serra.link dissenyem sempre pensant en SEO des del primer minut. El resultat és una web que no només és bonica, sinó que apareix a Google quan els teus clients potencials et busquen.</p>
        </div>

        <h2>Els errors de disseny web que fan perdre clients</h2>

        <ul>
          <li><strong>Massa text, poc blanc:</strong> Les pàgines saturades de text sense espai de respiració cansen la vista i fan fugir l&apos;usuari.</li>
          <li><strong>Imatges de baixa qualitat o de banc:</strong> Les fotos de stock genèriques resten autenticitat. Sempre que sigui possible, usa imatges reals del teu negoci.</li>
          <li><strong>Formularis de contacte massa llargs:</strong> Cada camp addicional redueix la taxa de conversió. Demana només el que necessites.</li>
          <li><strong>No tenir versió mòbil:</strong> Ja ho hem dit, però val la pena repetir-ho: si la teva web no funciona bé al mòbil, estàs perdent clients.</li>
          <li><strong>Manca de contacte visible:</strong> El telèfon, l&apos;email i la ubicació han de ser fàcils de trobar, preferiblement en totes les pàgines.</li>
          <li><strong>Pop-ups agressius:</strong> Els pop-ups que apareixen immediatament i ocupen tota la pantalla generen rebuig i augmenten la taxa de rebot.</li>
        </ul>

        <h2>Quant costa un bon disseny web professional?</h2>

        <p>El cost d&apos;una pàgina web professional varia molt segons les necessitats. Una web corporativa bàsica pot estar entre 800 i 2.500€, mentre que una botiga online o una web amb funcionalitats avançades pot arribar als 5.000-15.000€ o més.</p>

        <p>La pregunta clau no és &quot;quant costa?&quot;, sinó <strong>&quot;quant em pot generar?&quot;</strong>. Una web ben dissenyada que captura 2-3 clients nous al mes pot amortitzar la inversió en pocs mesos.</p>

        <p>A Serra.link oferim solucions adaptades a cada pressupost, sempre amb la màxima qualitat i amb l&apos;objectiu clar de generar retorn per al teu negoci.</p>

        <hr className="article-divider" />

        <h2>Conclusió: el disseny és la teva primera impressió digital</h2>

        <p>En un món on la competència és a un clic de distància, el disseny web ja no és un luxe: és una necessitat estratègica. Una web professional, ràpida, adaptada al mòbil i optimitzada per a la conversió és la millor inversió que pots fer per al teu negoci digital.</p>

        <p>Si estàs pensant en crear o renovar la teva pàgina web, a Serra.link tenim més de 20 anys d&apos;experiència dissenyant webs que funcionen. Parlem i veiem com podem ajudar-te.</p>
      </div>

      <div className="article-cta">
        <h3>Vols una web que realment funcioni?</h3>
        <p>Explica&apos;ns el teu projecte i et diem com podem ajudar-te a créixer en línia.</p>
        <Link href="/#contact">Demana pressupost gratuït</Link>
      </div>
    </article>
  )
}
