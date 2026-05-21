import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO local per a PIMES: com captar clients propers | Serra.link',
  description: 'Aprèn a millorar el posicionament local del teu negoci amb Google Business Profile, ressenyes, SEO on-page i contingut geolocalitzat.',
  keywords: 'seo local pimes, google maps negoci, google business profile, posicionament local, seo cardedeu',
  openGraph: {
    title: 'SEO local per a PIMES: com captar clients propers | Serra.link',
    description: 'Guia clara de SEO local per aparèixer a Google Maps i generar més oportunitats de negoci a la teva zona.',
    type: 'article',
    url: 'https://www.serra.link/blog/seo-local-pimes',
  },
}

export default function BlogSeoLocalPimes() {
  return (
    <article>
      <div className="article-hero">
        <div className="article-tag">SEO Local</div>
        <h1 className="article-title">SEO local per a PIMES: com aparèixer a Google Maps i captar clients propers</h1>
        <div className="article-meta">
          <span>Serra.link</span>
          <span>Maig 2026</span>
          <span>7 min de lectura</span>
        </div>
      </div>

      <div className="article-body">
        <p>Quan algú busca &quot;electricista a prop&quot;, &quot;dentista Cardedeu&quot; o &quot;agència web Granollers&quot;, Google mostra primer negocis locals. Si la teva empresa no surt en aquests resultats, estàs deixant passar clients amb intenció de compra alta.</p>

        <p>La bona notícia és que el SEO local no requereix grans pressupostos per començar, però sí constància i una estratègia clara. En aquesta guia t&apos;expliquem els passos clau.</p>

        <h2>Què és el SEO local i per què és tan important</h2>
        <p>El SEO local és el conjunt d&apos;accions per millorar la visibilitat del teu negoci en cerques geolocalitzades, especialment al paquet de mapes de Google.</p>
        <p>Per a la majoria de PIMES, és una de les vies més ràpides per captar leads qualificats, perquè impacta persones que ja estan buscant un servei concret i proper.</p>

        <div className="highlight-box">
          <p><strong>Idea clau:</strong> en SEO local no guanya qui té la web més gran, sinó qui transmet millor rellevància, proximitat i confiança.</p>
        </div>

        <h2>1) Optimitza la teva fitxa de Google Business Profile</h2>
        <p>És la base de qualsevol estratègia local. Una fitxa incompleta o desactualitzada redueix dràsticament la teva visibilitat.</p>
        <ul>
          <li>Tria la categoria principal correcta i categories secundàries rellevants.</li>
          <li>Revisa NAP consistent: nom, adreça i telèfon iguals a tots els canals.</li>
          <li>Afegeix serveis, horaris, zona d&apos;actuació, fotos reals i descripció del negoci.</li>
          <li>Publica novetats periòdiques per mantenir activitat a la fitxa.</li>
        </ul>

        <h2>2) Aconsegueix ressenyes de qualitat</h2>
        <p>Les ressenyes són un senyal fort de confiança i poden influir tant al rànquing com a la conversió.</p>
        <p>Demana opinions als clients satisfets just després del servei, respon sempre (també les negatives) i evita missatges genèrics. Les respostes naturals i útils reforcen la credibilitat de marca.</p>

        <h2>3) Treballa el SEO local dins la web</h2>
        <p>No n&apos;hi ha prou amb la fitxa de Google. La teva web ha de confirmar a Google on treballes i què ofereixes.</p>
        <ul>
          <li>Crea pàgines de servei amb paraules clau geolocalitzades.</li>
          <li>Inclou municipis o àrees de servei de forma natural al contingut.</li>
          <li>Mostra dades de contacte visibles i coherents a totes les pàgines.</li>
          <li>Prioritza velocitat, usabilitat mòbil i estructura clara d&apos;encapçalaments.</li>
        </ul>

        <h2>4) Dona coherència als teus directoris i xarxes</h2>
        <p>Google contrasta dades entre diferents fonts. Si hi ha incoherències (telèfons antics, adreces diferents), baixa la confiança.</p>
        <p>Revisa portals locals, directoris sectorials i perfils socials perquè el NAP sigui exactament el mateix a tot arreu.</p>

        <hr className="article-divider" />

        <h2>Errors freqüents que frenen el SEO local</h2>
        <ul>
          <li>Tenir la fitxa verificada però sense actualitzar durant mesos.</li>
          <li>Acumular ressenyes sense respondre-les.</li>
          <li>Intentar posicionar moltes ciutats en una sola pàgina genèrica.</li>
          <li>No mesurar trucades, formularis ni clics a &quot;com arribar&quot;.</li>
        </ul>

        <h2>Com saber si estàs millorant</h2>
        <p>Mesura indicadors simples però útils: impressions a la fitxa, clics al web, trucades, peticions d&apos;itinerari i contactes rebuts. Si aquests KPI pugen, el SEO local està funcionant.</p>
        <p>Amb una base ben muntada, moltes PIMES comencen a notar resultats en poques setmanes, especialment en cerques de proximitat.</p>

        <h2>Conclusió</h2>
        <p>El SEO local és una oportunitat real per competir amb empreses més grans des de la proximitat i la confiança. Amb una fitxa optimitzada, una web coherent i ressenyes ben gestionades, pots convertir cerques locals en nous clients.</p>
      </div>

      <div className="article-cta">
        <h3>Vols millorar el teu posicionament local?</h3>
        <p>T&apos;ajudem a optimitzar la teva presència digital perquè et trobin els clients adequats.</p>
        <Link href="/#contact">Parlem del teu negoci</Link>
      </div>
    </article>
  )
}
