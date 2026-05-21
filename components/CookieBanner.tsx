'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [cookieModalOpen, setCookieModalOpen] = useState(false)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('serra-cookies')) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem('serra-cookies', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('serra-cookies', 'declined')
    setVisible(false)
  }

  return (
    <>
      <div className={`cookie-banner${visible ? '' : ' hidden'}`} id="cookieBanner">
        <div className="cookie-text">
          <p>
            Utilitzem cookies pròpies i de tercers per millorar la teva experiència. Pots acceptar-les totes o configurar les teves preferències. Consulta la nostra{' '}
            <a onClick={() => setCookieModalOpen(true)} style={{ cursor: 'pointer' }}>Política de Cookies</a>.
          </p>
        </div>
        <div className="cookie-btns">
          <button className="cookie-decline" onClick={decline}>Només essencials</button>
          <button className="cookie-accept" onClick={accept}>Acceptar totes</button>
        </div>
      </div>

      {/* Cookie Modal */}
      <div className={`modal-overlay${cookieModalOpen ? ' open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setCookieModalOpen(false) }}>
        <div className="modal-box">
          <button className="modal-close" onClick={() => setCookieModalOpen(false)}>✕</button>
          <h2>Política de Cookies</h2>
          <p><strong>Darrera actualització:</strong> Abril 2026</p>
          <p>Serra.link, d&apos;acord amb la Llei 34/2002 (LSSICE) i el RGPD, informa sobre l&apos;ús de cookies en aquest lloc web.</p>
          <h3>Què són les cookies?</h3>
          <p>Les cookies són fitxers petits que s&apos;emmagatzemen al teu dispositiu per recordar preferències i millorar la navegació.</p>
          <h3>Tipus de cookies que utilitzem</h3>
          <ul>
            <li><strong>Tècniques (essencials):</strong> Necessàries per al funcionament. No requereixen consentiment.</li>
            <li><strong>Analítiques:</strong> Permeten analitzar el comportament dels visitants (ex. Google Analytics). Requereixen consentiment.</li>
            <li><strong>Preferències:</strong> Guarden preferències com el tema de color. Requereixen consentiment.</li>
          </ul>
          <h3>Com gestionar les cookies</h3>
          <p>Pots acceptar, rebutjar o eliminar les cookies des de la configuració del teu navegador.</p>
          <h3>Contacte</h3>
          <p>Per a consultes: <a href="mailto:jordi@serra.link" style={{ color: 'var(--text)' }}>jordi@serra.link</a></p>
        </div>
      </div>

      {/* Privacy Modal */}
      <div className={`modal-overlay${privacyModalOpen ? ' open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setPrivacyModalOpen(false) }}>
        <div className="modal-box">
          <button className="modal-close" onClick={() => setPrivacyModalOpen(false)}>✕</button>
          <h2>Política de Privacitat</h2>
          <p><strong>Darrera actualització:</strong> Abril 2026</p>
          <h3>Responsable del tractament</h3>
          <p>Jordi Serra — Serra.link | jordi@serra.link | 650 75 23 56</p>
          <h3>Dades que recollim</h3>
          <p>Quan ens contactes recollim: nom, email, empresa (opcional) i el contingut del missatge.</p>
          <h3>Finalitat</h3>
          <ul>
            <li>Respondre les teves consultes.</li>
            <li>Gestionar la relació comercial.</li>
            <li>Millorar els nostres serveis.</li>
          </ul>
          <h3>Base legal</h3>
          <p>El teu consentiment en enviar el formulari i l&apos;interès legítim en gestionar la relació comercial.</p>
          <h3>Els teus drets</h3>
          <p>Accés, rectificació, supressió, oposició i limitació del tractament. Escriu a jordi@serra.link.</p>
        </div>
      </div>
    </>
  )
}
