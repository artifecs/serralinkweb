'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Quant triga a fer-se una pàgina web?',
    a: 'Depèn de la complexitat. Una web corporativa senzilla pot estar llesta en 2–3 setmanes. Una botiga online o un projecte a mida pot trigar de 4 a 8 setmanes. Sempre consensuem els terminis des del primer dia.',
  },
  {
    q: 'Podré gestionar la web jo mateix després?',
    a: "Sí. Lliurem totes les webs amb un gestor de continguts senzill i t'oferim formació perquè puguis actualitzar textos, imatges i productes sense cap coneixement tècnic. Si necessites ajuda, estem aquí.",
  },
  {
    q: "Quin és el cost aproximat d'una pàgina web?",
    a: "Cada projecte és diferent. Una web corporativa bàsica comença des de 800€, mentre que les botigues online i projectes complexos poden arribar als 3.000–5.000€. Contacta'ns per a un pressupost sense compromís.",
  },
  {
    q: 'La web estarà adaptada per a mòbils?',
    a: "Sempre. Totes les webs que creem són 100% responsives. S'adapten perfectament a qualsevol dispositiu i les optimitzem perquè carreguin ràpid en connexions mòbils, clau per al SEO.",
  },
  {
    q: 'Oferiu servei de manteniment i suport?',
    a: "Sí. Disposem de serveis de manteniment mensual: actualitzacions de seguretat, còpies de seguretat, resolució d'incidències i suport tècnic. Molts clients ens acompanyen anys després del llançament.",
  },
  {
    q: 'Treballen la part de posicionament SEO?',
    a: "Sí. Totes les nostres webs inclouen una base SEO sòlida: estructura, velocitat, metadades, continguts optimitzats i Google Search Console. Per a clients que volen anar més lluny, oferim serveis de posicionament continu.",
  },
  {
    q: "Integreu Intel·ligència Artificial a les webs?",
    a: "Sí. Podem integrar chatbots amb IA, generació automàtica de continguts, assistents virtuals i molt més. La IA ja no és el futur, és el present, i t'ajudem a aprofitar-la de forma pràctica.",
  },
]

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIdx(openIdx === i ? null : i)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="section-label">Preguntes freqüents</div>
      <h2 className="section-title">Tot el que vols saber</h2>
      <p className="section-sub" style={{ marginBottom: 0 }}>Si tens alguna pregunta que no trobes aquí, escriu-nos directament.</p>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`}>
            <button className="faq-q" onClick={() => toggle(i)}>
              {faq.q}
              <svg className="faq-chevron" viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="faq-a">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
