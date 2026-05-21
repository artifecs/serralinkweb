'use client'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

const projects = [
  {
    tag: 'E-commerce · Esport',
    title: 'Pizarras de Baloncesto',
    desc: "Botiga online especialitzada en pissarres tàctiques i material d'entrenament per a equips i entrenadors de bàsquet de tot Espanya.",
    img: '/assets/projects/pizarrasbaloncesto.png',
    slug: 'pizarras-baloncesto',
    placeholder: 'pizarrasbaloncesto.com',
  },
  {
    tag: 'Corporatiu · Serveis',
    title: 'Surgest',
    desc: 'Web corporativa per a empresa de serveis professionals. Disseny elegant, orientat a la generació de leads i la comunicació de valor de marca.',
    img: '/assets/projects/surgest.png',
    slug: 'surgest',
    placeholder: 'surgest.com',
  },
  {
    tag: 'Enginyeria · Energies Renovables',
    title: 'IEE Sol Enginyeria',
    desc: "Web corporativa per a empresa d'enginyeria especialitzada en energies renovables, instal·lacions fotovoltaiques, auditories energètiques i projectes de sostenibilitat.",
    img: '/assets/projects/ieesol.png',
    slug: 'ieesol',
    placeholder: 'ieesol.com',
  },
  {
    tag: 'E-commerce · Esport',
    title: 'Pizarras Entrenador',
    desc: 'Botiga online de material tàctic per a entrenadors esportius. Catàleg de productes, passarel·la de pagament i gestió de enviaments integrada.',
    img: '/assets/projects/pizarrasentrenador.png',
    slug: 'pizarras-entrenador',
    placeholder: 'pizarrasentrenador.com',
  },
  {
    tag: 'Salut · Corporatiu',
    title: 'Medical Inn',
    desc: "Web per a centre mèdic privat amb presentació de serveis, equip mèdic, formulari de cita prèvia i optimització SEO local per a Barcelona.",
    img: '/assets/projects/medicalinn.png',
    slug: 'medical-inn',
    placeholder: 'medicalinn.net',
  },
  {
    tag: 'E-commerce · Moda · Cultura',
    title: 'Gatamagat.cat',
    desc: 'Botiga online de samarretes i roba catalana amb identitat i sostenibilitat. Disseny net i natural, optimitzat per a mòbil i enfocat a la venda i el posicionament de marca.',
    img: '/assets/projects/gatamagat.svg',
    slug: 'gatamagat',
    placeholder: 'gatamagat.cat',
  },
  {
    tag: 'SaaS · Fiscal · IA',
    title: 'Nintai.cat',
    desc: 'Plataforma de gestió fiscal per a autònoms i pimes catalanes. Factures, despeses, resum trimestral i jul_IA_, assessora virtual en català disponible 24/7.',
    img: '/assets/projects/nintai.svg',
    slug: 'nintai',
    placeholder: 'nintai.cat',
  },
  {
    tag: 'SaaS · Educació · IA',
    title: 'DocentClip.cat',
    desc: 'Plataforma per a docents que transforma notes de veu i entrevistes familiars en transcripcions, resums i informes educatius amb IA, en català.',
    img: '/assets/projects/docentclip.svg',
    slug: 'docentclip',
    placeholder: 'docentclip.cat',
  },
]

export default function ProjectsSlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  function goToSlide(i: number) {
    const track = trackRef.current
    if (!track) return
    const card = track.children[i] as HTMLElement
    if (!card) return
    track.scrollTo({ left: card.offsetLeft - (track.offsetWidth - card.offsetWidth) / 2, behavior: 'smooth' })
    setActiveIdx(i)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const firstCard = track.children[0] as HTMLElement
      if (!firstCard) return
      const cardWidth = firstCard.offsetWidth + 24
      const idx = Math.round(track.scrollLeft / cardWidth)
      setActiveIdx(idx)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  function onMouseDown(e: React.MouseEvent) {
    const track = trackRef.current
    if (!track) return
    isDragging.current = true
    track.classList.add('dragging')
    startX.current = e.pageX - track.offsetLeft
    scrollLeft.current = track.scrollLeft
  }

  function onMouseLeave() {
    isDragging.current = false
    trackRef.current?.classList.remove('dragging')
  }

  function onMouseUp() {
    isDragging.current = false
    trackRef.current?.classList.remove('dragging')
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current) return
    e.preventDefault()
    const track = trackRef.current
    if (!track) return
    const x = e.pageX - track.offsetLeft
    track.scrollLeft = scrollLeft.current - (x - startX.current) * 1.2
  }

  return (
    <section className="projects-section" id="projectes">
      <div className="projects-header">
        <div className="section-label">Projectes realitzats</div>
        <h2 className="section-title">Webs que hem creat</h2>
        <p className="section-sub" style={{ marginBottom: 0 }}>Alguns dels projectes que hem dissenyat, programat i llançat per als nostres clients.</p>
      </div>
      <div className="projects-track-wrap">
        <div
          className="projects-track"
          id="projectsTrack"
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-img">
                <div className="project-img-placeholder">
                  <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                  <span>{p.placeholder}</span>
                </div>
                <img src={p.img} alt={p.title} className="project-screenshot" loading="lazy" />
              </div>
              <div className="project-body">
                <span className="project-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <Link href={`/projecte/${p.slug}`} className="project-link">
                  Veure projecte{' '}
                  <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-dots" id="sliderDots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`slider-dot${activeIdx === i ? ' active' : ''}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </section>
  )
}
