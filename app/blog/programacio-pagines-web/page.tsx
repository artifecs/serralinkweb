import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Programació de pàgines web: per què importa la tecnologia | Serra.link',
  description: 'Tot el que necessites saber sobre programació web des d\'un punt de vista empresarial: tecnologies, SEO tècnic, seguretat i manteniment.',
  openGraph: {
    title: 'Programació de pàgines web: per què importa la tecnologia | Serra.link',
    type: 'article',
    url: 'https://www.serra.link/blog/programacio-pagines-web',
  },
}

export default function BlogProgramacioPaginesWeb() {
  return (
    <article>
      <div className="article-hero">
        <div className="article-tag">Programació</div>
        <h1 className="article-title">Programació de pàgines web: per què importa la tecnologia que hi ha darrere</h1>
        <div className="article-meta">
          <span>Serra.link</span>
          <span>Juny 2025</span>
          <span>9 min de lectura</span>
        </div>
      </div>

      <div className="article-body">
        <p>La majoria de propietaris de negoci veuen el seu lloc web com una &quot;vitrina digital&quot;. I és cert, però és molt més que això. Darrere de cada pàgina que veu l&apos;usuari hi ha centenars o milers de línies de codi que determinen si la web carrega en 1 segon o en 8, si Google la indexa correctament, si és vulnerable a atacs, i si pot créixer amb el teu negoci.</p>

        <p>En aquest article t&apos;expliquem tot el que necessites saber sobre programació web des d&apos;un punt de vista empresarial, sense tecnicismes innecessaris.</p>

        <h2>Programació web: el motor invisible del teu negoci digital</h2>

        <p>Quan diem &quot;programació web&quot; ens referim a tot el codi que fa funcionar una pàgina. Hi ha dues cares:</p>

        <ul>
          <li><strong>Frontend (el que veu l&apos;usuari):</strong> Tot el que apareix a la pantalla: colors, botons, animacions, formularis. S&apos;escriu amb HTML, CSS i JavaScript.</li>
          <li><strong>Backend (el motor ocult):</strong> El que passa darrere les escenes: gestió de bases de dades, autenticació, enviament d&apos;emails, processament de comandes. S&apos;utilitzen llenguatges com PHP, Python, Node.js o Ruby.</li>
        </ul>

        <p>Una web empresarial moderna necessita una bona programació en ambdues capes. Un disseny preciós amb un backend feble és com un cotxe de carreres amb motor d&apos;utilitari.</p>

        <h2>Les tecnologies web més importants per al teu negoci</h2>

        <div className="tech-grid">
          <div className="tech-card">
            <h4>WordPress + PHP</h4>
            <p>La plataforma més popular del món. Ideal per webs corporatives, blogs i botigues WooCommerce. Flexible i amb ampli suport.</p>
          </div>
          <div className="tech-card">
            <h4>HTML/CSS/JS personalitzat</h4>
            <p>Per webs a mida sense dependències. Màxima velocitat, seguretat i control. Ideal quan calen prestacions tècniques elevades.</p>
          </div>
          <div className="tech-card">
            <h4>WooCommerce / Shopify</h4>
            <p>Plataformes especialitzades en comerç electrònic. Gestió d&apos;inventari, pagaments, enviaments i fiscalitat integrades.</p>
          </div>
          <div className="tech-card">
            <h4>React / Vue.js</h4>
            <p>Frameworks moderns per aplicacions web complexes o pàgines amb alta interactivitat. Experiència d&apos;usuari superior.</p>
          </div>
        </div>

        <div className="highlight-box">
          <p>A Serra.link triem la tecnologia en funció de les necessitats del projecte, no per tendència. No hi ha una tecnologia millor per a tot: hi ha la tecnologia adequada per a cada cas.</p>
        </div>

        <h2>Per què la programació web afecta el teu posicionament a Google</h2>

        <p>Google no &quot;veu&quot; la teva web com la veuen els humans. Els seus robots llegeixen el codi i analitzen factors tècnics per decidir on aparèixes als resultats de cerca. Una programació deficient pot sabotejar tot el teu esforç de SEO:</p>

        <h3>Velocitat de càrrega (Core Web Vitals)</h3>
        <p>Google mesura amb precisió quant triga a carregar la teva web i penalitza les lentes. Imatges sense optimitzar, codi JavaScript excessiu, recursos que bloquegen la càrrega... Tots aquests problemes provenen d&apos;una programació deficient.</p>

        <h3>Estructura semàntica del codi</h3>
        <p>El codi HTML ha de comunicar clarament a Google quina és la informació important: títol principal (H1), subtítols (H2-H3), contingut, imatges amb text alternatiu. Un codi desordenat fa que Google no entengui de què tracta la teva pàgina.</p>

        <h3>Mobilitat i accessibilitat</h3>
        <p>Google utilitza el &quot;mobile-first indexing&quot;, és a dir, indexa primer la versió mòbil de la teva web. Si el codi no genera una experiència mòbil correcta, perd posicions a les cerques.</p>

        <h3>Seguretat (HTTPS)</h3>
        <p>Google prioritza les webs amb certificat SSL (les que comencen per HTTPS). A més, una web sense SSL genera advertiments als navegadors que fan fugir els visitants.</p>

        <h2>Plataforma predissenyada vs. web a mida: quan triar cadascuna</h2>

        <p>Una de les preguntes més freqüents és si és millor usar un constructor de webs (Wix, Squarespace, WordPress.com) o encarregar una web programada des de zero. La resposta depèn del teu cas:</p>

        <h3>Quan funcionen bé les plataformes predissenyades</h3>
        <ul>
          <li>Negocis que estan just començant i necessiten presència bàsica</li>
          <li>Pressupostos molt limitats (menys de 500€)</li>
          <li>Projectes senzills sense funcionalitats especials</li>
        </ul>

        <h3>Quan necessites una web a mida o WordPress professional</h3>
        <ul>
          <li>Quan la velocitat i el SEO tècnic són prioritat</li>
          <li>Quan necessites funcionalitats específiques (reserva, pagament, membres...)</li>
          <li>Quan vols que la web creixi amb el teu negoci sense limitacions</li>
          <li>Quan la teva marca necessita un disseny únic i diferenciador</li>
          <li>Quan el negoci depèn significativament de la web per generar ingressos</li>
        </ul>

        <hr className="article-divider" />

        <h2>Seguretat web: el que ningú t&apos;explica fins que és tard</h2>

        <p>Els atacs a pàgines web no afecten només a les grans empreses. De fet, <strong>el 43% dels ciberatacs es dirigeixen a petites i mitjanes empreses</strong>, precisament perquè solen tenir menys mesures de seguretat.</p>

        <p>Una programació descurada pot deixar portes obertes per a:</p>

        <ul>
          <li><strong>Injeccions SQL:</strong> Accés no autoritzat a la base de dades</li>
          <li><strong>Cross-Site Scripting (XSS):</strong> Inserció de codi maliciós a la teva web</li>
          <li><strong>Brute force attacks:</strong> Intents massius de descobrir contrasenyes</li>
          <li><strong>Vulnerabilitats de plugins:</strong> Molt comú en WordPress mal mantingut</li>
        </ul>

        <p>A Serra.link implementem mesures de seguretat en totes les webs que programem: certificats SSL, sanitització de formularis, contrasenyes xifrades, còpies de seguretat automàtiques i actualitzacions periòdiques.</p>

        <h2>Manteniment web: la inversió que es passa per alt</h2>

        <p>Una web no és un producte estàtic. Necessita manteniment continuu: actualitzacions de seguretat, còpies de seguretat, revisió de rendiment, adaptació a nous navegadors i dispositius.</p>

        <p>Una web sense manteniment durant 2-3 anys pot quedar tècnicament obsoleta, amb vulnerabilitats de seguretat i amb un rendiment que penalitza a Google. El cost de reparar una web atacada o de migrar-la d&apos;urgència és molt superior al cost d&apos;un manteniment regular.</p>

        <div className="highlight-box">
          <p>Oferim plans de manteniment web mensuals que inclouen actualitzacions, còpies de seguretat, monitoratge de rendiment i suport tècnic. Consulta&apos;ns per saber quin pla s&apos;adapta al teu negoci.</p>
        </div>

        <h2>Com triar un bon programador o agència web</h2>

        <p>Davant de tants perfils i preus al mercat, és difícil saber a qui confiar el teu projecte. Aquí tens les preguntes que hauries de fer:</p>

        <ol>
          <li><strong>Pots mostrar-me webs que has fet recentment?</strong> — El portafoli és la millor prova de la seva capacitat.</li>
          <li><strong>Quina tecnologia utilitzaràs i per què?</strong> — Han de poder justificar la seva elecció tecnològica.</li>
          <li><strong>Com afrontes el SEO tècnic?</strong> — Si no saben de qué parles, és un signe d&apos;alerta.</li>
          <li><strong>Qui s&apos;encarregarà del manteniment posterior?</strong> — La relació no acaba en el lliurament.</li>
          <li><strong>Tindré accés al codi i l&apos;allotjament?</strong> — El codi i el domini sempre han de ser teus.</li>
        </ol>

        <hr className="article-divider" />

        <h2>Conclusió: la programació és el que fa que la teva web funcioni de debò</h2>

        <p>El disseny atreu. El contingut informa. Però és la programació la que ho fa tot possible: velocitat, seguretat, posicionament i escalabilitat. Invertir en una bona programació web és invertir en la solidesa del teu negoci digital.</p>

        <p>A Serra.link combinem disseny i programació amb més de 20 anys d&apos;experiència. El resultat: webs que funcionen, que posicionen i que generen resultats mesurables.</p>
      </div>

      <div className="article-cta">
        <h3>Necessites una web ben programada?</h3>
        <p>Parlem del teu projecte i t&apos;expliquem quina tecnologia s&apos;adapta millor al teu negoci.</p>
        <Link href="/#contact">Contacta&apos;ns avui</Link>
      </div>
    </article>
  )
}
