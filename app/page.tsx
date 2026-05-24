import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FaqSection from '@/components/FaqSection'
import ContactForm from '@/components/ContactForm'
import ProjectsSlider from '@/components/ProjectsSlider'
import CookieBanner from '@/components/CookieBanner'
import FloatingCtas from '@/components/FloatingCtas'
import ScrollReveal from '@/components/ScrollReveal'
import HeroPhoneAnimation from '@/components/HeroPhoneAnimation'
import HeroCanvas from '@/components/HeroCanvas'

export const metadata: Metadata = {
  title: 'Serra.link — Experts en creació de pàgines web i programació',
  description: "Més de 20 anys d'experiència en disseny web, programació i màrqueting digital. Pàgines web a Cardedeu i Vilamajor.",
}

const WA_URL = "https://wa.me/34650752356?text=Hola%2C%20m%27agradaria%20m%C3%A9s%20informaci%C3%B3%20sobre%20els%20vostres%20serveis%20web."

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroPhoneAnimation />
      <HeroCanvas />
      <section className="hero-wrapper">
        <canvas className="hero-canvas" id="heroCanvas"></canvas>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>

        <svg className="hero-fractal" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="frac3" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#fff" strokeWidth="0.7" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="#fff" strokeWidth="0.55" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="#fff" strokeWidth="0.4" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="#fff" strokeWidth="0.3" />
              <circle cx="100" cy="100" r="12" fill="none" stroke="#fff" strokeWidth="0.2" />
              <line x1="10" y1="100" x2="190" y2="100" stroke="#fff" strokeWidth="0.3" />
              <line x1="100" y1="10" x2="100" y2="190" stroke="#fff" strokeWidth="0.3" />
              <line x1="27" y1="27" x2="173" y2="173" stroke="#fff" strokeWidth="0.2" />
              <line x1="173" y1="27" x2="27" y2="173" stroke="#fff" strokeWidth="0.2" />
            </pattern>
            <pattern id="frac1" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <polygon points="60,5 115,35 115,85 60,115 5,85 5,35" fill="none" stroke="#fff" strokeWidth="0.7" />
              <polygon points="60,20 98,42 98,78 60,100 22,78 22,42" fill="none" stroke="#fff" strokeWidth="0.4" />
              <polygon points="60,35 84,49 84,71 60,85 36,71 36,49" fill="none" stroke="#fff" strokeWidth="0.25" />
            </pattern>
          </defs>
          <rect width="1200" height="700" fill="url(#frac3)" />
          <rect width="1200" height="700" fill="url(#frac1)" opacity="0.45" />
        </svg>

        <div className="hero">
          <div>
            <div className="hero-badge"><span className="badge-dot"></span>Disponibles per al teu projecte</div>
            <h1>Creem webs que fan<br /><em>créixer</em> el teu<br />negoci</h1>
            <p>Més de 20 anys dissenyant, programant i posicionant pàgines web que converteixen visitants en clients. De tu a tu, amb resultats reals.</p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', marginTop: '-16px' }}>Auditem el teu projecte a internet</p>
            <div className="hero-btns">
              <a href="/auditoria" className="btn-hero-primary">Comença el teu projecte</a>
              <a href={WA_URL} target="_blank" rel="noopener" className="btn-hero-secondary">Contacte</a>
            </div>
          </div>

          {/* iPhone 15 Pro Mockup */}
          <div className="hero-visual" id="heroVisual">
            <div className="iphone-floater" id="iphoneFloater">
              <div className="iphone-frame">
                {/* Titanium shine — GSAP sweeps this on scroll */}
                <div className="iphone-shine" aria-hidden="true"></div>
                <div className="iphone-island"></div>
                <div className="iphone-screen">
                  <div className="iphone-statusbar">
                    <span className="iphone-time">9:41</span>
                    <div className="iphone-icons">
                      <div className="iphone-signal">
                        <span></span><span></span><span></span><span></span>
                      </div>
                      <svg className="iphone-wifi" viewBox="0 0 13 10" fill="none">
                        <path d="M6.5 7.5a1 1 0 110 2 1 1 0 010-2z" fill="#fff" />
                        <path d="M3.5 5.5a4.5 4.5 0 017 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                        <path d="M1 3a8 8 0 0111 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                      </svg>
                      <div className="iphone-batt"><div className="iphone-batt-fill"></div></div>
                    </div>
                  </div>

                  <div className="iphone-nav">
                    <div className="iphone-nav-logo">Serra<span>.link</span></div>
                    <div className="iphone-hamburger"><span></span><span></span><span></span></div>
                  </div>

                  <div className="iphone-content">
                    <div className="iphone-status">
                      <span className="iphone-dot"></span>
                      Disponibles per al teu projecte
                    </div>
                    <div className="iphone-stats-row">
                      <div className="iphone-stat-box">
                        <div className="iphone-stat-num">+20</div>
                        <div className="iphone-stat-label">Anys d&apos;experiència</div>
                      </div>
                      <div className="iphone-stat-box">
                        <div className="iphone-stat-num">100%</div>
                        <div className="iphone-stat-label">Entenem el teu projecte</div>
                      </div>
                    </div>
                    <div className="iphone-services">
                      <div className="iphone-service-row">
                        <div className="iphone-service-icon">
                          <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                        </div>
                        <div className="iphone-service-text">
                          <div className="iphone-service-name">Disseny Web</div>
                          <div className="iphone-service-desc">Modern, atractiu i funcional</div>
                        </div>
                        <span className="iphone-tag iphone-tag-g">Actiu</span>
                      </div>
                      <div className="iphone-service-row">
                        <div className="iphone-service-icon">
                          <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>
                        </div>
                        <div className="iphone-service-text">
                          <div className="iphone-service-name">E-commerce</div>
                          <div className="iphone-service-desc">WooCommerce a mida</div>
                        </div>
                        <span className="iphone-tag iphone-tag-g">Llest</span>
                      </div>
                      <div className="iphone-service-row">
                        <div className="iphone-service-icon">
                          <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                        </div>
                        <div className="iphone-service-text">
                          <div className="iphone-service-name">Màrqueting Digital</div>
                          <div className="iphone-service-desc">SEO i xarxes socials</div>
                        </div>
                        <span className="iphone-tag iphone-tag-b">Estratègia</span>
                      </div>
                      <div className="iphone-service-row">
                        <div className="iphone-service-icon">
                          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                        </div>
                        <div className="iphone-service-text">
                          <div className="iphone-service-name">Intel·ligència Artificial</div>
                          <div className="iphone-service-desc">Chatbots i automatització</div>
                        </div>
                        <span className="iphone-tag iphone-tag-p">Nou</span>
                      </div>
                    </div>
                  </div>

                  <div className="iphone-home-bar"><span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR — first content after hero, skip-link target */}
      <div id="main-content" className="trust-bar">
        <div className="trust-item"><span>✦</span> Disseny web professional</div>
        <div className="trust-item"><span>✦</span> Programació a mida</div>
        <div className="trust-item"><span>✦</span> E-commerce WooCommerce</div>
        <div className="trust-item"><span>✦</span> Màrqueting digital</div>
        <div className="trust-item"><span>✦</span> Intel·ligència Artificial</div>
      </div>

      {/* PROCESS */}
      <ScrollReveal>
      <div className="section process-section-wrap">
        <div className="process-layout">
          <div className="process-left">
            <div className="section-label reveal">Com treballem</div>
            <h2 className="section-title reveal reveal-delay-1">Un procés senzill,<br />resultats excepcionals</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '48px' }}>Cada projecte segueix una metodologia clara on la comunicació és la clau de tot.</p>
            <div className="steps-list">
              <div className="step-item">
                <div className="step-bullet">01</div>
                <div>
                  <h3 className="step-h3">Escoltem</h3>
                  <p className="step-p">Comencem per entendre el teu negoci, els teus objectius i el teu públic. Cada projecte és únic i el tractem com a tal.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-bullet">02</div>
                <div>
                  <h3 className="step-h3">Proposem</h3>
                  <p className="step-p">Dissenyem la solució digital més adequada: web, botiga online, estratègia de continguts o campanya digital.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-bullet">03</div>
                <div>
                  <h3 className="step-h3">Actuem</h3>
                  <p className="step-p">Executem amb eficiència i professionalitat. T&apos;impliquem en tot el procés i t&apos;entreguem un producte que funciona.</p>
                </div>
              </div>
            </div>
          </div>

          {/* MacBook */}
          <div className="macbook-wrap">
            <div className="macbook">
              <div className="macbook-screen">
                <div className="macbook-inner">
                  <div className="macbook-bar">
                    <div className="macbook-dots">
                      <span className="mac-dot" style={{ background: '#ff5f56' }}></span>
                      <span className="mac-dot" style={{ background: '#ffbd2e' }}></span>
                      <span className="mac-dot" style={{ background: '#27c93f' }}></span>
                    </div>
                    <div className="macbook-url">serra.link — creixement</div>
                  </div>
                  <div className="macbook-content">
                    <div className="chart-header">
                      <div>
                        <div className="chart-label">Visites orgàniques</div>
                        <div className="chart-val" id="chartVal">+247%</div>
                      </div>
                      <div className="chart-badge" id="chartBadge">↑ Creixent</div>
                    </div>
                    <svg id="growthChart" className="growth-chart" viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00D9A3" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#00D9A3" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#00b389" />
                          <stop offset="100%" stopColor="#00D9A3" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="26" x2="320" y2="26" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      <line x1="0" y1="52" x2="320" y2="52" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      <line x1="0" y1="78" x2="320" y2="78" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      <line x1="0" y1="104" x2="320" y2="104" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      <path d="M0,110 L40,100 L80,90 L110,80 L140,65 L170,50 L200,38 L230,28 L265,18 L300,10 L320,6 L320,130 L0,130 Z" fill="url(#chartGrad)" />
                      <path d="M0,110 L40,100 L80,90 L110,80 L140,65 L170,50 L200,38 L230,28 L265,18 L300,10 L320,6" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="320" cy="6" r="5" fill="#00D9A3" />
                      <circle cx="320" cy="6" r="3" fill="#fff" />
                      <text x="0" y="128" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="Inter,sans-serif">Gen</text>
                      <text x="75" y="128" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="Inter,sans-serif">Mar</text>
                      <text x="155" y="128" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="Inter,sans-serif">Jun</text>
                      <text x="235" y="128" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="Inter,sans-serif">Set</text>
                      <text x="300" y="128" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="Inter,sans-serif">Des</text>
                    </svg>
                    <div className="chart-stats-row">
                      <div className="chart-stat"><div className="chart-stat-num">12.4K</div><div className="chart-stat-lbl">Visites/mes</div></div>
                      <div className="chart-stat"><div className="chart-stat-num">3.2%</div><div className="chart-stat-lbl">Conversió</div></div>
                      <div className="chart-stat"><div className="chart-stat-num">#1</div><div className="chart-stat-lbl">Posició SEO</div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="macbook-hinge"></div>
              <div className="macbook-base">
                <div className="macbook-notch-base"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>

      {/* SERVICES */}
      <section className="services-section" id="serveis">
        <div className="services-inner">
          <ScrollReveal>
          <div className="section-label reveal">Serveis</div>
          <h2 className="section-title reveal reveal-delay-1">Tot el que necessites<br />per créixer online</h2>
          <p className="section-sub reveal reveal-delay-2" style={{ marginBottom: '50px' }}>Des del disseny fins al llançament i més enllà.</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
              <h3>Disseny Web</h3>
              <p>Pàgines web modernes, atractives i funcionals que reflecteixen la identitat de la teva marca i connecten amb els teus clients.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg></div>
              <h3>Programació</h3>
              <p>Solucions web personalitzades amb més de 20 anys d&apos;experiència. Codi net, eficient i escalable per a qualsevol necessitat.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg></div>
              <h3>E-commerce</h3>
              <p>Botigues online amb WooCommerce. Des del disseny fins la passarel·la de pagament, tot llest per vendre des del primer dia.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" /></svg></div>
              <h3>Responsive Design</h3>
              <p>Totes les nostres webs s&apos;adapten perfectament a mòbils i tablets. L&apos;experiència d&apos;usuari és la nostra màxima prioritat.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg></div>
              <h3>Màrqueting Digital</h3>
              <p>Estratègies en xarxes socials i SEO per arribar als teus futurs clients i fer créixer el teu negoci online de forma constant.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" /></svg></div>
              <h3>Gestió Autònoma</h3>
              <p>Et dotem d&apos;eines per gestionar la teva web quan vulguis. La fem totalment usable i fàcil d&apos;actualitzar sense coneixements tècnics.</p>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PROJECTS SLIDER (client component) */}
      <ProjectsSlider />

      {/* ECOMMERCE */}
      <section className="ecommerce-section">
        <svg className="ecommerce-bg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="ecfrac" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <circle cx="75" cy="75" r="65" fill="none" stroke="#fff" strokeWidth="0.6" />
              <circle cx="75" cy="75" r="45" fill="none" stroke="#fff" strokeWidth="0.4" />
              <circle cx="75" cy="75" r="25" fill="none" stroke="#fff" strokeWidth="0.3" />
              <line x1="10" y1="75" x2="140" y2="75" stroke="#fff" strokeWidth="0.3" />
              <line x1="75" y1="10" x2="75" y2="140" stroke="#fff" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#ecfrac)" />
        </svg>
        <div className="ecommerce-inner">
          <div>
            <div className="section-label">Especialitat</div>
            <h2 className="section-title">Experts en<br />e-commerce a mida</h2>
            <p>Desenvolupem aplicacions de comerç electrònic completament personalitzades. Des de botigues online bàsiques fins a plataformes complexes amb integracions avançades, lògiques d&apos;estoc personalitzades i experiències de compra úniques.</p>
            <p>Treballem amb WooCommerce, PrestaShop i solucions a mida en PHP/MySQL adaptades exactament a les necessitats del teu negoci.</p>
            <a href="#contact" className="btn-ecommerce">Parlem del teu e-commerce</a>
          </div>
          <div className="ecommerce-features">
            <div className="ecommerce-feat">
              <div className="ecommerce-feat-icon"><svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg></div>
              <div><h4>Botigues WooCommerce</h4><p>Configuració completa: productes, variacions, estoc, enviaments i passarel·les de pagament.</p></div>
            </div>
            <div className="ecommerce-feat">
              <div className="ecommerce-feat-icon"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg></div>
              <div><h4>Desenvolupament a mida</h4><p>Plugins i funcionalitats personalitzades que cap plataforma estàndard pot oferir-te.</p></div>
            </div>
            <div className="ecommerce-feat">
              <div className="ecommerce-feat-icon"><svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg></div>
              <div><h4>Passarel·les de pagament</h4><p>Integració amb Stripe, PayPal, Redsys i qualsevol altre sistema de pagament.</p></div>
            </div>
            <div className="ecommerce-feat">
              <div className="ecommerce-feat-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg></div>
              <div><h4>Analítica i conversió</h4><p>Seguiment de vendes, embuts de conversió i optimització del rendiment de la botiga.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section className="ai-section" id="ia">
        <ScrollReveal>
        <div className="ai-inner">
          <div>
            <div className="section-label reveal">Nova era digital</div>
            <h2 className="section-title reveal reveal-delay-1">Treballem amb<br />Intel·ligència Artificial</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '20px' }}>La IA ha transformat la manera de crear i gestionar presències digitals. Integrem les últimes eines per oferir resultats més ràpids, intel·ligents i efectius per al teu negoci.</p>
            <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '32px' }}>Des de la generació de continguts fins a l&apos;optimització SEO automàtica, passant per chatbots i assistents virtuals a mida.</p>
            <a href="#contact" className="btn-primary">Explora les possibilitats</a>
          </div>
          <div className="ai-cards">
            <div className="ai-card">
              <div className="ai-card-icon"><svg viewBox="0 0 24 24"><path d="M12 2a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2z" /><path d="M12 16a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2v-2a2 2 0 012-2z" /><path d="M4 10a2 2 0 012-2h2a2 2 0 010 4H6a2 2 0 01-2-2z" /><path d="M16 10a2 2 0 012-2h2a2 2 0 010 4h-2a2 2 0 01-2-2z" /></svg></div>
              <div><h4>Creació de continguts amb IA</h4><p>Textos optimitzats per SEO generats i revisats amb IA per posicionar millor la teva web.</p></div>
            </div>
            <div className="ai-card">
              <div className="ai-card-icon"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg></div>
              <div><h4>Chatbots i assistents virtuals</h4><p>Atenció al client automatitzada 24/7 per a la teva web o botiga online.</p></div>
            </div>
            <div className="ai-card">
              <div className="ai-card-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></div>
              <div><h4>SEO intel·ligent</h4><p>Anàlisi automàtica de paraules clau, competència i oportunitats de posicionament local.</p></div>
            </div>
            <div className="ai-card">
              <div className="ai-card-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg></div>
              <div><h4>Automatització de processos</h4><p>Connectem la teva web amb eines i fluxos de treball automatitzats per estalviar temps.</p></div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* PRODUCTES PROPIS */}
      <section className="products-section">
        <div className="products-inner">
          <ScrollReveal>
          <div className="products-header">
            <div className="section-label reveal">Projectes propis</div>
            <h2 className="section-title">SaaS que hem<br />construït nosaltres</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.75, maxWidth: '560px', marginTop: '16px' }}>A més de crear webs per a clients, desenvolupem les nostres pròpies plataformes digitals. Dos exemples del que som capaços de construir.</p>
          </div>
          <div className="products-grid">
            <div className="product-card nintai">
              <img className="product-img" src="/img/nintai.png" alt="Captura de Nintai.cat — gestió fiscal per a autònoms" />
              <div className="product-body">
                <span className="product-tag green">SaaS · Gestió Fiscal · IA</span>
                <h3>Nintai.cat</h3>
                <p>Plataforma de gestió fiscal per a autònoms i petites empreses de parla catalana. Factures, despeses, resums trimestrals i jul_IA_, l&apos;assessora virtual disponible 24/7.</p>
                <ul className="product-features">
                  <li>Facturació i control de despeses</li>
                  <li>Resum fiscal trimestral automàtic</li>
                  <li>jul_IA_ — assessora virtual en català</li>
                  <li>Flux de caixa en temps real</li>
                </ul>
                <div className="product-price">Des de <strong>7,99 €</strong>/mes · 7 dies de prova gratuïts</div>
                <a className="product-link green" href="https://www.nintai.cat" target="_blank" rel="noopener">Descobrir Nintai.cat →</a>
              </div>
            </div>
            <div className="product-card docentclip">
              <img className="product-img" src="/img/docentclip.png" alt="Captura de DocentClip.cat — plataforma per a docents" />
              <div className="product-body">
                <span className="product-tag indigo">SaaS · EdTech · IA</span>
                <h3>DocentClip.cat</h3>
                <p>Plataforma per a docents de Catalunya que transforma notes de veu, observacions d&apos;aula i entrevistes familiars en informes educatius llestos per compartir.</p>
                <ul className="product-features">
                  <li>Transcripció automàtica per IA</li>
                  <li>Generació d&apos;informes editables en PDF</li>
                  <li>Entrevistes de fins a 30 minuts</li>
                  <li>Calendari mensual i etiquetes</li>
                </ul>
                <div className="product-price">Preu únic de <strong>6,90 €</strong>/mes · 5 dies de prova gratuïts</div>
                <a className="product-link indigo" href="https://www.docentclip.cat" target="_blank" rel="noopener">Descobrir DocentClip.cat →</a>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STATS / NOSALTRES */}
      <ScrollReveal>
      <section className="stats-section" id="nosaltres">
        <div className="stats-big">
          <div className="stat-block"><div className="num">+20</div><div className="desc">Anys d&apos;experiència a Internet</div></div>
          <div className="stat-block"><div className="num">100%</div><div className="desc">Clients que tornen a confiar</div></div>
          <div className="stat-block"><div className="num">∞</div><div className="desc">Dedicació i suport al teu projecte</div></div>
        </div>
        <div className="stats-text">
          <div className="section-label reveal">Nosaltres</div>
          <h2 className="section-title reveal reveal-delay-1">Experiència que<br />es nota</h2>
          <p>Hem ajudat a desenes d&apos;empreses a créixer i consolidar la seva presència online. Treballem de tu a tu, amb una comunicació activa i transparent en tot moment.</p>
          <p>No som una agència gran ni anònima. Cada projecte rep la nostra atenció total perquè cada client és important per a nosaltres.</p>
          <a href="#contact" className="btn-primary">Explica&apos;ns el teu projecte</a>
        </div>
      </section>
      </ScrollReveal>

      {/* MARKETING SECTION */}
      <section className="marketing-section" id="marketing">
        <ScrollReveal>
        <div className="marketing-inner">
          <div>
            <div className="section-label reveal">Màrqueting Online</div>
            <h2 className="section-title reveal reveal-delay-1">Fem créixer<br />el teu negoci<br />a les xarxes</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '16px' }}>Gestionem la teva presència digital de cap a peus: xarxes socials, publicitat, SEO i sistemes CRM per captar clients nous cada mes.</p>
            <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '36px' }}>Des d&apos;estratègies de continguts a campanyes de paid media, t&apos;ajudem a convertir seguidors en clients i a mesurar cada resultat.</p>
            <div className="mktg-features">
              <div className="mktg-feat">
                <div className="mktg-feat-icon" style={{ background: 'linear-gradient(135deg,#e1306c,#f77737)' }}>
                  <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" /></svg>
                </div>
                <div>
                  <h4>Gestió de Xarxes Socials</h4>
                  <p>Instagram, Facebook, LinkedIn i TikTok. Contingut professional, calendari editorial i creixement orgànic constant.</p>
                </div>
              </div>
              <div className="mktg-feat">
                <div className="mktg-feat-icon" style={{ background: 'linear-gradient(135deg,#1877f2,#0ea5e9)' }}>
                  <svg viewBox="0 0 24 24"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-11 9H8V7h2v4zm4 0h-2V7h2v4z" /></svg>
                </div>
                <div>
                  <h4>Publicitat Online (Ads)</h4>
                  <p>Campanyes a Google Ads, Meta Ads i LinkedIn Ads optimitzades per maximitzar el retorn de la inversió.</p>
                </div>
              </div>
              <div className="mktg-feat">
                <div className="mktg-feat-icon" style={{ background: 'linear-gradient(135deg,#0f9d58,#34d399)' }}>
                  <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                </div>
                <div>
                  <h4>CRM i Generació de Leads</h4>
                  <p>Implementem sistemes CRM per capturar, qualificar i gestionar leads automàticament. Més vendes, menys feina manual.</p>
                </div>
              </div>
              <div className="mktg-feat">
                <div className="mktg-feat-icon" style={{ background: 'linear-gradient(135deg,#7c3aed,#00D9A3)' }}>
                  <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                </div>
                <div>
                  <h4>Analítica i Reporting</h4>
                  <p>Informes mensuals clars amb les mètriques que importen: visites, leads generats, conversions i ROI de cada canal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* MacBook visual with floating social icons */}
          <div className="marketing-visual">
            <div className="social-orb" style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', top: '2%', left: '2%', animationDelay: '0s' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" /></svg>
            </div>
            <div className="social-orb" style={{ width: '48px', height: '48px', background: '#1877f2', top: '8%', right: '4%', animationDelay: '0.8s' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            </div>
            <div className="social-orb" style={{ width: '50px', height: '50px', background: '#0077b5', top: '50%', left: '-2%', animationDelay: '1.5s', transform: 'translateY(-50%)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
            </div>
            <div className="social-orb" style={{ width: '46px', height: '46px', background: '#010101', top: '70%', right: '2%', animationDelay: '2.2s' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.77 1.52V7.12a4.85 4.85 0 01-1-.43z" /></svg>
            </div>
            <div className="social-orb" style={{ width: '44px', height: '44px', background: '#fff', top: '85%', left: '12%', animationDelay: '0.4s' }}>
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
            <div className="social-orb" style={{ width: '48px', height: '48px', background: '#25d366', top: '30%', right: '-1%', animationDelay: '1.1s' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.885a.5.5 0 00.608.63l6.256-1.641A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.88 9.88 0 01-5.042-1.383l-.361-.214-3.741.981.998-3.648-.235-.374A9.862 9.862 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" /></svg>
            </div>

            <div className="mktg-macbook">
              <div className="mktg-mac-screen">
                <div className="mktg-mac-inner">
                  <div className="mktg-mac-bar">
                    <div className="mktg-mac-dots">
                      <span className="mktg-mac-dot" style={{ background: '#ff5f56' }}></span>
                      <span className="mktg-mac-dot" style={{ background: '#ffbd2e' }}></span>
                      <span className="mktg-mac-dot" style={{ background: '#27c93f' }}></span>
                    </div>
                    <div className="mktg-mac-url">serra.link — dashboard màrqueting</div>
                  </div>
                  <div className="mktg-mac-content">
                    <div className="mktg-chart-title">Leads generats aquest mes</div>
                    <div className="mktg-chart-val">1.284 <span>↑ +38%</span></div>
                    <div className="mktg-bars" id="mktgBars">
                      <div className="mktg-bar-wrap"><div className="mktg-bar" style={{ height: '35%' }}></div><div className="mktg-bar-lbl">Gen</div></div>
                      <div className="mktg-bar-wrap"><div className="mktg-bar" style={{ height: '42%' }}></div><div className="mktg-bar-lbl">Feb</div></div>
                      <div className="mktg-bar-wrap"><div className="mktg-bar" style={{ height: '50%' }}></div><div className="mktg-bar-lbl">Mar</div></div>
                      <div className="mktg-bar-wrap"><div className="mktg-bar" style={{ height: '46%' }}></div><div className="mktg-bar-lbl">Abr</div></div>
                      <div className="mktg-bar-wrap"><div className="mktg-bar" style={{ height: '63%' }}></div><div className="mktg-bar-lbl">Mai</div></div>
                      <div className="mktg-bar-wrap"><div className="mktg-bar" style={{ height: '72%' }}></div><div className="mktg-bar-lbl">Jun</div></div>
                      <div className="mktg-bar-wrap"><div className="mktg-bar" style={{ height: '68%' }}></div><div className="mktg-bar-lbl">Jul</div></div>
                      <div className="mktg-bar-wrap"><div className="mktg-bar" style={{ height: '80%' }}></div><div className="mktg-bar-lbl">Ago</div></div>
                      <div className="mktg-bar-wrap"><div className="mktg-bar" style={{ height: '88%' }}></div><div className="mktg-bar-lbl">Set</div></div>
                      <div className="mktg-bar-wrap"><div className="mktg-bar" style={{ height: '95%' }}></div><div className="mktg-bar-lbl">Oct</div></div>
                      <div className="mktg-bar-wrap"><div className="mktg-bar" style={{ height: '90%' }}></div><div className="mktg-bar-lbl">Nov</div></div>
                      <div className="mktg-bar-wrap"><div className="mktg-bar" style={{ height: '100%', background: 'linear-gradient(180deg,#4ade80,#22c55e)' }}></div><div className="mktg-bar-lbl" style={{ color: '#4ade80', fontWeight: 700 }}>Des</div></div>
                    </div>
                    <div className="mktg-kpi-row">
                      <div className="mktg-kpi"><div className="mktg-kpi-num">48K</div><div className="mktg-kpi-lbl">Abast total</div></div>
                      <div className="mktg-kpi"><div className="mktg-kpi-num">6.2%</div><div className="mktg-kpi-lbl">Engagement</div></div>
                      <div className="mktg-kpi"><div className="mktg-kpi-num">3.1×</div><div className="mktg-kpi-lbl">ROAS Ads</div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mktg-mac-hinge"></div>
              <div className="mktg-mac-base"></div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* LOCAL SEO */}
      <section className="local-section" aria-label="Pàgines web locals">
        <ScrollReveal>
        <div className="local-inner">
          <div className="local-block reveal">
            <span className="local-tag">Cardedeu · Vallès Oriental</span>
            <h3>Pàgines web a Cardedeu</h3>
            <p>Si tens un negoci a Cardedeu i vols tenir presència a Internet, som el teu soci digital de confiança. Creem pàgines web professionals per a comerços, serveis i empreses locals.</p>
            <p>Coneixem el mercat local. Una web que parla directament als teus clients i que apareix als resultats de cerca quan et busquen.</p>
          </div>
          <div className="local-block reveal reveal-delay-1">
            <span className="local-tag">Sant Pere i Sant Antoni de Vilamajor</span>
            <h3>Pàgines web a Vilamajor</h3>
            <p>Treballem amb empreses i autònoms de Vilamajor que volen donar el salt digital. Una web ben feta és la millor carta de presentació per als teus clients potencials.</p>
            <p>Dissenyem, programem i posicionem la teva pàgina web perquè apareguis als resultats de cerca a la zona.</p>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* FAQ (client component) */}
      <FaqSection />

      {/* CONTACT */}
      <section id="contact">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 5% 0' }}>
          <div className="contact-header">
            <div className="section-label">Contacte</div>
            <h2 className="section-title">Parlem del teu projecte</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>Escriu-nos i t&apos;atenem en breu. Sense compromisos, amb molta il·lusió.</p>
          </div>
          <div className="contact-grid" style={{ paddingBottom: '100px' }}>
            <ContactForm />
            <div className="contact-info">
              <h3>Estem aquí per ajudar-te</h3>
              <p>Treballem amb empreses de totes les mides. Tant si estàs començant com si vols renovar la teva presència digital, t&apos;ajudem a aconseguir-ho.</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div>
                  <a href="mailto:jordi@serra.link">jordi@serra.link</a>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg></div>
                  <a href="tel:+34650752356">650 75 23 56</a>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                  <span>Resposta en menys de 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="cta-section">
        <div className="cta-box">
          <div>
            <h2>Preparat per donar el salt digital?</h2>
            <p>Junts construirem la presència online que el teu negoci mereix. Contacta&apos;ns avui i comencem.</p>
          </div>
          <div className="cta-contact">
            <a href="mailto:jordi@serra.link" className="btn-primary">Envia&apos;ns un email</a>
            <span className="cta-or">o truca&apos;ns directament</span>
            <a href="tel:+34650752356" className="cta-phone">650 75 23 56</a>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="blog-section">
        <div className="section-inner">
          <div className="section-label">Blog</div>
          <h2 className="section-title">Recursos i consells per al teu negoci digital</h2>
          <p className="section-sub">Articles pràctics sobre disseny web, programació i com fer créixer la teva empresa en línia.</p>
          <div className="blog-grid">
            <Link href="/blog/disseny-pagines-web" className="blog-card">
              <div className="blog-card-tag">Disseny Web</div>
              <h3 className="blog-card-title">Disseny de pàgines web: com crear un lloc que converteixi visitants en clients</h3>
              <p className="blog-card-desc">Un bon disseny web va molt més enllà de l&apos;estètica. Descobreix els principis clau per crear una pàgina que transmeti confiança, sigui fàcil de navegar i generi resultats reals per al teu negoci.</p>
              <span className="blog-card-link">Llegir article →</span>
            </Link>
            <Link href="/blog/programacio-pagines-web" className="blog-card">
              <div className="blog-card-tag">Programació</div>
              <h3 className="blog-card-title">Programació de pàgines web: per què importa la tecnologia que hi ha darrere</h3>
              <p className="blog-card-desc">La programació és l&apos;esquelet invisible que determina si la teva web carrega ràpid, és segura i apareix a Google. T&apos;expliquem tot el que has de saber abans de fer el teu projecte web.</p>
              <span className="blog-card-link">Llegir article →</span>
            </Link>
            <Link href="/blog/fer-creixer-negoci-online" className="blog-card">
              <div className="blog-card-tag">Creixement Digital</div>
              <h3 className="blog-card-title">Com fer créixer el teu negoci amb una pàgina web ben posicionada</h3>
              <p className="blog-card-desc">Tenir una web no és suficient: necessites que et trobin. Coneix les estratègies de SEO local, màrqueting de continguts i conversió per transformar la teva presència digital en clients reals.</p>
              <span className="blog-card-link">Llegir article →</span>
            </Link>
            <Link href="/blog/seo-local-pimes" className="blog-card">
              <div className="blog-card-tag">SEO Local</div>
              <h3 className="blog-card-title">SEO local per a PIMES: com aparèixer a Google Maps i captar clients propers</h3>
              <p className="blog-card-desc">Guia pràctica per millorar la teva visibilitat local: fitxa de Google Business Profile, ressenyes, paraules clau geolocalitzades i accions que et poden portar més contactes reals.</p>
              <span className="blog-card-link">Llegir article →</span>
            </Link>
            <Link href="/blog/nintai-cat-gestio-fiscal-autonoms" className="blog-card">
              <div className="blog-card-tag" style={{ background: 'rgba(74,222,128,0.1)', color: '#4ade80' }}>Projecte propi · Llançament</div>
              <h3 className="blog-card-title">Nintai.cat: la gestió fiscal per a autònoms catalans que esperàveu</h3>
              <p className="blog-card-desc">Hem llançat Nintai.cat, una plataforma SaaS de gestió fiscal amb facturació, control de despeses, resum trimestral automàtic i jul_IA_, una assessora virtual fiscal en català disponible 24/7.</p>
              <span className="blog-card-link">Llegir article →</span>
            </Link>
            <Link href="/blog/docentclip-cat-plataforma-docents-ia" className="blog-card">
              <div className="blog-card-tag" style={{ background: 'rgba(129,140,248,0.1)', color: '#818cf8' }}>Projecte propi · Llançament</div>
              <h3 className="blog-card-title">DocentClip.cat: de la nota de veu a l&apos;informe educatiu en un clic</h3>
              <p className="blog-card-desc">Hem creat DocentClip.cat, la plataforma per a docents de Catalunya que transforma notes de veu i entrevistes familiars en informes educatius llestos per compartir gràcies a la IA.</p>
              <span className="blog-card-link">Llegir article →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERTS EN */}
      <section className="experts-section">
        <div className="experts-inner">
          <p className="experts-label">Som experts en</p>
          <div className="experts-logos">
            <div className="experts-logo-item">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg" alt="WordPress" className="experts-img" width={120} height={34} style={{ height: '34px', width: 'auto' }} />
            </div>
            <div className="experts-logo-item">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg" alt="WooCommerce" className="experts-img" width={120} height={26} style={{ height: '26px', width: 'auto' }} />
            </div>
            <div className="experts-logo-item">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads" className="experts-img" width={120} height={30} style={{ height: '30px', width: 'auto' }} />
            </div>
            <div className="experts-logo-item">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="experts-img" width={120} height={24} style={{ height: '24px', width: 'auto' }} />
            </div>
            <div className="experts-logo-item">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" alt="Claude" className="experts-img" width={120} height={24} style={{ height: '24px', width: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      <CookieBanner />
      <FloatingCtas />
    </>
  )
}
