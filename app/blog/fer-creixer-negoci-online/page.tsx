import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Com fer créixer el teu negoci amb una pàgina web ben posicionada | Serra.link',
  description: 'Estratègia digital completa per convertir la teva presència web en un motor de creixement real i mesurable per al teu negoci.',
  openGraph: {
    title: 'Com fer créixer el teu negoci amb una pàgina web ben posicionada | Serra.link',
    type: 'article',
    url: 'https://www.serra.link/blog/fer-creixer-negoci-online',
  },
}

export default function BlogFerCreixerNegociOnline() {
  return (
    <article>
      <div className="article-hero">
        <div className="article-tag">Creixement Digital</div>
        <h1 className="article-title">Com fer créixer el teu negoci amb una pàgina web ben posicionada</h1>
        <div className="article-meta">
          <span>Serra.link</span>
          <span>Juny 2025</span>
          <span>10 min de lectura</span>
        </div>
      </div>

      <div className="article-body">
        <p>Tenir una pàgina web és el primer pas. Però hi ha milers de webs que existeixen en l&apos;oblit digital: no les troba ningú, no generen contactes i no contribueixen al creixement del negoci. La diferència entre una web que &quot;hi és&quot; i una web que &quot;treballa&quot; per tu és estratègia.</p>

        <p>En aquest article t&apos;expliquem com convertir la teva presència digital en un motor de creixement real i mesurable per al teu negoci.</p>

        <h2>El triangle del creixement digital</h2>

        <p>Fer créixer un negoci a través d&apos;una web es basa en tres pilars que han de funcionar junts:</p>

        <ul>
          <li><strong>Visibilitat:</strong> Que et trobin quan et busquen (SEO, Google Ads, xarxes socials)</li>
          <li><strong>Confiança:</strong> Que quan t&apos;arribin, vulguin quedar-se i contactar (disseny, contingut, proves socials)</li>
          <li><strong>Conversió:</strong> Que el visitant faci l&apos;acció que vols (trucada, formulari, compra)</li>
        </ul>

        <p>Si falla qualsevol dels tres pilars, el resultat no és òptim. Pots tenir molt de tràfic però si la web no genera confiança, ningú contactarà. Pots tenir un disseny impressionant però si ningú no t&apos;arriba, no és útil.</p>

        <h2>SEO local: ser visible quan et busquen a prop</h2>

        <p>Si tens un negoci local, el SEO local és probablement la teva millor eina de creixement. Quan algú cerca &quot;dentista Cardedeu&quot; o &quot;agència web Granollers&quot;, vols aparèixer entre els primers resultats.</p>

        <h3>Google My Business: el teu perfil local gratuït</h3>
        <p>El perfil de Google My Business (ara Google Business Profile) és imprescindible. Permet que el teu negoci aparegui al mapa de Google i als resultats locals. Assegura&apos;t que:</p>

        <ul>
          <li>Tens el perfil complet: horaris, telèfon, adreça, web, fotos</li>
          <li>Respons a les ressenyes dels clients (especialment les negatives)</li>
          <li>Publiques actualitzacions i novetats regularment</li>
          <li>Utilitzes les paraules clau rellevants a la descripció</li>
        </ul>

        <h3>Paraules clau locals a la teva web</h3>
        <p>La teva web ha de mencionar explícitament la teva zona geogràfica en títols, metadescripcions i contingut. No n&apos;hi ha prou de tenir el negoci a Cardedeu si la web no ho menciona. Google necessita aquesta informació per connectar-te amb els cercadors locals.</p>

        <div className="highlight-box">
          <p>A Serra.link som especialistes en <strong>SEO local per a negocis del Vallès Oriental i zones properes</strong>. Coneixem l&apos;entorn i les paraules clau que fan que els teus clients et trobin.</p>
        </div>

        <h2>Contingut que posiciona i que converteix</h2>

        <p>Google premia els llocs web amb contingut de qualitat, actual i rellevant. Un bloc d&apos;articles especialitzats no és un luxe: és una inversió en visibilitat a llarg termini.</p>

        <h3>Per quin contingut apostar</h3>
        <ul>
          <li><strong>Preguntes freqüents dels teus clients:</strong> Si molts clients et pregunten el mateix, és que Google rep aquelles mateixes cerques.</li>
          <li><strong>Guies pràctiques:</strong> Articles com &quot;Com triar un...?&quot; o &quot;Quina diferència hi ha entre...?&quot; atrauen tràfic qualificat.</li>
          <li><strong>Casos d&apos;èxit i projectes:</strong> Mostrar resultats reals augmenta la confiança i millora el posicionament.</li>
          <li><strong>Actualitzacions del sector:</strong> Demostres que ets un expert actiu i al dia.</li>
        </ul>

        <h2>La ruta de conversió: de visita a client</h2>

        <p>Una &quot;conversió&quot; és quan un visitant fa l&apos;acció que tu vols: trucar, enviar un formulari, fer una compra, subscriure&apos;s a la newsletter. Optimitzar la conversió és una de les accions amb millor retorn d&apos;inversió que pots fer.</p>

        <ul className="steps-list">
          <li>
            <div className="step-num">1</div>
            <div className="step-content">
              <h4>Aterrar a la pàgina correcta</h4>
              <p>L&apos;usuari ha d&apos;arribar a la pàgina que respon exactament al que buscava. No portis tothom a la portada.</p>
            </div>
          </li>
          <li>
            <div className="step-num">2</div>
            <div className="step-content">
              <h4>Primera impressió que construeix confiança</h4>
              <p>En 3 segons ha d&apos;entendre qui ets, què ofereixes i per què ets la millor opció. Missatge clar i disseny professional.</p>
            </div>
          </li>
          <li>
            <div className="step-num">3</div>
            <div className="step-content">
              <h4>Prova social visible</h4>
              <p>Testimonis, ressenyes, projectes anteriors, logos de clients. La prova social redueix la fricció a la decisió de compra.</p>
            </div>
          </li>
          <li>
            <div className="step-num">4</div>
            <div className="step-content">
              <h4>CTA clara i accessible</h4>
              <p>El botó o formulari de contacte ha de ser visible sense haver de fer scroll. En mòbil, el número de telèfon ha de ser clicable.</p>
            </div>
          </li>
          <li>
            <div className="step-num">5</div>
            <div className="step-content">
              <h4>Resposta ràpida</h4>
              <p>Si reps un formulari o una trucada, respon en menys de 2 hores. La velocitat de resposta és un factor decisiu per al client.</p>
            </div>
          </li>
        </ul>

        <hr className="article-divider" />

        <h2>Mesura, analitza i millora: la web és un projecte viu</h2>

        <p>Una de les grans avantatges del màrqueting digital respecte al tradicional és que <strong>tot és mesurable</strong>. Google Analytics, Google Search Console i altres eines et permeten saber:</p>

        <ul>
          <li>Quantes persones visiten la teva web i d&apos;on venen</li>
          <li>Quines pàgines visiten i quant temps hi estan</li>
          <li>Per quines paraules clau et troben a Google</li>
          <li>Quins formularis s&apos;envien i des de quines pàgines</li>
          <li>Des de quin dispositiu et visiten (mòbil, escriptori, tablet)</li>
        </ul>

        <p>Amb aquesta informació pots prendre decisions fonamentades: quins continguts crear, quines pàgines millorar, on posar les crida a l&apos;acció...</p>

        <h2>Google Ads: resultats immediats mentre el SEO madura</h2>

        <p>El SEO és una inversió a llarg termini: els resultats tarden de 3 a 12 mesos en ser significatius. Mentrestant, Google Ads permet aparèixer immediatament als primers resultats de cerca per a les paraules clau que et interessen.</p>

        <p>La clau de Google Ads no és gastar molt, sinó gastar bé: segmentar correctament, crear anuncis atractius i portar l&apos;usuari a pàgines d&apos;aterratge optimitzades per convertir.</p>

        <div className="highlight-box">
          <p>La millor estratègia combina SEO orgànic a llarg termini amb campanyes de Google Ads a curt termini. Junts cobreixen tot el cicle de creixement del teu negoci digital.</p>
        </div>

        <h2>Xarxes socials i web: com treballen juntes</h2>

        <p>Les xarxes socials no substitueixen la web: la complementen. Instagram, Facebook o LinkedIn generen visibilitat i comunitat, però la web és on es tanca el negoci. La sinèrgia entre ambdues és potent:</p>

        <ul>
          <li>Les xarxes socials porten tràfic a la web</li>
          <li>La web dona contingut per publicar a xarxes</li>
          <li>El blog i les xarxes socials construeixen autoritat i SEO</li>
          <li>Les ressenyes de Google s&apos;alimenten de la base de clients generada per la web</li>
        </ul>

        <hr className="article-divider" />

        <h2>Conclusió: la teva web pot ser el teu millor comercial</h2>

        <p>Un negoci amb una estratègia digital ben executada creix de manera sostinguda i previsible. La teva web, quan està ben dissenyada, programada i posicionada, treballa per tu les 24 hores del dia atreient, informant i convertint clients potencials.</p>

        <p>No esperes a tenir la web &quot;perfecta&quot; per començar. Comença, mesura i millora progressivament. L&apos;important és entrar al joc digital i anar aprenent del que funciona en el teu sector i mercat.</p>

        <p>A Serra.link t&apos;acompanyem en tot el procés: des del disseny i la programació fins a l&apos;estratègia SEO, les campanyes i el seguiment de resultats. Més de 20 anys ajudant negocis a créixer en línia.</p>
      </div>

      <div className="article-cta">
        <h3>Preparat per fer créixer el teu negoci?</h3>
        <p>Parlem del teu projecte i definim junts l&apos;estratègia digital que necessites.</p>
        <Link href="/#contact">Parlem ara</Link>
      </div>
    </article>
  )
}
